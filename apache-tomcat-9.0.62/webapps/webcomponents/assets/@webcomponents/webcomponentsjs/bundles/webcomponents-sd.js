/// BareSpecifier=@webcomponents/webcomponentsjs/bundles/webcomponents-sd
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
  /*
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var n;function aa(a) {
    var b = 0;return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }function ba(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];return b ? b.call(a) : { next: aa(a) };
  }function p(a) {
    if (!(a instanceof Array)) {
      a = ba(a);for (var b, c = []; !(b = a.next()).done;) c.push(b.value);a = c;
    }return a;
  }
  function ca(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];for (var b = 0; b < a.length; ++b) {
      var c = a[b];if (c && c.Math == Math) return c;
    }throw Error("Cannot find global object");
  }var da = ca(this);function ea() {}ea.prototype.toJSON = function () {
    return {};
  };function q(a) {
    a.__shady || (a.__shady = new ea());return a.__shady;
  }function t(a) {
    return a && a.__shady;
  };var v = window.ShadyDOM || {};v.sa = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var fa = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");v.m = !!(fa && fa.configurable && fa.get);v.W = v.force || !v.sa;v.s = v.noPatch || !1;v.J = v.preferPerformance;v.Y = "on-demand" === v.s;v.ha = navigator.userAgent.match("Trident");function ha() {
    return Document.prototype.msElementsFromPoint ? "msElementsFromPoint" : "elementsFromPoint";
  }function w(a) {
    return (a = t(a)) && void 0 !== a.firstChild;
  }
  function x(a) {
    return a instanceof ShadowRoot;
  }function ia(a) {
    return (a = (a = t(a)) && a.root) && ja(a);
  }var y = Element.prototype,
      ka = y.matches || y.matchesSelector || y.mozMatchesSelector || y.msMatchesSelector || y.oMatchesSelector || y.webkitMatchesSelector,
      la = document.createTextNode(""),
      ma = 0,
      na = [];new MutationObserver(function () {
    for (; na.length;) try {
      na.shift()();
    } catch (a) {
      throw la.textContent = ma++, a;
    }
  }).observe(la, { characterData: !0 });function oa(a) {
    na.push(a);la.textContent = ma++;
  }
  var pa = document.contains ? function (a, b) {
    return a.__shady_native_contains(b);
  } : function (a, b) {
    return a === b || a.documentElement && a.documentElement.__shady_native_contains(b);
  };function qa(a, b) {
    for (; b;) {
      if (b == a) return !0;b = b.__shady_parentNode;
    }return !1;
  }
  function ra(a) {
    for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b],
          d = c.getAttribute("id") || c.getAttribute("name");d && "length" !== d && isNaN(d) && (a[d] = c);
    }a.item = function (e) {
      return a[e];
    };a.namedItem = function (e) {
      if ("length" !== e && isNaN(e) && a[e]) return a[e];for (var f = ba(a), g = f.next(); !g.done; g = f.next()) if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;return null;
    };return a;
  }function sa(a) {
    var b = [];for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a);return b;
  }
  function ta(a) {
    var b = [];for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);return b;
  }function ua(a, b, c) {
    c.configurable = !0;if (c.value) a[b] = c.value;else try {
      Object.defineProperty(a, b, c);
    } catch (d) {}
  }function z(a, b, c, d) {
    c = void 0 === c ? "" : c;for (var e in b) d && 0 <= d.indexOf(e) || ua(a, c + e, b[e]);
  }function va(a, b) {
    for (var c in b) c in a && ua(a, c, b[c]);
  }function A(a) {
    var b = {};Object.getOwnPropertyNames(a).forEach(function (c) {
      b[c] = Object.getOwnPropertyDescriptor(a, c);
    });return b;
  }
  function wa(a, b) {
    for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++) e = c[d], a[e] = b[e];
  }function xa(a) {
    return a instanceof Node ? a : document.createTextNode("" + a);
  }function B(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];if (1 === b.length) return xa(b[0]);c = document.createDocumentFragment();b = ba(b);for (var d = b.next(); !d.done; d = b.next()) c.appendChild(xa(d.value));return c;
  };var ya = [],
      za;function Aa(a) {
    za || (za = !0, oa(Ba));ya.push(a);
  }function Ba() {
    za = !1;for (var a = !!ya.length; ya.length;) ya.shift()();return a;
  }Ba.list = ya;function Ca() {
    this.g = !1;this.addedNodes = [];this.removedNodes = [];this.O = new Set();
  }function Da(a) {
    a.g || (a.g = !0, oa(function () {
      a.flush();
    }));
  }Ca.prototype.flush = function () {
    if (this.g) {
      this.g = !1;var a = this.takeRecords();a.length && this.O.forEach(function (b) {
        b(a);
      });
    }
  };Ca.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
    }return [];
  };
  function Ea(a, b) {
    var c = q(a);c.I || (c.I = new Ca());c.I.O.add(b);var d = c.I;return { la: b, na: d, ma: a, takeRecords: function () {
        return d.takeRecords();
      } };
  }function Fa(a) {
    var b = a && a.na;b && (b.O.delete(a.la), b.O.size || (q(a.ma).I = null));
  }
  function Ga(a, b) {
    var c = b.getRootNode();return a.map(function (d) {
      var e = c === d.target.getRootNode();if (e && d.addedNodes) {
        if (e = [].slice.call(d.addedNodes).filter(function (f) {
          return c === f.getRootNode();
        }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", { value: e, configurable: !0 }), d;
      } else if (e) return d;
    }).filter(function (d) {
      return d;
    });
  };var Ha = /[&\u00A0"]/g,
      Ia = /[&\u00A0<>]/g;function Ja(a) {
    switch (a) {case "&":
        return "&amp;";case "<":
        return "&lt;";case ">":
        return "&gt;";case '"':
        return "&quot;";case "\u00a0":
        return "&nbsp;";}
  }function Ka(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;return b;
  }var La = Ka("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
      Na = Ka("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function Oa(a, b) {
    "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
      a: {
        var h = g;var l = a,
            k = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
            l = h.localName;for (var m = "<" + l, r = h.attributes, u = 0, M; M = r[u]; u++) m += " " + M.name + '="' + M.value.replace(Ha, Ja) + '"';m += ">";h = La[l] ? m : m + Oa(h, k) + "</" + l + ">";break a;case Node.TEXT_NODE:
            h = h.data;h = l && Na[l.localName] ? h : h.replace(Ia, Ja);break a;case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";break a;default:
            throw window.console.error(h), Error("not implemented");}
      }c += h;
    }return c;
  };var Pa = v.m,
      Qa = { querySelector: function (a) {
      return this.__shady_native_querySelector(a);
    }, querySelectorAll: function (a) {
      return this.__shady_native_querySelectorAll(a);
    } },
      Ra = {};function Sa(a) {
    Ra[a] = function (b) {
      return b["__shady_native_" + a];
    };
  }function Ta(a, b) {
    z(a, b, "__shady_native_");for (var c in b) Sa(c);
  }function C(a, b) {
    b = void 0 === b ? [] : b;for (var c = 0; c < b.length; c++) {
      var d = b[c],
          e = Object.getOwnPropertyDescriptor(a, d);e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? Qa[d] || (Qa[d] = e.value) : Sa(d));
    }
  }
  var D = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      E = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
      Ua = document.implementation.createHTMLDocument("inert");function Va(a) {
    for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
  }var Wa = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
      Xa = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];
  function Ya() {
    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];window.EventTarget ? (C(window.EventTarget.prototype, a), void 0 === window.__shady_native_addEventListener && C(Window.prototype, a)) : (C(Node.prototype, a), C(Window.prototype, a));Pa ? C(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Ta(Node.prototype, { parentNode: { get: function () {
          D.currentNode = this;return D.parentNode();
        } }, firstChild: { get: function () {
          D.currentNode = this;return D.firstChild();
        } }, lastChild: { get: function () {
          D.currentNode = this;return D.lastChild();
        } }, previousSibling: { get: function () {
          D.currentNode = this;return D.previousSibling();
        } }, nextSibling: { get: function () {
          D.currentNode = this;return D.nextSibling();
        } }, childNodes: { get: function () {
          var b = [];D.currentNode = this;for (var c = D.firstChild(); c;) b.push(c), c = D.nextSibling();return b;
        } }, parentElement: { get: function () {
          E.currentNode = this;return E.parentNode();
        } }, textContent: { get: function () {
          switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) c += d.nodeValue;return c;default:
              return this.nodeValue;}
        }, set: function (b) {
          if ("undefined" === typeof b || null === b) b = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              Va(this);(0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);break;default:
              this.nodeValue = b;}
        } } });C(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
    C(HTMLElement.prototype, ["parentElement", "contains"]);a = { firstElementChild: { get: function () {
          E.currentNode = this;return E.firstChild();
        } }, lastElementChild: { get: function () {
          E.currentNode = this;return E.lastChild();
        } }, children: { get: function () {
          var b = [];E.currentNode = this;for (var c = E.firstChild(); c;) b.push(c), c = E.nextSibling();return ra(b);
        } }, childElementCount: { get: function () {
          return this.children ? this.children.length : 0;
        } } };Pa ? (C(Element.prototype, Wa), C(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), C(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (Ta(Element.prototype, a), Ta(Element.prototype, { previousElementSibling: { get: function () {
          E.currentNode = this;return E.previousSibling();
        } }, nextElementSibling: { get: function () {
          E.currentNode = this;return E.nextSibling();
        } }, innerHTML: { get: function () {
          return Oa(this, sa);
        }, set: function (b) {
          var c = "template" === this.localName ? this.content : this;Va(c);var d = this.localName || "div";d = this.namespaceURI && this.namespaceURI !== Ua.namespaceURI ? Ua.createElementNS(this.namespaceURI, d) : Ua.createElement(d);d.innerHTML = b;for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0);
        } }, className: { get: function () {
          return this.getAttribute("class") || "";
        }, set: function (b) {
          this.setAttribute("class", b);
        } } }));C(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));C(Element.prototype, Xa);C(HTMLElement.prototype, ["focus", "blur"]);window.HTMLTemplateElement && C(window.HTMLTemplateElement.prototype, ["innerHTML"]);Pa ? C(DocumentFragment.prototype, Wa) : Ta(DocumentFragment.prototype, a);C(DocumentFragment.prototype, Xa);Pa ? (C(Document.prototype, Wa), C(Document.prototype, ["activeElement"])) : Ta(Document.prototype, a);C(Document.prototype, ["importNode", "getElementById", "elementFromPoint", ha()]);C(Document.prototype, Xa);
  };var Za = A({ get childNodes() {
      return this.__shady_childNodes;
    }, get firstChild() {
      return this.__shady_firstChild;
    }, get lastChild() {
      return this.__shady_lastChild;
    }, get childElementCount() {
      return this.__shady_childElementCount;
    }, get children() {
      return this.__shady_children;
    }, get firstElementChild() {
      return this.__shady_firstElementChild;
    }, get lastElementChild() {
      return this.__shady_lastElementChild;
    }, get shadowRoot() {
      return this.__shady_shadowRoot;
    } }),
      $a = A({ get textContent() {
      return this.__shady_textContent;
    }, set textContent(a) {
      this.__shady_textContent = a;
    }, get innerHTML() {
      return this.__shady_innerHTML;
    }, set innerHTML(a) {
      this.__shady_innerHTML = a;
    } }),
      ab = A({ get parentElement() {
      return this.__shady_parentElement;
    }, get parentNode() {
      return this.__shady_parentNode;
    }, get nextSibling() {
      return this.__shady_nextSibling;
    }, get previousSibling() {
      return this.__shady_previousSibling;
    }, get nextElementSibling() {
      return this.__shady_nextElementSibling;
    }, get previousElementSibling() {
      return this.__shady_previousElementSibling;
    }, get className() {
      return this.__shady_className;
    }, set className(a) {
      this.__shady_className = a;
    } });function bb(a) {
    for (var b in a) {
      var c = a[b];c && (c.enumerable = !1);
    }
  }bb(Za);bb($a);bb(ab);var cb = v.m || !0 === v.s,
      db = cb ? function () {} : function (a) {
    var b = q(a);b.ja || (b.ja = !0, va(a, ab));
  },
      eb = cb ? function () {} : function (a) {
    var b = q(a);b.ia || (b.ia = !0, va(a, Za), window.customElements && window.customElements.polyfillWrapFlushCallback && !v.s || va(a, $a));
  };var fb = "__eventWrappers" + Date.now(),
      gb = function () {
    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");return a ? function (b) {
      return a.get.call(b);
    } : null;
  }(),
      hb = function () {
    function a() {}var b = !1,
        c = { get capture() {
        b = !0;return !1;
      } };window.addEventListener("test", a, c);window.removeEventListener("test", a, c);return b;
  }();function ib(a) {
    if (a && "object" === typeof a) {
      var b = !!a.capture;var c = !!a.once;var d = !!a.passive;var e = a.F;
    } else b = !!a, d = c = !1;return { fa: e, capture: b, once: c, passive: d, ea: hb ? a : b };
  }
  var jb = { blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0,
    drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 },
      kb = { DOMAttrModified: !0, DOMAttributeNameChanged: !0, DOMCharacterDataModified: !0, DOMElementNameChanged: !0, DOMNodeInserted: !0, DOMNodeInsertedIntoDocument: !0, DOMNodeRemoved: !0, DOMNodeRemovedFromDocument: !0, DOMSubtreeModified: !0 };function lb(a) {
    return a instanceof Node ? a.__shady_getRootNode() : a;
  }
  function mb(a, b) {
    var c = [],
        d = a;for (a = lb(a); d;) c.push(d), d = d.__shady_assignedSlot ? d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.__shady_parentNode;c[c.length - 1] === document && c.push(window);return c;
  }function nb(a) {
    a.__composedPath || (a.__composedPath = mb(a.target, !0));return a.__composedPath;
  }function ob(a, b) {
    if (!x) return a;a = mb(a, !0);for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = lb(d), f !== e && (g = a.indexOf(f), e = f), !x(f) || -1 < g) return d;
  }
  function pb(a) {
    function b(c, d) {
      c = new a(c, d);c.__composed = d && !!d.composed;return c;
    }b.__proto__ = a;b.prototype = a.prototype;return b;
  }var qb = { focus: !0, blur: !0 };function rb(a) {
    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
  }function sb(a, b, c) {
    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!rb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
  }
  function tb(a) {
    var b = a.composedPath(),
        c = b.map(function (l) {
      return ob(l, b);
    }),
        d = a.bubbles;Object.defineProperty(a, "currentTarget", { configurable: !0, enumerable: !0, get: function () {
        return g;
      } });var e = Event.CAPTURING_PHASE;Object.defineProperty(a, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
        return e;
      } });for (var f = b.length - 1; 0 <= f; f--) {
      var g = b[f];e = g === c[f] ? Event.AT_TARGET : Event.CAPTURING_PHASE;sb(a, g, "capture");if (a.T) return;
    }for (f = 0; f < b.length; f++) {
      g = b[f];var h = g === c[f];if (h || d) if (e = h ? Event.AT_TARGET : Event.BUBBLING_PHASE, sb(a, g, "bubble"), a.T) return;
    }e = 0;g = null;
  }function ub(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
          l = h.type,
          k = h.capture,
          m = h.once,
          r = h.passive;if (b === h.node && c === l && d === k && e === m && f === r) return g;
    }return -1;
  }function vb(a) {
    Ba();return !v.J && this instanceof Node && !pa(document, this) ? (a.__target || wb(a, this), tb(a)) : this.__shady_native_dispatchEvent(a);
  }
  function xb(a, b, c) {
    var d = ib(c),
        e = d.capture,
        f = d.once,
        g = d.passive,
        h = d.fa;d = d.ea;if (b) {
      var l = typeof b;if ("function" === l || "object" === l) if ("object" !== l || b.handleEvent && "function" === typeof b.handleEvent) {
        if (kb[a]) return this.__shady_native_addEventListener(a, b, d);var k = h || this;if (h = b[fb]) {
          if (-1 < ub(h, k, a, e, f, g)) return;
        } else b[fb] = [];h = function (m) {
          f && this.__shady_removeEventListener(a, b, c);m.__target || wb(m);if (k !== this) {
            var r = Object.getOwnPropertyDescriptor(m, "currentTarget");Object.defineProperty(m, "currentTarget", { get: function () {
                return k;
              }, configurable: !0 });var u = Object.getOwnPropertyDescriptor(m, "eventPhase");Object.defineProperty(m, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
                return e ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
              } });
          }m.__previousCurrentTarget = m.currentTarget;if (!x(k) && "slot" !== k.localName || -1 != m.composedPath().indexOf(k)) if (m.composed || -1 < m.composedPath().indexOf(k)) if (rb(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === k || k instanceof Window) {
            var M = "function" === l ? b.call(k, m) : b.handleEvent && b.handleEvent(m);k !== this && (r ? (Object.defineProperty(m, "currentTarget", r), r = null) : delete m.currentTarget, u ? (Object.defineProperty(m, "eventPhase", u), u = null) : delete m.eventPhase);return M;
          }
        };b[fb].push({ node: k, type: a, capture: e, once: f, passive: g, Da: h });this.__handlers = this.__handlers || {};this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] };this.__handlers[a][e ? "capture" : "bubble"].push(h);
        qb[a] || this.__shady_native_addEventListener(a, h, d);
      }
    }
  }
  function yb(a, b, c) {
    if (b) {
      var d = ib(c);c = d.capture;var e = d.once,
          f = d.passive,
          g = d.fa;d = d.ea;if (kb[a]) return this.__shady_native_removeEventListener(a, b, d);var h = g || this;g = void 0;var l = null;try {
        l = b[fb];
      } catch (k) {}l && (e = ub(l, h, a, c, e, f), -1 < e && (g = l.splice(e, 1)[0].Da, l.length || (b[fb] = void 0)));this.__shady_native_removeEventListener(a, g || b, d);g && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
    }
  }
  function zb() {
    for (var a in qb) window.__shady_native_addEventListener(a, function (b) {
      b.__target || (wb(b), tb(b));
    }, !0);
  }
  var Ab = A({ get composed() {
      void 0 === this.__composed && (gb ? this.__composed = "focusin" === this.type || "focusout" === this.type || gb(this) : !1 !== this.isTrusted && (this.__composed = jb[this.type]));return this.__composed || !1;
    }, composedPath: function () {
      this.__composedPath || (this.__composedPath = mb(this.__target, this.composed));return this.__composedPath;
    }, get target() {
      return ob(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
    }, get relatedTarget() {
      if (!this.__relatedTarget) return null;this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = mb(this.__relatedTarget, !0));return ob(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
    }, stopPropagation: function () {
      Event.prototype.stopPropagation.call(this);this.T = !0;
    }, stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);this.T = this.__immediatePropagationStopped = !0;
    } });
  function wb(a, b) {
    b = void 0 === b ? a.target : b;a.__target = b;a.__relatedTarget = a.relatedTarget;if (v.m) {
      b = Object.getPrototypeOf(a);if (!b.hasOwnProperty("__shady_patchedProto")) {
        var c = Object.create(b);c.__shady_sourceProto = b;z(c, Ab);b.__shady_patchedProto = c;
      }a.__proto__ = b.__shady_patchedProto;
    } else z(a, Ab);
  }var Bb = pb(Event),
      Cb = pb(CustomEvent),
      Db = pb(MouseEvent);
  function Eb() {
    if (!gb && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
      var a = function () {
        var b = new MouseEvent("click", { bubbles: !0, cancelable: !0, composed: !0 });this.__shady_dispatchEvent(b);
      };Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  }
  var Fb = Object.getOwnPropertyNames(Element.prototype).filter(function (a) {
    return "on" === a.substring(0, 2);
  }),
      Gb = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function (a) {
    return "on" === a.substring(0, 2);
  });function Hb(a) {
    return { set: function (b) {
        var c = q(this),
            d = a.substring(2);c.D || (c.D = {});c.D[a] && this.removeEventListener(d, c.D[a]);this.__shady_addEventListener(d, b);c.D[a] = b;
      }, get: function () {
        var b = t(this);return b && b.D && b.D[a];
      }, configurable: !0 };
  };function Ib(a, b) {
    return { index: a, K: [], N: b };
  }
  function Jb(a, b, c, d) {
    var e = 0,
        f = 0,
        g = 0,
        h = 0,
        l = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
      for (g = 0; g < l; g++) if (a[g] !== c[g]) break a;g = l;
    }if (b == a.length && d == c.length) {
      h = a.length;for (var k = c.length, m = 0; m < l - g && Kb(a[--h], c[--k]);) m++;h = m;
    }e += g;f += g;b -= h;d -= h;if (0 == b - e && 0 == d - f) return [];if (e == b) {
      for (b = Ib(e, 0); f < d;) b.K.push(c[f++]);return [b];
    }if (f == d) return [Ib(e, b - e)];l = e;g = f;d = d - g + 1;h = b - l + 1;b = Array(d);for (k = 0; k < d; k++) b[k] = Array(h), b[k][0] = k;for (k = 0; k < h; k++) b[0][k] = k;for (k = 1; k < d; k++) for (m = 1; m < h; m++) if (a[l + m - 1] === c[g + k - 1]) b[k][m] = b[k - 1][m - 1];else {
      var r = b[k - 1][m] + 1,
          u = b[k][m - 1] + 1;b[k][m] = r < u ? r : u;
    }l = b.length - 1;g = b[0].length - 1;d = b[l][g];for (a = []; 0 < l || 0 < g;) 0 == l ? (a.push(2), g--) : 0 == g ? (a.push(3), l--) : (h = b[l - 1][g - 1], k = b[l - 1][g], m = b[l][g - 1], r = k < m ? k < h ? k : h : m < h ? m : h, r == h ? (h == d ? a.push(0) : (a.push(1), d = h), l--, g--) : r == k ? (a.push(3), l--, d = k) : (a.push(2), g--, d = m));a.reverse();b = void 0;l = [];for (g = 0; g < a.length; g++) switch (a[g]) {case 0:
        b && (l.push(b), b = void 0);e++;f++;break;case 1:
        b || (b = Ib(e, 0));b.N++;e++;b.K.push(c[f]);f++;break;case 2:
        b || (b = Ib(e, 0));
        b.N++;e++;break;case 3:
        b || (b = Ib(e, 0)), b.K.push(c[f]), f++;}b && l.push(b);return l;
  }function Kb(a, b) {
    return a === b;
  };var Lb = A({ dispatchEvent: vb, addEventListener: xb, removeEventListener: yb });var Mb = null;function F() {
    Mb || (Mb = window.ShadyCSS && window.ShadyCSS.ScopingShim);return Mb || null;
  }function Nb(a, b, c) {
    var d = F();return d && "class" === b ? (d.setElementClass(a, c), !0) : !1;
  }function Ob(a, b) {
    var c = F();c && c.unscopeNode(a, b);
  }function Pb(a, b) {
    var c = F();if (!c) return !0;if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && Pb(a, b);return c;
    }return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
  }
  function Qb(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return "";var b = F();return b ? b.currentScopeForNode(a) : "";
  }function Rb(a, b) {
    if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && Rb(a, b);
  };var Sb = window.document,
      Tb = v.J,
      Ub = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      Vb = Ub && Ub.get;function Wb(a) {
    for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
  }function Xb(a) {
    var b = t(a);if (b && void 0 !== b.S) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) Xb(b);if (a = t(a)) a.S = void 0;
  }function Yb(a) {
    var b = a;if (a && "slot" === a.localName) {
      var c = t(a);(c = c && c.H) && (b = c.length ? c[0] : Yb(a.__shady_nextSibling));
    }return b;
  }
  function Zb(a, b, c) {
    if (a = (a = t(a)) && a.I) {
      if (b) if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c && a.removedNodes.push(c);Da(a);
    }
  }
  var dc = A({ get parentNode() {
      var a = t(this);a = a && a.parentNode;return void 0 !== a ? a : this.__shady_native_parentNode;
    }, get firstChild() {
      var a = t(this);a = a && a.firstChild;return void 0 !== a ? a : this.__shady_native_firstChild;
    }, get lastChild() {
      var a = t(this);a = a && a.lastChild;return void 0 !== a ? a : this.__shady_native_lastChild;
    }, get nextSibling() {
      var a = t(this);a = a && a.nextSibling;return void 0 !== a ? a : this.__shady_native_nextSibling;
    }, get previousSibling() {
      var a = t(this);a = a && a.previousSibling;return void 0 !== a ? a : this.__shady_native_previousSibling;
    },
    get childNodes() {
      if (w(this)) {
        var a = t(this);if (!a.childNodes) {
          a.childNodes = [];for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
        }var c = a.childNodes;
      } else c = this.__shady_native_childNodes;c.item = function (d) {
        return c[d];
      };return c;
    }, get parentElement() {
      var a = t(this);(a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);return void 0 !== a ? a : this.__shady_native_parentElement;
    }, get isConnected() {
      if (Vb && Vb.call(this)) return !0;if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
      var a = this.ownerDocument;if (null === a || pa(a, this)) return !0;for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (x(a) ? a.host : void 0);return !!(a && a instanceof Document);
    }, get textContent() {
      if (w(this)) {
        for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);return a.join("");
      }return this.__shady_native_textContent;
    }, set textContent(a) {
      if ("undefined" === typeof a || null === a) a = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
          if (!w(this) && v.m) {
            var b = this.__shady_firstChild;(b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Wb(this);this.__shady_native_textContent = a;
          } else Wb(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));break;default:
          this.nodeValue = a;}
    }, insertBefore: function (a, b) {
      if (this.ownerDocument !== Sb && a.ownerDocument !== Sb) return this.__shady_native_insertBefore(a, b), a;if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
      if (b) {
        var c = t(b);c = c && c.parentNode;if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }if (b === a) return a;Zb(this, a);var d = [],
          e = (c = G(this)) ? c.host.localName : Qb(this),
          f = a.__shady_parentNode;if (f) {
        var g = Qb(a);var h = !!c || !G(a) || Tb && void 0 !== this.__noInsertionPoint;f.__shady_removeChild(a, h);
      }f = !0;var l = (!Tb || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Pb(a, e),
          k = c && !a.__noInsertionPoint && (!Tb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);if (k || l) l && (g = g || Qb(a)), Rb(a, function (m) {
        k && "slot" === m.localName && d.push(m);if (l) {
          var r = g;F() && (r && Ob(m, r), (r = F()) && r.scopeNode(m, e));
        }
      });d.length && ($b(c), c.i.push.apply(c.i, p(d)), H(c));w(this) && (ac(a, this, b), h = t(this), h.root ? (f = !1, ia(this) && H(h.root)) : c && "slot" === this.localName && (f = !1, H(c)));f ? (c = x(this) ? this.host : this, b ? (b = Yb(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);return a;
    }, appendChild: function (a) {
      if (this != a || !x(a)) return this.__shady_insertBefore(a);
    }, removeChild: function (a, b) {
      b = void 0 === b ? !1 : b;if (this.ownerDocument !== Sb) return this.__shady_native_removeChild(a);if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);Zb(this, null, a);var c = G(a),
          d = c && bc(c, a),
          e = t(this);if (w(this) && (cc(a, this), ia(this))) {
        H(e.root);var f = !0;
      }if (F() && !b && c && a.nodeType !== Node.TEXT_NODE) {
        var g = Qb(a);Rb(a, function (h) {
          Ob(h, g);
        });
      }Xb(a);c && ((b = "slot" === this.localName) && (f = !0), (d || b) && H(c));f || (f = x(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));return a;
    }, replaceChild: function (a, b) {
      this.__shady_insertBefore(a, b);this.__shady_removeChild(b);return a;
    }, cloneNode: function (a) {
      if ("template" == this.localName) return this.__shady_native_cloneNode(a);var b = this.__shady_native_cloneNode(!1);if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_firstChild;for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
      }return b;
    }, getRootNode: function (a) {
      if (this && this.nodeType) {
        var b = q(this),
            c = b.S;void 0 === c && (x(this) ? (c = this, b.S = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.S = c)));return c;
      }
    }, contains: function (a) {
      return qa(this, a);
    } });var fc = A({ get assignedSlot() {
      var a = this.__shady_parentNode;(a = a && a.__shady_shadowRoot) && ec(a);return (a = t(this)) && a.assignedSlot || null;
    } });function gc(a, b, c) {
    var d = [];hc(a, b, c, d);return d;
  }function hc(a, b, c, d) {
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      var e;if (e = a.nodeType === Node.ELEMENT_NODE) {
        e = a;var f = b,
            g = c,
            h = d,
            l = f(e);l && h.push(e);g && g(l) ? e = l : (hc(e, f, g, h), e = void 0);
      }if (e) break;
    }
  }
  var ic = { get firstElementChild() {
      var a = t(this);if (a && void 0 !== a.firstChild) {
        for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;return a;
      }return this.__shady_native_firstElementChild;
    }, get lastElementChild() {
      var a = t(this);if (a && void 0 !== a.lastChild) {
        for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_lastElementChild;
    }, get children() {
      return w(this) ? ra(Array.prototype.filter.call(ta(this), function (a) {
        return a.nodeType === Node.ELEMENT_NODE;
      })) : this.__shady_native_children;
    }, get childElementCount() {
      var a = this.__shady_children;return a ? a.length : 0;
    } },
      I = A((ic.append = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];this.__shady_insertBefore(B.apply(null, p(b)), null);
  }, ic.prepend = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];this.__shady_insertBefore(B.apply(null, p(b)), this.__shady_firstChild);
  }, ic.replaceChildren = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
    for (; null !== (c = this.__shady_firstChild);) this.__shady_removeChild(c);this.__shady_insertBefore(B.apply(null, p(b)), null);
  }, ic)),
      jc = A({ querySelector: function (a) {
      return gc(this, function (b) {
        return ka.call(b, a);
      }, function (b) {
        return !!b;
      })[0] || null;
    }, querySelectorAll: function (a, b) {
      if (b) {
        b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c = this.__shady_getRootNode();return ra(b.filter(function (d) {
          return d.__shady_getRootNode() == c;
        }));
      }return ra(gc(this, function (d) {
        return ka.call(d, a);
      }));
    } }),
      kc = v.J && !v.s ? wa({}, I) : I;wa(I, jc); /*
                                                  Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
                                                  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                  Code distributed by Google as part of the polymer project is also
                                                  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                  */
  var lc = A({ after: function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];c = this.__shady_parentNode;if (null !== c) {
        var d = this.__shady_nextSibling;c.__shady_insertBefore(B.apply(null, p(b)), d);
      }
    }, before: function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];c = this.__shady_parentNode;null !== c && c.__shady_insertBefore(B.apply(null, p(b)), this);
    }, remove: function () {
      var a = this.__shady_parentNode;null !== a && a.__shady_removeChild(this);
    }, replaceWith: function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];c = this.__shady_parentNode;if (null !== c) {
        var d = this.__shady_nextSibling;c.__shady_removeChild(this);c.__shady_insertBefore(B.apply(null, p(b)), d);
      }
    } });var mc = window.document;function nc(a, b) {
    if ("slot" === b) a = a.__shady_parentNode, ia(a) && H(t(a).root);else if ("slot" === a.localName && "name" === b && (b = G(a))) {
      if (b.g) {
        oc(b);var c = a.ka,
            d = pc(a);if (d !== c) {
          c = b.h[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.h[d] || (b.h[d] = []);c.push(a);1 < c.length && (b.h[d] = qc(c));
        }
      }H(b);
    }
  }
  var rc = A({ get previousElementSibling() {
      var a = t(this);if (a && void 0 !== a.previousSibling) {
        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_previousElementSibling;
    }, get nextElementSibling() {
      var a = t(this);if (a && void 0 !== a.nextSibling) {
        for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;return a;
      }return this.__shady_native_nextElementSibling;
    }, get slot() {
      return this.getAttribute("slot");
    },
    set slot(a) {
      this.__shady_setAttribute("slot", a);
    }, get className() {
      return this.getAttribute("class") || "";
    }, set className(a) {
      this.__shady_setAttribute("class", a);
    }, setAttribute: function (a, b) {
      this.ownerDocument !== mc ? this.__shady_native_setAttribute(a, b) : Nb(this, a, b) || (this.__shady_native_setAttribute(a, b), nc(this, a));
    }, removeAttribute: function (a) {
      this.ownerDocument !== mc ? this.__shady_native_removeAttribute(a) : Nb(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a), nc(this, a));
    } });v.J || Fb.forEach(function (a) {
    rc[a] = Hb(a);
  });
  var wc = A({ attachShadow: function (a) {
      if (!this) throw Error("Must provide a host.");if (!a) throw Error("Not enough arguments.");if (a.shadyUpgradeFragment && !v.ha) {
        var b = a.shadyUpgradeFragment;b.__proto__ = ShadowRoot.prototype;sc(b, this, a);tc(b, b);a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");b.__noInsertionPoint = void 0;if (a && a.length) {
          var c = b;$b(c);c.i.push.apply(c.i, p(a));H(b);
        }b.host.__shady_native_appendChild(b);
      } else b = new uc(vc, this, a);return this.__CE_shadowRoot = b;
    }, get shadowRoot() {
      var a = t(this);
      return a && a.wa || null;
    } });wa(rc, wc);var xc = document.implementation.createHTMLDocument("inert"),
      yc = A({ get innerHTML() {
      return w(this) ? Oa("template" === this.localName ? this.content : this, ta) : this.__shady_native_innerHTML;
    }, set innerHTML(a) {
      if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
        Wb(this);var b = this.localName || "div";b = this.namespaceURI && this.namespaceURI !== xc.namespaceURI ? xc.createElementNS(this.namespaceURI, b) : xc.createElement(b);for (v.m ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
      }
    } });var zc = A({ blur: function () {
      var a = t(this);(a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
    } });v.J || Gb.forEach(function (a) {
    zc[a] = Hb(a);
  });var Ac = A({ assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.__shady_getRootNode();b && x(b) && ec(b);return (b = t(this)) ? (a && a.flatten ? b.H : b.assignedNodes) || [] : [];
      }
    }, addEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) xb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.F = this;d.__shady_addEventListener(a, b, c);
      }
    }, removeEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) yb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.F = this;d.__shady_removeEventListener(a, b, c);
      }
    } });var Bc = A({ getElementById: function (a) {
      return "" === a ? null : gc(this, function (b) {
        return b.id == a;
      }, function (b) {
        return !!b;
      })[0] || null;
    } });function Cc(a, b) {
    for (var c; b && !a.has(c = b.__shady_getRootNode());) b = c.host;return b;
  }function Dc(a) {
    var b = new Set();for (b.add(a); x(a) && a.host;) a = a.host.__shady_getRootNode(), b.add(a);return b;
  }
  var Ec = "__shady_native_" + ha(),
      Fc = A({ get activeElement() {
      var a = v.m ? document.__shady_native_activeElement : document.activeElement;if (!a || !a.nodeType) return null;var b = !!x(this);if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;for (b = G(a); b && b !== this;) a = b.host, b = G(a);return this === document ? b ? null : a : b === this ? a : null;
    }, elementsFromPoint: function (a, b) {
      a = [].slice.call(document[Ec](a, b));b = Dc(this);for (var c = new Set(), d = 0; d < a.length; d++) c.add(Cc(b, a[d]));var e = [];c.forEach(function (f) {
        return e.push(f);
      });
      return e;
    }, elementFromPoint: function (a, b) {
      return this.__shady_elementsFromPoint(a, b)[0] || null;
    } });var Gc = window.document,
      Hc = A({ importNode: function (a, b) {
      if (a.ownerDocument !== Gc || "template" === a.localName) return this.__shady_native_importNode(a, b);var c = this.__shady_native_importNode(a, !1);if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);return c;
    } });var Ic = A({ dispatchEvent: vb, addEventListener: xb.bind(window), removeEventListener: yb.bind(window) });var J = {};Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (J.parentElement = dc.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (J.contains = dc.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (J.children = I.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (J.innerHTML = yc.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (J.className = rc.className);
  var K = { EventTarget: [Lb], Node: [dc, window.EventTarget ? null : Lb], Text: [fc], Comment: [fc], CDATASection: [fc], ProcessingInstruction: [fc], Element: [rc, I, lc, fc, !v.m || "innerHTML" in Element.prototype ? yc : null, window.HTMLSlotElement ? null : Ac], HTMLElement: [zc, J], HTMLSlotElement: [Ac], DocumentFragment: [kc, Bc], Document: [Hc, kc, Bc, Fc], Window: [Ic], CharacterData: [lc] },
      Jc = v.m ? null : ["innerHTML", "textContent"];function L(a, b, c, d) {
    b.forEach(function (e) {
      return a && e && z(a, e, c, d);
    });
  }
  function Kc(a) {
    var b = a ? null : Jc,
        c;for (c in K) L(window[c] && window[c].prototype, K[c], a, b);
  }["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (a) {
    var b = window[a],
        c = Object.create(b.prototype);c.__shady_protoIsPatched = !0;L(c, K.EventTarget);L(c, K.Node);K[a] && L(c, K[a]);b.prototype.__shady_patchedProto = c;
  });function Lc(a) {
    a.__shady_protoIsPatched = !0;L(a, K.EventTarget);L(a, K.Node);L(a, K.Element);L(a, K.HTMLElement);L(a, K.HTMLSlotElement);return a;
  };var Mc = v.Y,
      Nc = v.m;function Oc(a, b) {
    if (Mc && !a.__shady_protoIsPatched && !x(a)) {
      var c = Object.getPrototypeOf(a),
          d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;d || (d = Object.create(c), Lc(d), c.__shady_patchedProto = d);Object.setPrototypeOf(a, d);
    }Nc || (1 === b ? db(a) : 2 === b && eb(a));
  }
  function Pc(a, b, c, d) {
    Oc(a, 1);d = d || null;var e = q(a),
        f = d ? q(d) : null;e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;if (f = t(e.previousSibling)) f.nextSibling = a;if (f = t(e.nextSibling = d)) f.previousSibling = a;e.parentNode = b;d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));c.childNodes = null;
  }
  function ac(a, b, c) {
    Oc(b, 2);var d = q(b);void 0 !== d.firstChild && (d.childNodes = null);if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Pc(a, b, d, c);else Pc(a, b, d, c);
  }
  function cc(a, b) {
    var c = q(a);b = q(b);a === b.firstChild && (b.firstChild = c.nextSibling);a === b.lastChild && (b.lastChild = c.previousSibling);a = c.previousSibling;var d = c.nextSibling;a && (q(a).nextSibling = d);d && (q(d).previousSibling = a);c.parentNode = c.previousSibling = c.nextSibling = void 0;void 0 !== b.childNodes && (b.childNodes = null);
  }
  function tc(a, b) {
    var c = q(a);if (b || void 0 === c.firstChild) {
      c.childNodes = null;var d = c.firstChild = a.__shady_native_firstChild;c.lastChild = a.__shady_native_lastChild;Oc(a, 2);c = d;for (d = void 0; c; c = c.__shady_native_nextSibling) {
        var e = q(c);e.parentNode = b || a;e.nextSibling = c.__shady_native_nextSibling;e.previousSibling = d || null;d = c;Oc(c, 1);
      }
    }
  };var Qc = A({ addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.F = c.F || this;this.host.__shady_addEventListener(a, b, c);
    }, removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.F = c.F || this;this.host.__shady_removeEventListener(a, b, c);
    } });function Rc(a, b) {
    z(a, Qc, b);z(a, Fc, b);z(a, yc, b);z(a, I, b);v.s && !b ? (z(a, dc, b), z(a, Bc, b)) : v.m || (z(a, ab), z(a, Za), z(a, $a));
  };var vc = {},
      N = v.deferConnectionCallbacks && "loading" === document.readyState,
      Sc;function Tc(a) {
    var b = [];do b.unshift(a); while (a = a.__shady_parentNode);return b;
  }function uc(a, b, c) {
    if (a !== vc) throw new TypeError("Illegal constructor");this.g = null;sc(this, b, c);
  }
  function sc(a, b, c) {
    a.host = b;a.mode = c && c.mode;tc(a.host);b = q(a.host);b.root = a;b.wa = "closed" !== a.mode ? a : null;b = q(a);b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;if (v.preferPerformance) for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b);else H(a);
  }function H(a) {
    a.G || (a.G = !0, Aa(function () {
      return ec(a);
    }));
  }
  function ec(a) {
    var b;if (b = a.G) {
      for (var c; a;) a: {
        a.G && (c = a), b = a;a = b.host.__shady_getRootNode();if (x(a) && (b = t(b.host)) && 0 < b.M) break a;a = void 0;
      }b = c;
    }(c = b) && c._renderSelf();
  }
  uc.prototype._renderSelf = function () {
    var a = N;N = !0;this.G = !1;if (this.g) {
      oc(this);for (var b = 0, c; b < this.g.length; b++) {
        c = this.g[b];var d = t(c),
            e = d.assignedNodes;d.assignedNodes = [];d.H = [];if (d.ba = e) for (d = 0; d < e.length; d++) {
          var f = t(e[d]);f.U = f.assignedSlot;f.assignedSlot === c && (f.assignedSlot = null);
        }
      }for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) Uc(this, b);for (b = 0; b < this.g.length; b++) {
        c = this.g[b];e = t(c);if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) Uc(this, d, c);(d = (d = t(c.__shady_parentNode)) && d.root) && (ja(d) || d.G) && d._renderSelf();Vc(this, e.H, e.assignedNodes);if (d = e.ba) {
          for (f = 0; f < d.length; f++) t(d[f]).U = null;e.ba = null;d.length > e.assignedNodes.length && (e.V = !0);
        }e.V && (e.V = !1, Wc(this, c));
      }c = this.g;b = [];for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = t(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);for (c = 0; c < b.length; c++) {
        f = b[c];e = f === this ? this.host : f;d = [];for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) if ("slot" == f.localName) for (var g = t(f).H, h = 0; h < g.length; h++) d.push(g[h]);else d.push(f);f = sa(e);g = Jb(d, d.length, f, f.length);for (var l = h = 0, k = void 0; h < g.length && (k = g[h]); h++) {
          for (var m = 0, r = void 0; m < k.K.length && (r = k.K[m]); m++) r.__shady_native_parentNode === e && e.__shady_native_removeChild(r), f.splice(k.index + l, 1);l -= k.N;
        }l = 0;for (k = void 0; l < g.length && (k = g[l]); l++) for (h = f[k.index], m = k.index; m < k.index + k.N; m++) r = d[m], e.__shady_native_insertBefore(r, h), f.splice(m, 0, r);
      }
    }if (!v.preferPerformance && !this.aa) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c = t(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);this.aa = !0;N = a;Sc && Sc();
  };function Uc(a, b, c) {
    var d = q(b),
        e = d.U;d.U = null;c || (c = (a = a.h[b.__shady_slot || "__catchall"]) && a[0]);c ? (q(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;e !== d.assignedSlot && d.assignedSlot && (q(d.assignedSlot).V = !0);
  }function Vc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
      var f = t(e).assignedNodes;f && f.length && Vc(a, b, f);
    } else b.push(c[d]);
  }
  function Wc(a, b) {
    b.__shady_native_dispatchEvent(new Event("slotchange"));b = t(b);b.assignedSlot && Wc(a, b.assignedSlot);
  }function $b(a) {
    a.i = a.i || [];a.g = a.g || [];a.h = a.h || {};
  }function oc(a) {
    if (a.i && a.i.length) {
      for (var b = a.i, c, d = 0; d < b.length; d++) {
        var e = b[d];tc(e);var f = e.__shady_parentNode;tc(f);f = t(f);f.M = (f.M || 0) + 1;f = pc(e);a.h[f] ? (c = c || {}, c[f] = !0, a.h[f].push(e)) : a.h[f] = [e];a.g.push(e);
      }if (c) for (var g in c) a.h[g] = qc(a.h[g]);a.i = [];
    }
  }
  function pc(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";return a.ka = b;
  }function qc(a) {
    return a.sort(function (b, c) {
      b = Tc(b);for (var d = Tc(c), e = 0; e < b.length; e++) {
        c = b[e];var f = d[e];if (c !== f) return b = ta(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
      }
    });
  }
  function bc(a, b) {
    if (a.g) {
      oc(a);var c = a.h,
          d;for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
        var g = e[f];if (qa(b, g)) {
          e.splice(f, 1);var h = a.g.indexOf(g);0 <= h && (a.g.splice(h, 1), (h = t(g.__shady_parentNode)) && h.M && h.M--);f--;g = t(g);if (h = g.H) for (var l = 0; l < h.length; l++) {
            var k = h[l],
                m = k.__shady_native_parentNode;m && m.__shady_native_removeChild(k);
          }g.H = [];g.assignedNodes = [];h = !0;
        }
      }return h;
    }
  }function ja(a) {
    oc(a);return !(!a.g || !a.g.length);
  }
  (function (a) {
    a.__proto__ = DocumentFragment.prototype;Rc(a, "__shady_");Rc(a);Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, { get: function () {
          return this.host[b];
        },
        configurable: !0 });
    });
  })(uc.prototype);
  if (window.customElements && window.customElements.define && v.W && !v.preferPerformance) {
    var Xc = new Map();Sc = function () {
      var a = [];Xc.forEach(function (d, e) {
        a.push([e, d]);
      });Xc.clear();for (var b = 0; b < a.length; b++) {
        var c = a[b][0];a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
      }
    };N && document.addEventListener("readystatechange", function () {
      N = !1;Sc();
    }, { once: !0 });var Yc = function (a, b, c) {
      var d = 0,
          e = "__isConnected" + d++;if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
        N ? Xc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
      }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
        N ? this.isConnected || Xc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
      };return a;
    },
        Zc = window.customElements.define,
        $c = function (a, b) {
      var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;Zc.call(window.customElements, a, Yc(b, c, d));b.prototype.connectedCallback = c;b.prototype.disconnectedCallback = d;
    };window.customElements.define = $c;Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: $c, configurable: !0 });
  }function G(a) {
    a = a.__shady_getRootNode();if (x(a)) return a;
  };function O(a) {
    this.node = a;
  }n = O.prototype;n.addEventListener = function (a, b, c) {
    return this.node.__shady_addEventListener(a, b, c);
  };n.removeEventListener = function (a, b, c) {
    return this.node.__shady_removeEventListener(a, b, c);
  };n.appendChild = function (a) {
    return this.node.__shady_appendChild(a);
  };n.insertBefore = function (a, b) {
    return this.node.__shady_insertBefore(a, b);
  };n.removeChild = function (a) {
    return this.node.__shady_removeChild(a);
  };n.replaceChild = function (a, b) {
    return this.node.__shady_replaceChild(a, b);
  };
  n.cloneNode = function (a) {
    return this.node.__shady_cloneNode(a);
  };n.getRootNode = function (a) {
    return this.node.__shady_getRootNode(a);
  };n.contains = function (a) {
    return this.node.__shady_contains(a);
  };n.dispatchEvent = function (a) {
    return this.node.__shady_dispatchEvent(a);
  };n.setAttribute = function (a, b) {
    this.node.__shady_setAttribute(a, b);
  };n.getAttribute = function (a) {
    return this.node.__shady_native_getAttribute(a);
  };n.removeAttribute = function (a) {
    this.node.__shady_removeAttribute(a);
  };n.attachShadow = function (a) {
    return this.node.__shady_attachShadow(a);
  };
  n.focus = function () {
    this.node.__shady_native_focus();
  };n.blur = function () {
    this.node.__shady_blur();
  };n.importNode = function (a, b) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
  };n.getElementById = function (a) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
  };n.elementsFromPoint = function (a, b) {
    return this.node.__shady_elementsFromPoint(a, b);
  };n.elementFromPoint = function (a, b) {
    return this.node.__shady_elementFromPoint(a, b);
  };
  n.querySelector = function (a) {
    return this.node.__shady_querySelector(a);
  };n.querySelectorAll = function (a, b) {
    return this.node.__shady_querySelectorAll(a, b);
  };n.assignedNodes = function (a) {
    if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a);
  };n.append = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_append.apply(this.node, p(b));
  };
  n.prepend = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_prepend.apply(this.node, p(b));
  };n.after = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_after.apply(this.node, p(b));
  };n.before = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_before.apply(this.node, p(b));
  };n.remove = function () {
    return this.node.__shady_remove();
  };
  n.replaceWith = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_replaceWith.apply(this.node, p(b));
  };
  da.Object.defineProperties(O.prototype, { activeElement: { configurable: !0, enumerable: !0, get: function () {
        if (x(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
      } }, _activeElement: { configurable: !0, enumerable: !0, get: function () {
        return this.activeElement;
      } }, host: { configurable: !0, enumerable: !0, get: function () {
        if (x(this.node)) return this.node.host;
      } }, parentNode: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_parentNode;
      } }, firstChild: { configurable: !0,
      enumerable: !0, get: function () {
        return this.node.__shady_firstChild;
      } }, lastChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_lastChild;
      } }, nextSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_nextSibling;
      } }, previousSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_previousSibling;
      } }, childNodes: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_childNodes;
      } }, parentElement: { configurable: !0, enumerable: !0,
      get: function () {
        return this.node.__shady_parentElement;
      } }, firstElementChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_firstElementChild;
      } }, lastElementChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_lastElementChild;
      } }, nextElementSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_nextElementSibling;
      } }, previousElementSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_previousElementSibling;
      } },
    children: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_children;
      } }, childElementCount: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_childElementCount;
      } }, shadowRoot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_shadowRoot;
      } }, assignedSlot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_assignedSlot;
      } }, isConnected: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_isConnected;
      } }, innerHTML: { configurable: !0,
      enumerable: !0, get: function () {
        return this.node.__shady_innerHTML;
      }, set: function (a) {
        this.node.__shady_innerHTML = a;
      } }, textContent: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_textContent;
      }, set: function (a) {
        this.node.__shady_textContent = a;
      } }, slot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_slot;
      }, set: function (a) {
        this.node.__shady_slot = a;
      } }, className: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_className;
      }, set: function (a) {
        this.node.__shady_className = a;
      } } });function ad(a) {
    Object.defineProperty(O.prototype, a, { get: function () {
        return this.node["__shady_" + a];
      }, set: function (b) {
        this.node["__shady_" + a] = b;
      }, configurable: !0 });
  }Fb.forEach(function (a) {
    return ad(a);
  });Gb.forEach(function (a) {
    return ad(a);
  });var bd = new WeakMap();function cd(a) {
    if (x(a) || a instanceof O) return a;var b = bd.get(a);b || (b = new O(a), bd.set(a, b));return b;
  };if (v.W) {
    var dd = v.m ? function (a) {
      return a;
    } : function (a) {
      eb(a);db(a);return a;
    },
        ShadyDOM = { inUse: v.W, patch: dd, isShadyRoot: x, enqueue: Aa, flush: Ba, flushInitial: function (a) {
        !a.aa && a.G && ec(a);
      }, settings: v, filterMutations: Ga, observeChildren: Ea, unobserveChildren: Fa, deferConnectionCallbacks: v.deferConnectionCallbacks, preferPerformance: v.preferPerformance, handlesDynamicScoping: !0, wrap: v.s ? cd : dd, wrapIfNeeded: !0 === v.s ? cd : function (a) {
        return a;
      }, Wrapper: O, composedPath: nb, noPatch: v.s, patchOnDemand: v.Y, nativeMethods: Qa,
      nativeTree: Ra, patchElementProto: Lc };window.ShadyDOM = ShadyDOM;Ya();Kc("__shady_");Object.defineProperty(document, "_activeElement", Fc.activeElement);z(Window.prototype, Ic, "__shady_");v.s ? v.Y && z(Element.prototype, wc) : (Kc(), Eb());zb();window.Event = Bb;window.CustomEvent = Cb;window.MouseEvent = Db;window.ShadowRoot = uc;
  }; /*
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
  function ed() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function fd(a) {
    var b = a = a.replace(gd, "").replace(hd, ""),
        c = new ed();c.start = 0;c.end = b.length;for (var d = c, e = 0, f = b.length; e < f; e++) if ("{" === b[e]) {
      d.rules || (d.rules = []);var g = d,
          h = g.rules[g.rules.length - 1] || null;d = new ed();d.start = e + 1;d.parent = g;d.previous = h;g.rules.push(d);
    } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);return id(c, a);
  }
  function id(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = jd(c), c = c.replace(kd, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = ld : c.match(md) && (a.type = nd, a.keyframesName = a.selector.split(kd).pop()) : a.type = 0 === c.indexOf("--") ? od : pd);if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) id(f, b);return a;
  }function jd(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
      b = c;for (c = 6 - b.length; c--;) b = "0" + b;return "\\" + b;
    });
  }
  function qd(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = qd(h, b, d);
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(rd, "").replace(sd, ""), b = b.replace(td, "").replace(ud, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var pd = 1,
      nd = 7,
      ld = 4,
      od = 1E3,
      gd = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      hd = /@import[^;]*;/gim,
      rd = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      sd = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      td = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      ud = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      md = /^@[^\s]*keyframes/,
      kd = /\s+/g;var P = !(window.ShadyDOM && window.ShadyDOM.inUse),
      vd;function wd(a) {
    vd = a && a.shimcssproperties ? !1 : P || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }var xd;window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (xd = window.ShadyCSS.cssBuild);var Q = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? vd = window.ShadyCSS.nativeCss : window.ShadyCSS ? (wd(window.ShadyCSS), window.ShadyCSS = void 0) : wd(window.WebComponents && window.WebComponents.flags);var R = vd;var yd = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      zd = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      Ad = /(--[\w-]+)\s*([:,;)]|$)/gi,
      Bd = /(animation\s*:)|(animation-name\s*:)/,
      Cd = /@media\s(.*)/,
      Dd = /\{[^}]*\}/g;var Ed = new Set();function S(a, b) {
    if (!a) return "";"string" === typeof a && (a = fd(a));b && Fd(a, b);return qd(a, R);
  }function Gd(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = fd(a.textContent));return a.__cssRules || null;
  }function Hd(a) {
    return !!a.parent && a.parent.type === nd;
  }function Fd(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === ld) {
        var g = a.selector.match(Cd);g && (window.matchMedia(g[1]).matches || (e = !0));
      }f === pd ? b(a) : c && f === nd ? c(a) : f === od && (e = !0);if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) Fd(g, b, c, d);
    }
  }
  function Id(a, b, c, d) {
    var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;Jd(e, c, d);return e;
  }var T = null;function Kd(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");var b = document.head;b.insertBefore(a, (T ? T.nextSibling : null) || b.firstChild);return T = a;
  }function Jd(a, b, c) {
    b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);T ? a.compareDocumentPosition(T) === Node.DOCUMENT_POSITION_PRECEDING && (T = a) : T = a;
  }
  function Ld(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;return -1;
  }function Md(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d = Ld(a, c + 3),
        e = a.substring(c + 4, d);c = a.substring(0, c);a = Md(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }function Nd(a, b) {
    P ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  var Od = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
    return a;
  };function U(a) {
    var b = a.localName,
        c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, L: c };
  }function Pd(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = Ld(a, d);c += a.slice(d, e + 1);d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];c && b.push(c);return b;
  }
  function Qd(a) {
    if (void 0 !== xd) return xd;if (void 0 === a.__cssBuild) {
      var b = a.getAttribute("css-build");if (b) a.__cssBuild = b;else {
        a: {
          b = "template" === a.localName ? a.content.firstChild : a.firstChild;if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
            b = b[1];break a;
          }b = "";
        }if ("" !== b) {
          var c = "template" === a.localName ? a.content.firstChild : a.firstChild;c.parentNode.removeChild(c);
        }a.__cssBuild = b;
      }
    }return a.__cssBuild || "";
  }
  function Rd(a) {
    a = void 0 === a ? "" : a;return "" !== a && R ? P ? "shadow" === a : "shady" === a : !1;
  };function Sd() {}function Td(a, b) {
    Ud(V, a, function (c) {
      W(c, b || "");
    });
  }function Ud(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);var d;"template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;if (d) for (b = 0; b < d.length; b++) Ud(a, d[b], c);
  }
  function W(a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute("class");c ? d && (b = d.replace("style-scope", "").replace(b, ""), Nd(a, b)) : Nd(a, (d ? d + " " : "") + "style-scope " + b);
    }
  }function Vd(a, b, c) {
    Ud(V, a, function (d) {
      W(d, b, !0);W(d, c);
    });
  }function Wd(a, b) {
    Ud(V, a, function (c) {
      W(c, b || "", !0);
    });
  }
  function Xd(a, b, c, d, e) {
    var f = V;e = void 0 === e ? "" : e;"" === e && (P || "shady" === (void 0 === d ? "" : d) ? e = S(b, c) : (a = U(a), e = Yd(f, b, a.is, a.L, c) + "\n\n"));return e.trim();
  }function Yd(a, b, c, d, e) {
    var f = Zd(c, d);c = c ? "." + c : "";return S(b, function (g) {
      g.i || (g.selector = g.l = $d(a, g, a.h, c, f), g.i = !0);e && e(g, c, f);
    });
  }function Zd(a, b) {
    return b ? "[is=" + a + "]" : a;
  }
  function $d(a, b, c, d, e) {
    var f = Pd(b.selector);if (!Hd(b)) {
      b = 0;for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
    }return f.filter(function (l) {
      return !!l;
    }).join(",");
  }function ae(a) {
    return a.replace(be, function (b, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
    });
  }
  function ce(a) {
    for (var b = [], c; c = a.match(de);) {
      var d = c.index,
          e = Ld(a, d);if (-1 === e) throw Error(c.input + " selector missing ')'");c = a.slice(d, e + 1);a = a.replace(c, "\ue000");b.push(c);
    }return { Z: a, matches: b };
  }function ee(a, b) {
    var c = a.split("\ue000");return b.reduce(function (d, e, f) {
      return d + e + c[f + 1];
    }, c[0]);
  }
  Sd.prototype.h = function (a, b, c) {
    var d = !1;a = a.trim();var e = be.test(a);e && (a = a.replace(be, function (h, l, k) {
      return ":" + l + "(" + k.replace(/\s/g, "") + ")";
    }), a = ae(a));var f = de.test(a);if (f) {
      var g = ce(a);a = g.Z;g = g.matches;
    }a = a.replace(fe, ":host $1");a = a.replace(ge, function (h, l, k) {
      d || (h = he(k, l, b, c), d = d || h.stop, l = h.pa, k = h.value);return l + k;
    });f && (a = ee(a, g));e && (a = ae(a));return a = a.replace(ie, function (h, l, k, m) {
      return '[dir="' + k + '"] ' + l + m + ", " + l + '[dir="' + k + '"]' + m;
    });
  };
  function he(a, b, c, d) {
    var e = a.indexOf("::slotted");0 <= a.indexOf(":host") ? a = je(a, d) : 0 !== e && (a = c ? ke(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
      var f = !0;c && (a = a.replace(le, function (g, h) {
        return " > " + h;
      }));
    }return { value: a, pa: b, stop: f };
  }function ke(a, b) {
    a = a.split(/(\[.+?\])/);for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]);else {
      var e = a[d];if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
    }return c.join("");
  }
  function je(a, b) {
    var c = a.match(me);return (c = c && c[2].trim() || "") ? c[0].match(ne) ? a.replace(me, function (d, e, f) {
      return b + f;
    }) : c.split(ne)[0] === b ? c : "should_not_match" : a.replace(":host", b);
  }function oe(a) {
    ":root" === a.selector && (a.selector = "html");
  }Sd.prototype.i = function (a) {
    return a.match(":host") ? "" : a.match("::slotted") ? this.h(a, ":not(.style-scope)") : ke(a.trim(), ":not(.style-scope)");
  };da.Object.defineProperties(Sd.prototype, { g: { configurable: !0, enumerable: !0, get: function () {
        return "style-scope";
      } } });
  var be = /:(nth[-\w]+)\(([^)]+)\)/,
      ge = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      ne = /[[.:#*]/,
      fe = /^(::slotted)/,
      me = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      le = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      ie = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
      de = /:(?:matches|any|-(?:webkit|moz)-any)/,
      V = new Sd();function pe(a, b, c, d, e) {
    this.A = a || null;this.h = b || null;this.X = c || [];this.u = null;this.cssBuild = e || "";this.L = d || "";this.g = this.v = this.C = null;
  }function X(a) {
    return a ? a.__styleInfo : null;
  }function qe(a, b) {
    return a.__styleInfo = b;
  }pe.prototype.i = function () {
    return this.A;
  };pe.prototype._getStyleRules = pe.prototype.i;function re(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;return b && b.call(this, a);
  }var se = /:host\s*>\s*/,
      te = navigator.userAgent.match("Trident");function ue() {}function ve(a) {
    var b = {},
        c = [],
        d = 0;Fd(a, function (f) {
      we(f);f.index = d++;f = f.j.cssText;for (var g; g = Ad.exec(f);) {
        var h = g[1];":" !== g[2] && (b[h] = !0);
      }
    }, function (f) {
      c.push(f);
    });a.h = c;a = [];for (var e in b) a.push(e);return a;
  }
  function we(a) {
    if (!a.j) {
      var b = {},
          c = {};xe(a, c) && (b.B = c, a.rules = null);b.cssText = a.parsedCssText.replace(Dd, "").replace(yd, "");a.j = b;
    }
  }function xe(a, b) {
    var c = a.j;if (c) {
      if (c.B) return Object.assign(b, c.B), !0;
    } else {
      c = a.parsedCssText;for (var d; a = yd.exec(c);) {
        d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
      }return d;
    }
  }
  function ye(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? ze(a, b, c) : Md(b, function (d, e, f, g) {
      if (!e) return d + g;(e = ye(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = ye(a, c[f] || f, c) || f;return d + (e || "") + g;
    }));return b && b.trim() || "";
  }
  function ze(a, b, c) {
    b = b.split(";");for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      zd.lastIndex = 0;if (f = zd.exec(e)) e = ye(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var g = e.substring(f);g = g.trim();g = ye(a, g, c) || g;e = e.substring(0, f) + g;
      }b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }return b.join(";");
  }
  function Ae(a, b) {
    var c = {},
        d = [];Fd(a, function (e) {
      e.j || we(e);var f = e.l || e.parsedSelector;b && e.j.B && f && re.call(b, f) && (xe(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
    }, null, !0);return { B: c, key: d };
  }
  function Be(a, b, c, d) {
    b.j || we(b);if (b.j.B) {
      var e = U(a);a = e.is;e = e.L;e = a ? Zd(a, e) : "html";var f = b.parsedSelector;var g = !!f.match(se) || "html" === e && -1 < f.indexOf("html");var h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));if (g || h) c = e, h && (b.l || (b.l = $d(V, b, V.h, a ? "." + a : "", e)), c = b.l || e), g && "html" === e && (c = b.l || b.R), d({ Z: c, ua: h, Ea: g });
    }
  }
  function Ce(a, b, c) {
    var d = {},
        e = {};Fd(b, function (f) {
      Be(a, f, c, function (g) {
        re.call(a._element || a, g.Z) && (g.ua ? xe(f, d) : xe(f, e));
      });
    }, null, !0);return { xa: e, ta: d };
  }
  function De(a, b, c, d) {
    var e = U(b),
        f = Zd(e.is, e.L),
        g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
        h = X(b);e = h.A;h = h.cssBuild;var l = Ee(e, d);return Xd(b, e, function (k) {
      var m = "";k.j || we(k);k.j.cssText && (m = ze(a, k.j.cssText, c));k.cssText = m;if (!P && !Hd(k) && k.cssText) {
        var r = m = k.cssText;null == k.ca && (k.ca = Bd.test(m));if (k.ca) if (null == k.P) {
          k.P = [];for (var u in l) r = l[u], r = r(m), m !== r && (m = r, k.P.push(u));
        } else {
          for (u = 0; u < k.P.length; ++u) r = l[k.P[u]], m = r(m);r = m;
        }k.cssText = r;k.l = k.l || k.selector;
        m = "." + d;u = Pd(k.l);r = 0;for (var M = u.length, Ma = void 0; r < M && (Ma = u[r]); r++) u[r] = Ma.match(g) ? Ma.replace(f, m) : m + " " + Ma;k.selector = u.join(",");
      }
    }, h);
  }function Ee(a, b) {
    a = a.h;var c = {};if (!P && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
      var f = e,
          g = b;f.o = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");f.g = f.keyframesName + "-" + g;f.l = f.l || f.selector;f.selector = f.l.replace(f.keyframesName, f.g);c[e.keyframesName] = Fe(e);
    }return c;
  }function Fe(a) {
    return function (b) {
      return b.replace(a.o, a.g);
    };
  }
  function Ge(a, b) {
    var c = He,
        d = Gd(a);a.textContent = S(d, function (e) {
      var f = e.cssText = e.parsedCssText;e.j && e.j.cssText && (f = f.replace(rd, "").replace(sd, ""), e.cssText = ze(c, f, b));
    });
  }da.Object.defineProperties(ue.prototype, { g: { configurable: !0, enumerable: !0, get: function () {
        return "x-scope";
      } } });var He = new ue();var Ie = {},
      Je = window.customElements;if (Je && !P && !Q) {
    var Ke = Je.define;Je.define = function (a, b, c) {
      Ie[a] || (Ie[a] = Kd(a));Ke.call(Je, a, b, c);
    };
  };function Le() {
    this.cache = {};
  }Le.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];e.push({ B: b, styleElement: c, v: d });100 < e.length && e.shift();this.cache[a] = e;
  };function Me() {}var Ne = new RegExp(V.g + "\\s*([^\\s]*)");function Oe(a) {
    return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(Ne)) ? a[1] : "";
  }function Pe(a) {
    var b = Od(a).getRootNode();return b === a || b === a.ownerDocument ? "" : (a = b.host) ? U(a).is : "";
  }
  function Qe(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
              g = Oe(e);if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === Qd(e))) Wd(e, g);else if (f instanceof ShadowRoot) for (f = Pe(e), f !== g && Vd(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + V.g + ")"), g = 0; g < e.length; g++) {
            f = e[g];
            var h = Pe(f);h && W(f, h);
          }
        }
      }
    }
  }
  if (!(P || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var Re = new MutationObserver(Qe),
        Se = function (a) {
      Re.observe(a, { childList: !0, subtree: !0 });
    };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Se(document);else {
      var Te = function () {
        Se(document.body);
      };window.HTMLImports ? window.HTMLImports.whenReady(Te) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            Te();document.removeEventListener("readystatechange", a);
          };document.addEventListener("readystatechange", a);
        } else Te();
      });
    }Me = function () {
      Qe(Re.takeRecords());
    };
  };var Ue = {};var Ve = Promise.resolve();function We(a) {
    if (a = Ue[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function Xe(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function Ye(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a._validating || (a._validating = !0, Ve.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a._validating = !1;
    }));
  };var Ze = {},
      $e = new Le();function Y() {
    this.da = {};this.i = document.documentElement;var a = new ed();a.rules = [];this.o = qe(this.i, new pe(a));this.R = !1;this.g = this.h = null;
  }n = Y.prototype;n.flush = function () {
    Me();
  };n.ra = function (a) {
    return Gd(a);
  };n.Ba = function (a) {
    return S(a);
  };n.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);this.prepareTemplateStyles(a, b, c);
  };
  n.prepareTemplateStyles = function (a, b, c) {
    if (!a._prepared && !Q) {
      P || Ie[b] || (Ie[b] = Kd(b));a._prepared = !0;a.name = b;a.extends = c;Ue[b] = a;var d = Qd(a),
          e = Rd(d);c = { is: b, extends: c };for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
        var l = g[h];if (l.hasAttribute("shady-unscoped")) {
          if (!P) {
            var k = l.textContent;if (!Ed.has(k)) {
              Ed.add(k);var m = document.createElement("style");m.setAttribute("shady-unscoped", "");m.textContent = k;document.head.appendChild(m);
            }l.parentNode.removeChild(l);
          }
        } else f.push(l.textContent), l.parentNode.removeChild(l);
      }f = f.join("").trim() + (Ze[b] || "");af(this);if (!e) {
        if (g = !d) g = zd.test(f) || yd.test(f), zd.lastIndex = 0, yd.lastIndex = 0;h = fd(f);g && R && this.h && this.h.transformRules(h, b);a._styleAst = h;
      }g = [];R || (g = ve(a._styleAst));if (!g.length || R) h = P ? a.content : null, b = Ie[b] || null, d = Xd(c, a._styleAst, null, d, e ? f : ""), d = d.length ? Id(d, c.is, h, b) : null, a._style = d;a.g = g;
    }
  };n.va = function (a, b) {
    Ze[b] = a.join(" ");
  };
  n.prepareTemplateDom = function (a, b) {
    if (!Q) {
      var c = Qd(a);P || "shady" === c || a._domPrepared || (a._domPrepared = !0, Td(a.content, b));
    }
  };function bf(a) {
    var b = U(a),
        c = b.is;b = b.L;var d = Ie[c] || null,
        e = Ue[c];if (e) {
      c = e._styleAst;var f = e.g;e = Qd(e);b = new pe(c, d, f, b, e);qe(a, b);return b;
    }
  }
  function cf(a) {
    !a.g && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.g = window.ShadyCSS.CustomStyleInterface, a.g.transformCallback = function (b) {
      a.ga(b);
    }, a.g.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.g.enqueued || a.R) && a.flushCustomStyles();
      });
    });
  }function af(a) {
    if (!a.h && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
      a.h = window.ShadyCSS.ApplyShim;a.h.invalidCallback = We;var b = !0;
    } else b = !1;cf(a);return b;
  }
  n.flushCustomStyles = function () {
    if (!Q) {
      var a = af(this);if (this.g) {
        var b = this.g.processStyles();if ((a || this.g.enqueued) && !Rd(this.o.cssBuild)) {
          if (R) {
            if (!this.o.cssBuild) for (a = 0; a < b.length; a++) {
              var c = this.g.getStyleForCustomStyle(b[a]);if (c && R && this.h) {
                var d = Gd(c);af(this);this.h.transformRules(d);c.textContent = S(d);
              }
            }
          } else {
            df(this, b);ef(this, this.i, this.o);for (a = 0; a < b.length; a++) (c = this.g.getStyleForCustomStyle(b[a])) && Ge(c, this.o.C);this.R && this.styleDocument();
          }this.g.enqueued = !1;
        }
      }
    }
  };
  function df(a, b) {
    b = b.map(function (c) {
      return a.g.getStyleForCustomStyle(c);
    }).filter(function (c) {
      return !!c;
    });b.sort(function (c, d) {
      c = d.compareDocumentPosition(c);return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
    });a.o.A.rules = b.map(function (c) {
      return Gd(c);
    });
  }
  n.styleElement = function (a, b) {
    if (Q) {
      if (b) {
        X(a) || qe(a, new pe(null));var c = X(a);c.u = c.u || {};Object.assign(c.u, b);ff(this, a, c);
      }
    } else if (c = X(a) || bf(a)) if (a !== this.i && (this.R = !0), b && (c.u = c.u || {}, Object.assign(c.u, b)), R) ff(this, a, c);else if (this.flush(), ef(this, a, c), c.X && c.X.length) {
      b = U(a).is;var d;a: {
        if (d = $e.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
          var f = d[e];b: {
            var g = c.X;for (var h = 0; h < g.length; h++) {
              var l = g[h];if (f.B[l] !== c.C[l]) {
                g = !1;break b;
              }
            }g = !0;
          }if (g) {
            d = f;break a;
          }
        }d = void 0;
      }g = d ? d.styleElement : null;e = c.v;
      (f = d && d.v) || (f = this.da[b] = (this.da[b] || 0) + 1, f = b + "-" + f);c.v = f;f = c.v;h = He;h = g ? g.textContent || "" : De(h, a, c.C, f);l = X(a);var k = l.g;k && !P && k !== g && (k._useCount--, 0 >= k._useCount && k.parentNode && k.parentNode.removeChild(k));P ? l.g ? (l.g.textContent = h, g = l.g) : h && (g = Id(h, f, a.shadowRoot, l.h)) : g ? g.parentNode || (te && -1 < h.indexOf("@media") && (g.textContent = h), Jd(g, null, l.h)) : h && (g = Id(h, f, null, l.h));g && (g._useCount = g._useCount || 0, l.g != g && g._useCount++, l.g = g);f = g;P || (g = c.v, l = h = a.getAttribute("class") || "", e && (l = h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), l += (l ? " " : "") + "x-scope " + g, h !== l && Nd(a, l));d || $e.store(b, c.C, f, c.v);
    }
  };
  function ff(a, b, c) {
    var d = U(b).is;if (c.u) {
      var e = c.u,
          f;for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
    }e = Ue[d];if (!(!e && b !== a.i || e && "" !== Qd(e)) && e && e._style && !Xe(e)) {
      if (Xe(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) af(a), a.h && a.h.transformRules(e._styleAst, d), e._style.textContent = Xd(b, c.A), Ye(e);P && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Xd(b, c.A));c.A = e._styleAst;
    }
  }
  function gf(a, b) {
    return (b = Od(b).getRootNode().host) ? X(b) || bf(b) ? b : gf(a, b) : a.i;
  }function ef(a, b, c) {
    var d = gf(a, b),
        e = X(d),
        f = e.C;d === a.i || f || (ef(a, d, e), f = e.C);a = Object.create(f || null);d = Ce(b, c.A, c.cssBuild);b = Ae(e.A, b).B;Object.assign(a, d.ta, b, d.xa);b = c.u;for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;g = He;b = Object.getOwnPropertyNames(a);for (e = 0; e < b.length; e++) d = b[e], a[d] = ye(g, a[d], a);c.C = a;
  }n.styleDocument = function (a) {
    this.styleSubtree(this.i, a);
  };
  n.styleSubtree = function (a, b) {
    var c = Od(a),
        d = c.shadowRoot,
        e = a === this.i;(d || e) && this.styleElement(a, b);if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
      return Od(f).shadowRoot;
    }), b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  n.ga = function (a) {
    var b = this,
        c = Qd(a);c !== this.o.cssBuild && (this.o.cssBuild = c);if (!Rd(c)) {
      var d = Gd(a);Fd(d, function (e) {
        if (P) oe(e);else {
          var f = V;e.selector = e.parsedSelector;oe(e);e.selector = e.l = $d(f, e, f.i, void 0, void 0);
        }R && "" === c && (af(b), b.h && b.h.transformRule(e));
      });R ? a.textContent = S(d) : this.o.A.rules.push(d);
    }
  };n.getComputedStyleValue = function (a, b) {
    var c;R || (c = (X(a) || X(gf(this, a))).C[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  n.Aa = function (a, b) {
    var c = Od(a).getRootNode();b = b ? ("string" === typeof b ? b : String(b)).split(/\s/) : [];c = c.host && c.host.localName;if (!c) {
      var d = a.getAttribute("class");if (d) {
        d = d.split(/\s/);for (var e = 0; e < d.length; e++) if (d[e] === V.g) {
          c = d[e + 1];break;
        }
      }
    }c && b.push(V.g, c);R || (c = X(a)) && c.v && b.push(He.g, c.v);Nd(a, b.join(" "));
  };n.oa = function (a) {
    return X(a);
  };n.za = function (a, b) {
    W(a, b);
  };n.Ca = function (a, b) {
    W(a, b, !0);
  };n.ya = function (a) {
    return Pe(a);
  };n.qa = function (a) {
    return Oe(a);
  };Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;Y.prototype.styleElement = Y.prototype.styleElement;Y.prototype.styleDocument = Y.prototype.styleDocument;Y.prototype.styleSubtree = Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;Y.prototype.setElementClass = Y.prototype.Aa;Y.prototype._styleInfoForNode = Y.prototype.oa;Y.prototype.transformCustomStyleForDocument = Y.prototype.ga;Y.prototype.getStyleAst = Y.prototype.ra;Y.prototype.styleAstToString = Y.prototype.Ba;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;Y.prototype.scopeNode = Y.prototype.za;Y.prototype.unscopeNode = Y.prototype.Ca;Y.prototype.scopeForNode = Y.prototype.ya;Y.prototype.currentScopeForNode = Y.prototype.qa;Y.prototype.prepareAdoptedCssText = Y.prototype.va;Object.defineProperties(Y.prototype, { nativeShadow: { get: function () {
        return P;
      } }, nativeCss: { get: function () {
        return R;
      } } });var Z = new Y(),
      hf,
      jf;window.ShadyCSS && (hf = window.ShadyCSS.ApplyShim, jf = window.ShadyCSS.CustomStyleInterface);
  window.ShadyCSS = { ScopingShim: Z, prepareTemplate: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplate(a, b, c);
    }, prepareTemplateDom: function (a, b) {
      Z.prepareTemplateDom(a, b);
    }, prepareTemplateStyles: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplateStyles(a, b, c);
    }, styleSubtree: function (a, b) {
      Z.flushCustomStyles();Z.styleSubtree(a, b);
    }, styleElement: function (a) {
      Z.flushCustomStyles();Z.styleElement(a);
    }, styleDocument: function (a) {
      Z.flushCustomStyles();Z.styleDocument(a);
    }, flushCustomStyles: function () {
      Z.flushCustomStyles();
    },
    getComputedStyleValue: function (a, b) {
      return Z.getComputedStyleValue(a, b);
    }, nativeCss: R, nativeShadow: P, cssBuild: xd, disableRuntime: Q };hf && (window.ShadyCSS.ApplyShim = hf);jf && (window.ShadyCSS.CustomStyleInterface = jf);
}).call(this);

//# sourceMappingURL=webcomponents-sd.js.map