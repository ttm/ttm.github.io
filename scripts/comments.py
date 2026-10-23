#!/usr/bin/env python3
"""Export comments from GitHub Discussions for the site.

Comments live in the repository's GitHub Discussions. A page's discussion is
started by its first commenter: the page's "Comment on GitHub" button opens
GitHub's new-discussion form with a body that begins "Re: [title](page URL)"
and holds a hidden marker with the page's source path. This script matches
discussions to pages by that marker (or by the "Re:" link, if the marker was
deleted) and writes _data/comments.json: for each page with a discussion,
its URL and the comments, oldest first, as sanitized HTML. The opening post
of a discussion counts as its first comment. _includes/comments.html renders
them after the Disqus comments kept in _data/comments_archive.json.

Usage:
  python3 scripts/comments.py          # write _data/comments.json
  python3 scripts/comments.py --list   # print commentable pages and URLs

Needs PyYAML, and GITHUB_TOKEN (or GH_TOKEN) with read access to
discussions. The "Comments" workflow runs it when discussions change and
daily, and pushes the result.
"""
import datetime
import glob
import html
import json
import os
import re
import sys
import urllib.request
import zoneinfo
from html.parser import HTMLParser

import yaml

REPO = os.environ.get("GITHUB_REPOSITORY", "ttm/ttm.github.io")
OUTPUT = "_data/comments.json"
MARKER = re.compile(r"comments-for: (\S+?)\s*-->")
RE_LINK = re.compile(r"^\s*Re: \[[^\]]*\]\((https?://[^)\s]+)\)")
RE_PARAGRAPH = re.compile(r"^\s*<p[^>]*>\s*Re: <a [^>]*>.*?</a>\s*</p>", re.S)
POST_NAME = re.compile(r"^(\d{4})-(\d{2})-(\d{2})-(.+)\.(md|markdown|html)$")


# Pages that take comments ------------------------------------------------

