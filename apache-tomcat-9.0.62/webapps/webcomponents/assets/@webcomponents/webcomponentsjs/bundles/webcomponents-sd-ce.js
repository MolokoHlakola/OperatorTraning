/// BareSpecifier=@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce
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
  };function r(a) {
    a.__shady || (a.__shady = new ea());return a.__shady;
  }function t(a) {
    return a && a.__shady;
  };var u = window.ShadyDOM || {};u.Fa = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var fa = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");u.m = !!(fa && fa.configurable && fa.get);u.ha = u.force || !u.Fa;u.s = u.noPatch || !1;u.O = u.preferPerformance;u.ja = "on-demand" === u.s;u.va = navigator.userAgent.match("Trident");function ha() {
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
    this.g = !1;this.addedNodes = [];this.removedNodes = [];this.Y = new Set();
  }function Da(a) {
    a.g || (a.g = !0, oa(function () {
      a.flush();
    }));
  }Ca.prototype.flush = function () {
    if (this.g) {
      this.g = !1;var a = this.takeRecords();a.length && this.Y.forEach(function (b) {
        b(a);
      });
    }
  };Ca.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
    }return [];
  };
  function Ea(a, b) {
    var c = r(a);c.N || (c.N = new Ca());c.N.Y.add(b);var d = c.N;return { za: b, J: d, Aa: a, takeRecords: function () {
        return d.takeRecords();
      } };
  }function Fa(a) {
    var b = a && a.J;b && (b.Y.delete(a.za), b.Y.size || (r(a.Aa).N = null));
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
      Ma = Ka("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function Na(a, b) {
    "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
      a: {
        var h = g;var k = a,
            l = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
            k = h.localName;for (var m = "<" + k, q = h.attributes, v = 0, S; S = q[v]; v++) m += " " + S.name + '="' + S.value.replace(Ha, Ja) + '"';m += ">";h = La[k] ? m : m + Na(h, l) + "</" + k + ">";break a;case Node.TEXT_NODE:
            h = h.data;h = k && Ma[k.localName] ? h : h.replace(Ia, Ja);break a;case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";break a;default:
            throw window.console.error(h), Error("not implemented");}
      }c += h;
    }return c;
  };var Oa = u.m,
      Pa = { querySelector: function (a) {
      return this.__shady_native_querySelector(a);
    }, querySelectorAll: function (a) {
      return this.__shady_native_querySelectorAll(a);
    } },
      Qa = {};function Ra(a) {
    Qa[a] = function (b) {
      return b["__shady_native_" + a];
    };
  }function Sa(a, b) {
    z(a, b, "__shady_native_");for (var c in b) Ra(c);
  }function C(a, b) {
    b = void 0 === b ? [] : b;for (var c = 0; c < b.length; c++) {
      var d = b[c],
          e = Object.getOwnPropertyDescriptor(a, d);e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? Pa[d] || (Pa[d] = e.value) : Ra(d));
    }
  }
  var D = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      E = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
      Ta = document.implementation.createHTMLDocument("inert");function Ua(a) {
    for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
  }var Va = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
      Wa = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];
  function Xa() {
    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];window.EventTarget ? (C(window.EventTarget.prototype, a), void 0 === window.__shady_native_addEventListener && C(Window.prototype, a)) : (C(Node.prototype, a), C(Window.prototype, a));Oa ? C(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Sa(Node.prototype, { parentNode: { get: function () {
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
              Ua(this);(0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);break;default:
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
        } } };Oa ? (C(Element.prototype, Va), C(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), C(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (Sa(Element.prototype, a), Sa(Element.prototype, { previousElementSibling: { get: function () {
          E.currentNode = this;return E.previousSibling();
        } }, nextElementSibling: { get: function () {
          E.currentNode = this;return E.nextSibling();
        } }, innerHTML: { get: function () {
          return Na(this, sa);
        }, set: function (b) {
          var c = "template" === this.localName ? this.content : this;Ua(c);var d = this.localName || "div";d = this.namespaceURI && this.namespaceURI !== Ta.namespaceURI ? Ta.createElementNS(this.namespaceURI, d) : Ta.createElement(d);d.innerHTML = b;for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0);
        } }, className: { get: function () {
          return this.getAttribute("class") || "";
        }, set: function (b) {
          this.setAttribute("class", b);
        } } }));C(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));C(Element.prototype, Wa);C(HTMLElement.prototype, ["focus", "blur"]);window.HTMLTemplateElement && C(window.HTMLTemplateElement.prototype, ["innerHTML"]);Oa ? C(DocumentFragment.prototype, Va) : Sa(DocumentFragment.prototype, a);C(DocumentFragment.prototype, Wa);Oa ? (C(Document.prototype, Va), C(Document.prototype, ["activeElement"])) : Sa(Document.prototype, a);C(Document.prototype, ["importNode", "getElementById", "elementFromPoint", ha()]);C(Document.prototype, Wa);
  };var Ya = A({ get childNodes() {
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
      Za = A({ get textContent() {
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
  }bb(Ya);bb(Za);bb(ab);var cb = u.m || !0 === u.s,
      db = cb ? function () {} : function (a) {
    var b = r(a);b.xa || (b.xa = !0, va(a, ab));
  },
      eb = cb ? function () {} : function (a) {
    var b = r(a);b.wa || (b.wa = !0, va(a, Ya), window.customElements && window.customElements.polyfillWrapFlushCallback && !u.s || va(a, Za));
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
      var b = !!a.capture;var c = !!a.once;var d = !!a.passive;var e = a.G;
    } else b = !!a, d = c = !1;return { ta: e, capture: b, once: c, passive: d, sa: hb ? a : b };
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
        c = b.map(function (k) {
      return ob(k, b);
    }),
        d = a.bubbles;Object.defineProperty(a, "currentTarget", { configurable: !0, enumerable: !0, get: function () {
        return g;
      } });var e = Event.CAPTURING_PHASE;Object.defineProperty(a, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
        return e;
      } });for (var f = b.length - 1; 0 <= f; f--) {
      var g = b[f];e = g === c[f] ? Event.AT_TARGET : Event.CAPTURING_PHASE;sb(a, g, "capture");if (a.ca) return;
    }for (f = 0; f < b.length; f++) {
      g = b[f];var h = g === c[f];if (h || d) if (e = h ? Event.AT_TARGET : Event.BUBBLING_PHASE, sb(a, g, "bubble"), a.ca) return;
    }e = 0;g = null;
  }function ub(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
          k = h.type,
          l = h.capture,
          m = h.once,
          q = h.passive;if (b === h.node && c === k && d === l && e === m && f === q) return g;
    }return -1;
  }function vb(a) {
    Ba();return !u.O && this instanceof Node && !pa(document, this) ? (a.__target || wb(a, this), tb(a)) : this.__shady_native_dispatchEvent(a);
  }
  function xb(a, b, c) {
    var d = ib(c),
        e = d.capture,
        f = d.once,
        g = d.passive,
        h = d.ta;d = d.sa;if (b) {
      var k = typeof b;if ("function" === k || "object" === k) if ("object" !== k || b.handleEvent && "function" === typeof b.handleEvent) {
        if (kb[a]) return this.__shady_native_addEventListener(a, b, d);var l = h || this;if (h = b[fb]) {
          if (-1 < ub(h, l, a, e, f, g)) return;
        } else b[fb] = [];h = function (m) {
          f && this.__shady_removeEventListener(a, b, c);m.__target || wb(m);if (l !== this) {
            var q = Object.getOwnPropertyDescriptor(m, "currentTarget");Object.defineProperty(m, "currentTarget", { get: function () {
                return l;
              }, configurable: !0 });var v = Object.getOwnPropertyDescriptor(m, "eventPhase");Object.defineProperty(m, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
                return e ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
              } });
          }m.__previousCurrentTarget = m.currentTarget;if (!x(l) && "slot" !== l.localName || -1 != m.composedPath().indexOf(l)) if (m.composed || -1 < m.composedPath().indexOf(l)) if (rb(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === l || l instanceof Window) {
            var S = "function" === k ? b.call(l, m) : b.handleEvent && b.handleEvent(m);l !== this && (q ? (Object.defineProperty(m, "currentTarget", q), q = null) : delete m.currentTarget, v ? (Object.defineProperty(m, "eventPhase", v), v = null) : delete m.eventPhase);return S;
          }
        };b[fb].push({ node: l, type: a, capture: e, once: f, passive: g, Ta: h });this.__handlers = this.__handlers || {};this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] };this.__handlers[a][e ? "capture" : "bubble"].push(h);
        qb[a] || this.__shady_native_addEventListener(a, h, d);
      }
    }
  }
  function yb(a, b, c) {
    if (b) {
      var d = ib(c);c = d.capture;var e = d.once,
          f = d.passive,
          g = d.ta;d = d.sa;if (kb[a]) return this.__shady_native_removeEventListener(a, b, d);var h = g || this;g = void 0;var k = null;try {
        k = b[fb];
      } catch (l) {}k && (e = ub(k, h, a, c, e, f), -1 < e && (g = k.splice(e, 1)[0].Ta, k.length || (b[fb] = void 0)));this.__shady_native_removeEventListener(a, g || b, d);g && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
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
      Event.prototype.stopPropagation.call(this);this.ca = !0;
    }, stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);this.ca = this.__immediatePropagationStopped = !0;
    } });
  function wb(a, b) {
    b = void 0 === b ? a.target : b;a.__target = b;a.__relatedTarget = a.relatedTarget;if (u.m) {
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
        var c = r(this),
            d = a.substring(2);c.F || (c.F = {});c.F[a] && this.removeEventListener(d, c.F[a]);this.__shady_addEventListener(d, b);c.F[a] = b;
      }, get: function () {
        var b = t(this);return b && b.F && b.F[a];
      }, configurable: !0 };
  };function Ib(a, b) {
    return { index: a, P: [], X: b };
  }
  function Jb(a, b, c, d) {
    var e = 0,
        f = 0,
        g = 0,
        h = 0,
        k = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
      for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;g = k;
    }if (b == a.length && d == c.length) {
      h = a.length;for (var l = c.length, m = 0; m < k - g && Kb(a[--h], c[--l]);) m++;h = m;
    }e += g;f += g;b -= h;d -= h;if (0 == b - e && 0 == d - f) return [];if (e == b) {
      for (b = Ib(e, 0); f < d;) b.P.push(c[f++]);return [b];
    }if (f == d) return [Ib(e, b - e)];k = e;g = f;d = d - g + 1;h = b - k + 1;b = Array(d);for (l = 0; l < d; l++) b[l] = Array(h), b[l][0] = l;for (l = 0; l < h; l++) b[0][l] = l;for (l = 1; l < d; l++) for (m = 1; m < h; m++) if (a[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1];else {
      var q = b[l - 1][m] + 1,
          v = b[l][m - 1] + 1;b[l][m] = q < v ? q : v;
    }k = b.length - 1;g = b[0].length - 1;d = b[k][g];for (a = []; 0 < k || 0 < g;) 0 == k ? (a.push(2), g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], q = l < m ? l < h ? l : h : m < h ? m : h, q == h ? (h == d ? a.push(0) : (a.push(1), d = h), k--, g--) : q == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m));a.reverse();b = void 0;k = [];for (g = 0; g < a.length; g++) switch (a[g]) {case 0:
        b && (k.push(b), b = void 0);e++;f++;break;case 1:
        b || (b = Ib(e, 0));b.X++;e++;b.P.push(c[f]);f++;break;case 2:
        b || (b = Ib(e, 0));
        b.X++;e++;break;case 3:
        b || (b = Ib(e, 0)), b.P.push(c[f]), f++;}b && k.push(b);return k;
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
      Tb = u.O,
      Ub = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      Vb = Ub && Ub.get;function Wb(a) {
    for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
  }function Xb(a) {
    var b = t(a);if (b && void 0 !== b.ba) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) Xb(b);if (a = t(a)) a.ba = void 0;
  }function Yb(a) {
    var b = a;if (a && "slot" === a.localName) {
      var c = t(a);(c = c && c.L) && (b = c.length ? c[0] : Yb(a.__shady_nextSibling));
    }return b;
  }
  function Zb(a, b, c) {
    if (a = (a = t(a)) && a.N) {
      if (b) if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c && a.removedNodes.push(c);Da(a);
    }
  }
  var ec = A({ get parentNode() {
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
          if (!w(this) && u.m) {
            var b = this.__shady_firstChild;(b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Wb(this);this.__shady_native_textContent = a;
          } else Wb(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));break;default:
          this.nodeValue = a;}
    }, insertBefore: function (a, b) {
      if (this.ownerDocument !== Sb && a.ownerDocument !== Sb) return this.__shady_native_insertBefore(a, b), a;if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
      if (b) {
        var c = t(b);c = c && c.parentNode;if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }if (b === a) return a;Zb(this, a);var d = [],
          e = (c = $b(this)) ? c.host.localName : Qb(this),
          f = a.__shady_parentNode;if (f) {
        var g = Qb(a);var h = !!c || !$b(a) || Tb && void 0 !== this.__noInsertionPoint;f.__shady_removeChild(a, h);
      }f = !0;var k = (!Tb || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Pb(a, e),
          l = c && !a.__noInsertionPoint && (!Tb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);if (l || k) k && (g = g || Qb(a)), Rb(a, function (m) {
        l && "slot" === m.localName && d.push(m);if (k) {
          var q = g;F() && (q && Ob(m, q), (q = F()) && q.scopeNode(m, e));
        }
      });d.length && (ac(c), c.i.push.apply(c.i, p(d)), G(c));w(this) && (bc(a, this, b), h = t(this), h.root ? (f = !1, ia(this) && G(h.root)) : c && "slot" === this.localName && (f = !1, G(c)));f ? (c = x(this) ? this.host : this, b ? (b = Yb(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);return a;
    }, appendChild: function (a) {
      if (this != a || !x(a)) return this.__shady_insertBefore(a);
    }, removeChild: function (a, b) {
      b = void 0 === b ? !1 : b;if (this.ownerDocument !== Sb) return this.__shady_native_removeChild(a);if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);Zb(this, null, a);var c = $b(a),
          d = c && cc(c, a),
          e = t(this);if (w(this) && (dc(a, this), ia(this))) {
        G(e.root);var f = !0;
      }if (F() && !b && c && a.nodeType !== Node.TEXT_NODE) {
        var g = Qb(a);Rb(a, function (h) {
          Ob(h, g);
        });
      }Xb(a);c && ((b = "slot" === this.localName) && (f = !0), (d || b) && G(c));f || (f = x(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));return a;
    }, replaceChild: function (a, b) {
      this.__shady_insertBefore(a, b);this.__shady_removeChild(b);return a;
    }, cloneNode: function (a) {
      if ("template" == this.localName) return this.__shady_native_cloneNode(a);var b = this.__shady_native_cloneNode(!1);if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_firstChild;for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
      }return b;
    }, getRootNode: function (a) {
      if (this && this.nodeType) {
        var b = r(this),
            c = b.ba;void 0 === c && (x(this) ? (c = this, b.ba = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.ba = c)));return c;
      }
    }, contains: function (a) {
      return qa(this, a);
    } });var gc = A({ get assignedSlot() {
      var a = this.__shady_parentNode;(a = a && a.__shady_shadowRoot) && fc(a);return (a = t(this)) && a.assignedSlot || null;
    } });function hc(a, b, c) {
    var d = [];ic(a, b, c, d);return d;
  }function ic(a, b, c, d) {
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      var e;if (e = a.nodeType === Node.ELEMENT_NODE) {
        e = a;var f = b,
            g = c,
            h = d,
            k = f(e);k && h.push(e);g && g(k) ? e = k : (ic(e, f, g, h), e = void 0);
      }if (e) break;
    }
  }
  var jc = { get firstElementChild() {
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
      kc = A((jc.append = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];this.__shady_insertBefore(B.apply(null, p(b)), null);
  }, jc.prepend = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];this.__shady_insertBefore(B.apply(null, p(b)), this.__shady_firstChild);
  }, jc.replaceChildren = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
    for (; null !== (c = this.__shady_firstChild);) this.__shady_removeChild(c);this.__shady_insertBefore(B.apply(null, p(b)), null);
  }, jc)),
      lc = A({ querySelector: function (a) {
      return hc(this, function (b) {
        return ka.call(b, a);
      }, function (b) {
        return !!b;
      })[0] || null;
    }, querySelectorAll: function (a, b) {
      if (b) {
        b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c = this.__shady_getRootNode();return ra(b.filter(function (d) {
          return d.__shady_getRootNode() == c;
        }));
      }return ra(hc(this, function (d) {
        return ka.call(d, a);
      }));
    } }),
      mc = u.O && !u.s ? wa({}, kc) : kc;wa(kc, lc); /*
                                                     Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
                                                     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                     Code distributed by Google as part of the polymer project is also
                                                     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                     */
  var nc = A({ after: function (a) {
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
    } });var oc = window.document;function pc(a, b) {
    if ("slot" === b) a = a.__shady_parentNode, ia(a) && G(t(a).root);else if ("slot" === a.localName && "name" === b && (b = $b(a))) {
      if (b.g) {
        qc(b);var c = a.ya,
            d = rc(a);if (d !== c) {
          c = b.h[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.h[d] || (b.h[d] = []);c.push(a);1 < c.length && (b.h[d] = sc(c));
        }
      }G(b);
    }
  }
  var tc = A({ get previousElementSibling() {
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
      this.ownerDocument !== oc ? this.__shady_native_setAttribute(a, b) : Nb(this, a, b) || (this.__shady_native_setAttribute(a, b), pc(this, a));
    }, removeAttribute: function (a) {
      this.ownerDocument !== oc ? this.__shady_native_removeAttribute(a) : Nb(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a), pc(this, a));
    } });u.O || Fb.forEach(function (a) {
    tc[a] = Hb(a);
  });
  var yc = A({ attachShadow: function (a) {
      if (!this) throw Error("Must provide a host.");if (!a) throw Error("Not enough arguments.");if (a.shadyUpgradeFragment && !u.va) {
        var b = a.shadyUpgradeFragment;b.__proto__ = ShadowRoot.prototype;uc(b, this, a);vc(b, b);a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");b.__noInsertionPoint = void 0;if (a && a.length) {
          var c = b;ac(c);c.i.push.apply(c.i, p(a));G(b);
        }b.host.__shady_native_appendChild(b);
      } else b = new wc(xc, this, a);return this.__CE_shadowRoot = b;
    }, get shadowRoot() {
      var a = t(this);
      return a && a.Ka || null;
    } });wa(tc, yc);var zc = document.implementation.createHTMLDocument("inert"),
      Ac = A({ get innerHTML() {
      return w(this) ? Na("template" === this.localName ? this.content : this, ta) : this.__shady_native_innerHTML;
    }, set innerHTML(a) {
      if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
        Wb(this);var b = this.localName || "div";b = this.namespaceURI && this.namespaceURI !== zc.namespaceURI ? zc.createElementNS(this.namespaceURI, b) : zc.createElement(b);for (u.m ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
      }
    } });var Bc = A({ blur: function () {
      var a = t(this);(a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
    } });u.O || Gb.forEach(function (a) {
    Bc[a] = Hb(a);
  });var Cc = A({ assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.__shady_getRootNode();b && x(b) && fc(b);return (b = t(this)) ? (a && a.flatten ? b.L : b.assignedNodes) || [] : [];
      }
    }, addEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) xb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.G = this;d.__shady_addEventListener(a, b, c);
      }
    }, removeEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) yb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.G = this;d.__shady_removeEventListener(a, b, c);
      }
    } });var Dc = A({ getElementById: function (a) {
      return "" === a ? null : hc(this, function (b) {
        return b.id == a;
      }, function (b) {
        return !!b;
      })[0] || null;
    } });function Ec(a, b) {
    for (var c; b && !a.has(c = b.__shady_getRootNode());) b = c.host;return b;
  }function Fc(a) {
    var b = new Set();for (b.add(a); x(a) && a.host;) a = a.host.__shady_getRootNode(), b.add(a);return b;
  }
  var Gc = "__shady_native_" + ha(),
      Hc = A({ get activeElement() {
      var a = u.m ? document.__shady_native_activeElement : document.activeElement;if (!a || !a.nodeType) return null;var b = !!x(this);if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;for (b = $b(a); b && b !== this;) a = b.host, b = $b(a);return this === document ? b ? null : a : b === this ? a : null;
    }, elementsFromPoint: function (a, b) {
      a = [].slice.call(document[Gc](a, b));b = Fc(this);for (var c = new Set(), d = 0; d < a.length; d++) c.add(Ec(b, a[d]));var e = [];c.forEach(function (f) {
        return e.push(f);
      });
      return e;
    }, elementFromPoint: function (a, b) {
      return this.__shady_elementsFromPoint(a, b)[0] || null;
    } });var Ic = window.document,
      Jc = A({ importNode: function (a, b) {
      if (a.ownerDocument !== Ic || "template" === a.localName) return this.__shady_native_importNode(a, b);var c = this.__shady_native_importNode(a, !1);if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);return c;
    } });var Kc = A({ dispatchEvent: vb, addEventListener: xb.bind(window), removeEventListener: yb.bind(window) });var Lc = {};Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Lc.parentElement = ec.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Lc.contains = ec.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Lc.children = kc.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Lc.innerHTML = Ac.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Lc.className = tc.className);
  var H = { EventTarget: [Lb], Node: [ec, window.EventTarget ? null : Lb], Text: [gc], Comment: [gc], CDATASection: [gc], ProcessingInstruction: [gc], Element: [tc, kc, nc, gc, !u.m || "innerHTML" in Element.prototype ? Ac : null, window.HTMLSlotElement ? null : Cc], HTMLElement: [Bc, Lc], HTMLSlotElement: [Cc], DocumentFragment: [mc, Dc], Document: [Jc, mc, Dc, Hc], Window: [Kc], CharacterData: [nc] },
      Mc = u.m ? null : ["innerHTML", "textContent"];function I(a, b, c, d) {
    b.forEach(function (e) {
      return a && e && z(a, e, c, d);
    });
  }
  function Nc(a) {
    var b = a ? null : Mc,
        c;for (c in H) I(window[c] && window[c].prototype, H[c], a, b);
  }["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (a) {
    var b = window[a],
        c = Object.create(b.prototype);c.__shady_protoIsPatched = !0;I(c, H.EventTarget);I(c, H.Node);H[a] && I(c, H[a]);b.prototype.__shady_patchedProto = c;
  });function Oc(a) {
    a.__shady_protoIsPatched = !0;I(a, H.EventTarget);I(a, H.Node);I(a, H.Element);I(a, H.HTMLElement);I(a, H.HTMLSlotElement);return a;
  };var Pc = u.ja,
      Qc = u.m;function Rc(a, b) {
    if (Pc && !a.__shady_protoIsPatched && !x(a)) {
      var c = Object.getPrototypeOf(a),
          d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;d || (d = Object.create(c), Oc(d), c.__shady_patchedProto = d);Object.setPrototypeOf(a, d);
    }Qc || (1 === b ? db(a) : 2 === b && eb(a));
  }
  function Sc(a, b, c, d) {
    Rc(a, 1);d = d || null;var e = r(a),
        f = d ? r(d) : null;e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;if (f = t(e.previousSibling)) f.nextSibling = a;if (f = t(e.nextSibling = d)) f.previousSibling = a;e.parentNode = b;d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));c.childNodes = null;
  }
  function bc(a, b, c) {
    Rc(b, 2);var d = r(b);void 0 !== d.firstChild && (d.childNodes = null);if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Sc(a, b, d, c);else Sc(a, b, d, c);
  }
  function dc(a, b) {
    var c = r(a);b = r(b);a === b.firstChild && (b.firstChild = c.nextSibling);a === b.lastChild && (b.lastChild = c.previousSibling);a = c.previousSibling;var d = c.nextSibling;a && (r(a).nextSibling = d);d && (r(d).previousSibling = a);c.parentNode = c.previousSibling = c.nextSibling = void 0;void 0 !== b.childNodes && (b.childNodes = null);
  }
  function vc(a, b) {
    var c = r(a);if (b || void 0 === c.firstChild) {
      c.childNodes = null;var d = c.firstChild = a.__shady_native_firstChild;c.lastChild = a.__shady_native_lastChild;Rc(a, 2);c = d;for (d = void 0; c; c = c.__shady_native_nextSibling) {
        var e = r(c);e.parentNode = b || a;e.nextSibling = c.__shady_native_nextSibling;e.previousSibling = d || null;d = c;Rc(c, 1);
      }
    }
  };var Tc = A({ addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.G = c.G || this;this.host.__shady_addEventListener(a, b, c);
    }, removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.G = c.G || this;this.host.__shady_removeEventListener(a, b, c);
    } });function Uc(a, b) {
    z(a, Tc, b);z(a, Hc, b);z(a, Ac, b);z(a, kc, b);u.s && !b ? (z(a, ec, b), z(a, Dc, b)) : u.m || (z(a, ab), z(a, Ya), z(a, Za));
  };var xc = {},
      J = u.deferConnectionCallbacks && "loading" === document.readyState,
      Vc;function Wc(a) {
    var b = [];do b.unshift(a); while (a = a.__shady_parentNode);return b;
  }function wc(a, b, c) {
    if (a !== xc) throw new TypeError("Illegal constructor");this.g = null;uc(this, b, c);
  }
  function uc(a, b, c) {
    a.host = b;a.mode = c && c.mode;vc(a.host);b = r(a.host);b.root = a;b.Ka = "closed" !== a.mode ? a : null;b = r(a);b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;if (u.preferPerformance) for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b);else G(a);
  }function G(a) {
    a.K || (a.K = !0, Aa(function () {
      return fc(a);
    }));
  }
  function fc(a) {
    var b;if (b = a.K) {
      for (var c; a;) a: {
        a.K && (c = a), b = a;a = b.host.__shady_getRootNode();if (x(a) && (b = t(b.host)) && 0 < b.S) break a;a = void 0;
      }b = c;
    }(c = b) && c._renderSelf();
  }
  wc.prototype._renderSelf = function () {
    var a = J;J = !0;this.K = !1;if (this.g) {
      qc(this);for (var b = 0, c; b < this.g.length; b++) {
        c = this.g[b];var d = t(c),
            e = d.assignedNodes;d.assignedNodes = [];d.L = [];if (d.oa = e) for (d = 0; d < e.length; d++) {
          var f = t(e[d]);f.ea = f.assignedSlot;f.assignedSlot === c && (f.assignedSlot = null);
        }
      }for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) Xc(this, b);for (b = 0; b < this.g.length; b++) {
        c = this.g[b];e = t(c);if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) Xc(this, d, c);(d = (d = t(c.__shady_parentNode)) && d.root) && (ja(d) || d.K) && d._renderSelf();Yc(this, e.L, e.assignedNodes);if (d = e.oa) {
          for (f = 0; f < d.length; f++) t(d[f]).ea = null;e.oa = null;d.length > e.assignedNodes.length && (e.ga = !0);
        }e.ga && (e.ga = !1, Zc(this, c));
      }c = this.g;b = [];for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = t(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);for (c = 0; c < b.length; c++) {
        f = b[c];e = f === this ? this.host : f;d = [];for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) if ("slot" == f.localName) for (var g = t(f).L, h = 0; h < g.length; h++) d.push(g[h]);else d.push(f);f = sa(e);g = Jb(d, d.length, f, f.length);for (var k = h = 0, l = void 0; h < g.length && (l = g[h]); h++) {
          for (var m = 0, q = void 0; m < l.P.length && (q = l.P[m]); m++) q.__shady_native_parentNode === e && e.__shady_native_removeChild(q), f.splice(l.index + k, 1);k -= l.X;
        }k = 0;for (l = void 0; k < g.length && (l = g[k]); k++) for (h = f[l.index], m = l.index; m < l.index + l.X; m++) q = d[m], e.__shady_native_insertBefore(q, h), f.splice(m, 0, q);
      }
    }if (!u.preferPerformance && !this.na) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c = t(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);this.na = !0;J = a;Vc && Vc();
  };function Xc(a, b, c) {
    var d = r(b),
        e = d.ea;d.ea = null;c || (c = (a = a.h[b.__shady_slot || "__catchall"]) && a[0]);c ? (r(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;e !== d.assignedSlot && d.assignedSlot && (r(d.assignedSlot).ga = !0);
  }
  function Yc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
      var f = t(e).assignedNodes;f && f.length && Yc(a, b, f);
    } else b.push(c[d]);
  }function Zc(a, b) {
    b.__shady_native_dispatchEvent(new Event("slotchange"));b = t(b);b.assignedSlot && Zc(a, b.assignedSlot);
  }function ac(a) {
    a.i = a.i || [];a.g = a.g || [];a.h = a.h || {};
  }
  function qc(a) {
    if (a.i && a.i.length) {
      for (var b = a.i, c, d = 0; d < b.length; d++) {
        var e = b[d];vc(e);var f = e.__shady_parentNode;vc(f);f = t(f);f.S = (f.S || 0) + 1;f = rc(e);a.h[f] ? (c = c || {}, c[f] = !0, a.h[f].push(e)) : a.h[f] = [e];a.g.push(e);
      }if (c) for (var g in c) a.h[g] = sc(a.h[g]);a.i = [];
    }
  }function rc(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";return a.ya = b;
  }
  function sc(a) {
    return a.sort(function (b, c) {
      b = Wc(b);for (var d = Wc(c), e = 0; e < b.length; e++) {
        c = b[e];var f = d[e];if (c !== f) return b = ta(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
      }
    });
  }
  function cc(a, b) {
    if (a.g) {
      qc(a);var c = a.h,
          d;for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
        var g = e[f];if (qa(b, g)) {
          e.splice(f, 1);var h = a.g.indexOf(g);0 <= h && (a.g.splice(h, 1), (h = t(g.__shady_parentNode)) && h.S && h.S--);f--;g = t(g);if (h = g.L) for (var k = 0; k < h.length; k++) {
            var l = h[k],
                m = l.__shady_native_parentNode;m && m.__shady_native_removeChild(l);
          }g.L = [];g.assignedNodes = [];h = !0;
        }
      }return h;
    }
  }function ja(a) {
    qc(a);return !(!a.g || !a.g.length);
  }
  (function (a) {
    a.__proto__ = DocumentFragment.prototype;Uc(a, "__shady_");Uc(a);Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, { get: function () {
          return this.host[b];
        },
        configurable: !0 });
    });
  })(wc.prototype);
  if (window.customElements && window.customElements.define && u.ha && !u.preferPerformance) {
    var $c = new Map();Vc = function () {
      var a = [];$c.forEach(function (d, e) {
        a.push([e, d]);
      });$c.clear();for (var b = 0; b < a.length; b++) {
        var c = a[b][0];a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
      }
    };J && document.addEventListener("readystatechange", function () {
      J = !1;Vc();
    }, { once: !0 });var ad = function (a, b, c) {
      var d = 0,
          e = "__isConnected" + d++;if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
        J ? $c.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
      }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
        J ? this.isConnected || $c.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
      };return a;
    },
        bd = window.customElements.define,
        cd = function (a, b) {
      var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;bd.call(window.customElements, a, ad(b, c, d));b.prototype.connectedCallback = c;b.prototype.disconnectedCallback = d;
    };window.customElements.define = cd;Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: cd, configurable: !0 });
  }function $b(a) {
    a = a.__shady_getRootNode();if (x(a)) return a;
  };function dd(a) {
    this.node = a;
  }n = dd.prototype;n.addEventListener = function (a, b, c) {
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
  da.Object.defineProperties(dd.prototype, { activeElement: { configurable: !0, enumerable: !0, get: function () {
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
      } } });function ed(a) {
    Object.defineProperty(dd.prototype, a, { get: function () {
        return this.node["__shady_" + a];
      }, set: function (b) {
        this.node["__shady_" + a] = b;
      }, configurable: !0 });
  }Fb.forEach(function (a) {
    return ed(a);
  });Gb.forEach(function (a) {
    return ed(a);
  });var fd = new WeakMap();function gd(a) {
    if (x(a) || a instanceof dd) return a;var b = fd.get(a);b || (b = new dd(a), fd.set(a, b));return b;
  };if (u.ha) {
    var hd = u.m ? function (a) {
      return a;
    } : function (a) {
      eb(a);db(a);return a;
    },
        ShadyDOM = { inUse: u.ha, patch: hd, isShadyRoot: x, enqueue: Aa, flush: Ba, flushInitial: function (a) {
        !a.na && a.K && fc(a);
      }, settings: u, filterMutations: Ga, observeChildren: Ea, unobserveChildren: Fa, deferConnectionCallbacks: u.deferConnectionCallbacks, preferPerformance: u.preferPerformance, handlesDynamicScoping: !0, wrap: u.s ? gd : hd, wrapIfNeeded: !0 === u.s ? gd : function (a) {
        return a;
      }, Wrapper: dd, composedPath: nb, noPatch: u.s, patchOnDemand: u.ja, nativeMethods: Pa,
      nativeTree: Qa, patchElementProto: Oc };window.ShadyDOM = ShadyDOM;Xa();Nc("__shady_");Object.defineProperty(document, "_activeElement", Hc.activeElement);z(Window.prototype, Kc, "__shady_");u.s ? u.ja && z(Element.prototype, yc) : (Nc(), Eb());zb();window.Event = Bb;window.CustomEvent = Cb;window.MouseEvent = Db;window.ShadowRoot = wc;
  }; /*
     Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at
     http://polymer.github.io/LICENSE.txt The complete set of authors may be found
     at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
     be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
     Google as part of the polymer project is also subject to an additional IP
     rights grant found at http://polymer.github.io/PATENTS.txt
     */
  var id = window.Document.prototype.createElement,
      jd = window.Document.prototype.createElementNS,
      kd = window.Document.prototype.importNode,
      ld = window.Document.prototype.prepend,
      md = window.Document.prototype.append,
      nd = window.DocumentFragment.prototype.prepend,
      od = window.DocumentFragment.prototype.append,
      pd = window.Node.prototype.cloneNode,
      qd = window.Node.prototype.appendChild,
      rd = window.Node.prototype.insertBefore,
      sd = window.Node.prototype.removeChild,
      td = window.Node.prototype.replaceChild,
      ud = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
      vd = window.Element.prototype.attachShadow,
      wd = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
      xd = window.Element.prototype.getAttribute,
      yd = window.Element.prototype.setAttribute,
      zd = window.Element.prototype.removeAttribute,
      Ad = window.Element.prototype.getAttributeNS,
      Bd = window.Element.prototype.setAttributeNS,
      Cd = window.Element.prototype.removeAttributeNS,
      Dd = window.Element.prototype.insertAdjacentElement,
      Ed = window.Element.prototype.insertAdjacentHTML,
      Fd = window.Element.prototype.prepend,
      Gd = window.Element.prototype.append,
      Hd = window.Element.prototype.before,
      Id = window.Element.prototype.after,
      Jd = window.Element.prototype.replaceWith,
      Kd = window.Element.prototype.remove,
      Ld = window.HTMLElement,
      Md = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
      Nd = window.HTMLElement.prototype.insertAdjacentElement,
      Od = window.HTMLElement.prototype.insertAdjacentHTML;var Pd = new Set();"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (a) {
    return Pd.add(a);
  });function Qd(a) {
    var b = Pd.has(a);a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return !b && a;
  }var Rd = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
  function K(a) {
    var b = a.isConnected;if (void 0 !== b) return b;if (Rd(a)) return !0;for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }function Sd(a) {
    var b = a.children;if (b) return Array.prototype.slice.call(b);b = [];for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);return b;
  }
  function Td(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;return b && b !== a ? b.nextSibling : null;
  }
  function Ud(a, b, c) {
    for (var d = a; d;) {
      if (d.nodeType === Node.ELEMENT_NODE) {
        var e = d;b(e);var f = e.localName;if ("link" === f && "import" === e.getAttribute("rel")) {
          d = e.import;void 0 === c && (c = new Set());if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) Ud(d, b, c);d = Td(a, e);continue;
        } else if ("template" === f) {
          d = Td(a, e);continue;
        }if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) Ud(e, b, c);
      }d = d.firstChild ? d.firstChild : Td(a, d);
    }
  };function Vd() {
    var a = !(null === L || void 0 === L || !L.noDocumentConstructionObserver),
        b = !(null === L || void 0 === L || !L.shadyDomFastWalk);this.M = [];this.g = [];this.I = !1;this.shadyDomFastWalk = b;this.Ra = !a;
  }function Wd(a, b, c, d) {
    var e = window.ShadyDOM;if (a.shadyDomFastWalk && e && e.inUse) {
      if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll) for (a = e.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) c(a[b]);
    } else Ud(b, c, d);
  }function Xd(a, b) {
    a.I = !0;a.M.push(b);
  }function Yd(a, b) {
    a.I = !0;a.g.push(b);
  }
  function Zd(a, b) {
    a.I && Wd(a, b, function (c) {
      return $d(a, c);
    });
  }function $d(a, b) {
    if (a.I && !b.__CE_patched) {
      b.__CE_patched = !0;for (var c = 0; c < a.M.length; c++) a.M[c](b);for (c = 0; c < a.g.length; c++) a.g[c](b);
    }
  }function M(a, b) {
    var c = [];Wd(a, b, function (e) {
      return c.push(e);
    });for (b = 0; b < c.length; b++) {
      var d = c[b];1 === d.__CE_state ? a.connectedCallback(d) : ae(a, d);
    }
  }function N(a, b) {
    var c = [];Wd(a, b, function (e) {
      return c.push(e);
    });for (b = 0; b < c.length; b++) {
      var d = c[b];1 === d.__CE_state && a.disconnectedCallback(d);
    }
  }
  function O(a, b, c) {
    c = void 0 === c ? {} : c;var d = c.Sa,
        e = c.upgrade || function (g) {
      return ae(a, g);
    },
        f = [];Wd(a, b, function (g) {
      a.I && $d(a, g);if ("link" === g.localName && "import" === g.getAttribute("rel")) {
        var h = g.import;h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function () {
          var k = g.import;if (!k.__CE_documentLoadHandled) {
            k.__CE_documentLoadHandled = !0;var l = new Set();d && (d.forEach(function (m) {
              return l.add(m);
            }), l.delete(k));O(a, k, { Sa: l, upgrade: e });
          }
        });
      } else f.push(g);
    }, d);for (b = 0; b < f.length; b++) e(f[b]);
  }
  function ae(a, b) {
    try {
      var c = b.ownerDocument,
          d = c.__CE_registry;var e = d && (c.defaultView || c.__CE_isImportDocument) ? be(d, b.localName) : void 0;if (e && void 0 === b.__CE_state) {
        e.constructionStack.push(b);try {
          try {
            if (new e.constructorFunction() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
          } finally {
            e.constructionStack.pop();
          }
        } catch (k) {
          throw b.__CE_state = 2, k;
        }b.__CE_state = 1;b.__CE_definition = e;if (e.attributeChangedCallback && b.hasAttributes()) {
          var f = e.observedAttributes;
          for (e = 0; e < f.length; e++) {
            var g = f[e],
                h = b.getAttribute(g);null !== h && a.attributeChangedCallback(b, g, null, h, null);
          }
        }K(b) && a.connectedCallback(b);
      }
    } catch (k) {
      ce(k);
    }
  }Vd.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;if (b.connectedCallback) try {
      b.connectedCallback.call(a);
    } catch (c) {
      ce(c);
    }
  };Vd.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;if (b.disconnectedCallback) try {
      b.disconnectedCallback.call(a);
    } catch (c) {
      ce(c);
    }
  };
  Vd.prototype.attributeChangedCallback = function (a, b, c, d, e) {
    var f = a.__CE_definition;if (f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b)) try {
      f.attributeChangedCallback.call(a, b, c, d, e);
    } catch (g) {
      ce(g);
    }
  };
  function de(a, b, c, d) {
    var e = b.__CE_registry;if (e && (null === d || "http://www.w3.org/1999/xhtml" === d) && (e = be(e, c))) try {
      var f = new e.constructorFunction();if (void 0 === f.__CE_state || void 0 === f.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");if ("http://www.w3.org/1999/xhtml" !== f.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");if (f.hasAttributes()) throw Error("Failed to construct '" + c + "': The constructed element must not have any attributes.");if (null !== f.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");if (null !== f.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");if (f.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");if (f.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
      return f;
    } catch (g) {
      return ce(g), b = null === d ? id.call(b, c) : jd.call(b, d, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, $d(a, b), b;
    }b = null === d ? id.call(b, c) : jd.call(b, d, c);$d(a, b);return b;
  }
  function ce(a) {
    var b = a.message,
        c = a.sourceURL || a.fileName || "",
        d = a.line || a.lineNumber || 0,
        e = a.column || a.columnNumber || 0,
        f = void 0;void 0 === ErrorEvent.prototype.initErrorEvent ? f = new ErrorEvent("error", { cancelable: !0, message: b, filename: c, lineno: d, colno: e, error: a }) : (f = document.createEvent("ErrorEvent"), f.initErrorEvent("error", !1, !0, b, c, d), f.preventDefault = function () {
      Object.defineProperty(this, "defaultPrevented", { configurable: !0, get: function () {
          return !0;
        } });
    });void 0 === f.error && Object.defineProperty(f, "error", { configurable: !0, enumerable: !0, get: function () {
        return a;
      } });window.dispatchEvent(f);f.defaultPrevented || console.error(a);
  };function ee() {
    var a = this;this.g = void 0;this.pa = new Promise(function (b) {
      a.h = b;
    });
  }ee.prototype.resolve = function (a) {
    if (this.g) throw Error("Already resolved.");this.g = a;this.h(a);
  };function fe(a) {
    var b = document;this.J = void 0;this.D = a;this.g = b;O(this.D, this.g);"loading" === this.g.readyState && (this.J = new MutationObserver(this.h.bind(this)), this.J.observe(this.g, { childList: !0, subtree: !0 }));
  }function ge(a) {
    a.J && a.J.disconnect();
  }fe.prototype.h = function (a) {
    var b = this.g.readyState;"interactive" !== b && "complete" !== b || ge(this);for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) O(this.D, c[d]);
  };function P(a) {
    this.U = new Map();this.V = new Map();this.la = new Map();this.da = !1;this.fa = new Map();this.T = function (b) {
      return b();
    };this.H = !1;this.W = [];this.D = a;this.ma = a.Ra ? new fe(a) : void 0;
  }n = P.prototype;n.Ia = function (a, b) {
    var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");he(this, a);this.U.set(a, b);this.W.push(a);this.H || (this.H = !0, this.T(function () {
      return ie(c);
    }));
  };
  n.define = function (a, b) {
    var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");he(this, a);je(this, a, b);this.W.push(a);this.H || (this.H = !0, this.T(function () {
      return ie(c);
    }));
  };function he(a, b) {
    if (!Qd(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");if (be(a, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));if (a.da) throw Error("A custom element is already being defined.");
  }
  function je(a, b, c) {
    a.da = !0;var d;try {
      var e = c.prototype;if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");var f = function (m) {
        var q = e[m];if (void 0 !== q && !(q instanceof Function)) throw Error("The '" + m + "' callback must be a function.");return q;
      };var g = f("connectedCallback");var h = f("disconnectedCallback");var k = f("adoptedCallback");var l = (d = f("attributeChangedCallback")) && c.observedAttributes || [];
    } catch (m) {
      throw m;
    } finally {
      a.da = !1;
    }c = { localName: b,
      constructorFunction: c, connectedCallback: g, disconnectedCallback: h, adoptedCallback: k, attributeChangedCallback: d, observedAttributes: l, constructionStack: [] };a.V.set(b, c);a.la.set(c.constructorFunction, c);return c;
  }n.upgrade = function (a) {
    O(this.D, a);
  };
  function ie(a) {
    if (!1 !== a.H) {
      a.H = !1;for (var b = [], c = a.W, d = new Map(), e = 0; e < c.length; e++) d.set(c[e], []);O(a.D, document, { upgrade: function (k) {
          if (void 0 === k.__CE_state) {
            var l = k.localName,
                m = d.get(l);m ? m.push(k) : a.V.has(l) && b.push(k);
          }
        } });for (e = 0; e < b.length; e++) ae(a.D, b[e]);for (e = 0; e < c.length; e++) {
        for (var f = c[e], g = d.get(f), h = 0; h < g.length; h++) ae(a.D, g[h]);(f = a.fa.get(f)) && f.resolve(void 0);
      }c.length = 0;
    }
  }n.get = function (a) {
    if (a = be(this, a)) return a.constructorFunction;
  };
  n.whenDefined = function (a) {
    if (!Qd(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));var b = this.fa.get(a);if (b) return b.pa;b = new ee();this.fa.set(a, b);var c = this.V.has(a) || this.U.has(a);a = -1 === this.W.indexOf(a);c && a && b.resolve(void 0);return b.pa;
  };n.polyfillWrapFlushCallback = function (a) {
    this.ma && ge(this.ma);var b = this.T;this.T = function (c) {
      return a(function () {
        return b(c);
      });
    };
  };
  function be(a, b) {
    var c = a.V.get(b);if (c) return c;if (c = a.U.get(b)) {
      a.U.delete(b);try {
        return je(a, b, c());
      } catch (d) {
        ce(d);
      }
    }
  }window.CustomElementRegistry = P;P.prototype.define = P.prototype.define;P.prototype.upgrade = P.prototype.upgrade;P.prototype.get = P.prototype.get;P.prototype.whenDefined = P.prototype.whenDefined;P.prototype.polyfillDefineLazy = P.prototype.Ia;P.prototype.polyfillWrapFlushCallback = P.prototype.polyfillWrapFlushCallback;function ke(a, b, c) {
    function d(e) {
      return function (f) {
        for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];h = [];for (var k = [], l = 0; l < g.length; l++) {
          var m = g[l];m instanceof Element && K(m) && k.push(m);if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) h.push(m);else h.push(m);
        }e.apply(this, g);for (g = 0; g < k.length; g++) N(a, k[g]);if (K(this)) for (g = 0; g < h.length; g++) k = h[g], k instanceof Element && M(a, k);
      };
    }void 0 !== c.prepend && (b.prepend = d(c.prepend));void 0 !== c.append && (b.append = d(c.append));
  };function le(a) {
    Document.prototype.createElement = function (b) {
      return de(a, this, b, null);
    };Document.prototype.importNode = function (b, c) {
      b = kd.call(this, b, !!c);this.__CE_registry ? O(a, b) : Zd(a, b);return b;
    };Document.prototype.createElementNS = function (b, c) {
      return de(a, this, c, b);
    };ke(a, Document.prototype, { prepend: ld, append: md });
  };function me(a) {
    function b(d) {
      return function (e) {
        for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];g = [];for (var h = [], k = 0; k < f.length; k++) {
          var l = f[k];l instanceof Element && K(l) && h.push(l);if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) g.push(l);else g.push(l);
        }d.apply(this, f);for (f = 0; f < h.length; f++) N(a, h[f]);if (K(this)) for (f = 0; f < g.length; f++) h = g[f], h instanceof Element && M(a, h);
      };
    }var c = Element.prototype;void 0 !== Hd && (c.before = b(Hd));void 0 !== Id && (c.after = b(Id));void 0 !== Jd && (c.replaceWith = function (d) {
      for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];f = [];for (var g = [], h = 0; h < e.length; h++) {
        var k = e[h];k instanceof Element && K(k) && g.push(k);if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) f.push(k);else f.push(k);
      }h = K(this);Jd.apply(this, e);for (e = 0; e < g.length; e++) N(a, g[e]);if (h) for (N(a, this), e = 0; e < f.length; e++) g = f[e], g instanceof Element && M(a, g);
    });void 0 !== Kd && (c.remove = function () {
      var d = K(this);Kd.call(this);d && N(a, this);
    });
  };function ne(a) {
    function b(e, f) {
      Object.defineProperty(e, "innerHTML", { enumerable: f.enumerable, configurable: !0, get: f.get, set: function (g) {
          var h = this,
              k = void 0;K(this) && (k = [], Wd(a, this, function (q) {
            q !== h && k.push(q);
          }));f.set.call(this, g);if (k) for (var l = 0; l < k.length; l++) {
            var m = k[l];1 === m.__CE_state && a.disconnectedCallback(m);
          }this.ownerDocument.__CE_registry ? O(a, this) : Zd(a, this);return g;
        } });
    }function c(e, f) {
      e.insertAdjacentElement = function (g, h) {
        var k = K(h);g = f.call(this, g, h);k && N(a, h);K(g) && M(a, h);return g;
      };
    }
    function d(e, f) {
      function g(h, k) {
        for (var l = []; h !== k; h = h.nextSibling) l.push(h);for (k = 0; k < l.length; k++) O(a, l[k]);
      }e.insertAdjacentHTML = function (h, k) {
        h = h.toLowerCase();if ("beforebegin" === h) {
          var l = this.previousSibling;f.call(this, h, k);g(l || this.parentNode.firstChild, this);
        } else if ("afterbegin" === h) l = this.firstChild, f.call(this, h, k), g(this.firstChild, l);else if ("beforeend" === h) l = this.lastChild, f.call(this, h, k), g(l || this.firstChild, null);else if ("afterend" === h) l = this.nextSibling, f.call(this, h, k), g(this.nextSibling, l);else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      };
    }vd && (Element.prototype.attachShadow = function (e) {
      e = vd.call(this, e);if (a.I && !e.__CE_patched) {
        e.__CE_patched = !0;for (var f = 0; f < a.M.length; f++) a.M[f](e);
      }return this.__CE_shadowRoot = e;
    });wd && wd.get ? b(Element.prototype, wd) : Md && Md.get ? b(HTMLElement.prototype, Md) : Yd(a, function (e) {
      b(e, { enumerable: !0, configurable: !0, get: function () {
          return pd.call(this, !0).innerHTML;
        }, set: function (f) {
          var g = "template" === this.localName,
              h = g ? this.content : this,
              k = jd.call(document, this.namespaceURI, this.localName);for (k.innerHTML = f; 0 < h.childNodes.length;) sd.call(h, h.childNodes[0]);for (f = g ? k.content : k; 0 < f.childNodes.length;) qd.call(h, f.childNodes[0]);
        } });
    });Element.prototype.setAttribute = function (e, f) {
      if (1 !== this.__CE_state) return yd.call(this, e, f);var g = xd.call(this, e);yd.call(this, e, f);f = xd.call(this, e);a.attributeChangedCallback(this, e, g, f, null);
    };Element.prototype.setAttributeNS = function (e, f, g) {
      if (1 !== this.__CE_state) return Bd.call(this, e, f, g);var h = Ad.call(this, e, f);Bd.call(this, e, f, g);g = Ad.call(this, e, f);a.attributeChangedCallback(this, f, h, g, e);
    };Element.prototype.removeAttribute = function (e) {
      if (1 !== this.__CE_state) return zd.call(this, e);var f = xd.call(this, e);zd.call(this, e);null !== f && a.attributeChangedCallback(this, e, f, null, null);
    };Element.prototype.removeAttributeNS = function (e, f) {
      if (1 !== this.__CE_state) return Cd.call(this, e, f);var g = Ad.call(this, e, f);Cd.call(this, e, f);var h = Ad.call(this, e, f);g !== h && a.attributeChangedCallback(this, f, g, h, e);
    };Nd ? c(HTMLElement.prototype, Nd) : Dd && c(Element.prototype, Dd);Od ? d(HTMLElement.prototype, Od) : Ed && d(Element.prototype, Ed);ke(a, Element.prototype, { prepend: Fd, append: Gd });me(a);
  };var oe = {};function pe(a) {
    function b() {
      var c = this.constructor;var d = document.__CE_registry.la.get(c);if (!d) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var e = d.constructionStack;if (0 === e.length) return e = id.call(document, d.localName), Object.setPrototypeOf(e, c.prototype), e.__CE_state = 1, e.__CE_definition = d, $d(a, e), e;var f = e.length - 1,
          g = e[f];if (g === oe) throw Error("Failed to construct '" + d.localName + "': This element was already constructed.");e[f] = oe;Object.setPrototypeOf(g, c.prototype);$d(a, g);return g;
    }b.prototype = Ld.prototype;Object.defineProperty(HTMLElement.prototype, "constructor", { writable: !0, configurable: !0, enumerable: !1, value: b });window.HTMLElement = b;
  };function qe(a) {
    function b(c, d) {
      Object.defineProperty(c, "textContent", { enumerable: d.enumerable, configurable: !0, get: d.get, set: function (e) {
          if (this.nodeType === Node.TEXT_NODE) d.set.call(this, e);else {
            var f = void 0;if (this.firstChild) {
              var g = this.childNodes,
                  h = g.length;if (0 < h && K(this)) {
                f = Array(h);for (var k = 0; k < h; k++) f[k] = g[k];
              }
            }d.set.call(this, e);if (f) for (e = 0; e < f.length; e++) N(a, f[e]);
          }
        } });
    }Node.prototype.insertBefore = function (c, d) {
      if (c instanceof DocumentFragment) {
        var e = Sd(c);c = rd.call(this, c, d);if (K(this)) for (d = 0; d < e.length; d++) M(a, e[d]);return c;
      }e = c instanceof Element && K(c);d = rd.call(this, c, d);e && N(a, c);K(this) && M(a, c);return d;
    };Node.prototype.appendChild = function (c) {
      if (c instanceof DocumentFragment) {
        var d = Sd(c);c = qd.call(this, c);if (K(this)) for (var e = 0; e < d.length; e++) M(a, d[e]);return c;
      }d = c instanceof Element && K(c);e = qd.call(this, c);d && N(a, c);K(this) && M(a, c);return e;
    };Node.prototype.cloneNode = function (c) {
      c = pd.call(this, !!c);this.ownerDocument.__CE_registry ? O(a, c) : Zd(a, c);return c;
    };Node.prototype.removeChild = function (c) {
      var d = c instanceof Element && K(c),
          e = sd.call(this, c);d && N(a, c);return e;
    };Node.prototype.replaceChild = function (c, d) {
      if (c instanceof DocumentFragment) {
        var e = Sd(c);c = td.call(this, c, d);if (K(this)) for (N(a, d), d = 0; d < e.length; d++) M(a, e[d]);return c;
      }e = c instanceof Element && K(c);var f = td.call(this, c, d),
          g = K(this);g && N(a, d);e && N(a, c);g && M(a, c);return f;
    };ud && ud.get ? b(Node.prototype, ud) : Xd(a, function (c) {
      b(c, { enumerable: !0, configurable: !0, get: function () {
          for (var d = [], e = this.firstChild; e; e = e.nextSibling) e.nodeType !== Node.COMMENT_NODE && d.push(e.textContent);return d.join("");
        }, set: function (d) {
          for (; this.firstChild;) sd.call(this, this.firstChild);null != d && "" !== d && qd.call(this, document.createTextNode(d));
        } });
    });
  };var L = window.customElements;function re() {
    var a = new Vd();pe(a);le(a);ke(a, DocumentFragment.prototype, { prepend: nd, append: od });qe(a);ne(a);a = new P(a);document.__CE_registry = a;Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: a });
  }L && !L.forcePolyfill && "function" == typeof L.define && "function" == typeof L.get || re();window.__CE_installPolyfill = re; /*
                                                                                                                                  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                  Code distributed by Google as part of the polymer project is also
                                                                                                                                  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                  */
  function se() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function te(a) {
    var b = a = a.replace(ue, "").replace(ve, ""),
        c = new se();c.start = 0;c.end = b.length;for (var d = c, e = 0, f = b.length; e < f; e++) if ("{" === b[e]) {
      d.rules || (d.rules = []);var g = d,
          h = g.rules[g.rules.length - 1] || null;d = new se();d.start = e + 1;d.parent = g;d.previous = h;g.rules.push(d);
    } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);return we(c, a);
  }
  function we(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = xe(c), c = c.replace(ye, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = ze : c.match(Ae) && (a.type = Be, a.keyframesName = a.selector.split(ye).pop()) : a.type = 0 === c.indexOf("--") ? Ce : De);if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) we(f, b);return a;
  }function xe(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
      b = c;for (c = 6 - b.length; c--;) b = "0" + b;return "\\" + b;
    });
  }
  function Ee(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = Ee(h, b, d);
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(Fe, "").replace(Ge, ""), b = b.replace(He, "").replace(Ie, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var De = 1,
      Be = 7,
      ze = 4,
      Ce = 1E3,
      ue = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      ve = /@import[^;]*;/gim,
      Fe = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      Ge = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      He = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      Ie = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      Ae = /^@[^\s]*keyframes/,
      ye = /\s+/g;var Q = !(window.ShadyDOM && window.ShadyDOM.inUse),
      Je;function Ke(a) {
    Je = a && a.shimcssproperties ? !1 : Q || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }var Le;window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (Le = window.ShadyCSS.cssBuild);var Me = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Je = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Ke(window.ShadyCSS), window.ShadyCSS = void 0) : Ke(window.WebComponents && window.WebComponents.flags);var R = Je;var Ne = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      Oe = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      Pe = /(--[\w-]+)\s*([:,;)]|$)/gi,
      Qe = /(animation\s*:)|(animation-name\s*:)/,
      Re = /@media\s(.*)/,
      Se = /\{[^}]*\}/g;var Te = new Set();function Ue(a, b) {
    if (!a) return "";"string" === typeof a && (a = te(a));b && Ve(a, b);return Ee(a, R);
  }function We(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = te(a.textContent));return a.__cssRules || null;
  }function Xe(a) {
    return !!a.parent && a.parent.type === Be;
  }function Ve(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === ze) {
        var g = a.selector.match(Re);g && (window.matchMedia(g[1]).matches || (e = !0));
      }f === De ? b(a) : c && f === Be ? c(a) : f === Ce && (e = !0);if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) Ve(g, b, c, d);
    }
  }
  function Ye(a, b, c, d) {
    var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;Ze(e, c, d);return e;
  }var T = null;function $e(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");var b = document.head;b.insertBefore(a, (T ? T.nextSibling : null) || b.firstChild);return T = a;
  }function Ze(a, b, c) {
    b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);T ? a.compareDocumentPosition(T) === Node.DOCUMENT_POSITION_PRECEDING && (T = a) : T = a;
  }
  function af(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;return -1;
  }function bf(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d = af(a, c + 3),
        e = a.substring(c + 4, d);c = a.substring(0, c);a = bf(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }function cf(a, b) {
    Q ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  var df = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
    return a;
  };function U(a) {
    var b = a.localName,
        c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, R: c };
  }function ef(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = af(a, d);c += a.slice(d, e + 1);d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];c && b.push(c);return b;
  }
  function ff(a) {
    if (void 0 !== Le) return Le;if (void 0 === a.__cssBuild) {
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
  function gf(a) {
    a = void 0 === a ? "" : a;return "" !== a && R ? Q ? "shadow" === a : "shady" === a : !1;
  };function hf() {}function jf(a, b) {
    kf(V, a, function (c) {
      W(c, b || "");
    });
  }function kf(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);var d;"template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;if (d) for (b = 0; b < d.length; b++) kf(a, d[b], c);
  }
  function W(a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute("class");c ? d && (b = d.replace("style-scope", "").replace(b, ""), cf(a, b)) : cf(a, (d ? d + " " : "") + "style-scope " + b);
    }
  }function lf(a, b, c) {
    kf(V, a, function (d) {
      W(d, b, !0);W(d, c);
    });
  }function mf(a, b) {
    kf(V, a, function (c) {
      W(c, b || "", !0);
    });
  }
  function nf(a, b, c, d, e) {
    var f = V;e = void 0 === e ? "" : e;"" === e && (Q || "shady" === (void 0 === d ? "" : d) ? e = Ue(b, c) : (a = U(a), e = of(f, b, a.is, a.R, c) + "\n\n"));return e.trim();
  }function of(a, b, c, d, e) {
    var f = pf(c, d);c = c ? "." + c : "";return Ue(b, function (g) {
      g.i || (g.selector = g.l = qf(a, g, a.h, c, f), g.i = !0);e && e(g, c, f);
    });
  }function pf(a, b) {
    return b ? "[is=" + a + "]" : a;
  }
  function qf(a, b, c, d, e) {
    var f = ef(b.selector);if (!Xe(b)) {
      b = 0;for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
    }return f.filter(function (k) {
      return !!k;
    }).join(",");
  }function rf(a) {
    return a.replace(sf, function (b, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
    });
  }
  function tf(a) {
    for (var b = [], c; c = a.match(uf);) {
      var d = c.index,
          e = af(a, d);if (-1 === e) throw Error(c.input + " selector missing ')'");c = a.slice(d, e + 1);a = a.replace(c, "\ue000");b.push(c);
    }return { ka: a, matches: b };
  }function vf(a, b) {
    var c = a.split("\ue000");return b.reduce(function (d, e, f) {
      return d + e + c[f + 1];
    }, c[0]);
  }
  hf.prototype.h = function (a, b, c) {
    var d = !1;a = a.trim();var e = sf.test(a);e && (a = a.replace(sf, function (h, k, l) {
      return ":" + k + "(" + l.replace(/\s/g, "") + ")";
    }), a = rf(a));var f = uf.test(a);if (f) {
      var g = tf(a);a = g.ka;g = g.matches;
    }a = a.replace(wf, ":host $1");a = a.replace(xf, function (h, k, l) {
      d || (h = yf(l, k, b, c), d = d || h.stop, k = h.Ca, l = h.value);return k + l;
    });f && (a = vf(a, g));e && (a = rf(a));return a = a.replace(zf, function (h, k, l, m) {
      return '[dir="' + l + '"] ' + k + m + ", " + k + '[dir="' + l + '"]' + m;
    });
  };
  function yf(a, b, c, d) {
    var e = a.indexOf("::slotted");0 <= a.indexOf(":host") ? a = Af(a, d) : 0 !== e && (a = c ? Bf(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
      var f = !0;c && (a = a.replace(Cf, function (g, h) {
        return " > " + h;
      }));
    }return { value: a, Ca: b, stop: f };
  }function Bf(a, b) {
    a = a.split(/(\[.+?\])/);for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]);else {
      var e = a[d];if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
    }return c.join("");
  }
  function Af(a, b) {
    var c = a.match(Df);return (c = c && c[2].trim() || "") ? c[0].match(Ef) ? a.replace(Df, function (d, e, f) {
      return b + f;
    }) : c.split(Ef)[0] === b ? c : "should_not_match" : a.replace(":host", b);
  }function Ff(a) {
    ":root" === a.selector && (a.selector = "html");
  }hf.prototype.i = function (a) {
    return a.match(":host") ? "" : a.match("::slotted") ? this.h(a, ":not(.style-scope)") : Bf(a.trim(), ":not(.style-scope)");
  };da.Object.defineProperties(hf.prototype, { g: { configurable: !0, enumerable: !0, get: function () {
        return "style-scope";
      } } });
  var sf = /:(nth[-\w]+)\(([^)]+)\)/,
      xf = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      Ef = /[[.:#*]/,
      wf = /^(::slotted)/,
      Df = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      Cf = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      zf = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
      uf = /:(?:matches|any|-(?:webkit|moz)-any)/,
      V = new hf();function Gf(a, b, c, d, e) {
    this.A = a || null;this.h = b || null;this.ia = c || [];this.u = null;this.cssBuild = e || "";this.R = d || "";this.g = this.v = this.C = null;
  }function X(a) {
    return a ? a.__styleInfo : null;
  }function Hf(a, b) {
    return a.__styleInfo = b;
  }Gf.prototype.i = function () {
    return this.A;
  };Gf.prototype._getStyleRules = Gf.prototype.i;function If(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;return b && b.call(this, a);
  }var Jf = /:host\s*>\s*/,
      Kf = navigator.userAgent.match("Trident");function Lf() {}function Mf(a) {
    var b = {},
        c = [],
        d = 0;Ve(a, function (f) {
      Nf(f);f.index = d++;f = f.j.cssText;for (var g; g = Pe.exec(f);) {
        var h = g[1];":" !== g[2] && (b[h] = !0);
      }
    }, function (f) {
      c.push(f);
    });a.h = c;a = [];for (var e in b) a.push(e);return a;
  }
  function Nf(a) {
    if (!a.j) {
      var b = {},
          c = {};Of(a, c) && (b.B = c, a.rules = null);b.cssText = a.parsedCssText.replace(Se, "").replace(Ne, "");a.j = b;
    }
  }function Of(a, b) {
    var c = a.j;if (c) {
      if (c.B) return Object.assign(b, c.B), !0;
    } else {
      c = a.parsedCssText;for (var d; a = Ne.exec(c);) {
        d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
      }return d;
    }
  }
  function Pf(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? Qf(a, b, c) : bf(b, function (d, e, f, g) {
      if (!e) return d + g;(e = Pf(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = Pf(a, c[f] || f, c) || f;return d + (e || "") + g;
    }));return b && b.trim() || "";
  }
  function Qf(a, b, c) {
    b = b.split(";");for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      Oe.lastIndex = 0;if (f = Oe.exec(e)) e = Pf(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var g = e.substring(f);g = g.trim();g = Pf(a, g, c) || g;e = e.substring(0, f) + g;
      }b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }return b.join(";");
  }
  function Rf(a, b) {
    var c = {},
        d = [];Ve(a, function (e) {
      e.j || Nf(e);var f = e.l || e.parsedSelector;b && e.j.B && f && If.call(b, f) && (Of(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
    }, null, !0);return { B: c, key: d };
  }
  function Sf(a, b, c, d) {
    b.j || Nf(b);if (b.j.B) {
      var e = U(a);a = e.is;e = e.R;e = a ? pf(a, e) : "html";var f = b.parsedSelector;var g = !!f.match(Jf) || "html" === e && -1 < f.indexOf("html");var h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));if (g || h) c = e, h && (b.l || (b.l = qf(V, b, V.h, a ? "." + a : "", e)), c = b.l || e), g && "html" === e && (c = b.l || b.aa), d({ ka: c, Ha: h, Ua: g });
    }
  }
  function Tf(a, b, c) {
    var d = {},
        e = {};Ve(b, function (f) {
      Sf(a, f, c, function (g) {
        If.call(a._element || a, g.ka) && (g.Ha ? Of(f, d) : Of(f, e));
      });
    }, null, !0);return { La: e, Ga: d };
  }
  function Uf(a, b, c, d) {
    var e = U(b),
        f = pf(e.is, e.R),
        g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
        h = X(b);e = h.A;h = h.cssBuild;var k = Vf(e, d);return nf(b, e, function (l) {
      var m = "";l.j || Nf(l);l.j.cssText && (m = Qf(a, l.j.cssText, c));l.cssText = m;if (!Q && !Xe(l) && l.cssText) {
        var q = m = l.cssText;null == l.qa && (l.qa = Qe.test(m));if (l.qa) if (null == l.Z) {
          l.Z = [];for (var v in k) q = k[v], q = q(m), m !== q && (m = q, l.Z.push(v));
        } else {
          for (v = 0; v < l.Z.length; ++v) q = k[l.Z[v]], m = q(m);q = m;
        }l.cssText = q;l.l = l.l || l.selector;
        m = "." + d;v = ef(l.l);q = 0;for (var S = v.length, $a = void 0; q < S && ($a = v[q]); q++) v[q] = $a.match(g) ? $a.replace(f, m) : m + " " + $a;l.selector = v.join(",");
      }
    }, h);
  }function Vf(a, b) {
    a = a.h;var c = {};if (!Q && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
      var f = e,
          g = b;f.o = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");f.g = f.keyframesName + "-" + g;f.l = f.l || f.selector;f.selector = f.l.replace(f.keyframesName, f.g);c[e.keyframesName] = Wf(e);
    }return c;
  }function Wf(a) {
    return function (b) {
      return b.replace(a.o, a.g);
    };
  }
  function Xf(a, b) {
    var c = Yf,
        d = We(a);a.textContent = Ue(d, function (e) {
      var f = e.cssText = e.parsedCssText;e.j && e.j.cssText && (f = f.replace(Fe, "").replace(Ge, ""), e.cssText = Qf(c, f, b));
    });
  }da.Object.defineProperties(Lf.prototype, { g: { configurable: !0, enumerable: !0, get: function () {
        return "x-scope";
      } } });var Yf = new Lf();var Zf = {},
      $f = window.customElements;if ($f && !Q && !Me) {
    var ag = $f.define;$f.define = function (a, b, c) {
      Zf[a] || (Zf[a] = $e(a));ag.call($f, a, b, c);
    };
  };function bg() {
    this.cache = {};
  }bg.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];e.push({ B: b, styleElement: c, v: d });100 < e.length && e.shift();this.cache[a] = e;
  };function cg() {}var dg = new RegExp(V.g + "\\s*([^\\s]*)");function eg(a) {
    return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(dg)) ? a[1] : "";
  }function fg(a) {
    var b = df(a).getRootNode();return b === a || b === a.ownerDocument ? "" : (a = b.host) ? U(a).is : "";
  }
  function gg(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
              g = eg(e);if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === ff(e))) mf(e, g);else if (f instanceof ShadowRoot) for (f = fg(e), f !== g && lf(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + V.g + ")"), g = 0; g < e.length; g++) {
            f = e[g];
            var h = fg(f);h && W(f, h);
          }
        }
      }
    }
  }
  if (!(Q || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var hg = new MutationObserver(gg),
        ig = function (a) {
      hg.observe(a, { childList: !0, subtree: !0 });
    };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) ig(document);else {
      var jg = function () {
        ig(document.body);
      };window.HTMLImports ? window.HTMLImports.whenReady(jg) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            jg();document.removeEventListener("readystatechange", a);
          };document.addEventListener("readystatechange", a);
        } else jg();
      });
    }cg = function () {
      gg(hg.takeRecords());
    };
  };var kg = {};var lg = Promise.resolve();function mg(a) {
    if (a = kg[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function ng(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function og(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a._validating || (a._validating = !0, lg.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a._validating = !1;
    }));
  };var pg = {},
      qg = new bg();function Y() {
    this.ra = {};this.i = document.documentElement;var a = new se();a.rules = [];this.o = Hf(this.i, new Gf(a));this.aa = !1;this.g = this.h = null;
  }n = Y.prototype;n.flush = function () {
    cg();
  };n.Ea = function (a) {
    return We(a);
  };n.Pa = function (a) {
    return Ue(a);
  };n.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);this.prepareTemplateStyles(a, b, c);
  };
  n.prepareTemplateStyles = function (a, b, c) {
    if (!a._prepared && !Me) {
      Q || Zf[b] || (Zf[b] = $e(b));a._prepared = !0;a.name = b;a.extends = c;kg[b] = a;var d = ff(a),
          e = gf(d);c = { is: b, extends: c };for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
        var k = g[h];if (k.hasAttribute("shady-unscoped")) {
          if (!Q) {
            var l = k.textContent;if (!Te.has(l)) {
              Te.add(l);var m = document.createElement("style");m.setAttribute("shady-unscoped", "");m.textContent = l;document.head.appendChild(m);
            }k.parentNode.removeChild(k);
          }
        } else f.push(k.textContent), k.parentNode.removeChild(k);
      }f = f.join("").trim() + (pg[b] || "");rg(this);if (!e) {
        if (g = !d) g = Oe.test(f) || Ne.test(f), Oe.lastIndex = 0, Ne.lastIndex = 0;h = te(f);g && R && this.h && this.h.transformRules(h, b);a._styleAst = h;
      }g = [];R || (g = Mf(a._styleAst));if (!g.length || R) h = Q ? a.content : null, b = Zf[b] || null, d = nf(c, a._styleAst, null, d, e ? f : ""), d = d.length ? Ye(d, c.is, h, b) : null, a._style = d;a.g = g;
    }
  };n.Ja = function (a, b) {
    pg[b] = a.join(" ");
  };
  n.prepareTemplateDom = function (a, b) {
    if (!Me) {
      var c = ff(a);Q || "shady" === c || a._domPrepared || (a._domPrepared = !0, jf(a.content, b));
    }
  };function sg(a) {
    var b = U(a),
        c = b.is;b = b.R;var d = Zf[c] || null,
        e = kg[c];if (e) {
      c = e._styleAst;var f = e.g;e = ff(e);b = new Gf(c, d, f, b, e);Hf(a, b);return b;
    }
  }
  function tg(a) {
    !a.g && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.g = window.ShadyCSS.CustomStyleInterface, a.g.transformCallback = function (b) {
      a.ua(b);
    }, a.g.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.g.enqueued || a.aa) && a.flushCustomStyles();
      });
    });
  }function rg(a) {
    if (!a.h && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
      a.h = window.ShadyCSS.ApplyShim;a.h.invalidCallback = mg;var b = !0;
    } else b = !1;tg(a);return b;
  }
  n.flushCustomStyles = function () {
    if (!Me) {
      var a = rg(this);if (this.g) {
        var b = this.g.processStyles();if ((a || this.g.enqueued) && !gf(this.o.cssBuild)) {
          if (R) {
            if (!this.o.cssBuild) for (a = 0; a < b.length; a++) {
              var c = this.g.getStyleForCustomStyle(b[a]);if (c && R && this.h) {
                var d = We(c);rg(this);this.h.transformRules(d);c.textContent = Ue(d);
              }
            }
          } else {
            ug(this, b);vg(this, this.i, this.o);for (a = 0; a < b.length; a++) (c = this.g.getStyleForCustomStyle(b[a])) && Xf(c, this.o.C);this.aa && this.styleDocument();
          }this.g.enqueued = !1;
        }
      }
    }
  };
  function ug(a, b) {
    b = b.map(function (c) {
      return a.g.getStyleForCustomStyle(c);
    }).filter(function (c) {
      return !!c;
    });b.sort(function (c, d) {
      c = d.compareDocumentPosition(c);return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
    });a.o.A.rules = b.map(function (c) {
      return We(c);
    });
  }
  n.styleElement = function (a, b) {
    if (Me) {
      if (b) {
        X(a) || Hf(a, new Gf(null));var c = X(a);c.u = c.u || {};Object.assign(c.u, b);wg(this, a, c);
      }
    } else if (c = X(a) || sg(a)) if (a !== this.i && (this.aa = !0), b && (c.u = c.u || {}, Object.assign(c.u, b)), R) wg(this, a, c);else if (this.flush(), vg(this, a, c), c.ia && c.ia.length) {
      b = U(a).is;var d;a: {
        if (d = qg.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
          var f = d[e];b: {
            var g = c.ia;for (var h = 0; h < g.length; h++) {
              var k = g[h];if (f.B[k] !== c.C[k]) {
                g = !1;break b;
              }
            }g = !0;
          }if (g) {
            d = f;break a;
          }
        }d = void 0;
      }g = d ? d.styleElement : null;
      e = c.v;(f = d && d.v) || (f = this.ra[b] = (this.ra[b] || 0) + 1, f = b + "-" + f);c.v = f;f = c.v;h = Yf;h = g ? g.textContent || "" : Uf(h, a, c.C, f);k = X(a);var l = k.g;l && !Q && l !== g && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));Q ? k.g ? (k.g.textContent = h, g = k.g) : h && (g = Ye(h, f, a.shadowRoot, k.h)) : g ? g.parentNode || (Kf && -1 < h.indexOf("@media") && (g.textContent = h), Ze(g, null, k.h)) : h && (g = Ye(h, f, null, k.h));g && (g._useCount = g._useCount || 0, k.g != g && g._useCount++, k.g = g);f = g;Q || (g = c.v, k = h = a.getAttribute("class") || "", e && (k = h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), k += (k ? " " : "") + "x-scope " + g, h !== k && cf(a, k));d || qg.store(b, c.C, f, c.v);
    }
  };
  function wg(a, b, c) {
    var d = U(b).is;if (c.u) {
      var e = c.u,
          f;for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
    }e = kg[d];if (!(!e && b !== a.i || e && "" !== ff(e)) && e && e._style && !ng(e)) {
      if (ng(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) rg(a), a.h && a.h.transformRules(e._styleAst, d), e._style.textContent = nf(b, c.A), og(e);Q && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = nf(b, c.A));c.A = e._styleAst;
    }
  }
  function xg(a, b) {
    return (b = df(b).getRootNode().host) ? X(b) || sg(b) ? b : xg(a, b) : a.i;
  }function vg(a, b, c) {
    var d = xg(a, b),
        e = X(d),
        f = e.C;d === a.i || f || (vg(a, d, e), f = e.C);a = Object.create(f || null);d = Tf(b, c.A, c.cssBuild);b = Rf(e.A, b).B;Object.assign(a, d.Ga, b, d.La);b = c.u;for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;g = Yf;b = Object.getOwnPropertyNames(a);for (e = 0; e < b.length; e++) d = b[e], a[d] = Pf(g, a[d], a);c.C = a;
  }n.styleDocument = function (a) {
    this.styleSubtree(this.i, a);
  };
  n.styleSubtree = function (a, b) {
    var c = df(a),
        d = c.shadowRoot,
        e = a === this.i;(d || e) && this.styleElement(a, b);if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
      return df(f).shadowRoot;
    }), b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  n.ua = function (a) {
    var b = this,
        c = ff(a);c !== this.o.cssBuild && (this.o.cssBuild = c);if (!gf(c)) {
      var d = We(a);Ve(d, function (e) {
        if (Q) Ff(e);else {
          var f = V;e.selector = e.parsedSelector;Ff(e);e.selector = e.l = qf(f, e, f.i, void 0, void 0);
        }R && "" === c && (rg(b), b.h && b.h.transformRule(e));
      });R ? a.textContent = Ue(d) : this.o.A.rules.push(d);
    }
  };n.getComputedStyleValue = function (a, b) {
    var c;R || (c = (X(a) || X(xg(this, a))).C[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  n.Oa = function (a, b) {
    var c = df(a).getRootNode();b = b ? ("string" === typeof b ? b : String(b)).split(/\s/) : [];c = c.host && c.host.localName;if (!c) {
      var d = a.getAttribute("class");if (d) {
        d = d.split(/\s/);for (var e = 0; e < d.length; e++) if (d[e] === V.g) {
          c = d[e + 1];break;
        }
      }
    }c && b.push(V.g, c);R || (c = X(a)) && c.v && b.push(Yf.g, c.v);cf(a, b.join(" "));
  };n.Ba = function (a) {
    return X(a);
  };n.Na = function (a, b) {
    W(a, b);
  };n.Qa = function (a, b) {
    W(a, b, !0);
  };n.Ma = function (a) {
    return fg(a);
  };n.Da = function (a) {
    return eg(a);
  };Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;Y.prototype.styleElement = Y.prototype.styleElement;Y.prototype.styleDocument = Y.prototype.styleDocument;Y.prototype.styleSubtree = Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;Y.prototype.setElementClass = Y.prototype.Oa;Y.prototype._styleInfoForNode = Y.prototype.Ba;Y.prototype.transformCustomStyleForDocument = Y.prototype.ua;Y.prototype.getStyleAst = Y.prototype.Ea;Y.prototype.styleAstToString = Y.prototype.Pa;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;Y.prototype.scopeNode = Y.prototype.Na;Y.prototype.unscopeNode = Y.prototype.Qa;Y.prototype.scopeForNode = Y.prototype.Ma;Y.prototype.currentScopeForNode = Y.prototype.Da;Y.prototype.prepareAdoptedCssText = Y.prototype.Ja;Object.defineProperties(Y.prototype, { nativeShadow: { get: function () {
        return Q;
      } }, nativeCss: { get: function () {
        return R;
      } } });var Z = new Y(),
      yg,
      zg;window.ShadyCSS && (yg = window.ShadyCSS.ApplyShim, zg = window.ShadyCSS.CustomStyleInterface);
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
    }, nativeCss: R, nativeShadow: Q, cssBuild: Le, disableRuntime: Me };yg && (window.ShadyCSS.ApplyShim = yg);zg && (window.ShadyCSS.CustomStyleInterface = zg);
}).call(this);

//# sourceMappingURL=webcomponents-sd-ce.js.map