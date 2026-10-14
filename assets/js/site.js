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

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    var syncToggle = function () {
      toggle.setAttribute("aria-pressed", effectiveTheme() === "dark" ? "true" : "false");
    };
    toggle.hidden = false;
    syncToggle();
    toggle.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      storageSet("theme", next);
      syncToggle();
      // Disqus picks its colors when it loads; reload it to match.
      if (window.DISQUS && typeof window.DISQUS.reset === "function") {
        window.DISQUS.reset({ reload: true });
      }
    });
    if (darkQuery && darkQuery.addEventListener) darkQuery.addEventListener("change", syncToggle);
  }

  /* Post content: heading links, code copy buttons, scrollable tables ---- */

  var content = document.querySelector(".post-content");
  if (content) {
    content.querySelectorAll("h2[id], h3[id], h4[id]").forEach(function (heading) {
      var link = document.createElement("a");
      link.className = "heading-anchor";
      link.href = "#" + encodeURIComponent(heading.id);
      link.setAttribute("aria-label", "Link to this section");
      link.textContent = "#";
      heading.appendChild(link);
    });

    content.querySelectorAll("table").forEach(function (table) {
      var wrap = document.createElement("div");
      wrap.className = "table-wrap";
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
      if (wrap.scrollWidth > wrap.clientWidth) {
        // Let keyboard users scroll it too.
        wrap.tabIndex = 0;
        wrap.setAttribute("role", "region");
        wrap.setAttribute("aria-label", "Table (scrolls horizontally)");
      }
    });

    content.querySelectorAll("pre").forEach(function (pre) {
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

  /* Homepage post filter ------------------------------------------------- */

  var filter = document.querySelector(".post-filter");
  if (filter) {
    var input = filter.querySelector("input");
    var items = Array.prototype.slice.call(document.querySelectorAll(".post-item"));
    var groups = Array.prototype.slice.call(document.querySelectorAll(".year-group"));
    var empty = document.querySelector(".filter-empty");
    var normalize = function (s) {
      return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    };
    items.forEach(function (item) {
      item._haystack = normalize(item.getAttribute("data-search") || item.textContent);
    });

    filter.hidden = false;
    input.addEventListener("input", function () {
      var terms = normalize(input.value).split(/\s+/).filter(Boolean);
      var shown = 0;
      items.forEach(function (item) {
        var match = terms.every(function (t) { return item._haystack.indexOf(t) !== -1; });
        item.hidden = !match;
        if (match) shown++;
      });
      groups.forEach(function (group) {
        group.hidden = !group.querySelector(".post-item:not([hidden])");
      });
      if (empty) empty.hidden = shown !== 0;
    });

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
