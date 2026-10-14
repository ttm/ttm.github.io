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
| `_includes/` | Head (SEO tags, theme, MathJax), header, footer, social links, logo. |
| `_sass/`, `css/main.scss` | Styles. Colors are CSS custom properties in `_sass/_base.scss`, with a light and a dark set. |
| `assets/js/site.js` | Theme toggle, homepage post filter, heading links, copy buttons, back-to-top, lazy Disqus. |
| `_data/navigation.yml` | Header links. |
| `_data/projects.yml` | The "Interactive" cards on the homepage. |
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
comments: false         # Disqus is on by default for posts
math: true              # optional: MathJax also loads automatically when the post contains $$...$$
---
```

Without a `description`, search engines and link previews show the post's first paragraph, which is
"Table of Contents" for posts that start with one.

## Notes

- Keep post dates and categories stable: they are part of each post's URL, and old links and Disqus
  threads depend on them. `redirect_from` (jekyll-redirect-from) can forward an old URL if one must change.
- `timezone` in `_config.yml` is not a valid zone name, so builds use UTC; see the comment there before changing it.
