#!/usr/bin/env python3
"""Find or fix LaTeX-style math delimiters in Markdown posts.

Kramdown (the Markdown engine GitHub Pages uses) treats \\( \\) \\[ \\] as
escaped brackets and drops the backslashes, so formulas written that way
reach the page as plain text. Kramdown's own math syntax is $$...$$:
inside a paragraph it renders inline, on its own paragraph as a display
equation.

Usage:
  python3 scripts/math_delimiters.py              # check every post
  python3 scripts/math_delimiters.py FILE...      # check some files
  python3 scripts/math_delimiters.py --fix FILE...  # rewrite them in place

Exits with status 1 when a check finds LaTeX-style math. Code blocks and
inline code are left alone, and \\( ... \\) only counts as math when its
content looks like math (so an escaped "\\(or improbable\\)" in prose stays).
"""
import glob
import re
import sys

FENCE = re.compile(r"^\s*(```|~~~)")
DISPLAY_OPEN = re.compile(r"^(\s*)\\\[\s*$")
DISPLAY_CLOSE = re.compile(r"^\s*\\\]\s*,?\.?\s*$")
DISPLAY_ONE_LINE = re.compile(r"^(\s*)\\\[(.+)\\\](\s*[,.;]?)\s*$")
INLINE = re.compile(r"\\\((.+?)\\\)")
CODE_SPAN = re.compile(r"(`+)(.+?)\1")


def looks_like_math(s):
    """True for TeX-ish content: commands, operators, or short symbols like X(t)."""
    if re.search(r"\\[A-Za-z]+|[\^_=+<>{}|]", s):
        return True
    return " " not in s.strip() and len(s.strip()) <= 16


def convert_inline(line):
    # Protect inline code, convert \( ... \) that look like math, restore code.
    codes = []

    def keep(m):
        codes.append(m.group(0))
        return "\x00%d\x00" % (len(codes) - 1)

    protected = CODE_SPAN.sub(keep, line)
    converted = INLINE.sub(lambda m: "$$%s$$" % m.group(1) if looks_like_math(m.group(1)) else m.group(0), protected)
    return re.sub(r"\x00(\d+)\x00", lambda m: codes[int(m.group(1))], converted)


def process(text):
    """Return (new_text, number_of_changes)."""
    lines = text.split("\n")
    out = []
    changes = 0
    in_code = False
    i = 0
    while i < len(lines):
        line = lines[i]
        if FENCE.match(line):
            in_code = not in_code
            out.append(line)
            i += 1
            continue
        if in_code:
            out.append(line)
            i += 1
            continue
        m = DISPLAY_OPEN.match(line)
        if m:
            # Convert only if the block closes before the next blank line or fence.
            j = i + 1
            while j < len(lines) and lines[j].strip() and not FENCE.match(lines[j]) and not DISPLAY_CLOSE.match(lines[j]):
                j += 1
            if j < len(lines) and DISPLAY_CLOSE.match(lines[j]):
                tail = re.sub(r"[\s\\\]]", "", lines[j])  # punctuation after \], if any
                body = lines[i + 1:j]
                if tail and body:
                    body[-1] = body[-1].rstrip() + tail
                if out and out[-1].strip():
                    out.append("")  # display math must be its own paragraph
                out.append(m.group(1) + "$$")
                out.extend(body)
                out.append(m.group(1) + "$$")
                if j + 1 < len(lines) and lines[j + 1].strip():
                    out.append("")
                changes += 1
                i = j + 1
                continue
        m = DISPLAY_ONE_LINE.match(line)
        if m and looks_like_math(m.group(2)):
            out.append("%s$$%s%s$$" % (m.group(1), m.group(2).strip(), m.group(3).strip()))
            changes += 1
            i += 1
            continue
        new = convert_inline(line)
        if new != line:
            changes += new.count("$$") // 2 - line.count("$$") // 2
        out.append(new)
        i += 1
    return "\n".join(out), changes


def main(argv):
    fix = "--fix" in argv
    files = [a for a in argv if a != "--fix"] or sorted(glob.glob("_posts/*.md") + glob.glob("_posts/*.markdown"))
    found = 0
    for path in files:
        with open(path, encoding="utf-8") as f:
            text = f.read()
        new, changes = process(text)
        if not changes:
            continue
        found += changes
        if fix:
            with open(path, "w", encoding="utf-8") as f:
                f.write(new)
            print("%s: converted %d formula(s) to $$...$$" % (path, changes))
        else:
            print("%s: %d formula(s) use \\( \\) or \\[ \\]; run with --fix" % (path, changes))
    if found and not fix:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
