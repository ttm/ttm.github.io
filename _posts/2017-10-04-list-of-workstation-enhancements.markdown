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
* Plugin for dealing with the .swp and .swo files
* Work with compilation of latex files from inside vim.
* Make a Vim plugin/gadget with which one might
select some lines of Python code, and it would open
a template with those lines positioned as convenient,
with all the previous lines executed in an outer function
or script.
A rudimentary routine might clean the outer script
by:
0. a = locals().keys()
1. go to the last line of the script + selected lines
2. in each line:
  3. check if there is any variable not known.
  4. If the line is one of the selected lines,
  any variable defined is kept in the watched list.
  5. Any unknown variable needed to obtain a variable in
  the watched list is added to the list.
  5.1. In a more conservative and less error prone implementation,
  any variable, known or not, used to calculate a variable
  in the watched list, gets added to the list.
  6. If the line contains a definition of a variable on the watched
  list, it gets marked to be kept in the final outer script.
  7. Keep all 'import * ' statements
(Repeat steps 3-7 until the script + selected lines ends.)
8. write the outer script using the lines marked.

If the selected lines are inside a function or class,
special care should be taken to look for used variables
in the local scope and then to the global namespace.
Inside a function: look for definition inside the function,
then in the global namespace.
Inside a class:
  - If inside a function of the class,
  look for vars in the scope of the function
  and then in the scope of the class (self.)
  and then in the global scope.
  - If outside function, check for scope of the class and higher
  - If in function/class arguments, check for scope of class and higher



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
