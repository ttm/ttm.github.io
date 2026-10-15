# Notes for agents publishing to ttm.github.io

Jekyll site built by GitHub Pages from `master`. Commit and push directly to
`master` (no pull requests). Pull first: posts are also published from other
machines. See `README.md` for the layout of the repository.

## Writing a post

Create `_posts/YYYY-MM-DD-slug.md` with front matter like:

```yaml
---
layout: article
title: "Title"
date: 2026-10-15 13:48:00 +0200
author: Renato Fabbri
description: "One or two sentences for search results and link previews."
tags:
  - artificial-intelligence
  - sensory-stimulation
lang: en            # it, pt, ... for posts not in English
comments: true
published: true
---
```

- Always write a `description`; without one, previews show the first paragraph.
- `tags` must be a YAML list. Homepage topics come from tags (see `_data/topics.yml`).
- Never change the `date` or URL of a published post. If a URL must change, add
  `redirect_from:` with the old path.
- Do not add a hand-written table of contents; long posts get one automatically.

## Math

Kramdown, the Markdown engine, only recognizes `$$...$$` as math:

- Inline: `the encoding $$E$$ maps $$X(t)$$ to $$S(t)$$` (inside a sentence).
- Display: `$$` on a line of its own, the formula, then `$$`, with blank lines
  before and after.

Do **not** use `\(...\)` or `\[...\]`: Markdown drops the backslashes and the
formula appears as plain text. Before pushing, run:

```sh
python3 scripts/math_delimiters.py          # reports LaTeX-style delimiters
python3 scripts/math_delimiters.py --fix _posts/YOUR-POST.md   # converts them
```

## Checking the site

```sh
bundle exec jekyll serve --livereload   # http://localhost:4000
```
