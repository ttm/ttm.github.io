/*
 * Progressive enhancements for ttm.github.io. Everything here is optional:
 * the site reads fine without JavaScript.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var darkQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  /* Theme toggle --------------------------------------------------------- */

  function effectiveTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit === "dark" || explicit === "light") return explicit;
    return darkQuery && darkQuery.matches ? "dark" : "light";
  }

  // With an explicit choice, the browser UI color should match it rather
  // than the OS preference the theme-color metas are keyed on.
  function syncThemeColor() {
    if (!root.getAttribute("data-theme")) return;
    var bg = getComputedStyle(root).getPropertyValue("--bg").trim();
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (meta) {
      meta.setAttribute("content", bg);
    });
  }

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    var syncToggle = function () {
      toggle.setAttribute("aria-pressed", effectiveTheme() === "dark" ? "true" : "false");
    };
    toggle.hidden = false;
    syncToggle();
    syncThemeColor();
    toggle.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      storageSet("theme", next);
      syncToggle();
      syncThemeColor();
      // Disqus picks its colors when it loads; reload it to match.
      if (window.DISQUS && typeof window.DISQUS.reset === "function") {
        window.DISQUS.reset({ reload: true });
      }
    });
    if (darkQuery && darkQuery.addEventListener) darkQuery.addEventListener("change", syncToggle);
  }

  /* Post content: contents, heading links, code copy buttons, tables ----- */

  var content = document.querySelector(".post-content");
  if (content) {
    buildContents(content);

    content.querySelectorAll("h2[id], h3[id], h4[id]").forEach(function (heading) {
      var link = document.createElement("a");
      link.className = "heading-anchor";
      link.href = "#" + encodeURIComponent(heading.id);
      link.setAttribute("aria-label", "Link to this section");
      link.textContent = "#";
      heading.appendChild(link);
    });

    content.querySelectorAll("table").forEach(function (table, index) {
      // Some old Markdown tables use fully empty columns as spacers.
      var rows = Array.prototype.slice.call(table.rows);
      var columns = rows.length ? rows[0].cells.length : 0;
      for (var c = 0; c < columns; c++) {
        var empty = rows.every(function (row) { return !row.cells[c] || !row.cells[c].textContent.trim(); });
        if (empty) rows.forEach(function (row) { if (row.cells[c]) row.cells[c].hidden = true; });
      }

      var wrap = document.createElement("div");
      wrap.className = "table-wrap";
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
      if (wrap.scrollWidth > wrap.clientWidth) {
        // Let keyboard users scroll it too. Screen readers list regions by
        // name, so give each its number and caption or column headings.
        var name = table.caption ? table.caption.textContent.trim() : "";
        if (!name && table.tHead && table.tHead.rows.length) {
          name = Array.prototype.map.call(table.tHead.rows[0].cells, function (cell) {
            return cell.textContent.trim();
          }).filter(Boolean).join(", ");
        }
        if (name.length > 80) name = name.slice(0, 79) + "…";
        wrap.tabIndex = 0;
        wrap.setAttribute("role", "region");
        wrap.setAttribute("aria-label", "Table " + (index + 1) + (name ? ": " + name : "") + " (scrolls horizontally)");
      }
    });

    // Markdown task lists render bare checkboxes; name them after their item.
    content.querySelectorAll(".task-list-item-checkbox").forEach(function (box) {
      var item = box.closest("li");
      if (item && !box.hasAttribute("aria-label")) box.setAttribute("aria-label", item.textContent.trim());
    });

    content.querySelectorAll("pre").forEach(function (pre) {
      // Code that scrolls sideways must be scrollable from the keyboard too.
      if (pre.scrollWidth > pre.clientWidth) pre.tabIndex = 0;
      var block = pre.closest(".highlighter-rouge") || pre;
      if (block.parentNode.classList.contains("code-block")) return;
      var wrap = document.createElement("div");
      wrap.className = "code-block";
      block.parentNode.insertBefore(wrap, block);
      wrap.appendChild(block);

      var button = document.createElement("button");
      button.type = "button";
      button.className = "copy-button";
      button.textContent = "Copy";
      button.setAttribute("aria-label", "Copy code to clipboard");
      button.addEventListener("click", function () {
        var text = pre.innerText.replace(/\n$/, "");
        copyText(text).then(function () {
          button.textContent = "Copied";
          button.classList.add("is-done");
        }, function () {
          button.textContent = "Press Ctrl+C";
          selectText(pre);
        }).then(function () {
          setTimeout(function () {
            button.textContent = "Copy";
            button.classList.remove("is-done");
          }, 1800);
        });
      });
      wrap.appendChild(button);
    });
  }

  /*
   * Contents for long posts (4+ sections): a sticky sidebar that tracks the
   * current section on wide screens, and a collapsible list at the top on
   * narrower ones unless the post already starts with its own contents list.
   */
  function buildContents(content) {
    var ownTitle = /^(table of contents|contents|índice|indice|sommario)$/i;
    var headings = Array.prototype.filter.call(content.querySelectorAll("h2[id], h3[id]"), function (h) {
      return !ownTitle.test(h.textContent.trim());
    });
    var sections = headings.filter(function (h) { return h.tagName === "H2"; });
    if (sections.length < 4) return;

    var ids = {};
    headings.forEach(function (h) { ids[h.id] = true; });
    var hasOwnList = Array.prototype.some.call(content.querySelectorAll("ul, ol"), function (list) {
      var inPage = Array.prototype.filter.call(list.querySelectorAll("a[href^='#']"), function (a) {
        return ids[decodeURIComponent(a.getAttribute("href").slice(1))];
      });
      return inPage.length >= 3;
    });

    function makeList(withSubsections) {
      var list = document.createElement("ol");
      list.className = "toc-list";
      var current = null;
      headings.forEach(function (h) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = "#" + encodeURIComponent(h.id);
        a.textContent = h.textContent.trim();
        a.setAttribute("data-target", h.id);
        li.appendChild(a);
        if (h.tagName === "H2" || !current) {
          li.className = "toc-h2";
          list.appendChild(li);
          current = li;
        } else if (withSubsections) {
          var sub = current.querySelector("ol");
          if (!sub) {
            sub = document.createElement("ol");
            sub.className = "toc-sub";
            current.appendChild(sub);
          }
          li.className = "toc-h3";
          sub.appendChild(li);
        }
      });
      return list;
    }

    var header = document.querySelector(".post-header");
    var side = document.createElement("nav");
    side.className = "toc toc--side";
    side.setAttribute("aria-label", "Contents");
    var title = document.createElement("p");
    title.className = "toc-title";
    title.textContent = "Contents";
    side.appendChild(title);
    side.appendChild(makeList(true));
    (header || content).insertAdjacentElement("afterend", side);

    if (!hasOwnList) {
      var inline = document.createElement("details");
      inline.className = "toc toc--inline";
      var summary = document.createElement("summary");
      summary.textContent = "Contents";
      inline.appendChild(summary);
      inline.appendChild(makeList(true));
      content.insertBefore(inline, content.firstChild);
    }

    // Highlight the section being read.
    var links = side.querySelectorAll("a[data-target]");
    var active = null;
    var ticking = false;
    function update() {
      ticking = false;
      var current = null;
      for (var i = 0; i < headings.length; i++) {
        if (headings[i].getBoundingClientRect().top > 120) break;
        current = headings[i];
      }
      if (current === active) return;
      active = current;
      Array.prototype.forEach.call(links, function (a) {
        var on = current && a.getAttribute("data-target") === current.id;
        if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
      Array.prototype.forEach.call(side.querySelectorAll(".toc-h2"), function (li) {
        li.classList.toggle("is-open", !!(current && li.querySelector("[aria-current]")));
      });
      var on = side.querySelector("[aria-current]");
      if (on && side.scrollHeight > side.clientHeight) {
        var box = side.getBoundingClientRect();
        var r = on.getBoundingClientRect();
        if (r.top < box.top + 40 || r.bottom > box.bottom - 40) side.scrollTop += r.top - box.top - box.height / 3;
      }
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  /* Math: an inline formula wider than its paragraph moves to a line of
     its own that scrolls sideways (with any punctuation right after it),
     instead of widening the page. */
  function fitInlineMath() {
    document.querySelectorAll(".mjx-wide").forEach(function (wrap) {
      // Undo, then measure again at the current width.
      while (wrap.firstChild) wrap.parentNode.insertBefore(wrap.firstChild, wrap);
      wrap.parentNode.removeChild(wrap);
    });
    document.querySelectorAll("mjx-container:not([display='true'])").forEach(function (math) {
      var parent = math.parentElement;
      if (!parent || math.getBoundingClientRect().width <= parent.clientWidth + 1) return;
      var wrap = document.createElement("span");
      wrap.className = "mjx-wide";
      parent.insertBefore(wrap, math);
      wrap.appendChild(math);
      var next = wrap.nextSibling;
      if (next && next.nodeType === 3) {
        var m = next.textContent.match(/^[.,;:!?)]+/);
        if (m) {
          next.textContent = next.textContent.slice(m[0].length);
          wrap.appendChild(document.createTextNode(m[0]));
        }
      }
    });
    // Rejoin text nodes split above so the next pass sees whole words.
    document.querySelectorAll(".post-content p").forEach(function (p) { p.normalize(); });
  }
  if (window.mathjaxReady) fitInlineMath();
  else document.addEventListener("mathjax-ready", fitInlineMath);
  var mathResize = null;
  window.addEventListener("resize", function () {
    clearTimeout(mathResize);
    mathResize = setTimeout(fitInlineMath, 150);
  });

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(area);
      if (ok) resolve(); else reject();
    });
  }

  function selectText(node) {
    var range = document.createRange();
    range.selectNodeContents(node);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  /* Homepage post filter and topics ------------------------------------ */

  var filter = document.querySelector(".post-filter");
  if (filter) {
    var input = filter.querySelector("input");
    var items = Array.prototype.slice.call(document.querySelectorAll(".post-item"));
    var groups = Array.prototype.slice.call(document.querySelectorAll(".year-group"));
    var empty = document.querySelector(".filter-empty");
    var status = document.querySelector(".filter-status");
    var topicLinks = Array.prototype.slice.call(document.querySelectorAll(".topic[data-topic]"));
    var activeTopic = null;
    var normalize = function (s) {
      return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    };
    items.forEach(function (item) {
      item._haystack = normalize(item.getAttribute("data-search") || item.textContent);
      item._topics = " " + (item.getAttribute("data-topics") || "") + " ";
    });

    var topicName = function (id) {
      var link = topicLinks.filter(function (a) { return a.getAttribute("data-topic") === id; })[0];
      return link ? link.querySelector(".topic-name").textContent : id;
    };

    var applyFilters = function () {
      var terms = normalize(input.value).split(/\s+/).filter(Boolean);
      var shown = 0;
      items.forEach(function (item) {
        var match = (!activeTopic || item._topics.indexOf(" " + activeTopic + " ") !== -1) &&
          terms.every(function (t) { return item._haystack.indexOf(t) !== -1; });
        item.hidden = !match;
        if (match) shown++;
      });
      groups.forEach(function (group) {
        group.hidden = !group.querySelector(".post-item:not([hidden])");
      });
      if (empty) empty.hidden = shown !== 0;
      topicLinks.forEach(function (a) {
        if (a.getAttribute("data-topic") === activeTopic) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
      if (status) {
        status.textContent = "";
        status.hidden = !activeTopic;
        if (activeTopic) {
          status.appendChild(document.createTextNode(
            "Showing " + shown + (shown === 1 ? " post" : " posts") + " on " + topicName(activeTopic) + "."));
          var clear = document.createElement("button");
          clear.type = "button";
          clear.textContent = "Show all posts";
          clear.addEventListener("click", function () { setTopic(null); });
          status.appendChild(clear);
        }
      }
    };

    // Topics are links to ?topic=id; with JS they filter in place and the
    // URL keeps the choice, so a filtered view can be shared or reloaded.
    var setTopic = function (id, scroll) {
      activeTopic = id;
      try {
        var url = new URL(window.location.href);
        if (id) url.searchParams.set("topic", id); else url.searchParams.delete("topic");
        history.replaceState(null, "", url.pathname + url.search + (id ? "#posts" : ""));
      } catch (e) {}
      applyFilters();
      if (id && scroll) {
        var section = document.getElementById("posts");
        if (section) section.scrollIntoView({ block: "start" });
      }
    };

    topicLinks.forEach(function (a) {
      a.addEventListener("click", function (event) {
        event.preventDefault();
        var id = a.getAttribute("data-topic");
        setTopic(activeTopic === id ? null : id, true);
      });
    });

    filter.hidden = false;
    input.addEventListener("input", applyFilters);

    var initial = null;
    try { initial = new URLSearchParams(window.location.search).get("topic"); } catch (e) {}
    if (initial && topicLinks.some(function (a) { return a.getAttribute("data-topic") === initial; })) {
      activeTopic = initial;
      applyFilters();
    }

    // "/" focuses the filter, as on many sites.
    document.addEventListener("keydown", function (event) {
      if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey) return;
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || document.activeElement.isContentEditable) return;
      event.preventDefault();
      input.focus();
    });
  }

  /* Back to top ---------------------------------------------------------- */

  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    var ticking = false;
    var updateBackToTop = function () {
      ticking = false;
      var longPage = document.documentElement.scrollHeight > window.innerHeight * 3;
      backToTop.classList.toggle("is-visible", longPage && window.scrollY > window.innerHeight * 1.5);
    };
    backToTop.hidden = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateBackToTop);
      }
    }, { passive: true });
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0 });
      var main = document.getElementById("content");
      if (main) main.focus({ preventScroll: true });
    });
    updateBackToTop();
  }

  /* Comments: load Disqus only when the reader gets near them ----------- */

  var thread = document.getElementById("disqus_thread");
  if (thread && thread.getAttribute("data-shortname")) {
    var loadDisqus = function () {
      var script = document.createElement("script");
      script.src = "https://" + thread.getAttribute("data-shortname") + ".disqus.com/embed.js";
      script.setAttribute("data-timestamp", String(+new Date()));
      script.async = true;
      (document.head || document.body).appendChild(script);
    };
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) {
          observer.disconnect();
          loadDisqus();
        }
      }, { rootMargin: "800px 0px" });
      observer.observe(thread);
    } else {
      loadDisqus();
    }
  }
})();