def front_matter(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    if not text.startswith("---"):
        return None
    end = text.find("\n---", 3)
    return yaml.safe_load(text[3:end]) or {} if end != -1 else None


def as_list(value):
    if value is None:
        return []
    if isinstance(value, str):
        return value.split()
    return [str(v) for v in value]


def parse_date(value):
    # PyYAML leaves offsets without a colon ("+0200") as strings; Jekyll parses them.
    if not isinstance(value, str):
        return value
    for fmt in ("%Y-%m-%d %H:%M:%S %z", "%Y-%m-%d %H:%M %z", "%Y-%m-%d %H:%M:%S", "%Y-%m-%d %H:%M"):
        try:
            return datetime.datetime.strptime(value.strip(), fmt)
        except ValueError:
            pass
    return None


def post_url(path, data, zone):
    """The URL Jekyll gives a post: /:categories/:year/:month/:day/:title.html."""
    if data.get("permalink"):
        return data["permalink"]
    m = POST_NAME.match(os.path.basename(path))
    when = parse_date(data.get("date"))
    if isinstance(when, datetime.datetime):
        day = (when.astimezone(zone) if when.tzinfo else when).date()
    elif isinstance(when, datetime.date):
        day = when
    else:
        day = datetime.date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
    categories = []
    for c in as_list(data.get("categories")) + as_list(data.get("category")):
        if c.lower() not in categories:
            categories.append(c.lower())
    slug = str(data.get("slug") or m.group(4))
    parts = categories + ["%04d" % day.year, "%02d" % day.month, "%02d" % day.day]
    return "/" + "/".join(parts) + "/" + slug + ".html"


def commentable_pages():
    """[(path, title, url)] for every page that shows a comments section."""
    with open("_config.yml", encoding="utf-8") as f:
        config = yaml.safe_load(f)
    zone = zoneinfo.ZoneInfo(config.get("timezone") or "UTC")
    pages = []
    for path in sorted(glob.glob("_posts/*")):
        data = front_matter(path)
        if not data or not POST_NAME.match(os.path.basename(path)):
            continue
        if data.get("published") is False or data.get("comments") is False:
            continue
        if data.get("layout") not in ("post", "article"):
            continue  # the impress.js decks have no comments
        pages.append((path, str(data.get("title") or path), post_url(path, data, zone)))
    for path in sorted(glob.glob("*.md") + glob.glob("*.html")):
        data = front_matter(path)
        if data and data.get("comments") is True and data.get("layout") == "page":
            url = data.get("permalink") or "/" + os.path.splitext(path)[0] + ".html"
            pages.append((path, str(data.get("title") or path), url))
    return pages


# GitHub API ----------------------------------------------------------------

def graphql(query, **variables):
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    request = urllib.request.Request(
        "https://api.github.com/graphql",
        data=json.dumps({"query": query, "variables": variables}).encode(),
        headers={"Authorization": "bearer " + token, "Content-Type": "application/json"})
    with urllib.request.urlopen(request, timeout=60) as response:
        result = json.load(response)
    if result.get("errors"):
        raise RuntimeError(json.dumps(result["errors"], indent=1))
    return result["data"]


COMMENT_FIELDS = "databaseId url createdAt isMinimized bodyHTML author { login url }"

DISCUSSIONS_QUERY = """
query($owner: String!, $name: String!, $after: String) {
  repository(owner: $owner, name: $name) {
    discussions(first: 10, after: $after, orderBy: {field: CREATED_AT, direction: ASC}) {
      pageInfo { hasNextPage endCursor }
      nodes {
        databaseId url createdAt body bodyHTML author { login url }
        comments(first: 100) {
          totalCount
          nodes { %s replies(first: 100) { totalCount nodes { %s } } }
        }
      }
    }
  }
}""" % (COMMENT_FIELDS, COMMENT_FIELDS)


def all_discussions():
    owner, name = REPO.split("/")
    after = None
    while True:
        page = graphql(DISCUSSIONS_QUERY, owner=owner, name=name, after=after)
        found = page["repository"]["discussions"]
        for discussion in found["nodes"]:
            yield discussion
        if not found["pageInfo"]["hasNextPage"]:
            return
        after = found["pageInfo"]["endCursor"]


# Comment HTML ----------------------------------------------------------------

class Sanitizer(HTMLParser):
    """Keep a small set of formatting tags from GitHub's rendered comments."""

    ALLOWED = {"p", "br", "hr", "a", "em", "strong", "b", "i", "del", "s", "code", "pre", "kbd",
               "blockquote", "ul", "ol", "li", "table", "thead", "tbody", "tr", "th", "td",
               "sup", "sub", "details", "summary"}
    VOID = {"br", "hr"}
    DROP = {"script", "style", "iframe", "object", "embed", "template", "svg", "math", "form",
            "button", "textarea", "select"}
    HEADINGS = {"h1", "h2", "h3", "h4", "h5", "h6"}

    def __init__(self, link):
        super().__init__(convert_charrefs=True)
        self.link = link  # where readers can see what was dropped (images)
        self.out = []
        self.open = []
        self.skip = 0

    def handle_starttag(self, tag, attrs):
        if tag in self.DROP:
            self.skip += 1
            return
        if self.skip:
            return
        attrs = dict(attrs)
        if tag in self.HEADINGS:
            self.out.append("<p><strong>")
            self.open.append(tag)
        elif tag == "img":
            # Uploaded images have expiring URLs; link to the comment instead.
            if "a" in self.open:
                self.out.append("[image]")
            else:
                self.out.append('<a href="%s">[image]</a>' % html.escape(self.link))
        elif tag == "a":
            href = attrs.get("href") or ""
            if "user-images.githubusercontent.com" in href or not re.match(r"(https?:|mailto:|#)", href):
                return  # unwrap: keep the text, drop the link
            self.out.append('<a href="%s" rel="nofollow ugc noopener">' % html.escape(href))
            self.open.append(tag)
        elif tag in self.ALLOWED:
            start = attrs.get("start") if tag == "ol" else None
            self.out.append("<%s%s>" % (tag, ' start="%d"' % int(start) if start and start.isdigit() else ""))
            if tag not in self.VOID:
                self.open.append(tag)

    def handle_startendtag(self, tag, attrs):
        if tag not in self.DROP:  # a self-closed <svg/> has nothing to skip
            self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        if tag in self.DROP:
            self.skip = max(0, self.skip - 1)
            return
        if self.skip or tag not in self.open:
            return
        while self.open:
            last = self.open.pop()
            self.out.append("</strong></p>" if last in self.HEADINGS else "</%s>" % last)
            if last == tag:
                break

    def handle_data(self, data):
        if not self.skip:
            self.out.append(html.escape(data, quote=False))

    def result(self):
        self.close()
        while self.open:
            last = self.open.pop()
            self.out.append("</strong></p>" if last in self.HEADINGS else "</%s>" % last)
        return "".join(self.out).strip()


def sanitize(body_html, link):
    sanitizer = Sanitizer(link)
    sanitizer.feed(body_html)
    return sanitizer.result()


def comment_record(node, body_html=None):
    author = node.get("author") or {"login": "ghost", "url": "https://github.com/ghost"}
    return {
        "id": "gh-%s" % node["databaseId"],
        "author": author["login"],
        "author_url": author["url"],
        "date": node["createdAt"],
        "link": node["url"],
        "html": sanitize(node["bodyHTML"] if body_html is None else body_html, node["url"]),
    }


def discussion_comments(discussion):
    """The opening post (without its "Re:" line) and the comments, with replies."""
    comments = []
    opening = RE_PARAGRAPH.sub("", discussion["bodyHTML"] or "", count=1)
    if opening.strip():
        record = comment_record(discussion, opening)
        if record["html"]:
            record["replies"] = []
            comments.append(record)
    data = discussion["comments"]
    if data["totalCount"] > len(data["nodes"]):
        print("warning: %s has %d comments; showing the first %d"
              % (discussion["url"], data["totalCount"], len(data["nodes"])), file=sys.stderr)
    for node in data["nodes"]:
        if node["isMinimized"]:
            continue  # hidden on GitHub (spam, off-topic...): hide here too
        record = comment_record(node)
        record["replies"] = [comment_record(r) for r in node["replies"]["nodes"] if not r["isMinimized"]]
        comments.append(record)
    return comments


def page_of(discussion, paths, urls):
    """The source path of the page a discussion is about, or None."""
    body = discussion["body"] or ""
    m = MARKER.search(body)
    if m and m.group(1) in paths:
        return m.group(1)
    m = RE_LINK.match(body)
    if m:
        return urls.get(re.sub(r"^https?://[^/]+", "", m.group(1)).split("#")[0])
    return None


# Main ------------------------------------------------------------------------

def main(argv):
    pages = commentable_pages()
    if "--list" in argv:
        for path, title, url in pages:
            print("%s\t%s\t%s" % (path, url, title))
        return 0

    paths = {path for path, _, _ in pages}
    urls = {url: path for path, _, url in pages}
    data = {}
    for discussion in all_discussions():  # oldest first
        path = page_of(discussion, paths, urls)
        if not path:
            continue
        # A second discussion for the same page (two first commenters at
        # once) adds its comments to the first one's.
        entry = data.setdefault(path, {"discussion": discussion["url"], "comments": []})
        entry["comments"].extend(discussion_comments(discussion))
    for entry in data.values():
        entry["comments"].sort(key=lambda c: c["date"])

    with open(OUTPUT, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=1, ensure_ascii=False, sort_keys=True)
        f.write("\n")
    total = sum(len(v["comments"]) + sum(len(c["replies"]) for c in v["comments"]) for v in data.values())
    print("%s: %d pages with comments, %d comments" % (OUTPUT, len(data), total))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
