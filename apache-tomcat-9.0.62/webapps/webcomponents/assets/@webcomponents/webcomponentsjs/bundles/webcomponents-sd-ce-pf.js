/// BareSpecifier=@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce-pf
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
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found
  at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
  be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
  Google as part of the polymer project is also subject to an additional IP
  rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var v;function ba(a) {
    var b = 0;return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;a[b] = c.value;return a;
  };
  function da(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];for (var b = 0; b < a.length; ++b) {
      var c = a[b];if (c && c.Math == Math) return c;
    }throw Error("Cannot find global object");
  }var ea = da(this);function ia(a, b) {
    if (b) a: {
      var c = ea;a = a.split(".");for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];if (!(e in c)) break a;c = c[e];
      }a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ca(c, a, { configurable: !0, writable: !0, value: b });
    }
  }
  ia("Symbol", function (a) {
    function b(e) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_" + (e || "") + "_" + d++, e);
    }function c(e, f) {
      this.g = e;ca(this, "description", { configurable: !0, writable: !0, value: f });
    }if (a) return a;c.prototype.toString = function () {
      return this.g;
    };var d = 0;return b;
  });
  ia("Symbol.iterator", function (a) {
    if (a) return a;a = Symbol("Symbol.iterator");for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
      var d = ea[b[c]];"function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, { configurable: !0, writable: !0, value: function () {
          return ja(ba(this));
        } });
    }return a;
  });function ja(a) {
    a = { next: a };a[Symbol.iterator] = function () {
      return this;
    };return a;
  }
  function ka(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];return b ? b.call(a) : { next: ba(a) };
  }function x(a) {
    if (!(a instanceof Array)) {
      a = ka(a);for (var b, c = []; !(b = a.next()).done;) c.push(b.value);a = c;
    }return a;
  }var ma;if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;else {
    var na;a: {
      var oa = { a: !0 },
          pa = {};try {
        pa.__proto__ = oa;na = pa.a;break a;
      } catch (a) {}na = !1;
    }ma = na ? function (a, b) {
      a.__proto__ = b;if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");return a;
    } : null;
  }
  var qa = ma;function ra() {
    this.u = !1;this.h = null;this.Ka = void 0;this.g = 1;this.da = 0;this.i = null;
  }function ua(a) {
    if (a.u) throw new TypeError("Generator is already running");a.u = !0;
  }ra.prototype.O = function (a) {
    this.Ka = a;
  };function xa(a, b) {
    a.i = { Wa: b, $a: !0 };a.g = a.da;
  }ra.prototype.return = function (a) {
    this.i = { return: a };this.g = this.da;
  };function ya(a, b) {
    a.g = 3;return { value: b };
  }function za(a) {
    this.g = new ra();this.h = a;
  }
  function Aa(a, b) {
    ua(a.g);var c = a.g.h;if (c) return Ba(a, "return" in c ? c["return"] : function (d) {
      return { value: d, done: !0 };
    }, b, a.g.return);a.g.return(b);return Ca(a);
  }function Ba(a, b, c, d) {
    try {
      var e = b.call(a.g.h, c);if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");if (!e.done) return a.g.u = !1, e;var f = e.value;
    } catch (g) {
      return a.g.h = null, xa(a.g, g), Ca(a);
    }a.g.h = null;d.call(a.g, f);return Ca(a);
  }
  function Ca(a) {
    for (; a.g.g;) try {
      var b = a.h(a.g);if (b) return a.g.u = !1, { value: b.value, done: !1 };
    } catch (c) {
      a.g.Ka = void 0, xa(a.g, c);
    }a.g.u = !1;if (a.g.i) {
      b = a.g.i;a.g.i = null;if (b.$a) throw b.Wa;return { value: b.return, done: !0 };
    }return { value: void 0, done: !0 };
  }
  function Da(a) {
    this.next = function (b) {
      ua(a.g);a.g.h ? b = Ba(a, a.g.h.next, b, a.g.O) : (a.g.O(b), b = Ca(a));return b;
    };this.throw = function (b) {
      ua(a.g);a.g.h ? b = Ba(a, a.g.h["throw"], b, a.g.O) : (xa(a.g, b), b = Ca(a));return b;
    };this.return = function (b) {
      return Aa(a, b);
    };this[Symbol.iterator] = function () {
      return this;
    };
  }function Ea(a, b) {
    b = new Da(new za(b));qa && a.prototype && qa(b, a.prototype);return b;
  }Array.from || (Array.from = function (a) {
    return [].slice.call(a);
  });
  Object.assign || (Object.assign = function (a) {
    for (var b = [].slice.call(arguments, 1), c = 0, d; c < b.length; c++) if (d = b[c]) for (var e = a, f = Object.keys(d), g = 0; g < f.length; g++) {
      var h = f[g];e[h] = d[h];
    }return a;
  });var Fa = setTimeout;function Ga() {}function Ha(a, b) {
    return function () {
      a.apply(b, arguments);
    };
  }function A(a) {
    if (!(this instanceof A)) throw new TypeError("Promises must be constructed via new");if ("function" !== typeof a) throw new TypeError("not a function");this.N = 0;this.Ea = !1;this.I = void 0;this.ba = [];Ia(a, this);
  }
  function Ja(a, b) {
    for (; 3 === a.N;) a = a.I;0 === a.N ? a.ba.push(b) : (a.Ea = !0, Ka(function () {
      var c = 1 === a.N ? b.bb : b.cb;if (null === c) (1 === a.N ? La : Ma)(b.promise, a.I);else {
        try {
          var d = c(a.I);
        } catch (e) {
          Ma(b.promise, e);return;
        }La(b.promise, d);
      }
    }));
  }
  function La(a, b) {
    try {
      if (b === a) throw new TypeError("A promise cannot be resolved with itself.");if (b && ("object" === typeof b || "function" === typeof b)) {
        var c = b.then;if (b instanceof A) {
          a.N = 3;a.I = b;Na(a);return;
        }if ("function" === typeof c) {
          Ia(Ha(c, b), a);return;
        }
      }a.N = 1;a.I = b;Na(a);
    } catch (d) {
      Ma(a, d);
    }
  }function Ma(a, b) {
    a.N = 2;a.I = b;Na(a);
  }
  function Na(a) {
    2 === a.N && 0 === a.ba.length && Ka(function () {
      a.Ea || "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a.I);
    });for (var b = 0, c = a.ba.length; b < c; b++) Ja(a, a.ba[b]);a.ba = null;
  }function Oa(a, b, c) {
    this.bb = "function" === typeof a ? a : null;this.cb = "function" === typeof b ? b : null;this.promise = c;
  }function Ia(a, b) {
    var c = !1;try {
      a(function (d) {
        c || (c = !0, La(b, d));
      }, function (d) {
        c || (c = !0, Ma(b, d));
      });
    } catch (d) {
      c || (c = !0, Ma(b, d));
    }
  }
  A.prototype["catch"] = function (a) {
    return this.then(null, a);
  };A.prototype.then = function (a, b) {
    var c = new this.constructor(Ga);Ja(this, new Oa(a, b, c));return c;
  };A.prototype["finally"] = function (a) {
    var b = this.constructor;return this.then(function (c) {
      return b.resolve(a()).then(function () {
        return c;
      });
    }, function (c) {
      return b.resolve(a()).then(function () {
        return b.reject(c);
      });
    });
  };
  function Pa(a) {
    return new A(function (b, c) {
      function d(h, k) {
        try {
          if (k && ("object" === typeof k || "function" === typeof k)) {
            var l = k.then;if ("function" === typeof l) {
              l.call(k, function (m) {
                d(h, m);
              }, c);return;
            }
          }e[h] = k;0 === --f && b(e);
        } catch (m) {
          c(m);
        }
      }if (!a || "undefined" === typeof a.length) return c(new TypeError("Promise.all accepts an array"));var e = Array.prototype.slice.call(a);if (0 === e.length) return b([]);for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
    });
  }
  function Qa(a) {
    return a && "object" === typeof a && a.constructor === A ? a : new A(function (b) {
      b(a);
    });
  }function Ra(a) {
    return new A(function (b, c) {
      c(a);
    });
  }function Sa(a) {
    return new A(function (b, c) {
      if (!a || "undefined" === typeof a.length) return c(new TypeError("Promise.race accepts an array"));for (var d = 0, e = a.length; d < e; d++) Qa(a[d]).then(b, c);
    });
  }var Ka = "function" === typeof setImmediate && function (a) {
    setImmediate(a);
  } || function (a) {
    Fa(a, 0);
  }; /*
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at
     http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
     http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
     found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
     part of the polymer project is also subject to an additional IP rights grant
     found at http://polymer.github.io/PATENTS.txt
     */
  if (!window.Promise) {
    window.Promise = A;A.prototype.then = A.prototype.then;A.all = Pa;A.race = Sa;A.resolve = Qa;A.reject = Ra;var Ta = document.createTextNode(""),
        Va = [];new MutationObserver(function () {
      for (var a = Va.length, b = 0; b < a; b++) Va[b]();Va.splice(0, a);
    }).observe(Ta, { characterData: !0 });Ka = function (a) {
      Va.push(a);Ta.textContent = 0 < Ta.textContent.length ? "" : "a";
    };
  }; /*
     Copyright (C) 2015 by WebReflection
     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:
     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
     */
  (function (a, b) {
    if (!(b in a)) {
      var c = typeof global === typeof c ? window : global,
          d = 0,
          e = String(Math.random()),
          f = "__\u0001symbol@@" + e,
          g = a.getOwnPropertyNames,
          h = a.getOwnPropertyDescriptor,
          k = a.create,
          l = a.keys,
          m = a.freeze || a,
          q = a.defineProperty,
          H = a.defineProperties,
          C = h(a, "getOwnPropertyNames"),
          t = a.prototype,
          F = t.hasOwnProperty,
          E = t.propertyIsEnumerable,
          M = t.toString,
          y = function (I, u, G) {
        F.call(I, f) || q(I, f, { enumerable: !1, configurable: !1, writable: !1, value: {} });I[f]["@@" + u] = G;
      },
          W = function (I, u) {
        var G = k(I);g(u).forEach(function (p) {
          sa.call(u, p) && Ua(G, p, u[p]);
        });return G;
      },
          w = function () {},
          ta = function (I) {
        return I != f && !F.call(fa, I);
      },
          ha = function (I) {
        return I != f && F.call(fa, I);
      },
          sa = function (I) {
        var u = String(I);return ha(u) ? F.call(this, u) && !!this[f] && this[f]["@@" + u] : E.call(this, I);
      },
          n = function (I) {
        q(t, I, { enumerable: !1, configurable: !0, get: w, set: function (u) {
            wa(this, I, { enumerable: !1, configurable: !0, writable: !0, value: u });y(this, I, !0);
          } });fa[I] = q(a(I), "constructor", fc);return m(fa[I]);
      },
          J = function G(u) {
        if (this instanceof G) throw new TypeError("Symbol is not a constructor");
        return n("__\u0001symbol:".concat(u || "", e, ++d));
      },
          fa = k(null),
          fc = { value: J },
          fb = function (u) {
        return fa[u];
      },
          Ua = function (u, G, p) {
        var r = String(G);if (ha(r)) {
          G = wa;if (p.enumerable) {
            var B = k(p);B.enumerable = !1;
          } else B = p;G(u, r, B);y(u, r, !!p.enumerable);
        } else q(u, G, p);return u;
      },
          gb = function (u) {
        return g(u).filter(ha).map(fb);
      };C.value = Ua;q(a, "defineProperty", C);C.value = gb;q(a, b, C);C.value = function (u) {
        return g(u).filter(ta);
      };q(a, "getOwnPropertyNames", C);C.value = function (u, G) {
        var p = gb(G);p.length ? l(G).concat(p).forEach(function (r) {
          sa.call(G, r) && Ua(u, r, G[r]);
        }) : H(u, G);return u;
      };q(a, "defineProperties", C);C.value = sa;q(t, "propertyIsEnumerable", C);C.value = J;q(c, "Symbol", C);C.value = function (u) {
        u = "__\u0001symbol:".concat("__\u0001symbol:", u, e);return u in t ? fa[u] : n(u);
      };q(J, "for", C);C.value = function (u) {
        if (ta(u)) throw new TypeError(u + " is not a symbol");if (F.call(fa, u) && (u = u.slice(10), "__\u0001symbol:" === u.slice(0, 10) && (u = u.slice(10), u !== e))) return u = u.slice(0, u.length - e.length), 0 < u.length ? u : void 0;
      };q(J, "keyFor", C);C.value = function (u, G) {
        var p = h(u, G);p && ha(G) && (p.enumerable = sa.call(u, G));return p;
      };q(a, "getOwnPropertyDescriptor", C);C.value = function (u, G) {
        return 1 === arguments.length || "undefined" === typeof G ? k(u) : W(u, G);
      };q(a, "create", C);C.value = function () {
        var u = M.call(this);return "[object String]" === u && ha(this) ? "[object Symbol]" : u;
      };q(t, "toString", C);try {
        if (!0 === k(q({}, "__\u0001symbol:", { get: function () {
            return q(this, "__\u0001symbol:", { value: !0 })["__\u0001symbol:"];
          } }))["__\u0001symbol:"]) var wa = q;else throw "IE11";
      } catch (u) {
        wa = function (G, p, r) {
          var B = h(t, p);delete t[p];q(G, p, r);q(t, p, B);
        };
      }
    }
  })(Object, "getOwnPropertySymbols");
  (function (a, b) {
    var c = a.defineProperty,
        d = a.prototype,
        e = d.toString,
        f;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function (g) {
      g in b || (c(b, g, { value: b(g) }), "toStringTag" === g && (f = a.getOwnPropertyDescriptor(d, "toString"), f.value = function () {
        var h = e.call(this),
            k = null == this ? this : this[b.toStringTag];return null == k ? h : "[object " + k + "]";
      }, c(d, "toString", f)));
    });
  })(Object, Symbol);
  (function (a, b, c) {
    function d() {
      return this;
    }b[a] || (b[a] = function () {
      var e = 0,
          f = this,
          g = { next: function () {
          var h = f.length <= e;return h ? { done: h } : { done: h, value: f[e++] };
        } };g[a] = d;return g;
    });c[a] || (c[a] = function () {
      var e = String.fromCodePoint,
          f = this,
          g = 0,
          h = f.length,
          k = { next: function () {
          var l = h <= g,
              m = l ? "" : e(f.codePointAt(g));g += m.length;return l ? { done: l } : { done: l, value: m };
        } };k[a] = d;return k;
    });
  })(Symbol.iterator, Array.prototype, String.prototype); /*
                                                          Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                                                          This code may only be used under the BSD style license found at
                                                          http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
                                                          http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
                                                          found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
                                                          part of the polymer project is also subject to an additional IP rights grant
                                                          found at http://polymer.github.io/PATENTS.txt
                                                          */
  var Wa = Object.prototype.toString;Object.prototype.toString = function () {
    return void 0 === this ? "[object Undefined]" : null === this ? "[object Null]" : Wa.call(this);
  };Object.keys = function (a) {
    return Object.getOwnPropertyNames(a).filter(function (b) {
      return (b = Object.getOwnPropertyDescriptor(a, b)) && b.enumerable;
    });
  };
  String.prototype[Symbol.iterator] && String.prototype.codePointAt || (String.prototype[Symbol.iterator] = function Xa() {
    var b,
        c = this;return Ea(Xa, function (d) {
      1 == d.g && (b = 0);if (3 != d.g) return b < c.length ? d = ya(d, c[b]) : (d.g = 0, d = void 0), d;b++;d.g = 2;
    });
  });Set.prototype[Symbol.iterator] || (Set.prototype[Symbol.iterator] = function Ya() {
    var b,
        c = this,
        d;return Ea(Ya, function (e) {
      1 == e.g && (b = [], c.forEach(function (f) {
        b.push(f);
      }), d = 0);if (3 != e.g) return d < b.length ? e = ya(e, b[d]) : (e.g = 0, e = void 0), e;d++;e.g = 2;
    });
  });
  Map.prototype[Symbol.iterator] || (Map.prototype[Symbol.iterator] = function Za() {
    var b,
        c = this,
        d;return Ea(Za, function (e) {
      1 == e.g && (b = [], c.forEach(function (f, g) {
        b.push([g, f]);
      }), d = 0);if (3 != e.g) return d < b.length ? e = ya(e, b[d]) : (e.g = 0, e = void 0), e;d++;e.g = 2;
    });
  }); /*
      Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
  var $a = document.createEvent("Event");$a.initEvent("foo", !0, !0);$a.preventDefault();if (!$a.defaultPrevented) {
    var ab = Event.prototype.preventDefault;Event.prototype.preventDefault = function () {
      this.cancelable && (ab.call(this), Object.defineProperty(this, "defaultPrevented", { get: function () {
          return !0;
        }, configurable: !0 }));
    };
  }var bb = /Trident/.test(navigator.userAgent);
  if (!window.Event || bb && "function" !== typeof window.Event) {
    var cb = window.Event;window.Event = function (a, b) {
      b = b || {};var c = document.createEvent("Event");c.initEvent(a, !!b.bubbles, !!b.cancelable);return c;
    };if (cb) {
      for (var db in cb) window.Event[db] = cb[db];window.Event.prototype = cb.prototype;
    }
  }
  if (!window.CustomEvent || bb && "function" !== typeof window.CustomEvent) window.CustomEvent = function (a, b) {
    b = b || {};var c = document.createEvent("CustomEvent");c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);return c;
  }, window.CustomEvent.prototype = window.Event.prototype;
  if (!window.MouseEvent || bb && "function" !== typeof window.MouseEvent) {
    var eb = window.MouseEvent;window.MouseEvent = function (a, b) {
      b = b || {};var c = document.createEvent("MouseEvent");c.initMouseEvent(a, !!b.bubbles, !!b.cancelable, b.view || window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);return c;
    };if (eb) for (var hb in eb) window.MouseEvent[hb] = eb[hb];window.MouseEvent.prototype = eb.prototype;
  };Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", { get: function () {
      var a = (this.ownerDocument || this).querySelector("base[href]");return a && a.href || window.location.href;
    }, configurable: !0, enumerable: !0 }); /*
                                            Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
                                            This code may only be used under the BSD style license found at
                                            http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
                                            http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
                                            found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
                                            part of the polymer project is also subject to an additional IP rights grant
                                            found at http://polymer.github.io/PATENTS.txt
                                            */
  var ib,
      jb,
      kb = Element.prototype,
      nb = null !== (ib = Object.getOwnPropertyDescriptor(kb, "attributes")) && void 0 !== ib ? ib : Object.getOwnPropertyDescriptor(Node.prototype, "attributes"),
      ob = null !== (jb = null === nb || void 0 === nb ? void 0 : nb.get) && void 0 !== jb ? jb : function () {
    return this.attributes;
  },
      pb = Array.prototype.map;kb.hasOwnProperty("getAttributeNames") || (kb.getAttributeNames = function () {
    return pb.call(ob.call(this), function (a) {
      return a.name;
    });
  });var qb,
      rb = Element.prototype;rb.hasOwnProperty("matches") || (rb.matches = null !== (qb = rb.webkitMatchesSelector) && void 0 !== qb ? qb : rb.msMatchesSelector);var sb = Node.prototype.appendChild;function tb(a) {
    a = a.prototype;a.hasOwnProperty("append") || Object.defineProperty(a, "append", { configurable: !0, enumerable: !0, writable: !0, value: function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];c = ka(c);for (d = c.next(); !d.done; d = c.next()) d = d.value, sb.call(this, "string" === typeof d ? document.createTextNode(d) : d);
      } });
  }tb(Document);tb(DocumentFragment);tb(Element);var ub,
      vb,
      wb = Node.prototype.insertBefore,
      xb = null !== (vb = null === (ub = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === ub ? void 0 : ub.get) && void 0 !== vb ? vb : function () {
    return this.firstChild;
  };
  function yb(a) {
    a = a.prototype;a.hasOwnProperty("prepend") || Object.defineProperty(a, "prepend", { configurable: !0, enumerable: !0, writable: !0, value: function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];d = xb.call(this);c = ka(c);for (var e = c.next(); !e.done; e = c.next()) e = e.value, wb.call(this, "string" === typeof e ? document.createTextNode(e) : e, d);
      } });
  }yb(Document);yb(DocumentFragment);yb(Element);var zb,
      Ab,
      Bb = Node.prototype.appendChild,
      Cb = Node.prototype.removeChild,
      Db = null !== (Ab = null === (zb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === zb ? void 0 : zb.get) && void 0 !== Ab ? Ab : function () {
    return this.firstChild;
  };
  function Eb(a) {
    a = a.prototype;a.hasOwnProperty("replaceChildren") || Object.defineProperty(a, "replaceChildren", { configurable: !0, enumerable: !0, writable: !0, value: function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];for (; null !== (d = Db.call(this));) Cb.call(this, d);c = ka(c);for (d = c.next(); !d.done; d = c.next()) d = d.value, Bb.call(this, "string" === typeof d ? document.createTextNode(d) : d);
      } });
  }Eb(Document);Eb(DocumentFragment);Eb(Element);var Fb,
      Gb,
      Hb,
      Ib,
      Jb = Node.prototype.insertBefore,
      Kb = null !== (Gb = null === (Fb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Fb ? void 0 : Fb.get) && void 0 !== Gb ? Gb : function () {
    return this.parentNode;
  },
      Lb = null !== (Ib = null === (Hb = Object.getOwnPropertyDescriptor(Node.prototype, "nextSibling")) || void 0 === Hb ? void 0 : Hb.get) && void 0 !== Ib ? Ib : function () {
    return this.nextSibling;
  };
  function Mb(a) {
    a = a.prototype;a.hasOwnProperty("after") || Object.defineProperty(a, "after", { configurable: !0, enumerable: !0, writable: !0, value: function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];d = Kb.call(this);if (null !== d) {
          var e = Lb.call(this);c = ka(c);for (var f = c.next(); !f.done; f = c.next()) f = f.value, Jb.call(d, "string" === typeof f ? document.createTextNode(f) : f, e);
        }
      } });
  }Mb(CharacterData);Mb(Element);var Nb,
      Ob,
      Pb = Node.prototype.insertBefore,
      Qb = null !== (Ob = null === (Nb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Nb ? void 0 : Nb.get) && void 0 !== Ob ? Ob : function () {
    return this.parentNode;
  };
  function Rb(a) {
    a = a.prototype;a.hasOwnProperty("before") || Object.defineProperty(a, "before", { configurable: !0, enumerable: !0, writable: !0, value: function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];d = Qb.call(this);if (null !== d) {
          c = ka(c);for (var e = c.next(); !e.done; e = c.next()) e = e.value, Pb.call(d, "string" === typeof e ? document.createTextNode(e) : e, this);
        }
      } });
  }Rb(CharacterData);Rb(Element);var Sb,
      Tb,
      Ub = Node.prototype.removeChild,
      Vb = null !== (Tb = null === (Sb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Sb ? void 0 : Sb.get) && void 0 !== Tb ? Tb : function () {
    return this.parentNode;
  };function Wb(a) {
    a = a.prototype;a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", { configurable: !0, enumerable: !0, writable: !0, value: function () {
        var b = Vb.call(this);b && Ub.call(b, this);
      } });
  }Wb(CharacterData);Wb(Element);var Xb,
      Yb,
      Zb = Node.prototype.insertBefore,
      $b = Node.prototype.removeChild,
      ac = null !== (Yb = null === (Xb = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Xb ? void 0 : Xb.get) && void 0 !== Yb ? Yb : function () {
    return this.parentNode;
  };
  function bc(a) {
    a = a.prototype;a.hasOwnProperty("replaceWith") || Object.defineProperty(a, "replaceWith", { configurable: !0, enumerable: !0, writable: !0, value: function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];d = ac.call(this);if (null !== d) {
          c = ka(c);for (var e = c.next(); !e.done; e = c.next()) e = e.value, Zb.call(d, "string" === typeof e ? document.createTextNode(e) : e, this);$b.call(d, this);
        }
      } });
  }bc(CharacterData);bc(Element);var cc = window.Element.prototype,
      dc = window.HTMLElement.prototype,
      ec = window.SVGElement.prototype;!dc.hasOwnProperty("classList") || cc.hasOwnProperty("classList") || ec.hasOwnProperty("classList") || Object.defineProperty(cc, "classList", Object.getOwnPropertyDescriptor(dc, "classList")); /*
                                                                                                                                                                                                                                        Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                                        This code may only be used under the BSD style license found at
                                                                                                                                                                                                                                        http://polymer.github.io/LICENSE.txt The complete set of authors may be found
                                                                                                                                                                                                                                        at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
                                                                                                                                                                                                                                        be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
                                                                                                                                                                                                                                        Google as part of the polymer project is also subject to an additional IP
                                                                                                                                                                                                                                        rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                                        */
  var gc = document.createElement("style");gc.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var hc = document.querySelector("head");hc.insertBefore(gc, hc.firstChild);var ic = window;ic.WebComponents = ic.WebComponents || { flags: {} };var jc = document.querySelector('script[src*="webcomponents-bundle"]'),
      kc = /wc-(.+)/,
      lc = {};if (!lc.noOpts) {
    location.search.slice(1).split("&").forEach(function (a) {
      a = a.split("=");var b;a[0] && (b = a[0].match(kc)) && (lc[b[1]] = a[1] || !0);
    });if (jc) for (var mc = 0, nc = void 0; nc = jc.attributes[mc]; mc++) "src" !== nc.name && (lc[nc.name] = nc.value || !0);var oc = {};lc.log && lc.log.split && lc.log.split(",").forEach(function (a) {
      oc[a] = !0;
    });lc.log = oc;
  }
  ic.WebComponents.flags = lc;var pc = lc.shadydom;if (pc) {
    ic.ShadyDOM = ic.ShadyDOM || {};ic.ShadyDOM.force = pc;var qc = lc.noPatch;ic.ShadyDOM.noPatch = "true" === qc ? !0 : qc;
  }var rc = lc.register || lc.ce;rc && window.customElements && (ic.customElements.forcePolyfill = rc); /*
                                                                                                        Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
                                                                                                        This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                        The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                        The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                        Code distributed by Google as part of the polymer project is also
                                                                                                        subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                        */
  (function () {
    function a() {}function b(p, r) {
      if (!p.childNodes.length) return [];switch (p.nodeType) {case Node.DOCUMENT_NODE:
          return F.call(p, r);case Node.DOCUMENT_FRAGMENT_NODE:
          return E.call(p, r);default:
          return t.call(p, r);}
    }var c = "undefined" === typeof HTMLTemplateElement,
        d = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment),
        e = !1;/Trident/.test(navigator.userAgent) && function () {
      function p(z, R) {
        if (z instanceof DocumentFragment) for (var lb; lb = z.firstChild;) B.call(this, lb, R);else B.call(this, z, R);return z;
      }e = !0;var r = Node.prototype.cloneNode;Node.prototype.cloneNode = function (z) {
        z = r.call(this, z);this instanceof DocumentFragment && (z.__proto__ = DocumentFragment.prototype);return z;
      };DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype, { nodeType: { get: function () {
            return Node.DOCUMENT_FRAGMENT_NODE;
          }, configurable: !0 }, localName: { get: function () {},
          configurable: !0 }, nodeName: { get: function () {
            return "#document-fragment";
          }, configurable: !0 } });var B = Node.prototype.insertBefore;Node.prototype.insertBefore = p;var K = Node.prototype.appendChild;Node.prototype.appendChild = function (z) {
        z instanceof DocumentFragment ? p.call(this, z, null) : K.call(this, z);return z;
      };var aa = Node.prototype.removeChild,
          la = Node.prototype.replaceChild;Node.prototype.replaceChild = function (z, R) {
        z instanceof DocumentFragment ? (p.call(this, z, R), aa.call(this, R)) : la.call(this, z, R);return R;
      };Document.prototype.createDocumentFragment = function () {
        var z = this.createElement("df");z.__proto__ = DocumentFragment.prototype;return z;
      };var va = Document.prototype.importNode;Document.prototype.importNode = function (z, R) {
        R = va.call(this, z, R || !1);z instanceof DocumentFragment && (R.__proto__ = DocumentFragment.prototype);return R;
      };
    }();var f = Node.prototype.cloneNode,
        g = Document.prototype.createElement,
        h = Document.prototype.importNode,
        k = Node.prototype.removeChild,
        l = Node.prototype.appendChild,
        m = Node.prototype.replaceChild,
        q = DOMParser.prototype.parseFromString,
        H = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || { get: function () {
        return this.innerHTML;
      }, set: function (p) {
        this.innerHTML = p;
      } },
        C = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || { get: function () {
        return this.childNodes;
      } },
        t = Element.prototype.querySelectorAll,
        F = Document.prototype.querySelectorAll,
        E = DocumentFragment.prototype.querySelectorAll,
        M = function () {
      if (!c) {
        var p = document.createElement("template"),
            r = document.createElement("template");r.content.appendChild(document.createElement("div"));
        p.content.appendChild(r);p = p.cloneNode(!0);return 0 === p.content.childNodes.length || 0 === p.content.firstChild.content.childNodes.length || d;
      }
    }();if (c) {
      var y = document.implementation.createHTMLDocument("template"),
          W = !0,
          w = document.createElement("style");w.textContent = "template{display:none;}";var ta = document.head;ta.insertBefore(w, ta.firstElementChild);a.prototype = Object.create(HTMLElement.prototype);var ha = !document.createElement("div").hasOwnProperty("innerHTML");a.Z = function (p) {
        if (!p.content && p.namespaceURI === document.documentElement.namespaceURI) {
          p.content = y.createDocumentFragment();for (var r; r = p.firstChild;) l.call(p.content, r);if (ha) p.__proto__ = a.prototype;else if (p.cloneNode = function (B) {
            return a.sa(this, B);
          }, W) try {
            n(p), J(p);
          } catch (B) {
            W = !1;
          }a.bootstrap(p.content);
        }
      };var sa = { option: ["select"], thead: ["table"], col: ["colgroup", "table"], tr: ["tbody", "table"], th: ["tr", "tbody", "table"], td: ["tr", "tbody", "table"] },
          n = function (p) {
        Object.defineProperty(p, "innerHTML", { get: function () {
            return wa(this);
          }, set: function (r) {
            var B = sa[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(r) || ["", ""])[1].toLowerCase()];if (B) for (var K = 0; K < B.length; K++) r = "<" + B[K] + ">" + r + "</" + B[K] + ">";y.body.innerHTML = r;for (a.bootstrap(y); this.content.firstChild;) k.call(this.content, this.content.firstChild);r = y.body;if (B) for (K = 0; K < B.length; K++) r = r.lastChild;for (; r.firstChild;) l.call(this.content, r.firstChild);
          }, configurable: !0 });
      },
          J = function (p) {
        Object.defineProperty(p, "outerHTML", { get: function () {
            return "<template>" + this.innerHTML + "</template>";
          }, set: function (r) {
            if (this.parentNode) {
              y.body.innerHTML = r;for (r = this.ownerDocument.createDocumentFragment(); y.body.firstChild;) l.call(r, y.body.firstChild);m.call(this.parentNode, r, this);
            } else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
          }, configurable: !0 });
      };n(a.prototype);J(a.prototype);a.bootstrap = function (p) {
        p = b(p, "template");for (var r = 0, B = p.length, K; r < B && (K = p[r]); r++) a.Z(K);
      };document.addEventListener("DOMContentLoaded", function () {
        a.bootstrap(document);
      });Document.prototype.createElement = function () {
        var p = g.apply(this, arguments);"template" === p.localName && a.Z(p);return p;
      };DOMParser.prototype.parseFromString = function () {
        var p = q.apply(this, arguments);a.bootstrap(p);return p;
      };Object.defineProperty(HTMLElement.prototype, "innerHTML", { get: function () {
          return wa(this);
        }, set: function (p) {
          H.set.call(this, p);a.bootstrap(this);
        }, configurable: !0, enumerable: !0 });var fa = /[&\u00A0"]/g,
          fc = /[&\u00A0<>]/g,
          fb = function (p) {
        switch (p) {case "&":
            return "&amp;";case "<":
            return "&lt;";case ">":
            return "&gt;";case '"':
            return "&quot;";case "\u00a0":
            return "&nbsp;";}
      };
      w = function (p) {
        for (var r = {}, B = 0; B < p.length; B++) r[p[B]] = !0;return r;
      };var Ua = w("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
          gb = w("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
          wa = function (p, r) {
        "template" === p.localName && (p = p.content);for (var B = "", K = r ? r(p) : C.get.call(p), aa = 0, la = K.length, va; aa < la && (va = K[aa]); aa++) {
          a: {
            var z = va;var R = p;var lb = r;switch (z.nodeType) {case Node.ELEMENT_NODE:
                for (var Ec = z.localName, mb = "<" + Ec, xh = z.attributes, me = 0; R = xh[me]; me++) mb += " " + R.name + '="' + R.value.replace(fa, fb) + '"';mb += ">";z = Ua[Ec] ? mb : mb + wa(z, lb) + "</" + Ec + ">";break a;case Node.TEXT_NODE:
                z = z.data;z = R && gb[R.localName] ? z : z.replace(fc, fb);break a;case Node.COMMENT_NODE:
                z = "\x3c!--" + z.data + "--\x3e";break a;default:
                throw window.console.error(z), Error("not implemented");}
          }B += z;
        }return B;
      };
    }if (c || M) {
      a.sa = function (p, r) {
        var B = f.call(p, !1);this.Z && this.Z(B);r && (l.call(B.content, f.call(p.content, !0)), I(B.content, p.content));return B;
      };var I = function (p, r) {
        if (r.querySelectorAll && (r = b(r, "template"), 0 !== r.length)) {
          p = b(p, "template");for (var B = 0, K = p.length, aa, la; B < K; B++) la = r[B], aa = p[B], a && a.Z && a.Z(la), m.call(aa.parentNode, u.call(la, !0), aa);
        }
      },
          u = Node.prototype.cloneNode = function (p) {
        if (!e && d && this instanceof DocumentFragment) {
          if (p) var r = G.call(this.ownerDocument, this, !0);else return this.ownerDocument.createDocumentFragment();
        } else this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? r = a.sa(this, p) : r = f.call(this, p);p && I(r, this);return r;
      },
          G = Document.prototype.importNode = function (p, r) {
        r = r || !1;if ("template" === p.localName) return a.sa(p, r);var B = h.call(this, p, r);if (r) {
          I(B, p);p = b(B, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');for (var K, aa = 0; aa < p.length; aa++) {
            K = p[aa];r = g.call(document, "script");r.textContent = K.textContent;for (var la = K.attributes, va = 0, z; va < la.length; va++) z = la[va], r.setAttribute(z.name, z.value);m.call(K.parentNode, r, K);
          }
        }return B;
      };
    }c && (window.HTMLTemplateElement = a);
  })(); /*
        Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
        This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
        The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
        The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
        Code distributed by Google as part of the polymer project is also
        subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
        */
  function sc() {}sc.prototype.toJSON = function () {
    return {};
  };function D(a) {
    a.__shady || (a.__shady = new sc());return a.__shady;
  }function L(a) {
    return a && a.__shady;
  };var N = window.ShadyDOM || {};N.Ya = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var tc = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");N.H = !!(tc && tc.configurable && tc.get);N.ya = N.force || !N.Ya;N.J = N.noPatch || !1;N.fa = N.preferPerformance;N.Aa = "on-demand" === N.J;N.Na = navigator.userAgent.match("Trident");function uc() {
    return Document.prototype.msElementsFromPoint ? "msElementsFromPoint" : "elementsFromPoint";
  }function vc(a) {
    return (a = L(a)) && void 0 !== a.firstChild;
  }
  function O(a) {
    return a instanceof ShadowRoot;
  }function wc(a) {
    return (a = (a = L(a)) && a.root) && xc(a);
  }var yc = Element.prototype,
      zc = yc.matches || yc.matchesSelector || yc.mozMatchesSelector || yc.msMatchesSelector || yc.oMatchesSelector || yc.webkitMatchesSelector,
      Ac = document.createTextNode(""),
      Bc = 0,
      Cc = [];new MutationObserver(function () {
    for (; Cc.length;) try {
      Cc.shift()();
    } catch (a) {
      throw Ac.textContent = Bc++, a;
    }
  }).observe(Ac, { characterData: !0 });function Dc(a) {
    Cc.push(a);Ac.textContent = Bc++;
  }
  var Fc = document.contains ? function (a, b) {
    return a.__shady_native_contains(b);
  } : function (a, b) {
    return a === b || a.documentElement && a.documentElement.__shady_native_contains(b);
  };function Gc(a, b) {
    for (; b;) {
      if (b == a) return !0;b = b.__shady_parentNode;
    }return !1;
  }
  function Hc(a) {
    for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b],
          d = c.getAttribute("id") || c.getAttribute("name");d && "length" !== d && isNaN(d) && (a[d] = c);
    }a.item = function (e) {
      return a[e];
    };a.namedItem = function (e) {
      if ("length" !== e && isNaN(e) && a[e]) return a[e];for (var f = ka(a), g = f.next(); !g.done; g = f.next()) if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;return null;
    };return a;
  }function Ic(a) {
    var b = [];for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a);return b;
  }
  function Jc(a) {
    var b = [];for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);return b;
  }function Kc(a, b, c) {
    c.configurable = !0;if (c.value) a[b] = c.value;else try {
      Object.defineProperty(a, b, c);
    } catch (d) {}
  }function P(a, b, c, d) {
    c = void 0 === c ? "" : c;for (var e in b) d && 0 <= d.indexOf(e) || Kc(a, c + e, b[e]);
  }function Lc(a, b) {
    for (var c in b) c in a && Kc(a, c, b[c]);
  }function Q(a) {
    var b = {};Object.getOwnPropertyNames(a).forEach(function (c) {
      b[c] = Object.getOwnPropertyDescriptor(a, c);
    });return b;
  }
  function Mc(a, b) {
    for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++) e = c[d], a[e] = b[e];
  }function Nc(a) {
    return a instanceof Node ? a : document.createTextNode("" + a);
  }function Oc(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];if (1 === b.length) return Nc(b[0]);c = document.createDocumentFragment();b = ka(b);for (var d = b.next(); !d.done; d = b.next()) c.appendChild(Nc(d.value));return c;
  };var Pc = [],
      Qc;function Rc(a) {
    Qc || (Qc = !0, Dc(Sc));Pc.push(a);
  }function Sc() {
    Qc = !1;for (var a = !!Pc.length; Pc.length;) Pc.shift()();return a;
  }Sc.list = Pc;function Tc() {
    this.g = !1;this.addedNodes = [];this.removedNodes = [];this.oa = new Set();
  }function Uc(a) {
    a.g || (a.g = !0, Dc(function () {
      a.flush();
    }));
  }Tc.prototype.flush = function () {
    if (this.g) {
      this.g = !1;var a = this.takeRecords();a.length && this.oa.forEach(function (b) {
        b(a);
      });
    }
  };Tc.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
    }return [];
  };
  function Vc(a, b) {
    var c = D(a);c.ea || (c.ea = new Tc());c.ea.oa.add(b);var d = c.ea;return { Ra: b, X: d, Sa: a, takeRecords: function () {
        return d.takeRecords();
      } };
  }function Wc(a) {
    var b = a && a.X;b && (b.oa.delete(a.Ra), b.oa.size || (D(a.Sa).ea = null));
  }
  function Xc(a, b) {
    var c = b.getRootNode();return a.map(function (d) {
      var e = c === d.target.getRootNode();if (e && d.addedNodes) {
        if (e = [].slice.call(d.addedNodes).filter(function (f) {
          return c === f.getRootNode();
        }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", { value: e, configurable: !0 }), d;
      } else if (e) return d;
    }).filter(function (d) {
      return d;
    });
  };var Yc = /[&\u00A0"]/g,
      Zc = /[&\u00A0<>]/g;function $c(a) {
    switch (a) {case "&":
        return "&amp;";case "<":
        return "&lt;";case ">":
        return "&gt;";case '"':
        return "&quot;";case "\u00a0":
        return "&nbsp;";}
  }function ad(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;return b;
  }var bd = ad("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
      cd = ad("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function dd(a, b) {
    "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
      a: {
        var h = g;var k = a,
            l = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
            k = h.localName;for (var m = "<" + k, q = h.attributes, H = 0, C; C = q[H]; H++) m += " " + C.name + '="' + C.value.replace(Yc, $c) + '"';m += ">";h = bd[k] ? m : m + dd(h, l) + "</" + k + ">";break a;case Node.TEXT_NODE:
            h = h.data;h = k && cd[k.localName] ? h : h.replace(Zc, $c);break a;case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";break a;default:
            throw window.console.error(h), Error("not implemented");}
      }c += h;
    }return c;
  };var ed = N.H,
      fd = { querySelector: function (a) {
      return this.__shady_native_querySelector(a);
    }, querySelectorAll: function (a) {
      return this.__shady_native_querySelectorAll(a);
    } },
      gd = {};function hd(a) {
    gd[a] = function (b) {
      return b["__shady_native_" + a];
    };
  }function id(a, b) {
    P(a, b, "__shady_native_");for (var c in b) hd(c);
  }function S(a, b) {
    b = void 0 === b ? [] : b;for (var c = 0; c < b.length; c++) {
      var d = b[c],
          e = Object.getOwnPropertyDescriptor(a, d);e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? fd[d] || (fd[d] = e.value) : hd(d));
    }
  }
  var jd = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      kd = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
      ld = document.implementation.createHTMLDocument("inert");function md(a) {
    for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
  }var nd = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
      od = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];
  function pd() {
    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];window.EventTarget ? (S(window.EventTarget.prototype, a), void 0 === window.__shady_native_addEventListener && S(Window.prototype, a)) : (S(Node.prototype, a), S(Window.prototype, a));ed ? S(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : id(Node.prototype, { parentNode: { get: function () {
          jd.currentNode = this;return jd.parentNode();
        } }, firstChild: { get: function () {
          jd.currentNode = this;return jd.firstChild();
        } }, lastChild: { get: function () {
          jd.currentNode = this;return jd.lastChild();
        } }, previousSibling: { get: function () {
          jd.currentNode = this;return jd.previousSibling();
        } }, nextSibling: { get: function () {
          jd.currentNode = this;return jd.nextSibling();
        } }, childNodes: { get: function () {
          var b = [];jd.currentNode = this;for (var c = jd.firstChild(); c;) b.push(c), c = jd.nextSibling();return b;
        } }, parentElement: { get: function () {
          kd.currentNode = this;return kd.parentNode();
        } }, textContent: { get: function () {
          switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) c += d.nodeValue;return c;default:
              return this.nodeValue;}
        }, set: function (b) {
          if ("undefined" === typeof b || null === b) b = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              md(this);(0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);break;default:
              this.nodeValue = b;}
        } } });S(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
    S(HTMLElement.prototype, ["parentElement", "contains"]);a = { firstElementChild: { get: function () {
          kd.currentNode = this;return kd.firstChild();
        } }, lastElementChild: { get: function () {
          kd.currentNode = this;return kd.lastChild();
        } }, children: { get: function () {
          var b = [];kd.currentNode = this;for (var c = kd.firstChild(); c;) b.push(c), c = kd.nextSibling();return Hc(b);
        } }, childElementCount: { get: function () {
          return this.children ? this.children.length : 0;
        } } };ed ? (S(Element.prototype, nd), S(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), S(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (id(Element.prototype, a), id(Element.prototype, { previousElementSibling: { get: function () {
          kd.currentNode = this;return kd.previousSibling();
        } }, nextElementSibling: { get: function () {
          kd.currentNode = this;return kd.nextSibling();
        } }, innerHTML: { get: function () {
          return dd(this, Ic);
        }, set: function (b) {
          var c = "template" === this.localName ? this.content : this;md(c);var d = this.localName || "div";d = this.namespaceURI && this.namespaceURI !== ld.namespaceURI ? ld.createElementNS(this.namespaceURI, d) : ld.createElement(d);d.innerHTML = b;for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0);
        } }, className: { get: function () {
          return this.getAttribute("class") || "";
        }, set: function (b) {
          this.setAttribute("class", b);
        } } }));S(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));S(Element.prototype, od);S(HTMLElement.prototype, ["focus", "blur"]);window.HTMLTemplateElement && S(window.HTMLTemplateElement.prototype, ["innerHTML"]);ed ? S(DocumentFragment.prototype, nd) : id(DocumentFragment.prototype, a);S(DocumentFragment.prototype, od);ed ? (S(Document.prototype, nd), S(Document.prototype, ["activeElement"])) : id(Document.prototype, a);S(Document.prototype, ["importNode", "getElementById", "elementFromPoint", uc()]);S(Document.prototype, od);
  };var qd = Q({ get childNodes() {
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
      rd = Q({ get textContent() {
      return this.__shady_textContent;
    }, set textContent(a) {
      this.__shady_textContent = a;
    }, get innerHTML() {
      return this.__shady_innerHTML;
    }, set innerHTML(a) {
      this.__shady_innerHTML = a;
    } }),
      sd = Q({ get parentElement() {
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
    } });function td(a) {
    for (var b in a) {
      var c = a[b];c && (c.enumerable = !1);
    }
  }td(qd);td(rd);td(sd);var ud = N.H || !0 === N.J,
      vd = ud ? function () {} : function (a) {
    var b = D(a);b.Pa || (b.Pa = !0, Lc(a, sd));
  },
      wd = ud ? function () {} : function (a) {
    var b = D(a);b.Oa || (b.Oa = !0, Lc(a, qd), window.customElements && window.customElements.polyfillWrapFlushCallback && !N.J || Lc(a, rd));
  };var xd = "__eventWrappers" + Date.now(),
      yd = function () {
    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");return a ? function (b) {
      return a.get.call(b);
    } : null;
  }(),
      zd = function () {
    function a() {}var b = !1,
        c = { get capture() {
        b = !0;return !1;
      } };window.addEventListener("test", a, c);window.removeEventListener("test", a, c);return b;
  }();function Ad(a) {
    if (a && "object" === typeof a) {
      var b = !!a.capture;var c = !!a.once;var d = !!a.passive;var e = a.U;
    } else b = !!a, d = c = !1;return { La: e, capture: b, once: c, passive: d, Ja: zd ? a : b };
  }
  var Bd = { blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0,
    drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 },
      Cd = { DOMAttrModified: !0, DOMAttributeNameChanged: !0, DOMCharacterDataModified: !0, DOMElementNameChanged: !0, DOMNodeInserted: !0, DOMNodeInsertedIntoDocument: !0, DOMNodeRemoved: !0, DOMNodeRemovedFromDocument: !0, DOMSubtreeModified: !0 };function Dd(a) {
    return a instanceof Node ? a.__shady_getRootNode() : a;
  }
  function Ed(a, b) {
    var c = [],
        d = a;for (a = Dd(a); d;) c.push(d), d = d.__shady_assignedSlot ? d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.__shady_parentNode;c[c.length - 1] === document && c.push(window);return c;
  }function Fd(a) {
    a.__composedPath || (a.__composedPath = Ed(a.target, !0));return a.__composedPath;
  }function Gd(a, b) {
    if (!O) return a;a = Ed(a, !0);for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = Dd(d), f !== e && (g = a.indexOf(f), e = f), !O(f) || -1 < g) return d;
  }
  function Hd(a) {
    function b(c, d) {
      c = new a(c, d);c.__composed = d && !!d.composed;return c;
    }b.__proto__ = a;b.prototype = a.prototype;return b;
  }var Id = { focus: !0, blur: !0 };function Jd(a) {
    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
  }function Kd(a, b, c) {
    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!Jd(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
  }
  function Ld(a) {
    var b = a.composedPath(),
        c = b.map(function (k) {
      return Gd(k, b);
    }),
        d = a.bubbles;Object.defineProperty(a, "currentTarget", { configurable: !0, enumerable: !0, get: function () {
        return g;
      } });var e = Event.CAPTURING_PHASE;Object.defineProperty(a, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
        return e;
      } });for (var f = b.length - 1; 0 <= f; f--) {
      var g = b[f];e = g === c[f] ? Event.AT_TARGET : Event.CAPTURING_PHASE;Kd(a, g, "capture");if (a.ra) return;
    }for (f = 0; f < b.length; f++) {
      g = b[f];var h = g === c[f];if (h || d) if (e = h ? Event.AT_TARGET : Event.BUBBLING_PHASE, Kd(a, g, "bubble"), a.ra) return;
    }e = 0;g = null;
  }function Md(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
          k = h.type,
          l = h.capture,
          m = h.once,
          q = h.passive;if (b === h.node && c === k && d === l && e === m && f === q) return g;
    }return -1;
  }function Nd(a) {
    Sc();return !N.fa && this instanceof Node && !Fc(document, this) ? (a.__target || Od(a, this), Ld(a)) : this.__shady_native_dispatchEvent(a);
  }
  function Pd(a, b, c) {
    var d = Ad(c),
        e = d.capture,
        f = d.once,
        g = d.passive,
        h = d.La;d = d.Ja;if (b) {
      var k = typeof b;if ("function" === k || "object" === k) if ("object" !== k || b.handleEvent && "function" === typeof b.handleEvent) {
        if (Cd[a]) return this.__shady_native_addEventListener(a, b, d);var l = h || this;if (h = b[xd]) {
          if (-1 < Md(h, l, a, e, f, g)) return;
        } else b[xd] = [];h = function (m) {
          f && this.__shady_removeEventListener(a, b, c);m.__target || Od(m);if (l !== this) {
            var q = Object.getOwnPropertyDescriptor(m, "currentTarget");Object.defineProperty(m, "currentTarget", { get: function () {
                return l;
              }, configurable: !0 });var H = Object.getOwnPropertyDescriptor(m, "eventPhase");Object.defineProperty(m, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
                return e ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
              } });
          }m.__previousCurrentTarget = m.currentTarget;if (!O(l) && "slot" !== l.localName || -1 != m.composedPath().indexOf(l)) if (m.composed || -1 < m.composedPath().indexOf(l)) if (Jd(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === l || l instanceof Window) {
            var C = "function" === k ? b.call(l, m) : b.handleEvent && b.handleEvent(m);l !== this && (q ? (Object.defineProperty(m, "currentTarget", q), q = null) : delete m.currentTarget, H ? (Object.defineProperty(m, "eventPhase", H), H = null) : delete m.eventPhase);return C;
          }
        };b[xd].push({ node: l, type: a, capture: e, once: f, passive: g, pb: h });this.__handlers = this.__handlers || {};this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] };this.__handlers[a][e ? "capture" : "bubble"].push(h);
        Id[a] || this.__shady_native_addEventListener(a, h, d);
      }
    }
  }
  function Qd(a, b, c) {
    if (b) {
      var d = Ad(c);c = d.capture;var e = d.once,
          f = d.passive,
          g = d.La;d = d.Ja;if (Cd[a]) return this.__shady_native_removeEventListener(a, b, d);var h = g || this;g = void 0;var k = null;try {
        k = b[xd];
      } catch (l) {}k && (e = Md(k, h, a, c, e, f), -1 < e && (g = k.splice(e, 1)[0].pb, k.length || (b[xd] = void 0)));this.__shady_native_removeEventListener(a, g || b, d);g && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
    }
  }
  function Rd() {
    for (var a in Id) window.__shady_native_addEventListener(a, function (b) {
      b.__target || (Od(b), Ld(b));
    }, !0);
  }
  var Sd = Q({ get composed() {
      void 0 === this.__composed && (yd ? this.__composed = "focusin" === this.type || "focusout" === this.type || yd(this) : !1 !== this.isTrusted && (this.__composed = Bd[this.type]));return this.__composed || !1;
    }, composedPath: function () {
      this.__composedPath || (this.__composedPath = Ed(this.__target, this.composed));return this.__composedPath;
    }, get target() {
      return Gd(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
    }, get relatedTarget() {
      if (!this.__relatedTarget) return null;this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = Ed(this.__relatedTarget, !0));return Gd(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
    }, stopPropagation: function () {
      Event.prototype.stopPropagation.call(this);this.ra = !0;
    }, stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);this.ra = this.__immediatePropagationStopped = !0;
    } });
  function Od(a, b) {
    b = void 0 === b ? a.target : b;a.__target = b;a.__relatedTarget = a.relatedTarget;if (N.H) {
      b = Object.getPrototypeOf(a);if (!b.hasOwnProperty("__shady_patchedProto")) {
        var c = Object.create(b);c.__shady_sourceProto = b;P(c, Sd);b.__shady_patchedProto = c;
      }a.__proto__ = b.__shady_patchedProto;
    } else P(a, Sd);
  }var Td = Hd(Event),
      Ud = Hd(CustomEvent),
      Vd = Hd(MouseEvent);
  function Wd() {
    if (!yd && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
      var a = function () {
        var b = new MouseEvent("click", { bubbles: !0, cancelable: !0, composed: !0 });this.__shady_dispatchEvent(b);
      };Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  }
  var Xd = Object.getOwnPropertyNames(Element.prototype).filter(function (a) {
    return "on" === a.substring(0, 2);
  }),
      Yd = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function (a) {
    return "on" === a.substring(0, 2);
  });function Zd(a) {
    return { set: function (b) {
        var c = D(this),
            d = a.substring(2);c.T || (c.T = {});c.T[a] && this.removeEventListener(d, c.T[a]);this.__shady_addEventListener(d, b);c.T[a] = b;
      }, get: function () {
        var b = L(this);return b && b.T && b.T[a];
      }, configurable: !0 };
  };function $d(a, b) {
    return { index: a, ga: [], na: b };
  }
  function ae(a, b, c, d) {
    var e = 0,
        f = 0,
        g = 0,
        h = 0,
        k = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
      for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;g = k;
    }if (b == a.length && d == c.length) {
      h = a.length;for (var l = c.length, m = 0; m < k - g && be(a[--h], c[--l]);) m++;h = m;
    }e += g;f += g;b -= h;d -= h;if (0 == b - e && 0 == d - f) return [];if (e == b) {
      for (b = $d(e, 0); f < d;) b.ga.push(c[f++]);return [b];
    }if (f == d) return [$d(e, b - e)];k = e;g = f;d = d - g + 1;h = b - k + 1;b = Array(d);for (l = 0; l < d; l++) b[l] = Array(h), b[l][0] = l;for (l = 0; l < h; l++) b[0][l] = l;for (l = 1; l < d; l++) for (m = 1; m < h; m++) if (a[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1];else {
      var q = b[l - 1][m] + 1,
          H = b[l][m - 1] + 1;b[l][m] = q < H ? q : H;
    }k = b.length - 1;g = b[0].length - 1;d = b[k][g];for (a = []; 0 < k || 0 < g;) 0 == k ? (a.push(2), g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], q = l < m ? l < h ? l : h : m < h ? m : h, q == h ? (h == d ? a.push(0) : (a.push(1), d = h), k--, g--) : q == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m));a.reverse();b = void 0;k = [];for (g = 0; g < a.length; g++) switch (a[g]) {case 0:
        b && (k.push(b), b = void 0);e++;f++;break;case 1:
        b || (b = $d(e, 0));b.na++;e++;b.ga.push(c[f]);f++;break;case 2:
        b || (b = $d(e, 0));b.na++;e++;break;case 3:
        b || (b = $d(e, 0)), b.ga.push(c[f]), f++;}b && k.push(b);return k;
  }function be(a, b) {
    return a === b;
  };var ce = Q({ dispatchEvent: Nd, addEventListener: Pd, removeEventListener: Qd });var de = null;function ee() {
    de || (de = window.ShadyCSS && window.ShadyCSS.ScopingShim);return de || null;
  }function fe(a, b, c) {
    var d = ee();return d && "class" === b ? (d.setElementClass(a, c), !0) : !1;
  }function ge(a, b) {
    var c = ee();c && c.unscopeNode(a, b);
  }function he(a, b) {
    var c = ee();if (!c) return !0;if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && he(a, b);return c;
    }return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
  }
  function ie(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return "";var b = ee();return b ? b.currentScopeForNode(a) : "";
  }function je(a, b) {
    if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && je(a, b);
  };var ke = window.document,
      le = N.fa,
      ne = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      oe = ne && ne.get;function pe(a) {
    for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
  }function qe(a) {
    var b = L(a);if (b && void 0 !== b.qa) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) qe(b);if (a = L(a)) a.qa = void 0;
  }function re(a) {
    var b = a;if (a && "slot" === a.localName) {
      var c = L(a);(c = c && c.aa) && (b = c.length ? c[0] : re(a.__shady_nextSibling));
    }return b;
  }
  function se(a, b, c) {
    if (a = (a = L(a)) && a.ea) {
      if (b) if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c && a.removedNodes.push(c);Uc(a);
    }
  }
  var ze = Q({ get parentNode() {
      var a = L(this);a = a && a.parentNode;return void 0 !== a ? a : this.__shady_native_parentNode;
    }, get firstChild() {
      var a = L(this);a = a && a.firstChild;return void 0 !== a ? a : this.__shady_native_firstChild;
    }, get lastChild() {
      var a = L(this);a = a && a.lastChild;return void 0 !== a ? a : this.__shady_native_lastChild;
    }, get nextSibling() {
      var a = L(this);a = a && a.nextSibling;return void 0 !== a ? a : this.__shady_native_nextSibling;
    }, get previousSibling() {
      var a = L(this);a = a && a.previousSibling;return void 0 !== a ? a : this.__shady_native_previousSibling;
    },
    get childNodes() {
      if (vc(this)) {
        var a = L(this);if (!a.childNodes) {
          a.childNodes = [];for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
        }var c = a.childNodes;
      } else c = this.__shady_native_childNodes;c.item = function (d) {
        return c[d];
      };return c;
    }, get parentElement() {
      var a = L(this);(a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);return void 0 !== a ? a : this.__shady_native_parentElement;
    }, get isConnected() {
      if (oe && oe.call(this)) return !0;if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
      var a = this.ownerDocument;if (null === a || Fc(a, this)) return !0;for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (O(a) ? a.host : void 0);return !!(a && a instanceof Document);
    }, get textContent() {
      if (vc(this)) {
        for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);return a.join("");
      }return this.__shady_native_textContent;
    }, set textContent(a) {
      if ("undefined" === typeof a || null === a) a = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
          if (!vc(this) && N.H) {
            var b = this.__shady_firstChild;(b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && pe(this);this.__shady_native_textContent = a;
          } else pe(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));break;default:
          this.nodeValue = a;}
    }, insertBefore: function (a, b) {
      if (this.ownerDocument !== ke && a.ownerDocument !== ke) return this.__shady_native_insertBefore(a, b), a;if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
      if (b) {
        var c = L(b);c = c && c.parentNode;if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }if (b === a) return a;se(this, a);var d = [],
          e = (c = te(this)) ? c.host.localName : ie(this),
          f = a.__shady_parentNode;if (f) {
        var g = ie(a);var h = !!c || !te(a) || le && void 0 !== this.__noInsertionPoint;f.__shady_removeChild(a, h);
      }f = !0;var k = (!le || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !he(a, e),
          l = c && !a.__noInsertionPoint && (!le || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);if (l || k) k && (g = g || ie(a)), je(a, function (m) {
        l && "slot" === m.localName && d.push(m);if (k) {
          var q = g;ee() && (q && ge(m, q), (q = ee()) && q.scopeNode(m, e));
        }
      });d.length && (ue(c), c.i.push.apply(c.i, x(d)), ve(c));vc(this) && (we(a, this, b), h = L(this), h.root ? (f = !1, wc(this) && ve(h.root)) : c && "slot" === this.localName && (f = !1, ve(c)));f ? (c = O(this) ? this.host : this, b ? (b = re(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);return a;
    }, appendChild: function (a) {
      if (this != a || !O(a)) return this.__shady_insertBefore(a);
    }, removeChild: function (a, b) {
      b = void 0 === b ? !1 : b;if (this.ownerDocument !== ke) return this.__shady_native_removeChild(a);if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);se(this, null, a);var c = te(a),
          d = c && xe(c, a),
          e = L(this);if (vc(this) && (ye(a, this), wc(this))) {
        ve(e.root);var f = !0;
      }if (ee() && !b && c && a.nodeType !== Node.TEXT_NODE) {
        var g = ie(a);je(a, function (h) {
          ge(h, g);
        });
      }qe(a);c && ((b = "slot" === this.localName) && (f = !0), (d || b) && ve(c));f || (f = O(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));return a;
    }, replaceChild: function (a, b) {
      this.__shady_insertBefore(a, b);this.__shady_removeChild(b);return a;
    }, cloneNode: function (a) {
      if ("template" == this.localName) return this.__shady_native_cloneNode(a);var b = this.__shady_native_cloneNode(!1);if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_firstChild;for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
      }return b;
    }, getRootNode: function (a) {
      if (this && this.nodeType) {
        var b = D(this),
            c = b.qa;void 0 === c && (O(this) ? (c = this, b.qa = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.qa = c)));return c;
      }
    }, contains: function (a) {
      return Gc(this, a);
    } });var Be = Q({ get assignedSlot() {
      var a = this.__shady_parentNode;(a = a && a.__shady_shadowRoot) && Ae(a);return (a = L(this)) && a.assignedSlot || null;
    } });function Ce(a, b, c) {
    var d = [];De(a, b, c, d);return d;
  }function De(a, b, c, d) {
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      var e;if (e = a.nodeType === Node.ELEMENT_NODE) {
        e = a;var f = b,
            g = c,
            h = d,
            k = f(e);k && h.push(e);g && g(k) ? e = k : (De(e, f, g, h), e = void 0);
      }if (e) break;
    }
  }
  var Ee = { get firstElementChild() {
      var a = L(this);if (a && void 0 !== a.firstChild) {
        for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;return a;
      }return this.__shady_native_firstElementChild;
    }, get lastElementChild() {
      var a = L(this);if (a && void 0 !== a.lastChild) {
        for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_lastElementChild;
    }, get children() {
      return vc(this) ? Hc(Array.prototype.filter.call(Jc(this), function (a) {
        return a.nodeType === Node.ELEMENT_NODE;
      })) : this.__shady_native_children;
    }, get childElementCount() {
      var a = this.__shady_children;return a ? a.length : 0;
    } },
      Fe = Q((Ee.append = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];this.__shady_insertBefore(Oc.apply(null, x(b)), null);
  }, Ee.prepend = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];this.__shady_insertBefore(Oc.apply(null, x(b)), this.__shady_firstChild);
  }, Ee.replaceChildren = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];for (; null !== (c = this.__shady_firstChild);) this.__shady_removeChild(c);this.__shady_insertBefore(Oc.apply(null, x(b)), null);
  }, Ee)),
      Ge = Q({ querySelector: function (a) {
      return Ce(this, function (b) {
        return zc.call(b, a);
      }, function (b) {
        return !!b;
      })[0] || null;
    }, querySelectorAll: function (a, b) {
      if (b) {
        b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c = this.__shady_getRootNode();return Hc(b.filter(function (d) {
          return d.__shady_getRootNode() == c;
        }));
      }return Hc(Ce(this, function (d) {
        return zc.call(d, a);
      }));
    } }),
      He = N.fa && !N.J ? Mc({}, Fe) : Fe;Mc(Fe, Ge);var Ie = Q({ after: function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];c = this.__shady_parentNode;if (null !== c) {
        var d = this.__shady_nextSibling;c.__shady_insertBefore(Oc.apply(null, x(b)), d);
      }
    }, before: function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];c = this.__shady_parentNode;null !== c && c.__shady_insertBefore(Oc.apply(null, x(b)), this);
    }, remove: function () {
      var a = this.__shady_parentNode;null !== a && a.__shady_removeChild(this);
    }, replaceWith: function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];c = this.__shady_parentNode;if (null !== c) {
        var d = this.__shady_nextSibling;c.__shady_removeChild(this);c.__shady_insertBefore(Oc.apply(null, x(b)), d);
      }
    } });var Je = window.document;function Ke(a, b) {
    if ("slot" === b) a = a.__shady_parentNode, wc(a) && ve(L(a).root);else if ("slot" === a.localName && "name" === b && (b = te(a))) {
      if (b.g) {
        Le(b);var c = a.Qa,
            d = Me(a);if (d !== c) {
          c = b.h[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.h[d] || (b.h[d] = []);c.push(a);1 < c.length && (b.h[d] = Ne(c));
        }
      }ve(b);
    }
  }
  var Oe = Q({ get previousElementSibling() {
      var a = L(this);if (a && void 0 !== a.previousSibling) {
        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_previousElementSibling;
    }, get nextElementSibling() {
      var a = L(this);if (a && void 0 !== a.nextSibling) {
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
      this.ownerDocument !== Je ? this.__shady_native_setAttribute(a, b) : fe(this, a, b) || (this.__shady_native_setAttribute(a, b), Ke(this, a));
    }, removeAttribute: function (a) {
      this.ownerDocument !== Je ? this.__shady_native_removeAttribute(a) : fe(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a), Ke(this, a));
    } });N.fa || Xd.forEach(function (a) {
    Oe[a] = Zd(a);
  });
  var Te = Q({ attachShadow: function (a) {
      if (!this) throw Error("Must provide a host.");if (!a) throw Error("Not enough arguments.");if (a.shadyUpgradeFragment && !N.Na) {
        var b = a.shadyUpgradeFragment;b.__proto__ = ShadowRoot.prototype;Pe(b, this, a);Qe(b, b);a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");b.__noInsertionPoint = void 0;if (a && a.length) {
          var c = b;ue(c);c.i.push.apply(c.i, x(a));ve(b);
        }b.host.__shady_native_appendChild(b);
      } else b = new Re(Se, this, a);return this.__CE_shadowRoot = b;
    }, get shadowRoot() {
      var a = L(this);
      return a && a.gb || null;
    } });Mc(Oe, Te);var Ue = document.implementation.createHTMLDocument("inert"),
      Ve = Q({ get innerHTML() {
      return vc(this) ? dd("template" === this.localName ? this.content : this, Jc) : this.__shady_native_innerHTML;
    }, set innerHTML(a) {
      if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
        pe(this);var b = this.localName || "div";b = this.namespaceURI && this.namespaceURI !== Ue.namespaceURI ? Ue.createElementNS(this.namespaceURI, b) : Ue.createElement(b);for (N.H ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
      }
    } });var We = Q({ blur: function () {
      var a = L(this);(a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
    } });N.fa || Yd.forEach(function (a) {
    We[a] = Zd(a);
  });var Xe = Q({ assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.__shady_getRootNode();b && O(b) && Ae(b);return (b = L(this)) ? (a && a.flatten ? b.aa : b.assignedNodes) || [] : [];
      }
    }, addEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) Pd.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.U = this;d.__shady_addEventListener(a, b, c);
      }
    }, removeEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) Qd.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.U = this;d.__shady_removeEventListener(a, b, c);
      }
    } });var Ye = Q({ getElementById: function (a) {
      return "" === a ? null : Ce(this, function (b) {
        return b.id == a;
      }, function (b) {
        return !!b;
      })[0] || null;
    } });function Ze(a, b) {
    for (var c; b && !a.has(c = b.__shady_getRootNode());) b = c.host;return b;
  }function $e(a) {
    var b = new Set();for (b.add(a); O(a) && a.host;) a = a.host.__shady_getRootNode(), b.add(a);return b;
  }
  var af = "__shady_native_" + uc(),
      bf = Q({ get activeElement() {
      var a = N.H ? document.__shady_native_activeElement : document.activeElement;if (!a || !a.nodeType) return null;var b = !!O(this);if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;for (b = te(a); b && b !== this;) a = b.host, b = te(a);return this === document ? b ? null : a : b === this ? a : null;
    }, elementsFromPoint: function (a, b) {
      a = [].slice.call(document[af](a, b));b = $e(this);for (var c = new Set(), d = 0; d < a.length; d++) c.add(Ze(b, a[d]));var e = [];c.forEach(function (f) {
        return e.push(f);
      });
      return e;
    }, elementFromPoint: function (a, b) {
      return this.__shady_elementsFromPoint(a, b)[0] || null;
    } });var cf = window.document,
      df = Q({ importNode: function (a, b) {
      if (a.ownerDocument !== cf || "template" === a.localName) return this.__shady_native_importNode(a, b);var c = this.__shady_native_importNode(a, !1);if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);return c;
    } });var ef = Q({ dispatchEvent: Nd, addEventListener: Pd.bind(window), removeEventListener: Qd.bind(window) });var ff = {};Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (ff.parentElement = ze.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (ff.contains = ze.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (ff.children = Fe.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (ff.innerHTML = Ve.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (ff.className = Oe.className);
  var gf = { EventTarget: [ce], Node: [ze, window.EventTarget ? null : ce], Text: [Be], Comment: [Be], CDATASection: [Be], ProcessingInstruction: [Be], Element: [Oe, Fe, Ie, Be, !N.H || "innerHTML" in Element.prototype ? Ve : null, window.HTMLSlotElement ? null : Xe], HTMLElement: [We, ff], HTMLSlotElement: [Xe], DocumentFragment: [He, Ye], Document: [df, He, Ye, bf], Window: [ef], CharacterData: [Ie] },
      hf = N.H ? null : ["innerHTML", "textContent"];function jf(a, b, c, d) {
    b.forEach(function (e) {
      return a && e && P(a, e, c, d);
    });
  }
  function kf(a) {
    var b = a ? null : hf,
        c;for (c in gf) jf(window[c] && window[c].prototype, gf[c], a, b);
  }["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (a) {
    var b = window[a],
        c = Object.create(b.prototype);c.__shady_protoIsPatched = !0;jf(c, gf.EventTarget);jf(c, gf.Node);gf[a] && jf(c, gf[a]);b.prototype.__shady_patchedProto = c;
  });function lf(a) {
    a.__shady_protoIsPatched = !0;jf(a, gf.EventTarget);jf(a, gf.Node);jf(a, gf.Element);jf(a, gf.HTMLElement);jf(a, gf.HTMLSlotElement);return a;
  };var mf = N.Aa,
      nf = N.H;function of(a, b) {
    if (mf && !a.__shady_protoIsPatched && !O(a)) {
      var c = Object.getPrototypeOf(a),
          d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;d || (d = Object.create(c), lf(d), c.__shady_patchedProto = d);Object.setPrototypeOf(a, d);
    }nf || (1 === b ? vd(a) : 2 === b && wd(a));
  }
  function pf(a, b, c, d) {
    of(a, 1);d = d || null;var e = D(a),
        f = d ? D(d) : null;e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;if (f = L(e.previousSibling)) f.nextSibling = a;if (f = L(e.nextSibling = d)) f.previousSibling = a;e.parentNode = b;d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));c.childNodes = null;
  }
  function we(a, b, c) {
    of(b, 2);var d = D(b);void 0 !== d.firstChild && (d.childNodes = null);if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) pf(a, b, d, c);else pf(a, b, d, c);
  }
  function ye(a, b) {
    var c = D(a);b = D(b);a === b.firstChild && (b.firstChild = c.nextSibling);a === b.lastChild && (b.lastChild = c.previousSibling);a = c.previousSibling;var d = c.nextSibling;a && (D(a).nextSibling = d);d && (D(d).previousSibling = a);c.parentNode = c.previousSibling = c.nextSibling = void 0;void 0 !== b.childNodes && (b.childNodes = null);
  }
  function Qe(a, b) {
    var c = D(a);if (b || void 0 === c.firstChild) {
      c.childNodes = null;var d = c.firstChild = a.__shady_native_firstChild;c.lastChild = a.__shady_native_lastChild;of(a, 2);c = d;for (d = void 0; c; c = c.__shady_native_nextSibling) {
        var e = D(c);e.parentNode = b || a;e.nextSibling = c.__shady_native_nextSibling;e.previousSibling = d || null;d = c;of(c, 1);
      }
    }
  };var qf = Q({ addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.U = c.U || this;this.host.__shady_addEventListener(a, b, c);
    }, removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.U = c.U || this;this.host.__shady_removeEventListener(a, b, c);
    } });function rf(a, b) {
    P(a, qf, b);P(a, bf, b);P(a, Ve, b);P(a, Fe, b);N.J && !b ? (P(a, ze, b), P(a, Ye, b)) : N.H || (P(a, sd), P(a, qd), P(a, rd));
  };var Se = {},
      sf = N.deferConnectionCallbacks && "loading" === document.readyState,
      tf;function uf(a) {
    var b = [];do b.unshift(a); while (a = a.__shady_parentNode);return b;
  }function Re(a, b, c) {
    if (a !== Se) throw new TypeError("Illegal constructor");this.g = null;Pe(this, b, c);
  }
  function Pe(a, b, c) {
    a.host = b;a.mode = c && c.mode;Qe(a.host);b = D(a.host);b.root = a;b.gb = "closed" !== a.mode ? a : null;b = D(a);b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;if (N.preferPerformance) for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b);else ve(a);
  }function ve(a) {
    a.Y || (a.Y = !0, Rc(function () {
      return Ae(a);
    }));
  }
  function Ae(a) {
    var b;if (b = a.Y) {
      for (var c; a;) a: {
        a.Y && (c = a), b = a;a = b.host.__shady_getRootNode();if (O(a) && (b = L(b.host)) && 0 < b.ia) break a;a = void 0;
      }b = c;
    }(c = b) && c._renderSelf();
  }
  Re.prototype._renderSelf = function () {
    var a = sf;sf = !0;this.Y = !1;if (this.g) {
      Le(this);for (var b = 0, c; b < this.g.length; b++) {
        c = this.g[b];var d = L(c),
            e = d.assignedNodes;d.assignedNodes = [];d.aa = [];if (d.Ga = e) for (d = 0; d < e.length; d++) {
          var f = L(e[d]);f.ua = f.assignedSlot;f.assignedSlot === c && (f.assignedSlot = null);
        }
      }for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) vf(this, b);for (b = 0; b < this.g.length; b++) {
        c = this.g[b];e = L(c);if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) vf(this, d, c);(d = (d = L(c.__shady_parentNode)) && d.root) && (xc(d) || d.Y) && d._renderSelf();wf(this, e.aa, e.assignedNodes);if (d = e.Ga) {
          for (f = 0; f < d.length; f++) L(d[f]).ua = null;e.Ga = null;d.length > e.assignedNodes.length && (e.xa = !0);
        }e.xa && (e.xa = !1, xf(this, c));
      }c = this.g;b = [];for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = L(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);for (c = 0; c < b.length; c++) {
        f = b[c];e = f === this ? this.host : f;d = [];for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) if ("slot" == f.localName) for (var g = L(f).aa, h = 0; h < g.length; h++) d.push(g[h]);else d.push(f);f = Ic(e);g = ae(d, d.length, f, f.length);for (var k = h = 0, l = void 0; h < g.length && (l = g[h]); h++) {
          for (var m = 0, q = void 0; m < l.ga.length && (q = l.ga[m]); m++) q.__shady_native_parentNode === e && e.__shady_native_removeChild(q), f.splice(l.index + k, 1);k -= l.na;
        }k = 0;for (l = void 0; k < g.length && (l = g[k]); k++) for (h = f[l.index], m = l.index; m < l.index + l.na; m++) q = d[m], e.__shady_native_insertBefore(q, h), f.splice(m, 0, q);
      }
    }if (!N.preferPerformance && !this.Fa) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c = L(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);this.Fa = !0;sf = a;tf && tf();
  };function vf(a, b, c) {
    var d = D(b),
        e = d.ua;d.ua = null;c || (c = (a = a.h[b.__shady_slot || "__catchall"]) && a[0]);c ? (D(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;e !== d.assignedSlot && d.assignedSlot && (D(d.assignedSlot).xa = !0);
  }
  function wf(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
      var f = L(e).assignedNodes;f && f.length && wf(a, b, f);
    } else b.push(c[d]);
  }function xf(a, b) {
    b.__shady_native_dispatchEvent(new Event("slotchange"));b = L(b);b.assignedSlot && xf(a, b.assignedSlot);
  }function ue(a) {
    a.i = a.i || [];a.g = a.g || [];a.h = a.h || {};
  }
  function Le(a) {
    if (a.i && a.i.length) {
      for (var b = a.i, c, d = 0; d < b.length; d++) {
        var e = b[d];Qe(e);var f = e.__shady_parentNode;Qe(f);f = L(f);f.ia = (f.ia || 0) + 1;f = Me(e);a.h[f] ? (c = c || {}, c[f] = !0, a.h[f].push(e)) : a.h[f] = [e];a.g.push(e);
      }if (c) for (var g in c) a.h[g] = Ne(a.h[g]);a.i = [];
    }
  }function Me(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";return a.Qa = b;
  }
  function Ne(a) {
    return a.sort(function (b, c) {
      b = uf(b);for (var d = uf(c), e = 0; e < b.length; e++) {
        c = b[e];var f = d[e];if (c !== f) return b = Jc(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
      }
    });
  }
  function xe(a, b) {
    if (a.g) {
      Le(a);var c = a.h,
          d;for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
        var g = e[f];if (Gc(b, g)) {
          e.splice(f, 1);var h = a.g.indexOf(g);0 <= h && (a.g.splice(h, 1), (h = L(g.__shady_parentNode)) && h.ia && h.ia--);f--;g = L(g);if (h = g.aa) for (var k = 0; k < h.length; k++) {
            var l = h[k],
                m = l.__shady_native_parentNode;m && m.__shady_native_removeChild(l);
          }g.aa = [];g.assignedNodes = [];h = !0;
        }
      }return h;
    }
  }function xc(a) {
    Le(a);return !(!a.g || !a.g.length);
  }
  (function (a) {
    a.__proto__ = DocumentFragment.prototype;rf(a, "__shady_");rf(a);Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, { get: function () {
          return this.host[b];
        },
        configurable: !0 });
    });
  })(Re.prototype);
  if (window.customElements && window.customElements.define && N.ya && !N.preferPerformance) {
    var yf = new Map();tf = function () {
      var a = [];yf.forEach(function (d, e) {
        a.push([e, d]);
      });yf.clear();for (var b = 0; b < a.length; b++) {
        var c = a[b][0];a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
      }
    };sf && document.addEventListener("readystatechange", function () {
      sf = !1;tf();
    }, { once: !0 });var zf = function (a, b, c) {
      var d = 0,
          e = "__isConnected" + d++;if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
        sf ? yf.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
      }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
        sf ? this.isConnected || yf.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
      };return a;
    },
        Af = window.customElements.define,
        Bf = function (a, b) {
      var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;Af.call(window.customElements, a, zf(b, c, d));b.prototype.connectedCallback = c;b.prototype.disconnectedCallback = d;
    };window.customElements.define = Bf;Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: Bf, configurable: !0 });
  }function te(a) {
    a = a.__shady_getRootNode();if (O(a)) return a;
  };function Cf(a) {
    this.node = a;
  }v = Cf.prototype;v.addEventListener = function (a, b, c) {
    return this.node.__shady_addEventListener(a, b, c);
  };v.removeEventListener = function (a, b, c) {
    return this.node.__shady_removeEventListener(a, b, c);
  };v.appendChild = function (a) {
    return this.node.__shady_appendChild(a);
  };v.insertBefore = function (a, b) {
    return this.node.__shady_insertBefore(a, b);
  };v.removeChild = function (a) {
    return this.node.__shady_removeChild(a);
  };v.replaceChild = function (a, b) {
    return this.node.__shady_replaceChild(a, b);
  };
  v.cloneNode = function (a) {
    return this.node.__shady_cloneNode(a);
  };v.getRootNode = function (a) {
    return this.node.__shady_getRootNode(a);
  };v.contains = function (a) {
    return this.node.__shady_contains(a);
  };v.dispatchEvent = function (a) {
    return this.node.__shady_dispatchEvent(a);
  };v.setAttribute = function (a, b) {
    this.node.__shady_setAttribute(a, b);
  };v.getAttribute = function (a) {
    return this.node.__shady_native_getAttribute(a);
  };v.hasAttribute = function (a) {
    return this.node.__shady_native_hasAttribute(a);
  };v.removeAttribute = function (a) {
    this.node.__shady_removeAttribute(a);
  };
  v.attachShadow = function (a) {
    return this.node.__shady_attachShadow(a);
  };v.focus = function () {
    this.node.__shady_native_focus();
  };v.blur = function () {
    this.node.__shady_blur();
  };v.importNode = function (a, b) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
  };v.getElementById = function (a) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
  };v.elementsFromPoint = function (a, b) {
    return this.node.__shady_elementsFromPoint(a, b);
  };
  v.elementFromPoint = function (a, b) {
    return this.node.__shady_elementFromPoint(a, b);
  };v.querySelector = function (a) {
    return this.node.__shady_querySelector(a);
  };v.querySelectorAll = function (a, b) {
    return this.node.__shady_querySelectorAll(a, b);
  };v.assignedNodes = function (a) {
    if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a);
  };v.append = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_append.apply(this.node, x(b));
  };
  v.prepend = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_prepend.apply(this.node, x(b));
  };v.after = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_after.apply(this.node, x(b));
  };v.before = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_before.apply(this.node, x(b));
  };v.remove = function () {
    return this.node.__shady_remove();
  };
  v.replaceWith = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_replaceWith.apply(this.node, x(b));
  };
  ea.Object.defineProperties(Cf.prototype, { activeElement: { configurable: !0, enumerable: !0, get: function () {
        if (O(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
      } }, _activeElement: { configurable: !0, enumerable: !0, get: function () {
        return this.activeElement;
      } }, host: { configurable: !0, enumerable: !0, get: function () {
        if (O(this.node)) return this.node.host;
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
      } } });function Df(a) {
    Object.defineProperty(Cf.prototype, a, { get: function () {
        return this.node["__shady_" + a];
      }, set: function (b) {
        this.node["__shady_" + a] = b;
      }, configurable: !0 });
  }Xd.forEach(function (a) {
    return Df(a);
  });Yd.forEach(function (a) {
    return Df(a);
  });var Ef = new WeakMap();function Ff(a) {
    if (O(a) || a instanceof Cf) return a;var b = Ef.get(a);b || (b = new Cf(a), Ef.set(a, b));return b;
  };if (N.ya) {
    var Gf = N.H ? function (a) {
      return a;
    } : function (a) {
      wd(a);vd(a);return a;
    },
        ShadyDOM = { inUse: N.ya, patch: Gf, isShadyRoot: O, enqueue: Rc, flush: Sc, flushInitial: function (a) {
        !a.Fa && a.Y && Ae(a);
      }, settings: N, filterMutations: Xc, observeChildren: Vc, unobserveChildren: Wc, deferConnectionCallbacks: N.deferConnectionCallbacks, preferPerformance: N.preferPerformance, handlesDynamicScoping: !0, wrap: N.J ? Ff : Gf, wrapIfNeeded: !0 === N.J ? Ff : function (a) {
        return a;
      }, Wrapper: Cf, composedPath: Fd, noPatch: N.J, patchOnDemand: N.Aa, nativeMethods: fd,
      nativeTree: gd, patchElementProto: lf };window.ShadyDOM = ShadyDOM;pd();kf("__shady_");Object.defineProperty(document, "_activeElement", bf.activeElement);P(Window.prototype, ef, "__shady_");N.J ? N.Aa && P(Element.prototype, Te) : (kf(), Wd());Rd();window.Event = Td;window.CustomEvent = Ud;window.MouseEvent = Vd;window.ShadowRoot = Re;
  };var Hf = window.Document.prototype.createElement,
      If = window.Document.prototype.createElementNS,
      Jf = window.Document.prototype.importNode,
      Kf = window.Document.prototype.prepend,
      Lf = window.Document.prototype.append,
      Mf = window.DocumentFragment.prototype.prepend,
      Nf = window.DocumentFragment.prototype.append,
      Of = window.Node.prototype.cloneNode,
      Pf = window.Node.prototype.appendChild,
      Qf = window.Node.prototype.insertBefore,
      Rf = window.Node.prototype.removeChild,
      Sf = window.Node.prototype.replaceChild,
      Tf = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
      Uf = window.Element.prototype.attachShadow,
      Vf = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
      Wf = window.Element.prototype.getAttribute,
      Xf = window.Element.prototype.setAttribute,
      Yf = window.Element.prototype.removeAttribute,
      Zf = window.Element.prototype.getAttributeNS,
      $f = window.Element.prototype.setAttributeNS,
      ag = window.Element.prototype.removeAttributeNS,
      bg = window.Element.prototype.insertAdjacentElement,
      cg = window.Element.prototype.insertAdjacentHTML,
      dg = window.Element.prototype.prepend,
      eg = window.Element.prototype.append,
      fg = window.Element.prototype.before,
      gg = window.Element.prototype.after,
      hg = window.Element.prototype.replaceWith,
      ig = window.Element.prototype.remove,
      jg = window.HTMLElement,
      kg = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
      lg = window.HTMLElement.prototype.insertAdjacentElement,
      mg = window.HTMLElement.prototype.insertAdjacentHTML;var ng = new Set();"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (a) {
    return ng.add(a);
  });function og(a) {
    var b = ng.has(a);a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return !b && a;
  }var pg = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
  function T(a) {
    var b = a.isConnected;if (void 0 !== b) return b;if (pg(a)) return !0;for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
  }function qg(a) {
    var b = a.children;if (b) return Array.prototype.slice.call(b);b = [];for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);return b;
  }
  function rg(a, b) {
    for (; b && b !== a && !b.nextSibling;) b = b.parentNode;return b && b !== a ? b.nextSibling : null;
  }
  function sg(a, b, c) {
    for (var d = a; d;) {
      if (d.nodeType === Node.ELEMENT_NODE) {
        var e = d;b(e);var f = e.localName;if ("link" === f && "import" === e.getAttribute("rel")) {
          d = e.import;void 0 === c && (c = new Set());if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) sg(d, b, c);d = rg(a, e);continue;
        } else if ("template" === f) {
          d = rg(a, e);continue;
        }if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) sg(e, b, c);
      }d = d.firstChild ? d.firstChild : rg(a, d);
    }
  };function tg() {
    var a = !(null === ug || void 0 === ug || !ug.noDocumentConstructionObserver),
        b = !(null === ug || void 0 === ug || !ug.shadyDomFastWalk);this.ca = [];this.g = [];this.W = !1;this.shadyDomFastWalk = b;this.nb = !a;
  }function vg(a, b, c, d) {
    var e = window.ShadyDOM;if (a.shadyDomFastWalk && e && e.inUse) {
      if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll) for (a = e.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) c(a[b]);
    } else sg(b, c, d);
  }function wg(a, b) {
    a.W = !0;a.ca.push(b);
  }
  function xg(a, b) {
    a.W = !0;a.g.push(b);
  }function yg(a, b) {
    a.W && vg(a, b, function (c) {
      return zg(a, c);
    });
  }function zg(a, b) {
    if (a.W && !b.__CE_patched) {
      b.__CE_patched = !0;for (var c = 0; c < a.ca.length; c++) a.ca[c](b);for (c = 0; c < a.g.length; c++) a.g[c](b);
    }
  }function Ag(a, b) {
    var c = [];vg(a, b, function (e) {
      return c.push(e);
    });for (b = 0; b < c.length; b++) {
      var d = c[b];1 === d.__CE_state ? a.connectedCallback(d) : Bg(a, d);
    }
  }
  function Cg(a, b) {
    var c = [];vg(a, b, function (e) {
      return c.push(e);
    });for (b = 0; b < c.length; b++) {
      var d = c[b];1 === d.__CE_state && a.disconnectedCallback(d);
    }
  }
  function Dg(a, b, c) {
    c = void 0 === c ? {} : c;var d = c.ob,
        e = c.upgrade || function (g) {
      return Bg(a, g);
    },
        f = [];vg(a, b, function (g) {
      a.W && zg(a, g);if ("link" === g.localName && "import" === g.getAttribute("rel")) {
        var h = g.import;h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function () {
          var k = g.import;if (!k.__CE_documentLoadHandled) {
            k.__CE_documentLoadHandled = !0;var l = new Set();d && (d.forEach(function (m) {
              return l.add(m);
            }), l.delete(k));Dg(a, k, { ob: l, upgrade: e });
          }
        });
      } else f.push(g);
    }, d);for (b = 0; b < f.length; b++) e(f[b]);
  }
  function Bg(a, b) {
    try {
      var c = b.ownerDocument,
          d = c.__CE_registry;var e = d && (c.defaultView || c.__CE_isImportDocument) ? Eg(d, b.localName) : void 0;if (e && void 0 === b.__CE_state) {
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
        }T(b) && a.connectedCallback(b);
      }
    } catch (k) {
      Fg(k);
    }
  }tg.prototype.connectedCallback = function (a) {
    var b = a.__CE_definition;if (b.connectedCallback) try {
      b.connectedCallback.call(a);
    } catch (c) {
      Fg(c);
    }
  };tg.prototype.disconnectedCallback = function (a) {
    var b = a.__CE_definition;if (b.disconnectedCallback) try {
      b.disconnectedCallback.call(a);
    } catch (c) {
      Fg(c);
    }
  };
  tg.prototype.attributeChangedCallback = function (a, b, c, d, e) {
    var f = a.__CE_definition;if (f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b)) try {
      f.attributeChangedCallback.call(a, b, c, d, e);
    } catch (g) {
      Fg(g);
    }
  };
  function Gg(a, b, c, d) {
    var e = b.__CE_registry;if (e && (null === d || "http://www.w3.org/1999/xhtml" === d) && (e = Eg(e, c))) try {
      var f = new e.constructorFunction();if (void 0 === f.__CE_state || void 0 === f.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");if ("http://www.w3.org/1999/xhtml" !== f.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");if (f.hasAttributes()) throw Error("Failed to construct '" + c + "': The constructed element must not have any attributes.");if (null !== f.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");if (null !== f.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");if (f.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");if (f.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
      return f;
    } catch (g) {
      return Fg(g), b = null === d ? Hf.call(b, c) : If.call(b, d, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, zg(a, b), b;
    }b = null === d ? Hf.call(b, c) : If.call(b, d, c);zg(a, b);return b;
  }
  function Fg(a) {
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
  };function Hg() {
    var a = this;this.I = void 0;this.Ha = new Promise(function (b) {
      a.g = b;
    });
  }Hg.prototype.resolve = function (a) {
    if (this.I) throw Error("Already resolved.");this.I = a;this.g(a);
  };function Ig(a) {
    var b = document;this.X = void 0;this.S = a;this.g = b;Dg(this.S, this.g);"loading" === this.g.readyState && (this.X = new MutationObserver(this.h.bind(this)), this.X.observe(this.g, { childList: !0, subtree: !0 }));
  }function Jg(a) {
    a.X && a.X.disconnect();
  }Ig.prototype.h = function (a) {
    var b = this.g.readyState;"interactive" !== b && "complete" !== b || Jg(this);for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) Dg(this.S, c[d]);
  };function U(a) {
    this.ka = new Map();this.la = new Map();this.Ca = new Map();this.ta = !1;this.wa = new Map();this.ja = function (b) {
      return b();
    };this.V = !1;this.ma = [];this.S = a;this.Da = a.nb ? new Ig(a) : void 0;
  }v = U.prototype;v.eb = function (a, b) {
    var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");Kg(this, a);this.ka.set(a, b);this.ma.push(a);this.V || (this.V = !0, this.ja(function () {
      return Lg(c);
    }));
  };
  v.define = function (a, b) {
    var c = this;if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");Kg(this, a);Mg(this, a, b);this.ma.push(a);this.V || (this.V = !0, this.ja(function () {
      return Lg(c);
    }));
  };function Kg(a, b) {
    if (!og(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");if (Eg(a, b)) throw Error("A custom element with name '" + (b + "' has already been defined."));if (a.ta) throw Error("A custom element is already being defined.");
  }
  function Mg(a, b, c) {
    a.ta = !0;var d;try {
      var e = c.prototype;if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");var f = function (m) {
        var q = e[m];if (void 0 !== q && !(q instanceof Function)) throw Error("The '" + m + "' callback must be a function.");return q;
      };var g = f("connectedCallback");var h = f("disconnectedCallback");var k = f("adoptedCallback");var l = (d = f("attributeChangedCallback")) && c.observedAttributes || [];
    } catch (m) {
      throw m;
    } finally {
      a.ta = !1;
    }c = { localName: b,
      constructorFunction: c, connectedCallback: g, disconnectedCallback: h, adoptedCallback: k, attributeChangedCallback: d, observedAttributes: l, constructionStack: [] };a.la.set(b, c);a.Ca.set(c.constructorFunction, c);return c;
  }v.upgrade = function (a) {
    Dg(this.S, a);
  };
  function Lg(a) {
    if (!1 !== a.V) {
      a.V = !1;for (var b = [], c = a.ma, d = new Map(), e = 0; e < c.length; e++) d.set(c[e], []);Dg(a.S, document, { upgrade: function (k) {
          if (void 0 === k.__CE_state) {
            var l = k.localName,
                m = d.get(l);m ? m.push(k) : a.la.has(l) && b.push(k);
          }
        } });for (e = 0; e < b.length; e++) Bg(a.S, b[e]);for (e = 0; e < c.length; e++) {
        for (var f = c[e], g = d.get(f), h = 0; h < g.length; h++) Bg(a.S, g[h]);(f = a.wa.get(f)) && f.resolve(void 0);
      }c.length = 0;
    }
  }v.get = function (a) {
    if (a = Eg(this, a)) return a.constructorFunction;
  };
  v.whenDefined = function (a) {
    if (!og(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));var b = this.wa.get(a);if (b) return b.Ha;b = new Hg();this.wa.set(a, b);var c = this.la.has(a) || this.ka.has(a);a = -1 === this.ma.indexOf(a);c && a && b.resolve(void 0);return b.Ha;
  };v.polyfillWrapFlushCallback = function (a) {
    this.Da && Jg(this.Da);var b = this.ja;this.ja = function (c) {
      return a(function () {
        return b(c);
      });
    };
  };
  function Eg(a, b) {
    var c = a.la.get(b);if (c) return c;if (c = a.ka.get(b)) {
      a.ka.delete(b);try {
        return Mg(a, b, c());
      } catch (d) {
        Fg(d);
      }
    }
  }window.CustomElementRegistry = U;U.prototype.define = U.prototype.define;U.prototype.upgrade = U.prototype.upgrade;U.prototype.get = U.prototype.get;U.prototype.whenDefined = U.prototype.whenDefined;U.prototype.polyfillDefineLazy = U.prototype.eb;U.prototype.polyfillWrapFlushCallback = U.prototype.polyfillWrapFlushCallback;function Ng(a, b, c) {
    function d(e) {
      return function (f) {
        for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];h = [];for (var k = [], l = 0; l < g.length; l++) {
          var m = g[l];m instanceof Element && T(m) && k.push(m);if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) h.push(m);else h.push(m);
        }e.apply(this, g);for (g = 0; g < k.length; g++) Cg(a, k[g]);if (T(this)) for (g = 0; g < h.length; g++) k = h[g], k instanceof Element && Ag(a, k);
      };
    }void 0 !== c.prepend && (b.prepend = d(c.prepend));void 0 !== c.append && (b.append = d(c.append));
  }
  ;function Og(a) {
    Document.prototype.createElement = function (b) {
      return Gg(a, this, b, null);
    };Document.prototype.importNode = function (b, c) {
      b = Jf.call(this, b, !!c);this.__CE_registry ? Dg(a, b) : yg(a, b);return b;
    };Document.prototype.createElementNS = function (b, c) {
      return Gg(a, this, c, b);
    };Ng(a, Document.prototype, { prepend: Kf, append: Lf });
  };function Pg(a) {
    function b(d) {
      return function (e) {
        for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];g = [];for (var h = [], k = 0; k < f.length; k++) {
          var l = f[k];l instanceof Element && T(l) && h.push(l);if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) g.push(l);else g.push(l);
        }d.apply(this, f);for (f = 0; f < h.length; f++) Cg(a, h[f]);if (T(this)) for (f = 0; f < g.length; f++) h = g[f], h instanceof Element && Ag(a, h);
      };
    }var c = Element.prototype;void 0 !== fg && (c.before = b(fg));void 0 !== gg && (c.after = b(gg));void 0 !== hg && (c.replaceWith = function (d) {
      for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];f = [];for (var g = [], h = 0; h < e.length; h++) {
        var k = e[h];k instanceof Element && T(k) && g.push(k);if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) f.push(k);else f.push(k);
      }h = T(this);hg.apply(this, e);for (e = 0; e < g.length; e++) Cg(a, g[e]);if (h) for (Cg(a, this), e = 0; e < f.length; e++) g = f[e], g instanceof Element && Ag(a, g);
    });void 0 !== ig && (c.remove = function () {
      var d = T(this);ig.call(this);d && Cg(a, this);
    });
  };function Qg(a) {
    function b(e, f) {
      Object.defineProperty(e, "innerHTML", { enumerable: f.enumerable, configurable: !0, get: f.get, set: function (g) {
          var h = this,
              k = void 0;T(this) && (k = [], vg(a, this, function (q) {
            q !== h && k.push(q);
          }));f.set.call(this, g);if (k) for (var l = 0; l < k.length; l++) {
            var m = k[l];1 === m.__CE_state && a.disconnectedCallback(m);
          }this.ownerDocument.__CE_registry ? Dg(a, this) : yg(a, this);return g;
        } });
    }function c(e, f) {
      e.insertAdjacentElement = function (g, h) {
        var k = T(h);g = f.call(this, g, h);k && Cg(a, h);T(g) && Ag(a, h);return g;
      };
    }
    function d(e, f) {
      function g(h, k) {
        for (var l = []; h !== k; h = h.nextSibling) l.push(h);for (k = 0; k < l.length; k++) Dg(a, l[k]);
      }e.insertAdjacentHTML = function (h, k) {
        h = h.toLowerCase();if ("beforebegin" === h) {
          var l = this.previousSibling;f.call(this, h, k);g(l || this.parentNode.firstChild, this);
        } else if ("afterbegin" === h) l = this.firstChild, f.call(this, h, k), g(this.firstChild, l);else if ("beforeend" === h) l = this.lastChild, f.call(this, h, k), g(l || this.firstChild, null);else if ("afterend" === h) l = this.nextSibling, f.call(this, h, k), g(this.nextSibling, l);else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
      };
    }Uf && (Element.prototype.attachShadow = function (e) {
      e = Uf.call(this, e);if (a.W && !e.__CE_patched) {
        e.__CE_patched = !0;for (var f = 0; f < a.ca.length; f++) a.ca[f](e);
      }return this.__CE_shadowRoot = e;
    });Vf && Vf.get ? b(Element.prototype, Vf) : kg && kg.get ? b(HTMLElement.prototype, kg) : xg(a, function (e) {
      b(e, { enumerable: !0, configurable: !0, get: function () {
          return Of.call(this, !0).innerHTML;
        }, set: function (f) {
          var g = "template" === this.localName,
              h = g ? this.content : this,
              k = If.call(document, this.namespaceURI, this.localName);for (k.innerHTML = f; 0 < h.childNodes.length;) Rf.call(h, h.childNodes[0]);for (f = g ? k.content : k; 0 < f.childNodes.length;) Pf.call(h, f.childNodes[0]);
        } });
    });Element.prototype.setAttribute = function (e, f) {
      if (1 !== this.__CE_state) return Xf.call(this, e, f);var g = Wf.call(this, e);Xf.call(this, e, f);f = Wf.call(this, e);a.attributeChangedCallback(this, e, g, f, null);
    };Element.prototype.setAttributeNS = function (e, f, g) {
      if (1 !== this.__CE_state) return $f.call(this, e, f, g);var h = Zf.call(this, e, f);$f.call(this, e, f, g);g = Zf.call(this, e, f);a.attributeChangedCallback(this, f, h, g, e);
    };Element.prototype.removeAttribute = function (e) {
      if (1 !== this.__CE_state) return Yf.call(this, e);var f = Wf.call(this, e);Yf.call(this, e);null !== f && a.attributeChangedCallback(this, e, f, null, null);
    };Element.prototype.removeAttributeNS = function (e, f) {
      if (1 !== this.__CE_state) return ag.call(this, e, f);var g = Zf.call(this, e, f);ag.call(this, e, f);var h = Zf.call(this, e, f);g !== h && a.attributeChangedCallback(this, f, g, h, e);
    };lg ? c(HTMLElement.prototype, lg) : bg && c(Element.prototype, bg);mg ? d(HTMLElement.prototype, mg) : cg && d(Element.prototype, cg);Ng(a, Element.prototype, { prepend: dg, append: eg });Pg(a);
  };var Rg = {};function Sg(a) {
    function b() {
      var c = this.constructor;var d = document.__CE_registry.Ca.get(c);if (!d) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var e = d.constructionStack;if (0 === e.length) return e = Hf.call(document, d.localName), Object.setPrototypeOf(e, c.prototype), e.__CE_state = 1, e.__CE_definition = d, zg(a, e), e;var f = e.length - 1,
          g = e[f];if (g === Rg) throw Error("Failed to construct '" + d.localName + "': This element was already constructed.");e[f] = Rg;Object.setPrototypeOf(g, c.prototype);zg(a, g);return g;
    }b.prototype = jg.prototype;Object.defineProperty(HTMLElement.prototype, "constructor", { writable: !0, configurable: !0, enumerable: !1, value: b });window.HTMLElement = b;
  };function Tg(a) {
    function b(c, d) {
      Object.defineProperty(c, "textContent", { enumerable: d.enumerable, configurable: !0, get: d.get, set: function (e) {
          if (this.nodeType === Node.TEXT_NODE) d.set.call(this, e);else {
            var f = void 0;if (this.firstChild) {
              var g = this.childNodes,
                  h = g.length;if (0 < h && T(this)) {
                f = Array(h);for (var k = 0; k < h; k++) f[k] = g[k];
              }
            }d.set.call(this, e);if (f) for (e = 0; e < f.length; e++) Cg(a, f[e]);
          }
        } });
    }Node.prototype.insertBefore = function (c, d) {
      if (c instanceof DocumentFragment) {
        var e = qg(c);c = Qf.call(this, c, d);if (T(this)) for (d = 0; d < e.length; d++) Ag(a, e[d]);return c;
      }e = c instanceof Element && T(c);d = Qf.call(this, c, d);e && Cg(a, c);T(this) && Ag(a, c);return d;
    };Node.prototype.appendChild = function (c) {
      if (c instanceof DocumentFragment) {
        var d = qg(c);c = Pf.call(this, c);if (T(this)) for (var e = 0; e < d.length; e++) Ag(a, d[e]);return c;
      }d = c instanceof Element && T(c);e = Pf.call(this, c);d && Cg(a, c);T(this) && Ag(a, c);return e;
    };Node.prototype.cloneNode = function (c) {
      c = Of.call(this, !!c);this.ownerDocument.__CE_registry ? Dg(a, c) : yg(a, c);return c;
    };Node.prototype.removeChild = function (c) {
      var d = c instanceof Element && T(c),
          e = Rf.call(this, c);d && Cg(a, c);return e;
    };Node.prototype.replaceChild = function (c, d) {
      if (c instanceof DocumentFragment) {
        var e = qg(c);c = Sf.call(this, c, d);if (T(this)) for (Cg(a, d), d = 0; d < e.length; d++) Ag(a, e[d]);return c;
      }e = c instanceof Element && T(c);var f = Sf.call(this, c, d),
          g = T(this);g && Cg(a, d);e && Cg(a, c);g && Ag(a, c);return f;
    };Tf && Tf.get ? b(Node.prototype, Tf) : wg(a, function (c) {
      b(c, { enumerable: !0, configurable: !0, get: function () {
          for (var d = [], e = this.firstChild; e; e = e.nextSibling) e.nodeType !== Node.COMMENT_NODE && d.push(e.textContent);return d.join("");
        }, set: function (d) {
          for (; this.firstChild;) Rf.call(this, this.firstChild);null != d && "" !== d && Pf.call(this, document.createTextNode(d));
        } });
    });
  };var ug = window.customElements;function Ug() {
    var a = new tg();Sg(a);Og(a);Ng(a, DocumentFragment.prototype, { prepend: Mf, append: Nf });Tg(a);Qg(a);a = new U(a);document.__CE_registry = a;Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: a });
  }ug && !ug.forcePolyfill && "function" == typeof ug.define && "function" == typeof ug.get || Ug();window.__CE_installPolyfill = Ug; /*
                                                                                                                                      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                                                                                                                      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                      Code distributed by Google as part of the polymer project is also
                                                                                                                                      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                      */
  function Vg() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function Wg(a) {
    var b = a = a.replace(Xg, "").replace(Yg, ""),
        c = new Vg();c.start = 0;c.end = b.length;for (var d = c, e = 0, f = b.length; e < f; e++) if ("{" === b[e]) {
      d.rules || (d.rules = []);var g = d,
          h = g.rules[g.rules.length - 1] || null;d = new Vg();d.start = e + 1;d.parent = g;d.previous = h;g.rules.push(d);
    } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);return Zg(c, a);
  }
  function Zg(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = $g(c), c = c.replace(ah, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = bh : c.match(ch) && (a.type = dh, a.keyframesName = a.selector.split(ah).pop()) : a.type = 0 === c.indexOf("--") ? eh : fh);if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) Zg(f, b);return a;
  }function $g(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
      b = c;for (c = 6 - b.length; c--;) b = "0" + b;return "\\" + b;
    });
  }
  function gh(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = gh(h, b, d);
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(hh, "").replace(ih, ""), b = b.replace(jh, "").replace(kh, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var fh = 1,
      dh = 7,
      bh = 4,
      eh = 1E3,
      Xg = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      Yg = /@import[^;]*;/gim,
      hh = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      ih = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      jh = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      kh = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      ch = /^@[^\s]*keyframes/,
      ah = /\s+/g;var V = !(window.ShadyDOM && window.ShadyDOM.inUse),
      lh;function mh(a) {
    lh = a && a.shimcssproperties ? !1 : V || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }var nh;window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (nh = window.ShadyCSS.cssBuild);var oh = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? lh = window.ShadyCSS.nativeCss : window.ShadyCSS ? (mh(window.ShadyCSS), window.ShadyCSS = void 0) : mh(window.WebComponents && window.WebComponents.flags);var X = lh;var ph = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      qh = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      rh = /(--[\w-]+)\s*([:,;)]|$)/gi,
      sh = /(animation\s*:)|(animation-name\s*:)/,
      th = /@media\s(.*)/,
      uh = /\{[^}]*\}/g;var vh = new Set();function wh(a, b) {
    if (!a) return "";"string" === typeof a && (a = Wg(a));b && yh(a, b);return gh(a, X);
  }function zh(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = Wg(a.textContent));return a.__cssRules || null;
  }function Ah(a) {
    return !!a.parent && a.parent.type === dh;
  }function yh(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === bh) {
        var g = a.selector.match(th);g && (window.matchMedia(g[1]).matches || (e = !0));
      }f === fh ? b(a) : c && f === dh ? c(a) : f === eh && (e = !0);if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) yh(g, b, c, d);
    }
  }
  function Bh(a, b, c, d) {
    var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;Ch(e, c, d);return e;
  }var Dh = null;function Eh(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");var b = document.head;b.insertBefore(a, (Dh ? Dh.nextSibling : null) || b.firstChild);return Dh = a;
  }function Ch(a, b, c) {
    b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);Dh ? a.compareDocumentPosition(Dh) === Node.DOCUMENT_POSITION_PRECEDING && (Dh = a) : Dh = a;
  }
  function Fh(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;return -1;
  }function Gh(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d = Fh(a, c + 3),
        e = a.substring(c + 4, d);c = a.substring(0, c);a = Gh(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }function Hh(a, b) {
    V ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  var Ih = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
    return a;
  };function Jh(a) {
    var b = a.localName,
        c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, ha: c };
  }function Kh(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = Fh(a, d);c += a.slice(d, e + 1);d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];c && b.push(c);return b;
  }
  function Lh(a) {
    if (void 0 !== nh) return nh;if (void 0 === a.__cssBuild) {
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
  function Mh(a) {
    a = void 0 === a ? "" : a;return "" !== a && X ? V ? "shadow" === a : "shady" === a : !1;
  };function Nh() {}function Oh(a, b) {
    Ph(Qh, a, function (c) {
      Rh(c, b || "");
    });
  }function Ph(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);var d;"template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;if (d) for (b = 0; b < d.length; b++) Ph(a, d[b], c);
  }
  function Rh(a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute("class");c ? d && (b = d.replace("style-scope", "").replace(b, ""), Hh(a, b)) : Hh(a, (d ? d + " " : "") + "style-scope " + b);
    }
  }function Sh(a, b, c) {
    Ph(Qh, a, function (d) {
      Rh(d, b, !0);Rh(d, c);
    });
  }function Th(a, b) {
    Ph(Qh, a, function (c) {
      Rh(c, b || "", !0);
    });
  }
  function Uh(a, b, c, d, e) {
    var f = Qh;e = void 0 === e ? "" : e;"" === e && (V || "shady" === (void 0 === d ? "" : d) ? e = wh(b, c) : (a = Jh(a), e = Vh(f, b, a.is, a.ha, c) + "\n\n"));return e.trim();
  }function Vh(a, b, c, d, e) {
    var f = Wh(c, d);c = c ? "." + c : "";return wh(b, function (g) {
      g.i || (g.selector = g.F = Xh(a, g, a.h, c, f), g.i = !0);e && e(g, c, f);
    });
  }function Wh(a, b) {
    return b ? "[is=" + a + "]" : a;
  }
  function Xh(a, b, c, d, e) {
    var f = Kh(b.selector);if (!Ah(b)) {
      b = 0;for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
    }return f.filter(function (k) {
      return !!k;
    }).join(",");
  }function Yh(a) {
    return a.replace(Zh, function (b, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
    });
  }
  function $h(a) {
    for (var b = [], c; c = a.match(ai);) {
      var d = c.index,
          e = Fh(a, d);if (-1 === e) throw Error(c.input + " selector missing ')'");c = a.slice(d, e + 1);a = a.replace(c, "\ue000");b.push(c);
    }return { Ba: a, matches: b };
  }function bi(a, b) {
    var c = a.split("\ue000");return b.reduce(function (d, e, f) {
      return d + e + c[f + 1];
    }, c[0]);
  }
  Nh.prototype.h = function (a, b, c) {
    var d = !1;a = a.trim();var e = Zh.test(a);e && (a = a.replace(Zh, function (h, k, l) {
      return ":" + k + "(" + l.replace(/\s/g, "") + ")";
    }), a = Yh(a));var f = ai.test(a);if (f) {
      var g = $h(a);a = g.Ba;g = g.matches;
    }a = a.replace(ci, ":host $1");a = a.replace(di, function (h, k, l) {
      d || (h = ei(l, k, b, c), d = d || h.stop, k = h.Ua, l = h.value);return k + l;
    });f && (a = bi(a, g));e && (a = Yh(a));return a = a.replace(fi, function (h, k, l, m) {
      return '[dir="' + l + '"] ' + k + m + ", " + k + '[dir="' + l + '"]' + m;
    });
  };
  function ei(a, b, c, d) {
    var e = a.indexOf("::slotted");0 <= a.indexOf(":host") ? a = gi(a, d) : 0 !== e && (a = c ? hi(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
      var f = !0;c && (a = a.replace(ii, function (g, h) {
        return " > " + h;
      }));
    }return { value: a, Ua: b, stop: f };
  }function hi(a, b) {
    a = a.split(/(\[.+?\])/);for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]);else {
      var e = a[d];if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
    }return c.join("");
  }
  function gi(a, b) {
    var c = a.match(ji);return (c = c && c[2].trim() || "") ? c[0].match(ki) ? a.replace(ji, function (d, e, f) {
      return b + f;
    }) : c.split(ki)[0] === b ? c : "should_not_match" : a.replace(":host", b);
  }function li(a) {
    ":root" === a.selector && (a.selector = "html");
  }Nh.prototype.i = function (a) {
    return a.match(":host") ? "" : a.match("::slotted") ? this.h(a, ":not(.style-scope)") : hi(a.trim(), ":not(.style-scope)");
  };ea.Object.defineProperties(Nh.prototype, { g: { configurable: !0, enumerable: !0, get: function () {
        return "style-scope";
      } } });
  var Zh = /:(nth[-\w]+)\(([^)]+)\)/,
      di = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      ki = /[[.:#*]/,
      ci = /^(::slotted)/,
      ji = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      ii = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      fi = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
      ai = /:(?:matches|any|-(?:webkit|moz)-any)/,
      Qh = new Nh();function mi(a, b, c, d, e) {
    this.M = a || null;this.h = b || null;this.za = c || [];this.K = null;this.cssBuild = e || "";this.ha = d || "";this.g = this.L = this.R = null;
  }function ni(a) {
    return a ? a.__styleInfo : null;
  }function oi(a, b) {
    return a.__styleInfo = b;
  }mi.prototype.i = function () {
    return this.M;
  };mi.prototype._getStyleRules = mi.prototype.i;function pi(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;return b && b.call(this, a);
  }var qi = /:host\s*>\s*/,
      ri = navigator.userAgent.match("Trident");function si() {}function ti(a) {
    var b = {},
        c = [],
        d = 0;yh(a, function (f) {
      ui(f);f.index = d++;f = f.D.cssText;for (var g; g = rh.exec(f);) {
        var h = g[1];":" !== g[2] && (b[h] = !0);
      }
    }, function (f) {
      c.push(f);
    });a.h = c;a = [];for (var e in b) a.push(e);return a;
  }
  function ui(a) {
    if (!a.D) {
      var b = {},
          c = {};vi(a, c) && (b.P = c, a.rules = null);b.cssText = a.parsedCssText.replace(uh, "").replace(ph, "");a.D = b;
    }
  }function vi(a, b) {
    var c = a.D;if (c) {
      if (c.P) return Object.assign(b, c.P), !0;
    } else {
      c = a.parsedCssText;for (var d; a = ph.exec(c);) {
        d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
      }return d;
    }
  }
  function wi(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? xi(a, b, c) : Gh(b, function (d, e, f, g) {
      if (!e) return d + g;(e = wi(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = wi(a, c[f] || f, c) || f;return d + (e || "") + g;
    }));return b && b.trim() || "";
  }
  function xi(a, b, c) {
    b = b.split(";");for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      qh.lastIndex = 0;if (f = qh.exec(e)) e = wi(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var g = e.substring(f);g = g.trim();g = wi(a, g, c) || g;e = e.substring(0, f) + g;
      }b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }return b.join(";");
  }
  function yi(a, b) {
    var c = {},
        d = [];yh(a, function (e) {
      e.D || ui(e);var f = e.F || e.parsedSelector;b && e.D.P && f && pi.call(b, f) && (vi(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
    }, null, !0);return { P: c, key: d };
  }
  function zi(a, b, c, d) {
    b.D || ui(b);if (b.D.P) {
      var e = Jh(a);a = e.is;e = e.ha;e = a ? Wh(a, e) : "html";var f = b.parsedSelector;var g = !!f.match(qi) || "html" === e && -1 < f.indexOf("html");var h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));if (g || h) c = e, h && (b.F || (b.F = Xh(Qh, b, Qh.h, a ? "." + a : "", e)), c = b.F || e), g && "html" === e && (c = b.F || b.O), d({ Ba: c, ab: h, qb: g });
    }
  }
  function Ai(a, b, c) {
    var d = {},
        e = {};yh(b, function (f) {
      zi(a, f, c, function (g) {
        pi.call(a._element || a, g.Ba) && (g.ab ? vi(f, d) : vi(f, e));
      });
    }, null, !0);return { hb: e, Za: d };
  }
  function Bi(a, b, c, d) {
    var e = Jh(b),
        f = Wh(e.is, e.ha),
        g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
        h = ni(b);e = h.M;h = h.cssBuild;var k = Ci(e, d);return Uh(b, e, function (l) {
      var m = "";l.D || ui(l);l.D.cssText && (m = xi(a, l.D.cssText, c));l.cssText = m;if (!V && !Ah(l) && l.cssText) {
        var q = m = l.cssText;null == l.Ia && (l.Ia = sh.test(m));if (l.Ia) if (null == l.pa) {
          l.pa = [];for (var H in k) q = k[H], q = q(m), m !== q && (m = q, l.pa.push(H));
        } else {
          for (H = 0; H < l.pa.length; ++H) q = k[l.pa[H]], m = q(m);q = m;
        }l.cssText = q;l.F = l.F || l.selector;m = "." + d;H = Kh(l.F);q = 0;for (var C = H.length, t = void 0; q < C && (t = H[q]); q++) H[q] = t.match(g) ? t.replace(f, m) : m + " " + t;l.selector = H.join(",");
      }
    }, h);
  }function Ci(a, b) {
    a = a.h;var c = {};if (!V && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
      var f = e,
          g = b;f.u = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");f.g = f.keyframesName + "-" + g;f.F = f.F || f.selector;f.selector = f.F.replace(f.keyframesName, f.g);c[e.keyframesName] = Di(e);
    }return c;
  }function Di(a) {
    return function (b) {
      return b.replace(a.u, a.g);
    };
  }
  function Ei(a, b) {
    var c = Fi,
        d = zh(a);a.textContent = wh(d, function (e) {
      var f = e.cssText = e.parsedCssText;e.D && e.D.cssText && (f = f.replace(hh, "").replace(ih, ""), e.cssText = xi(c, f, b));
    });
  }ea.Object.defineProperties(si.prototype, { g: { configurable: !0, enumerable: !0, get: function () {
        return "x-scope";
      } } });var Fi = new si();var Gi = {},
      Hi = window.customElements;if (Hi && !V && !oh) {
    var Ii = Hi.define;Hi.define = function (a, b, c) {
      Gi[a] || (Gi[a] = Eh(a));Ii.call(Hi, a, b, c);
    };
  };function Ji() {
    this.cache = {};
  }Ji.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];e.push({ P: b, styleElement: c, L: d });100 < e.length && e.shift();this.cache[a] = e;
  };function Ki() {}var Li = new RegExp(Qh.g + "\\s*([^\\s]*)");function Mi(a) {
    return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(Li)) ? a[1] : "";
  }function Ni(a) {
    var b = Ih(a).getRootNode();return b === a || b === a.ownerDocument ? "" : (a = b.host) ? Jh(a).is : "";
  }
  function Oi(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
              g = Mi(e);if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === Lh(e))) Th(e, g);else if (f instanceof ShadowRoot) for (f = Ni(e), f !== g && Sh(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + Qh.g + ")"), g = 0; g < e.length; g++) {
            f = e[g];
            var h = Ni(f);h && Rh(f, h);
          }
        }
      }
    }
  }
  if (!(V || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var Pi = new MutationObserver(Oi),
        Qi = function (a) {
      Pi.observe(a, { childList: !0, subtree: !0 });
    };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Qi(document);else {
      var Ri = function () {
        Qi(document.body);
      };window.HTMLImports ? window.HTMLImports.whenReady(Ri) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            Ri();document.removeEventListener("readystatechange", a);
          };document.addEventListener("readystatechange", a);
        } else Ri();
      });
    }Ki = function () {
      Oi(Pi.takeRecords());
    };
  };var Si = {};var Ti = Promise.resolve();function Ui(a) {
    if (a = Si[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function Vi(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function Wi(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a._validating || (a._validating = !0, Ti.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a._validating = !1;
    }));
  };var Xi = {},
      Yi = new Ji();function Y() {
    this.da = {};this.i = document.documentElement;var a = new Vg();a.rules = [];this.u = oi(this.i, new mi(a));this.O = !1;this.g = this.h = null;
  }v = Y.prototype;v.flush = function () {
    Ki();
  };v.Xa = function (a) {
    return zh(a);
  };v.lb = function (a) {
    return wh(a);
  };v.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);this.prepareTemplateStyles(a, b, c);
  };
  v.prepareTemplateStyles = function (a, b, c) {
    if (!a._prepared && !oh) {
      V || Gi[b] || (Gi[b] = Eh(b));a._prepared = !0;a.name = b;a.extends = c;Si[b] = a;var d = Lh(a),
          e = Mh(d);c = { is: b, extends: c };for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
        var k = g[h];if (k.hasAttribute("shady-unscoped")) {
          if (!V) {
            var l = k.textContent;if (!vh.has(l)) {
              vh.add(l);var m = document.createElement("style");m.setAttribute("shady-unscoped", "");m.textContent = l;document.head.appendChild(m);
            }k.parentNode.removeChild(k);
          }
        } else f.push(k.textContent), k.parentNode.removeChild(k);
      }f = f.join("").trim() + (Xi[b] || "");Zi(this);if (!e) {
        if (g = !d) g = qh.test(f) || ph.test(f), qh.lastIndex = 0, ph.lastIndex = 0;h = Wg(f);g && X && this.h && this.h.transformRules(h, b);a._styleAst = h;
      }g = [];X || (g = ti(a._styleAst));if (!g.length || X) h = V ? a.content : null, b = Gi[b] || null, d = Uh(c, a._styleAst, null, d, e ? f : ""), d = d.length ? Bh(d, c.is, h, b) : null, a._style = d;a.g = g;
    }
  };v.fb = function (a, b) {
    Xi[b] = a.join(" ");
  };
  v.prepareTemplateDom = function (a, b) {
    if (!oh) {
      var c = Lh(a);V || "shady" === c || a._domPrepared || (a._domPrepared = !0, Oh(a.content, b));
    }
  };function $i(a) {
    var b = Jh(a),
        c = b.is;b = b.ha;var d = Gi[c] || null,
        e = Si[c];if (e) {
      c = e._styleAst;var f = e.g;e = Lh(e);b = new mi(c, d, f, b, e);oi(a, b);return b;
    }
  }
  function aj(a) {
    !a.g && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.g = window.ShadyCSS.CustomStyleInterface, a.g.transformCallback = function (b) {
      a.Ma(b);
    }, a.g.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.g.enqueued || a.O) && a.flushCustomStyles();
      });
    });
  }function Zi(a) {
    if (!a.h && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
      a.h = window.ShadyCSS.ApplyShim;a.h.invalidCallback = Ui;var b = !0;
    } else b = !1;aj(a);return b;
  }
  v.flushCustomStyles = function () {
    if (!oh) {
      var a = Zi(this);if (this.g) {
        var b = this.g.processStyles();if ((a || this.g.enqueued) && !Mh(this.u.cssBuild)) {
          if (X) {
            if (!this.u.cssBuild) for (a = 0; a < b.length; a++) {
              var c = this.g.getStyleForCustomStyle(b[a]);if (c && X && this.h) {
                var d = zh(c);Zi(this);this.h.transformRules(d);c.textContent = wh(d);
              }
            }
          } else {
            bj(this, b);cj(this, this.i, this.u);for (a = 0; a < b.length; a++) (c = this.g.getStyleForCustomStyle(b[a])) && Ei(c, this.u.R);this.O && this.styleDocument();
          }this.g.enqueued = !1;
        }
      }
    }
  };
  function bj(a, b) {
    b = b.map(function (c) {
      return a.g.getStyleForCustomStyle(c);
    }).filter(function (c) {
      return !!c;
    });b.sort(function (c, d) {
      c = d.compareDocumentPosition(c);return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
    });a.u.M.rules = b.map(function (c) {
      return zh(c);
    });
  }
  v.styleElement = function (a, b) {
    if (oh) {
      if (b) {
        ni(a) || oi(a, new mi(null));var c = ni(a);c.K = c.K || {};Object.assign(c.K, b);dj(this, a, c);
      }
    } else if (c = ni(a) || $i(a)) if (a !== this.i && (this.O = !0), b && (c.K = c.K || {}, Object.assign(c.K, b)), X) dj(this, a, c);else if (this.flush(), cj(this, a, c), c.za && c.za.length) {
      b = Jh(a).is;var d;a: {
        if (d = Yi.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
          var f = d[e];b: {
            var g = c.za;for (var h = 0; h < g.length; h++) {
              var k = g[h];if (f.P[k] !== c.R[k]) {
                g = !1;break b;
              }
            }g = !0;
          }if (g) {
            d = f;break a;
          }
        }d = void 0;
      }g = d ? d.styleElement : null;e = c.L;(f = d && d.L) || (f = this.da[b] = (this.da[b] || 0) + 1, f = b + "-" + f);c.L = f;f = c.L;h = Fi;h = g ? g.textContent || "" : Bi(h, a, c.R, f);k = ni(a);var l = k.g;l && !V && l !== g && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));V ? k.g ? (k.g.textContent = h, g = k.g) : h && (g = Bh(h, f, a.shadowRoot, k.h)) : g ? g.parentNode || (ri && -1 < h.indexOf("@media") && (g.textContent = h), Ch(g, null, k.h)) : h && (g = Bh(h, f, null, k.h));g && (g._useCount = g._useCount || 0, k.g != g && g._useCount++, k.g = g);f = g;V || (g = c.L, k = h = a.getAttribute("class") || "", e && (k = h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), k += (k ? " " : "") + "x-scope " + g, h !== k && Hh(a, k));d || Yi.store(b, c.R, f, c.L);
    }
  };
  function dj(a, b, c) {
    var d = Jh(b).is;if (c.K) {
      var e = c.K,
          f;for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
    }e = Si[d];if (!(!e && b !== a.i || e && "" !== Lh(e)) && e && e._style && !Vi(e)) {
      if (Vi(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) Zi(a), a.h && a.h.transformRules(e._styleAst, d), e._style.textContent = Uh(b, c.M), Wi(e);V && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Uh(b, c.M));c.M = e._styleAst;
    }
  }
  function ej(a, b) {
    return (b = Ih(b).getRootNode().host) ? ni(b) || $i(b) ? b : ej(a, b) : a.i;
  }function cj(a, b, c) {
    var d = ej(a, b),
        e = ni(d),
        f = e.R;d === a.i || f || (cj(a, d, e), f = e.R);a = Object.create(f || null);d = Ai(b, c.M, c.cssBuild);b = yi(e.M, b).P;Object.assign(a, d.Za, b, d.hb);b = c.K;for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;g = Fi;b = Object.getOwnPropertyNames(a);for (e = 0; e < b.length; e++) d = b[e], a[d] = wi(g, a[d], a);c.R = a;
  }v.styleDocument = function (a) {
    this.styleSubtree(this.i, a);
  };
  v.styleSubtree = function (a, b) {
    var c = Ih(a),
        d = c.shadowRoot,
        e = a === this.i;(d || e) && this.styleElement(a, b);if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
      return Ih(f).shadowRoot;
    }), b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  v.Ma = function (a) {
    var b = this,
        c = Lh(a);c !== this.u.cssBuild && (this.u.cssBuild = c);if (!Mh(c)) {
      var d = zh(a);yh(d, function (e) {
        if (V) li(e);else {
          var f = Qh;e.selector = e.parsedSelector;li(e);e.selector = e.F = Xh(f, e, f.i, void 0, void 0);
        }X && "" === c && (Zi(b), b.h && b.h.transformRule(e));
      });X ? a.textContent = wh(d) : this.u.M.rules.push(d);
    }
  };v.getComputedStyleValue = function (a, b) {
    var c;X || (c = (ni(a) || ni(ej(this, a))).R[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  v.kb = function (a, b) {
    var c = Ih(a).getRootNode();b = b ? ("string" === typeof b ? b : String(b)).split(/\s/) : [];c = c.host && c.host.localName;if (!c) {
      var d = a.getAttribute("class");if (d) {
        d = d.split(/\s/);for (var e = 0; e < d.length; e++) if (d[e] === Qh.g) {
          c = d[e + 1];break;
        }
      }
    }c && b.push(Qh.g, c);X || (c = ni(a)) && c.L && b.push(Fi.g, c.L);Hh(a, b.join(" "));
  };v.Ta = function (a) {
    return ni(a);
  };v.jb = function (a, b) {
    Rh(a, b);
  };v.mb = function (a, b) {
    Rh(a, b, !0);
  };v.ib = function (a) {
    return Ni(a);
  };v.Va = function (a) {
    return Mi(a);
  };Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;Y.prototype.styleElement = Y.prototype.styleElement;Y.prototype.styleDocument = Y.prototype.styleDocument;Y.prototype.styleSubtree = Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;Y.prototype.setElementClass = Y.prototype.kb;Y.prototype._styleInfoForNode = Y.prototype.Ta;Y.prototype.transformCustomStyleForDocument = Y.prototype.Ma;Y.prototype.getStyleAst = Y.prototype.Xa;Y.prototype.styleAstToString = Y.prototype.lb;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;Y.prototype.scopeNode = Y.prototype.jb;Y.prototype.unscopeNode = Y.prototype.mb;Y.prototype.scopeForNode = Y.prototype.ib;Y.prototype.currentScopeForNode = Y.prototype.Va;Y.prototype.prepareAdoptedCssText = Y.prototype.fb;Object.defineProperties(Y.prototype, { nativeShadow: { get: function () {
        return V;
      } }, nativeCss: { get: function () {
        return X;
      } } });var Z = new Y(),
      fj,
      gj;window.ShadyCSS && (fj = window.ShadyCSS.ApplyShim, gj = window.ShadyCSS.CustomStyleInterface);
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
    }, nativeCss: X, nativeShadow: V, cssBuild: nh, disableRuntime: oh };fj && (window.ShadyCSS.ApplyShim = fj);gj && (window.ShadyCSS.CustomStyleInterface = gj);(function (a) {
    function b(t) {
      "" == t && (f.call(this), this.m = !0);return t.toLowerCase();
    }function c(t) {
      var F = t.charCodeAt(0);return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 63, 96].indexOf(F) ? t : encodeURIComponent(t);
    }function d(t) {
      var F = t.charCodeAt(0);return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 96].indexOf(F) ? t : encodeURIComponent(t);
    }function e(t, F, E) {
      function M(fa) {
        sa.push(fa);
      }var y = F || "scheme start",
          W = 0,
          w = "",
          ta = !1,
          ha = !1,
          sa = [];a: for (; (void 0 != t[W - 1] || 0 == W) && !this.m;) {
        var n = t[W];switch (y) {case "scheme start":
            if (n && q.test(n)) w += n.toLowerCase(), y = "scheme";else if (F) {
              M("Invalid scheme.");break a;
            } else {
              w = "";y = "no scheme";continue;
            }break;case "scheme":
            if (n && H.test(n)) w += n.toLowerCase();else if (":" == n) {
              this.l = w;w = "";if (F) break a;void 0 !== l[this.l] && (this.G = !0);y = "file" == this.l ? "relative" : this.G && E && E.l == this.l ? "relative or authority" : this.G ? "authority first slash" : "scheme data";
            } else if (F) {
              void 0 != n && M("Code point not allowed in scheme: " + n);break a;
            } else {
              w = "";W = 0;y = "no scheme";continue;
            }break;case "scheme data":
            "?" == n ? (this.A = "?", y = "query") : "#" == n ? (this.C = "#", y = "fragment") : void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.va += c(n));break;case "no scheme":
            if (E && void 0 !== l[E.l]) {
              y = "relative";continue;
            } else M("Missing scheme."), f.call(this), this.m = !0;break;case "relative or authority":
            if ("/" == n && "/" == t[W + 1]) y = "authority ignore slashes";else {
              M("Expected /, got: " + n);y = "relative";continue;
            }break;case "relative":
            this.G = !0;"file" != this.l && (this.l = E.l);if (void 0 == n) {
              this.o = E.o;this.v = E.v;this.s = E.s.slice();this.A = E.A;this.B = E.B;this.j = E.j;
              break a;
            } else if ("/" == n || "\\" == n) "\\" == n && M("\\ is an invalid code point."), y = "relative slash";else if ("?" == n) this.o = E.o, this.v = E.v, this.s = E.s.slice(), this.A = "?", this.B = E.B, this.j = E.j, y = "query";else if ("#" == n) this.o = E.o, this.v = E.v, this.s = E.s.slice(), this.A = E.A, this.C = "#", this.B = E.B, this.j = E.j, y = "fragment";else {
              y = t[W + 1];var J = t[W + 2];if ("file" != this.l || !q.test(n) || ":" != y && "|" != y || void 0 != J && "/" != J && "\\" != J && "?" != J && "#" != J) this.o = E.o, this.v = E.v, this.B = E.B, this.j = E.j, this.s = E.s.slice(), this.s.pop();y = "relative path";continue;
            }break;case "relative slash":
            if ("/" == n || "\\" == n) "\\" == n && M("\\ is an invalid code point."), y = "file" == this.l ? "file host" : "authority ignore slashes";else {
              "file" != this.l && (this.o = E.o, this.v = E.v, this.B = E.B, this.j = E.j);y = "relative path";continue;
            }break;case "authority first slash":
            if ("/" == n) y = "authority second slash";else {
              M("Expected '/', got: " + n);y = "authority ignore slashes";continue;
            }break;case "authority second slash":
            y = "authority ignore slashes";if ("/" != n) {
              M("Expected '/', got: " + n);continue;
            }break;case "authority ignore slashes":
            if ("/" != n && "\\" != n) {
              y = "authority";continue;
            } else M("Expected authority, got: " + n);break;case "authority":
            if ("@" == n) {
              ta && (M("@ already seen."), w += "%40");ta = !0;for (n = 0; n < w.length; n++) J = w[n], "\t" == J || "\n" == J || "\r" == J ? M("Invalid whitespace in authority.") : ":" == J && null === this.j ? this.j = "" : (J = c(J), null !== this.j ? this.j += J : this.B += J);w = "";
            } else if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
              W -= w.length;w = "";y = "host";continue;
            } else w += n;break;case "file host":
            if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
              2 != w.length || !q.test(w[0]) || ":" != w[1] && "|" != w[1] ? (0 != w.length && (this.o = b.call(this, w), w = ""), y = "relative path start") : y = "relative path";continue;
            } else "\t" == n || "\n" == n || "\r" == n ? M("Invalid whitespace in file host.") : w += n;break;case "host":case "hostname":
            if (":" != n || ha) {
              if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                this.o = b.call(this, w);w = "";y = "relative path start";if (F) break a;continue;
              } else "\t" != n && "\n" != n && "\r" != n ? ("[" == n ? ha = !0 : "]" == n && (ha = !1), w += n) : M("Invalid code point in host/hostname: " + n);
            } else if (this.o = b.call(this, w), w = "", y = "port", "hostname" == F) break a;break;case "port":
            if (/[0-9]/.test(n)) w += n;else if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n || F) {
              "" != w && (w = parseInt(w, 10), w != l[this.l] && (this.v = w + ""), w = "");if (F) break a;y = "relative path start";continue;
            } else "\t" == n || "\n" == n || "\r" == n ? M("Invalid code point in port: " + n) : (f.call(this), this.m = !0);break;case "relative path start":
            "\\" == n && M("'\\' not allowed in path.");y = "relative path";if ("/" != n && "\\" != n) continue;break;case "relative path":
            if (void 0 != n && "/" != n && "\\" != n && (F || "?" != n && "#" != n)) "\t" != n && "\n" != n && "\r" != n && (w += c(n));else {
              "\\" == n && M("\\ not allowed in relative path.");if (J = m[w.toLowerCase()]) w = J;".." == w ? (this.s.pop(), "/" != n && "\\" != n && this.s.push("")) : "." == w && "/" != n && "\\" != n ? this.s.push("") : "." != w && ("file" == this.l && 0 == this.s.length && 2 == w.length && q.test(w[0]) && "|" == w[1] && (w = w[0] + ":"), this.s.push(w));w = "";"?" == n ? (this.A = "?", y = "query") : "#" == n && (this.C = "#", y = "fragment");
            }break;case "query":
            F || "#" != n ? void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.A += d(n)) : (this.C = "#", y = "fragment");break;case "fragment":
            void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.C += n);}W++;
      }
    }function f() {
      this.B = this.va = this.l = "";this.j = null;this.v = this.o = "";this.s = [];this.C = this.A = "";this.G = this.m = !1;
    }function g(t, F) {
      void 0 === F || F instanceof g || (F = new g(String(F)));this.g = t;f.call(this);e.call(this, this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), null, F);
    }var h = !1;try {
      var k = new URL("b", "http://a");k.pathname = "c%20d";h = "http://a/c%20d" === k.href;
    } catch (t) {}if (!h) {
      var l = Object.create(null);
      l.ftp = 21;l.file = 0;l.gopher = 70;l.http = 80;l.https = 443;l.ws = 80;l.wss = 443;var m = Object.create(null);m["%2e"] = ".";m[".%2e"] = "..";m["%2e."] = "..";m["%2e%2e"] = "..";var q = /[a-zA-Z]/,
          H = /[a-zA-Z0-9+\-.]/;g.prototype = { toString: function () {
          return this.href;
        }, get href() {
          if (this.m) return this.g;var t = "";if ("" != this.B || null != this.j) t = this.B + (null != this.j ? ":" + this.j : "") + "@";return this.protocol + (this.G ? "//" + t + this.host : "") + this.pathname + this.A + this.C;
        }, set href(t) {
          f.call(this);e.call(this, t);
        }, get protocol() {
          return this.l + ":";
        }, set protocol(t) {
          this.m || e.call(this, t + ":", "scheme start");
        }, get host() {
          return this.m ? "" : this.v ? this.o + ":" + this.v : this.o;
        }, set host(t) {
          !this.m && this.G && e.call(this, t, "host");
        }, get hostname() {
          return this.o;
        }, set hostname(t) {
          !this.m && this.G && e.call(this, t, "hostname");
        }, get port() {
          return this.v;
        }, set port(t) {
          !this.m && this.G && e.call(this, t, "port");
        }, get pathname() {
          return this.m ? "" : this.G ? "/" + this.s.join("/") : this.va;
        }, set pathname(t) {
          !this.m && this.G && (this.s = [], e.call(this, t, "relative path start"));
        }, get search() {
          return this.m || !this.A || "?" == this.A ? "" : this.A;
        }, set search(t) {
          !this.m && this.G && (this.A = "?", "?" == t[0] && (t = t.slice(1)), e.call(this, t, "query"));
        }, get hash() {
          return this.m || !this.C || "#" == this.C ? "" : this.C;
        }, set hash(t) {
          this.m || (t ? (this.C = "#", "#" == t[0] && (t = t.slice(1)), e.call(this, t, "fragment")) : this.C = "");
        }, get origin() {
          var t;if (this.m || !this.l) return "";switch (this.l) {case "data":case "file":case "javascript":case "mailto":
              return "null";}return (t = this.host) ? this.l + "://" + t : "";
        } };var C = a.URL;C && (g.createObjectURL = function (t) {
        return C.createObjectURL.apply(C, arguments);
      }, g.revokeObjectURL = function (t) {
        C.revokeObjectURL(t);
      });a.URL = g;
    }
  })(window);
}).call(this);

//# sourceMappingURL=webcomponents-sd-ce-pf.js.map