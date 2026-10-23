# ttm.github.io

Source of [ttm.github.io](https://ttm.github.io), Renato Fabbri's homepage and blog.
It is a Jekyll site built by GitHub Pages (the `github-pages` gem pins Jekyll 3.10).

## Run it locally

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000 (also: ./runme.sh)
```

## Where things live

| Path | What it is |
|------|------------|
| `_posts/` | Posts. The URL comes from the categories and the front-matter `date`. |
| `_layouts/post.html` | Post page: title, date, reading time, tags, previous/next links, comments. `article` is an alias kept for older posts. |
| `_layouts/impress*.html` | The impress.js slide decks (doctoral defense, Lappis). |
| `_includes/` | Head (SEO tags, theme, MathJax), header, footer, social links, logo, comments. |
| `_sass/`, `css/main.scss` | Styles. Colors are CSS custom properties in `_sass/_base.scss`, with a light and a dark set. |
| `assets/js/site.js` | Theme toggle, homepage post filter, contents for long posts, heading links, copy buttons, back-to-top. |
| `_data/navigation.yml` | Header links. |
| `_data/projects.yml` | The Projects cards on the homepage (title, kind, icon, description, links). |
| `_data/topics.yml` | The homepage topics. Each topic filters the post list; posts are matched by their tags, categories or title words, so new posts usually need no changes here. |
| `_data/comments.json` | Comments from GitHub Discussions, written by `scripts/comments.py` (see below). Don't edit by hand. |
| `_data/comments_archive.json` | The 7 comments from the Disqus years (2017-2025), shown before the GitHub ones. |
| `cso-app/`, `silencing-mind-app/` | Standalone interactive pages. |

## Post front matter

```yaml
---
layout: post            # or article; both render the same way
title: "Title"
date: 2025-08-08        # changing it changes the post's URL
description: "One or two sentences for search results and link previews."
tags: [first tag, second tag]   # a YAML list; a plain string is split into words
lang: it                # only when the post is not in English
comments: false         # posts show a comments section by default
math: true              # optional: MathJax also loads automatically when the post contains $$...$$
---
```

Without a `description`, search engines and link previews show the post's first paragraph, which is
"Table of Contents" for posts that start with one.

Write math as `$$...$$`: inside a sentence it renders inline, and on a paragraph of its own as a
display equation. `\(...\)` and `\[...\]` do not work here (Markdown drops the backslashes).
`python3 scripts/math_delimiters.py` reports posts that use them, and `--fix` converts them.
After each push that touches `_posts/`, the "Check posts" workflow runs the same fix and pushes it.
Agent instructions for publishing are in `AGENTS.md`.

## Comments

Comments are this repository's [GitHub Discussions](https://github.com/ttm/ttm.github.io/discussions),
shown under each post as plain HTML (no third-party script). A post's first commenter starts its
discussion with the post's "Comment on GitHub" button, which opens GitHub's form prefilled with a
link to the post and a hidden marker holding its source path. Later commenters join that discussion.

The "Comments" workflow runs `scripts/comments.py` whenever a discussion or comment changes (and
daily): it matches discussions to pages by the marker and writes `_data/comments.json`, then pushes
it, and the site rebuilds a minute or two later. To moderate, hide (minimize) or delete the comment
on GitHub; hidden comments are left out of the page too.

## Notes

- Keep post dates and categories stable: they are part of each post's URL, and old links depend on
  them. `redirect_from` (jekyll-redirect-from) can forward an old URL if one must change.
- Don't rename post files: comments are matched to posts by the file's path.
- Post dates and URL dates are computed in the `timezone` set in `_config.yml` (Europe/Rome). A post
  dated near midnight in another offset can land on a different day; pin its URL with `permalink` if needed.
- `Gemfile.lock` is not tracked: GitHub Pages ignores it and builds with its own gem versions, and a
  committed lockfile only drew security alerts for gems that run on your machine alone. `bundle install`
  (or `bundle exec`, with the gems already installed) writes a local one.
- Two workflows push commits as `github-actions[bot]` ("Check posts" and "Comments"), so pull before
  you push.
