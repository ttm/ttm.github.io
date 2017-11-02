---
layout: post
title:  "Enhancements to the work tools"
categories: research
comments: true
published: true
---
I enhanced my laptop environment recently with:
* Byobu: for avoiding many terminal tabs and windows
* Vim 8: for True Color, python scripting and latest improvements.

There are many other things I can improve, and this post will
be dedicated to them.
I consider my knowledge a work tool
and include things to be read or watched.

System (Linux):
* A keyboard shortcut to open sound configuration window.

Vim:
* Mappings:
  - to join a window into another tab.
	 Just get the buffer number, close the window,
	 move to the tab, open the buffer.
	- To put a final char in each of the next N lines.
	- Use B and W which does the same as b and w.
	- Systematize the use of the keyboard:
		* What are the characters used directly: lower and upper case.
		* What are the sequences of characters used (e.g. zz, zt, gt...).
		* What are the standard mappings that use CTRL, SHIFT, ALT.
		* What are the best leader and localleader options.
	- As a last resort, one can use a vmap to do something
	not used in the visual mode, but just to use its namespace.
	- Break paragraph in the periods. And other clues (, and : and $ and '(')
	- Use C-S-(HJKL) for window resizing.
	if the resulting lines are longer then X (~80) chars.
* What is the right move to fall into the end of the previous word?
* Make the real-time updating of the logging file work.
* Learn better about what is new in version 8.
* Get more syntax highlighting plugins.
* Learn the right way to add tokens to the spell checking repertoire.
* AA plugin to send messages from inside vim. Features:
  - input message
	- can use a specific line and file to build a message:
	  * Use line number
		* Line content
		* File name and size
		* Repository name, if any
	- Keeps track of time:
		- Can be set to remind the user by audio or visual cues
		- Can be set to send cues in a periodic timespan
		- Starts a timesplot after the sent message or after the last cue
		(should be set by user as preffered)
	- maybe use Sessions again:
	  - A session receives a tag
		- The session might be embeded in the messages them selves 
		(e.g. _message_ S_sessionTag_
		- Might be related to a screencast
		(which might be just another message)
	- send each message to IRC channels?
* Plugin to generate images for equations and import images
to VIM's interface. Useful for presentations.

* Work with compilation of latex files from inside vim.

IPython:
* Make an intensive study on using and making magic commands.
* Remember how to use IPython's functionalities (e.g. PDb).
* Check the plugins to know what are the useful stuff out there.

Byobu:
* Learn tmux better and how Byobu communicates with tmux.
* Know about the plugins.
* Change/add the keyboard shortcuts:
  - Alt+[1-9] for accessing the windows in a session.
	- Maybe Ctrl+[1-9] for accessing the sessions.

Latex:
* I already use it a lot, these should be less basic topics.
* Learn fundamentals
* Learn how to program in tex

MOOCs, books and articles:
* Make some items in the [articles] post to present the numerous
results I already have.
* MOOCs on:
	- data visualization;
	- web development;
	- python programming for specific tasks (e.g. SNA);
	- English writing;
	- audio and music;
	- complex networks;
	- text mining;
	- Make the enthough courses;
	- Signal processing:
	  * https://www.youtube.com/watch?v=rkvEM5Y3N60 (Oppenheim!)
* Books on data visualization:
	- Munzner
	- Ward
	- Ware
	- The two visual analytics
	- The doctorate thesis
	- The book from 9X's.

Other:
	- Get nice teas.

Such as the post on the [articles], I will keep updating this list.
The date means only the day when I started it.

[articles]: http://ttm.github.io/research/2017/09/11/list-of-articles.html
