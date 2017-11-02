---
layout: post
title:  "Vim .swp and .swo and .swn files"
categories: research
comments: true
published: true
---

## handling .swp, .swo, .swn files in vim

The default file where vim keep changes of the
file being edited .%.swp 
or
.<filename>,swp.


If it exists (usually because another Vim instance has the file opened
or because Vim crashed and did not remove the .swp file),
your Vim is going to use the .%.swo file to keep changes.
At startup, it will ask if you want to recover the .%.swp file (which is binary).
It will write the recovered or not file in the .swo file.

If you choose to recover, it can return two messages:
1. It can say that the file contents are equal.
2. It can say that you should check if everything is ok.

In the first case you should
In the both cases and
delete the .swp file because it is using the .swo file
and the .swp file yields the contents in .swo file.
In the second case, you should save the
file under another name (press :w %<tab>BACK<enter>).
Press ctrl+z and run $ diff <file> <file>BACK.
If you want to keep the changes,
you should delete <file>BACK
and run $ fg.
If you don't want to keep the changes,
you need to reload the file,
so run $ fg and type :e %<tab><enter>
and choose not to recover.
Type <ctrl+z> and 
delete the .swp file.

Notice that in both cases you erase the .swp file,
but in the second case you need to return to vim
and reload the file without recover
before removing the .swp.

This could be automatically dealt by Vim by
* Bypassing recover options if
.%.swp file yields equal contents against %.
* Opening a window with a vertical split and
both files opened with :diffthis command.
The original file is diff(ered) against
the file yield by .%.swp (maybe call it SWP%).
The user handles the files from then on.
When the SWP% file closes, delete the .%.swp file.
Maybe let the user confirm removal of the .swp file.

The more .%.swX files are created whenever
there are .%.swp and .%.swo and .%.swY files,
where X and Y are characters defined in order by
Vim.


