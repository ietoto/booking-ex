var _i_ = this._i_ || function () {},
  _r_ =
    this._r_ ||
    function (e) {
      return e;
    };
booking.env.enable_scripts_tracking &&
  (booking.env.scripts_tracking.searchbox = { loaded: !0, run: !1 }),
  B.define("caret", function () {
    _i_("4ab:50a5d6aa");
    return _r_({
      getPosition: function (e) {
        var t;
        if ((_i_("4ab:1399bc4f"), !e)) return _r_();
        if (document.selection)
          return (
            e.focus(),
            (t = document.selection.createRange()).moveStart(
              "character",
              -e.value.length
            ),
            _r_(t.text.length)
          );
        if (e.selectionStart || 0 === e.selectionStart)
          return _r_(e.selectionStart);
        return _r_(0);
      },
      setPosition: function (e, t) {
        var i;
        if ((_i_("4ab:536e7091"), !e)) return _r_();
        document.selection
          ? (e.focus(),
            (i = document.selection.createRange()).moveStart(
              "character",
              -e.value.length
            ),
            i.moveStart("character", t),
            i.moveEnd("character", 0),
            i.select())
          : (e.selectionStart || 0 === e.selectionStart) &&
            ((e.selectionStart = t), (e.selectionEnd = t), e.focus()),
          _r_();
      },
      setSelection: function (e, t, i) {
        var n;
        if ((_i_("4ab:b3966198"), !e)) return _r_();
        document.selection
          ? (e.focus(),
            (n = document.selection.createRange()).moveStart(
              "character",
              -e.value.length
            ),
            n.moveStart("character", t),
            n.moveEnd("character", i - t),
            n.select())
          : (e.selectionStart || 0 === e.selectionStart) &&
            ((e.selectionStart = t), (e.selectionEnd = i), e.focus()),
          _r_();
      },
      getSelectionLength: function (e) {
        var t;
        if ((_i_("4ab:735a2def"), !e)) return _r_();
        if (document.selection)
          return (
            e.focus(),
            (t = document.selection.createRange()),
            _r_(t.text.length || 0)
          );
        if (e.selectionStart || 0 === e.selectionStart)
          return _r_(e.selectionEnd - e.selectionStart);
        return _r_(0);
      },
    });
  }),
  B.define("click-out", function (e, t, i) {
    "use strict";
    _i_("4ab:fff452bb");
    var s = {},
      n = !1;
    function a(e) {
      _i_("4ab:ad210c4a");
      var t,
        i = Object.keys(s),
        n = {},
        a = !1;
      if (i.length)
        for (
          t = e.target || e.srcElement;
          t &&
          (i.forEach(function (e) {
            _i_("4ab:efe0fbc1"),
              s[e].element === t && ((n[e] = !0), 1 == i.length && (a = !0)),
              _r_();
          }),
          !a);

        )
          t = t.parentNode;
      i.forEach(function (e) {
        _i_("4ab:bf144444"),
          !n[e] && s[e] && (s[e].callback.call(!1), r(e)),
          _r_();
      }),
        _r_();
    }
    function r(e) {
      _i_("4ab:e16b90f5"), s[e] && delete s[e], _r_();
    }
    (t.addMonitor = function (e, t) {
      _i_("4ab:4eea37e7"),
        _i_("4ab:c17566ca"),
        n ||
          ((n = !0),
          document.documentElement.addEventListener
            ? document.documentElement.addEventListener("click", a)
            : document.documentElement.attachEvent &&
              document.documentElement.attachEvent("onclick", a)),
        _r_();
      var i = Math.random();
      return (
        "string" == typeof e.jquery && (e = e[0]),
        setTimeout(function () {
          _i_("4ab:9952e084"), (s[i] = { element: e, callback: t }), _r_();
        }, 4),
        _r_(i)
      );
    }),
      (t.removeMonitor = r),
      (t.forceClickOut = function () {
        _i_("4ab:d4e2fa88"),
          Object.keys(s).forEach(function (e) {
            _i_("4ab:ffe354e3"), s[e].callback.call(!1), r(e), _r_();
          }),
          _r_();
      }),
      _r_();
  }),
  B.define("deny-focus", function (e, t, i) {
    "use strict";
    return (
      _i_("4ab:c105dfa2"),
      _r_({
        _focusAttributes: { tabindex: -1, "aria-hidden": !0 },
        _denyFocusOn: [],
        _get: function (t) {
          return (
            _i_("4ab:49251ead"),
            _r_(
              this._denyFocusOn.filter(function (e) {
                if ((_i_("4ab:5bd98b23"), e.el === t)) return _r_(!0);
                return _r_(!1);
              })[0]
            )
          );
        },
        _add: function (e) {
          _i_("4ab:3560760b");
          var t = this._getFocusableElements(e),
            i = {
              el: e,
              focusable: t,
              focusableOriginalAttributes: this._buildAttributesObject(t),
            };
          return this._denyFocusOn.push(i), _r_(i);
        },
        _update: function (e) {
          _i_("4ab:3e71e8fe");
          var t = this._getFocusableElements(e.el);
          (e.focusable = t),
            (e.focusableOriginalAttributes = this._buildAttributesObject(t)),
            _r_();
        },
        _buildAttributesObject: function (e) {
          return (
            _i_("4ab:9f219c08"),
            _r_(
              e.map(
                function (t) {
                  _i_("4ab:48092da2");
                  var i = {};
                  return (
                    Object.keys(this._focusAttributes).forEach(function (e) {
                      _i_("4ab:42b3beef"), (i[e] = t.getAttribute(e)), _r_();
                    }),
                    _r_(i)
                  );
                }.bind(this)
              )
            )
          );
        },
        _getFocusableElements: function (e) {
          _i_("4ab:5fdb8c82");
          var t = e.querySelectorAll(
            "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"
          );
          return _r_(Array.prototype.slice.call(t));
        },
        deny: function (e) {
          if ((_i_("4ab:71875e1f"), !e || !e instanceof Node))
            return (
              console.log(
                "Please provide a valid DOMElement to deny focus for"
              ),
              _r_(!1)
            );
          var t = this._get(e);
          t ? this._update(t) : (t = this._add(e)),
            t.focusable.forEach(
              function (t) {
                _i_("4ab:ead5a0b7"),
                  Object.keys(this._focusAttributes).forEach(
                    function (e) {
                      _i_("4ab:f3a3f028"),
                        t.setAttribute(e, this._focusAttributes[e]),
                        _r_();
                    }.bind(this)
                  ),
                  _r_();
              }.bind(this)
            ),
            _r_();
        },
        allow: function (e) {
          if ((_i_("4ab:1c780576"), !e || !e instanceof Node))
            return (
              console.log(
                "Please provide a valid DOMElement to deny focus for"
              ),
              _r_(!1)
            );
          var t = this._get(e);
          return t
            ? (t.focusable.forEach(function (i, e) {
                _i_("4ab:79cd96c7");
                var n = t.focusableOriginalAttributes[e];
                Object.keys(n).forEach(function (e) {
                  _i_("4ab:6f949722");
                  var t = n[e];
                  null == t ? i.removeAttribute(e) : i.setAttribute(e, n[e]),
                    _r_();
                }),
                  _r_();
              }),
              _r_(!0))
            : _r_(!1);
        },
      })
    );
  }),
  B.define("keycodes", [], function () {
    "use strict";
    _i_("4ab:80bc84b5");
    var n = {
      backspace: 8,
      tab: 9,
      enter: 13,
      shift: 16,
      control: 17,
      alt: 18,
      escape: 27,
      space: 32,
      pageUp: 33,
      pageDown: 34,
      end: 35,
      home: 36,
      leftArrow: 37,
      upArrow: 38,
      rightArrow: 39,
      downArrow: 40,
      delete: 46,
      navigation: [9].concat(e(33, 40)),
      deletion: [8, 46],
      arrow: e(37, 40),
      number: e(48, 57).concat(e(96, 105)),
      backquoteNumeric: 192,
      alphabetic: e(65, 90),
      modifier: e(16, 18),
    };
    function e(e, t) {
      _i_("4ab:83a52ba4");
      for (var i = [], n = 0; n <= t - e; n++) i.push(e + n);
      return _r_(i);
    }
    function a(e, t) {
      if ((_i_("4ab:768b926a"), Array.isArray(n[e]) && -1 !== n[e].indexOf(t)))
        return _r_(!0);
      if (n[e] === t) return _r_(!0);
      return _r_(!1);
    }
    function i(e, t) {
      return _i_("4ab:bf671d22"), _r_(a(t, e));
    }
    n = (function (e) {
      _i_("4ab:0fefaabc");
      var i = 65;
      return _r_(
        "abcdefghijklmnopqrstuvwxyz".split("").reduce(function (e, t) {
          return _i_("4ab:d3ccc5bc"), (e[t] = i++), _r_(e);
        }, e)
      );
    })(n);
    var s = {
      getTypes: function (t) {
        _i_("4ab:ad5c6319");
        var i = [];
        return (
          Object.keys(n).forEach(function (e) {
            _i_("4ab:8fc15c2d"), a(e, t) && i.push(e), _r_();
          }),
          _r_(i)
        );
      },
      isKeycodeType: i,
    };
    return (
      Object.keys(n).forEach(function (t) {
        var e;
        _i_("4ab:484ba84e"),
          (s[
            "is" +
              ((e = t),
              _i_("4ab:2984a907"),
              _r_(e.slice(0, 1).toUpperCase() + e.slice(1)))
          ] = function (e) {
            return _i_("4ab:4209f82c"), _r_(i(e, t));
          }),
          _r_();
      }),
      _r_(s)
    );
  }),
  B.define("read-data-options", function (e, t, i) {
    _i_("4ab:b2e7a21d"),
      (i.exports = function (a, s) {
        _i_("4ab:9b133c1b");
        var r = {};
        return (
          a.jquery && (a = a[0]),
          Object.keys(s).forEach(function (e) {
            _i_("4ab:dcce8877");
            var t = s[e],
              i = "data-" + e,
              n = null;
            if (
              ("function" == typeof t && (t = { type: t }),
              "string" == typeof t.name && (i = "data-" + t.name),
              !a.attributes[i])
            ) {
              if (t.hasOwnProperty("defaultValue")) r[e] = t.defaultValue;
              else if (t.hasOwnProperty("required"))
                throw new Error(
                  "read-data-options: missing required " + i + " attribute"
                );
              return _r_();
            }
            n = a.getAttribute(i);
            if (t.type === Boolean) n = !/^0|false|no|off$/.test(n);
            else if (t.type === String) n = n || t.defaultValue;
            else {
              if (t.type !== Number)
                throw new Error("data-options: Invalid option type for " + e);
              (n = parseFloat(n, 10)), isNaN(n) && (n = t.defaultValue);
            }
            (r[e] = n), _r_();
          }),
          _r_(r)
        );
      }),
      _r_();
  }),
  B.define("calendar-base", function (e, t, i) {
    function g(e) {
      _i_("4ab:eadb8bc9"),
        (e = e || {}),
        (this.startDate = e.startDate),
        (this.endDate = e.endDate),
        (this.siblingMonths = e.siblingMonths),
        (this.weekNumbers = e.weekNumbers),
        (this.weekStart = e.weekStart),
        void 0 === this.weekStart && (this.weekStart = 0),
        _r_();
    }
    _i_("4ab:75a1be19"),
      (g.prototype.getCalendar = function (e, t) {
        _i_("4ab:af5a1508");
        var i = new Date(Date.UTC(e, t, 1, 0, 0, 0, 0));
        (e = i.getUTCFullYear()), (t = i.getUTCMonth());
        for (
          var n,
            a,
            s,
            r,
            o,
            _ = [],
            l = i.getUTCDay(),
            d = -(7 - this.weekStart + l) % 7,
            h = g.daysInMonth(e, t),
            c = (h - d) % 7,
            u = g.daysInMonth(e, t - 1),
            f = d,
            p = h - f + (0 != c ? 7 - c : 0) + d,
            b = null;
          f < p;

        )
          (n = ((f < 1 ? 7 + f : f) + l) % 7),
            (a = f + 1) < 1 || h < a
              ? this.siblingMonths
                ? (a < 1
                    ? ((o = e), (r = t - 1) < 0 && ((r = 11), o--), (a = u + a))
                    : h < a &&
                      ((o = e),
                      11 < (r = t + 1) && ((r = 0), o++),
                      (a = f - h + 1)),
                  (s = {
                    day: a,
                    weekDay: n,
                    month: r,
                    year: o,
                    siblingMonth: !0,
                  }))
                : (s = !1)
              : (s = { day: a, weekDay: n, month: t, year: e }),
            s &&
              this.weekNumbers &&
              (null === b
                ? (b = g.calculateWeekNumber(s))
                : 1 == n && 52 == b
                ? (b = 1)
                : 1 == n && b++,
              (s.weekNumber = b)),
            s && this.startDate && (s.selected = this.isDateSelected(s)),
            _.push(s),
            f++;
        return _r_(_);
      }),
      (g.prototype.isDateSelected = function (e) {
        if (
          (_i_("4ab:15796b9b"),
          e.year == this.startDate.year &&
            e.month == this.startDate.month &&
            e.day == this.startDate.day)
        )
          return _r_(!0);
        if (this.endDate) {
          if (
            e.year == this.startDate.year &&
            e.month == this.startDate.month &&
            e.day < this.startDate.day
          )
            return _r_(!1);
          if (
            e.year == this.endDate.year &&
            e.month == this.endDate.month &&
            e.day > this.endDate.day
          )
            return _r_(!1);
          if (e.year == this.startDate.year && e.month < this.startDate.month)
            return _r_(!1);
          if (e.year == this.endDate.year && e.month > this.endDate.month)
            return _r_(!1);
          if (e.year < this.startDate.year) return _r_(!1);
          if (e.year > this.endDate.year) return _r_(!1);
          return _r_(!0);
        }
        return _r_(!1);
      }),
      (g.prototype.setStartDate = function (e) {
        _i_("4ab:b46bd485"), (this.startDate = e), _r_();
      }),
      (g.prototype.setEndDate = function (e) {
        _i_("4ab:5e5b3f69"), (this.endDate = e), _r_();
      }),
      (g.prototype.setDate = g.prototype.setStartDate),
      (g.diff = function (e, t) {
        return (
          _i_("4ab:bd7e1bb7"),
          (e = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0))),
          (t = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0))),
          _r_(Math.ceil((e.getTime() - t.getTime()) / 864e5))
        );
      }),
      (g.interval = function (e, t) {
        return _i_("4ab:5f59974d"), _r_(Math.abs(g.diff(e, t)) + 1);
      }),
      (g.compare = function (e, t) {
        if (
          (_i_("4ab:93d77961"),
          "object" != typeof e ||
            "object" != typeof t ||
            null === e ||
            null === t)
        )
          throw new TypeError("dates must be objects");
        if (e.year < t.year) return _r_(-1);
        if (e.year > t.year) return _r_(1);
        if (e.month < t.month) return _r_(-1);
        if (e.month > t.month) return _r_(1);
        if (e.day < t.day) return _r_(-1);
        if (e.day > t.day) return _r_(1);
        return _r_(0);
      }),
      (g.daysInMonth = function (e, t) {
        return _i_("4ab:d478bc66"), _r_(new Date(e, t + 1, 0).getDate());
      }),
      (g.isLeapYear = function (e) {
        return (
          _i_("4ab:7e93f3c0"), _r_((e % 4 == 0 && e % 100 != 0) || e % 400 == 0)
        );
      }),
      (g.calculateWeekNumber = function (e) {
        _i_("4ab:7a7ad21e");
        var t = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0)),
          i = new Date(t.valueOf()),
          n = (t.getUTCDay() + 6) % 7;
        i.setUTCDate(i.getUTCDate() - n + 3);
        var a = i.valueOf();
        return (
          i.setUTCMonth(0, 1),
          4 != i.getUTCDay() &&
            i.setUTCMonth(0, 1 + ((4 - i.getUTCDay() + 7) % 7)),
          _r_(1 + Math.ceil((a - i) / 6048e5))
        );
      }),
      (i.exports = { Calendar: g }),
      _r_();
  }),
  B.define("morphdom", function (e, t, i) {
    _i_("4ab:e2c86c4b"),
      (function (e) {
        if ((_i_("4ab:ab944764"), "object" == typeof t && void 0 !== i))
          i.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
          ("undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : this
          ).morphdom = e();
        }
        _r_();
      })(function () {
        var e, F;
        _i_("4ab:6ef9ef9c"), (e = { exports: {} });
        var N,
          t =
            "undefined" != typeof document
              ? document.body || document.createElement("div")
              : {},
          j = "http://www.w3.org/1999/xhtml";
        function T(e) {
          for (var t in (_i_("4ab:ace7a10f"), e))
            if (e.hasOwnProperty(t)) return _r_(!1);
          return _r_(!0);
        }
        N = t.hasAttributeNS
          ? function (e, t, i) {
              return _i_("4ab:eade7059"), _r_(e.hasAttributeNS(t, i));
            }
          : t.hasAttribute
          ? function (e, t, i) {
              return _i_("4ab:48b626c7"), _r_(e.hasAttribute(i));
            }
          : function (e, t, i) {
              return _i_("4ab:b1b897cf"), _r_(!!e.getAttributeNode(i));
            };
        var I = {
          OPTION: function (e, t) {
            _i_("4ab:766a26cf"),
              (e.selected = t.selected),
              e.selected
                ? e.setAttribute("selected", "")
                : e.removeAttribute("selected", ""),
              _r_();
          },
          INPUT: function (e, t) {
            _i_("4ab:8ce9f1cf"),
              (e.checked = t.checked),
              e.checked
                ? e.setAttribute("checked", "")
                : e.removeAttribute("checked"),
              e.value !== t.value && (e.value = t.value),
              N(t, null, "value") || e.removeAttribute("value"),
              (e.disabled = t.disabled),
              e.disabled
                ? e.setAttribute("disabled", "")
                : e.removeAttribute("disabled"),
              _r_();
          },
          TEXTAREA: function (e, t) {
            _i_("4ab:fafa0a75");
            var i = t.value;
            e.value !== i && (e.value = i),
              e.firstChild &&
                e.firstChild.nodeValue !== i &&
                (e.firstChild.nodeValue = i),
              _r_();
          },
        };
        function A() {}
        var O = function (e, t) {
          return (
            _i_("4ab:ee20f945"),
            _r_(e.nodeName === t.nodeName && e.namespaceURI === t.namespaceURI)
          );
        };
        function J(e) {
          return _i_("4ab:dc0a4ac8"), _r_(e.id);
        }
        return (
          (e.exports = function (e, t, i) {
            if ((_i_("4ab:af448acf"), i || (i = {}), "string" == typeof t))
              if ("#document" === e.nodeName || "HTML" === e.nodeName) {
                var n = t;
                (t = document.createElement("html")).innerHTML = n;
              } else
                (a = t),
                  _i_("4ab:6e64c2c2"),
                  !F &&
                    document.createRange &&
                    (F = document.createRange()).selectNode(document.body),
                  F && F.createContextualFragment
                    ? (s = F.createContextualFragment(a))
                    : ((s = document.createElement("body")).innerHTML = a),
                  (t = _r_(s.childNodes[0]));
            var a,
              s,
              b = {},
              g = {},
              m = i.getNodeKey || J,
              M = i.onBeforeNodeAdded || A,
              v = i.onNodeAdded || A,
              y = i.onBeforeElUpdated || A,
              B = i.onElUpdated || A,
              r = i.onBeforeNodeDiscarded || A,
              o = i.onNodeDiscarded || A,
              C = i.onBeforeElChildrenUpdated || A,
              _ = !0 === i.childrenOnly,
              k = [];
            function l(e) {
              if ((_i_("4ab:5e13d614"), 1 === e.nodeType))
                for (var t = e.firstChild; t; )
                  m(t) || (o(t), l(t)), (t = t.nextSibling);
              _r_();
            }
            function D(e, t, i) {
              if ((_i_("4ab:f34545d8"), !1 === r(e))) return _r_();
              t.removeChild(e),
                i
                  ? m(e) || (o(e), l(e))
                  : (function e(t, i) {
                      _i_("4ab:17cb2e51");
                      var n = m(t);
                      if ((n ? (b[n] = t) : i || o(t), 1 === t.nodeType))
                        for (var a = t.firstChild; a; )
                          e(a, i || n), (a = a.nextSibling);
                      _r_();
                    })(e),
                _r_();
            }
            function x(e, t, i, n) {
              _i_("4ab:cb66c668");
              var a = m(t);
              if ((a && delete b[a], !n)) {
                if (!1 === y(e, t)) return _r_();
                if (
                  ((function (e, t) {
                    _i_("4ab:3c17c39e");
                    var i,
                      n,
                      a,
                      s,
                      r,
                      o,
                      _ = t.attributes;
                    for (i = _.length - 1; 0 <= i; i--)
                      (a = (n = _[i]).name),
                        (r = n.value),
                        (s = n.namespaceURI)
                          ? ((a = n.localName || a),
                            (o = e.getAttributeNS(s, a)))
                          : (o = e.getAttribute(a)),
                        o !== r &&
                          (s
                            ? ("xmlns" === n.prefix && (a = n.name),
                              e.setAttributeNS(s, a, r))
                            : e.setAttribute(a, r));
                    for (i = (_ = e.attributes).length - 1; 0 <= i; i--)
                      !1 !== (n = _[i]).specified &&
                        ((a = n.name),
                        (s = n.namespaceURI),
                        N(t, s, s ? (a = n.localName || a) : a) ||
                          e.removeAttributeNode(n));
                    _r_();
                  })(e, t),
                  B(e),
                  !1 === C(e, t))
                )
                  return _r_();
              }
              if ("TEXTAREA" !== e.nodeName) {
                var s,
                  r,
                  o,
                  _,
                  l,
                  d = t.firstChild,
                  h = e.firstChild;
                e: for (; d; ) {
                  for (o = d.nextSibling, s = m(d); h; ) {
                    var c = m(h);
                    if (((r = h.nextSibling), !i && c && (l = g[c]))) {
                      l.parentNode.replaceChild(h, l), x(h, l, i), (h = r);
                      continue;
                    }
                    var u = h.nodeType;
                    if (u === d.nodeType) {
                      var f = !1;
                      if (
                        (1 === u
                          ? (O(h, d) &&
                              (c || s ? s === c && (f = !0) : (f = !0)),
                            f && x(h, d, i))
                          : (3 !== u && 8 != u) ||
                            ((f = !0), (h.nodeValue = d.nodeValue)),
                        f)
                      ) {
                        (d = o), (h = r);
                        continue e;
                      }
                    }
                    D(h, e, i), (h = r);
                  }
                  s && ((_ = b[s]) ? (x(_, d, !0), (d = _)) : (g[s] = d)),
                    !1 !== M(d) && (e.appendChild(d), v(d)),
                    1 === d.nodeType && (s || d.firstChild) && k.push(d),
                    (d = o),
                    (h = r);
                }
                for (; h; ) (r = h.nextSibling), D(h, e, i), (h = r);
              }
              var p = I[e.nodeName];
              p && p(e, t), _r_();
            }
            var d,
              h,
              c = e,
              u = c.nodeType,
              f = t.nodeType;
            if (!_)
              if (1 === u)
                1 === f
                  ? O(e, t) ||
                    (o(e),
                    (c = (function (e, t) {
                      _i_("4ab:6593b9e4");
                      for (var i = e.firstChild; i; ) {
                        var n = i.nextSibling;
                        t.appendChild(i), (i = n);
                      }
                      return _r_(t);
                    })(
                      e,
                      ((d = t.nodeName),
                      (h = t.namespaceURI),
                      _i_("4ab:b9ab9e43"),
                      _r_(
                        h && h !== j
                          ? document.createElementNS(h, d)
                          : document.createElement(d)
                      ))
                    )))
                  : (c = t);
              else if (3 === u || 8 === u) {
                if (f === u) return (c.nodeValue = t.nodeValue), _r_(c);
                c = t;
              }
            if (c === t) o(e);
            else {
              x(c, t, !1, _);
              var p = function (e) {
                _i_("4ab:07e8f038");
                for (var t = e.firstChild; t; ) {
                  var i = t.nextSibling,
                    n = m(t);
                  if (n) {
                    var a = b[n];
                    if (a && O(t, a)) {
                      if (
                        (t.parentNode.replaceChild(a, t),
                        x(a, t, !0),
                        (t = i),
                        T(b))
                      )
                        return _r_(!1);
                      continue;
                    }
                  }
                  1 === t.nodeType && p(t), (t = i);
                }
                _r_();
              };
              if (!T(b))
                e: for (; k.length; ) {
                  var w = k;
                  k = [];
                  for (var E = 0; E < w.length; E++)
                    if (!1 === p(w[E])) break e;
                }
              for (var $ in b)
                if (b.hasOwnProperty($)) {
                  var S = b[$];
                  o(S), l(S);
                }
            }
            return (
              !_ && c !== e && e.parentNode && e.parentNode.replaceChild(c, e),
              _r_(c)
            );
          }),
          _r_(e.exports)
        );
      }),
      _r_();
  }),
  (booking.browserStorageHandler = (function (d, e, h, c) {
    _i_("4ab:a11e61ce");
    var u = !1;
    try {
      (u = !(!d.localStorage || !d.sessionStorage)) &&
        d.localStorage.setItem("btest", "1");
    } catch (e) {
      u = !1;
    }
    var n = {
      _readCookie: function (e) {
        _i_("4ab:51d0b270");
        var t = {};
        try {
          "undefined" != typeof JSON && (t = JSON.parse(c.cookie(e)) || {});
        } catch (e) {}
        return _r_(t);
      },
      _modifySingleValue: function (e, t, i, n, a) {
        if ((_i_("4ab:22c7266b"), !t || !i)) return _r_(!1);
        if (u && !a) {
          var s = "session" === e ? d.sessionStorage : d.localStorage;
          if ("delete" === t) s.removeItem(i);
          else
            try {
              s.setItem(i, n);
            } catch (e) {}
        } else {
          var r, o, _, l;
          "session" === e ? (r = "bs") : ((r = "b"), (l = 30)),
            (o = this._readCookie(r)),
            "delete" === t ? delete o[i] : (o[i] = n),
            (_ = c.isEmptyObject(o) ? null : JSON.stringify(o)),
            c.cookie(r, _, { expires: l, path: "/", domain: h.b_domain_end });
        }
        _r_();
      },
      _getValue: function (e, t, i) {
        if ((_i_("4ab:f1ea0118"), !t)) return _r_(void 0);
        if (u && !i) {
          var n = "session" === e ? d.sessionStorage : d.localStorage;
          return _r_(n.getItem(t));
        }
        var a, s;
        return (
          (a = "session" === e ? "bs" : "b"),
          (s = this._readCookie(a)),
          _r_(s[t])
        );
      },
    };
    return _r_({
      addSessionValue: function (e, t, i) {
        return (
          _i_("4ab:b380b492"),
          _r_(n._modifySingleValue("session", "add", e, t, i))
        );
      },
      deleteSessionValue: function (e, t) {
        return (
          _i_("4ab:d61f09c2"),
          _r_(n._modifySingleValue("session", "delete", e, void 0, t))
        );
      },
      getSessionValue: function (e, t) {
        return _i_("4ab:d6b8f5d6"), _r_(n._getValue("session", e, t));
      },
      addPermanentValue: function (e, t, i) {
        return (
          _i_("4ab:fe0aaa49"),
          _r_(n._modifySingleValue("permanent", "add", e, t, i))
        );
      },
      deletePermanentValue: function (e, t) {
        return (
          _i_("4ab:99a942db"),
          _r_(n._modifySingleValue("permanent", "delete", e, void 0, t))
        );
      },
      getPermanentValue: function (e, t) {
        return _i_("4ab:07d7aebb"), _r_(n._getValue("permanent", e, t));
      },
      isLocalStorageSupported: function () {
        return _i_("4ab:1bca3a3a"), _r_(u);
      },
    });
  })(window, document, booking.env, window.jQuery)),
  booking.define &&
    booking.define("browser-storage-handler", booking.browserStorageHandler),
  B.define("search/modules/flags", function (e, t, i) {
    _i_("4ab:5add769b"),
      (i.exports = {
        parse: function (e) {
          _i_("4ab:67450727");
          var s = {};
          if ("string" != typeof e)
            throw new TypeError("First argument must be a string");
          if ("" === (e = e.trim())) return _r_(s);
          return (
            e.split(/\s+/).forEach(function (e) {
              _i_("4ab:77d12fd8");
              var t,
                i = e,
                n = !0,
                a = e.indexOf(":");
              -1 !== a &&
                ((i = e.substr(0, a)),
                (n = e.substr(a + 1)) || (n = 0),
                (t = n),
                _i_("4ab:cf893a7a"),
                _r_(!isNaN(parseFloat(t)) && isFinite(t)) &&
                  (n = parseInt(n, 10))),
                (s[i] = n),
                _r_();
            }),
            _r_(s)
          );
        },
      }),
      _r_();
  }),
  B.define("search/modules/search-date", function (e, t, i) {
    _i_("4ab:11f50899");
    var n = e("calendar-base").Calendar;
    function a(e) {
      _i_("4ab:4575f3c6"),
        (this.year = null),
        (this.month = null),
        (this.day = null),
        (this.complete = !1),
        "number" == typeof e.year && (this.year = e.year),
        "number" == typeof e.month && (this.month = e.month),
        "number" == typeof e.day && (this.day = e.day),
        null !== this.month &&
          (this.month < 0
            ? (this.month = 0)
            : 11 < this.month && (this.month = 11)),
        null !== this.day &&
          (this.day < 0
            ? (this.day = 0)
            : this.day > s(this.year, this.month) &&
              (this.day = s(this.year, this.month))),
        (this.complete =
          null !== this.year && null !== this.month && null !== this.day),
        _r_();
    }
    function s(e, t) {
      return (
        _i_("4ab:1b292207"),
        _r_(
          "number" == typeof e && "number" == typeof t
            ? n.daysInMonth(e, t)
            : 3 == t || 5 == t || 8 == t || 10 == t
            ? 30
            : 1 == t
            ? 29
            : 31
        )
      );
    }
    (a.prototype = {
      toString: function () {
        if ((_i_("4ab:f1f54d20"), !this.complete)) return _r_("");
        var e = this.month + 1;
        return _r_(
          this.year +
            "-" +
            (e < 10 ? "0" : "") +
            e +
            "-" +
            (this.day < 10 ? "0" : "") +
            this.day
        );
      },
      toNative: function () {
        if ((_i_("4ab:7bbffa6e"), !this.complete)) return _r_(new Date(NaN));
        return _r_(
          new Date(Date.UTC(this.year, this.month, this.day, 0, 0, 0, 0))
        );
      },
      valueOf: function () {
        return _i_("4ab:c9d65c1a"), _r_(this.toNative().valueOf());
      },
    }),
      (a.create = function (e) {
        var t;
        if (
          (_i_("4ab:52ce28b2"),
          "string" == typeof e &&
            3 == (t = e.split("-")).length &&
            (e = {
              year: parseInt(t[0], 10),
              month: parseInt(t[1], 10) - 1,
              day: parseInt(t[2], 10),
            }),
          "object" != typeof e || null === e)
        )
          throw new TypeError("date must be an object");
        return _r_(new a(e));
      }),
      (a.createFromString = function (e) {
        if ((_i_("4ab:97e2ad54"), "string" != typeof e))
          throw new TypeError("dateString must be a string");
        var t = e.split(/-/g),
          i = {
            year: parseInt(t[0], 10),
            month: parseInt(t[1], 10) - 1,
            day: parseInt(t[2], 10),
          };
        return _r_(a.create(i));
      }),
      (a.createFlexible = function (e) {
        if ((_i_("4ab:2760f620"), "object" != typeof e || null === e))
          throw new TypeError("date must be an object");
        if (
          "number" != typeof e.year ||
          "number" != typeof e.month ||
          "number" != typeof e.day
        )
          throw new TypeError("invalid date");
        var t = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0));
        return (
          (e = {
            year: t.getUTCFullYear(),
            month: t.getUTCMonth(),
            day: t.getUTCDate(),
          }),
          _r_(a.create(e))
        );
      }),
      (a.isStrictlyValid = function (e) {
        _i_("4ab:8ee76032");
        var t = a.create(e);
        return _r_(e.year === t.year && e.month === t.month && e.day === t.day);
      }),
      (a.compare = function (e, t) {
        if ((_i_("4ab:ef4f5cae"), !(e instanceof a && t instanceof a)))
          throw new TypeError("dates must be an instance of SearchDate");
        if (e.year < t.year) return _r_(-1);
        if (e.year > t.year) return _r_(1);
        if (e.month < t.month) return _r_(-1);
        if (e.month > t.month) return _r_(1);
        if (e.day < t.day) return _r_(-1);
        if (e.day > t.day) return _r_(1);
        return _r_(0);
      }),
      (i.exports = { SearchDate: a }),
      _r_();
  }),
  B.define("component/autocomplete-core", function (e, t, i) {
    _i_("4ab:62e893cf");
    var n = e("jquery"),
      a = e("component"),
      s = e("read-data-options");
    (i.exports = a.extend({
      init: function () {
        _i_("4ab:bebc96f6"),
          (this.highlightedIndex = -1),
          (this.isDeletion = !1),
          (this.items = []),
          (this.keyDownCount = 0),
          (this.keysDown = {}),
          (this.listHeight = 0),
          (this.listVisible = !1),
          (this.preventBlurClose = !1),
          (this.selectedIndex = -1),
          (this.selectedValue = null),
          (this.valueBuffer = null),
          (this.clickOutController = e("click-out")),
          (this.clickOutMonitorId = null),
          (this.highlightClass = "-highlighted"),
          (this.$input = this.$el.find('[data-input=""]')),
          (this.input = this.$input[0]),
          (this.$list = this.$el.find('[data-list=""]')),
          (this.$items = n("[data-list-item]", this.$list)),
          (this.optionsSpec = this.optionsSpec || {}),
          (this.optionsSpec = n.extend(this.optionsSpec, {
            openFocus: { name: "open-focus", type: Boolean },
            highlightFirst: { name: "highlight-first", type: Boolean },
            forceHighlight: { name: "highlight-force", type: Boolean },
            focusOnItemSelect: { name: "focus-on-item-select", type: Boolean },
          })),
          (this.options = s(this.$el, this.optionsSpec)),
          (this.supportsInputEvent = this.input && "oninput" in this.input),
          this.addInputEventListeners(),
          this.addListEventListeners(),
          this.addItemsEventListeners(),
          this.calculateListHeight(),
          this.$input.attr("autocomplete", "off"),
          _r_();
      },
      addInputEventListeners: function () {
        _i_("4ab:ddce441a");
        var e = this.$input.component("keyboard");
        e.on("keydown:Escape", this.inputEscape.bind(this)),
          e.on("keydown:ArrowUp", this.inputArrowUp.bind(this)),
          e.on("keydown:ArrowDown", this.inputArrowDown.bind(this)),
          e.on("keydown:Enter", this.inputEnter.bind(this)),
          e.on("keydown:Tab", this.inputTab.bind(this)),
          this.$input.on("click", this.inputClick.bind(this)),
          this.$input.focus(this.inputFocus.bind(this)),
          this.$input.blur(this.inputBlur.bind(this)),
          this.$input.keydown(this.inputKeyDown.bind(this)),
          this.$input.bind("input", this.inputInput.bind(this)),
          this.$input.keyup(this.inputKeyUp.bind(this)),
          _r_();
      },
      addListEventListeners: function () {
        _i_("4ab:16de6562"),
          this.$list.mousedown(this.listMouseDown.bind(this)),
          this.$list.mouseup(this.listMouseUp.bind(this)),
          this.$list.on(
            "click",
            '[data-list-item=""]',
            this.listItemClick.bind(this)
          ),
          _r_();
      },
      addItemsEventListeners: function () {
        _i_("4ab:7a96b5f0"),
          this.$items.click(this.listItemClick.bind(this)),
          _r_();
      },
      addClickOutEventListener: function () {
        _i_("4ab:578e273f"),
          (this.clickOutMonitorId = this.clickOutController.addMonitor(
            this.el,
            this.clickOut.bind(this)
          )),
          _r_();
      },
      removeClickOutEventListener: function () {
        _i_("4ab:be8a451d"),
          this.clickOutController.removeMonitor(this.clickOutMonitorId),
          _r_();
      },
      calculateListHeight: function () {
        _i_("4ab:69d19d36"),
          (this.listHeight = this.$list.outerHeight()),
          _r_();
      },
      inputClick: function (e) {},
      inputFocus: function (e) {
        _i_("4ab:50598299"),
          this.options.openFocus &&
            (this.listShow(), this.autocomplete({ fromFocus: !0 })),
          _r_();
      },
      inputBlur: function (e) {
        _i_("4ab:bb9f2bdf"),
          setTimeout(this.inputBlurSync.bind(this), 4),
          _r_();
      },
      inputBlurSync: function () {
        _i_("4ab:1be76dc3"),
          !this.preventBlurClose &&
            this.listVisible &&
            (this.highlightReset(), this.reset()),
          _r_();
      },
      inputKeyDown: function (e) {
        _i_("4ab:4b6b6451");
        var t = e.ctrlKey || e.metaKey || e.shiftKey || e.altKey,
          i = 8 == e.which || 46 == e.which;
        (this.isDeletion = i), (this.taintedKeyDown = t), _r_();
      },
      inputInput: function (e) {
        _i_("4ab:ae080a97"), this.autocomplete(), _r_();
      },
      inputKeyUp: function (e) {
        _i_("4ab:6eb2190a");
        var t =
            this.taintedKeyDown ||
            e.ctrlKey ||
            e.metaKey ||
            e.shiftKey ||
            e.altKey ||
            (16 <= e.which && e.which <= 18) ||
            91 == e.which,
          i = 32 == e.which || 48 <= e.which,
          n = 37 <= e.which && e.which <= 40;
        t ||
          ((n || i) && this.listShow(),
          (!this.isDeletion && !i) ||
            this.supportsInputEvent ||
            this.autocomplete(),
          i && this.keyDownCount++),
          _r_();
      },
      inputEscape: function (e) {
        _i_("4ab:a63e3a5c"),
          this.listVisible &&
            (e.originalEvent.preventDefault(),
            this.highlightReset(),
            this.reset()),
          _r_();
      },
      inputArrowUp: function (e) {
        _i_("4ab:71605c6e"),
          e.originalEvent.preventDefault(),
          this.listVisible ? this.highlightPrevious() : this.listShow(),
          _r_();
      },
      inputArrowDown: function (e) {
        _i_("4ab:b3fa5988"),
          e.originalEvent.preventDefault(),
          this.listVisible ? this.highlightNext() : this.listShow(),
          _r_();
      },
      inputEnter: function (e) {
        _i_("4ab:0c057b22"),
          this.listVisible &&
            -1 != this.highlightedIndex &&
            (e.originalEvent.preventDefault(),
            this.choose(this.highlightedIndex)),
          _r_();
      },
      inputTab: function (e) {
        _i_("4ab:80ac1b01"), this.inputEnter.apply(this, arguments), _r_();
      },
      listItemClick: function (e) {
        _i_("4ab:afab041c");
        var t = n(e.currentTarget);
        this.options.focusOnItemSelect && this.input.focus(),
          this.choose(t.data("i")),
          _r_();
      },
      listMouseDown: function (e) {
        _i_("4ab:9568a986"), (this.preventBlurClose = !0), _r_();
      },
      listMouseUp: function (e) {
        _i_("4ab:d660fe51"), (this.preventBlurClose = !1), _r_();
      },
      clickOut: function () {
        _i_("4ab:095cbd45"),
          this.listVisible && (this.highlightReset(), this.reset()),
          _r_();
      },
      setValue: function (e) {
        _i_("4ab:9ee5cf87"), (this.input.value = e), _r_();
      },
      listShow: function () {
        _i_("4ab:7f0b6848"),
          this.listVisible ||
            this._loading ||
            (this.$list.addClass("-visible"),
            (this.listVisible = !0),
            this.addClickOutEventListener(),
            (this.$list[0].scrollTop = 1),
            setTimeout(
              function () {
                _i_("4ab:e08d76c5"), (this.$list[0].scrollTop = 0), _r_();
              }.bind(this),
              10
            )),
          _r_();
      },
      listHide: function () {
        _i_("4ab:44a78ebb"),
          this.listVisible &&
            (this.$list.removeClass("-visible"),
            this.resetFlags(),
            this.removeClickOutEventListener()),
          _r_();
      },
      highlightPrevious: function () {
        _i_("4ab:5af5b819");
        for (
          var e = this.highlightedIndex;
          -1 == e ? (e = this.items.length - 1) : e--,
            -1 != e && this.items[e].hidden;

        );
        this.highlightFromNavigation(e), _r_();
      },
      highlightNext: function () {
        _i_("4ab:57b7aad5");
        for (
          var e = this.highlightedIndex;
          e == this.items.length - 1 ? (e = -1) : e++,
            -1 != e && this.items[e].hidden;

        );
        this.highlightFromNavigation(e), _r_();
      },
      highlightFromNavigation: function (e, t, i) {
        if (
          (_i_("4ab:1de2a5d2"),
          (-1 == this.highlightedIndex || t) &&
            (this.valueBuffer = this.input.value),
          -1 == e)
        )
          this.highlightReset({ preserveFocus: !0 });
        else if (this.supportsInputEvent)
          if (
            this.valueBuffer &&
            0 ==
              this.items[e].valueLowerCase.indexOf(
                this.valueBuffer.toLowerCase()
              )
          ) {
            var n = this.valueBuffer.length,
              a = this.items[e].value.length,
              s = this.valueBuffer + this.items[e].value.substring(n);
            if (
              (this.input.value == s || i || this.setValue(s),
              this.input.setSelectionRange)
            )
              this.input.setSelectionRange(a, a);
            else if (this.input.createTextRange) {
              var r = this.input.createTextRange();
              r.collapse(!0),
                r.moveStart("character", n),
                r.moveEnd("character", a),
                r.select();
            } else
              void 0 !== this.input.selectionStart &&
                ((this.input.selectionStart = n),
                (this.input.selectionEnd = a));
          } else
            i || (this.setValue(this.items[e].value), this.fixIEFocusLoss());
        this.highlight(e), _r_();
      },
      highlightFromAutocomplete: function () {
        _i_("4ab:fe992877");
        var e = this.input.value,
          t = this.getListFirstIndex();
        (-1 !== t &&
          this.options.highlightFirst &&
          !this.isDeletion &&
          e &&
          0 === this.items[t].valueLowerCase.indexOf(e.toLowerCase())) ||
        this.options.forceHighlight
          ? this.highlightFromNavigation(t, !0)
          : this.highlight(-1),
          _r_();
      },
      highlight: function (e) {
        _i_("4ab:afe25219"),
          this.listShow(),
          -1 != this.highlightedIndex &&
            this.$items
              .eq(this.highlightedIndex)
              .removeClass(this.highlightClass),
          -1 != e && this.$items.eq(e).addClass(this.highlightClass),
          (this.highlightedIndex = e),
          this.highlightScroll(),
          _r_();
      },
      highlightReset: function (e) {
        _i_("4ab:1ee32de1"),
          (e = e || {}),
          null === this.valueBuffer ||
            e.preserveInputValue ||
            (this.setValue(this.valueBuffer),
            e.preserveFocus && this.fixIEFocusLoss()),
          -1 != this.highlightedIndex &&
            this.$items
              .eq(this.highlightedIndex)
              .removeClass(this.highlightClass),
          (this.highlightedIndex = -1),
          _r_();
      },
      highlightScroll: function () {
        _i_("4ab:9a9e1dd1");
        var e = !1,
          t = this.$list[0].scrollTop;
        if (-1 != this.highlightedIndex) {
          var i = this.$items.eq(this.highlightedIndex),
            n = (1 == i.length && i.position().top) + t,
            a = i.outerHeight();
          n + a > this.listHeight + t
            ? (e = n + a - this.listHeight)
            : n < t && (e = n);
        } else e = 0;
        !1 !== e && e != t && (this.$list[0].scrollTop = e), _r_();
      },
      getListLength: function () {
        return _i_("4ab:257516ce"), _r_(this.items.length);
      },
      getListFirstIndex: function () {
        return _i_("4ab:bd23caef"), 0 === this.items.length ? _r_(-1) : _r_(0);
      },
      autocomplete: function () {
        _i_("4ab:26e661c0"), this.postAutocomplete(), _r_();
      },
      postAutocomplete: function () {
        _i_("4ab:b9fe1f74"),
          this.listShow(),
          this.calculateListHeight(),
          this.highlightFromAutocomplete(),
          _r_();
      },
      choose: function (e) {
        _i_("4ab:6ae9c094"),
          (this.selectedIndex = e),
          B.env.fe_s_prprtyt
            ? (this.selectedValue = this.items[e].valueWithPropertyType
                ? this.items[e].valueWithPropertyType
                : this.items[e].value)
            : (this.selectedValue = this.items[e].value),
          this.setValue(this.selectedValue),
          this.reset(),
          _r_();
      },
      reset: function (e) {
        _i_("4ab:a458ad8e"),
          (e = e || {}),
          -1 != this.highlightedIndex &&
            this.$items
              .eq(this.highlightedIndex)
              .removeClass(this.highlightClass),
          this.listHide(),
          e.hard &&
            (this.resetFlags(),
            (this.selectedIndex = -1),
            (this.selectedValue = null),
            this.setValue("")),
          _r_();
      },
      resetFlags: function () {
        _i_("4ab:ad386500"),
          (this.highlightedIndex = -1),
          (this.isDeletion = !1),
          (this.keyDownCount = 0),
          (this.keysDown = {}),
          (this.listVisible = !1),
          (this.preventBlurClose = !1),
          (this.valueBuffer = null),
          _r_();
      },
      fixIEFocusLoss: function () {
        if ((_i_("4ab:0430c723"), this.input.createTextRange)) {
          var e = this.input.createTextRange();
          e.moveStart("character", this.input.value.length),
            e.collapse(),
            e.select();
        }
        _r_();
      },
    })),
      _r_();
  }),
  B.define("component/core/input-placeholder", function (e, t, i) {
    "use strict";
    _i_("4ab:4f7a488e");
    var n = e("component"),
      a = e("read-data-options");
    return _r_(
      n.extend({
        init: function () {
          if ((_i_("4ab:da9a7aaa"), this.browserSupported())) return _r_();
          this.options = a(this.$el, {
            placeholderClass: { name: "placeholder-class", type: String },
            placeholderColor: {
              name: "placeholder-color",
              type: String,
              defaultValue: "#7C90A6",
            },
          });
          var e = "input, textarea",
            t = this.$el.find(e);
          this.$el.is(e) && (t = t.add(this.$el)),
            t
              .filter(function (e, t) {
                return _i_("4ab:bbabec74"), _r_(!!$(t).attr("placeholder"));
              })
              .each(
                function (e, t) {
                  _i_("4ab:c0314b00"), this.setupPlaceholder($(t)), _r_();
                }.bind(this)
              ),
            _r_();
        },
        browserSupported: function () {
          _i_("4ab:b8571c30");
          var e = $('input[type="text"]')[0] || $('<input type="text">')[0];
          return _r_(!!("placeholder" in e));
        },
        setupPlaceholder: function (e) {
          _i_("4ab:04be5dbd");
          var t = $("<label />")
            .text(e.attr("placeholder"))
            .css({
              width: e.width() + "px",
              height: e.height() + "px",
              paddingTop: e.css("padding-top"),
              paddingLeft: e.css("padding-left"),
              paddingRight: e.css("padding-right"),
              fontFamily: e.css("font-family"),
              fontSize: e.css("font-size"),
              color: this.options.placeholderColor,
              overflow: "hidden",
              cursor: "text",
              position: "absolute",
            });
          this.options.placeholderClass &&
            t.addClass(this.options.placeholderClass),
            t.insertBefore(e),
            t.click(function () {
              _i_("4ab:8b3ebc9a"), e.focus(), _r_();
            }),
            e
              .focus(function () {
                _i_("4ab:d2d65377"), t.hide(), _r_();
              })
              .blur(function () {
                _i_("4ab:9fa6d3f0"),
                  t[e.val().length ? "hide" : "show"](),
                  _r_();
              }),
            e.get(0) === document.activeElement
              ? e.triggerHandler("focus")
              : e.triggerHandler("blur"),
            _r_();
        },
      })
    );
  }),
  B.define("component/keyboard", function (e, t, i) {
    _i_("4ab:d840ae1d");
    var n = e("component"),
      a = e("event-emitter"),
      s = {
        8: "Backspace",
        46: "Delete",
        9: "Tab",
        13: "Enter",
        32: "Space",
        27: "Escape",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
      };
    function r(i, n) {
      return (
        _i_("4ab:c305199b"),
        _r_(function (e) {
          _i_("4ab:89331456");
          var t = "";
          e.which &&
            void 0 !== s[e.which.toString()] &&
            (e.originalEvent.altKey && (t += ":alt"),
            e.originalEvent.ctrlKey && (t += ":ctrl"),
            e.originalEvent.metaKey && (t += ":meta"),
            e.originalEvent.shiftKey && (t += ":shift"),
            (t += ":" + s[e.which]),
            i.trigger(n + t, { keys: n + t, originalEvent: e })),
            _r_();
        })
      );
    }
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:70caa689"),
          a.extend(this),
          this.$el
            .bind("keydown", r(this, "keydown"))
            .bind("keyup", r(this, "keyup")),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("component/tooltip-loc", function (e, t, i) {
    "use strict";
    _i_("4ab:0e7aa0e2");
    var n = e("component"),
      r = e("jquery");
    (i.exports = n.extend({
      DEFAULTS: {
        template:
          '<div class="component-tooltip off" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        placement: "top",
        alignment: "center",
        trigger: "hover focus",
        animation: "true",
      },
      init: function () {
        _i_("4ab:4b79859f"),
          this._buildOptions(),
          this._createTooltip(),
          this._attachEvents(),
          this.$el.trigger("ready.B.tooltip", [this.$tip]),
          _r_();
      },
      _buildOptions: function () {
        _i_("4ab:2003d6d2"),
          (this.options = r.extend({}, this.DEFAULTS, this.$el.data())),
          (this.options.intangible = "intangible" in this.options),
          this.options.target &&
            (this.options.target = r(this.options.target).first()),
          this.options.content ||
            (this.options.content = this.options.title || this.el.title),
          _r_();
      },
      _createTooltip: function () {
        _i_("4ab:f0d24a5f");
        var e =
          "tooltip-" +
          this.options.placement +
          " tooltip-align-" +
          this.options.alignment;
        this.options.extraClass && (e = e + " " + this.options.extraClass),
          "true" === this.options.animation && (e += " tooltip-animate"),
          (this.$tip = r(this.options.template)),
          this.$tip.addClass(e),
          this._attachContent(),
          this.$tip.appendTo(r("body")),
          this.$el.trigger("inserted.B.tooltip", [this.$tip]),
          _r_();
      },
      _attachContent: function () {
        _i_("4ab:edb36e3b");
        var e = this.$tip.find(".tooltip-inner");
        this.options.target
          ? e.append(this.options.target.clone())
          : ((this.options.target = []), e.text(this.options.content)),
          _r_();
      },
      _positionTooltip: function () {
        _i_("4ab:55a3c39d"),
          this._defineAlignmentVars(),
          this._placeTooltip(),
          this._alignTooltip(),
          this.$tip.css({ left: this.left, top: this.top, right: "auto" }),
          _r_();
      },
      _defineAlignmentVars: function () {
        _i_("4ab:ba6d432e"),
          (this.elOffset = this.$el.offset()),
          (this.position = "left"),
          (this.dimension = "outerWidth"),
          this.options.placement.match(/top|bottom/) &&
            ((this.position = "top"), (this.dimension = "outerHeight")),
          _r_();
      },
      _accountForRTL: function (e) {
        if ((_i_("4ab:3680d328"), !B.env.rtl)) return _r_(e);
        if ("left" === e) return _r_("right");
        if ("right" === e) return _r_("left");
        return _r_(e);
      },
      _placeTooltip: function () {
        _i_("4ab:eefd1cb5");
        var e = this._accountForRTL(this.position),
          t = this.dimension;
        this._accountForRTL(this.options.placement) === e
          ? (this[e] = this.elOffset[e] - this.$tip[t]())
          : (this[e] = this.elOffset[e] + this.$el[t]()),
          _r_();
      },
      _alignTooltip: function () {
        var e, t;
        switch (
          (_i_("4ab:d3b34b71"),
          "left" === this.position
            ? ((e = "top"), (t = "outerHeight"))
            : ((e = "left"), (t = "outerWidth")),
          this._accountForRTL(this.options.alignment))
        ) {
          case e:
            this[e] = this.elOffset[e];
            break;
          case "center":
            this[e] = this.$el[t]() / 2 + this.elOffset[e] - this.$tip[t]() / 2;
            break;
          default:
            this[e] = this.elOffset[e] + this.$el[t]() - this.$tip[t]();
        }
        _r_();
      },
      _attachEvents: function () {
        if ((_i_("4ab:f9224418"), this.options.trigger.match(/manual/)))
          return _r_();
        var e,
          t,
          i,
          n = this.options.trigger.split(" "),
          a = n.length,
          s = this.$el.add(this.$tip);
        for (this.options.intangible && (s = this.$el); a--; )
          "click" === (e = n[a])
            ? this.$el.on("click", r.proxy(this.toggle, this))
            : ((t = "hover" == e ? "mouseenter" : "focusin"),
              (i = "hover" == e ? "mouseleave" : "focusout"),
              s.on(t, r.proxy(this.show, this)),
              s.on(i, r.proxy(this.hide, this)));
        _r_();
      },
      _trackTransitionEnd: function (t) {
        _i_("4ab:7d5873ec");
        var i = this.$el;
        this.$tip.one("transitionend", function (e) {
          _i_("4ab:a241ca33"), i.trigger(t, [this]), _r_();
        }),
          _r_();
      },
      show: function () {
        _i_("4ab:1e6fbd16"),
          this.$el.trigger("show.B.tooltip", [this.$tip]),
          this._trackTransitionEnd("shown.B.tooltip"),
          this.$el.attr("aria-describedby", this.el.id),
          this._positionTooltip(),
          this.$tip.addClass("on").removeClass("off"),
          _r_();
      },
      hide: function () {
        _i_("4ab:0ab21ba6"),
          this.$el.trigger("hide.B.tooltip", [this.$tip]),
          this._trackTransitionEnd("hidden.B.tooltip"),
          this.$el.removeAttr("aria-describedby"),
          this.$tip.removeClass("on").addClass("off"),
          _r_();
      },
      toggle: function () {
        _i_("4ab:1e6fe6da"),
          this.$tip.is(".on") ? this.hide() : this.show(),
          _r_();
      },
    })),
      _r_();
  }),
  B.define(
    "component/search/destination/input-placeholder",
    function (e, t, i) {
      _i_("4ab:edea91f1");
      var n = B.require("component/core/input-placeholder"),
        a = e("search/searchbox/model");
      return _r_(
        n.extend({
          init: function () {
            _i_("4ab:95a0ca80"),
              (this.model = a.getInstance(this.$el.data("sb-id"))),
              n.prototype.init.apply(this, arguments),
              _r_();
          },
        })
      );
    }
  ),
  B.define("component/search/destination/input", function (e, t, i) {
    "use strict";
    _i_("4ab:a2da73a9"),
      booking.jstmpl(
        "search_destination_autocomplete_results",
        (function () {
          _i_("4ab:5d33643e");
          var f,
            p = [
              "\n        ",
              "\n\n    ",
              "\n\t",
              "\n       \n\n        ",
              '\n            <li\n                class="',
              "c-autocomplete__item sb-autocomplete__item ",
              "sb-autocomplete__item--cjk ",
              " ",
              '"\n                >\n                <div class="sb-autocomplete__section-title-wrapper">\n                    <div class="sb-autocomplete__section-title">\n                        ',
              '\n                            <i class="bicon bicon-',
              '"></i>\n                        ',
              "\n                        <span>",
              "</span>\n                    </div>\n                </div>\n            </li>\n        ",
              '\n        <li\n            class="',
              "c-autocomplete__item sb-autocomplete__item sb-autocomplete__item-with_photo sb-autocomplete__item__item--elipsis ",
              "sb-autocomplete__item--icon_revamp ",
              "sb-autocomplete__item--airport ",
              "sb-autocomplete__item--city ",
              "sb-autocomplete__item--country ",
              "sb-autocomplete__item--district ",
              "sb-autocomplete__item--hotel ",
              "sb-autocomplete__item--landmark ",
              "sb-autocomplete__item--region ",
              "sb-autocomplete__item--theme ",
              "sb-autocomplete__item--with-title ",
              "sb-autocomplete__item--with-two-lines ",
              "sb-autocomplete__item--regioncity ",
              "sb-autocomplete__item--theme-expanded ",
              "first_theme ",
              "1",
              "smaller_theme_wrapper ",
              "sb-autocomplete__item--tabbed ",
              "sb-autocomplete__item--single-line ",
              '"\n            role="option"\n            data-list-item\n            data-i="',
              '"\n            data-value="',
              '"\n            ',
              '\n                data-label="',
              "\n            >\n            \n            ",
              '\n                <a href="',
              '" target="_blank">\n            ',
              "\n            \n            ",
              "",
              '<span class="sb-autocomplete--photo">',
              "24",
              "streamline/bed",
              "</span>",
              "streamline/sports_winter_free_skiing",
              "streamline/sports_snowboard",
              "streamline/landmark",
              "streamline/transport_airplane_depart",
              "streamline/history_recent",
              "streamline/geo_pin",
              '<img alt="',
              '" src="',
              '" class="sb-autocomplete--photo">',
              '<span class="sb-autocomplete--photo"></span>',
              '<div class="',
              "sb_passion_highlight_wrapper smaller_theme ",
              '">\n                        <p class="sb_passion_highlight_inner">',
              "</strong>\n                        </p>\n                    </div>",
              '<span class="searchbox__region__subcity__item">',
              ",",
              '<span class="sb-autocomplete__badge sb-autocomplete__badge--popular">',
              "/private/search_top_50_badge/name",
              '<span class="airport-code">',
              '<span class="search_hl_name">',
              "&nbsp;(",
              ")",
              "&nbsp;•&nbsp;",
              '<span class="sb-autocomplete__bf-badge">',
              "<br>",
              ",&nbsp;",
              '<h4 class="bui-card__subtitle">',
              "/private/loc_character_number_range/name",
              "/private/loc_character_comma/name",
              "/private/groups_max_occupancy_people/name",
              "</h4>",
              '<span class="sb-autocomplete__item__extra">',
              '<span class="sb-autocomplete__item__highlight">',
              "<span>",
              "\n        \n        ",
              "\n            </a>\n        ",
              "\n        \n        </li>\n\t",
              "\n\n\t",
              '\n\t\t<li class="sb-autocomplete__google"></li>\n\t',
              "\n",
              "\n    ",
            ],
            b = [
              "total_index",
              "results",
              "lc",
              "section_title_class",
              "section_title_icon",
              "section_title",
              "fe_icon_revamp",
              "dest_type",
              "search_config",
              "group_config",
              "flags",
              "is_first_theme",
              "labels",
              "index",
              "value",
              "label",
              "date",
              "fe_sb_use_new_ski_icon",
              "photo_uri",
              "fe_xpi_show_flights",
              "flags_markup",
              "b_region_city_endorsements",
              "iata",
              "search_propertytype_destination",
              "property_in_label",
              "black_friday_item",
              "b_lang_is_rtl",
              "fe_occupancy",
              "additional_label",
              "fe_items_are_multiline",
              "label_blocks",
              "highlighted",
              "text",
              "label_highlighted",
              "is_powered_by_google",
            ];
          return _r_(function (c) {
            _i_("4ab:107b896e");
            var e = "",
              u = this.fn;
            return (
              (e = (function (e) {
                if ((_i_("4ab:9ed4a46a"), u.MD(b[1]))) {
                  (e += p[1]),
                    u.MN("index", 0),
                    (e += p[2]),
                    u.MN(
                      b[0],
                      u.F.entities(u.MI(u.array_length(u.MB(b[1]))) - u.MI(1))
                    ),
                    (e += p[2]);
                  var t = u.MC(b[1]) || [];
                  c.unshift(null);
                  for (var i = 1, n = t.length; i <= n; i++) {
                    if (
                      ((c[0] = t[i - 1]),
                      (e += p[3]),
                      u.MJ(u.MB(b[5])) &&
                        ((e += p[4]),
                        (e += p[5]),
                        u.MJ(/zh|xt|ja|ko/.test(u.MB(b[2]))) && (e += p[6]),
                        u.MD(b[3]) &&
                          (e += [u.F.entities(u.MC(b[3])), p[7]].join("")),
                        (e += p[8]),
                        u.MD(b[4]) && (e += [p[9], u.MC(b[4]), p[10]].join("")),
                        (e += [p[11], u.MC(b[5]), p[12]].join(""))),
                      (e += p[13]),
                      (e += p[14]),
                      u.MD(b[6]) && (e += p[15]),
                      u.MJ(/zh|xt|ja|ko/.test(u.MB(b[2]))) && (e += p[6]),
                      u.MJ(u.MB(b[7]) + "" == "airport")
                        ? (e += p[16])
                        : u.MJ(u.MB(b[7]) + "" == "city")
                        ? (e += p[17])
                        : u.MJ(u.MB(b[7]) + "" == "country")
                        ? (e += p[18])
                        : u.MJ(u.MB(b[7]) + "" == "district")
                        ? (e += p[19])
                        : u.MJ(u.MB(b[7]) + "" == "hotel")
                        ? (e += p[20])
                        : u.MJ(u.MB(b[7]) + "" == "landmark")
                        ? (e += p[21])
                        : u.MJ(u.MB(b[7]) + "" == "region")
                        ? (e += p[22])
                        : u.MJ(u.MB(b[7]) + "" == "theme")
                        ? (e += p[23])
                        : (e += p[18]),
                      u.MD(b[5]) && (e += p[24]),
                      u.MJ(u.MB(b[8])) && u.MJ(u.MB(b[9])) && (e += p[25]),
                      u.MJ(u.MB(b[10])) &&
                        u.MJ(u.MC(b[10]).is_region_city) &&
                        (e += p[26]),
                      u.MJ(u.MB(b[7]) + "" == "theme") &&
                        ((e += p[27]),
                        u.MD(b[11]) || ((e += p[28]), u.MN(b[11], p[29])),
                        (e += p[30])),
                      u.MJ(u.MB(b[10])) &&
                        u.MJ(u.MC(b[10]).tabbed) &&
                        (e += p[31]),
                      (u.MK(u.MB(b[12])) ||
                        u.MJ(1 == u.array_length(u.MB(b[12])))) &&
                        (e += p[32]),
                      (e += [
                        p[33],
                        u.MC(b[13]),
                        p[34],
                        u.F.entities(u.MC(b[14])),
                        p[35],
                      ].join("")),
                      u.MD(b[15]) &&
                        (e += [p[36], u.F.html(u.MC(b[15])), p[35]].join("")),
                      (e += p[37]),
                      u.MJ(u.MB(b[7]) + "" == "recent-search") &&
                        u.MJ(u.MB(b[16])) &&
                        (e += [
                          p[38],
                          u.F.entities((u.MC(b[16]) || {}).b_url),
                          p[39],
                        ].join("")),
                      (e += p[40]),
                      (e += p[41]),
                      u.MD(b[6])
                        ? ((e += p[41]),
                          u.MJ(u.MB(b[7]) + "" == "hotel")
                            ? (e += [
                                p[42],
                                (c.unshift({
                                  color: "#6B6B6B",
                                  height: p[43],
                                  name: p[44],
                                  width: p[43],
                                }),
                                (f = u.HELPER("icon", c[0])),
                                c.shift(),
                                f),
                                p[45],
                              ].join(""))
                            : u.MJ(u.MC(b[10]).ski_item) &&
                              u.MJ(u.MB(b[7]) + "" == "landmark")
                            ? ((e += p[42]),
                              u.MD(b[17])
                                ? (e += [
                                    p[41],
                                    (c.unshift({
                                      color: "#6B6B6B",
                                      height: p[43],
                                      name: p[46],
                                      width: p[43],
                                    }),
                                    (f = u.HELPER("icon", c[0])),
                                    c.shift(),
                                    f),
                                    p[41],
                                  ].join(""))
                                : (e += [
                                    p[41],
                                    (c.unshift({
                                      color: "#6B6B6B",
                                      height: p[43],
                                      name: p[47],
                                      width: p[43],
                                    }),
                                    (f = u.HELPER("icon", c[0])),
                                    c.shift(),
                                    f),
                                    p[41],
                                  ].join("")),
                              (e += p[45]))
                            : u.MJ(u.MB(b[7]) + "" == "landmark")
                            ? (e += [
                                p[42],
                                (c.unshift({
                                  color: "#6B6B6B",
                                  height: p[43],
                                  name: p[48],
                                  width: p[43],
                                }),
                                (f = u.HELPER("icon", c[0])),
                                c.shift(),
                                f),
                                p[45],
                              ].join(""))
                            : u.MJ(u.MB(b[7]) + "" == "airport")
                            ? (e += [
                                p[42],
                                (c.unshift({
                                  color: "#6B6B6B",
                                  height: p[43],
                                  name: p[49],
                                  width: p[43],
                                }),
                                (f = u.HELPER("icon", c[0])),
                                c.shift(),
                                f),
                                p[45],
                              ].join(""))
                            : u.MJ(u.MB(b[7]) + "" == "recent-search")
                            ? (e += [
                                p[42],
                                (c.unshift({
                                  color: "#6B6B6B",
                                  height: p[43],
                                  name: p[50],
                                  width: p[43],
                                }),
                                (f = u.HELPER("icon", c[0])),
                                c.shift(),
                                f),
                                p[45],
                              ].join(""))
                            : (e += [
                                p[42],
                                (c.unshift({
                                  color: "#6B6B6B",
                                  height: p[43],
                                  name: p[51],
                                  width: p[43],
                                }),
                                (f = u.HELPER("icon", c[0])),
                                c.shift(),
                                f),
                                p[45],
                              ].join("")))
                        : ((e += p[41]),
                          u.MJ(u.MG((u.MC(b[10]) || {}).ski_item_replace_image))
                            ? (e += [
                                p[52],
                                u.F.html(u.MC(b[15])),
                                p[53],
                                u.STATIC_HOSTNAME(
                                  "/static/img/ski/ski.png",
                                  0,
                                  0,
                                  0,
                                  0
                                ),
                                p[54],
                              ].join(""))
                            : u.MD(b[18])
                            ? (e += [
                                p[52],
                                u.F.html(u.MC(b[15])),
                                p[53],
                                u.STATIC_HOSTNAME(u.MB(b[18]), 0, 0, 0, 0),
                                p[54],
                              ].join(""))
                            : ((e += p[41]),
                              u.MK(u.MB(b[19])) && (e += p[55]),
                              (e += p[41]))),
                      (e += p[41]),
                      (e += p[41]),
                      u.MJ(u.MB(b[7]) + "" == "theme"))
                    )
                      (e += p[56]),
                        (e += p[57]),
                        (e += [p[58], u.F.entities(u.MC(b[15])), p[59]].join(
                          ""
                        ));
                    else {
                      e += p[41];
                      var a = "";
                      if (((a += p[41]), u.MD(b[21]))) {
                        a += p[41];
                        var s,
                          r = i,
                          o = t,
                          _ = n,
                          l = s;
                        for (
                          t = u.MC(b[21]) || [],
                            c.unshift({ endorsement: null }),
                            i = 1,
                            n = t.length;
                          i <= n;
                          i++
                        )
                          (c[0].endorsement = s = t[i - 1]),
                            (a += [p[60], u.F.entities(s)].join("")),
                            u.MJ(i != t.length) && (a += p[61]),
                            (a += p[45]);
                        c.shift(),
                          (i = r),
                          (t = o),
                          (n = _),
                          (s = l),
                          (a += p[41]);
                      }
                      if (
                        ((a += p[41]),
                        u.MJ(u.MC(b[10]).popular) &&
                          (a += [
                            p[62],
                            u.F.entities(u.ME(p[63], u.MB, u.MN, null)),
                            p[45],
                          ].join("")),
                        (a += p[41]),
                        u.MN(b[20], a),
                        (e += p[41]),
                        u.MJ(u.MB(b[22])) &&
                          u.MJ(u.MB(b[19])) &&
                          (e += [p[64], u.MC(b[22]), p[45]].join("")),
                        (e += p[41]),
                        u.MJ(u.MB(b[12])) && u.MJ(u.MB(b[29])))
                      ) {
                        (e += p[41]),
                          (a = ""),
                          (a += p[41]),
                          (r = i),
                          (o = t),
                          (_ = n);
                        var d,
                          h = d;
                        for (
                          t = u.MC(b[12]) || [],
                            c.unshift({ fe_ae_label: null }),
                            i = 1,
                            n = t.length;
                          i <= n;
                          i++
                        )
                          (c[0].fe_ae_label = d = t[i - 1]),
                            (a += p[41]),
                            u.MJ(1 == i)
                              ? ((a += [
                                  p[65],
                                  u.F.entities((d || {}).text),
                                  p[41],
                                ].join("")),
                                u.MJ(u.MG((d || {}).match)) &&
                                  (a += [
                                    p[66],
                                    u.F.entities((d || {}).match),
                                    p[67],
                                  ].join("")),
                                (a += p[41]),
                                u.MJ(u.MB(b[24])) &&
                                  ((a += p[68]),
                                  u.MD(b[25])
                                    ? (a += [p[69], u.MC(b[24]), p[45]].join(
                                        ""
                                      ))
                                    : (a += [p[41], u.MC(b[24]), p[41]].join(
                                        ""
                                      )),
                                  (a += p[41])),
                                (a += [p[45], u.MC(b[20]), p[70]].join("")))
                              : u.MK(u.MJ(d.type + "" == "state")) &&
                                ((a += p[41]),
                                u.MJ(2 < i) && (a += p[71]),
                                (a += p[41]),
                                u.MJ(u.MB(b[7]) + "" == "recent-search") &&
                                u.MJ(u.MB(b[16]))
                                  ? ((a += p[72]),
                                    u.MJ(u.MC(b[16]).b_checkin) &&
                                      u.MJ(u.MC(b[16]).b_checkout) &&
                                      ((a += p[41]),
                                      u.MD(b[26])
                                        ? (a += [
                                            p[41],
                                            u.DATE(
                                              u.MC(b[16]).b_checkin,
                                              "numeric_date_range",
                                              "",
                                              "",
                                              u.MC(b[16]).b_checkout
                                            ),
                                            p[41],
                                          ].join(""))
                                        : (a += [
                                            p[41],
                                            u.DATE(
                                              u.MC(b[16]).b_checkin,
                                              "short_date_without_year",
                                              "",
                                              "",
                                              ""
                                            ),
                                            p[41],
                                            u.ME(p[73], u.MB, u.MN, null),
                                            p[41],
                                            u.DATE(
                                              u.MC(b[16]).b_checkout,
                                              "short_date_without_year",
                                              "",
                                              "",
                                              ""
                                            ),
                                            p[41],
                                          ].join("")),
                                      (a += [
                                        p[41],
                                        u.ME(p[74], u.MB, u.MN, null),
                                        p[41],
                                      ].join(""))),
                                    (a += p[41]),
                                    u.MN(
                                      "fe_occupancy",
                                      u.MI(u.MC(b[16]).b_total_adults) +
                                        u.MI(u.MC(b[16]).b_total_children)
                                    ),
                                    (a += [
                                      p[41],
                                      (c.unshift({ num_people: u.MB(b[27]) }),
                                      (f = u.ME(
                                        p[75],
                                        u.MB,
                                        u.MN,
                                        u.MO(u.MC(b[27]), null, p[75])
                                      )),
                                      c.shift(),
                                      f),
                                      p[76],
                                    ].join("")))
                                  : (a += [
                                      p[41],
                                      u.F.entities((d || {}).text),
                                      p[41],
                                    ].join("")),
                                (a += p[41])),
                            (a += p[41]);
                        c.shift(),
                          (i = r),
                          (t = o),
                          (n = _),
                          (d = h),
                          (a += p[41]),
                          u.MD(b[28]) &&
                            (a += [p[77], u.MC(b[28]), p[45]].join("")),
                          (a += p[41]),
                          u.MN(b[23], a),
                          (e += p[41]);
                      } else {
                        if (
                          ((e += p[41]), (a = ""), (a += p[41]), u.MD(b[30]))
                        ) {
                          for (
                            a += p[41],
                              r = i,
                              o = t,
                              _ = n,
                              t = u.MC(b[30]) || [],
                              c.unshift(null),
                              i = 1,
                              n = t.length;
                            i <= n;
                            i++
                          )
                            (c[0] = t[i - 1]),
                              (a += p[41]),
                              u.MD(b[31]) && (a += p[78]),
                              (a += [
                                p[41],
                                u.F.entities(u.MC(b[32])),
                                p[41],
                              ].join("")),
                              u.MD(b[31]) && (a += p[45]),
                              (a += p[41]);
                          c.shift(), (i = r), (t = o), (n = _), (a += p[41]);
                        } else
                          u.MD(b[33])
                            ? (a += [p[41], u.MC(b[33]), p[41]].join(""))
                            : u.MD(b[15]) &&
                              (a += [
                                p[41],
                                u.F.entities(u.MC(b[15])),
                                p[41],
                              ].join(""));
                        (a += p[41]),
                          u.MD(b[28]) &&
                            (a += [
                              p[77],
                              u.F.entities(u.MC(b[28])),
                              p[45],
                            ].join("")),
                          (a += p[41]),
                          u.MN(b[23], a),
                          (e += p[41]);
                      }
                      (e += [p[79], u.MC(b[23]), p[45]].join("")),
                        (u.MJ(u.MB(b[12])) && u.MJ(u.MB(b[29]))) ||
                          (e += [p[41], u.MC(b[20]), p[41]].join("")),
                        (e += p[41]);
                    }
                    (e += p[41]),
                      u.MN("index", u.MI(u.MB(b[13])) + u.MI(1)),
                      (e += p[41]),
                      (e += p[80]),
                      u.MJ(u.MB(b[7]) + "" == "recent-search") &&
                        u.MJ(u.MB(b[16])) &&
                        (e += p[81]),
                      (e += p[82]);
                  }
                  c.shift(),
                    (e += p[83]),
                    u.MD(b[34]) && (e += p[84]),
                    (e += p[85]);
                }
                return (e += p[85]), _r_(e);
              })((e += p[0]))),
              (e += p[86]),
              _r_(e)
            );
          });
        })()
      ),
      booking.jstmpl(
        "search_destination_autocomplete_loading",
        (function () {
          _i_("4ab:82995877");
          var l = [
              "\n        ",
              '\n\n<ul class="c-autocomplete__list sb-autocomplete__list sb-autocomplete__list--loading">\n\t',
              '\n\t\t<li class="c-autocomplete__item sb-autocomplete__item sb-autocomplete__item--city">\n\t\t\t',
              '\n\t\t\t\t<span class="sb-autocomplete__item-placeholder-text js-placeholder-text"></span>\n\t\t\t',
              "\n\t\t</li>\n\t",
              "\n</ul>\n",
              "\n    ",
            ],
            d = ["fe_sb_autocomplete_loading_items"];
          return _r_(function (o) {
            _i_("4ab:d9585df0");
            var e = "",
              _ = this.fn;
            return (
              (e = (function (e) {
                _i_("4ab:2cc1f6cd"),
                  _.MN("fe_sb_autocomplete_loading_items", 5),
                  (e += l[1]);
                var t = _.seq(1, _.MB(d[0])) || [];
                o.unshift(null);
                for (var i = 1, n = t.length; i <= n; i++) {
                  (o[0] = t[i - 1]), (e += l[2]);
                  var a = i,
                    s = t,
                    r = n;
                  for (
                    t = _.seq(1, 3) || [], o.unshift(null), i = 1, n = t.length;
                    i <= n;
                    i++
                  )
                    (o[0] = t[i - 1]), (e += l[3]);
                  o.shift(), (i = a), (t = s), (n = r), (e += l[4]);
                }
                return o.shift(), _r_((e += l[5]));
              })((e += l[0]))),
              _r_((e += l[6]))
            );
          });
        })()
      );
    var a = e("jquery"),
      s = e("component/autocomplete-core"),
      n = e("search/searchbox/model"),
      r = e("search/searchbox/analytics"),
      o = e("search/searchbox/events");
    (i.exports = s.extend({
      init: function () {
        _i_("4ab:e263b5e8"),
          (this.optionsSpec = {
            delay: { name: "delay", type: Number, defaultValue: 300 },
            modelId: { name: "sb-id", type: String, required: !0 },
            filterDestType: { name: "filter-dest-type", type: String },
            gpf: { name: "gpf", type: Boolean },
            gpOnly: { name: "gp-only", type: Boolean },
            minLength: { name: "minlength", type: Number, defaultValue: 2 },
            focusOnLoad: { name: "focus-on-load", type: Boolean },
            focusOnTyping: { name: "focus-on-typing", type: Boolean },
            isSticky: { name: "is-sticky", type: Boolean },
            required: { name: "required", type: Boolean },
            isOrigin: { name: "origin", type: Boolean },
            collapseACSingleAirport: {
              name: "collapse-ac-single-airport",
              type: Boolean,
            },
            flags: { name: "flags", type: String, defaultValue: "" },
          }),
          a.extend(this.optionsSpec, this.extendOptions()),
          (this.$errors = this.$el.find("[data-error-id]")),
          (this.$clear = this.$el.find('[data-clear=""]')),
          (this.$searchbox = this.$el.closest(".sb-searchbox__outer")),
          (this.isA11yMessageReading = !1),
          this.$searchbox.length
            ? (this.$skiInput = this.$searchbox.find(
                'input[name="is_ski_area"]'
              ))
            : (this.$skiInput = a('form#frm input[name="is_ski_area"]')),
          this.$skiInput.length ||
            (this.$el.after(
              '<input type="hidden" name="is_ski_area" value="0">'
            ),
            (this.$skiInput = a('input[name="is_ski_area"]'))),
          s.prototype.init.apply(this, arguments),
          (this.model = n.getInstance(this.options.modelId)),
          (this.groupName = this.options.isOrigin ? "origin" : "destination"),
          this.model.use(this.groupName),
          this.model.use("dates"),
          this.model.updateFlags(this.options.flags),
          (this.inputUntouched = !0),
          this.model.on("change", this.modelChange.bind(this)),
          this.model.on("validation", this.modelValidation.bind(this)),
          (this.destinationModel = this.options.isOrigin
            ? this.model.origin
            : this.model.destination),
          this.options.isOrigin &&
            this.destinationModel.configure({ groupName: "origin" }),
          this.options.required &&
            this.destinationModel.configure({ validate: !0 }),
          this.options.gpOnly &&
            this.destinationModel.configurePredictions({ gpo: 1 }),
          this.options.gpf && this.destinationModel.configure({ gpf: 1 }),
          this.options.filterDestType &&
            this.destinationModel.configurePredictions({
              dest_type: this.options.filterDestType,
            }),
          this.options.focusOnLoad && this.focusOnLoad(),
          this.options.focusOnTyping &&
            this.options.isSticky &&
            (this.stickyController = e(
              "search/searchbox/searchbox-sticky-controller"
            ).getController()),
          this.options.focusOnTyping && this.enableFocusOnTyping(),
          this.$errors.filter(".-visible").length &&
            (this.destinationModel.valid = !1),
          (this.templateResults = B.jstmpl(
            "search_destination_autocomplete_results"
          )),
          this.toggleClear(),
          this.modelInit(),
          this.renderLoadingElement(),
          window.history &&
            window.history.replaceState &&
            -1 !==
              window.location.href.indexOf(
                "errorc_searchstring_not_found=ss"
              ) &&
            window.history.replaceState(
              null,
              document.title,
              window.location.href.replace(
                "errorc_searchstring_not_found=ss",
                ""
              )
            ),
          _r_();
      },
      addInputEventListeners: function () {
        _i_("4ab:24e521ff"),
          s.prototype.addInputEventListeners.apply(this, arguments),
          this.$clear.length &&
            this.$clear.on("click", this.clearClick.bind(this)),
          _r_();
      },
      renderLoadingElement: function () {
        _i_("4ab:cc2eea09"), (this.shouldShowLoadingState = !0);
        (this.$loading = a(
          B.jstmpl("search_destination_autocomplete_loading").render({})
        )),
          this.$loading.find(".js-placeholder-text").each(function () {
            _i_("4ab:c89d5b36"),
              a(this).width(65 + parseInt(65 * Math.random(), 10)),
              _r_();
          }),
          this.$loading.insertAfter(this.$list),
          _r_();
      },
      showLoading: function () {
        _i_("4ab:96c0c99b"),
          this.shouldShowLoadingState &&
            (s.prototype.listHide.apply(this),
            this.$loading.addClass("-visible")),
          _r_();
      },
      hideLoading: function () {
        _i_("4ab:57a3a0b0"),
          this.shouldShowLoadingState && this.$loading.removeClass("-visible"),
          _r_();
      },
      modelInit: function () {
        _i_("4ab:1c0c0ee5");
        var e = { ss: this.input.value };
        this.destinationModel.init(e), _r_();
      },
      modelChange: function (e) {
        if ((_i_("4ab:b5cbe522"), e && e.group && e.group == this.groupName)) {
          var t = this.destinationModel.get();
          t.ss == this.input.value ||
            this.isDeletion ||
            (t.ss_modified && B.env.fe_s_prprtyt
              ? this.setValue(t.ss_modified)
              : this.setValue(t.ss)),
            e.onlyCurrentCountry && (this.$input.focus(), this.autocomplete()),
            (this.inputUntouched = !1);
        }
        _r_();
      },
      modelValidation: function (e) {
        _i_("4ab:c7ade742"),
          e &&
            e.group == this.groupName &&
            (this.$errors.filter(".-visible").removeClass("-visible"),
            this.destinationModel.valid ||
              (this.$el.find("#destination__error").addClass("-visible"),
              this.$errors
                .filter(
                  '[data-error-id="' +
                    this.destinationModel.validationError +
                    '"]'
                )
                .addClass("-visible"),
              r.send(
                "[error] destination: " + this.destinationModel.validationError
              ))),
          _r_();
      },
      inputClick: function () {
        _i_("4ab:956c29e8"),
          ("" === this.input.value || this.inputUntouched) &&
          this.model.getFlag("with_recent_search")
            ? this.showRecentSearchSuggestions()
            : ("" === this.input.value || this.inputUntouched) &&
              this.model.getFlag("on_click_suggestions")
            ? this.showSuggestions()
            : "" === this.input.value &&
              (this.model.getFlag("with_popular_nearby_suggestions") ||
                this.model.getFlag(
                  "sr_with_popular_destinations_suggestions"
                )) &&
              this.showPopularNearbySuggestions(),
          s.prototype.inputClick.apply(this, arguments),
          _r_();
      },
      inputInput: function () {
        _i_("4ab:3ce47b6a"), this.isVisibleCalendar() && this.hideCalendar();
        var e = this.input.value;
        this.destinationModel.setSearchString(e),
          (this.inputUntouched = !1),
          (this.metaMatchesOptionIsActive = !1),
          s.prototype.inputInput.apply(this, arguments),
          _r_();
      },
      inputKeyUp: function (e) {
        _i_("4ab:3219e728"),
          s.prototype.inputKeyUp.apply(this, arguments),
          _r_();
      },
      inputBlur: function () {
        _i_("4ab:1cb9e383"),
          clearTimeout(this.timer),
          this.destinationModel.abortPredictions(),
          this.hideLoading();
        var e = this.destinationModel.get().ss_raw;
        if (e) {
          var t = e.split(/\s+/).length;
          r.sendOnce("[interaction] autocomplete tokens typed [" + t + "]");
        }
        0 === this.input.value.length &&
          this.model.getFlag("clear_input_on_click") &&
          this.input.value !== this.$input.data("cached-value") &&
          (this.input.value = this.$input.data("cached-value") || ""),
          this.metaMatchesOptionIsActive &&
            this.metaMatchesOptionValue &&
            this.setValue(this.metaMatchesOptionValue),
          s.prototype.inputBlur.apply(this, arguments),
          (this.suggestionsLocked = !1),
          _r_();
      },
      inputFocus: function () {
        return (
          _i_("4ab:e2028d97"),
          this.metaMatchesOptionIsActive &&
            ((this.metaMatchesOptionValue = this.input.value),
            this.setValue(this.metaMatchesOptionValue.split("•").join(""))),
          _r_(s.prototype.inputFocus.apply(this, arguments))
        );
      },
      inputEnter: function (e) {
        _i_("4ab:4cf5fa63"),
          r.send("[interaction] search input pressed enter"),
          s.prototype.inputEnter.apply(this, arguments),
          _r_();
      },
      onAutocompleteSearchStart: function () {
        _i_("4ab:93941720"), o.emit(o.SEARCHBOX_AUTOCOMPLETE_TRIGGERED), _r_();
      },
      clearClick: function (e) {
        _i_("4ab:282114ce"),
          e.preventDefault(),
          this.reset({ hard: !0 }),
          this.input.focus(),
          this.model.getFlag("with_recent_search") &&
            this.showRecentSearchSuggestions(),
          _r_();
      },
      setValue: function (e) {
        _i_("4ab:121e7d07"),
          s.prototype.setValue.apply(this, arguments),
          this.toggleClear(),
          _r_();
      },
      toggleClear: function () {
        _i_("4ab:514e2251"),
          this.$clear.length &&
            this.$clear.toggleClass("-visible", "" !== this.input.value),
          _r_();
      },
      listShow: function () {
        _i_("4ab:f49b3588"),
          this.results &&
          this.results.filter(function (e) {
            return (
              _i_("4ab:13bfde30"),
              _r_(e.photo_uri || e.isPopularNearby || e.isRecentSearch)
            );
          }).length
            ? this.$list.addClass("sb-autocomplete__list-with_photos")
            : this.$list.removeClass("sb-autocomplete__list-with_photos"),
          0 < this.items.length &&
          this.input.value.length >= this.options.minLength
            ? s.prototype.listShow.apply(this, arguments)
            : 0 < this.items.length &&
              (this.model.getFlag("on_click_suggestions") ||
                this.model.getFlag("with_recent_search") ||
                this.model.getFlag("with_popular_nearby_suggestions") ||
                this.model.getFlag(
                  "sr_with_popular_destinations_suggestions"
                )) &&
              s.prototype.listShow.apply(this, arguments),
          _r_();
      },
      autocomplete: function (e) {
        _i_("4ab:f77e05de"),
          (e = e || {}),
          this.highlightReset({ preserveInputValue: !0 }),
          clearTimeout(this.timer),
          this.destinationModel.abortPredictions(),
          this.hideLoading(),
          this.toggleClear(),
          e.fromFocus ||
            (this.isDeletion
              ? this.destinationModel.reset()
              : this.postAutocomplete(),
            this.input.value.length >= this.options.minLength &&
              (this._loading = !0),
            (this.timer = setTimeout(
              function () {
                _i_("4ab:a9af8f9c"),
                  this.input.value.length >= this.options.minLength &&
                    (this.showLoading(),
                    this.destinationModel.getPredictions(
                      this.query(),
                      this.render.bind(this)
                    ),
                    this.onAutocompleteSearchStart()),
                  _r_();
              }.bind(this),
              this.options.delay
            ))),
          _r_();
      },
      query: function () {
        return _i_("4ab:2a33cf36"), _r_(this.input.value);
      },
      extendOptions: function () {
        return _i_("4ab:306d554b"), _r_({});
      },
      render: function (e, t) {
        _i_("4ab:a6930317"),
          (this.results = []),
          (this.items = []),
          (this.$items = a({})),
          (this.on_click_suggestion = !1),
          this.hideLoading(),
          !e &&
            this.model.getFlag("on_click_suggestions_track") &&
            t.on_click_suggestion &&
            (this.on_click_suggestion = !0),
          (this._loading = !1),
          !e ||
            ("service-booking-no-results" != e.toString() &&
              -1 === e.toString().indexOf("ZERO_RESULTS")) ||
            r.send("[context] autocomplete zero results search"),
          !e && Array.isArray(t.results)
            ? (r.send(
                "[context] autocomplete suggestions [" + t.results.length + "]"
              ),
              t.is_powered_by_google &&
                r.send("[context] autocomplete google place search"),
              B.env.fe_s_prprtyt &&
                t.results.map(function (e) {
                  _i_("4ab:69cfb297");
                  var t = e.meta_matches;
                  if (t && 0 < t.length) {
                    var i = !1;
                    (e.property_in_label = e.meta_matches
                      .map(function (e) {
                        return (
                          _i_("4ab:3cab0d47"),
                          "blackfriday19_deals_upsorter" === e.id && (i = !0),
                          _r_(e.text)
                        );
                      })
                      .join(" • ")),
                      (e.black_friday_item = i),
                      (e.property_in_id = e.meta_matches[0].id),
                      (e.isMetaMatchesItem = !0);
                  }
                  e.flags &&
                    "landmark" === e.dest_type &&
                    e.flags.ski_item &&
                    !e.property_in_label &&
                    ((e.fe_valueWithoutPropertyType = !0),
                    (e.property_in_label = B.jstmpl.translations(
                      "ski_autocomplete_ski_resort"
                    )),
                    (e.property_in_id = e.id)),
                    _r_();
                }),
              (this.results = t.results),
              B.env.rtl && (t.is_rtl = !0),
              this.model.getFlag("region_second_line") &&
                (t.fe_items_are_multiline = !0),
              this.model.getFlag("icon_revamp") && (t.fe_icon_revamp = !0),
              B.env.fe_sb_use_new_ski_icon && (t.fe_sb_use_new_ski_icon = !0),
              this.options.collapseACSingleAirport &&
                2 == t.results.length &&
                "city" === t.results[0].dest_type &&
                "airport" === t.results[1].dest_type &&
                t.results[1].flags &&
                t.results[1].flags.tabbed &&
                ((t.results[1].flags.tabbed = 0), t.results.shift()),
              (this.items = t.results
                .filter(function (e) {
                  return _i_("4ab:ac61c77f"), _r_(!!e.label);
                })
                .map(function (e) {
                  if (
                    (_i_("4ab:36887c13"),
                    e.property_in_label &&
                      !e.fe_valueWithoutPropertyType &&
                      B.env.fe_s_prprtyt)
                  ) {
                    var t = "";
                    return (
                      (t =
                        e.isMetaMatchesItem && e.labels && e.labels[0]
                          ? e.labels[0].text + " • " + e.property_in_label
                          : B.jstmpl.translations(
                              "ss_search_box_search_property_type",
                              null,
                              {
                                property_type: e.property_in_label,
                                destination: e.ss,
                              }
                            )),
                      _r_({
                        value: e.label,
                        valueLowerCase: e.label.toLowerCase(),
                        valueWithPropertyType: t,
                      })
                    );
                  }
                  return _r_({
                    value: e.label,
                    valueLowerCase: e.label.toLowerCase(),
                  });
                })),
              this.$list.html(this.templateResults.render(t)),
              (this.$items = this.$list.find('[data-list-item=""]')),
              this.model.getFlag("a11yinput") && this.a11yAnnounceResults(t))
            : e ||
              (this.$list.html(this.templateResults.render(t)),
              this.model.getFlag("a11yinput") && this.a11yAnnounceResults(t)),
          this.postAutocomplete(),
          setTimeout(
            function () {
              _i_("4ab:2f456915"),
                this.$items.each(function () {
                  _i_("4ab:00324166"),
                    this.scrollWidth > this.offsetWidth &&
                      this.setAttribute(
                        "data-title",
                        this.getAttribute("data-label")
                      ),
                    _r_();
                }),
                _r_();
            }.bind(this),
            500
          ),
          _r_();
      },
      a11yAnnounceResults: function (e) {
        if (
          (_i_("4ab:ed896d16"),
          Array.isArray(e.results) &&
            0 < e.results.length &&
            !this.isA11yMessageReading)
        ) {
          this.isA11yMessageReading = !0;
          var t = setTimeout(
            function () {
              _i_("4ab:f93d45a5"),
                this.$el.find(".sb-a11y-announcement").show(),
                this.$el
                  .find(".sb-a11y-announcement")
                  .html(
                    "<p>" +
                      B.jstmpl.translations(
                        "a11y_index_autocomplete_suggested_destinations"
                      ) +
                      "</p>"
                  ),
                setTimeout(
                  function () {
                    _i_("4ab:444f6be7"),
                      this.$el.find(".sb-a11y-announcement").html(""),
                      this.$el.find(".sb-a11y-announcement").hide(),
                      clearTimeout(t),
                      (this.isA11yMessageReading = !1),
                      _r_();
                  }.bind(this),
                  500
                ),
                _r_();
            }.bind(this),
            900
          );
        }
        _r_();
      },
      postAutocomplete: function () {
        _i_("4ab:4fadc203"),
          s.prototype.postAutocomplete.apply(this, arguments),
          this.a11yAnnounceResults(this),
          _r_();
      },
      choose: function (e) {
        _i_("4ab:b1193676"),
          r.send("[interaction] autocomplete click position [" + e + "]"),
          r.send(
            "[interaction] autocomplete click [" +
              this.results[e].dest_type +
              "]"
          ),
          clearTimeout(this.timer),
          this.destinationModel.abortPredictions();
        var t = this.results[e];
        (this.metaMatchesOptionIsActive = t.isMetaMatchesItem),
          this.destinationModel.set(this.results[e]),
          s.prototype.choose.apply(this, arguments);
        var i = this.results[e];
        B.env.fe_s_prprtyt &&
          (a(".property_in_filter").remove(),
          i.property_in_id &&
            a("form.sb-searchbox").append(
              '<input class="property_in_filter" type="hidden" name="order_ht_id" value="' +
                i.property_in_id +
                '">'
            )),
          i.flags &&
            i.flags.deals &&
            this.$el.after(
              "<input type='hidden' name='em_ac_deal_option_clicked' value='1'>"
            ),
          this.$skiInput &&
            this.$skiInput.length &&
            this.$skiInput.val(i.flags && i.flags.ski_item),
          B.et.goal("autocomplete_option_selected"),
          "theme" == this.results[e].dest_type
            ? B.et.goal("autocomplete_option_selected_theme")
            : "hotel" == this.results[e].dest_type
            ? B.et.goal("autocomplete_option_selected_hotel")
            : this.results[e].place_id
            ? B.et.goal("autocomplete_option_selected_google_places")
            : "query_finder" == this.results[e].result_type ||
              B.et.goal("autocomplete_option_selected_destination"),
          this.results[e].place_id ||
            B.et.goal("autocomplete_option_selected_brick"),
          "anywhere" == this.results[e].dest_type
            ? this.model.setFields("drec_traffic", [
                { name: "dr_source", value: "sb_anywhere" },
              ])
            : this.model.setFields("drec_traffic", []),
          this.model.emit("change", { group: "" }),
          "index" === B.env.b_action &&
            "www" === B.env.b_site_type &&
            "booking-home" === B.env.b_landingpage_theme &&
            (this.model.setFields("upsort_homes", [
              { name: "order", value: "upsort_bh" },
            ]),
            this.model.emit("change", { group: "" }));
        if (-1 !== ["landmark", "airport", "district"].indexOf(i.dest_type)) {
          this.locationSelected = !0;
          var n = [];
          (this.model.getFlag("open_location_in_map") ||
            this.model.getFlag("open_location_in_map_checkbox")) &&
            (this.model.getFlag("open_location_in_map") &&
              n.push({ name: "map", value: 1 }),
            this.model.getFlag("open_location_in_map_checkbox") &&
              a(".sb-searchbox__map_trigger input").prop("checked", "checked"),
            a(".sb-searchbox__map_trigger").removeClass("g-hidden"),
            this.destinationModel.setTrackingFields("map_trigger", n));
        } else
          (this.model.getFlag("open_location_in_map") ||
            this.model.getFlag("open_location_in_map_checkbox")) &&
            (a(".sb-searchbox__map_trigger").addClass("g-hidden"),
            this.model.getFlag("open_location_in_map_checkbox") &&
              a(".sb-searchbox__map_trigger input").prop("checked", null),
            this.destinationModel.setTrackingFields("map_trigger", []));
        this.model.getFlag("can_show_sb_entire_place_checkbox") &&
          (i.b_show_entire_homes_checkbox
            ? a(".js-sb-entire-place-checkbox").removeClass("g-hidden")
            : a(".js-sb-entire-place-checkbox")
                .addClass("g-hidden")
                .find('input[name="sb_entire_place"]')
                .prop("checked", !1)
                .removeAttr("checked")),
          ("theme" != this.results[e].dest_type &&
            "theme_dest" != this.results[e].result_type) ||
            this.model.submit(),
          o.emit(o.SEARCHBOX_DESTINATION_SELECTED, { destination: i }),
          this.showCalendarOnDesinationChange(),
          _r_();
      },
      showCalendarOnDesinationChange: function () {
        if (
          (_i_("4ab:b4b21470"),
          !this.model.getFlag("calendar_on_destination_change") ||
            this.model.dates.get().checkin)
        )
          return _r_();
        this.showCalendar(), _r_();
      },
      showCalendar: function () {
        _i_("4ab:16fca7ef"),
          setTimeout(
            function () {
              _i_("4ab:0cdca124"),
                this.$searchbox.find(".xp__date-time:first").trigger("click"),
                _r_();
            }.bind(this)
          ),
          _r_();
      },
      hideCalendar: function () {
        _i_("4ab:e21627eb"),
          setTimeout(
            function () {
              _i_("4ab:bea99b4c"),
                this.$searchbox.find(".c2-wrapper-s-checkin").trigger("hide"),
                this.$searchbox.find(".c2-wrapper-s-checkout").trigger("hide"),
                _r_();
            }.bind(this)
          ),
          _r_();
      },
      isVisibleCalendar: function () {
        return (
          _i_("4ab:431de88e"),
          _r_(this.$searchbox.find(".c2-calendar").is(":visible"))
        );
      },
      showSuggestions: function () {
        if ((_i_("4ab:443fd77a"), this.suggestionsLocked)) return _r_();
        this.destinationModel.getSuggestions(this.render.bind(this)),
          (this.suggestionsLocked = !0),
          _r_();
      },
      showPopularNearbySuggestions: function () {
        if ((_i_("4ab:53d535d8"), this.suggestionsLocked)) return _r_();
        var e = this.model.popularNearby.getPopularNearbySuggestions();
        e &&
          e.length &&
          (this.render(null, {
            results: this.model.popularNearby.getPopularNearbySuggestions(),
          }),
          (this.suggestionsLocked = !0)),
          _r_();
      },
      showRecentSearchSuggestions: function () {
        if ((_i_("4ab:23b4c269"), this.suggestionsLocked)) return _r_();
        var e = this.model.recentSearch.getRecentSearchSuggestions();
        e &&
          e.length &&
          (this.render(null, {
            results: this.model.recentSearch.getRecentSearchSuggestions(),
          }),
          (this.suggestionsLocked = !0)),
          _r_();
      },
      focusOnLoad: function () {
        _i_("4ab:ce00b1fb"),
          a(document).ready(
            function () {
              _i_("4ab:49e84ab1"), this.input.focus(), _r_();
            }.bind(this)
          ),
          _r_();
      },
      enableFocusOnTyping: function () {
        _i_("4ab:6e04453b");
        var e = a(document),
          t = this.onKeyDown.bind(this);
        e.on("keydown.autofocus", t),
          this.$input
            .on(
              "blur",
              function () {
                _i_("4ab:4a28701a"), e.on("keydown.autofocus", t), _r_();
              }.bind(this)
            )
            .on(
              "focus",
              function () {
                _i_("4ab:9df4e392"), e.off("keydown.autofocus", t), _r_();
              }.bind(this)
            ),
          _r_();
      },
      onKeyDown: function (e) {
        if ((_i_("4ab:25a5d610"), B.env.copy_editor_enabled)) return _r_();
        var t = this.$input.offset().top,
          i = e.keyCode,
          n = e.metaKey || e.ctrlKey;
        !((47 < i && i < 58) || (64 < i && i < 91) || (95 < i && i < 112)) ||
          n ||
          !document.activeElement ||
          /INPUT|TEXTAREA|SELECT/.test(document.activeElement.nodeName) ||
          a(".modal-mask:visible").length ||
          (this.options.isSticky && this.stickyController
            ? this.stickyController.show()
            : window.scrollY > t &&
              a("html, body").animate({ scrollTop: t - 5 }),
          this.input.value && this.setValue(""),
          this.$input.focus(),
          this.$input.trigger("focus_destionation_whilie_typing")),
          _r_();
      },
      reset: function () {
        _i_("4ab:f34c1d07"),
          this.selectedValue || this.destinationModel.reset(),
          s.prototype.reset.apply(this, arguments),
          _r_();
      },
      inputBlurSync: function () {
        _i_("4ab:cc183c13"),
          s.prototype.inputBlurSync.apply(this, arguments),
          _r_();
      },
      clickOut: function () {
        _i_("4ab:3f94e649"), s.prototype.clickOut.apply(this, arguments), _r_();
      },
    })),
      _r_();
  }),
  B.define("search/destination/model", function (e, t, i) {
    "use strict";
    _i_("4ab:3a3a802c");
    var n = e("search/destination/service"),
      a = e("browser-storage-handler"),
      s = e("server-data");
    function r(e) {
      _i_("4ab:0f458048"),
        (this.model = e),
        (this.data = { ss: "" }),
        (this.valid = !0),
        (this.validationError = ""),
        (this.options = { groupName: "destination" }),
        (this.predicitonParameters = {}),
        (this.searchInstance = null),
        (this.skipValidation = !1),
        (this.suggestionsCache = { results: [] }),
        (this.ac = { selected: !1, dataset: [] }),
        _r_();
    }
    $.extend(r.prototype, {
      init: function (e) {
        _i_("4ab:3ff1f2ec"), (this.data = e);
        var t = {};
        this.model &&
          this.model.getFlag &&
          (this.model.getFlag("on_click_suggestions") ||
            this.model.getFlag("on_click_suggestions_anywhere")) &&
          (this.model.getFlag("on_click_suggestions_anywhere") &&
            (t.anywhere = !0),
          s.b_ac_search_history &&
            this.model.getFlag("on_click_suggestions") &&
            (t.searchHistory = !0),
          this.model.use("group"),
          this.model.on(
            "init",
            function (e) {
              _i_("4ab:46d69989"),
                "group" === e.group && this.fetchSuggestions(t),
                _r_();
            }.bind(this)
          )),
          this.model &&
            this.model.getFlag &&
            this.model.getFlag("with_recent_search") &&
            (this.model.use("recentSearch"),
            (this.suggestionsCache &&
              this.suggestionsCache.results &&
              this.suggestionsCache.results.length) ||
              (this.suggestionsCache = {
                results: this.model.recentSearch.getRecentSearchSuggestions(),
              })),
          this.model &&
            this.model.getFlag &&
            (this.model.getFlag("with_popular_nearby_suggestions") ||
              this.model.getFlag("sr_with_popular_destinations_suggestions")) &&
            (this.model.use("popularNearby"),
            (this.suggestionsCache &&
              this.suggestionsCache.results &&
              this.suggestionsCache.results.length) ||
              (this.suggestionsCache = {
                results: this.model.popularNearby.getPopularNearbySuggestions(),
              })),
          this.emit("init"),
          _r_();
      },
      configure: function (e, t) {
        _i_("4ab:66d50a77"),
          void 0 !== t
            ? (this.options[e] = t)
            : "object" == typeof e && $.extend(this.options, e),
          _r_();
      },
      getOption: function (e) {
        return _i_("4ab:07c3d404"), _r_(this.options[e]);
      },
      get: function () {
        return _i_("4ab:867e130f"), _r_(this.data);
      },
      set: function (i) {
        if (
          (_i_("4ab:5c9c4913"),
          a.isLocalStorageSupported() &&
            i.dest_id &&
            i.dest_id !== a.getSessionValue("prev_destination_id"))
        ) {
          var e = JSON.stringify(i);
          a.addSessionValue("prev_destination_id", i.dest_id, !1),
            a.addSessionValue("prev_destination_data", e, !1);
        }
        if (
          ((this.ac.selected = !0),
          this.searchInstance &&
            this.searchInstance.getResultDetails &&
            !i._details)
        )
          return (
            this.searchInstance.getResultDetails(
              i,
              function (e, t) {
                _i_("4ab:871dc490"),
                  ((t = t || {})._details = !0),
                  this.set(t),
                  window.ga &&
                    window.ga(
                      "send",
                      "event",
                      "ac_google_places",
                      [i.place_types || "unknown", i.name].join("|"),
                      this.data.ss_raw,
                      i.position
                    ),
                  _r_();
              }.bind(this)
            ),
            _r_()
          );
        (this.data.ss = i.ss),
          (this.data.dest_id = i.dest_id),
          (this.data.dest_type = i.dest_type),
          (this.data.city = i.city),
          (this.data.iata = i.iata),
          i.property_in_label &&
            B.env.fe_s_prprtyt &&
            (i.isMetaMatchesItem && i.labels && i.labels[0]
              ? (this.data.ss_modified =
                  i.labels[0].text + " • " + i.property_in_label)
              : (this.data.ss_modified = B.jstmpl.translations(
                  "ss_search_box_search_property_type",
                  null,
                  { property_type: i.property_in_label, destination: i.ss }
                ))),
          (this.data.ac_flags = {}),
          (this.data.max_los_data = i.b_max_los_data || {}),
          i.nr_hotels && (this.data.nr_hotels = i.nr_hotels),
          (this.data.acc_type_id = i.acc_type_id),
          i.place_id && i.latitude && i.longitude
            ? ((this.data.place_id = i.place_id),
              (this.data.latitude = i.latitude),
              (this.data.longitude = i.longitude),
              (this.data.place_types = i.place_types))
            : (i.dest_id && i.latitude && i.longitude
                ? ((this.data.place_id = ""),
                  (this.data.latitude = i.latitude),
                  (this.data.longitude = i.longitude))
                : ((this.data.place_id = ""),
                  (this.data.latitude = ""),
                  (this.data.longitude = "")),
              (this.data.place_types = null)),
          i._fa && this.model.setFormAction(i._fa),
          (i._ef = i._ef || []),
          this.data.dest_id &&
            i._ef.push({ name: "dest_id", value: this.data.dest_id }),
          this.data.dest_type &&
            i._ef.push({ name: "dest_type", value: this.data.dest_type }),
          this.data.iata && i._ef.push({ name: "iata", value: this.data.iata }),
          this.data.place_id &&
            i._ef.push({ name: "place_id", value: this.data.place_id }),
          this.data.latitude &&
            i._ef.push({ name: "place_id_lat", value: this.data.latitude }),
          this.data.longitude &&
            i._ef.push({ name: "place_id_lon", value: this.data.longitude }),
          this.data.place_types &&
            Array.isArray(this.data.place_types) &&
            i._ef.push({
              name: "place_types",
              value: this.data.place_types.join(","),
            }),
          i.exp_tags && i._ef.push({ name: "ettar", value: i.exp_tags }),
          i._ef.push({ name: "search_pageview_id", value: s.pageview_id }),
          i._ef.push({ name: "search_selected", value: "true" }),
          "rentalcars" === i.type &&
            ((this.data.type = "rentalcars"),
            (this.data.placeKey = i.placeKey),
            (this.data.rentalcarsItem = i),
            "origin" === this.options.groupName
              ? this.model.setFields("rentalcars", i.fields.puFields)
              : this.model.setFields("rentalcarsDrop", i.fields.doFields)),
          i.region_type &&
            i._ef.push({ name: "region_type", value: i.region_type }),
          this.model.setFields("destinationNotSelected", []),
          this.model.setFields("destinationSelected", i._ef),
          this.emit("change"),
          _r_();
      },
      setSearchString: function (e) {
        _i_("4ab:1e7de1f8"),
          (this.data.ss = e),
          (this.data.ss_raw = e),
          "rentalcars" === this.model.getMode() ||
            this.valid ||
            this.validate(),
          _r_();
      },
      reset: function () {
        _i_("4ab:025738e6"),
          (this.data.dest_id = null),
          (this.data.dest_type = null),
          (this.data.iata = null),
          (this.data.place_id = null),
          (this.data.latitude = null),
          (this.data.longitude = null),
          this.model.setFormAction(null),
          this.model.setFields(this.options.groupName, []),
          this.model.setFields("destinationNotSelected", []),
          this.model.setFields("destinationSelected", [
            { name: "dest_id", value: "" },
            { name: "dest_type", value: "" },
            { name: "search_pageview_id", value: s.pageview_id },
            { name: "search_selected", value: "false" },
          ]),
          "rentalcars" == this.data.type &&
            ((this.ac.selected = !1),
            (this.data.type = null),
            (this.data.placeKey = null),
            (this.data.rentalcarsItem = null),
            "origin" == this.options.groupName
              ? this.model.setFields("rentalcars", [])
              : this.model.setFields("rentalcarsDrop", [])),
          this.emit("change"),
          _r_();
      },
      setTrackingFields: function (e, t) {
        _i_("4ab:5cc022f5"),
          this.model.setFields(e, t),
          this.emit("change"),
          _r_();
      },
      validate: function () {
        _i_("4ab:9d1aa602");
        var e = !0,
          t = "";
        if (!this.options.validate)
          return (this.valid = e), (this.validationError = t), _r_(e);
        return (
          "rentalcars" === this.model.getMode()
            ? ((this.ac.selected && "" !== this.data.ss) ||
                ((e = !1), (t = "search-string-empty")),
              (e && this.valid === e) ||
                ((this.valid = e),
                (this.validationError = t),
                this.emit("validation")))
            : ("" === this.data.ss && ((e = !1), (t = "search-string-empty")),
              this.valid !== e &&
                ((this.valid = e),
                (this.validationError = t),
                this.emit("validation"))),
          _r_(e)
        );
      },
      initPredictions: function () {
        (_i_("4ab:755389c7"), this.options.gpf) &&
          B.require("search/destination/service-atlas").init();
        _r_();
      },
      configurePredictions: function (e) {
        _i_("4ab:2393882a"), $.extend(this.predicitonParameters, e), _r_();
      },
      getPredictions: function (e, a) {
        _i_("4ab:f03551e7");
        var t = $.extend(
          {},
          s.search_autocomplete_params,
          this.predicitonParameters
        );
        this.searchInstance && this.searchInstance.abort(),
          (this.ac = { selected: !1, dataset: [] }),
          (t.ss = e),
          (t.gpf = this.options.gpf),
          this.options.onlyCurrentCountry &&
            ((t.e_acf_i = s.b_country_id), (t.e_acf_t = "country")),
          "rentalcars" == this.model.getMode() && (t.bgo = 1),
          (this.searchInstance = n.search(
            t,
            function (e, i) {
              _i_("4ab:090c5577");
              var n = arguments;
              if (i) {
                if (
                  (this.model.setFields(this.options.groupName, i._ef),
                  this.model.setFields("destinationNotSelected", i._efd),
                  this.searchInstance &&
                    this.searchInstance.getResultDetails &&
                    i.results &&
                    i.results[0] &&
                    !i.results[0]._details)
                )
                  return (
                    this.searchInstance.getResultDetails(
                      i.results[0],
                      function (e, t) {
                        _i_("4ab:6b74c459"),
                          e ||
                            ((this.ac.dataset = i.results),
                            (this.ac.dataset[0] = t),
                            (this.ac.dataset[0]._details = !0)),
                          a.apply(null, n),
                          _r_();
                      }.bind(this)
                    ),
                    _r_()
                  );
                this.ac.dataset = i.results;
              }
              a.apply(null, n), _r_();
            }.bind(this)
          )),
          this.model.setFields("destinationOriginal", [
            { name: "ss_raw", value: t.ss },
          ]),
          this.model.setFields("destinationSelected", [
            { name: "search_pageview_id", value: s.pageview_id },
          ]),
          _r_();
      },
      abortPredictions: function () {
        _i_("4ab:91e757d7"),
          this.searchInstance && this.searchInstance.abort(),
          _r_();
      },
      getSuggestions: function (e, t) {
        if ((_i_("4ab:6ff8b2a0"), this.suggestionsCache.results.length))
          return (
            setTimeout(
              function () {
                _i_("4ab:3c4c885b"), e(null, this.suggestionsCache), _r_();
              }.bind(this),
              0
            ),
            _r_()
          );
        this.model.one(
          "destination:suggestions",
          function () {
            _i_("4ab:19d47861"),
              this.suggestionsCache.results.length &&
                e(null, this.suggestionsCache),
              _r_();
          }.bind(this)
        ),
          _r_();
      },
      fetchSuggestions: function (e) {
        if ((_i_("4ab:78d48089"), this.suggestionsLoading)) return _r_();
        var t = B.require("search/destination/service-booking");
        (this.suggestionsInstance = t.getSuggestions(
          function (e, t) {
            if ((_i_("4ab:f6a6f946"), !e && t && t.results)) {
              t.on_click_suggestion = 0 < t.results.length;
              for (var i = 0; i < t.results.length; i++)
                !t.results[i].ss &&
                  t.results[i].label &&
                  (t.results[i].ss = t.results[i].label);
              this.suggestionsCache = t;
            }
            (this.suggestionsLoading = !1),
              this.emit("destination:suggestions"),
              _r_();
          }.bind(this),
          e
        )),
          (this.suggestionsLoading = !0),
          _r_();
      },
      initOnlyCurrentCountry: function (e) {
        _i_("4ab:1447d160"), (this.options.onlyCurrentCountry = !!e), _r_();
      },
      getOnlyCurrentCountry: function () {
        return _i_("4ab:784bf933"), _r_(!!this.options.onlyCurrentCountry);
      },
      setOnlyCurrentCountry: function (e) {
        _i_("4ab:0d6609ed"),
          (this.options.onlyCurrentCountry = !!e),
          this.emit("change", { onlyCurrentCountry: !0 }),
          _r_();
      },
      emit: function (e, t) {
        _i_("4ab:7ff501a3"),
          (t = t || {}),
          this.model.emit(e, $.extend(t, { group: this.options.groupName })),
          _r_();
      },
      parseMltRecommendations: function (e) {
        return (
          _i_("4ab:a991c3a5"),
          e &&
            e.length &&
            e.forEach(function (e) {
              _i_("4ab:c2deb740"),
                (e.ss = e.label),
                (e.dest_id = e.b_ufi),
                (e.dest_type = "city"),
                (e.photo_uri = e.picture_city ? e.picture_city : e.b_image_url),
                (e.mlt_recommendation = 1),
                _r_();
            }),
          _r_(e)
        );
      },
    }),
      (i.exports = r),
      _r_();
  }),
  B.define("search/destination/service", function (i, e, t) {
    "use strict";
    _i_("4ab:d520dd12");
    var n = i("search/destination/service-booking"),
      a = i("search/destination/service-carrier");
    function s(e, t, a) {
      var i, n, s;
      _i_("4ab:b198d1c5");
      var r = [],
        o = [],
        _ = [],
        l = 0;
      B.env.fe_m_sb_index_track_goals &&
        B.et.goalWithValue("js_mobile_index_sb_address_search_started", 1);
      var d = function (e, t, i) {
        if (
          (_i_("4ab:bd577c95"),
          l++,
          r.length && (t ? o.push(t) : (_[e] = i), l == r.length))
        )
          if (o.length == r.length)
            a.call(null, o[0], null),
              B.env.fe_m_sb_index_track_goals &&
                B.et.goalWithValue(
                  "js_mobile_index_sb_address_search_failed",
                  1
                );
          else {
            var n = (function (e, i, t, n) {
              _i_("4ab:b5fdc80c");
              var a = t || 6,
                s = n || 3,
                r = { results: [], _ef: [], _efd: [] };
              return (
                e.forEach(function (t) {
                  if ((_i_("4ab:2b30aba3"), !t)) return _r_();
                  if (t.results)
                    if (r.results.length) {
                      i && (t.results = t.results.filter(h)),
                        t.results.splice(s);
                      var e = a - t.results.length;
                      r.results.splice(e),
                        (r.results = t.results.concat(r.results));
                    } else r.results = t.results;
                  ["_ef", "_efd"].forEach(function (e) {
                    _i_("4ab:dbb8c68e"),
                      t[e] &&
                        (r[e] = r[e].concat(
                          t[e].filter(
                            (function (e) {
                              _i_("4ab:fb404d6b");
                              var t = {};
                              return (
                                e.forEach(function (e) {
                                  _i_("4ab:0a94a462"), (t[e.name] = !0), _r_();
                                }),
                                _r_(function (e) {
                                  return _i_("4ab:f2b14173"), _r_(!t[e.name]);
                                })
                              );
                            })(r[e])
                          )
                        )),
                      _r_();
                  }),
                    (r.is_powered_by_google =
                      r.is_powered_by_google ||
                      (t.results.length && t.is_powered_by_google)),
                    _r_();
                }),
                r.results.forEach(function (e, t) {
                  var i, n, a;
                  _i_("4ab:dda6d81b"),
                    (e._ef =
                      ((i = e._ef),
                      (n = "ac_position"),
                      (a = t),
                      _i_("4ab:921e8421"),
                      (i = i.filter(function (e) {
                        return _i_("4ab:88e16264"), _r_(e.name !== n);
                      })).push({ name: n, value: a }),
                      _r_(i))),
                    _r_();
                }),
                (r.city = r.results),
                (r.__js_upa__ = r.is_powered_by_google),
                _r_(r)
              );
            })(_, !0);
            a.call(null, null, n),
              B.env.fe_m_sb_index_track_goals &&
                B.et.goalWithValue(
                  "js_mobile_index_sb_address_search_succeeded",
                  1
                );
          }
        _r_();
      };
      for (i = 0; i < e.length; i++)
        (n = e[i].search.call(e[i], $.extend({}, t), d.bind(null, i)))
          .getResultDetails && (s = n.getResultDetails),
          r.push(n);
      return _r_({
        abort: function () {
          for (_i_("4ab:ff00001c"), i = 0; i < r.length; i++) r[i].abort();
          _r_();
        },
        getResultDetails: s,
      });
    }
    function h(e) {
      return (
        _i_("4ab:05edf08f"),
        _r_(
          -1 != ["route", "postal_code", "street_address"].indexOf(e.place_type)
        )
      );
    }
    function r(e, t, i) {
      var n;
      _i_("4ab:d5d9fff2");
      var a = {};
      return (
        (n = e.search.call(e, $.extend({}, t), function (e, t) {
          _i_("4ab:ca016df2"),
            setTimeout(function () {
              _i_("4ab:f23dea16"),
                e ? i.call(null, e, null) : i.call(null, e, t),
                _r_();
            }, 0),
            _r_();
        })),
        (a.abort = function () {
          _i_("4ab:c33745771"), n && n.abort(), _r_();
        }),
        _r_(a)
      );
    }
    (t.exports = {
      search: function (e, t) {
        if ((_i_("4ab:ce851a88"), !e || !e.ss || "function" != typeof t))
          throw new Error("Invalid arguments");
        if (e.bgo)
          return _r_(i("search/destination/service-rentalcars").search(e, t));
        if (e.useAutoCompleteService)
          return _r_(i("search/destination/service-autocomplete").search(e, t));
        if (/^[,\s]+$/.test(e.ss))
          return t(new Error("Invalid search string"), null), _r_();
        return e.gpo
          ? _r_(a.search(e, t))
          : e.fesp_acf_i || e.fesp_acf_i_regions || e.fesp_acf_i_cities
          ? _r_(r(n, e, t))
          : e.gpf && e.ss.match(/[0-9]/)
          ? _r_(s([n, a], e, t))
          : e.gpr
          ? _r_(
              (function (e, t, i) {
                var n;
                _i_("4ab:d6437204");
                var a = [],
                  s = [],
                  r = function (e, t) {
                    if ((_i_("4ab:6cc59e93"), a.length))
                      if (e)
                        s.push(e), s.length == a.length && i.call(null, e, t);
                      else
                        for (i.call(null, e, t), n = 0; n < a.length; n++)
                          a[n].abort();
                    _r_();
                  };
                for (n = 0; n < e.length; n++)
                  a.push(e[n].search.call(e[n], $.extend({}, t), r));
                return _r_({
                  abort: function () {
                    for (_i_("4ab:ff00001c1"), n = 0; n < a.length; n++)
                      a[n].abort();
                    _r_();
                  },
                });
              })([n, a], e, t)
            )
          : e.gpf
          ? _r_(
              (function (i, t, n) {
                var a;
                _i_("4ab:fea3cf15");
                var s,
                  r = {},
                  o = function (e, t) {
                    _i_("4ab:c982a5db"),
                      setTimeout(function () {
                        _i_("4ab:213670df"),
                          e && i.length ? s() : n.call(null, e, t),
                          _r_();
                      }, 0),
                      _r_();
                  };
                return (
                  (s = function () {
                    _i_("4ab:21088902");
                    var e = i.shift();
                    (a = e.search.call(e, $.extend({}, t), o)),
                      (r.getResultDetails = a.getResultDetails),
                      _r_();
                  })(),
                  (r.abort = function () {
                    _i_("4ab:c3374577"), a && a.abort(), _r_();
                  }),
                  _r_(r)
                );
              })([n, a], e, t)
            )
          : _r_(r(n, e, t));
      },
    }),
      _r_();
  }),
  B.define("search/destination/service-atlas", function (e, t, i) {
    "use strict";
    _i_("4ab:36da66c3");
    var n = e("event-emitter"),
      s = e("server-data"),
      r = s.b_map_center_latitude || s.b_latitude || void 0,
      o = s.b_map_center_longitude || s.b_longitude || void 0,
      a = [
        "ChIJNy0jzGPMUQ4RWpboPw0ztMY",
        "ChIJ2xJC2SwmsUcRBqiHnUEubtY",
        "ChIJT-IyeGHurw0Rx89nUEaYTPM",
        "ChIJk_Swujrurw0R7yS_X2BSuD4",
        "ChIJv02k1k9oWQ0RWvhKDOLvTWA",
        "ChIJEdjOLYEU9x4RSanYNmYyKNE",
      ],
      _ = {
        administrative_area_level_1: "region",
        administrative_area_level_2: "region",
        administrative_area_level_3: "region",
        administrative_area_level_4: "region",
        administrative_area_level_5: "region",
        region: "region",
        airport: "airport",
        country: "country",
        locality: "city",
        point_of_interest: "landmark",
        poi: "landmark",
        route: "region",
        street_address: "region",
        postal_code: "region",
        sublocality: "district",
      },
      l =
        "zh" === s.b_lang ||
        "xt" === s.b_lang ||
        "ja" === s.b_lang ||
        "ko" === s.b_lang,
      d = "cn" === s.b_guest_country,
      h = !s.b_enable_mapbox_fallback || !d;
    function c() {
      return _i_("4ab:89516b0b"), _r_(!!B.atlas);
    }
    function u(n, e, t) {
      _i_("4ab:156b06e0");
      var i = { city: [] };
      (i.__upa__ = e
        .filter(f)
        .slice(0, 5)
        .map(function (e, t) {
          _i_("4ab:b3066125"), (e = e.get("data"));
          var i = {
            upa: !0,
            nr_hotels: 0,
            nr_hotels_25: 0,
            ss_raw: n.ss,
            dest_id: e.id,
            place_id: e.id,
            dest_type: _[e.types && e.types[0]] || "landmark",
            place_type: e.types && e.types[0],
            place_types: e.types,
            ss: e.description,
            label: e.description,
            label_blocks: (function (a, s) {
              _i_("4ab:b6d1e31f");
              var r = [];
              if (!s || 0 === s.length) return _r_([{ text: a }]);
              s[0].offset && r.push({ text: a.substr(0, s[0].offset) });
              return (
                s.forEach(function (e, t) {
                  _i_("4ab:85db203c");
                  var i = e.offset + e.length,
                    n = ((s[t + 1] && s[t + 1].offset) || a.length) - i;
                  r.push({
                    highlighted: !0,
                    text: a.substr(e.offset, e.length),
                  }),
                    n && r.push({ text: a.substr(i, n) }),
                    _r_();
                }),
                _r_(r)
              );
            })(e.description, e.matched_substrings),
            label_highlighted: (function (e, t, i) {
              _i_("4ab:694baa63");
              var n = "";
              if (((i = i || {}), !t || 0 === t.length)) return _r_(e);
              for (
                var a = t.map(function (e) {
                    return _i_("4ab:3513ad06"), _r_(e.offset);
                  }),
                  s = t.map(function (e) {
                    return _i_("4ab:5c09a709"), _r_(e.offset + e.length - 1);
                  }),
                  r = 0;
                r < e.length;
                r++
              )
                -1 != a.indexOf(r) && (n += "<b>"),
                  (n += e.charAt(r)),
                  -1 != s.indexOf(r) && (n += "</b>");
              i.encode &&
                (n = (n = (n = B.jstmpl.fn.FILTERS.entities(n)).replace(
                  /&lt;b&gt;/g,
                  "<b>"
                )).replace(/&lt;&#47;b&gt;/g, "</b>"));
              return _r_(n);
            })(e.description, e.matched_substrings, { encode: n.gpf_encode }),
            label_multiline: "<span><b>" + e.description + "</b></span>",
            hotels: 0,
            lc: s.b_lang,
            position: t,
            is_google_result: h,
            _ef: [],
            cjk: l,
          };
          return (
            d &&
              ((i.is_mapbox_result = !0),
              (i.longitude = e.longitude),
              (i.latitude = e.latitude),
              (i._details = !0)),
            i._ef.push({ name: "ac_position", value: t }),
            i._ef.push({ name: "ac_click_type", value: "g" }),
            _r_(i)
          );
        })),
        (i.results = i.__upa__),
        (i._ef = []),
        i._ef.push({ name: "search_pageview_id", value: s.pageview_id }),
        window.google &&
          ((i.is_powered_by_google = 0 < i.results.length),
          (i.__js_upa__ = i.is_powered_by_google)),
        t(null, i),
        _r_();
    }
    function f(e) {
      _i_("4ab:6b568dc3");
      var t = e.get("data");
      return _r_(-1 === a.indexOf(t.id));
    }
    function p(a, s) {
      if ((_i_("4ab:22cb1394"), !a.place_id)) return s(null, a), _r_();
      this.atlas.getGeocodeDetails({ placeId: a.place_id }, function (e) {
        var t, i, n;
        _i_("4ab:e4a4ff55"),
          (t = a),
          (i = e),
          (n = s),
          _i_("4ab:eb6b72d6"),
          ((t = t || {}).id = i.id || i.place_id),
          (t.place_id = t.id),
          (t.name = i.name || i.formatted_address),
          (t.latitude = i.geometry.location.lat()),
          (t.longitude = i.geometry.location.lng()),
          (t.place_types = i.types),
          (t.dest_type = _[i.types && i.types[0]] || "landmark"),
          (t._ef = t._ef || []),
          t._ef.push({ name: "ss_short", value: i.name }),
          n(null, t),
          _r_(),
          _r_();
      }),
        _r_();
    }
    (i.exports = n.extend({
      init: function (e, n) {
        _i_("4ab:9de5d2b8"), (e = e || {});
        var a = this;
        if (!c()) throw "service-atlas: B.atlas is not available";
        if (this.initialized)
          return n && this.atlas && this.atlas.done(n), _r_();
        this.initialized = !0;
        B.require(["async-loader"], function (e) {
          _i_("4ab:c9c4fa5f"),
            e.load({ js: "async_atlas_places_js" }).then(function () {
              _i_("4ab:2e3caf82"),
                (function (e) {
                  _i_("4ab:236c5df3");
                  var t = document.createElement("div"),
                    i = "provider-google-places";
                  s.b_enable_mapbox_fallback &&
                    (i = d
                      ? "provider-mapbox-places"
                      : "provider-google-places"),
                    (a.atlas = new e({
                      provider: i,
                      modules: ["autocomplete", "places"],
                      options: { domNode: t, channel: "booking-places" },
                    })),
                    n && a.atlas.done(n),
                    _r_();
                })(B.atlas.require("atlas-places")),
                _r_();
            }),
            _r_();
        }),
          _r_();
      },
      search: function (t, i) {
        if ((_i_("4ab:d874a779"), !t || !t.ss || "function" != typeof i))
          throw new Error("service-atlas-invalid-arguments");
        if (t.ss.length < 2)
          return (
            setTimeout(function () {
              _i_("4ab:ea38fa68"),
                i(new Error("service-atlas-too-short-search-string"), {}),
                _r_();
            }, 4),
            _r_({ getDetails: $.noop, abort: $.noop })
          );
        if (!c())
          return (
            setTimeout(function () {
              _i_("4ab:c4866534"),
                i(new Error("service-atlas-no-atlas"), null),
                _r_();
            }, 4),
            _r_({ getDetails: $.noop, abort: $.noop })
          );
        var n = !1,
          e = { query: t.ss };
        r && o && ((e.lat = r), (e.lon = o), (e.radius = 3e4));
        var a = function (e) {
            _i_("4ab:bbd056dd"),
              n ||
                (e && Array.isArray(e)
                  ? u(t, e, i)
                  : i(new Error("service-atlas-invalid-results"), null)),
              _r_();
          },
          s = function (e) {
            _i_("4ab:ac1377c8"),
              n || i(new Error("service-atlas-error " + e), null),
              _r_();
          };
        this.init(
          t,
          function () {
            _i_("4ab:016a77f1"), this.atlas.autocomplete(e, a, s), _r_();
          }.bind(this)
        );
        return _r_({
          getResultDetails: p.bind(this),
          abort: function () {
            _i_("4ab:e8b984fb"), (n = !0), _r_();
          },
        });
      },
    })),
      _r_();
  }),
  B.define("search/destination/service-booking", function (e, t, i) {
    "use strict";
    _i_("4ab:b3b6d687");
    var n = e("event-emitter"),
      s = B.env.b_sb_autocomplete_predictions_url,
      r = B.env.b_sb_autocomplete_predictions_method || "GET";
    function o(n, e, t) {
      _i_("4ab:8055be59"),
        n && n.city
          ? n.__upa__ ||
            0 !== n.city.length ||
            (n.bbtoollocations && 0 !== n.bbtoollocations.length) ||
            (n.theme && 0 !== n.theme.length) ||
            (n.searches && 0 !== n.searches.length)
            ? ((n.city = n.city.map(function (e, t) {
                var i;
                return (
                  _i_("4ab:2ca133ad"),
                  !e.label &&
                    e.labels &&
                    (e.label =
                      ((i = e.labels),
                      _i_("4ab:18745e16"),
                      _r_(
                        i
                          .map(function (e) {
                            return _i_("4ab:ec1c0c2e"), _r_(e.text);
                          })
                          .join(", ")
                      ))),
                  !e.labels ||
                    ("zh" !== e.lc &&
                      "xt" !== e.lc &&
                      "ja" !== e.lc &&
                      "ko" !== e.lc) ||
                    (e.label_blocks = (function (e) {
                      _i_("4ab:dad77360");
                      var i = [];
                      return (
                        e.forEach(function (e, t) {
                          _i_("4ab:c4f7dab7"),
                            0 < t && i.push({ text: ", " }),
                            i.push({ highlighted: !!e.hl, text: e.text }),
                            _r_();
                        }),
                        _r_(i)
                      );
                    })(e.labels)),
                  (e.ss = e.label),
                  (e.label_highlighted = e.label_highlighted || e.label),
                  (e.position = t),
                  (e._ef = e._ef || []),
                  e._ef.push({ name: "ac_position", value: t }),
                  e._ef.push({ name: "ac_langcode", value: e.lc }),
                  e._ef.push({ name: "ac_click_type", value: "b" }),
                  e.roundtrip &&
                    e._ef.push({ name: "ac_meta", value: e.roundtrip }),
                  n.__did_you_mean__ &&
                    (e._ef.push({
                      name: "suggested_term",
                      value: n.__did_you_mean__.suggestion,
                    }),
                    e._ef.push({ name: "suggestion_clicked", value: 1 })),
                  e._t && e._ef.push({ name: "_t", value: e._t }),
                  _r_(e)
                );
              })),
              (n.results = n.city),
              n.bbtoollocations &&
                (n.results = n.bbtoollocations
                  .map(function (e, t) {
                    return (
                      _i_("4ab:52311848"),
                      (e.name = B.jstmpl.fn.FILTERS.html(e.name)),
                      (e.address = B.jstmpl.fn.FILTERS.html(e.address)),
                      void 0 !== e.label &&
                        (e.label = B.jstmpl.fn.FILTERS.html(e.label)),
                      void 0 !== e.label_highlighted &&
                        (e.label_highlighted = B.jstmpl.fn.FILTERS.html(
                          e.label_highlighted
                        )),
                      (e.label_blocks = [
                        { highlighted: 1, text: e.name },
                        { text: ", " },
                        { text: e.address },
                      ]),
                      (e.ss = e.name),
                      (e.latitude = e.place_id_lat),
                      (e.longitude = e.place_id_lon),
                      (e.position = t),
                      (e._ef = e._ef || []),
                      e._ef.push({ name: "bbtoollocation", value: "1" }),
                      _r_(e)
                    );
                  })
                  .concat(n.results)),
              n.theme &&
                ((n.theme = n.theme.map(function (e, t) {
                  return (
                    _i_("4ab:bda296e8"),
                    (e.ss = e.label),
                    (e._ef = e._ef || []),
                    e._ef.push({
                      name: "ac_position",
                      value: t + n.city.length,
                    }),
                    e._ef.push({ name: "ac_click_type", value: "b" }),
                    _r_(e)
                  );
                })),
                n.theme.length && e.limitOneTheme && (n.theme = [n.theme[0]]),
                (n.results = n.results.concat(n.theme))),
              (n._ef = n._ef || []),
              n._ef.push({
                name: "search_pageview_id",
                value: B.env.pageview_id,
              }),
              n._ef.push({
                name: "ac_suggestion_list_length",
                value: n.city.length,
              }),
              n._ef.push({
                name: "ac_suggestion_theme_list_length",
                value: n.theme ? n.theme.length : 0,
              }),
              (n._efd = n._efd || []),
              t(null, n),
              B.env.fe_m_sb_index_track_goals &&
                B.et.goalWithValue(
                  "js_mobile_index_sb_brick_search_succeeded",
                  1
                ))
            : (B.env.fe_m_sb_index_track_goals &&
                B.et.goalWithValue("js_mobile_index_sb_brick_search_failed", 1),
              t(new Error("service-booking-no-results"), n))
          : (B.env.fe_m_sb_index_track_goals &&
              B.et.goalWithValue("js_mobile_index_sb_brick_search_failed", 1),
            t(new Error("service-booking-data-invalid"), null)),
        _r_();
    }
    (i.exports = n.extend({
      search: function (n, a) {
        if ((_i_("4ab:d7a84ba8"), !n || !n.ss || "function" != typeof a))
          throw new Error("Invalid arguments");
        var e,
          t =
            ((e = n),
            _i_("4ab:62ef0a47"),
            (e.term = e.ss),
            delete e.ss,
            _r_(e));
        this.emit("beforeajax", n, t),
          B.env.fe_m_sb_index_track_goals &&
            B.et.goalWithValue("js_mobile_index_sb_brick_search_started", 1);
        var i = $.ajax({
          type: r,
          url: s,
          data: t,
          success: function (e, t, i) {
            _i_("4ab:216ba6f0"), o(e, n, a), _r_();
          }.bind(this),
          error: function (e, t, i) {
            _i_("4ab:58b05c50"),
              (function (e, t, i) {
                if ((_i_("4ab:6b5a73c9"), "error" === t && 403 === e.status)) {
                  var n = window.location.href;
                  if (n.indexOf("page_reload") < 0) {
                    var a = 2e3;
                    "mdot" === B.env.b_site_type && (a = 1e3);
                    var s = B.jstmpl.translations(
                        "search_sbox_abandoned_search_open_tab_message"
                      ),
                      r = B.jstmpl.translations(
                        "search_sbox_abandoned_search_open_tab_message_refresh_cta"
                      );
                    -1 < n.indexOf("#")
                      ? ($("body").append(
                          $(
                            "<div class='sb-lightbox-brick-error'><p>" +
                              s +
                              "<br><br><a class='btn btn-primary'>" +
                              r +
                              "</a></p></div>"
                          ).on("click", "a", function () {
                            _i_("4ab:f47fa620"),
                              window.location.reload(!0),
                              _r_();
                          })
                        ),
                        setTimeout(function () {
                          _i_("4ab:6339201f"),
                            window.location.reload(!0),
                            _r_();
                        }, a))
                      : (-1 < n.indexOf("?")
                          ? (n += "&page_reload=1")
                          : (n += "?page_reload=1"),
                        $("body").append(
                          $(
                            "<div class='sb-lightbox-brick-error'><p>" +
                              s +
                              "<br><br><a class='btn btn-primary' href='" +
                              n +
                              "'>" +
                              r +
                              "</a></p></div>"
                          )
                        ),
                        setTimeout(function () {
                          _i_("4ab:56a1f835"),
                            (window.location.href = n),
                            _r_();
                        }, a));
                  }
                }
                _r_();
              })(e, t),
              _r_();
          }.bind(this),
        });
        return _r_({
          abort: function () {
            _i_("4ab:492fa66a"), i && i.abort && i.abort(), _r_();
          },
        });
      },
      getSuggestions: function (n, e) {
        _i_("4ab:33d04881");
        var t = B.env.search_autocomplete_params,
          i = "";
        if (e && e.searchHistory && B.env.b_ac_search_history)
          return n(!1, { results: B.env.b_ac_search_history }), _r_();
        "searchresults" === B.env.b_action &&
          (i =
            "valid" === (i = B.search.dates("checkin")).type
              ? i.toString()
              : ""),
          (t = Object.assign({}, t, { ttype: 0, checkin: i }));
        var a = $.ajax({
          type: "get",
          url: "/search_history_and_suggestions",
          data: t,
          success: function (e, t, i) {
            _i_("4ab:14a99cd2"), n(null, e), _r_();
          },
          error: function (e, t, i) {
            if ((_i_("4ab:05646750"), "abort" === t)) return _r_();
            n(new Error("service-booking-error " + i), null), _r_();
          },
        });
        return _r_({
          abort: function () {
            _i_("4ab:492fa66a1"), a && a.abort && a.abort(), _r_();
          },
        });
      },
    })),
      _r_();
  }),
  B.define("search/destination/service-carrier", function (e, t, i) {
    "use strict";
    _i_("4ab:b0c820c6");
    var n = e("event-emitter"),
      a = "/dml/graphql",
      r = "POST",
      o = "GooglePlacesAutocomplete",
      _ =
        "query GooglePlacesAutocomplete($input: GooglePlacesInput!, $fetchOnlyFirst: Boolean) {\n  googlePlaces(input: $input) {\n    results {\n      destType\n        googlePlaceId\n        placeType\n      label\n      languageCode\n     position\n      languageCode\n     place(fetchOnlyFirst: $fetchOnlyFirst) {\n        address\n        location {\n          latitude\n          longitude\n        }\n      }\n    }\n  }\n}\n",
      s = {
        operationName: "googlePlaceDetails",
        query:
          "query googlePlaceDetails($input: PlaceDetailsInput!) {\n  googlePlaceDetails(input: $input) {\n    results {\n      place {\n        location {\n          latitude\n          longitude\n        }\n      }\n    }\n  }\n}\n",
      };
    function l(i, n) {
      if ((_i_("4ab:2ec029f7"), !i.place_id)) return n(null, i), _r_();
      !(function (e, n) {
        if ((_i_("4ab:c7d2f04a"), !e)) return _r_();
        (e = {
          operationName: s.operationName,
          query: s.query,
          variables: { input: { placeId: e.place_id } },
        }),
          $.ajax({
            type: r,
            url: a,
            data: JSON.stringify(e),
            xhrFields: { withCredentials: !0 },
            crossDomain: !0,
            success: function (e, t) {
              if (
                (_i_("4ab:bd7fef72"),
                e &&
                  e.data &&
                  e.data.googlePlaceDetails &&
                  e.data.googlePlaceDetails.results &&
                  e.data.googlePlaceDetails.results[0])
              ) {
                var i = e.data.googlePlaceDetails.results[0];
                e =
                  i.place && i.place.location
                    ? {
                        latitude: i.place.location.latitude,
                        longitude: i.place.location.longitude,
                      }
                    : {};
              }
              n(t, e), _r_();
            }.bind(this),
            error: function (e, t, i) {
              _i_("4ab:3f50e38d"),
                "abort" !== t && n(t, new Error("service-booking-error " + i)),
                _r_();
            }.bind(this),
          }),
          _r_();
      })({ place_id: i.place_id }, function (e, t) {
        if ((_i_("4ab:0337a9b6"), "success" != e)) return n(null, i), _r_();
        ((i = i || {}).latitude = t.latitude),
          (i.longitude = t.longitude),
          n(null, i),
          _r_();
      }),
        _r_();
    }
    (i.exports = n.extend({
      search: function (e, s) {
        if ((_i_("4ab:b6270344"), !e || !e.ss || "function" != typeof s))
          throw new Error("service-carrier-invalid-arguments");
        if (e.ss.length < 2)
          return (
            setTimeout(function () {
              _i_("4ab:ff6ee0e6"),
                s(new Error("service-carrier-too-short-search-string"), {}),
                _r_();
            }, 4),
            _r_({ getDetails: $.noop, abort: $.noop })
          );
        B.env.fe_m_sb_index_track_goals &&
          B.et.goalWithValue("js_mobile_index_sb_carrier_search_started", 1);
        var t = {
          operationName: o,
          variables: {
            input: { searchString: e.ss, sessionToken: B.env.pageview_id },
            fetchOnlyFirst: !0,
          },
          query: _,
        };
        this.emit("beforeajax", e, t);
        var i = $.ajax({
          type: r,
          url: a,
          data: JSON.stringify(t),
          xhrFields: { withCredentials: !0 },
          crossDomain: !0,
          success: function (e, t, i) {
            var n, a;
            _i_("4ab:216ba6f01"),
              (n = e),
              (a = s),
              _i_("4ab:9bbb7b1c"),
              n &&
              n.data &&
              n.data.googlePlaces &&
              n.data.googlePlaces.results &&
              n.data.googlePlaces.results.length
                ? (a(null, {
                    results: (n = n.data.googlePlaces.results.map(function (e) {
                      _i_("4ab:2d7cb2f7");
                      var t = {
                        _ef: [
                          { name: "ac_position", value: e.position },
                          { value: "g", name: "ac_click_type" },
                        ],
                        dest_type: e.destType.toLowerCase(),
                        is_google_result: !0,
                        label: e.label,
                        lc: e.languageCode,
                        place_id: e.googlePlaceId,
                        place_type: e.placeType,
                        position: e.position,
                        ss: e.label,
                      };
                      return (
                        e.place &&
                          e.place.location &&
                          ((t._details = !0),
                          (t.latitude = e.place.location.latitude),
                          (t.longitude = e.place.location.longitude)),
                        _r_(t)
                      );
                    })),
                    is_powered_by_google: 1,
                  }),
                  B.env.fe_m_sb_index_track_goals &&
                    B.et.goalWithValue(
                      "js_mobile_index_sb_carrier_search_succeeded",
                      1
                    ))
                : (a(new Error("service-carrier-invalid-results"), null),
                  B.env.fe_m_sb_index_track_goals &&
                    B.et.goalWithValue(
                      "js_mobile_index_sb_carrier_search_failed",
                      1
                    )),
              _r_(),
              _r_();
          }.bind(this),
          error: function (e, t, i) {
            _i_("4ab:b4644f9f"),
              "abort" !== t && s(new Error("service-booking-error " + i), null),
              _r_();
          }.bind(this),
        });
        return _r_({
          getResultDetails: l.bind(this),
          abort: function () {
            _i_("4ab:492fa66a2"), i && i.abort && i.abort(), _r_();
          },
        });
      },
      getSuggestions: function (n, e) {
        _i_("4ab:33d048811");
        var t = B.env.search_autocomplete_params,
          i = "";
        if (e && e.searchHistory && B.env.b_ac_search_history)
          return n(!1, { results: B.env.b_ac_search_history }), _r_();
        "searchresults" === B.env.b_action &&
          (i =
            "valid" === (i = B.search.dates("checkin")).type
              ? i.toString()
              : ""),
          (t = Object.assign({}, t, { ttype: 0, checkin: i }));
        var a = $.ajax({
          type: "get",
          url: "/search_history_and_suggestions",
          data: t,
          success: function (e, t, i) {
            _i_("4ab:14a99cd21"), n(null, e), _r_();
          },
          error: function (e, t, i) {
            if ((_i_("4ab:056467501"), "abort" === t)) return _r_();
            n(new Error("service-booking-error " + i), null), _r_();
          },
        });
        return _r_({
          abort: function () {
            _i_("4ab:492fa66a3"), a && a.abort && a.abort(), _r_();
          },
        });
      },
    })),
      _r_();
  }),
  B.define("component/search/travel-purpose/checkbox", function (e, t, i) {
    "use strict";
    _i_("4ab:67e1bb56");
    var n = e("component"),
      a = e("search/searchbox/model");
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:a669d18e"),
          (this.$form = this.$el.closest("form")),
          (this.$checkbox = this.$el.find("[name=sb_travel_purpose]")),
          (this.profileSplitAccounts = B.env.b_connected_user_accounts),
          (this.formAction = this.$form.attr("action")),
          (this.model = a.getInstance(this.$form.attr("data-sb-id"))),
          (this.searchedBusiness = !1),
          this.$checkbox.length &&
            "checked" === this.$checkbox[0].getAttribute("checked") &&
            (this.searchedBusiness = !0),
          (this.updateRedirectFormFieldsOnModelChange = !1),
          (this.searchedBusiness || this.profileSplitAccounts) &&
            this.bindEvents(),
          _r_();
      },
      bindEvents: function () {
        _i_("4ab:94f4c6a6"),
          this.$checkbox.on("change", this.handleCheckboxChange.bind(this)),
          this.model.on(
            "change",
            function (e) {
              _i_("4ab:48f1f1ce"),
                !this.updateRedirectFormFieldsOnModelChange ||
                  (e && e.redirectFormFields) ||
                  this.createRedirectFormFields(),
                _r_();
            }.bind(this)
          ),
          _r_();
      },
      handleCheckboxChange: function () {
        _i_("4ab:a853bf4c"),
          this.$checkbox.prop("checked")
            ? this.$hidden &&
              (this.$hidden.remove(),
              this.$checkbox[0].setAttribute("name", "sb_travel_purpose"))
            : ((this.$hidden = $(
                '<input name="sb_travel_purpose" value="leisure" type="hidden" />'
              ).appendTo(this.$el)),
              this.$checkbox[0].setAttribute("name", "h_sb_travel_purpose")),
          this.createRedirectFormFields(),
          _r_();
      },
      createRedirectFormFields: function () {
        if (
          (_i_("4ab:9f95f63a"),
          !this.profileSplitAccounts ||
            !this.profileSplitAccounts.length ||
            !B.env.feature_profile_split_sb_checkbox)
        )
          return _r_();
        this.model.setFields("bnss", []),
          this.model.trigger("change", { redirectFormFields: !0 });
        var e = this.findAccountType(this.$checkbox.prop("checked")),
          t = this.formAction,
          i = B.env.b_secure_domain + this.$el.attr("data-profile-switch-url");
        -1 === t.indexOf(B.env.b_nonsecure_hostname) &&
          (t = B.env.b_nonsecure_hostname + t),
          -1 === t.indexOf("?")
            ? (t += +this.$form.serialize())
            : (t += "&" + this.$form.serialize()),
          this.model.setFields("bnss", [
            { type: "hidden", name: "redirect_url", value: t },
            { type: "hidden", name: "switch_to_user_id", value: e.b_user_id },
          ]),
          this.$form.attr("method", "POST"),
          this.model.setFormAction(i),
          this.model.trigger("change", { redirectFormFields: !0 }),
          (this.updateRedirectFormFieldsOnModelChange = !0),
          _r_();
      },
      findAccountType: function (e) {
        var t, i, n;
        for (
          _i_("4ab:4b27ed34"), t = 0, i = this.profileSplitAccounts.length;
          t < i;
          ++t
        )
          "business" === this.profileSplitAccounts[t].b_type && e
            ? (n = this.profileSplitAccounts[t])
            : "business" === this.profileSplitAccounts[t].b_type ||
              e ||
              (n = this.profileSplitAccounts[t]);
        return _r_(n);
      },
    })),
      _r_();
  }),
  B.define("component/search/dates/date-field", function (e, t, i) {
    "use strict";
    _i_("4ab:1d1783c9");
    var h = e("caret"),
      n = e("component"),
      c = e("formatting/date"),
      a = e("keycodes"),
      s = e("read-data-options"),
      r = e("ga-tracker"),
      o = e("search/searchbox/model");
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:3eac4c07"),
          (this.options = s(this.el, {
            forceInitRender: {
              name: "force-init-render",
              type: Boolean,
              defaultValue: !1,
            },
            modelId: { name: "sb-id", type: String, required: !0 },
            modelMode: { name: "mode", type: String, defaultValue: "single" },
            validators: { name: "validators", type: String, defaultValue: "" },
          }));
        var e = this.options.validators.split(",");
        (this.model = o.getInstance(this.options.modelId)),
          this.model.use("dates"),
          this.model.on("change", this.modelChange.bind(this)),
          this.model.dates.configure({
            noValidation: !0,
            allowMaxLos: !0,
            notEmpty: 0 <= e.indexOf("not-empty"),
          }),
          (this.$display = this.$el.find("[data-display]")),
          (this.$inputs = this.$el.find("[data-input]")),
          (this.$inputYear = this.$inputs.filter(
            '[data-input-fragment="year"]'
          )),
          (this.$inputMonth = this.$inputs.filter(
            '[data-input-fragment="month"]'
          )),
          (this.$inputDay = this.$inputs.filter('[data-input-fragment="day"]')),
          (this.$controls = this.$el.find("[data-controls]")),
          (this.$iconDay = this.$el.find("[data-icon-day]")),
          (this.$field = this.$el.find("[data-field]")),
          this.$controls.on("mousedown", this.controlsMouseDown.bind(this)),
          this.$inputs.on("focus", this.inputFocus.bind(this)),
          this.$inputs.one("focus", this.inputFocusTrack.bind(this)),
          this.$inputs.on("blur", this.inputBlur.bind(this)),
          this.$inputs.on("keydown", this.inputKeyDown.bind(this)),
          this.$inputs.on("keyup", this.inputKeyUp.bind(this)),
          this.$inputs.on("keypress", this.inputKeyPress.bind(this)),
          B.eventEmitter.on(
            "CALENDAR:shown CALENDAR:closed",
            this.updateFocusClass.bind(this)
          ),
          (this.previousState = {}),
          (this.state = { editing: !1, currentField: null }),
          this.checkDateFields(),
          this.initModel(),
          _r_();
      },
      checkDateFields: function () {
        var e, t;
        _i_("4ab:b79e53cf"),
          (this.$inputYear.length &&
            this.$inputMonth.length &&
            this.$inputDay.length) ||
            ((e = this.model.dates.getFallbackDates(this.options.modelMode)),
            0 === this.$inputYear.length &&
              ((t = e.year || ""),
              (this.$inputYear = this.createDateInputField(
                this.options.modelMode + "_year",
                t
              ).appendTo(this.el)),
              setTimeout(function () {
                throw (
                  (_i_("4ab:05cd2402"),
                  Error(
                    "Date input field year was not found in " +
                      B.env.b_action +
                      " action"
                  ))
                );
              }, 0)),
            0 === this.$inputMonth.length &&
              ((t = e.month || ""),
              (this.$inputMonth = this.createDateInputField(
                this.options.modelMode + "_month",
                t
              ).appendTo(this.el)),
              setTimeout(function () {
                throw (
                  (_i_("4ab:01a0e5f0"),
                  Error(
                    "Date input field month was not found in " +
                      B.env.b_action +
                      " action"
                  ))
                );
              }, 0)),
            0 === this.$inputDay.length &&
              ((t = e.day || ""),
              (this.$inputDay = this.createDateInputField(
                this.options.modelMode + "_monthday",
                t
              ).appendTo(this.el)),
              setTimeout(function () {
                throw (
                  (_i_("4ab:53fd85ba"),
                  Error(
                    "Date input field day was not found in " +
                      B.env.b_action +
                      " action"
                  ))
                );
              }, 0))),
          _r_();
      },
      createDateInputField: function (e, t) {
        return (
          _i_("4ab:b9c402e3"),
          _r_($("<input>").attr({ type: "hidden", name: e, value: t }).val(t))
        );
      },
      initModel: function () {
        _i_("4ab:2d14df86");
        var e = !1,
          t = this.$inputYear.val(),
          i = this.$inputMonth.val(),
          n = this.$inputDay.val();
        t && i && n
          ? ((e = this.model.dates.initDate(this.options.modelMode, {
              year: +t,
              month: +i - 1,
              day: +n,
            })),
            this.$field.hasClass("-empty") &&
              "index" === B.env.b_action &&
              this.render())
          : (e = this.model.dates.initDate(this.options.modelMode, null)),
          (e && !this.options.forceInitRender) || this.render(),
          _r_();
      },
      modelChange: function (e) {
        if (
          (_i_("4ab:c5a8b8ab"),
          "dates" !== e.group || !e[this.options.modelMode])
        )
          return _r_();
        this.render(), _r_();
      },
      controlsMouseDown: function (e) {
        _i_("4ab:6e48dd53"),
          (this.inputBlurPrevented = !0),
          setTimeout(
            function () {
              _i_("4ab:334cc6cc"), (this.inputBlurPrevented = !1), _r_();
            }.bind(this)
          ),
          _r_();
      },
      inputFocus: function (e) {
        _i_("4ab:9c58a474"),
          clearTimeout(this.inputBlurTimer),
          (this.state.editing = !0),
          (this.state.currentField = e.target.getAttribute(
            "data-input-fragment"
          )),
          this.startEditing(),
          this.updateFocusClass(),
          _r_();
      },
      inputFocusTrack: function () {
        _i_("4ab:7630c5c4"),
          r.trackEvent(
            r.SearchBoxTracker,
            "Keyboard Focus",
            this.options.modelMode + " field"
          ),
          _r_();
      },
      inputBlur: function (e) {
        _i_("4ab:4a0c1d36");
        var t = e.target,
          i = t.getAttribute("data-input-fragment");
        this.inputBlurPrevented ||
          ((this.state.editing = !1), (this.state.currentField = null)),
          this.setDateFragment(i, t.value),
          (this.inputBlurTimer = setTimeout(
            function () {
              _i_("4ab:fcd041df"), this.apply(), this.updateFocusClass(), _r_();
            }.bind(this)
          )),
          _r_();
      },
      inputKeyDown: function (e) {
        _i_("4ab:2f088557");
        var t = e.target,
          i = t.getAttribute("data-input-fragment");
        if (a.isModifier(e.which)) return _r_();
        a.isUpArrow(e.which)
          ? (this.adjustDateFragment(i, t.value, 1), e.preventDefault())
          : a.isDownArrow(e.which)
          ? (this.adjustDateFragment(i, t.value, -1), e.preventDefault())
          : a.isLeftArrow(e.which) || a.isBackspace(e.which)
          ? this.inputMoveAdjacent(e, -1, { backspace: a.isBackspace(e.which) })
          : a.isRightArrow(e.which) && this.inputMoveAdjacent(e, 1),
          _r_();
      },
      inputKeyUp: function (e) {
        _i_("4ab:edc2be24");
        var t = e.target;
        if (a.isModifier(e.which)) return _r_();
        !a.isNavigation(e.which) &&
          !a.isDeletion(e.which) &&
          t.value.length >= Math.floor(t.getAttribute("maxlength")) &&
          this.inputMoveAdjacent(e, 1, { automatic: !0 }),
          _r_();
      },
      inputMoveAdjacent: function (e, t, i) {
        _i_("4ab:e7adcbb3");
        var n,
          a,
          s = e.target,
          r = this.$inputs.length,
          o = h.getPosition(s),
          _ = 0,
          l = this.$inputs.filter(s).index(),
          d = r - 1;
        i = i || {};
        if (
          (0 < t && ((_ = s.value.length), (d = 0)), i.automatic && l == r - 1)
        )
          return _r_();
        if (!i.force && h.getSelectionLength(s)) return _r_();
        (i.force || o == _) &&
          (((l += t) < 0 || r - 1 < l) && (l = d),
          (n = this.$inputs.get(l)),
          i.automatic && n.value.length
            ? n.select()
            : ((a = 0 < t ? 0 : n.value.length),
              h.setPosition(n, a),
              i.backspace || e.preventDefault())),
          _r_();
      },
      inputKeyPress: function (e) {
        _i_("4ab:0c3eb8b9"),
          (e.keyCode && a.isNavigation(e.keyCode)) ||
            !(e.which < 48 || 57 < e.which) ||
            (this.inputMoveAdjacent(e, 1, { automatic: !0, force: !0 }),
            e.preventDefault()),
          _r_();
      },
      startEditing: function () {
        _i_("4ab:63355040"),
          setTimeout(
            function () {
              _i_("4ab:98e6ffec"), this.model.dates.startEditing(), _r_();
            }.bind(this)
          ),
          this.render(),
          _r_();
      },
      setDateFragment: function (e, t) {
        _i_("4ab:f17b1283"),
          (t = "" === t ? null : +t),
          "month" === e && null !== t && (t -= 1),
          this.model.dates.setEditingFragment(this.options.modelMode, e, t),
          _r_();
      },
      adjustDateFragment: function (e, t, i) {
        _i_("4ab:d7ec0590"),
          (t = "" === t ? 0 : +t),
          "month" === e && (t -= 1),
          this.model.dates.adjustEditingFragment(
            this.options.modelMode,
            e,
            t,
            i
          ),
          _r_();
      },
      apply: function () {
        _i_("4ab:5697e3f5"),
          this.model.dates.applyEditing(this.options.modelMode),
          _r_();
      },
      render: function () {
        _i_("4ab:8d02f233");
        var e = this.$field.hasClass("-editing"),
          t = this.model.dates.get(),
          i = this.$inputYear.val(),
          n = this.$inputMonth.val(),
          a = this.$inputDay.val(),
          s = t[this.options.modelMode],
          r = t["editing_" + this.options.modelMode] || {},
          o = r.year,
          _ = r.month,
          l = r.day,
          d = "date_with_weekday";
        (i = "" === i ? null : +i),
          (n = "" === n ? null : +n),
          (a = "" === a ? null : +a),
          (o = "number" == typeof o ? o : null),
          (_ = "number" == typeof _ ? _ + 1 : null),
          (l = "number" == typeof l ? l : null),
          e != this.state.editing &&
            ((e = this.state.editing), this.$field.toggleClass("-editing", e)),
          i !== o &&
            (this.$inputYear.val(o),
            "year" === this.state.currentField && this.$inputYear.select()),
          n !== _ &&
            (this.$inputMonth.val(_),
            "month" === this.state.currentField && this.$inputMonth.select()),
          a !== l &&
            (this.$inputDay.val(l),
            "day" === this.state.currentField && this.$inputDay.select()),
          e ||
            s ||
            (this.$field.addClass("-empty"),
            this.$display.html(this.$display.attr("data-placeholder")),
            this.$iconDay.html(this.$iconDay.attr("data-placeholder"))),
          !e &&
            s &&
            (this.$field.removeClass("-empty"),
            (d = this.$display.data("date-format") || d),
            this.$display.html(c.format(s, d)),
            this.$iconDay.html(c.format(s, "{day_of_month}"))),
          _r_();
      },
      updateFocusClass: function () {
        _i_("4ab:2f80354a"),
          setTimeout(
            function () {
              _i_("4ab:91b5f950");
              var e = this.$el.parent(),
                t = this.state.editing,
                i = !e.hasClass("c2-wrapper-s-hidden");
              t || i
                ? this.$el.addClass("-focus")
                : this.$el.removeClass("-focus"),
                _r_();
            }.bind(this),
            100
          ),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("search/dates/util", function (e, t, i) {
    _i_("4ab:f21d06d7"),
      (i.exports = {
        formatDate: function (e) {
          _i_("4ab:3326735c");
          var t = new Date(e),
            i = "" + (t.getMonth() + 1),
            n = "" + t.getDate(),
            a = t.getFullYear();
          return (
            i.length < 2 && (i = "0" + i),
            n.length < 2 && (n = "0" + n),
            _r_([a, i, n].join("-"))
          );
        },
        addDay: function (e) {
          _i_("4ab:41edee44");
          var t = new Date(e);
          return t.setDate(t.getDate() + 1), _r_(t);
        },
        substractDay: function (e) {
          _i_("4ab:13bbe474");
          var t = new Date(e);
          return t.setDate(t.getDate() - 1), _r_(t);
        },
        daysBetween: function (e, t) {
          _i_("4ab:3af11de9"), (e = new Date(e)), (t = new Date(t));
          var i = e.getTime(),
            n = t.getTime(),
            a = Math.abs(i - n);
          return _r_(Math.round(a / 864e5));
        },
      }),
      _r_();
  }),
  B.define("component/search/dates/dates-errors", function (e, t, i) {
    "use strict";
    _i_("4ab:7d6a11b5");
    var n = e("component"),
      a = e("jstmpl"),
      s = e("read-data-options"),
      r = e("search/searchbox/model");
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:79968b04"),
          (this.options = s(this.el, {
            modelId: { name: "sb-id", type: String, required: !0 },
            sbFacelift: { name: "sb-facelift", type: Number },
            sbNoDatesMessage: { name: "sb-no-dates-message", type: Boolean },
          })),
          (this.model = r.getInstance(this.options.modelId)),
          this.model.use("dates"),
          this.model.on("validation", this.modelValidation.bind(this)),
          (this.template = a("fe_search_dates_errors")),
          _r_();
      },
      modelValidation: function (e) {
        if ((_i_("4ab:f33c3697"), "dates" !== e.group)) return _r_();
        var t = s(this.el, {
          viewId: { name: "view-id", type: String, defaultValue: "" },
        });
        e.valid
          ? this.$el.html("")
          : this.$el.html(
              this.template.render({
                fe_error: e.validationError,
                fe_new: !0,
                fe_view: t.viewId,
                fe_sb_facelift: this.options.sbFacelift,
                fe_use_dynamic_copy: B.env.BHDTJdReLGMeEcYPffcVDZBZMO,
                fe_max_los: this.model.dates.getOption("maxLos"),
                fe_sb_no_dates_message: this.options.sbNoDatesMessage,
              })
            ),
          _r_();
      },
    })),
      _r_();
  }),
  booking.jstmpl(
    "search_dates_length_of_stay",
    (function () {
      _i_("4ab:d32728b5");
      var a,
        s = [
          "\n\t\t",
          "\n\n",
          "\n\n    ",
          "\n        ",
          "\n    ",
          '\n\n    <div\n      class="sb-dates__los\n      ',
          " sb-dates__los--bold\n      ",
          '\n      ">\n\n      \n      ',
          '\n          <i class="bicon bicon-halfmoon sb_dates__los__icon"></i>\n          <span class="sb-dates__los__text">\n      ',
          "\n\n        ",
          "\n          ",
          "/private/bh_sbox_general_dates_num_weeks/name",
          "/private/bh_gf_sbox_general_dates_num_nights_1/name",
          "/private/sbox_general_dates_num_nights_1/name",
          "\n      ",
          "\n         </span>\n      ",
          "\n    </div>\n",
          '\n    <div class="sb-dates--los-placeholder"></div>\n',
          "\n",
        ],
        r = [
          "b_action",
          "fe_sb_los_bold",
          "fe_sb_state_length_of_stay_in_weeks",
          "fe_sb_state_length_of_stay",
          "fe_is_family",
          "b_search_config",
        ];
      return _r_(function (e) {
        _i_("4ab:efd0f5b9");
        var t,
          i = "",
          n = this.fn;
        return (
          (i += s[0]),
          (t = i),
          _i_("4ab:d8cbdf90"),
          (t += s[1]),
          n.MJ(n.MB(r[3]))
            ? ((t += s[2]),
              n.MJ(n.MB(r[1]) + "" == "") &&
                ((t += s[3]),
                n.MN(
                  "fe_sb_los_bold",
                  n.MJ(n.MC(r[0]) + "" == "hotel") &&
                    n.track_experiment("AEJPOTIKSBOEQC")
                ),
                (t += s[4])),
              (t += s[5]),
              n.MD(r[1]) && (t += s[6]),
              (t += s[7]),
              n.MD(r[1]) && (t += s[8]),
              (t += s[9]),
              n.MD(r[2])
                ? (t += [
                    s[10],
                    (e.unshift({ num_weeks: n.MB(r[2]) }),
                    (a = n.ME(
                      s[11],
                      n.MB,
                      n.MN,
                      n.MO(n.MC(r[2]), null, s[11])
                    )),
                    e.shift(),
                    a),
                    s[3],
                  ].join(""))
                : n.MJ(n.MB(r[4])) ||
                  (n.MJ(n.MC(r[5])) && n.MJ(n.MC(r[5]).b_children_total))
                ? (t += [
                    s[10],
                    (e.unshift({ num_nights: n.MB(r[3]) }),
                    (a = n.ME(
                      s[12],
                      n.MB,
                      n.MN,
                      n.MO(n.MC(r[3]), null, s[12])
                    )),
                    e.shift(),
                    a),
                    s[3],
                  ].join(""))
                : (t += [
                    s[10],
                    (e.unshift({ num_nights: n.MB(r[3]) }),
                    (a = n.ME(
                      s[13],
                      n.MB,
                      n.MN,
                      n.MO(n.MC(r[3]), null, s[13])
                    )),
                    e.shift(),
                    a),
                    s[3],
                  ].join("")),
              (t += s[14]),
              n.MD(r[1]) && (t += s[15]),
              (t += s[16]))
            : (t += s[17]),
          (t += s[18]),
          (i = _r_(t)),
          (i += s[4]),
          _r_(i)
        );
      });
    })()
  ),
  B.define("component/search/dates/length-of-stay", function (e, t, i) {
    _i_("4ab:8d6a1489");
    var n = e("calendar-base").Calendar,
      a = e("component"),
      s = e("read-data-options"),
      r = e("search/searchbox/model");
    (i.exports = a.extend({
      init: function () {
        _i_("4ab:f03f89b9"),
          (this.options = s(this.$el, {
            modelId: { name: "sb-id", type: String, required: !0 },
            isAvailability: { name: "is-availability", type: Boolean },
          })),
          (this.model = r.getInstance(this.options.modelId)),
          this.model.use("dates"),
          this.model.use("group"),
          this.model.on("change", this.modelChange.bind(this)),
          (this.state = {}),
          "hotel" === B.env.b_action &&
            B.et.track("AEJPOTIKSBOEQC") &&
            (this.state.fe_sb_los_bold = 1),
          (this.template = B.jstmpl("search_dates_length_of_stay")),
          _r_();
      },
      modelChange: function (e) {
        if (
          (_i_("4ab:62afab30"),
          !e || ("dates" != e.group && "group" != e.group))
        )
          return _r_();
        this.render(), _r_();
      },
      render: function () {
        _i_("4ab:d8f5d444");
        var e = this.model.dates.get(),
          t = this.model.group.get();
        (this.state.fe_is_family =
          t.children_ages && 0 < t.children_ages.length ? 1 : 0),
          (this.state.fe_is_availability = this.options.isAvailability),
          (this.state.fe_sb_state_length_of_stay =
            !e.editing &&
            e.checkin &&
            e.checkout &&
            0 < n.diff(e.checkout, e.checkin)
              ? n.interval(e.checkin, e.checkout) - 1
              : "");
        var i = this.state.fe_sb_state_length_of_stay;
        (this.state.fe_sb_state_length_of_stay_in_weeks =
          i && 7 <= i && !(i % 7) ? i / 7 : 0),
          this.$el.html(this.template.render(this.state)),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("search/dates/model", function (e, t, i) {
    "use strict";
    _i_("4ab:17897db7");
    var _ = e("calendar-base").Calendar,
      l = e("search/modules/search-date").SearchDate,
      n = e("server-data"),
      a = B.env.b_timestamp,
      s = B.env.sunday_first,
      r = B.env.b_search_max_months || 13,
      o = n.b_max_los_data_for_prefilled_dest || {};
    function d(e) {
      _i_("4ab:dff90372"),
        (this._model = e),
        (this._data = {
          initialized: !1,
          checkin: null,
          checkinTime: null,
          checkout: null,
          checkoutTime: null,
          firstValidDay: null,
          lastValidDay: null,
          editing: !1,
          editing_checkin: null,
          editing_checkout: null,
          length_of_stay: null,
          week_start: s ? 0 : 1,
          extendedDate: null,
        }),
        (this._valid = !0),
        (this._validationError = ""),
        (this._options = {
          maxLos: o.max_allowed_los || 30,
          maxMonths: r,
          syncLegacy: !B.env.fe_xpi_no_legacy_sync,
          allowZeroLos: !1,
        });
      var t = new Date(1e3 * (a - 39600));
      (this._data.firstValidDay = l.create({
        year: t.getUTCFullYear(),
        month: t.getUTCMonth(),
        day: t.getUTCDate(),
      })),
        (this._data.lastValidDay = l.createFlexible({
          year: t.getUTCFullYear(),
          month: t.getUTCMonth() + this._options.maxMonths,
          day: 0,
        })),
        (this._data.firstValidCheckoutDay = l.create({
          year: t.getUTCFullYear(),
          month: t.getUTCMonth(),
          day: t.getUTCDate() + 1,
        })),
        this._options.syncLegacy &&
          ((this.boundLegacyDateChange = this.legacyDateChange.bind(this)),
          B.eventEmitter.on(
            B.Search.Events.DATE_CHANGED,
            this.boundLegacyDateChange
          )),
        _r_();
    }
    $.extend(d.prototype, {
      init: function (e) {
        _i_("4ab:bef83fce");
        var t = l.create(e.checkin),
          i = l.create(e.checkout);
        this.validateDate("checkin", t).valid &&
          this.validateDate("checkout", i, { checkin: t }).valid &&
          (this.setDate("checkin", t, { init: !0 }),
          this.setDate("checkout", i, { init: !0 }),
          this.emit("init")),
          _r_();
      },
      configure: function (e, t) {
        _i_("4ab:2e70fbcb");
        var i = this._options.maxMonths,
          n = this._options.syncLegacy;
        void 0 !== t
          ? (this._options[e] = t)
          : "object" == typeof e && $.extend(this._options, e),
          i != this._options.maxMonths &&
            (this._data.lastValidDay = l.createFlexible({
              year: this._data.firstValidDay.year,
              month: this._data.firstValidDay.month + this._options.maxMonths,
              day: 0,
            })),
          n !== this._options.syncLegacy &&
            B.eventEmitter[this._options.syncLegacy ? "on" : "off"](
              B.Search.Events.DATE_CHANGED,
              this.boundLegacyDateChange
            ),
          _r_();
      },
      getOption: function (e) {
        return _i_("4ab:e91d2a9f"), _r_(this._options[e]);
      },
      get: function () {
        return _i_("4ab:1a04a75e"), _r_(this._data);
      },
      getValidationError: function () {
        return _i_("4ab:9f837e6c"), _r_(this._validationError);
      },
      initDate: function (e, t, i) {
        _i_("4ab:81301438");
        var n = !((i = i || {}).init = !0);
        if (this._data.initialized) return _r_(!1);
        return (
          t && (n = this.setDate(e, t, i)),
          (this._data[e + "Time"] = { hours: 10, minutes: 0 }),
          (this["initialized" + e] = !0),
          this.initializedcheckin &&
            this.initializedcheckout &&
            (this.emit("init"), (this._data.initialized = !0)),
          _r_(n)
        );
      },
      setDate: function (e, t, i) {
        var n, a, s;
        _i_("4ab:37e4004b"), (i = i || {});
        var r = { type: e };
        if (
          ((t = l.create(t)),
          !this._options.noValidation &&
            !this.validateDate(e, t, { loose: !0 }).valid)
        )
          return _r_(!1);
        if ("checkin" == e)
          (this._data.checkin = t),
            (a = !0),
            l.compare(this._data.checkin, this._data.firstValidDay) < 0 &&
              (this._data.checkin = l.create(this._data.firstValidDay)),
            0 < l.compare(this._data.checkin, this._data.lastValidDay) &&
              (this._data.checkin = l.createFlexible({
                year: this._data.lastValidDay.year,
                month: this._data.lastValidDay.month,
                day: this._data.lastValidDay.day - 1,
              })),
            this._data.checkout
              ? (n = _.diff(this._data.checkout, t)) <= 0
                ? ((this._data.checkout = l.createFlexible({
                    year: t.year,
                    month: t.month,
                    day: t.day + 1,
                  })),
                  (s = !0))
                : !this._options.allowMaxLos &&
                  n > this._options.maxLos &&
                  ((this._data.checkout = l.createFlexible({
                    year: t.year,
                    month: t.month,
                    day: t.day + this._options.maxLos,
                  })),
                  (s = !0))
              : ((this._data.checkout = l.createFlexible({
                  year: t.year,
                  month: t.month,
                  day: t.day + 1,
                })),
                (s = !0));
        else {
          if ("checkout" != e) return _r_(!1);
          var o;
          (this._data.checkout = t),
            (s = !0),
            0 < l.compare(this._data.checkout, this._data.lastValidDay) &&
              (this._data.checkout = l.create(this._data.lastValidDay)),
            0 == l.compare(this._data.checkout, this._data.firstValidDay) &&
              ((o = this._options.allowZeroLos ? 0 : 1),
              (this._data.checkin = l.create(this._data.firstValidDay)),
              (this._data.checkout = l.createFlexible({
                year: this._data.firstValidDay.year,
                month: this._data.firstValidDay.month,
                day: this._data.firstValidDay.day + o,
              })),
              (s = !0)),
            this._data.checkin &&
              (n = _.diff(t, this._data.checkin)) <= 0 &&
              (this._data.checkin = null),
            this._data.checkin ||
              ((o = this._options.allowZeroLos ? 0 : 1),
              (this._data.checkin = l.createFlexible({
                year: t.year,
                month: t.month,
                day: t.day - o,
              })),
              (a = !0));
        }
        return (
          a &&
            (this._options.syncLegacy &&
              B.search.setDate_("checkin", this._data.checkin.toString(), {
                referrer: "search/dates/model",
              }),
            (this._data.editing_checkin = this._data.checkin),
            (r.checkin = !0)),
          s &&
            (this._options.syncLegacy &&
              B.search.setDate_("checkout", this._data.checkout.toString(), {
                referrer: "search/dates/model",
              }),
            (this._data.editing_checkout = this._data.checkout),
            (r.checkout = !0)),
          (a || s) &&
            (this._data.length_of_stay =
              this._data.checkin &&
              this._data.checkout &&
              _.interval(this._data.checkin, this._data.checkout) - 1),
          (this._data.editing = !1),
          i.init || this.emit("change", r),
          _r_(!0)
        );
      },
      startEditing: function () {
        if ((_i_("4ab:f6cec567"), this._data.editing)) return _r_();
        (this._data.editing = !0), this.emit("change", { editing: !0 }), _r_();
      },
      setEditingFragment: function (e, t, i) {
        if ((_i_("4ab:156acdc4"), "checkin" !== e && "checkout" !== e))
          throw new TypeError("invalid type");
        if ("day" !== t && "month" !== t && "year" !== t)
          throw new TypeError("invalid fragment");
        if ("number" != typeof i && null !== i)
          throw new TypeError("invalid value");
        var n = this._data["editing_" + e] || {},
          a = { year: n.year, month: n.month, day: n.day },
          s = { editing: !0 };
        return (
          (a[t] = i),
          (this._data.editing = !0),
          (this._data["editing_" + e] = l.create(a)),
          (s[e] = !0),
          this.emit("change", s),
          _r_(!0)
        );
      },
      adjustEditingFragment: function (e, t, i, n) {
        if ((_i_("4ab:080bf90d"), "checkin" !== e && "checkout" !== e))
          throw new TypeError("invalid type");
        if ("day" !== t && "month" !== t && "year" !== t)
          throw new TypeError("invalid fragment");
        var a = 1,
          s = i + n;
        return (
          "month" == t
            ? (a = 0)
            : "year" == t && (a = this._data.firstValidDay.year),
          s < a && (s = a),
          _r_(this.setEditingFragment(e, t, s))
        );
      },
      applyEditing: function (e) {
        if ((_i_("4ab:bce3aab4"), "checkin" !== e && "checkout" !== e))
          throw new TypeError("invalid type");
        return this._data["editing_" + e].complete
          ? _r_(this.setDate(e, this._data["editing_" + e]))
          : (this.clearDates(), _r_(!0));
      },
      clearDates: function () {
        _i_("4ab:f4728cb2"),
          (this._data.checkin = null),
          (this._data.checkout = null),
          (this._data.editing = !1),
          (this._data.editing_checkin = null),
          (this._data.editing_checkout = null),
          (this._data.length_of_stay = null),
          this._options.syncLegacy &&
            (B.search.setDate_("checkin", "", {
              referrer: "search/dates/model",
            }),
            B.search.setDate_("checkout", "", {
              referrer: "search/dates/model",
            })),
          this.emit("change", { checkin: !0, checkout: !0 }),
          _r_();
      },
      validate: function (e) {
        _i_("4ab:824801f5"), (e = e || {});
        var t,
          i = !0,
          n = "";
        (!i ||
          !e.notEmpty ||
          (this._data.checkin && this._data.checkout) ||
          ((i = !1), (n = "missing-dates")),
        i &&
          !this._data.checkin &&
          this._data.checkout &&
          ((i = !1), (n = "missing-checkin")),
        i &&
          this._data.checkin &&
          !this._data.checkout &&
          ((i = !1), (n = "missing-checkout")),
        i && this._data.checkin) &&
          ((t = this.validateDate("checkin", this._data.checkin)).valid ||
            ((i = t.valid), (n = t.validationError)));
        i &&
          this._data.checkout &&
          ((t = this.validateDate("checkout", this._data.checkout)).valid ||
            ((i = t.valid), (n = t.validationError)));
        if (i && e.validateTime) {
          var a = new Date(1e3 * B.env.b_timestamp),
            s = a.getUTCDate(),
            r = a.getUTCMonth(),
            o = a.getUTCFullYear(),
            _ = a.getHours() + 2;
          (!this._data.checkin ||
            (this._data.checkin.year === o &&
              this._data.checkin.month === r &&
              this._data.checkin.day == s)) &&
            this._data.checkinTime <= _ &&
            ((i = !1), (n = "past-time"));
        }
        return (
          (e.force || (!e.checkOnly && this._valid != i)) &&
            ((this._valid = i),
            (this._validationError = n),
            this.emit("validation", { valid: i, validationError: n })),
          _r_(i)
        );
      },
      validateDate: function (e, t, i) {
        _i_("4ab:06814dd1"),
          ((i = i || {}).checkin = i.checkin || this._data.checkin);
        var n = null;
        if (!e || ("checkin" != e && "checkout" != e))
          return _r_({ valid: !1, validationError: "invalid-data" });
        if (
          !t ||
          void 0 === t.year ||
          void 0 === t.month ||
          void 0 === t.day ||
          isNaN(t.year) ||
          isNaN(t.month) ||
          isNaN(t.day)
        )
          return _r_({ valid: !1, validationError: "invalid-data" });
        if (
          ("checkin" == e && l.compare(t, this._data.firstValidDay) < 0) ||
          ("checkout" == e && 0 == l.compare(t, this._data.firstValidDay))
        )
          return _r_({ valid: !1, validationError: "past" });
        if (
          ("checkout" == e && i.checkin && (n = _.diff(t, i.checkin)),
          null !== n)
        ) {
          if (0 == n && !this._options.allowZeroLos)
            return _r_({ valid: !1, validationError: "more-than-one-day" });
          if (n < 0)
            return _r_({ valid: !1, validationError: "negative-period" });
          if (
            (this.emit("validation:lengthOfStay", {
              lengthOfStay: n,
              maxLengthOfStay: this._options.maxLos,
            }),
            n > this._options.maxLos)
          )
            return _r_({ valid: !1, validationError: "exceeds-max-los" });
        }
        return _r_({ valid: !0, validationError: "" });
      },
      legacyDateChange: function (e, t) {
        var i, n;
        if ((_i_("4ab:98f43f37"), "search/dates/model" == t.referrer))
          return _r_();
        (i = "checkin" == t.type ? "checkin" : "checkout"),
          (n = l.createFromString(t.value.toString())),
          this.setDate(i, n),
          _r_();
      },
      emit: function (e, t) {
        _i_("4ab:c019a7c4"),
          (t = t || {}),
          this._model.emit(e, $.extend(t, { group: "dates" })),
          _r_();
      },
      getFallbackDates: function (e) {
        var t, i;
        return (
          _i_("4ab:7009f80e"),
          (i =
            "checkin" === e ? B.env.b_checkin_date : B.env.b_checkout_date) &&
            ((i = i.split("-")),
            (t = {
              year: parseInt(i[2], 10),
              month: parseInt(i[1], 10),
              day: parseInt(i[0], 10),
            })),
          _r_(t || {})
        );
      },
      setExtendedDate: function (e) {
        _i_("4ab:d589e1c7"),
          (this._data.extendedDate = e),
          this.emit("change", { extendeDate: e }),
          _r_();
      },
    }),
      (i.exports = d),
      _r_();
  }),
  booking.jstmpl(
    "fe_search_dates_errors",
    (function () {
      _i_("4ab:3a3d4b11");
      var a,
        s = [
          "\n\t",
          "\n\n\t\t",
          "\n\t\t\t",
          "\n\t\t\t\t",
          "/error/checkout_date_invalid/name",
          "/error/checkin_date_invalid/name",
          "/private/sbox_error_checkin_future/name",
          "/error/checkin_date_to_far_in_the_future/name",
          "/private/sbox_error_checkout_after/name",
          "\n\t\t    \n\t\t\t\n\t\t\t",
          "/private/sbox_error_45_night_res/name",
          "\n\t\t\t\n\t\t\t",
          "/private/sbox_error_30_night_res/name",
          "\n                ",
          "\n                    ",
          "/private/sbox_error_num_night_res/name",
          "/private/lp_hp_no_dates_selected_error/name",
          "\n\t\t",
          "\n\t\t\t\t\t",
          "/private/iq_sbox_error_flights_return_date_invalid/name",
          "/private/iq_sbox_error_flights_departure_date_invalid/name",
          "/private/iq_sbox_error_dates/name",
          "/private/iq_sbox_error_flights_departure_date_too_far_future/name",
          "/private/iq_sbox_error_flights_return_after_departure/name",
          "/private/iq_sbox_error_cars_arrival_date_invalid/name",
          "/private/iq_sbox_error_cars_departure_date_invalid/name",
          "/private/iq_sbox_error_cars_departure_date_too_far_future/name",
          "/private/iq_sbox_error_cars_arrival_after_departure/name",
          "/private/iq_sbox_error_cars_1_hour_future/name",
          '\n\t\t\t<div class="bui-alert bui-u-bleed@small bui-alert--error" role="status">\n\t\t\t\t<span class="bui-alert__icon">\n\t\t\t\t\t',
          "",
          "20",
          "streamline/warning",
          '\n\t\t\t\t</span>\n\t\t\t\t<div class="bui-alert__description">\n\t\t\t\t\t',
          "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t",
          "\n\n\n\n\n\n\n",
          "\n\n    ",
          "\n        ",
          "data-",
          '="',
          '"',
          "\n    ",
          " data-",
          '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ',
          '<div class="fe_banner fe_banner__accessible ',
          "fe_banner__scale_small ",
          "fe_banner__w-icon ",
          "fe_banner__w-dismiss ",
          "fe_banner__",
          " ",
          "fe_banner__w-icon-",
          "fe_banner__bp fe_banner__inherit_font_size ",
          ' " ',
          'id="',
          '" ',
          'role="alert"',
          "> ",
          '<i class="fe_banner__icon ',
          '" aria-hidden="true"></i> ',
          '<img class="fe_banner__icon" src="',
          '"> ',
          '<span class="',
          "fe_banner__icon",
          " </span> ",
          '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ',
          '<h3 class="fe_banner__title"> ',
          " </h3> ",
          '<div class="fe_banner__message"> ',
          " </div> ",
          '</div> <div class="fe_banner__button"> ',
          "</div> ",
          '<span class="fe_banner__dismiss js-close" role="button" tabindex="1" aria-label="',
          "/private/a11y_cta_close_banner_new/name",
          '"><i class="bicon-btnclose"></i></span> ',
          "\n",
          "\n\n\n\n",
          "\n\n",
          "0",
          "red",
        ],
        r = [
          "fe_error_message",
          "fe_error",
          "s_raw_param_errorc_checkout_date_invalid",
          "s_raw_param_errorc_checkin_date_invalid",
          "s_raw_param_errorc_checkin_date_in_the_past",
          "s_raw_param_errorc_checkin_date_to_far_in_the_future",
          "s_raw_param_errorc_checkout_date_not_after_checkin_date",
          "fe_use_dynamic_copy",
          "fe_max_los",
          "s_raw_param_errorc_checkout_date_more_than_30_days_after_checkin",
          "b_max_los_data",
          "fe_max_number_of_nights_error_message",
          "fe_sb_no_dates_message",
          "fe_view",
          "fe_sb_facelift",
          "fe_banner__data",
          "fe_banner__data_id",
          "fe_banner__data_value",
          "fe_banner__data_id_2",
          "fe_banner__data_value_2",
          "fe_banner__data_id_3",
          "fe_banner__data_value_3",
          "fe_banner__data_id_4",
          "fe_banner__data_value_4",
          "fe_banner__data_id_5",
          "fe_banner__data_value_5",
          "fe_banner__animate",
          "fe_banner__scale",
          "fe_banner__icon_class",
          "fe_banner__icon_img_url",
          "fe_banner__icon_svg",
          "fe_banner__close_button",
          "fe_banner__color_scheme",
          "fe_banner__color_scheme_classes",
          "fe_banner__icon_size",
          "b_action",
          "fe_banner__extra_classes",
          "fe_banner__id",
          "fe_banner__aria_alert",
          "fe_banner__icon_svg_class",
          "fe_banner__btn_include",
          "fe_banner__title_text",
          "fe_banner__message_text",
          "fe_banner__banners_count",
        ];
      return _r_(function (i) {
        _i_("4ab:0e932193");
        var e = "",
          n = this.fn;
        return (
          (e = (function (e) {
            if (
              (_i_("4ab:14c12523"),
              n.MJ(n.MB(r[1])) ||
                n.MJ(n.MC(r[2])) ||
                n.MJ(n.MC(r[3])) ||
                n.MJ(n.MC(r[4])) ||
                n.MJ(n.MC(r[5])) ||
                n.MJ(n.MC(r[6])) ||
                n.MJ(n.MC(r[9])))
            ) {
              e += s[1];
              var t = "";
              (t += s[2]),
                n.MJ(n.MB(r[1]) + "" == "missing-checkout") || n.MJ(n.MC(r[2]))
                  ? (t += [s[3], n.ME(s[4], n.MB, n.MN, null), s[2]].join(""))
                  : n.MJ(n.MB(r[1]) + "" == "missing-checkin") ||
                    n.MJ(n.MC(r[3]))
                  ? (t += [s[3], n.ME(s[5], n.MB, n.MN, null), s[2]].join(""))
                  : n.MJ(n.MB(r[1]) + "" == "past") || n.MJ(n.MC(r[4]))
                  ? (t += [s[3], n.ME(s[6], n.MB, n.MN, null), s[2]].join(""))
                  : n.MJ(
                      n.MB(r[1]) + "" == "checkin_date_to_far_in_the_future"
                    ) || n.MJ(n.MC(r[5]))
                  ? (t += [s[3], n.ME(s[7], n.MB, n.MN, null), s[2]].join(""))
                  : n.MJ(n.MB(r[1]) + "" == "negative-period") ||
                    n.MJ(n.MC(r[6]))
                  ? (t += [s[3], n.ME(s[8], n.MB, n.MN, null), s[9]].join(""))
                  : n.MK(n.MB(r[7])) &&
                    n.MJ(n.MB(r[1]) + "" == "exceeds-max-los") &&
                    n.MJ(45 == n.MB(r[8]))
                  ? (t += [s[3], n.ME(s[10], n.MB, n.MN, null), s[11]].join(""))
                  : n.MK(n.MB(r[7])) &&
                    (n.MJ(n.MB(r[1]) + "" == "exceeds-max-los") ||
                      n.MJ(n.MC(r[9])))
                  ? (t += [s[3], n.ME(s[12], n.MB, n.MN, null), s[2]].join(""))
                  : n.MJ(n.MB(r[7])) &&
                    (n.MJ(n.MB(r[1]) + "" == "exceeds-max-los") ||
                      n.MJ(n.MC(r[9])))
                  ? ((t += s[13]),
                    n.MN("fe_max_number_of_nights_error_message", 0),
                    (t += s[13]),
                    n.MD(r[8])
                      ? ((t += s[14]),
                        n.MN(
                          "fe_max_number_of_nights_error_message",
                          n.MB(r[8])
                        ),
                        (t += s[13]))
                      : n.MJ(n.MC(r[9])) &&
                        n.MJ(n.MC(r[10])) &&
                        n.MJ(n.MC(r[10]).max_allowed_los) &&
                        ((t += s[14]),
                        n.MN(
                          "fe_max_number_of_nights_error_message",
                          n.MG((n.MC(r[10]) || {}).max_allowed_los)
                        ),
                        (t += s[13])),
                    (t += [
                      s[13],
                      (i.unshift({ num: n.MB(r[11]) }),
                      (a = n.ME(
                        s[15],
                        n.MB,
                        n.MN,
                        n.MO(n.MC(r[11]), null, s[15])
                      )),
                      i.shift(),
                      a),
                      s[2],
                    ].join("")))
                  : n.MJ(n.MB(r[1]) + "" == "missing-dates") &&
                    n.MJ(n.MB(r[12]))
                  ? (t += [s[3], n.ME(s[16], n.MB, n.MN, null), s[2]].join(""))
                  : n.MJ(n.MB(r[1])) &&
                    (t += [s[3], n.ME(s[5], n.MB, n.MN, null), s[2]].join("")),
                (t += s[17]),
                n.MN(r[0], t),
                (e += s[1]),
                n.MJ(n.MB(r[13]) + "" == "flights") &&
                  ((e += s[2]),
                  (t = ""),
                  (t += s[3]),
                  n.MJ(n.MB(r[1]) + "" == "missing-checkout")
                    ? (t += [s[18], n.ME(s[19], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1]) + "" == "missing-checkin")
                    ? (t += [s[18], n.ME(s[20], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1]) + "" == "past")
                    ? (t += [s[18], n.ME(s[21], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(
                        n.MB(r[1]) + "" == "checkin_date_to_far_in_the_future"
                      )
                    ? (t += [s[18], n.ME(s[22], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1]) + "" == "negative-period")
                    ? (t += [s[18], n.ME(s[23], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1]) + "" == "missing-dates")
                    ? (t += [s[18], n.ME(s[20], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1])) &&
                      (t += [s[18], n.ME(s[20], n.MB, n.MN, null), s[3]].join(
                        ""
                      )),
                  (t += s[2]),
                  n.MN(r[0], t),
                  (e += s[17])),
                (e += s[1]),
                n.MJ(n.MB(r[13]) + "" == "rentalcars") &&
                  ((e += s[2]),
                  (t = ""),
                  (t += s[3]),
                  n.MJ(n.MB(r[1]) + "" == "missing-checkout")
                    ? (t += [s[18], n.ME(s[24], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1]) + "" == "missing-checkin")
                    ? (t += [s[18], n.ME(s[25], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1]) + "" == "past")
                    ? (t += [s[18], n.ME(s[21], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(
                        n.MB(r[1]) + "" == "checkin_date_to_far_in_the_future"
                      )
                    ? (t += [s[18], n.ME(s[26], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1]) + "" == "negative-period")
                    ? (t += [s[3], n.ME(s[27], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1]) + "" == "missing-dates")
                    ? (t += [s[18], n.ME(s[25], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1]) + "" == "past-time")
                    ? (t += [s[18], n.ME(s[28], n.MB, n.MN, null), s[3]].join(
                        ""
                      ))
                    : n.MJ(n.MB(r[1])) &&
                      (t += [s[18], n.ME(s[25], n.MB, n.MN, null), s[3]].join(
                        ""
                      )),
                  (t += s[2]),
                  n.MN(r[0], t),
                  (e += s[17])),
                (e += s[1]),
                n.MD(r[14])
                  ? (e += [
                      s[29],
                      (i.unshift({
                        class: s[30],
                        height: s[31],
                        name: s[32],
                        width: s[31],
                      }),
                      (a = n.HELPER("icon", i[0])),
                      i.shift(),
                      a),
                      s[33],
                      n.MC(r[0]),
                      s[34],
                    ].join(""))
                  : ((e += s[2]),
                    i.unshift({
                      fe_banner__close_button: s[77],
                      fe_banner__color_scheme: s[78],
                      fe_banner__message_text: n.MB(r[0]),
                    }),
                    (e = (function (e) {
                      if (
                        (_i_("4ab:25afd159"),
                        (e += ["", s[35]].join("")),
                        n.MD(r[42]))
                      ) {
                        (e += s[36]),
                          n.MD(r[16]) &&
                            ((e += s[37]),
                            n.MN(
                              r[15],
                              [
                                s[38],
                                n.MB(r[16]),
                                s[39],
                                n.MB(r[17]),
                                s[40],
                              ].join("")
                            ),
                            (e += s[41])),
                          (e += s[36]),
                          n.MD(r[18]) &&
                            ((e += s[37]),
                            n.MN(
                              r[15],
                              [
                                n.MB(r[15]),
                                s[42],
                                n.MB(r[18]),
                                s[39],
                                n.MB(r[19]),
                                s[40],
                              ].join("")
                            ),
                            (e += s[41])),
                          (e += s[36]),
                          n.MD(r[20]) &&
                            ((e += s[37]),
                            n.MN(
                              r[15],
                              [
                                n.MB(r[15]),
                                s[42],
                                n.MB(r[20]),
                                s[39],
                                n.MB(r[21]),
                                s[40],
                              ].join("")
                            ),
                            (e += s[41])),
                          (e += s[36]),
                          n.MD(r[22]) &&
                            ((e += s[37]),
                            n.MN(
                              r[15],
                              [
                                n.MB(r[15]),
                                s[42],
                                n.MB(r[22]),
                                s[39],
                                n.MB(r[23]),
                                s[40],
                              ].join("")
                            ),
                            (e += s[41])),
                          (e += s[36]),
                          n.MD(r[24]) &&
                            ((e += s[37]),
                            n.MN(
                              r[15],
                              [
                                n.MB(r[15]),
                                s[42],
                                n.MB(r[24]),
                                s[39],
                                n.MB(r[25]),
                                s[40],
                              ].join("")
                            ),
                            (e += s[41])),
                          (e += s[36]),
                          n.MD(r[26]) && (e += s[43]),
                          (e += s[44]);
                        var t = n.MB(r[27]);
                        n.MJ(t + "" == "small") && (e += s[45]),
                          (n.MJ(n.MB(r[28])) ||
                            n.MJ(n.MB(r[29])) ||
                            n.MJ(n.MB(r[30]))) &&
                            (e += s[46]),
                          n.MD(r[31]) && (e += s[47]),
                          n.MJ(n.MB(r[32])) &&
                            (e += [
                              s[48],
                              n.F.entities(n.MC(r[32])),
                              n.F.entities(n.MC(r[33])),
                              s[49],
                            ].join("")),
                          n.MJ(n.MB(r[28])) &&
                            n.MJ(n.MB(r[34])) &&
                            (e += [
                              s[50],
                              n.F.entities(n.MC(r[34])),
                              s[49],
                            ].join("")),
                          (n.MJ(n.MC(r[35]) + "" == "book") ||
                            n.MJ(n.MC(r[35]) + "" == "tpi_book")) &&
                            (e += s[51]),
                          (e += [n.F.entities(n.MC(r[36])), s[52]].join("")),
                          n.MD(r[37]) &&
                            (e += [
                              s[53],
                              n.F.entities(n.MC(r[37])),
                              s[54],
                            ].join("")),
                          n.MD(r[15]) && (e += [n.MC(r[15]), s[49]].join("")),
                          n.MD(r[38]) && (e += s[55]),
                          (e += s[56]),
                          n.MD(r[28])
                            ? (e += [
                                s[57],
                                n.F.entities(n.MC(r[28])),
                                s[58],
                              ].join(""))
                            : n.MD(r[29])
                            ? (e += [
                                s[59],
                                n.F.entities(n.MC(r[29])),
                                s[60],
                              ].join(""))
                            : n.MD(r[30]) &&
                              ((e += s[61]),
                              n.MD(r[39])
                                ? (e += n.F.entities(n.MC(r[39])))
                                : (e += s[62]),
                              (e += [s[60], n.MC(r[30]), s[63]].join(""))),
                          n.MD(r[40]) && (e += s[64]),
                          n.MD(r[41]) &&
                            (e += [s[65], n.MC(r[41]), s[66]].join("")),
                          n.MD(r[42]) &&
                            (e += [s[67], n.MC(r[42]), s[68]].join("")),
                          n.MD(r[40]) &&
                            (e += [s[69], n.MC(r[40]), s[68]].join("")),
                          n.MD(r[40]) && (e += s[70]),
                          n.MD(r[31]) &&
                            (e += [
                              s[71],
                              n.ME(s[72], n.MB, n.MN, null),
                              s[73],
                            ].join("")),
                          (e += s[70]),
                          n.MD(r[26]) && (e += s[70]),
                          (e += s[74]);
                      }
                      return (
                        (e += s[75]),
                        n.MN(r[32], void 0),
                        (e += s[74]),
                        n.MN(r[28], void 0),
                        (e += s[74]),
                        n.MN(r[29], void 0),
                        (e += s[74]),
                        n.MN(r[30], void 0),
                        (e += s[74]),
                        n.MN(r[34], void 0),
                        (e += s[74]),
                        n.MN(r[41], void 0),
                        (e += s[74]),
                        n.MN(r[42], void 0),
                        (e += s[74]),
                        n.MN(r[40], void 0),
                        (e += s[74]),
                        n.MN(r[31], void 0),
                        (e += s[74]),
                        n.MN(r[37], void 0),
                        (e += s[74]),
                        n.MN(r[36], void 0),
                        (e += s[74]),
                        n.MN(r[27], void 0),
                        (e += s[76]),
                        n.MN(r[16], void 0),
                        (e += s[74]),
                        n.MN(r[17], void 0),
                        (e += s[74]),
                        n.MN(r[18], void 0),
                        (e += s[74]),
                        n.MN(r[19], void 0),
                        (e += s[74]),
                        n.MN(r[20], void 0),
                        (e += s[74]),
                        n.MN(r[21], void 0),
                        (e += s[74]),
                        n.MN(r[22], void 0),
                        (e += s[74]),
                        n.MN(r[23], void 0),
                        (e += s[74]),
                        n.MN(r[24], void 0),
                        (e += s[74]),
                        n.MN(r[25], void 0),
                        (e += s[76]),
                        n.MN(r[33], void 0),
                        (e += s[76]),
                        n.MN(r[15], void 0),
                        (e += s[74]),
                        n.MN(
                          "fe_banner__banners_count",
                          n.MI(n.MB(r[43])) + n.MI(1)
                        ),
                        (e += s[76]),
                        n.MJ(n.MC(r[35]) + "" == "book") &&
                        n.MJ(
                          n.track_experiment_stage(
                            "HBaMEAbXDMUBdOYZbKZTSfXPRQYO",
                            2
                          )
                        )
                          ? (e += s[74])
                          : n.MJ(
                              n.track_experiment_stage(
                                "HBaMEAbXDMUBdOYZbKZTSfXPRQYO",
                                1
                              )
                            ) && (e += s[74]),
                        (e += [s[76], "", s[74]].join("")),
                        _r_(e)
                      );
                    })(e)),
                    i.shift(),
                    (e += s[17])),
                (e += s[76]);
            }
            return (e += s[74]), _r_(e);
          })((e += s[0]))),
          (e += s[74]),
          _r_(e)
        );
      });
    })()
  ),
  B.define("component/search/destination/country-only", function (e, t, i) {
    "use strict";
    _i_("4ab:aebf70e1");
    var n = e("component"),
      a = e("search/searchbox/model"),
      s = e("read-data-options");
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:b3871297"),
          (this.options = s(this.$el, {
            modelId: { name: "sb-id", type: String, required: !0 },
          })),
          (this.model = a.getInstance(this.options.modelId)),
          this.model.use("destination"),
          this.model.on("change", this.modelChange.bind(this)),
          (this.$onlyCurrentCountry = this.$el.find("[data-input]")),
          this.$onlyCurrentCountry.bind(
            "change",
            this.onlyCurrentCountryChange.bind(this)
          ),
          this.modelInit(),
          _r_();
      },
      modelInit: function () {
        _i_("4ab:e2255259");
        var e = this.$onlyCurrentCountry.is(":checked");
        this.model.destination.initOnlyCurrentCountry(e), _r_();
      },
      modelChange: function (e) {
        if ((_i_("4ab:9b8a0610"), !e || !e.onlyCurrentCountry)) return _r_();
        var t = this.$onlyCurrentCountry.is(":checked"),
          i = this.model.destination.getOnlyCurrentCountry();
        t != i && this.$onlyCurrentCountry.prop("checked", i), _r_();
      },
      onlyCurrentCountryChange: function () {
        _i_("4ab:f25dc638"),
          this.model.destination.setOnlyCurrentCountry(
            this.$onlyCurrentCountry.is(":checked")
          ),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("component/search/group/group", function (t, e, i) {
    _i_("4ab:5801d550"),
      booking.jstmpl(
        "search_group_group_html",
        (function () {
          _i_("4ab:edc4b85c");
          var b,
            g = [
              "\n\t\t",
              "\n\n\n\n\n",
              "\n",
              " \n\n\n\n",
              "\n    ",
              '\n        <div class="sb-searchbox-children-tooltip">\n            <span class="fly-dropdown-close fly-dropdown-close-icon"></span>\n            <h4 class="sb-searchbox-children-tooltip__title">',
              "/private/gs_index_model_header_family/name",
              '</h4>\n            <p class="sb-searchbox-children-tooltip__text">',
              "/private/gs_index_model_desc_family/name",
              "</p>\n        </div>\n    ",
              "\n\n\n\n",
              '\n        <div>\n            <span class="fly-dropdown-close fly-dropdown-close-icon"></span>\n            <p>',
              "/private/bh_mup_sr_sb_obp_tooltip_right_price/name",
              "\n\n\n",
              "\n\n",
              '\n\n\n\n<div class="u-clearfix" data-render>\n  ',
              '\n    <div class="sb-custom-wrapper">\n  ',
              "\n\n  ",
              "\n      ",
              "\n        ",
              "\n  ",
              '\n    <div class="sb-group__field sb-group__field-rooms">\n      ',
              "/private/sbox_rooms/name",
              '\n  <div class="bui-stepper" data-bui-component="InputStepper">\n    <div class="bui-stepper__title-wrapper">\n      <label class="bui-stepper__title" for="',
              '">',
              "</label>\n      ",
              '\n        <span class="bui-stepper__subtitle">',
              "</span>\n      ",
              "\n    </div>\n    ",
              '\n      <div class="bui-stepper__wrapper sb-group__stepper-a11y">\n        <input\n          style="display: none"\n          type="number"\n          class="bui-stepper__input"\n          data-bui-ref="input-stepper-field"\n          id="',
              '"\n          name="',
              '"\n          min="',
              '"\n          max="',
              '"\n          value="',
              '"\n          ',
              ' \n        />\n        <button\n          class="bui-button bui-button--secondary bui-stepper__subtract-button ',
              "sb-group__stepper-button-disabled",
              '"\n          data-bui-ref="input-stepper-subtract-button"\n          type="button"\n          aria-label="',
              "/private/a11y_sb_decrease_button_aria/name",
              '"\n          aria-describedby="',
              '_desc"\n        >\n          <span class="bui-button__text">&minus;</span>\n        </button>\n        <span class="bui-stepper__display" data-bui-ref="input-stepper-value" aria-hidden="true">',
              '</span>\n        <button \n          class="bui-button bui-button--secondary bui-stepper__add-button ',
              '"\n          data-bui-ref="input-stepper-add-button"\n          type="button"\n          aria-label="',
              "/private/a11y_sb_increase_button_aria/name",
              '_desc"\n        >\n          <span class="bui-button__text">+</span>\n        </button>\n        <span class="bui-u-sr-only" aria-live="assertive" id="',
              '_desc">',
              " ",
              "</span>\n      </div>\n    ",
              '\n\n    <div class="bui-stepper__wrapper">\n      <input type="range" class="bui-stepper__input" data-bui-ref="input-stepper-field" id="',
              '" name="',
              '" min="',
              '" max="',
              '" value="',
              '" ',
              ' />\n      <button class="bui-button bui-button--secondary bui-stepper__subtract-button" data-bui-ref="input-stepper-subtract-button" type="button" aria-hidden="true" ',
              "disabled",
              '>\n        <span class="bui-button__text">-</span>\n      </button>\n      <span class="bui-stepper__display" data-bui-ref="input-stepper-value" aria-hidden="true">',
              '</span>\n      <button class="bui-button bui-button--secondary bui-stepper__add-button" data-bui-ref="input-stepper-add-button" type="button" aria-hidden="true" ',
              '>\n        <span class="bui-button__text">+</span>\n      </button>\n    </div>\n\n    ',
              "\n  </div>\n",
              "data-group-rooms-count",
              "no_rooms",
              "1",
              "\n    </div>\n  ",
              '\n          <label class="sb-searchbox__label sb-group__field__label ',
              "-inline",
              " -small ",
              '"\n             ',
              '\n                for="no_rooms_',
              '"\n              ',
              '\n               for="no_rooms"\n              ',
              "\n          >\n              ",
              "\n          </label>\n      ",
              '<div class="sb-custom-select">',
              '\n    <select name="no_rooms"\n        ',
              '\n            id="no_rooms_',
              '"\n            class="no_rooms"\n        ',
              '\n            id="no_rooms"\n        ',
              '\n        data-group-rooms-count\n        aria-label="',
              "/private/index_sbox_rooms_aria/name",
              '"\n    >\n        ',
              '\n            <option value="',
              'selected="selected"',
              ">\n                ",
              "/private/search_box_room_filter/name",
              "\n            </option>\n        ",
              "\n    </select>\n    ",
              "bui-input-select__icon",
              "streamline/arrow_menu",
              "16",
              "\n\n    ",
              "</div>",
              '\n    <input type="hidden" name="no_rooms" value="',
              '">\n  ',
              "\n\n\n  ",
              '\n    <div class="sb-group__field sb-group__field-adults">\n      ',
              "/private/sbox_adults/name",
              "\n          ",
              "/private/pex_flights_search_traveller_adult_age/name",
              "data-group-adults-count",
              "group_adults",
              '\n        <label class="sb-searchbox__label sb-group__field__label ',
              "group_children",
              '"\n           ',
              '\n              for="group_adults_',
              '"\n            ',
              '\n             for="group_adults"\n            ',
              "\n         >\n          ",
              "/private/bbt_searchbox_travellers/name",
              "\n        </label>\n        ",
              '\n  <select\n    name="group_adults"\n    aria-label="',
              "/private/index_sbox_adults_aria/name",
              '"\n    ',
              '\n       id="group_adults_',
              '"\n       class="group_adults"\n    ',
              '\n       id="group_adults"\n    ',
              "\n    data-group-adults-count\n    ",
              '\n        data-component="search/group/occupancy-pricing-tooltip"\n        data-occupancy-pricing-tooltip="',
              "\n   >\n    ",
              '\n      <option value="',
              ">\n        ",
              "/private/search_box_adults_filter/name",
              "\n      </option>\n    ",
              "\n  </select>\n  ",
              '\n    <input type="hidden" name="group_adults" value="',
              '\n      <div class="sb-group__field sb-group-children ',
              "sb-group-children-universal",
              '">\n      ',
              "/private/sbox_children/name",
              "/private/pex_flights_search_traveller_children_age/name",
              "/private/fit_search_child_selector_subtitle/name",
              "data-group-children-count",
              "0",
              '\n              for="group_children_',
              '\n             for="group_children"\n            ',
              "\n            >\n          ",
              "\n        </label>\n\n        ",
              '\n  <select\n    name="group_children"\n    aria-label="',
              "/private/index_sbox_children_aria/name",
              '\n        id="group_children_',
              '"\n        class="group_children"\n    ',
              '\n       id="group_children"\n    ',
              "\n    data-group-children-count ",
              'data-component="search/group/children-ages-tooltip search/group/add-children-tooltip"\n    data-add-children-tooltip="',
              '"',
              "\n  >\n    ",
              "/private/search_box_no_children_filter_default/name",
              "/private/search_box_children_filter/name",
              "\n      \n      ",
              '\n      <div class="sb-group__children__field clearfix">\n        ',
              '\n        <label class="sb-searchbox__label -small sb-group__children__label">\n          ',
              "/private/sxp_index_sbox_horizontal_age_of_children_q/name",
              "/private/bh_gsb_search_box_checkout_age/name",
              "/private/bh_gsb_search_box_checkout_age_plural/name",
              "/private/loc_sbox_children_age_singular/name",
              "/private/loc_sbox_children_age_plural/name",
              "\n\n        ",
              "\n\n        \n        ",
              '\n            <div class="sb-group__children__title bui-f-font-emphasized">',
              "/private/fame_w_mandatory_ages_head/name",
              "&nbsp;",
              "/private/fame_w_mandatory_ages_head_required/name",
              "</div>\n          ",
              '\n          <label class="sb-searchbox__label -small sb-group__children__label">\n            ',
              "/private/fame_w_mandatory_ages_explain/name",
              "/private/fame_w_mandatory_ages_no_head_explain/name",
              "\n          </label>\n        ",
              '<div class="sb-group-children-age"><div class="sb-custom-select">',
              '\n    <select\n      name="age"\n      data-group-child-age="',
              '"\n      aria-label="',
              "/private/acc_index_child_age_screenread/name",
              '"\n      \n      ',
              '\n        class="sb-group-field-has-error"\n      ',
              '\n    >\n      <option class="sb_child_ages_empty_zero" ',
              'value=""',
              'value="12 "',
              ">\n          ",
              "\n            ",
              "/private/fame_search_age_needed/name",
              "/private/sxp_index_sbox_horizontal_age_at_checkout/name",
              "/private/sxp_index_sbox_age_at_checkout/name",
              "\n      </option>\n      ",
              '\n        <option value="',
              ">\n            ",
              "\n                ",
              "/private/sxp_index_sbox_num_years_old/name",
              "/private/loc_counter_word_child_age_cjk/name",
              "\n        </option>\n      ",
              "</div></div>",
              '\n            <label class="sb-searchbox__label -small sb-group__children__label">\n              ',
              "/private/fame_search_age_explain/name",
              "\n            </label>\n          ",
              "\n      </div>\n    ",
              "\n      \n      <div></div>\n    ",
              "\n\n  \n  ",
              "\n              ",
              ' \n    <div class="sb-group__field">\n      ',
              "/private/pex_flights_search_traveller_infants/name",
              "/private/pex_flights_search_traveller_babies_age/name",
              "data-group-infants-count",
              "group_infants",
              '\n                for="group_infants_',
              '\n                for="group_infants"\n              ',
              "\n           >\n            ",
              " \n  ",
              '\n    <select\n      name="group_infants"\n      ',
              '\n         id="group_infants_',
              '"\n         class="group_infants"\n      ',
              '\n         id="group_infants"\n      ',
              "\n      data-group-infants-count\n     >\n      ",
              "\n    </select>\n  ",
              "\n\n</div>\n",
              "\n\t",
            ],
            m = [
              "fe_sb_group_max_adults",
              "fe_add_children_tooltip",
              "b_action",
              "b_search_config",
              "b_predicted_traveller_type",
              "fe_occupancy_pricing_tooltip",
              "fe_sr_sb_group_obp_tooltip",
              "fe_sb_universal_design",
              "fe_group_rooms_title",
              "fe_bui_stepper_id",
              "fe_bui_stepper_title",
              "fe_bui_stepper_subtitle",
              "fe_bui_stepper_min",
              "fe_bui_stepper_max",
              "fe_bui_stepper_value",
              "fe_bui_stepper_additional_attrs",
              "fe_sb_group_bui_steppers_accessible",
              "fe_sb_group_max_rooms",
              "fe_sb_state_number_of_rooms",
              "fe_sb_group_rooms_hide",
              "fe_sb_group_use_bui_stepper",
              "fe_sb_group_block_labels",
              "fe_remove_duplicate_ids",
              "fe_sb_unique_id",
              "fe_sb_group_descriptive_dropdowns",
              "fe_sb_facelift",
              "fe_sb_width",
              "fe_sb_include_nr_rooms",
              "fe_group_adults_title",
              "fe_group_adults_subtitle",
              "fe_xpi_show_flights",
              "fe_xpi_show_resorts",
              "fe_sb_state_number_of_adults",
              "fe_sb_group_use_adults_label",
              "fe_sb_group_adults_hide",
              "fe_sb_state_number_of_children",
              "fe_sb_state_rooms",
              "fe_sb_state_children_ages",
              "fe_sb_group_has_children",
              "fe_group_children_title",
              "fe_group_children_subtitle",
              "fe_sb_show_children_age_bracket",
              "fe_sb_group_max_children",
              "fe_sb_xpi",
              "fe_sb_group_localized_short_date",
              "fe_sb_state_checkout",
              "fe_sb_mandatory_child_ages",
              "fe_sb_child_ages_ui_update",
              "fe_children_ages",
              "fe_child_i",
              "fe_sb_group_max_children_age",
              "b_lang_is_cjk",
              "fe_sb_group_children_hide",
              "fe_sb_group_children_ages_hide",
              "fe_group_infants_title",
              "fe_group_infants_subtitle",
              "fe_sb_group_max_infants",
              "fe_sb_state_number_of_infants",
              "fe_sb_group_infants_hide",
            ];
          return _r_(function (f) {
            _i_("4ab:91ef3343");
            var e,
              t,
              i,
              n,
              a = "",
              p = this.fn;
            function s(e) {
              _i_("4ab:bdeeea11"), (e += g[20]);
              var t = o,
                i = s,
                n = _,
                a = r,
                s = p.MC(m[48]) || [];
              f.unshift({ fe_child_age: null });
              for (var r, o = 1, _ = s.length; o <= _; o++) {
                (f[0].fe_child_age = r = s[o - 1]),
                  (e += g[20]),
                  p.MD(m[7]) && (e += g[167]),
                  (e += [
                    g[168],
                    p.F.entities(p.MC(m[49])),
                    g[169],
                    (f.unshift({ child_number: p.MI(p.MB(m[49])) + p.MI(1) }),
                    (b = p.ME(g[170], p.MB, p.MN, null)),
                    f.shift(),
                    b),
                    g[171],
                  ].join("")),
                  p.MJ(p.MB(m[46])) && p.MJ(r + "" == "") && (e += g[172]),
                  (e += g[173]),
                  p.MD(m[46]) ? (e += g[174]) : (e += g[175]),
                  (e += g[176]),
                  p.MD(m[46])
                    ? (e += [
                        g[177],
                        p.ME(g[178], p.MB, p.MN, null),
                        g[97],
                      ].join(""))
                    : p.MD(m[43])
                    ? (e += [
                        g[177],
                        p.ME(g[179], p.MB, p.MN, null),
                        g[97],
                      ].join(""))
                    : p.MD(m[7]) &&
                      (e += [
                        g[177],
                        p.ME(g[180], p.MB, p.MN, null),
                        g[97],
                      ].join("")),
                  (e += g[181]);
                var l = o,
                  d = s,
                  h = _,
                  c = u;
                s = p.seq(0, p.MB(m[50])) || [];
                f.unshift({ i: null });
                var u;
                for (o = 1, _ = s.length; o <= _; o++)
                  (f[0].i = u = s[o - 1]),
                    (e += [g[182], p.F.entities(u.value), g[53]].join("")),
                    p.MJ(r + "" != "") &&
                      p.MJ(r + "" == "" + u.value) &&
                      (e += g[82]),
                    (e += g[183]),
                    p.MJ(p.MB(m[7])) || p.MJ(p.MB(m[43]))
                      ? (e += [
                          g[184],
                          (f.unshift({ num_years: u.value }),
                          (b = p.ME(
                            g[185],
                            p.MB,
                            p.MN,
                            p.MO(u.value, null, g[185])
                          )),
                          f.shift(),
                          b),
                          g[177],
                        ].join(""))
                      : ((e += [g[184], u.value].join("")),
                        p.MD(m[51]) && (e += p.ME(g[186], p.MB, p.MN, null)),
                        (e += g[177])),
                    (e += g[187]);
                f.shift(),
                  (o = l),
                  (s = d),
                  (_ = h),
                  (u = c),
                  (e += g[86]),
                  p.MD(m[25]) &&
                    (e += [
                      g[18],
                      (f.unshift({ class: g[87], name: g[88], width: g[89] }),
                      (b = p.HELPER("icon", f[0])),
                      f.shift(),
                      b),
                      g[4],
                    ].join("")),
                  (e += g[4]),
                  p.MD(m[7]) && (e += g[188]),
                  (e += g[4]),
                  p.MN("fe_child_i", p.MI(p.MB(m[49])) + p.MI(1)),
                  (e += g[20]);
              }
              return (
                f.shift(),
                (o = t),
                (s = i),
                (_ = n),
                (r = a),
                (e += g[2]),
                _r_(e)
              );
            }
            function r(e) {
              _i_("4ab:856d74fc"), (e += g[20]);
              var t = o,
                i = s,
                n = _,
                a = r,
                s = p.MC(m[48]) || [];
              f.unshift({ fe_child_age: null });
              for (var r, o = 1, _ = s.length; o <= _; o++) {
                (f[0].fe_child_age = r = s[o - 1]),
                  (e += g[20]),
                  p.MD(m[7]) && (e += g[167]),
                  (e += [
                    g[168],
                    p.F.entities(p.MC(m[49])),
                    g[169],
                    (f.unshift({ child_number: p.MI(p.MB(m[49])) + p.MI(1) }),
                    (b = p.ME(g[170], p.MB, p.MN, null)),
                    f.shift(),
                    b),
                    g[171],
                  ].join("")),
                  p.MJ(p.MB(m[46])) && p.MJ(r + "" == "") && (e += g[172]),
                  (e += g[173]),
                  p.MD(m[46]) ? (e += g[174]) : (e += g[175]),
                  (e += g[176]),
                  p.MD(m[46])
                    ? (e += [
                        g[177],
                        p.ME(g[178], p.MB, p.MN, null),
                        g[97],
                      ].join(""))
                    : p.MD(m[43])
                    ? (e += [
                        g[177],
                        p.ME(g[179], p.MB, p.MN, null),
                        g[97],
                      ].join(""))
                    : p.MD(m[7]) &&
                      (e += [
                        g[177],
                        p.ME(g[180], p.MB, p.MN, null),
                        g[97],
                      ].join("")),
                  (e += g[181]);
                var l = o,
                  d = s,
                  h = _,
                  c = u;
                s = p.seq(0, p.MB(m[50])) || [];
                f.unshift({ i: null });
                var u;
                for (o = 1, _ = s.length; o <= _; o++)
                  (f[0].i = u = s[o - 1]),
                    (e += [g[182], p.F.entities(u.value), g[53]].join("")),
                    p.MJ(r + "" != "") &&
                      p.MJ(r + "" == "" + u.value) &&
                      (e += g[82]),
                    (e += g[183]),
                    p.MJ(p.MB(m[7])) || p.MJ(p.MB(m[43]))
                      ? (e += [
                          g[184],
                          (f.unshift({ num_years: u.value }),
                          (b = p.ME(
                            g[185],
                            p.MB,
                            p.MN,
                            p.MO(u.value, null, g[185])
                          )),
                          f.shift(),
                          b),
                          g[177],
                        ].join(""))
                      : ((e += [g[184], u.value].join("")),
                        p.MD(m[51]) && (e += p.ME(g[186], p.MB, p.MN, null)),
                        (e += g[177])),
                    (e += g[187]);
                f.shift(),
                  (o = l),
                  (s = d),
                  (_ = h),
                  (u = c),
                  (e += g[86]),
                  p.MD(m[25]) &&
                    (e += [
                      g[18],
                      (f.unshift({ class: g[87], name: g[88], width: g[89] }),
                      (b = p.HELPER("icon", f[0])),
                      f.shift(),
                      b),
                      g[4],
                    ].join("")),
                  (e += g[4]),
                  p.MD(m[7]) && (e += g[188]),
                  (e += g[4]),
                  p.MN("fe_child_i", p.MI(p.MB(m[49])) + p.MI(1)),
                  (e += g[20]);
              }
              return (
                f.shift(),
                (o = t),
                (s = i),
                (_ = n),
                (r = a),
                (e += g[2]),
                _r_(e)
              );
            }
            function o(e) {
              return (
                _i_("4ab:60b6d2dc"),
                (e += g[20]),
                p.MK(p.MB(m[19]))
                  ? ((e += g[21]),
                    p.MD(m[7]) ||
                      ((e += g[64]),
                      p.MD(m[21]) || (e += g[65]),
                      (e += g[66]),
                      p.MD(m[22]) && (e += g[61]),
                      (e += g[67]),
                      p.MD(m[22])
                        ? (e += [g[68], p.F.entities(p.MC(m[23])), g[69]].join(
                            ""
                          ))
                        : (e += g[70]),
                      (e += [g[71], p.ME(g[22], p.MB, p.MN, null), g[72]].join(
                        ""
                      ))),
                    (e = (function (e) {
                      _i_("4ab:d4c54042"),
                        (e += g[4]),
                        p.MD(m[7]) && (e += g[73]);
                      (e += g[74]),
                        p.MD(m[22])
                          ? (e += [
                              g[75],
                              p.F.entities(p.MC(m[23])),
                              g[76],
                            ].join(""))
                          : (e += g[77]);
                      e += [g[78], p.ME(g[79], p.MB, p.MN, null), g[80]].join(
                        ""
                      );
                      var t = p.seq(1, p.MB(m[17])) || [];
                      f.unshift({ i: null });
                      for (var i, n = 1, a = t.length; n <= a; n++)
                        (f[0].i = i = t[n - 1]),
                          (e += [g[81], p.F.entities(i.value), g[53]].join("")),
                          p.MJ(p.MB(m[18]) == i.value) && (e += g[82]),
                          (e += g[83]),
                          p.MD(m[24])
                            ? (e +=
                                (f.unshift({ num_rooms: i.value }),
                                (b = p.ME(
                                  g[84],
                                  p.MB,
                                  p.MN,
                                  p.MO(i.value, null, g[84])
                                )),
                                f.shift(),
                                b))
                            : (e += i.value),
                          (e += g[85]);
                      f.shift(),
                        (e += g[86]),
                        p.MD(m[25]) &&
                          (e += [
                            g[18],
                            (f.unshift({
                              class: g[87],
                              name: g[88],
                              width: g[89],
                            }),
                            (b = p.HELPER("icon", f[0])),
                            f.shift(),
                            b),
                            g[4],
                          ].join(""));
                      (e += g[90]), p.MD(m[7]) && (e += g[91]);
                      return (e += g[2]), _r_(e);
                    })((e += g[18]))),
                    (e += g[63]))
                  : (e += [g[92], p.F.entities(p.MC(m[18])), g[93]].join("")),
                (e += g[2]),
                _r_(e)
              );
            }
            function _(e) {
              return (
                _i_("4ab:593fbe2e"),
                (e += g[20]),
                p.MK(p.MB(m[19])) &&
                  ((e += g[21]),
                  p.MN(m[8], p.ME(g[22], p.MB, p.MN, null)),
                  (e += g[18]),
                  f.unshift({
                    fe_bui_stepper_additional_attrs: g[60],
                    fe_bui_stepper_id: g[61],
                    fe_bui_stepper_max: p.MB(m[17]),
                    fe_bui_stepper_min: g[62],
                    fe_bui_stepper_title: p.MB(m[8]),
                    fe_bui_stepper_value: p.MB(m[18]) ? p.MB(m[18]) : 0,
                  }),
                  (e = (function (e) {
                    _i_("4ab:b27e41ae"),
                      (e += [
                        g[23],
                        p.F.entities(p.MC(m[9])),
                        g[24],
                        p.F.html(p.MC(m[10])),
                        g[25],
                      ].join("")),
                      p.MD(m[11]) &&
                        (e += [g[26], p.F.html(p.MC(m[11])), g[27]].join(""));
                    (e += g[28]),
                      p.MD(m[16])
                        ? ((e += [
                            g[29],
                            p.F.entities(p.MC(m[9])),
                            g[30],
                            p.F.entities(p.MC(m[9])),
                            g[31],
                            p.F.entities(p.MC(m[12])),
                            g[32],
                            p.F.entities(p.MC(m[13])),
                            g[33],
                            p.F.entities(p.MC(m[14])),
                            g[34],
                            p.F.entities(p.MC(m[15])),
                            g[35],
                          ].join("")),
                          p.MJ(p.MB(m[14]) == p.MB(m[12])) && (e += g[36]),
                          (e += [
                            g[37],
                            (f.unshift({ stepper_title: p.MB(m[10]) }),
                            (b = p.F.html(p.ME(g[38], p.MB, p.MN, null))),
                            f.shift(),
                            b),
                            g[39],
                            p.F.entities(p.MC(m[9])),
                            g[40],
                            p.F.entities(p.MC(m[14])),
                            g[41],
                          ].join("")),
                          p.MJ(p.MB(m[14]) == p.MB(m[13])) && (e += g[36]),
                          (e += [
                            g[42],
                            (f.unshift({ stepper_title: p.MB(m[10]) }),
                            (b = p.F.html(p.ME(g[43], p.MB, p.MN, null))),
                            f.shift(),
                            b),
                            g[39],
                            p.F.entities(p.MC(m[9])),
                            g[44],
                            p.F.entities(p.MC(m[9])),
                            g[45],
                            p.F.entities(p.MC(m[14])),
                            g[46],
                            p.F.entities(p.MC(m[10])),
                            g[47],
                          ].join("")))
                        : ((e += [
                            g[48],
                            p.F.entities(p.MC(m[9])),
                            g[49],
                            p.F.entities(p.MC(m[9])),
                            g[50],
                            p.F.entities(p.MC(m[12])),
                            g[51],
                            p.F.entities(p.MC(m[13])),
                            g[52],
                            p.F.entities(p.MC(m[14])),
                            g[53],
                            p.F.entities(p.MC(m[15])),
                            g[54],
                          ].join("")),
                          p.MJ(p.MB(m[14]) == p.MB(m[12])) && (e += g[55]),
                          (e += [g[56], p.F.entities(p.MC(m[14])), g[57]].join(
                            ""
                          )),
                          p.MJ(p.MB(m[14]) == p.MB(m[13])) && (e += g[55]),
                          (e += g[58]));
                    return (e += g[59]), _r_(e);
                  })(e)),
                  f.shift(),
                  (e += g[63])),
                (e += g[2]),
                _r_(e)
              );
            }
            function l(e) {
              if (
                (_i_("4ab:cba1f0af"),
                (e += g[4]),
                p.MJ(p.MB(m[35])) && (p.MJ(p.MB(m[36])) || p.MJ(p.MB(m[37]))))
              ) {
                if (
                  ((e += g[149]),
                  p.MJ(p.MB(m[7])) ||
                    p.MJ(p.MB(m[46])) ||
                    ((e += g[150]),
                    p.MD(m[43])
                      ? (e += [
                          p.ME(
                            g[151],
                            p.MB,
                            p.MN,
                            p.MO(p.MC(m[35]), null, g[151])
                          ),
                          g[2],
                        ].join(""))
                      : p.MD(m[45])
                      ? (p.MN(
                          m[44],
                          p.DATE(p.MB(m[45]), "short_date", "", "", "")
                        ),
                        p.MJ(1 == p.MB(m[35]))
                          ? (e += [
                              (f.unshift({ date: p.MB(m[44]) }),
                              (b = p.ME(g[152], p.MB, p.MN, null)),
                              f.shift(),
                              b),
                              g[2],
                            ].join(""))
                          : (e += [
                              (f.unshift({ date: p.MB(m[44]) }),
                              (b = p.ME(g[153], p.MB, p.MN, null)),
                              f.shift(),
                              b),
                              g[2],
                            ].join("")))
                      : p.MJ(1 == p.MB(m[35]))
                      ? (e += [p.ME(g[154], p.MB, p.MN, null), g[2]].join(""))
                      : (e += [p.ME(g[155], p.MB, p.MN, null), g[2]].join("")),
                    (e += g[109])),
                  (e += g[156]),
                  p.MN("fe_child_i", 0),
                  (e += g[157]),
                  p.MJ(0 < p.MB(m[47])) &&
                    ((e += g[97]),
                    p.MJ(1 == p.MB(m[47])) &&
                      (e += [
                        g[158],
                        p.ME(g[159], p.MB, p.MN, null),
                        g[160],
                        p.ME(g[161], p.MB, p.MN, null),
                        g[162],
                      ].join("")),
                    (e += g[163]),
                    p.MJ(1 == p.MB(m[47]))
                      ? (e += [p.ME(g[164], p.MB, p.MN, null), g[2]].join(""))
                      : (e += [p.ME(g[165], p.MB, p.MN, null), g[2]].join("")),
                    (e += g[166])),
                  (e += g[156]),
                  p.MD(m[37]))
                )
                  (e += g[97]),
                    f.unshift({
                      fe_children_ages: p.MB(m[37]),
                      fe_sb_mandatory_child_ages: p.MB(m[46]),
                    }),
                    (e = (function (e) {
                      _i_("4ab:61cbe13e"), (e += g[20]);
                      var t = p.MC(m[48]) || [];
                      f.unshift({ fe_child_age: null });
                      for (var i, n = 1, a = t.length; n <= a; n++) {
                        (f[0].fe_child_age = i = t[n - 1]),
                          (e += g[20]),
                          p.MD(m[7]) && (e += g[167]),
                          (e += [
                            g[168],
                            p.F.entities(p.MC(m[49])),
                            g[169],
                            (f.unshift({
                              child_number: p.MI(p.MB(m[49])) + p.MI(1),
                            }),
                            (b = p.ME(g[170], p.MB, p.MN, null)),
                            f.shift(),
                            b),
                            g[171],
                          ].join("")),
                          p.MJ(p.MB(m[46])) &&
                            p.MJ(i + "" == "") &&
                            (e += g[172]),
                          (e += g[173]),
                          p.MD(m[46]) ? (e += g[174]) : (e += g[175]),
                          (e += g[176]),
                          p.MD(m[46])
                            ? (e += [
                                g[177],
                                p.ME(g[178], p.MB, p.MN, null),
                                g[97],
                              ].join(""))
                            : p.MD(m[43])
                            ? (e += [
                                g[177],
                                p.ME(g[179], p.MB, p.MN, null),
                                g[97],
                              ].join(""))
                            : p.MD(m[7]) &&
                              (e += [
                                g[177],
                                p.ME(g[180], p.MB, p.MN, null),
                                g[97],
                              ].join("")),
                          (e += g[181]);
                        var s,
                          r = n,
                          o = t,
                          _ = a,
                          l = s;
                        for (
                          t = p.seq(0, p.MB(m[50])) || [],
                            f.unshift({ i: null }),
                            n = 1,
                            a = t.length;
                          n <= a;
                          n++
                        )
                          (f[0].i = s = t[n - 1]),
                            (e += [g[182], p.F.entities(s.value), g[53]].join(
                              ""
                            )),
                            p.MJ(i + "" != "") &&
                              p.MJ(i + "" == "" + s.value) &&
                              (e += g[82]),
                            (e += g[183]),
                            p.MJ(p.MB(m[7])) || p.MJ(p.MB(m[43]))
                              ? (e += [
                                  g[184],
                                  (f.unshift({ num_years: s.value }),
                                  (b = p.ME(
                                    g[185],
                                    p.MB,
                                    p.MN,
                                    p.MO(s.value, null, g[185])
                                  )),
                                  f.shift(),
                                  b),
                                  g[177],
                                ].join(""))
                              : ((e += [g[184], s.value].join("")),
                                p.MD(m[51]) &&
                                  (e += p.ME(g[186], p.MB, p.MN, null)),
                                (e += g[177])),
                            (e += g[187]);
                        f.shift(),
                          (n = r),
                          (t = o),
                          (a = _),
                          (s = l),
                          (e += g[86]),
                          p.MD(m[25]) &&
                            (e += [
                              g[18],
                              (f.unshift({
                                class: g[87],
                                name: g[88],
                                width: g[89],
                              }),
                              (b = p.HELPER("icon", f[0])),
                              f.shift(),
                              b),
                              g[4],
                            ].join("")),
                          (e += g[4]),
                          p.MD(m[7]) && (e += g[188]),
                          (e += g[4]),
                          p.MN("fe_child_i", p.MI(p.MB(m[49])) + p.MI(1)),
                          (e += g[20]);
                      }
                      return f.shift(), (e += g[2]), _r_(e);
                    })(e)),
                    f.shift(),
                    (e += g[19]);
                else if (p.MD(m[36])) {
                  e += g[97];
                  var t = p.MC(m[36]) || [];
                  f.unshift({ fe_room: null });
                  for (var i, n = 1, a = t.length; n <= a; n++)
                    (f[0].fe_room = i = t[n - 1]),
                      (e += g[177]),
                      f.unshift({
                        fe_children_ages: p.MG((i || {}).b_children_ages),
                        fe_sb_mandatory_child_ages: p.MB(m[46]),
                      }),
                      (e = r(e)),
                      f.shift(),
                      (e += g[97]);
                  f.shift(), (e += g[19]);
                }
                (e += g[156]),
                  p.MJ(p.MB(m[7])) ||
                    p.MK(p.MB(m[46])) ||
                    ((e += g[97]),
                    p.MK(p.MB(m[47])) &&
                      (e += [
                        g[189],
                        p.ME(g[190], p.MB, p.MN, null),
                        g[191],
                      ].join("")),
                    (e += g[19])),
                  (e += g[192]);
              } else p.MD(m[46]) && (e += g[193]);
              return (e += g[2]), _r_(e);
            }
            function d(e) {
              return (
                _i_("4ab:7b460523"),
                (e += [
                  g[23],
                  p.F.entities(p.MC(m[9])),
                  g[24],
                  p.F.html(p.MC(m[10])),
                  g[25],
                ].join("")),
                p.MD(m[11]) &&
                  (e += [g[26], p.F.html(p.MC(m[11])), g[27]].join("")),
                (e += g[28]),
                p.MD(m[16])
                  ? ((e += [
                      g[29],
                      p.F.entities(p.MC(m[9])),
                      g[30],
                      p.F.entities(p.MC(m[9])),
                      g[31],
                      p.F.entities(p.MC(m[12])),
                      g[32],
                      p.F.entities(p.MC(m[13])),
                      g[33],
                      p.F.entities(p.MC(m[14])),
                      g[34],
                      p.F.entities(p.MC(m[15])),
                      g[35],
                    ].join("")),
                    p.MJ(p.MB(m[14]) == p.MB(m[12])) && (e += g[36]),
                    (e += [
                      g[37],
                      (f.unshift({ stepper_title: p.MB(m[10]) }),
                      (b = p.F.html(p.ME(g[38], p.MB, p.MN, null))),
                      f.shift(),
                      b),
                      g[39],
                      p.F.entities(p.MC(m[9])),
                      g[40],
                      p.F.entities(p.MC(m[14])),
                      g[41],
                    ].join("")),
                    p.MJ(p.MB(m[14]) == p.MB(m[13])) && (e += g[36]),
                    (e += [
                      g[42],
                      (f.unshift({ stepper_title: p.MB(m[10]) }),
                      (b = p.F.html(p.ME(g[43], p.MB, p.MN, null))),
                      f.shift(),
                      b),
                      g[39],
                      p.F.entities(p.MC(m[9])),
                      g[44],
                      p.F.entities(p.MC(m[9])),
                      g[45],
                      p.F.entities(p.MC(m[14])),
                      g[46],
                      p.F.entities(p.MC(m[10])),
                      g[47],
                    ].join("")))
                  : ((e += [
                      g[48],
                      p.F.entities(p.MC(m[9])),
                      g[49],
                      p.F.entities(p.MC(m[9])),
                      g[50],
                      p.F.entities(p.MC(m[12])),
                      g[51],
                      p.F.entities(p.MC(m[13])),
                      g[52],
                      p.F.entities(p.MC(m[14])),
                      g[53],
                      p.F.entities(p.MC(m[15])),
                      g[54],
                    ].join("")),
                    p.MJ(p.MB(m[14]) == p.MB(m[12])) && (e += g[55]),
                    (e += [g[56], p.F.entities(p.MC(m[14])), g[57]].join("")),
                    p.MJ(p.MB(m[14]) == p.MB(m[13])) && (e += g[55]),
                    (e += g[58])),
                (e += g[59]),
                _r_(e)
              );
            }
            return (
              (a += g[0]),
              (e = a),
              _i_("4ab:70810372"),
              (e += g[1]),
              p.MN("fe_sb_group_max_rooms", 30),
              (e += g[2]),
              p.MN("fe_sb_group_max_pets", 10),
              (e += g[2]),
              p.MN("fe_sb_group_max_adults", p.MB(m[0]) || 30),
              (e += g[2]),
              p.MN("fe_sb_group_max_children", 10),
              (e += g[2]),
              p.MN("fe_sb_group_max_children_age", 17),
              (e += g[2]),
              p.MN("fe_sb_group_max_infants", 10),
              (e += g[3]),
              p.MN("fe_add_children_tooltip", ""),
              (e += g[2]),
              p.MJ(p.MC(m[2]) + "" == "searchresults") &&
                p.MJ(p.MC(m[3])) &&
                p.MK(p.MC(m[3]).b_children_total) &&
                p.MJ(p.MC(m[4]) + "" == "family") &&
                ((e += g[4]),
                p.MN(
                  m[1],
                  [
                    g[5],
                    p.ME(g[6], p.MB, p.MN, null),
                    g[7],
                    p.ME(g[8], p.MB, p.MN, null),
                    g[9],
                  ].join("")
                ),
                (e += g[2])),
              (e += g[10]),
              p.MD(m[6]) &&
                ((e += g[4]),
                p.MN(
                  m[5],
                  [g[11], p.ME(g[12], p.MB, p.MN, null), g[9]].join("")
                ),
                (e += g[2])),
              (e += g[13]),
              (e += g[14]),
              (e += g[14]),
              (e += g[14]),
              (e += g[14]),
              (e += g[10]),
              (e += g[14]),
              (e += g[14]),
              (e += g[14]),
              (e += g[15]),
              p.MD(m[7]) && (e += g[16]),
              (e += g[17]),
              p.MJ(0 == p.MB(m[27])) &&
                ((e += g[4]),
                (p.MJ(p.MB(m[26])) && p.MJ(p.MB(m[7]))) ||
                  ((e += g[18]),
                  (e = p.MD(m[20]) ? _((e += g[19])) : o((e += g[19]))),
                  (e += g[18]),
                  (e += g[4])),
                (e += g[20])),
              (e += g[94]),
              p.MK(p.MB(m[34]))
                ? ((e += g[95]),
                  p.MD(m[20])
                    ? ((e += g[19]),
                      p.MN(m[28], p.ME(g[96], p.MB, p.MN, null)),
                      (e += g[19]),
                      p.MJ(p.MB(m[30])) &&
                        p.MK(p.MB(m[31])) &&
                        ((e += g[97]),
                        p.MN(m[29], p.ME(g[98], p.MB, p.MN, null)),
                        (e += g[19])),
                      (e += g[19]),
                      f.unshift({
                        fe_bui_stepper_additional_attrs: g[99],
                        fe_bui_stepper_id: g[100],
                        fe_bui_stepper_max: p.MB(m[0]),
                        fe_bui_stepper_min: g[62],
                        fe_bui_stepper_subtitle: p.MB(m[29]),
                        fe_bui_stepper_title: p.MB(m[28]),
                        fe_bui_stepper_value: p.MB(m[32]) ? p.MB(m[32]) : 0,
                      }),
                      (e = d(e)),
                      f.shift())
                    : ((e += g[19]),
                      p.MD(m[7]) ||
                        ((e += g[101]),
                        p.MD(m[21]) || (e += g[65]),
                        (e += g[66]),
                        p.MD(m[22]) && (e += g[102]),
                        (e += g[103]),
                        p.MD(m[22])
                          ? (e += [
                              g[104],
                              p.F.entities(p.MC(m[23])),
                              g[105],
                            ].join(""))
                          : (e += g[106]),
                        (e += g[107]),
                        p.MD(m[33])
                          ? (e += p.ME(g[108], p.MB, p.MN, null))
                          : (e += p.ME(g[96], p.MB, p.MN, null)),
                        (e += g[109])),
                      (e = (function (e) {
                        _i_("4ab:0e69ddfc"),
                          (e += g[2]),
                          p.MD(m[7]) && (e += g[73]),
                          (e += [
                            g[110],
                            p.ME(g[111], p.MB, p.MN, null),
                            g[112],
                          ].join("")),
                          p.MD(m[22])
                            ? (e += [
                                g[113],
                                p.F.entities(p.MC(m[23])),
                                g[114],
                              ].join(""))
                            : (e += g[115]),
                          (e += g[116]),
                          p.MD(m[6]) &&
                            (e += [g[117], p.F.html(p.MC(m[5])), g[112]].join(
                              ""
                            )),
                          (e += g[118]);
                        var t = p.seq(1, p.MB(m[0])) || [];
                        f.unshift({ i: null });
                        for (var i, n = 1, a = t.length; n <= a; n++)
                          (f[0].i = i = t[n - 1]),
                            (e += [g[119], p.F.entities(i.value), g[53]].join(
                              ""
                            )),
                            p.MJ(p.MB(m[32]) == i.value) && (e += g[82]),
                            (e += g[120]),
                            p.MD(m[24])
                              ? (e +=
                                  (f.unshift({ num_adults: i.value }),
                                  (b = p.ME(
                                    g[121],
                                    p.MB,
                                    p.MN,
                                    p.MO(i.value, null, g[121])
                                  )),
                                  f.shift(),
                                  b))
                              : (e += i.value),
                            (e += g[122]);
                        return (
                          f.shift(),
                          (e += g[123]),
                          p.MD(m[25]) &&
                            (e += [
                              g[4],
                              (f.unshift({
                                class: g[87],
                                name: g[88],
                                width: g[89],
                              }),
                              (b = p.HELPER("icon", f[0])),
                              f.shift(),
                              b),
                              g[20],
                            ].join("")),
                          (e += g[2]),
                          p.MD(m[7]) && (e += g[91]),
                          (e += g[2]),
                          _r_(e)
                        );
                      })((e += g[19])))),
                  (e += g[18]),
                  (e += g[63]))
                : (e += [g[124], p.F.entities(p.MC(m[32])), g[93]].join("")),
              (e += g[17]),
              p.MK(p.MB(m[52])) &&
                ((e += g[18]),
                p.MN(
                  "fe_sb_group_has_children",
                  p.MB(m[35]) && (p.MB(m[36]) || p.MB(m[37]))
                ),
                (e += g[125]),
                p.MJ(p.MB(m[7])) && p.MJ(p.MB(m[38])) && (e += g[126]),
                (e += g[127]),
                p.MD(m[20])
                  ? ((e += g[19]),
                    p.MN(m[39], p.ME(g[128], p.MB, p.MN, null)),
                    (e += g[19]),
                    p.MJ(p.MB(m[30])) && p.MK(p.MB(m[31]))
                      ? ((e += g[97]),
                        p.MN(m[40], p.ME(g[129], p.MB, p.MN, null)),
                        (e += g[19]))
                      : p.MJ(p.MB(m[41])) &&
                        p.MK(p.MB(m[30])) &&
                        p.MK(p.MB(m[31])) &&
                        ((e += g[97]),
                        p.MN(m[40], p.ME(g[130], p.MB, p.MN, null)),
                        (e += g[19])),
                    (e += g[19]),
                    f.unshift({
                      fe_bui_stepper_additional_attrs: g[131],
                      fe_bui_stepper_id: g[102],
                      fe_bui_stepper_max: p.MB(m[42]),
                      fe_bui_stepper_min: g[132],
                      fe_bui_stepper_subtitle: p.MB(m[40]),
                      fe_bui_stepper_title: p.MB(m[39]),
                      fe_bui_stepper_value: p.MB(m[35]) ? p.MB(m[35]) : 0,
                    }),
                    (e = d(e)),
                    f.shift())
                  : ((e += g[19]),
                    p.MD(m[7]) ||
                      ((e += g[101]),
                      p.MD(m[21]) || (e += g[65]),
                      (e += g[66]),
                      p.MD(m[22]) && (e += g[102]),
                      (e += g[103]),
                      p.MD(m[22])
                        ? (e += [
                            g[133],
                            p.F.entities(p.MC(m[23])),
                            g[105],
                          ].join(""))
                        : (e += g[134]),
                      (e += [
                        g[135],
                        p.ME(g[128], p.MB, p.MN, null),
                        g[136],
                      ].join(""))),
                    (e = (function (e) {
                      _i_("4ab:15870e17"),
                        (e += g[2]),
                        p.MD(m[7]) && (e += g[73]),
                        (e += [
                          g[137],
                          p.ME(g[138], p.MB, p.MN, null),
                          g[112],
                        ].join("")),
                        p.MD(m[22])
                          ? (e += [
                              g[139],
                              p.F.entities(p.MC(m[23])),
                              g[140],
                            ].join(""))
                          : (e += g[141]),
                        (e += g[142]),
                        p.MD(m[7]) ||
                          (e += [g[143], p.F.html(p.MC(m[1])), g[144]].join(
                            ""
                          )),
                        (e += g[145]);
                      var t = p.seq(0, p.MB(m[42])) || [];
                      f.unshift({ i: null });
                      for (var i, n = 1, a = t.length; n <= a; n++)
                        (f[0].i = i = t[n - 1]),
                          (e += [g[119], p.F.entities(i.value), g[53]].join(
                            ""
                          )),
                          p.MJ(p.MB(m[35]) == i.value) && (e += g[82]),
                          (e += g[120]),
                          p.MJ(p.MB(m[24])) && p.MJ(0 == i.value)
                            ? (e += [
                                g[97],
                                p.ME(g[146], p.MB, p.MN, null),
                                g[19],
                              ].join(""))
                            : p.MJ(p.MB(m[24]))
                            ? (e += [
                                g[97],
                                (f.unshift({ num_kids: i.value }),
                                (b = p.ME(
                                  g[147],
                                  p.MB,
                                  p.MN,
                                  p.MO(i.value, null, g[147])
                                )),
                                f.shift(),
                                b),
                                g[19],
                              ].join(""))
                            : (e += [g[97], i.value, g[19]].join("")),
                          (e += g[122]);
                      return (
                        f.shift(),
                        (e += g[123]),
                        p.MD(m[25]) &&
                          (e += [
                            g[4],
                            (f.unshift({
                              class: g[87],
                              name: g[88],
                              width: g[89],
                            }),
                            (b = p.HELPER("icon", f[0])),
                            f.shift(),
                            b),
                            g[20],
                          ].join("")),
                        (e += g[2]),
                        p.MD(m[7]) && (e += g[91]),
                        (e += g[2]),
                        _r_(e)
                      );
                    })((e += g[19])))),
                (e += g[18]),
                (e += g[148]),
                p.MK(p.MB(m[52]) || p.MB(m[53])) &&
                  p.MJ(p.MB(m[7])) &&
                  ((e = (function (e) {
                    if (
                      (_i_("4ab:403e925b"),
                      (e += g[4]),
                      p.MJ(p.MB(m[35])) &&
                        (p.MJ(p.MB(m[36])) || p.MJ(p.MB(m[37]))))
                    ) {
                      if (
                        ((e += g[149]),
                        p.MJ(p.MB(m[7])) ||
                          p.MJ(p.MB(m[46])) ||
                          ((e += g[150]),
                          p.MD(m[43])
                            ? (e += [
                                p.ME(
                                  g[151],
                                  p.MB,
                                  p.MN,
                                  p.MO(p.MC(m[35]), null, g[151])
                                ),
                                g[2],
                              ].join(""))
                            : p.MD(m[45])
                            ? (p.MN(
                                m[44],
                                p.DATE(p.MB(m[45]), "short_date", "", "", "")
                              ),
                              p.MJ(1 == p.MB(m[35]))
                                ? (e += [
                                    (f.unshift({ date: p.MB(m[44]) }),
                                    (b = p.ME(g[152], p.MB, p.MN, null)),
                                    f.shift(),
                                    b),
                                    g[2],
                                  ].join(""))
                                : (e += [
                                    (f.unshift({ date: p.MB(m[44]) }),
                                    (b = p.ME(g[153], p.MB, p.MN, null)),
                                    f.shift(),
                                    b),
                                    g[2],
                                  ].join("")))
                            : p.MJ(1 == p.MB(m[35]))
                            ? (e += [p.ME(g[154], p.MB, p.MN, null), g[2]].join(
                                ""
                              ))
                            : (e += [p.ME(g[155], p.MB, p.MN, null), g[2]].join(
                                ""
                              )),
                          (e += g[109])),
                        (e += g[156]),
                        p.MN("fe_child_i", 0),
                        (e += g[157]),
                        p.MJ(0 < p.MB(m[47])) &&
                          ((e += g[97]),
                          p.MJ(1 == p.MB(m[47])) &&
                            (e += [
                              g[158],
                              p.ME(g[159], p.MB, p.MN, null),
                              g[160],
                              p.ME(g[161], p.MB, p.MN, null),
                              g[162],
                            ].join("")),
                          (e += g[163]),
                          p.MJ(1 == p.MB(m[47]))
                            ? (e += [p.ME(g[164], p.MB, p.MN, null), g[2]].join(
                                ""
                              ))
                            : (e += [p.ME(g[165], p.MB, p.MN, null), g[2]].join(
                                ""
                              )),
                          (e += g[166])),
                        (e += g[156]),
                        p.MD(m[37]))
                      )
                        (e += g[97]),
                          f.unshift({
                            fe_children_ages: p.MB(m[37]),
                            fe_sb_mandatory_child_ages: p.MB(m[46]),
                          }),
                          (e = (function (e) {
                            _i_("4ab:ccf953d9"), (e += g[20]);
                            var t = p.MC(m[48]) || [];
                            f.unshift({ fe_child_age: null });
                            for (var i, n = 1, a = t.length; n <= a; n++) {
                              (f[0].fe_child_age = i = t[n - 1]),
                                (e += g[20]),
                                p.MD(m[7]) && (e += g[167]),
                                (e += [
                                  g[168],
                                  p.F.entities(p.MC(m[49])),
                                  g[169],
                                  (f.unshift({
                                    child_number: p.MI(p.MB(m[49])) + p.MI(1),
                                  }),
                                  (b = p.ME(g[170], p.MB, p.MN, null)),
                                  f.shift(),
                                  b),
                                  g[171],
                                ].join("")),
                                p.MJ(p.MB(m[46])) &&
                                  p.MJ(i + "" == "") &&
                                  (e += g[172]),
                                (e += g[173]),
                                p.MD(m[46]) ? (e += g[174]) : (e += g[175]),
                                (e += g[176]),
                                p.MD(m[46])
                                  ? (e += [
                                      g[177],
                                      p.ME(g[178], p.MB, p.MN, null),
                                      g[97],
                                    ].join(""))
                                  : p.MD(m[43])
                                  ? (e += [
                                      g[177],
                                      p.ME(g[179], p.MB, p.MN, null),
                                      g[97],
                                    ].join(""))
                                  : p.MD(m[7]) &&
                                    (e += [
                                      g[177],
                                      p.ME(g[180], p.MB, p.MN, null),
                                      g[97],
                                    ].join("")),
                                (e += g[181]);
                              var s = n,
                                r = t,
                                o = a,
                                _ = l,
                                t = p.seq(0, p.MB(m[50])) || [];
                              f.unshift({ i: null });
                              for (var l, n = 1, a = t.length; n <= a; n++)
                                (f[0].i = l = t[n - 1]),
                                  (e += [
                                    g[182],
                                    p.F.entities(l.value),
                                    g[53],
                                  ].join("")),
                                  p.MJ(i + "" != "") &&
                                    p.MJ(i + "" == "" + l.value) &&
                                    (e += g[82]),
                                  (e += g[183]),
                                  p.MJ(p.MB(m[7])) || p.MJ(p.MB(m[43]))
                                    ? (e += [
                                        g[184],
                                        (f.unshift({ num_years: l.value }),
                                        (b = p.ME(
                                          g[185],
                                          p.MB,
                                          p.MN,
                                          p.MO(l.value, null, g[185])
                                        )),
                                        f.shift(),
                                        b),
                                        g[177],
                                      ].join(""))
                                    : ((e += [g[184], l.value].join("")),
                                      p.MD(m[51]) &&
                                        (e += p.ME(g[186], p.MB, p.MN, null)),
                                      (e += g[177])),
                                  (e += g[187]);
                              f.shift(),
                                (n = s),
                                (t = r),
                                (a = o),
                                (l = _),
                                (e += g[86]),
                                p.MD(m[25]) &&
                                  (e += [
                                    g[18],
                                    (f.unshift({
                                      class: g[87],
                                      name: g[88],
                                      width: g[89],
                                    }),
                                    (b = p.HELPER("icon", f[0])),
                                    f.shift(),
                                    b),
                                    g[4],
                                  ].join("")),
                                (e += g[4]),
                                p.MD(m[7]) && (e += g[188]),
                                (e += g[4]),
                                p.MN("fe_child_i", p.MI(p.MB(m[49])) + p.MI(1)),
                                (e += g[20]);
                            }
                            return f.shift(), (e += g[2]), _r_(e);
                          })(e)),
                          f.shift(),
                          (e += g[19]);
                      else if (p.MD(m[36])) {
                        e += g[97];
                        var t = p.MC(m[36]) || [];
                        f.unshift({ fe_room: null });
                        for (var i, n = 1, a = t.length; n <= a; n++)
                          (f[0].fe_room = i = t[n - 1]),
                            (e += g[177]),
                            f.unshift({
                              fe_children_ages: p.MG((i || {}).b_children_ages),
                              fe_sb_mandatory_child_ages: p.MB(m[46]),
                            }),
                            (e = s(e)),
                            f.shift(),
                            (e += g[97]);
                        f.shift(), (e += g[19]);
                      }
                      (e += g[156]),
                        p.MJ(p.MB(m[7])) ||
                          p.MK(p.MB(m[46])) ||
                          ((e += g[97]),
                          p.MK(p.MB(m[47])) &&
                            (e += [
                              g[189],
                              p.ME(g[190], p.MB, p.MN, null),
                              g[191],
                            ].join("")),
                          (e += g[19])),
                        (e += g[192]);
                    } else p.MD(m[46]) && (e += g[193]);
                    return (e += g[2]), _r_(e);
                  })((e += g[97]))),
                  (e += g[18])),
                (e += g[63])),
              (e += g[194]),
              p.MK(p.MB(m[52]) || p.MB(m[53]) || p.MB(m[7])) &&
                p.MJ(p.MB(m[46])) &&
                ((e = l((e += g[18]))), (e += g[20])),
              (e += g[17]),
              p.MJ(p.MB(m[27])) &&
                ((e += g[18]),
                (p.MJ(p.MB(m[26])) && p.MJ(p.MB(m[7]))) ||
                  ((e += g[97]),
                  (e = p.MD(m[20]) ? _((e += g[195])) : o((e += g[195]))),
                  (e += g[97]),
                  (e += g[18])),
                (e += g[20])),
              (e += g[17]),
              p.MK(p.MB(m[58])) &&
                ((e += g[196]),
                p.MD(m[20])
                  ? ((e += g[19]),
                    p.MN(m[54], p.ME(g[197], p.MB, p.MN, null)),
                    (e += g[19]),
                    p.MJ(p.MB(m[30])) &&
                      p.MK(p.MB(m[31])) &&
                      ((e += g[97]),
                      p.MN(m[55], p.ME(g[198], p.MB, p.MN, null)),
                      (e += g[19])),
                    (e += g[19]),
                    f.unshift({
                      fe_bui_stepper_additional_attrs: g[199],
                      fe_bui_stepper_id: g[200],
                      fe_bui_stepper_max: p.MB(m[56]),
                      fe_bui_stepper_min: g[132],
                      fe_bui_stepper_subtitle: p.MB(m[55]),
                      fe_bui_stepper_title: p.MB(m[54]),
                      fe_bui_stepper_value: p.MB(m[57]) ? p.MB(m[57]) : 0,
                    }),
                    (e = d(e)),
                    f.shift())
                  : ((e += g[19]),
                    p.MD(m[7]) ||
                      ((e += g[64]),
                      p.MD(m[21]) || (e += g[65]),
                      (e += g[66]),
                      p.MD(m[22]) && (e += g[200]),
                      (e += g[67]),
                      p.MD(m[22])
                        ? (e += [g[201], p.F.entities(p.MC(m[23])), g[69]].join(
                            ""
                          ))
                        : (e += g[202]),
                      (e += [
                        g[203],
                        p.ME(g[197], p.MB, p.MN, null),
                        g[166],
                      ].join(""))),
                    (e = (function (e) {
                      _i_("4ab:3dd465e9"),
                        (e += g[204]),
                        p.MD(m[7]) && (e += g[73]),
                        (e += g[205]),
                        p.MD(m[22])
                          ? (e += [
                              g[206],
                              p.F.entities(p.MC(m[23])),
                              g[207],
                            ].join(""))
                          : (e += g[208]),
                        (e += g[209]);
                      var t = p.seq(0, p.MB(m[56])) || [];
                      f.unshift({ i: null });
                      for (var i, n = 1, a = t.length; n <= a; n++)
                        (f[0].i = i = t[n - 1]),
                          (e += [g[182], p.F.entities(i.value), g[53]].join(
                            ""
                          )),
                          p.MJ(p.MB(m[57]) == i.value) && (e += g[82]),
                          (e += [g[176], i.value, g[187]].join(""));
                      return (
                        f.shift(),
                        (e += g[210]),
                        p.MD(m[7]) && (e += g[91]),
                        (e += g[2]),
                        _r_(e)
                      );
                    })((e += g[19])))),
                (e += g[18]),
                (e += g[63])),
              (e += g[17]),
              p.MJ(p.MB(m[7])) &&
                ((e += g[4]),
                (e = p.MD(m[20])
                  ? ((i = e += g[18]),
                    _i_("4ab:420c5fe3"),
                    (i += g[20]),
                    p.MK(p.MB(m[19])) &&
                      ((i += g[21]),
                      p.MN(m[8], p.ME(g[22], p.MB, p.MN, null)),
                      (i += g[18]),
                      f.unshift({
                        fe_bui_stepper_additional_attrs: g[60],
                        fe_bui_stepper_id: g[61],
                        fe_bui_stepper_max: p.MB(m[17]),
                        fe_bui_stepper_min: g[62],
                        fe_bui_stepper_title: p.MB(m[8]),
                        fe_bui_stepper_value: p.MB(m[18]) ? p.MB(m[18]) : 0,
                      }),
                      (n = i),
                      _i_("4ab:d3f49533"),
                      (n += [
                        g[23],
                        p.F.entities(p.MC(m[9])),
                        g[24],
                        p.F.html(p.MC(m[10])),
                        g[25],
                      ].join("")),
                      p.MD(m[11]) &&
                        (n += [g[26], p.F.html(p.MC(m[11])), g[27]].join("")),
                      (n += g[28]),
                      p.MD(m[16])
                        ? ((n += [
                            g[29],
                            p.F.entities(p.MC(m[9])),
                            g[30],
                            p.F.entities(p.MC(m[9])),
                            g[31],
                            p.F.entities(p.MC(m[12])),
                            g[32],
                            p.F.entities(p.MC(m[13])),
                            g[33],
                            p.F.entities(p.MC(m[14])),
                            g[34],
                            p.F.entities(p.MC(m[15])),
                            g[35],
                          ].join("")),
                          p.MJ(p.MB(m[14]) == p.MB(m[12])) && (n += g[36]),
                          (n += [
                            g[37],
                            (f.unshift({ stepper_title: p.MB(m[10]) }),
                            (b = p.F.html(p.ME(g[38], p.MB, p.MN, null))),
                            f.shift(),
                            b),
                            g[39],
                            p.F.entities(p.MC(m[9])),
                            g[40],
                            p.F.entities(p.MC(m[14])),
                            g[41],
                          ].join("")),
                          p.MJ(p.MB(m[14]) == p.MB(m[13])) && (n += g[36]),
                          (n += [
                            g[42],
                            (f.unshift({ stepper_title: p.MB(m[10]) }),
                            (b = p.F.html(p.ME(g[43], p.MB, p.MN, null))),
                            f.shift(),
                            b),
                            g[39],
                            p.F.entities(p.MC(m[9])),
                            g[44],
                            p.F.entities(p.MC(m[9])),
                            g[45],
                            p.F.entities(p.MC(m[14])),
                            g[46],
                            p.F.entities(p.MC(m[10])),
                            g[47],
                          ].join("")))
                        : ((n += [
                            g[48],
                            p.F.entities(p.MC(m[9])),
                            g[49],
                            p.F.entities(p.MC(m[9])),
                            g[50],
                            p.F.entities(p.MC(m[12])),
                            g[51],
                            p.F.entities(p.MC(m[13])),
                            g[52],
                            p.F.entities(p.MC(m[14])),
                            g[53],
                            p.F.entities(p.MC(m[15])),
                            g[54],
                          ].join("")),
                          p.MJ(p.MB(m[14]) == p.MB(m[12])) && (n += g[55]),
                          (n += [g[56], p.F.entities(p.MC(m[14])), g[57]].join(
                            ""
                          )),
                          p.MJ(p.MB(m[14]) == p.MB(m[13])) && (n += g[55]),
                          (n += g[58])),
                      (n += g[59]),
                      (i = _r_(n)),
                      f.shift(),
                      (i += g[63])),
                    (i += g[2]),
                    _r_(i))
                  : ((t = e += g[18]),
                    _i_("4ab:cb94c1de"),
                    (t += g[20]),
                    p.MK(p.MB(m[19]))
                      ? ((t += g[21]),
                        p.MD(m[7]) ||
                          ((t += g[64]),
                          p.MD(m[21]) || (t += g[65]),
                          (t += g[66]),
                          p.MD(m[22]) && (t += g[61]),
                          (t += g[67]),
                          p.MD(m[22])
                            ? (t += [
                                g[68],
                                p.F.entities(p.MC(m[23])),
                                g[69],
                              ].join(""))
                            : (t += g[70]),
                          (t += [
                            g[71],
                            p.ME(g[22], p.MB, p.MN, null),
                            g[72],
                          ].join(""))),
                        (t = (function (e) {
                          _i_("4ab:78465fc5"),
                            (e += g[4]),
                            p.MD(m[7]) && (e += g[73]),
                            (e += g[74]),
                            p.MD(m[22])
                              ? (e += [
                                  g[75],
                                  p.F.entities(p.MC(m[23])),
                                  g[76],
                                ].join(""))
                              : (e += g[77]),
                            (e += [
                              g[78],
                              p.ME(g[79], p.MB, p.MN, null),
                              g[80],
                            ].join(""));
                          var t = p.seq(1, p.MB(m[17])) || [];
                          f.unshift({ i: null });
                          for (var i, n = 1, a = t.length; n <= a; n++)
                            (f[0].i = i = t[n - 1]),
                              (e += [g[81], p.F.entities(i.value), g[53]].join(
                                ""
                              )),
                              p.MJ(p.MB(m[18]) == i.value) && (e += g[82]),
                              (e += g[83]),
                              p.MD(m[24])
                                ? (e +=
                                    (f.unshift({ num_rooms: i.value }),
                                    (b = p.ME(
                                      g[84],
                                      p.MB,
                                      p.MN,
                                      p.MO(i.value, null, g[84])
                                    )),
                                    f.shift(),
                                    b))
                                : (e += i.value),
                              (e += g[85]);
                          return (
                            f.shift(),
                            (e += g[86]),
                            p.MD(m[25]) &&
                              (e += [
                                g[18],
                                (f.unshift({
                                  class: g[87],
                                  name: g[88],
                                  width: g[89],
                                }),
                                (b = p.HELPER("icon", f[0])),
                                f.shift(),
                                b),
                                g[4],
                              ].join("")),
                            (e += g[90]),
                            p.MD(m[7]) && (e += g[91]),
                            (e += g[2]),
                            _r_(e)
                          );
                        })((t += g[18]))),
                        (t += g[63]))
                      : (t += [g[92], p.F.entities(p.MC(m[18])), g[93]].join(
                          ""
                        )),
                    (t += g[2]),
                    _r_(t))),
                (e += g[4]),
                (e += g[20])),
              (e += g[17]),
              p.MD(m[7]) && (e += g[91]),
              (e += g[194]),
              p.MK(p.MB(m[52]) || p.MB(m[53]) || p.MB(m[7]) || p.MB(m[46])) &&
                ((e = l((e += g[18]))), (e += g[20])),
              (e += g[211]),
              (a = _r_(e)),
              (a += g[212]),
              _r_(a)
            );
          });
        })()
      );
    var n = t("component"),
      a = t("morphdom"),
      s = t("read-data-options"),
      r = t("search-config"),
      o = t("et"),
      _ = t("search/searchbox/model");
    (i.exports = n.extend({
      init: function () {
        if (
          (_i_("4ab:d8ed49d6"),
          (this.options = s(this.$el, {
            modelId: { name: "sb-id", type: String, required: !0 },
            sbWidth: { name: "sb-width", type: String },
            sbBBToolSearchbox: { name: "sb-bbtool-searchbox", type: Boolean },
            childrenHide: { name: "sb-group-children-hide", type: Boolean },
            childrenAgesHide: {
              name: "sb-group-children-ages-hide",
              type: Boolean,
            },
            infantsHide: { name: "sb-group-infants-hide", type: Boolean },
            useBUIStepper: { name: "sb-group-use-bui-stepper", type: Boolean },
            buiSteppersAccessible: {
              name: "sb-group-bui-steppers-accessible",
              type: Boolean,
            },
            petsHide: { name: "sb-group-pets-hide", type: Boolean },
            roomsHide: { name: "sb-group-rooms-hide", type: Boolean },
            useAdultsLabel: {
              name: "sb-group-use_adults_label",
              type: Boolean,
            },
            blockLabels: { name: "sb-group-block-labels", type: Boolean },
            alwaysExpanded: { name: "sb-group-always-expanded", type: Boolean },
            descriptiveDropdowns: {
              name: "fe_sb_group_descriptive_dropdowns",
              type: Boolean,
            },
            universalDesign: { name: "fe_sb_universal_design", type: Boolean },
            removeDuplicateIds: {
              name: "fe_remove_duplicate_ids",
              type: Boolean,
            },
            searchBoxUniqueId: { name: "fe_sb_unique_id", type: String },
            searchboxXPI: { name: "fe_sb_xpi", type: Boolean },
            reorderGroupBlock: {
              name: "sb_reorder_rooms_block",
              type: Boolean,
            },
            sbFaceLift: { name: "sb-facelift", type: Boolean },
            sbChildAgeBrackets: {
              name: "fe_sb_show_children_age_bracket",
              type: Boolean,
            },
            sbMandatoryChildAges: {
              name: "fe_sb_mandatory_child_ages",
              type: Boolean,
            },
            sbChildAgesUIUpdate: {
              name: "fe_sb_child_ages_ui_update",
              type: Number,
            },
            sbDontUseDefaultChildAge: {
              name: "fe_sb_dont_use_default_child_age",
              type: Boolean,
            },
          })),
          (this.model = _.getInstance(this.options.modelId)),
          this.model.use("group"),
          this.model.use("dates"),
          this.model.on("change", this.modelChange.bind(this)),
          (this.$form = this.$el.parents("form")),
          r.on("change", this.searchConfigChange.bind(this)),
          this.$el.on(
            "change",
            '[data-group-rooms-count=""]',
            this.groupRoomsChange.bind(this)
          ),
          this.$el.on(
            "change",
            '[data-group-adults-count=""]',
            this.groupAdultsChange.bind(this)
          ),
          this.$el.on(
            "change",
            '[data-group-children-count=""]',
            this.groupChildrenChange.bind(this)
          ),
          this.$el.on(
            "change",
            "[data-group-child-age]",
            this.groupChildAgeChange.bind(this)
          ),
          this.$el.on(
            "change",
            '[data-group-infants-count=""]',
            this.groupInfantsChange.bind(this)
          ),
          (this.renderEl = this.$el.find('[data-render=""]')[0]),
          (this.template = B.jstmpl("search_group_group_html")),
          this.$form.on(
            "change",
            ".b-booker-type__input_business-booker",
            this.businessBookerSelected.bind(this)
          ),
          this.modelInit(),
          "index" === B.env.b_action &&
            "sessionStorage" in window &&
            !r.childrenAges.length)
        ) {
          var e;
          try {
            e = JSON.parse(
              window.sessionStorage.getItem("search_group_children_ages")
            );
          } catch (e) {}
          if (e) {
            this.model.group.set({ key: "children_count", value: e.length });
            for (var t = 0; t < e.length; t++)
              this.model.group.set({ i: t, key: "children_ages", value: e[t] });
          }
        }
        _r_();
      },
      modelInit: function () {
        _i_("4ab:a280bb15");
        var e = {
          rooms_count: r.rooms ? r.rooms.length : 1,
          adults_count: r.adults || 2,
          children_ages: r.childrenAges || [],
          default_empty_age_to: this.options.sbDontUseDefaultChildAge
            ? null
            : "12",
        };
        this.options.infantsHide || (e.infants_count = r.infants),
          this.model.group.init(e),
          _r_();
      },
      modelChange: function (e) {
        if (
          (_i_("4ab:d0eb1f21"),
          !e || ("group" != e.group && "dates" != e.group))
        )
          return _r_();
        this.render(), _r_();
      },
      searchConfigChange: function () {
        _i_("4ab:2a954708"),
          this.model.group.set({
            key: "rooms_count",
            value: Array.isArray(r.rooms) ? r.rooms.length : 1,
          }),
          this.model.group.set({ key: "adults_count", value: r.adults }),
          this.model.group.set({
            key: "children_count",
            value: Array.isArray(r.childrenAges) ? r.childrenAges.length : 1,
          }),
          this.options.infantsHide ||
            this.model.group.set({ key: "infants_count", value: r.infants }),
          Array.isArray(r.childrenAges) &&
            r.childrenAges.forEach(
              function (e, t) {
                _i_("4ab:8cfc68e3"),
                  this.model.group.set({
                    key: "children_ages",
                    i: t,
                    value: e,
                  }),
                  _r_();
              }.bind(this)
            ),
          _r_();
      },
      groupRoomsChange: function (e) {
        _i_("4ab:1b5dda0c");
        var t = $(e.currentTarget);
        this.model.group.set({ key: "rooms_count", value: t.val() }),
          "mywishlist" == B.env.b_action && this.customgoalForWishlist(2),
          _r_();
      },
      groupAdultsChange: function (e) {
        _i_("4ab:80dadfe0");
        var t = $(e.currentTarget);
        this.model.group.set({ key: "adults_count", value: t.val() }),
          (this.groupAdultsChanged = !0),
          "mywishlist" == B.env.b_action && this.customgoalForWishlist(2),
          _r_();
      },
      groupChildrenChange: function (e) {
        _i_("4ab:18f1905c");
        var t = this.model.group.get().children_ages.length,
          i = $(e.currentTarget);
        this.model.group.set({ key: "children_count", value: i.val() }),
          "mywishlist" == B.env.b_action && this.customgoalForWishlist(2),
          i.val() > t
            ? o.customGoal("INFddKNKNKPBDJJHMVGPLTLReASdVLT", 4)
            : o.customGoal("INFddKNKNKPBDJJHMVGPLTLReASdVLT", 3),
          _r_();
      },
      groupInfantsChange: function (e) {
        _i_("4ab:37d87d71");
        var t = $(e.currentTarget);
        this.model.group.set({ key: "infants_count", value: t.val() }), _r_();
      },
      groupChildAgeChange: function (e) {
        _i_("4ab:fd5481c5");
        var t = $(e.currentTarget),
          i = t.attr("data-group-child-age");
        this.model.group.set({ key: "children_ages", i: +i, value: t.val() }),
          o.customGoal("INFddKNKNKPBDJJHMVGPLTLReASdVLT", 1),
          _r_();
      },
      render: function () {
        _i_("4ab:7760e4a5");
        var e = {},
          t = this.model.group.get(),
          i = this.model.dates.get();
        (t = {
          fe_sb_state_number_of_rooms: t.rooms_count,
          fe_sb_state_number_of_adults: t.adults_count,
          fe_sb_state_number_of_children: t.children_ages.length,
          fe_sb_state_children_ages: t.children_ages,
          fe_sb_state_number_of_infants: t.infants_count,
          fe_sb_state_traveller: t.fe_sb_state_traveller,
          fe_sb_state_rooms: [
            {
              b_adults: t.adults_count,
              b_children: t.children_ages.length,
              b_children_ages: t.children_ages,
              b_room_order: 1,
            },
          ],
        }),
          B.env.b_lang_is_cjk && (t.b_lang_is_cjk = B.env.b_lang_is_cjk),
          i.checkout && (t.fe_sb_state_checkout = i.checkout.toString()),
          this.options.sbWidth && (t.fe_sb_width = this.options.sbWidth),
          this.options.childrenHide && (t.fe_sb_group_children_hide = 1),
          this.options.childrenAgesHide &&
            (t.fe_sb_group_children_ages_hide = 1),
          this.options.infantsHide && (t.fe_sb_group_infants_hide = 1),
          this.options.useBUIStepper && (t.fe_sb_group_use_bui_stepper = 1),
          this.options.buiSteppersAccessible &&
            (t.fe_sb_group_bui_steppers_accessible = 1),
          this.options.petsHide && (t.fe_sb_group_pets_hide = 1),
          this.options.roomsHide && (t.fe_sb_group_rooms_hide = 1),
          this.options.blockLabels && (t.fe_sb_group_block_labels = 1),
          this.options.alwaysExpanded && (t.fe_sb_group_always_expanded = 1),
          this.options.useAdultsLabel && (t.fe_sb_group_use_adults_label = 1),
          this.options.sbBBToolSearchbox && (t.fe_sb_bbtool_searchbox = 1),
          this.options.descriptiveDropdowns &&
            (t.fe_sb_group_descriptive_dropdowns = 1),
          this.options.universalDesign && (t.fe_sb_universal_design = 1),
          this.options.removeDuplicateIds && (t.fe_remove_duplicate_ids = 1),
          this.options.searchBoxUniqueId &&
            (t.fe_sb_unique_id = this.options.searchBoxUniqueId),
          this.options.searchboxXPI && (t.fe_sb_xpi = 1),
          this.options.reorderGroupBlock && (t.fe_sb_include_nr_rooms = 1),
          this.options.sbFaceLift && (t.fe_sb_facelift = 1),
          this.options.sbChildAgeBrackets &&
            (t.fe_sb_show_children_age_bracket =
              this.options.sbChildAgeBrackets),
          this.options.sbMandatoryChildAges &&
            (t.fe_sb_mandatory_child_ages = this.options.sbMandatoryChildAges),
          this.options.sbChildAgesUIUpdate &&
            (t.fe_sb_child_ages_ui_update = this.options.sbChildAgesUIUpdate);
        var n = this.template.render(t).trim();
        "msie" === B.env.b_browser &&
          B.env.b_browser_version <= 8 &&
          (e.onBeforeElUpdated = function (e, t) {
            _i_("4ab:2c707256");
            var i = e.getAttribute(jQuery.expando);
            return i && t.setAttribute(jQuery.expando, i), _r_(!0);
          }),
          (this._isRendered = !0),
          a(this.renderEl, n, e),
          _r_();
      },
      businessBookerSelected: function () {
        _i_("4ab:cdcb7c24"),
          this.groupAdultsChanged ||
            this.model.group.set({ key: "adults_count", value: 1 }),
          _r_();
      },
      groupChildrenAgeSave: function (e) {
        _i_("4ab:4f94d139"),
          e.preventDefault(),
          t("events").trigger("SearchBox::SaveTravelGroupsClicked", e),
          _r_();
      },
      customgoalForWishlist: function (e) {
        _i_("4ab:960fa9cf"),
          o.customGoal("aDMWRfDSdWUUHfLebbMPAFFLKZLXJOfAdIUFZZcO", e),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("search/group/model", function (e, t, i) {
    "use strict";
    _i_("4ab:8b1a34f6");
    var r = e("et");
    function n(e) {
      _i_("4ab:e0d4b805"),
        (this.model = e),
        (this.data = { preset: -1 }),
        (this.valid = !0),
        (this.validationError = ""),
        (this.options = {}),
        _r_();
    }
    $.extend(n.prototype, {
      init: function (e) {
        _i_("4ab:b6ef73a3"), (this.data = e), this.emit("init"), _r_();
      },
      configure: function (e, t) {
        _i_("4ab:66d50a771"),
          void 0 !== t
            ? (this.options[e] = t)
            : "object" == typeof e && $.extend(this.options, e),
          _r_();
      },
      get: function () {
        return _i_("4ab:867e130f1"), _r_(this.data);
      },
      setAll: function (t) {
        if ((_i_("4ab:cc2e7b0d"), !t)) return _r_(!1);
        var i = this;
        return (
          Object.keys(t).forEach(function (e) {
            _i_("4ab:a33046ee"), i.set({ key: e, value: t[e] }, !0), _r_();
          }),
          this.emit("change"),
          _r_(!0)
        );
      },
      set: function (e, t) {
        if ((_i_("4ab:92e83c91"), !e || !e.key)) return _r_(!1);
        if ("children_count" == e.key)
          if (
            (this.data.children_ages || (this.data.children_ages = []),
            0 == e.value)
          )
            this.data.children_ages = [];
          else if (this.data.children_ages.length < e.value)
            for (var i = this.data.children_ages.length; i < e.value; i++)
              this.data.default_empty_age_to
                ? this.data.children_ages.push(this.data.default_empty_age_to)
                : this.data.children_ages.push("");
          else
            this.data.children_ages.length > e.value &&
              this.data.children_ages.splice(
                e.value,
                this.data.children_ages.length - e.value
              );
        else
          e.hasOwnProperty("i")
            ? (this.data[e.key] || (this.data[e.key] = []),
              (this.data[e.key][e.i] = e.value))
            : (this.data[e.key] = e.value);
        if ("index" === B.env.b_action && "sessionStorage" in window) {
          var n = JSON.stringify(this.data.children_ages);
          window.sessionStorage.setItem("search_group_children_ages", n);
        }
        return t || this.emit("change"), _r_(!0);
      },
      validate: function (e) {
        _i_("4ab:237ffa8f");
        var t = !0,
          i = "";
        if ((e = e || {}).groupLimit) {
          var n = 0;
          this.data &&
            this.data.adults_count &&
            (n += parseInt(this.data.adults_count)),
            this.data &&
              this.data.children_ages &&
              (n += this.data.children_ages.length),
            n > e.groupLimit && ((t = !1), (i = "over-limit"));
        }
        if (this.data.children_ages.length) {
          for (var a = !1, s = 0; s < this.data.children_ages.length; s++)
            ("" !== this.data.children_ages[s] &&
              null !== this.data.children_ages[s]) ||
              (a = !0);
          a &&
            ((t = !1),
            (i = "children-ages"),
            r.customGoal("INFddKNKNKPBDJJHMVGPLTLReASdVLT", 2));
        }
        return (
          (this.valid != t || ("children-ages" === i && !t)) &&
            ((this.valid = t),
            (this.validationError = i),
            this.emit("validation", { valid: t, validationError: i })),
          _r_(t)
        );
      },
      modelChange: function (e) {
        if ((_i_("4ab:0c52eeaa"), !e || "traveller" !== e.group)) return _r_();
        var t = this.model.traveller.get().travellerType;
        switch (t) {
          case null:
          case "":
          case "couple":
            (this.data.rooms_count = 1),
              (this.data.adults_count = 2),
              (this.data.children_ages = []);
            break;
          case "solo":
          case "business":
            (this.data.rooms_count = 1),
              (this.data.adults_count = 1),
              (this.data.children_ages = []);
            break;
          case "family":
            (this.data.adults_count =
              1 == this.data.adults_count ? 2 : this.data.adults_count),
              (this.data.children_ages &&
                0 != this.data.children_ages.length) ||
                (this.data.children_ages = [this.data.default_empty_age_to]);
            break;
          case "group":
            (this.data.adults_count =
              1 == this.data.adults_count ? 2 : this.data.adults_count),
              (this.data.children_ages = []);
        }
        (this.data.fe_sb_state_traveller = t), this.emit("change"), _r_();
      },
      isGroupSearch: function () {
        return (
          _i_("4ab:c6d8e948"),
          _r_(
            !!(
              2 < this.data.adults_count ||
              (this.data.children_ages && this.data.children_ages.length) ||
              (this.data.rooms_count && 1 < this.data.rooms_count)
            )
          )
        );
      },
      emit: function (e, t) {
        _i_("4ab:9fb010e7"),
          (t = t || {}),
          this.model.emit(e, $.extend(t, { group: "group" })),
          _r_();
      },
    }),
      (i.exports = n),
      _r_();
  }),
  B.define("search/popular-nearby/model", function (e, t, i) {
    "use strict";
    _i_("4ab:5efcbf7c");
    var n = e("server-data");
    function a(e) {
      _i_("4ab:6ff3478d"), (this.model = e), this.modelInit(), _r_();
    }
    $.extend(a.prototype, {
      getPopularNearbySuggestions: function () {
        if ((_i_("4ab:97b936b0"), this.formattedData))
          return _r_(this.formattedData);
        if (this.rawData && this.rawData.length)
          return (
            (this.rawData = this.rawData.slice(0, 5)),
            (this.formattedData = this.rawData
              .filter(function (e) {
                return _i_("4ab:268335d0"), _r_(e.name && e.country);
              })
              .map(function (e) {
                return (
                  _i_("4ab:def56af1"),
                  _r_({
                    label: e.name,
                    ss: [e.name, e.country].join(", "),
                    labels: [
                      { dest_id: e.dest_id, type: e.dest_type, text: e.name },
                      {
                        dest_id: e.dest_id,
                        type: e.dest_type,
                        text: e.country,
                      },
                    ],
                    dest_type: e.dest_type,
                    dest_id: e.dest_id,
                    b_max_los_data: e.max_los_data,
                    isPopularNearby: !0,
                  })
                );
              })),
            this.formattedData[0] &&
              n.fe_popular_destinations_nearby_title &&
              ((this.formattedData[0].section_title =
                n.fe_popular_destinations_nearby_title),
              (this.formattedData[0].section_title_class =
                "sb-popular-nearby-title")),
            _r_(this.formattedData)
          );
        _r_();
      },
      modelInit: function () {
        _i_("4ab:560d951a"),
          (this.rawData = n.fe_popular_destinations_nearby),
          _r_();
      },
    }),
      (i.exports = a),
      _r_();
  }),
  B.define("search/recent-search/model", function (e, t, i) {
    "use strict";
    _i_("4ab:b47a8cc0");
    var n = e("server-data");
    function a(e) {
      _i_("4ab:fede0c9a"), (this.model = e), this.modelInit(), _r_();
    }
    $.extend(a.prototype, {
      getRecentSearchSuggestions: function () {
        if ((_i_("4ab:df406233"), this.formattedData))
          return _r_(this.formattedData);
        if (this.rawData && this.rawData.length) {
          var i = [];
          return (
            this.rawData
              .filter(function (e) {
                return _i_("4ab:9cfb6757"), _r_(e.b_dest_short_name);
              })
              .flatMap(function (t) {
                _i_("4ab:76240c4d"),
                  t.b_dates.map(function (e) {
                    _i_("4ab:c86ca836"),
                      i.push({
                        label: t.b_dest_short_name,
                        ss: t.b_dest_short_name,
                        labels: [
                          {
                            dest_id: t.b_dest_id,
                            type: t.b_dest_type,
                            text: t.b_dest_short_name,
                          },
                          { dest_id: t.b_dest_id, type: t.b_dest_type },
                        ],
                        dest_type: "recent-search",
                        dest_id: t.b_dest_id,
                        date: e,
                        isRecentSearch: !0,
                      }),
                      _r_();
                  }),
                  _r_();
              }),
            (this.formattedData = i.slice(0, 5)),
            this.formattedData[0] &&
              n.fe_recent_search_title &&
              ((this.formattedData[0].section_title = n.fe_recent_search_title),
              (this.formattedData[0].section_title_class =
                "sb-recent-search-title")),
            _r_(this.formattedData)
          );
        }
        _r_();
      },
      modelInit: function () {
        _i_("4ab:7a8bd6a5"), (this.rawData = n.fe_recent_search), _r_();
      },
    }),
      (i.exports = a),
      _r_();
  }),
  (function () {
    _i_("4ab:99d47306");
    var r = 1;
    B.when({
      action: "index",
      events: "ready",
      condition: B.env.fe_recent_search_cond,
    }).run(function (e) {
      _i_("4ab:8a408d12");
      var t,
        i = e("et"),
        n = e("search/searchbox/events"),
        a = $("#ss").closest("form");
      function s(e) {
        _i_("4ab:d18e6e24"),
          e
            ? ((t = $(
                '<input type="hidden" value="1" name="is_recent_search" />'
              )),
              a.append(t))
            : t && t.remove(),
          _r_();
      }
      n.on(n.SEARCHBOX_DESTINATION_SELECTED, function (e) {
        _i_("4ab:39eec20f"),
          e && e.destination && e.destination.isRecentSearch
            ? (i.customGoal("cCHObXKeNJfOEJcCcCcCC", r), s(!0))
            : s(!1),
          _r_();
      }),
        _r_();
    }),
      _r_();
  })(),
  B.define("component/search/entire-place-checkbox", function (e, t, i) {
    "use strict";
    _i_("4ab:45073832");
    var n = e("component"),
      a = e("search/searchbox/model"),
      s = e("search/searchbox/events"),
      r = "privacy_type=3",
      o = "privacy_type_no_date=3";
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:3fc0a5a1");
        var e = this.$el.closest("form"),
          t = e.attr("data-sb-id");
        if (
          ((this.$checkbox = this.$el.find("[name=sb_entire_place]")),
          !this.$checkbox.length || !t)
        )
          return _r_();
        (this.model = a.getInstance(e.attr("data-sb-id"))),
          s.on(s.SEARCHBOX_SUBMIT_SUCCESS, this.updateHiddenFields.bind(this)),
          _r_();
      },
      updateHiddenFields: function () {
        _i_("4ab:65daace2"),
          this.$el.is(":visible") && this.$checkbox.prop("checked")
            ? this.model.setFields("filters", [
                { name: "nflt", value: [r, o].join(";") },
              ])
            : this.model.setFields("filters", []),
          this.model.emit("change", {}),
          _r_();
      },
    })),
      _r_();
  }),
  _i_("4ab:2280c42a"),
  B.define(
    "searchbox/dynamic-los-per-dest-tracking-batches",
    function (e, t, i) {
      _i_("4ab:19e95599");
      var n = e("et"),
        a = e("server-data"),
        s = 1,
        r = 2,
        o = 3,
        _ = 4,
        l = 5,
        d = 6,
        h = 7,
        c = 8,
        u = 9,
        f = { MDOT: "mdot", DESKTOP: "desktop" };
      (i.exports = {
        SITE_TYPES: f,
        trackAttemptSearchingForExtendedLos: function (e, t, i) {
          if ((_i_("4ab:2c2a50e3"), !i)) return _r_();
          n.stage(i, r),
            t === f.MDOT ? n.stage(i, d) : t === f.DESKTOP && n.stage(i, l),
            "index" === a.b_action && n.stage(i, h),
            "searchresults" === a.b_action && n.stage(i, c),
            "hotel" === a.b_action && n.stage(i, u),
            (a.b_user_is_genius || a.b_reg_user_is_genius) && n.stage(i, o),
            a.b_is_landing && n.stage(i, _),
            _r_();
        },
        trackSearchExtendedUfi: function (e) {
          _i_("4ab:b8b58ee9"), e && n.stage(e, s), _r_();
        },
        trackExperiment: function (e) {
          if ((_i_("4ab:4ea26fdf"), e)) return _r_(n.track(e));
          return _r_(0);
        },
      }),
        _r_();
    }
  ),
  _r_(),
  _i_("4ab:8f5d334a"),
  B.when({ events: "ready" }).run(function (e) {
    _i_("4ab:8cb598fc");
    var t = e("server-data"),
      i = e("search/searchbox/model").getInstance("main");
    i.use("destination"), i.use("dates");
    var n = i.destination,
      a = i.dates,
      s = t.b_max_los_data_for_prefilled_dest || {},
      r = e("searchbox/dynamic-los-per-dest-tracking-batches");
    function o() {
      return (
        _i_("4ab:67942058"),
        _r_(parseInt(s.default_los || 0, 10) || a.getOption("maxLos"))
      );
    }
    function _() {
      _i_("4ab:77fb5ad4");
      var e = o(),
        t =
          (_i_("4ab:48ef3014"), _r_(parseInt(s.max_allowed_los || 0, 10)) || e),
        i = a.getOption("maxLos"),
        n = t;
      a.configure("maxLos", n), i !== n && a.validate({ force: !0 }), _r_();
    }
    _(),
      i.on("change", function (e) {
        _i_("4ab:20973cc8"),
          e &&
            "destination" === e.group &&
            ((s = n.data.max_los_data || {}), _()),
          _r_();
      }),
      i.on("validation:lengthOfStay", function (e) {
        _i_("4ab:ea9ac6ee"),
          e &&
            "dates" === e.group &&
            e.lengthOfStay &&
            (function (e) {
              _i_("4ab:836d34d5");
              var t =
                  (_i_("4ab:0b2558ac"),
                  _r_(s.has_extended_los ? s.experiment : "")),
                i = o();
              e &&
                t &&
                (r.trackSearchExtendedUfi(t),
                i < e &&
                  r.trackAttemptSearchingForExtendedLos(
                    e,
                    r.SITE_TYPES.DESKTOP,
                    t
                  )),
                _r_();
            })(e.lengthOfStay),
          _r_();
      }),
      _r_();
  }),
  _r_(),
  B.define("search/searchbox/analytics", function (e, n, t) {
    _i_("4ab:67a7982e");
    var a = {};
    (n.send = function (e, t, i) {
      if ((_i_("4ab:47f6d2f8"), !window.ga)) return _r_();
      window.ga("send", "event", "Searchbox", B.env.b_action, e, t, i), _r_();
    }),
      (n.sendNonInteractive = function (e, t) {
        _i_("4ab:953c321e"), n.send(e, t, { nonInteraction: !0 }), _r_();
      }),
      (n.sendOnce = function (e, t) {
        _i_("4ab:b77ab645");
        var i = e + ":" + t;
        a[i] || (n.send(e, t), (a[i] = !0)), _r_();
      }),
      _r_();
  }),
  B.define("search/searchbox/bind-events", function (e, t, i) {
    _i_("4ab:b857c550");
    var n = e("search/searchbox/events"),
      a = {
        change: {
          group: n.SEARCHBOX_GROUP_SELECTED,
          dates: n.SEARCHBOX_DATES_SELECTED,
        },
      };
    (i.exports = {
      init: function (t) {
        function e(e, i) {
          _i_("4ab:0caa09d5"),
            t.on(e, function (e) {
              for (var t in (_i_("4ab:e37760d9"), i))
                e && e.group === t && n.emit(i[t], e);
              _r_();
            }),
            _r_();
        }
        for (var i in (_i_("4ab:130a3d7d"), a)) e(i, a[i]);
        _r_();
      },
    }),
      _r_();
  }),
  B.define("search/searchbox/model", function (d, e, t) {
    "use strict";
    _i_("4ab:0c7e3af6");
    var i = d("event-emitter"),
      n = d("search/modules/flags"),
      a = d("search/searchbox/bind-events"),
      s = {};
    function r(e) {
      _i_("4ab:e909045c"),
        i.extend(this),
        (this.id = e),
        this.formAction,
        (this.fieldGroups = { track: [] }),
        (this.flags = {}),
        (this.validators = []),
        (this.mode = ""),
        a.init(this),
        _r_();
    }
    $.extend(r.prototype, {
      use: function (e) {
        if ((_i_("4ab:2410f65b"), this[e])) return _r_();
        switch (e) {
          case "destination":
            var t = d("search/destination/model");
            this[e] = new t(this);
            break;
          case "origin":
            var i = d("search/destination/model");
            this[e] = new i(this);
            break;
          case "dates":
            var n = d("search/dates/model");
            this[e] = new n(this);
            break;
          case "group":
            var a = d("search/group/model");
            this[e] = new a(this);
            break;
          case "driverAge":
            var s = d("search/driver-age/model");
            this[e] = new s(this);
            break;
          case "flights":
            var r = d("search/flights/model");
            this[e] = new r(this);
            break;
          case "popularNearby":
            var o = d("search/popular-nearby/model");
            this[e] = new o(this);
            break;
          case "recentSearch":
            var _ = d("search/recent-search/model");
            this[e] = new _(this);
            break;
          default:
            return _r_();
        }
        if ("function" == typeof this[e].validate) {
          var l = this[e]._options ? this[e]._options : this[e].options;
          l || (l = {}),
            this.validators.push(this[e].validate.bind(this[e], l));
        }
        _r_();
      },
      submit: function () {
        _i_("4ab:419d3960"), this.emit("submit"), _r_();
      },
      getFormAction: function () {
        return _i_("4ab:2bb3fc7a"), _r_(this.formAction);
      },
      setFormAction: function (e) {
        _i_("4ab:ffab2309"), (this.formAction = e), _r_();
      },
      getFields: function () {
        _i_("4ab:d1d8fd96");
        var t = [];
        return (
          Object.keys(this.fieldGroups).forEach(
            function (e) {
              _i_("4ab:2ea4b695"),
                Array.isArray(this.fieldGroups[e]) &&
                  (t = t.concat(this.fieldGroups[e])),
                _r_();
            }.bind(this)
          ),
          _r_(t)
        );
      },
      setFields: function (e, t) {
        _i_("4ab:ac5771fa"), (this.fieldGroups[e] = t), _r_();
      },
      getMode: function () {
        return _i_("4ab:2e4cae8d"), _r_(this.mode);
      },
      setMode: function (e) {
        _i_("4ab:112fc3f2"),
          (this.mode = e),
          this.emit("change-mode", e),
          _r_();
      },
      hasFlag: function (e) {
        return _i_("4ab:a263e608"), _r_(e in this.flags);
      },
      getFlag: function (e) {
        return _i_("4ab:ab8b5c0e"), _r_(this.flags[e]);
      },
      updateFlags: function (e) {
        _i_("4ab:3466ef2a");
        var t = n.parse(e);
        Object.assign(this.flags, t), _r_();
      },
      validate: function () {
        _i_("4ab:608d75f9");
        var e = this.validators.filter(function (e) {
          return _i_("4ab:e68ae526"), _r_(e.call());
        });
        return _r_(e.length == this.validators.length);
      },
    }),
      (t.exports = {
        getInstance: function (e) {
          return _i_("4ab:89ca5159"), s[e] || (s[e] = new r(e)), _r_(s[e]);
        },
      }),
      _r_();
  }),
  B.define("search/searchbox/events", function (e, t, i) {
    "use strict";
    _i_("4ab:8849c959");
    var n = new (e("event-emitter"))();
    return (
      (n.SEARCHBOX_SUBMIT_SUCCESS = "searchbox_submit_success"),
      (n.SEARCHBOX_DESTINATION_SELECTED = "searchbox_destination_selected"),
      (n.SEARCHBOX_DATES_SELECTED = "searchbox_dates_selected"),
      (n.SEARCHBOX_GROUP_SELECTED = "searchbox_group_selected"),
      (n.SEARCHBOX_AUTOCOMPLETE_TRIGGERED = "searchbox_autocomplete_triggered"),
      _r_(n)
    );
  }),
  B.define("search/searchbox/ga-events-tracker", function (e, t, i) {
    "use strict";
    _i_("4ab:4a6df708");
    var a = e("ga-tracker"),
      s = e("server-data"),
      n = function () {};
    Object.assign(n.prototype, {
      track: function (e, t, i) {
        _i_("4ab:f915f641");
        var n = ["Searchbox", s.b_action, "[" + e + "] " + t, i];
        a.trackEvent.apply(a, n), _r_();
      },
      trackError: function (e) {},
      trackEvent: function (e) {
        return _i_("4ab:f97d23f5"), _r_(this.track("interaction", e));
      },
    }),
      (i.exports = new n()),
      _r_();
  }),
  B.define("component/search/searchbox/searchbox", function (i, e, t) {
    "use strict";
    _i_("4ab:293e41f9");
    var n = i("server-data"),
      a = i("component"),
      s = i("search/searchbox/model"),
      r = i("read-data-options"),
      o = i("search/searchbox/events"),
      _ = !1,
      l = [
        "country",
        "dest_id",
        "dest_type",
        "district",
        "iata",
        "landmark",
        "latitude",
        "longitude",
        "place_id",
        "place_id_lat",
        "place_id_lon",
        "region",
        "prefill_submitted",
      ];
    (t.exports = a.extend({
      init: function () {
        (_i_("4ab:3d0009fd"),
        (this.hiddenFields = []),
        (this.options = r(this.$el, {
          modelId: { name: "sb-id", type: String, required: !0 },
          flags: { name: "sb-flags", type: String, defaultValue: "" },
          isFirstVisible: { name: "is-first-visible", type: Boolean },
          skipHpRefresh: { name: "skip-hp-refresh", type: Boolean },
          showOverlayOnSubmit: {
            name: "show-overlay-on-submit",
            type: Boolean,
          },
          actionForGroup: {
            name: "sb-action-for-group",
            type: String,
            defaultValue: "",
          },
          changeCtaCopyOnInputChange: {
            name: "change-cta-copy-on-input-change",
            type: String,
            defaultValue: "",
          },
        })),
        (this.model = s.getInstance(this.options.modelId)),
        this.model.on("init", this.modelChange.bind(this)),
        this.model.on("change", this.modelChange.bind(this)),
        this.model.on("submit", this.modelSubmit.bind(this)),
        this.model.updateFlags(this.options.flags),
        (this.$form = this.$el.is("form")
          ? this.$el
          : this.$el.find("form:eq(0)")),
        this.$form.submit(this.formSubmit.bind(this)),
        (this.originalAction = this.$form.attr("action")),
        this.options.isFirstVisible && this.model.hasFlag("sticky")) &&
          i("search/searchbox/searchbox-sticky-controller")
            .getController()
            .setElement(this.$form);
        this.model.hasFlag("sticky") &&
          this.model.hasFlag("deny_focus") &&
          this.$el.get(0) &&
          this.model.getFlag("deny_focus") &&
          new (i("search/searchbox/searchbox-deny-focus-controller"))(
            this.$el.get(0)
          );
        this.model.hasFlag("sb_is_sticky") &&
          new (i("search/searchbox/searchbox-sticky-controller-v2"))({
            el: this.el,
            model: this.model,
          });
        (this.$searchOverlay = this.$el.find("[data-searching-overlay]")),
          (this.shouldShowSearchOverlay =
            this.model.getFlag("AEJPAcBacPONDcFGHT") &&
            this.$searchOverlay.length),
          this.shouldShowSearchOverlay &&
            (this.$searchOverlay.on(
              "click",
              this.searchOverlayClick.bind(this)
            ),
            $(document).on("keydown", this.hideSearchOverlay.bind(this))),
          this.initCurrentCountryField();
        var e = $(".sb-searchbox-horizontal__dismissible-btn");
        if (e.length && !_) {
          var t = e.parents(".sb-searchbox-horizontal");
          (_ = !0),
            e.click(function () {
              _i_("4ab:14063a32"),
                t.hasClass("hidden")
                  ? t.removeClass("hidden")
                  : t.addClass("hidden"),
                _r_();
            });
        }
        "www" == n.b_site_type &&
          this.model.setFields("sr_traffic", [{ name: "from_sf", value: 1 }]),
          B.env.b_force_dates &&
            (this.model.setFields("sr_user_modifications", [
              { name: "user_changed_date", value: 0 },
            ]),
            B.eventEmitter.on(
              "FORM:user-changes",
              function (e, t) {
                _i_("4ab:53b96069"),
                  this.model.setFields("sr_user_modifications", [
                    { name: "user_changed_" + t.type, value: 1 },
                  ]),
                  this.updateHiddenFields(),
                  _r_();
              }.bind(this)
            )),
          function () {
            _i_("4ab:a0e886d7");
            var t = function (e) {
              _i_("4ab:5df413d1"),
                this.options.changeCtaCopyOnInputChange &&
                  e &&
                  ("dates" !== e.group || "checkout" === e.type) &&
                  (this.$form
                    .find(".js-sb-submit-text")
                    .html(this.options.changeCtaCopyOnInputChange),
                  this.model.off("change", t)),
                _r_();
            }.bind(this);
            this.model.on("change", t), _r_();
          }.bind(this)(),
          _r_();
      },
      modelChange: function (e) {
        _i_("4ab:c04d9e85"), this.updateHiddenFields(), _r_();
      },
      modelSubmit: function () {
        _i_("4ab:4d3a9c94"), this.$form.submit(), _r_();
      },
      initCurrentCountryField: function () {
        _i_("4ab:9332a9cc");
        var e = !1;
        (this.$onlyCurrentCountry = this.$form.find("#limit-search-area")),
          this.$onlyCurrentCountry.length &&
            ((e = this.$onlyCurrentCountry.is(":checked")),
            this.$onlyCurrentCountry.bind(
              "change",
              this.onlyCurrentCountryChange.bind(this)
            ),
            this.model.use("destination"),
            this.model.destination.initOnlyCurrentCountry(e)),
          _r_();
      },
      onlyCurrentCountryChange: function () {
        _i_("4ab:084694bf"),
          this.model.use("destination"),
          this.model.destination.setOnlyCurrentCountry(
            this.$onlyCurrentCountry.is(":checked")
          ),
          _r_();
      },
      updateHiddenFields: function () {
        _i_("4ab:97e4be09");
        var e = this.model.getFormAction(),
          t = this.$form.attr("action");
        e || (e = this.originalAction),
          t != e && this.$form.attr("action", e),
          this.hiddenFields &&
            this.hiddenFields.forEach(function (e) {
              _i_("4ab:cb94b31b"), e.$node.remove(), (e.$node = null), _r_();
            });
        var i = this.model.getFields();
        this.hiddenFields = [];
        var n = [],
          a = !1;
        i.forEach(
          function (e) {
            _i_("4ab:524ac3a4"),
              this.hiddenFields.push({ name: e.name, value: e.value }),
              n.push(e.name),
              -1 != l.indexOf(e.name) && (a = !0),
              _r_();
          }.bind(this)
        ),
          this.$form
            .find("input")
            .filter(function () {
              return (
                _i_("4ab:db7cc3c8"),
                _r_(
                  (a && -1 != l.indexOf(this.name)) ||
                    -1 != n.indexOf(this.name)
                )
              );
            })
            .remove(),
          this.hiddenFields.forEach(
            function (e) {
              _i_("4ab:11542117");
              var t = $("<input>");
              t.attr("type", "hidden"),
                t.attr("name", e.name),
                t.attr("value", e.value),
                (e.$node = t),
                this.$form.append(t),
                _r_();
            }.bind(this)
          ),
          _r_();
      },
      selectFirstFromAutocomplete: function () {
        _i_("4ab:0468afb5");
        var e = this.model.destination && this.model.destination.ac;
        e &&
          !e.selected &&
          e.dataset &&
          e.dataset.length &&
          this.model.destination.set(e.dataset[0]),
          _r_();
      },
      formSubmit: function (e) {
        if ((_i_("4ab:28b93efe"), !this.model.validate()))
          return e.preventDefault(), _r_();
        o.trigger(o.SEARCHBOX_SUBMIT_SUCCESS, this),
          this.shouldShowSearchOverlay
            ? this.showSearchOverlay()
            : this.shouldShowSearchPageOverlay
            ? this.pageOverlay.show(this.model.destination.data.ss_raw)
            : this.shouldShowSRPP &&
              this.SRPPOverlay.show(this.model.destination.data.ss_raw),
          this.options.actionForGroup &&
            this.model.group &&
            "function" == typeof this.model.group.isGroupSearch &&
            this.model.group.isGroupSearch() &&
            this.$form.attr("action", this.options.actionForGroup),
          this.selectFirstFromAutocomplete(),
          _r_();
      },
      searchOverlayClick: function () {
        _i_("4ab:212f5c38"),
          this.abortSubmit(),
          this.hideSearchOverlay(),
          B.et.customGoal("AEJPAcBacPONDcFGHT", 1),
          _r_();
      },
      abortSubmit: function () {
        _i_("4ab:c57d5cae"),
          window.stop
            ? window.stop()
            : document.execCommand && document.execCommand("Stop"),
          _r_();
      },
      showSearchOverlay: function () {
        _i_("4ab:a7b810f1"), this.$searchOverlay.addClass("-visible"), _r_();
      },
      hideSearchOverlay: function () {
        _i_("4ab:ae61912d"), this.$searchOverlay.removeClass("-visible"), _r_();
      },
    })),
      _r_();
  }),
  B.define("search/searchbox/searchbox-sticky-controller", function (e, t, i) {
    "use strict";
    _i_("4ab:63496668");
    var n = e("jquery"),
      a = e("event-emitter"),
      s = null;
    function r() {
      _i_("4ab:2e970a1c"),
        a.extend(this),
        (this.visible = !1),
        (this.bottomPosition = null),
        (this.$el = null),
        (this.$sticky = null),
        (this.$window = n(window)),
        this.$window.on("scroll", this.windowScroll.bind(this)),
        this.$window.on("keydown", this.onKeyDown.bind(this)),
        this.$window.on("click", this.clickOnWindow.bind(this)),
        _r_();
    }
    Object.assign(r.prototype, {
      setElement: function (e) {
        if ((_i_("4ab:92ba9383"), this.bottomPosition)) {
          var t = e.offset(),
            i = e.outerHeight();
          if (t && t.top + i > this.bottomPosition) return _r_();
        }
        (this.$el = e), this.recalculate(), _r_();
      },
      setStickyElement: function (e) {
        _i_("4ab:b73c45bc"), (this.$sticky = e), _r_();
      },
      isVisible: function () {
        return _i_("4ab:cc445ed2"), _r_(this.visible);
      },
      recalculate: function () {
        if ((_i_("4ab:c603101a"), null === this.$el)) return _r_();
        var e = this.$el.offset(),
          t = this.$el.outerHeight();
        if (!e) return _r_();
        (this.bottomPosition = e.top + t), this.updateStatus(), _r_();
      },
      show: function () {
        _i_("4ab:874c707c"), (this.visible = !0), this.emit("show"), _r_();
      },
      onKeyDown: function (e) {
        _i_("4ab:c91f489a"),
          27 === e.keyCode && this.visible && this.updateStatus(),
          _r_();
      },
      clickOnWindow: function (e) {
        if ((_i_("4ab:a1d20162"), this.$sticky && this.$sticky.length)) {
          var t = e.target,
            i = this.$sticky.get(0);
          !(n.contains(i, t) || i === t) && this.visible && this.updateStatus();
        }
        _r_();
      },
      updateStatus: function () {
        _i_("4ab:e7cec903"),
          !this.visible && this.$window.scrollTop() >= this.bottomPosition
            ? ((this.visible = !0), this.emit("show"))
            : this.visible &&
              this.$window.scrollTop() < this.bottomPosition &&
              ((this.visible = !1), this.emit("hide")),
          _r_();
      },
      windowScroll: function (e) {
        if ((_i_("4ab:65bfc59a"), null === this.bottomPosition)) return _r_();
        this.updateStatus(), _r_();
      },
    }),
      (i.exports = {
        getController: function () {
          return _i_("4ab:b7cb9ba8"), s || (s = new r()), _r_(s);
        },
      }),
      _r_();
  }),
  B.define("component/search/searchbox/searchbox-sticky", function (e, t, i) {
    "use strict";
    _i_("4ab:589e78cf");
    var n = e("component"),
      a = e("events"),
      s = e("search/searchbox/searchbox-sticky-controller").getController();
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:b057c357"),
          s.on("show", this.show.bind(this)),
          s.on("hide", this.hide.bind(this)),
          s.setStickyElement(this.$el),
          s.isVisible() && this.hardShow(),
          _r_();
      },
      show: function (e) {
        _i_("4ab:85085336"),
          this.$el.addClass("-visible-1"),
          a.trigger("searchbox-sticky:show"),
          setTimeout(
            function () {
              _i_("4ab:54c5e049"), this.$el.addClass("-visible-2"), _r_();
            }.bind(this),
            0
          ),
          _r_();
      },
      hardShow: function () {
        _i_("4ab:3835991a"), this.$el.addClass("-visible-1 -visible-2"), _r_();
      },
      hide: function (e) {
        _i_("4ab:fc5db946"),
          this.$el.removeClass("-visible-2"),
          setTimeout(
            function () {
              _i_("4ab:e755c765"), this.$el.removeClass("-visible-1"), _r_();
            }.bind(this),
            1e3
          ),
          _r_();
      },
    })),
      _r_();
  }),
  B.define(
    "search/searchbox/searchbox-deny-focus-controller",
    function (e, t, i) {
      "use strict";
      _i_("4ab:92b4d540");
      var n = e("jquery"),
        a = e("deny-focus");
      function s(e) {
        _i_("4ab:947d6856"),
          (this.el = e),
          (this.state = null),
          (this._timeoutId = null),
          this.deny();
        var t = this.eventHandler.bind(this);
        n(this.el).on(
          "focus change blur",
          "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex], *[contenteditable]",
          t
        ),
          B.eventEmitter.bind("CALENDAR:dates_changed CALENDAR:dayclick", t),
          _r_();
      }
      ((s.prototype = s.prototype || {}).eventHandler = function (e) {
        _i_("4ab:3e534ed6"),
          this._timeoutId && clearTimeout(this._timeoutId),
          (this._timeoutId = null),
          "focusout" === e.type || "blur" === e.type
            ? (this._timeoutId = setTimeout(this.deny.bind(this), 100))
            : this.allow(),
          _r_();
      }),
        (s.prototype.deny = function () {
          if ((_i_("4ab:30d89ddb"), "deny" === this.state)) return _r_();
          (this.state = "deny"), a.deny(this.el), _r_();
        }),
        (s.prototype.allow = function () {
          if ((_i_("4ab:3068ba21"), "allow" === this.state)) return _r_();
          (this.state = "allow"), a.allow(this.el), _r_();
        }),
        (i.exports = s),
        _r_();
    }
  ),
  B.define(
    "search/searchbox/searchbox-sticky-controller-v2",
    function (e, t, i) {
      _i_("4ab:15a6c8e3");
      var n = e("jquery"),
        a = e("et"),
        s = "sb-searchbox-sticky-v2--sticky",
        r = "sb-searchbox-sticky-v2",
        o = "sb-searchbox-sticky-v2--blue-bg",
        _ = ".js--sb-fieldset",
        l = "[data-sb-outer]",
        d = n(window),
        h = n("body");
      function c(t, i, n) {
        _i_("4ab:d846bf0f");
        var a = 0;
        return _r_(function () {
          _i_("4ab:7c38f485");
          var e = arguments;
          if (a) return _r_();
          (a = setTimeout(function () {
            _i_("4ab:f725512b"), t.apply(n || null, e), (a = null), _r_();
          }, i)),
            _r_();
        });
      }
      function u(e) {
        if (
          (_i_("4ab:491cfe66"),
          (this.el = e.el),
          (this.$el = n(this.el)),
          !this.$el.is(":visible"))
        )
          return _r_();
        (this.model = e.model),
          (this.$outer = this.$el.closest(l)),
          (this.$fieldset = this.$el.find(_)),
          this.addElementClasses(),
          this.getElementsToHide(),
          this.setShowPosition(),
          (this.isSticky = !1),
          (this.expVariant = this.model.getFlag("sb_is_sticky")),
          (this.expHash = "BPHAUaQJbAYRKZZEDRHe"),
          (this.throttledSetPosition = c(this.setShowPosition, 150, this)),
          (this.throttledScrollHandler = c(this.scrollHandler, 50, this)),
          d.on("resize orientationchange", this.throttledSetPosition),
          d.on("scroll", this.throttledScrollHandler),
          this.model.on("change", this.onModelChange.bind(this)),
          _r_();
      }
      (u.prototype.addElementClasses = function () {
        _i_("4ab:ff407356");
        var e = this.model.getFlag("sb_is_sticky"),
          t = [];
        e && t.push(r),
          2 === e && t.push(o),
          t.length && this.$outer.addClass(t.join(" ")),
          _r_();
      }),
        (u.prototype.getElementsToHide = function () {
          _i_("4ab:195f7c8a");
          var e = this.$el.siblings(":visible"),
            t = this.$fieldset.siblings(":visible");
          (this.$elementsToHide = n().add(e).add(t)), _r_();
        }),
        (u.prototype.setShowPosition = function () {
          _i_("4ab:2351df84");
          var e = this.$fieldset.offset();
          (this.showScrollPosition = Math.ceil(e.top) + -8), _r_();
        }),
        (u.prototype.scrollHandler = function () {
          if ((_i_("4ab:b0bfd7df"), d.scrollTop() > this.showScrollPosition)) {
            if ((a.stage(this.expHash, 1), 0 === this.expVariant))
              return (
                d.off("resize orientationchange", this.throttledSetPosition),
                d.off("scroll", this.throttledScrollHandler),
                _r_()
              );
            this.stick();
          } else this.unstick();
          _r_();
        }),
        (u.prototype.onModelChange = function () {
          _i_("4ab:601ab990"), a.customGoal(this.expHash, 1), _r_();
        }),
        (u.prototype.stick = function () {
          if ((_i_("4ab:0107b82e"), this.isSticky)) return _r_();
          this.$outer.addClass(s),
            this.$elementsToHide.hide(),
            h.trigger("click"),
            (this.isSticky = !0),
            _r_();
        }),
        (u.prototype.unstick = function () {
          if ((_i_("4ab:092ceb3f"), !this.isSticky)) return _r_();
          this.$outer.removeClass(s),
            this.$elementsToHide.show(),
            (this.isSticky = !1),
            _r_();
        }),
        (i.exports = u),
        _r_();
    }
  ),
  B.define("component/search/group/children-ages-tooltip", function (e, t, i) {
    "use strict";
    _i_("4ab:1180b90f");
    var n = e("jquery"),
      a = e("jstmpl"),
      s = e("component"),
      r = e("events");
    (i.exports = s.extend({
      init: function () {
        _i_("4ab:1bcc6f96"),
          (this.dropdown = !1),
          (this.$form = this.$el.closest("form")),
          (this.isPopupAlreadyShown = !1),
          (this.agesSelector = '[name="age"]'),
          this.addEventListeners(),
          _r_();
      },
      addEventListeners: function () {
        _i_("4ab:78a92d5b"),
          this.$el.change(this.showTooltip.bind(this)),
          this.$form.delegate(
            this.agesSelector,
            "click",
            this.hideTooltip.bind(this)
          ),
          B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip.bind(this)),
          void 0 !== B.hotel.Events &&
            (r.on(
              B.hotel.Events.RT.LIGHTBOX_CLOSE,
              this.hideTooltip.bind(this)
            ),
            r.on(B.hotel.Events.RT.LIGHTBOX_OPEN, this.hideTooltip.bind(this))),
          _r_();
      },
      showTooltip: function () {
        if (
          (_i_("4ab:10f5947b"),
          0 < parseInt(this.$el.val()) && !this.isPopupAlreadyShown)
        )
          var t = setTimeout(
            function () {
              _i_("4ab:34edfb53");
              var e = this.$form.find(this.agesSelector).eq(0);
              if (0 === e.length) return _r_();
              (this.dropdown = n.fly.dropdown
                .extend({
                  defaults: {
                    position: "bottom left",
                    content: function () {
                      return (
                        _i_("4ab:bda46a69"),
                        _r_(a("searchbox_children_ages_tooltip").render({}))
                      );
                    },
                    extraClass: "searchbox_children_ages_tooltip",
                  },
                })
                .create(e[0])),
                this.dropdown.show(),
                (this.isPopupAlreadyShown = !0),
                clearTimeout(t),
                _r_();
            }.bind(this),
            0
          );
        _r_();
      },
      hideTooltip: function () {
        _i_("4ab:f7ccaced"),
          this.dropdown && (this.dropdown.hide(), this.dropdown.destroy()),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("component/search/group/add-children-tooltip", function (e, t, i) {
    "use strict";
    _i_("4ab:58105ed7");
    var n = e("jquery"),
      a = B.env.rtl ? "left" : "right",
      s = "searchbox_children_tooltip",
      r = null,
      o =
        null ===
        B.browserStorageHandler.getSessionValue("gs_sb_add_children_tooltip"),
      _ = e("component");
    (i.exports = _.extend({
      init: function () {
        _i_("4ab:b89a9bb1"),
          o &&
            this.$el.data("add-children-tooltip") &&
            (this.showTooltip(),
            B.browserStorageHandler.addSessionValue(
              "gs_sb_add_children_tooltip",
              1
            ),
            (o = !1),
            B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip),
            n(".sb-destination__input").on("focus", this.hideTooltip)),
          _r_();
      },
      showTooltip: function () {
        _i_("4ab:e0be224a");
        var e = this.$el;
        r && r.hide(),
          (r = n.fly.dropdown
            .extend({
              defaults: {
                position: a,
                content: function () {
                  return (
                    _i_("4ab:bd350a17"), _r_(e.data("add-children-tooltip"))
                  );
                },
                extraClass: s,
              },
              actions: {
                click: function (e) {
                  _i_("4ab:fe76b345"),
                    n(e.target).is("select") && this.hide(),
                    _r_();
                },
              },
              _autohide: function () {},
              init: function () {
                _i_("4ab:6e9a028f"),
                  this.bind(this.events.show, function () {
                    _i_("4ab:7720bd99"),
                      n("." + s).delegate(
                        ".fly-dropdown-close",
                        "click",
                        function (e) {
                          _i_("4ab:edc671d6"), r.hide(), _r_();
                        }
                      ),
                      _r_();
                  }),
                  _r_();
              },
            })
            .create(e)).show(),
          _r_();
      },
      hideTooltip: function () {
        _i_("4ab:ed78e032"), r && r.hide(), _r_();
      },
    })),
      _r_();
  }),
  B.define(
    "component/search/group/occupancy-pricing-tooltip",
    function (e, t, i) {
      "use strict";
      _i_("4ab:42203ac0");
      var n = e("jquery"),
        a = B.env.rtl ? "left" : "right",
        s = "sb-searchbox__obp-tooltip",
        r = null,
        o =
          null === B.browserStorageHandler.getSessionValue("sr_sb_obp_tooltip"),
        _ = e("component");
      (i.exports = _.extend({
        init: function () {
          _i_("4ab:ad805250"),
            o &&
              this.$el.data("occupancy-pricing-tooltip") &&
              (this.showTooltip(),
              B.browserStorageHandler.addSessionValue("sr_sb_obp_tooltip", 1),
              (o = !1),
              B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip),
              n(".sb-destination__input").on("focus", this.hideTooltip)),
            _r_();
        },
        showTooltip: function () {
          _i_("4ab:fecbebd4");
          var e = this.$el;
          r && r.hide(),
            (r = n.fly.dropdown
              .extend({
                defaults: {
                  position: a,
                  content: function () {
                    return (
                      _i_("4ab:5038674f"),
                      _r_(e.data("occupancy-pricing-tooltip"))
                    );
                  },
                  extraClass: s,
                },
                actions: {
                  click: function (e) {
                    _i_("4ab:fe76b3451"),
                      n(e.target).is("select") && this.hide(),
                      _r_();
                  },
                },
                _autohide: function () {},
                init: function () {
                  _i_("4ab:6e9a028f1"),
                    this.bind(this.events.show, function () {
                      _i_("4ab:7720bd991"),
                        n("." + s).delegate(
                          ".fly-dropdown-close",
                          "click",
                          function (e) {
                            _i_("4ab:edc671d61"), r.hide(), _r_();
                          }
                        ),
                        _r_();
                    }),
                    _r_();
                },
              })
              .create(e)).show(),
            _r_();
        },
        hideTooltip: function () {
          _i_("4ab:ed78e0321"), r && r.hide(), _r_();
        },
      })),
        _r_();
    }
  ),
  booking.jstmpl(
    "guest_errors",
    (function () {
      _i_("4ab:6701dde3");
      var a = [
          "\n\t",
          "\n\t\t",
          "/private/iq_sbox_error_flights_group_size/name",
          "\n\n\t",
          "\n\n\n\n\n\n\n",
          "\n\n    ",
          "\n        ",
          "data-",
          '="',
          '"',
          "\n    ",
          " data-",
          '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ',
          '<div class="fe_banner fe_banner__accessible ',
          "fe_banner__scale_small ",
          "fe_banner__w-icon ",
          "fe_banner__w-dismiss ",
          "fe_banner__",
          " ",
          "fe_banner__w-icon-",
          "fe_banner__bp fe_banner__inherit_font_size ",
          ' " ',
          'id="',
          '" ',
          'role="alert"',
          "> ",
          '<i class="fe_banner__icon ',
          '" aria-hidden="true"></i> ',
          '<img class="fe_banner__icon" src="',
          '"> ',
          '<span class="',
          "fe_banner__icon",
          " </span> ",
          '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ',
          '<h3 class="fe_banner__title"> ',
          " </h3> ",
          '<div class="fe_banner__message"> ',
          " </div> ",
          '</div> <div class="fe_banner__button"> ',
          "</div> ",
          '<span class="fe_banner__dismiss js-close" role="button" tabindex="1" aria-label="',
          "/private/a11y_cta_close_banner_new/name",
          '"><i class="bicon-btnclose"></i></span> ',
          "\n",
          "\n\n\n\n",
          "\n\n",
          "0",
          "red",
        ],
        s = [
          "fe_error_message",
          "fe_banner__data",
          "fe_banner__data_id",
          "fe_banner__data_value",
          "fe_banner__data_id_2",
          "fe_banner__data_value_2",
          "fe_banner__data_id_3",
          "fe_banner__data_value_3",
          "fe_banner__data_id_4",
          "fe_banner__data_value_4",
          "fe_banner__data_id_5",
          "fe_banner__data_value_5",
          "fe_banner__animate",
          "fe_banner__scale",
          "fe_banner__icon_class",
          "fe_banner__icon_img_url",
          "fe_banner__icon_svg",
          "fe_banner__close_button",
          "fe_banner__color_scheme",
          "fe_banner__color_scheme_classes",
          "fe_banner__icon_size",
          "b_action",
          "fe_banner__extra_classes",
          "fe_banner__id",
          "fe_banner__aria_alert",
          "fe_banner__icon_svg_class",
          "fe_banner__btn_include",
          "fe_banner__title_text",
          "fe_banner__message_text",
          "fe_banner__banners_count",
          "fe_error",
        ];
      return _r_(function (e) {
        _i_("4ab:30a6c702");
        var t,
          i = "",
          n = this.fn;
        return (
          (i += a[0]),
          (t = i),
          _i_("4ab:8967a3b1"),
          n.MJ(n.MB(s[30])) &&
            ((t += a[0]),
            n.MN(s[0], [a[1], n.ME(a[2], n.MB, n.MN, null), a[0]].join("")),
            (t += a[3]),
            e.unshift({
              fe_banner__close_button: a[46],
              fe_banner__color_scheme: a[47],
              fe_banner__message_text: n.MB(s[0]),
            }),
            (t = (function (e) {
              if (
                (_i_("4ab:cd13a61d"), (e += ["", a[4]].join("")), n.MD(s[28]))
              ) {
                (e += a[5]),
                  n.MD(s[2]) &&
                    ((e += a[6]),
                    n.MN(
                      s[1],
                      [a[7], n.MB(s[2]), a[8], n.MB(s[3]), a[9]].join("")
                    ),
                    (e += a[10])),
                  (e += a[5]),
                  n.MD(s[4]) &&
                    ((e += a[6]),
                    n.MN(
                      s[1],
                      [
                        n.MB(s[1]),
                        a[11],
                        n.MB(s[4]),
                        a[8],
                        n.MB(s[5]),
                        a[9],
                      ].join("")
                    ),
                    (e += a[10])),
                  (e += a[5]),
                  n.MD(s[6]) &&
                    ((e += a[6]),
                    n.MN(
                      s[1],
                      [
                        n.MB(s[1]),
                        a[11],
                        n.MB(s[6]),
                        a[8],
                        n.MB(s[7]),
                        a[9],
                      ].join("")
                    ),
                    (e += a[10])),
                  (e += a[5]),
                  n.MD(s[8]) &&
                    ((e += a[6]),
                    n.MN(
                      s[1],
                      [
                        n.MB(s[1]),
                        a[11],
                        n.MB(s[8]),
                        a[8],
                        n.MB(s[9]),
                        a[9],
                      ].join("")
                    ),
                    (e += a[10])),
                  (e += a[5]),
                  n.MD(s[10]) &&
                    ((e += a[6]),
                    n.MN(
                      s[1],
                      [
                        n.MB(s[1]),
                        a[11],
                        n.MB(s[10]),
                        a[8],
                        n.MB(s[11]),
                        a[9],
                      ].join("")
                    ),
                    (e += a[10])),
                  (e += a[5]),
                  n.MD(s[12]) && (e += a[12]),
                  (e += a[13]);
                var t = n.MB(s[13]);
                n.MJ(t + "" == "small") && (e += a[14]),
                  (n.MJ(n.MB(s[14])) ||
                    n.MJ(n.MB(s[15])) ||
                    n.MJ(n.MB(s[16]))) &&
                    (e += a[15]),
                  n.MD(s[17]) && (e += a[16]),
                  n.MJ(n.MB(s[18])) &&
                    (e += [
                      a[17],
                      n.F.entities(n.MC(s[18])),
                      n.F.entities(n.MC(s[19])),
                      a[18],
                    ].join("")),
                  n.MJ(n.MB(s[14])) &&
                    n.MJ(n.MB(s[20])) &&
                    (e += [a[19], n.F.entities(n.MC(s[20])), a[18]].join("")),
                  (n.MJ(n.MC(s[21]) + "" == "book") ||
                    n.MJ(n.MC(s[21]) + "" == "tpi_book")) &&
                    (e += a[20]),
                  (e += [n.F.entities(n.MC(s[22])), a[21]].join("")),
                  n.MD(s[23]) &&
                    (e += [a[22], n.F.entities(n.MC(s[23])), a[23]].join("")),
                  n.MD(s[1]) && (e += [n.MC(s[1]), a[18]].join("")),
                  n.MD(s[24]) && (e += a[24]),
                  (e += a[25]),
                  n.MD(s[14])
                    ? (e += [a[26], n.F.entities(n.MC(s[14])), a[27]].join(""))
                    : n.MD(s[15])
                    ? (e += [a[28], n.F.entities(n.MC(s[15])), a[29]].join(""))
                    : n.MD(s[16]) &&
                      ((e += a[30]),
                      n.MD(s[25])
                        ? (e += n.F.entities(n.MC(s[25])))
                        : (e += a[31]),
                      (e += [a[29], n.MC(s[16]), a[32]].join(""))),
                  n.MD(s[26]) && (e += a[33]),
                  n.MD(s[27]) && (e += [a[34], n.MC(s[27]), a[35]].join("")),
                  n.MD(s[28]) && (e += [a[36], n.MC(s[28]), a[37]].join("")),
                  n.MD(s[26]) && (e += [a[38], n.MC(s[26]), a[37]].join("")),
                  n.MD(s[26]) && (e += a[39]),
                  n.MD(s[17]) &&
                    (e += [a[40], n.ME(a[41], n.MB, n.MN, null), a[42]].join(
                      ""
                    )),
                  (e += a[39]),
                  n.MD(s[12]) && (e += a[39]),
                  (e += a[43]);
              }
              return (
                (e += a[44]),
                n.MN(s[18], void 0),
                (e += a[43]),
                n.MN(s[14], void 0),
                (e += a[43]),
                n.MN(s[15], void 0),
                (e += a[43]),
                n.MN(s[16], void 0),
                (e += a[43]),
                n.MN(s[20], void 0),
                (e += a[43]),
                n.MN(s[27], void 0),
                (e += a[43]),
                n.MN(s[28], void 0),
                (e += a[43]),
                n.MN(s[26], void 0),
                (e += a[43]),
                n.MN(s[17], void 0),
                (e += a[43]),
                n.MN(s[23], void 0),
                (e += a[43]),
                n.MN(s[22], void 0),
                (e += a[43]),
                n.MN(s[13], void 0),
                (e += a[45]),
                n.MN(s[2], void 0),
                (e += a[43]),
                n.MN(s[3], void 0),
                (e += a[43]),
                n.MN(s[4], void 0),
                (e += a[43]),
                n.MN(s[5], void 0),
                (e += a[43]),
                n.MN(s[6], void 0),
                (e += a[43]),
                n.MN(s[7], void 0),
                (e += a[43]),
                n.MN(s[8], void 0),
                (e += a[43]),
                n.MN(s[9], void 0),
                (e += a[43]),
                n.MN(s[10], void 0),
                (e += a[43]),
                n.MN(s[11], void 0),
                (e += a[45]),
                n.MN(s[19], void 0),
                (e += a[45]),
                n.MN(s[1], void 0),
                (e += a[43]),
                n.MN("fe_banner__banners_count", n.MI(n.MB(s[29])) + n.MI(1)),
                (e += a[45]),
                n.MJ(n.MC(s[21]) + "" == "book") &&
                n.MJ(
                  n.track_experiment_stage("HBaMEAbXDMUBdOYZbKZTSfXPRQYO", 2)
                )
                  ? (e += a[43])
                  : n.MJ(
                      n.track_experiment_stage(
                        "HBaMEAbXDMUBdOYZbKZTSfXPRQYO",
                        1
                      )
                    ) && (e += a[43]),
                (e += [a[45], "", a[43]].join("")),
                _r_(e)
              );
            })(t)),
            e.shift(),
            (t += a[43])),
          (t += a[43]),
          (i = _r_(t)),
          (i += a[43]),
          _r_(i)
        );
      });
    })()
  ),
  B.define("component/xp-index/guest-errors", function (e, t, i) {
    "use strict";
    _i_("4ab:ca7246de");
    var n = e("component"),
      a = e("jstmpl"),
      s = e("read-data-options"),
      r = e("search/searchbox/model");
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:0621c5a7"),
          (this.options = s(this.el, {
            modelId: { name: "sb-id", type: String, required: !0 },
          })),
          (this.model = r.getInstance(this.options.modelId)),
          this.model.use("group"),
          this.model.on("validation", this.modelValidation.bind(this)),
          (this.template = a("guest_errors")),
          _r_();
      },
      modelValidation: function (e) {
        if (
          (_i_("4ab:450c4ca4"),
          "group" !== e.group || "children-ages" === e.validationError)
        )
          return _r_();
        var t = s(this.el, {
          viewId: { name: "view-id", type: String, required: !0 },
        });
        e.valid
          ? this.$el.html("")
          : this.$el.html(
              this.template.render({
                fe_error: e.validationError,
                fe_new: !0,
                fe_view: t.viewId,
              })
            ),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("component/search/group/group-with-modal", function (e, t, i) {
    _i_("4ab:78024c2c");
    var n = e("component"),
      a = e("search/searchbox/model"),
      s = e("read-data-options"),
      r = e("jquery"),
      o = e("et");
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:fee68c1d"),
          (this.options = s(this.$el, {
            modelId: { name: "sb-id", type: String, required: !0 },
            groupShowCloseButton: {
              name: "sb-group-show-close-button",
              type: Boolean,
            },
          })),
          (this.$modal = this.$el.find("[data-group-modal]")),
          (this.$toggle = this.$el.find("[data-group-toggle]")),
          (this.model = a.getInstance(this.options.modelId)),
          this.model.use("group"),
          (this.$roomCount = this.$el.find("[data-room-count]")),
          (this.$guestCount = this.$el.find("[data-guest-count]")),
          (this.$adultsCount = this.$el.find("[data-adults-count]")),
          (this.$childrenCount = this.$el.find("[data-children-count]")),
          this.addModelListeners(),
          this.addEventListeners(),
          this.$el.find("#xp__guests__input").remove(),
          _r_();
      },
      addModelListeners: function () {
        _i_("4ab:3380d4e7"),
          this.model.on("change", this.modelChange.bind(this)),
          this.model.on("init", this.modelChange.bind(this)),
          this.model.on("validation", this.modelValidation.bind(this)),
          _r_();
      },
      addEventListeners: function () {
        _i_("4ab:7058a8dc"),
          this.$el.on(
            "focus",
            function (e) {
              _i_("4ab:66928a09"), this.toggleModal(!0), _r_();
            }.bind(this)
          ),
          this.$toggle.on(
            "mousedown",
            function (e) {
              _i_("4ab:4dec3563"), this.toggleModal(!this.modalOpen), _r_();
            }.bind(this)
          ),
          r(document).on(
            "mouseup",
            function (e) {
              _i_("4ab:034f0b0e"),
                r(e.target).closest(this.$el).length || this.toggleModal(),
                _r_();
            }.bind(this)
          ),
          this.$el.find("input").on(
            "focus",
            function (e) {
              if ((_i_("4ab:c52febb3"), this.modalOpen)) return _r_();
              this.toggleModal(!0), _r_();
            }.bind(this)
          ),
          this.options.groupShowCloseButton &&
            this.$el.find("button#doneBtn").on(
              "click",
              function (e) {
                if ((_i_("4ab:b84d1aa2"), !this.modalOpen)) return _r_();
                this.toggleModal(!1), _r_();
              }.bind(this)
            ),
          _r_();
      },
      modelValidation: function (e) {
        _i_("4ab:8410cdba"),
          e &&
            !e.valid &&
            "children-ages" === e.validationError &&
            this.toggleModal(!this.modalOpen),
          _r_();
      },
      toggleModal: function (e) {
        if (
          (_i_("4ab:78ae0a96"),
          this.$modal.css("display", e ? "block" : "none"),
          this.$toggle[e ? "attr" : "removeAttr"]("data-group-toggle-shown", 1),
          this.$toggle.attr("aria-expanded", !!e),
          (this.modalOpen = e),
          this.$modal[0] &&
            "xp__guests__inputs-container" === this.$modal[0].id &&
            e)
        ) {
          o.stage("INFddKNKNKPBDJJHMVGPLTLReASdVLT", 4);
          var t = this.model.group.get();
          t &&
            t.children_ages &&
            t.children_ages.length &&
            o.stage("INFddKNKNKPBDJJHMVGPLTLReASdVLT", 5);
        }
        _r_();
      },
      modelChange: function (e) {
        _i_("4ab:652a2f0c"), "group" == e.group && this.render(), _r_();
      },
      render: function (e) {
        _i_("4ab:04a42523");
        var t = +(e = this.model.group.get()).adults_count,
          i = e.children_ages.length,
          n = t + i,
          a = e.rooms_count;
        this.$roomCount.html(
          B.jstmpl.translations("iq_sbox_accommodation_num_rooms", a, {
            num_rooms: a,
          })
        ),
          this.$adultsCount.html(
            B.jstmpl.translations("sxp_index_sbox_horizontal_adults", t, {
              num_adults: t,
            })
          ),
          this.$guestCount.html(
            B.jstmpl.translations("iq_sbox_accommodation_num_guests", n, {
              num_guests: n,
            })
          ),
          this.$childrenCount.html(
            B.jstmpl.translations("sxp_lp_sbox_num_children", i, {
              num_children: i,
            })
          ),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("component/search/searchbox/searchbox-xp", function (e, t, i) {
    "use strict";
    _i_("4ab:56027bca");
    var n = e("component/search/searchbox/searchbox"),
      s = e("jquery");
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:cfcd6972"),
          n.prototype.init.apply(this, arguments),
          this.model.use("dates"),
          this.model.on("change-mode", this.onChangeMode.bind(this)),
          this.addDestinationLogic(),
          this.addCalendarsLogic(),
          _r_();
      },
      addDestinationLogic: function () {
        _i_("4ab:b6a1c971");
        var e = this.$el.find("[data-destination-input]");
        e.find("#ss").on(
          "focus",
          function () {
            _i_("4ab:9c02e952"),
              e.find("#destination__error").removeClass("-visible"),
              e.find(".sb-searchbox__error").hide(),
              _r_();
          }.bind(this)
        ),
          _r_();
      },
      addCalendarsLogic: function () {
        _i_("4ab:78283cfa");
        var i = s("body"),
          n = this.$el.find(".xp__dates"),
          a = this.$el.find("[data-dates-errors]");
        B.env.b_hijri_calendar_available &&
          i.addClass("c2-wrapper-s-has-hijri-calendar"),
          B.eventEmitter.on("CALENDAR:opened", function (e, t) {
            _i_("4ab:8c3bee35"),
              n.attr("data-calendar-shown", 1),
              a.html(""),
              i.addClass("calendar-open"),
              _r_();
          }),
          B.eventEmitter.on("CALENDAR:closed", function (e, t) {
            _i_("4ab:eab814c1"),
              n.removeAttr("data-calendar-shown"),
              i.removeClass("calendar-open"),
              _r_();
          }),
          _r_();
      },
      onChangeMode: function (e) {
        _i_("4ab:83bb50be"),
          "accommodation" == e &&
            (this.model.setFormAction(B.env.fe_sb_accommodation_search_url),
            this.model.destination &&
              this.model.destination.configure({ validate: !1 }),
            this.model.emit("change", {})),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("component/search/dates/prompt", function (e, t, i) {
    "use strict";
    _i_("4ab:94d72b52");
    var n = "sb-dates-prompt-dismissed",
      a = "mdot" === B.env.b_site_type,
      s = e("component"),
      r = e("click-out"),
      o = !a && "searchresults" === B.env.b_action && e("searchresults/events");
    (i.exports = s.extend({
      init: function () {
        if (
          (_i_("4ab:66b4e1f1"),
          (this.boundHide = this.hide.bind(this)),
          (this.boundCleanUp = this.cleanUp.bind(this)),
          this.$el
            .find(".sb-dates-prompt__close")
            .on("click", this.dismiss.bind(this)),
          this.isDismissed())
        )
          return _r_();
        o && this.isLandingScrollStarted()
          ? o.once(o.UI_LANDING_SCROLL_COMPLETED, this.show.bind(this))
          : this.show(),
          _r_();
      },
      show: function () {
        if ((_i_("4ab:eaede618"), this.hiding)) return _r_();
        this.$el.removeClass("g-hidden").addClass("fadein"),
          (this.monitorId = r.addMonitor(this.el, this.boundHide)),
          _r_();
      },
      hide: function () {
        _i_("4ab:22797725"),
          (this.hiding = !0),
          this.$el.removeClass("fadein").addClass("fadeout"),
          window.setTimeout(this.boundCleanUp, 200),
          _r_();
      },
      dismiss: function () {
        _i_("4ab:0745977a"),
          (function () {
            _i_("4ab:45a788dc"),
              a
                ? B.storage({ key: n, value: !0, location: "sessionstorage" })
                : B.browserStorageHandler.addSessionValue(n, !0);
            _r_();
          })(),
          this.hide(),
          _r_();
      },
      cleanUp: function () {
        _i_("4ab:3ecc2689"),
          this.monitorId && r.removeMonitor(this.monitorId),
          this.$el.addClass("g-hidden").removeClass("fadeout"),
          (this.hiding = !1),
          _r_();
      },
      isDismissed: function () {
        _i_("4ab:98bc85c0");
        var e = a
          ? B.storage({ key: n, location: "sessionstorage" })
          : "true" === B.browserStorageHandler.getSessionValue(n);
        return _r_(e);
      },
      isLandingScrollStarted: function () {
        return (
          _i_("4ab:f6bb9fa1"),
          _r_(
            (B.sr && B.sr.landingScrollStarted) ||
              B.env.fe_landing_scroll_started
          )
        );
      },
    })),
      _r_();
  }),
  B.define("component/search/dates/date-field-select", function (e, t, i) {
    "use strict";
    _i_("4ab:cbb9601a");
    var n = e("component"),
      a = e("read-data-options"),
      s = e("search/searchbox/model"),
      b = e("formatting/date"),
      r = e("ga-tracker"),
      o = e("jstmpl"),
      g = "checkin",
      _ = "[data-display]",
      l = "[data-controls]",
      d = "[data-field]",
      h = "[data-icon-day]",
      c = ".js-date-field__part",
      u = ".js-date-field__select",
      f = ".js-date-field__value",
      p = '.js-date-field__part[data-type="month-year"]',
      m = '.js-date-field__part[data-type="date"]',
      M = ".js-date-field__year",
      v = ".js-date-field__month",
      y = "[data-calendar-extended-date]",
      C = "-empty",
      k = "-editing",
      D = "-editing-select",
      x = "sb-date-field__select_disabled",
      w = "sb-date-field__select_focused",
      E = "sb-date-field__value_empty";
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:5d9cd33f"),
          (this.options = a(this.el, {
            forceInitRender: {
              name: "force-init-render",
              type: Boolean,
              defaultValue: !1,
            },
            modelId: { name: "sb-id", type: String, required: !0 },
            modelMode: { name: "mode", type: String, defaultValue: "single" },
            validators: { name: "validators", type: String, defaultValue: "" },
          }));
        var e = this.options.validators.split(",");
        (this.model = s.getInstance(this.options.modelId)),
          this.model.use("dates"),
          this.model.on("change", this.handleModelChange.bind(this)),
          this.model.dates.configure({
            noValidation: !0,
            allowMaxLos: !0,
            notEmpty: 0 <= e.indexOf("not-empty") || void 0,
          }),
          (this.$display = this.$el.find(_)),
          (this.$iconDay = this.$el.find(h)),
          (this.$controls = this.$el.find(l)),
          (this.$field = this.$el.find(d)),
          (this.$part = this.$el.find(c)),
          (this.$monthYear = this.$el.find(p)),
          (this.$monthYearSelect = this.$monthYear.find(u)),
          (this.$date = this.$el.find(m)),
          (this.$dateSelect = this.$date.find(u)),
          (this.$select = this.$el.find(u)),
          (this.$inputYear = this.$el.find(M)),
          (this.$inputMonth = this.$el.find(v)),
          (this.$extendDate = this.$el.find(y)),
          this.$part.on("focus", u, this.handleSelectFocus.bind(this)),
          this.$part.on("blur", u, this.handleSelectBlur.bind(this)),
          this.$monthYearSelect.on(
            "change",
            this.handleMonthYearChange.bind(this)
          ),
          this.$dateSelect.on("change", this.handleDateChange.bind(this)),
          this.$select.one("focus", this.trackSelectFocus.bind(this)),
          this.initModel.call(this),
          _r_();
      },
      initModel: function () {
        _i_("4ab:2269d6de");
        var e = this.$inputYear.val(),
          t = this.$inputMonth.val(),
          i = this.$dateSelect.attr("data-selected"),
          n = e && t && i;
        this.model.dates.initDate(
          this.options.modelMode,
          n && { year: +e, month: +t - 1, day: +i }
        ),
          this.renderFields.call(this),
          "index" === B.env.b_action &&
            (n && B.et.customGoal("HZUaQJdDBKFfHET", 3),
            this.model.on("change", function (e) {
              _i_("4ab:62a2a6d6"),
                e &&
                  "dates" === e.group &&
                  B.et.customGoal("HZUaQJdDBKFfHET", 2),
                _r_();
            })),
          _r_();
      },
      toggleMode: function (e) {
        _i_("4ab:6724bf1f"),
          this.$field.toggleClass(k, e),
          this.$field.toggleClass(D, e),
          _r_();
      },
      trackSelectFocus: function () {
        _i_("4ab:7630c5c41"),
          r.trackEvent(
            r.SearchBoxTracker,
            "Keyboard Focus",
            this.options.modelMode + " field"
          ),
          _r_();
      },
      handleModelChange: function () {
        _i_("4ab:3aeed71d"), this.renderFields.call(this), _r_();
      },
      handleSelectFocus: function (e) {
        _i_("4ab:b8c5b87e"),
          clearTimeout(this.inputBlurTimer),
          $(e.delegateTarget).addClass(w),
          this.toggleMode(!0),
          setTimeout(
            function () {
              _i_("4ab:98e6ffec1"), this.model.dates.startEditing(), _r_();
            }.bind(this)
          ),
          _r_();
      },
      handleSelectBlur: function (e) {
        _i_("4ab:e615df80"),
          $(e.delegateTarget).removeClass(w),
          this.toggleMode(!1),
          (this.inputBlurTimer = setTimeout(
            function () {
              _i_("4ab:061f7dd9"), this.applyChange(), _r_();
            }.bind(this)
          )),
          _r_();
      },
      handleMonthYearChange: function (e) {
        _i_("4ab:49cdb6e1");
        var t = this.options.modelMode,
          i = e.target.value.split("-");
        this.model.dates.setEditingFragment(t, "month", +i[0]),
          this.model.dates.setEditingFragment(t, "year", +i[1]),
          this.model.dates.setEditingFragment(t, "day", null),
          _r_();
      },
      handleDateChange: function (e) {
        _i_("4ab:dfa82ff4");
        var t = e.target,
          i = this.options.modelMode;
        this.renderDateValue.call(this),
          this.model.dates.setEditingFragment(i, "day", +t.value),
          this.applyChange.call(this),
          _r_();
      },
      applyChange: function () {
        if (
          (_i_("4ab:a241b52f"),
          !this.model.dates.get()["editing_" + this.options.modelMode])
        )
          return _r_();
        this.model.dates.applyEditing(this.options.modelMode), _r_();
      },
      getOptionHtml: function (e, t, i) {
        _i_("4ab:b45a607d");
        var n,
          a = [];
        if (i)
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var r = i[s];
              if (!r) break;
              (n = s), "boolean" != typeof r && (n += "=" + r), a.push(n);
            }
        return _r_(
          '<option value="' + e + '" ' + a.join(" ") + ">" + t + "</option>"
        );
      },
      renderMonthYearField: function () {
        _i_("4ab:847c9ed5");
        var e = this.options.modelMode,
          t = this.model.dates.get(),
          i = t[e],
          n = t["editing_" + e] || i,
          a = this.$monthYearSelect,
          s = e === g ? t.firstValidDay : t.firstValidCheckoutDay,
          r = t.lastValidDay,
          o = s.month,
          _ = r.month,
          l = s.year,
          d = r.year,
          h = this.getOptionHtml("", "", { disabled: !0, selected: !n });
        (h += n
          ? this.getMonthsHtml(o, l, _, d, n.month, n.year)
          : this.getMonthsHtml(o, l, _, d)),
          a.html(h),
          this.renderMonthYearValue.call(this),
          _r_();
      },
      getMonthsHtml: function (e, t, i, n, a, s) {
        _i_("4ab:7fa756e2");
        for (var r = e, o = t, _ = ""; o < n || (o === n && r <= i); ) {
          var l = r + 1,
            d = b.format({ year: o, month: l, day: 0 }, "month_with_year"),
            h = [r, o].join("-"),
            c = r === a && o === s;
          (_ += this.getOptionHtml(h, d, { selected: c })),
            l < 12 ? (r += 1) : ((r = 0), (o += 1));
        }
        return _r_(_);
      },
      renderDateField: function () {
        _i_("4ab:a94cba79");
        var e = this.options.modelMode,
          t = this.model.dates.get(),
          i = t[e],
          n = t["editing_" + e] || i,
          a = n && n.month,
          s = n && n.year,
          r = "number" != typeof a,
          o = !r && new Date(s, a, 1),
          _ = e === g ? t.firstValidDay : t.firstValidCheckoutDay,
          l = t.lastValidDay,
          d = e === g ? l.day - 1 : l.day,
          h = this.$dateSelect;
        if (
          (h.html(
            this.getOptionHtml("", "", { disabled: !0, selected: !n || !n.day })
          ),
          h.prop("disabled", r),
          this.$date.toggleClass(x, r),
          o)
        )
          for (; o.getMonth() === a; ) {
            var c = o.getDate(),
              u = a !== _.month || s !== _.year || c >= _.day,
              f = a !== l.month || s !== l.year || c <= d;
            if (u && f) {
              var p = b.format(
                { year: s, month: a, day: c },
                "{day_of_month}, {weekday}"
              );
              h.append(
                this.getOptionHtml(c, p, { selected: n && n.day === c })
              );
            }
            o.setDate(c + 1);
          }
        this.renderDateValue.call(this), _r_();
      },
      renderValue: function (e, t) {
        _i_("4ab:1b9b0a94");
        var i = t.find(f),
          n = e.options[e.selectedIndex],
          a = i.data("placeholder") || "",
          s = n && !n.disabled;
        i.text(s ? n.innerHTML : a), i.toggleClass(E, !s), _r_();
      },
      renderMonthYearValue: function () {
        _i_("4ab:f4ece69f"),
          this.renderValue(this.$monthYearSelect[0], this.$monthYear),
          _r_();
      },
      renderDateValue: function () {
        _i_("4ab:b15ca074"),
          this.renderValue(this.$dateSelect[0], this.$date),
          _r_();
      },
      renderFields: function () {
        _i_("4ab:c567a632");
        var e = this.options.modelMode,
          t = this.model.dates.get(),
          i = t[e],
          n = t["editing_" + e],
          a = n || i,
          s = n && !n.complete;
        if (
          (this.renderMonthYearField.call(this),
          this.renderDateField.call(this),
          a && "number" == typeof a.month && this.$inputMonth.val(a.month + 1),
          a && "number" == typeof a.year && this.$inputYear.val(a.year),
          a && "number" == typeof a.day && this.$dateSelect.val(a.day),
          !s && i)
        ) {
          var r = this.$display.data("date-format") || "date_with_weekday";
          this.$field.removeClass(C),
            this.$display.html(b.format(i, r)),
            this.$iconDay.html(b.format(i, "{day_of_month}"));
        }
        s ||
          i ||
          (this.$field.addClass(C),
          this.$display.html(this.$display.attr("data-placeholder")),
          this.$iconDay.html(this.$iconDay.attr("data-placeholder"))),
          null !== t.extendedDate && t.extendedDate
            ? this.$extendDate.html(
                o.translations("sxp_sbox_property_count_flexible", null, {
                  num: t.extendedDate,
                })
              )
            : this.$extendDate.html(""),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("search/calendar/utils", function (e, t, i) {
    _i_("4ab:96bc2647"),
      (i.exports = {
        getDaysDifference: function (e, t) {
          _i_("4ab:4bfb42bf");
          var i = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
            n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
          return _r_(Math.floor((n - i) / 864e5));
        },
      }),
      _r_();
  }),
  B.define("component/search/dates/single-calendar", function (e, t, i) {
    "use strict";
    _i_("4ab:f92cfa39");
    var n = e("component"),
      a = e("formatting/date"),
      s = e("search/searchbox/model"),
      r = e("search/modules/search-date").SearchDate,
      o = e("search/searchbox/ga-events-tracker"),
      l = e("search/calendar/utils"),
      _ = e("jstmpl"),
      d = e("events"),
      h = e("jquery");
    function c(e) {
      return _i_("4ab:a4f6ff92"), _r_(("0" + e).slice(-2));
    }
    (i.exports = n.extend({
      init: function () {
        _i_("4ab:26d7016f"),
          (this.$calendar = this.$el.find(".bui-calendar")),
          (this.$form = this.$el.parents("form")),
          (this.calendarMounted = !1),
          (this.calendarOpen = !1),
          (this.isCalendarNotOpenYet = !0),
          (this.checkinPlaceholder =
            this.$form
              .find('[data-mode="checkin"] [data-display]')
              .data("placeholder") || _.translations("checkin_date")),
          (this.$checkoutPlaceholder = this.$form.find(
            '[data-mode="checkout"] [data-display]'
          )),
          (this.checkoutPlaceholder =
            this.$checkoutPlaceholder.data("placeholder") ||
            _.translations("checkout_date")),
          (this.$inputDateTimeFields = this.$form.find(".xp__date-time")),
          (this.dateFormat =
            this.$form.find(".sb-date-field__display").data("date-format") ||
            "date_with_weekday"),
          (this.model = s.getInstance(this.$el.data("sb-id"))),
          this.model.use("dates"),
          (this.renderLoS = !!this.$el.data("render-los")),
          (this.autoOpenOnLoad = !!this.$el.data("auto-open-on-load")),
          (this.keepCalOpen = !!this.$el.data("keep-cal-open")),
          (this.keepCalOpenOnDateSelect = !!this.$el.data(
            "keep-cal-open-on-date-select"
          )),
          (this.separateTriggers = !!this.$el.data("separate-triggers")),
          (this.keepInputFieldSelected = !!this.$el.data(
            "keep-input-field-selected"
          )),
          this.separateTriggers &&
            ((this.closeOnDateSelect = !0),
            this.$el.attr("data-choose-mode", "start")),
          this.initCalendar(),
          this.bindEvents(),
          this.autoOpenOnLoad && this.showCalendar(),
          _r_();
      },
      bindEvents: function () {
        _i_("4ab:aebbbe74"),
          this.$inputDateTimeFields.on(
            "click",
            function (e) {
              if ((_i_("4ab:b26a124c"), h(e.target).is("select"))) return _r_();
              if ((this.mountCalendar(), this.separateTriggers)) {
                var t = h(e.delegateTarget),
                  i = t.is(".--checkin-field") ? "start" : "end",
                  n = this.$el.attr("data-choose-mode");
                this.calendarInstance.setState({ chooseMode: i }),
                  this.$el.attr("data-choose-mode", i),
                  this.calendarOpen && n === i
                    ? this.hideCalendar()
                    : (this.showCalendar(),
                      this.keepInputFieldSelected &&
                        (this.$inputDateTimeFields.removeClass("focus"),
                        t.addClass("focus")));
              } else
                this.calendarOpen ? this.hideCalendar() : this.showCalendar();
              _r_();
            }.bind(this)
          ),
          h("body").on(
            "click",
            function (e) {
              _i_("4ab:93de4cfe");
              var t = h(e.target),
                i = t.parents(),
                n = i.filter(".xp__dates").length,
                a = i.filter(".bui-calendar__wrapper").length;
              this.keepCalOpen ||
                t.hasClass("xp__dates") ||
                n ||
                a ||
                this.hideCalendar(),
                _r_();
            }.bind(this)
          ),
          this.$form
            .find(".xp__date-time")
            .one("mouseenter touchstart", this.mountCalendar.bind(this)),
          this.separateTriggers &&
            this.model.on(
              "init",
              function () {
                _i_("4ab:29a7aa8c"),
                  this.onModelChange({ checkin: !0, checkout: !0 }),
                  _r_();
              }.bind(this)
            ),
          this.model.on("change", this.onModelChange.bind(this)),
          this.onModelChange({ checkin: !0, checkout: !0 }),
          _r_();
      },
      getMinMaxDates: function () {
        _i_("4ab:cc26c49d");
        var e = new Date(),
          t = new Date();
        return (
          B.env.b_search_max_months
            ? (t.setMonth(t.getMonth() + B.env.b_search_max_months),
              t.setDate(0))
            : (t = new Date(t.getFullYear() + 1, t.getMonth() + 1, 0)),
          _r_({
            minDate: e,
            minDateISO:
              e.getFullYear() +
              "-" +
              c(e.getMonth() + 1) +
              "-" +
              c(e.getDate()),
            maxDate: t,
            maxDateISO:
              t.getFullYear() +
              "-" +
              c(t.getMonth() + 1) +
              "-" +
              c(t.getDate()),
          })
        );
      },
      initCalendar: function () {
        _i_("4ab:2457f405");
        var e = {
          monthsToShow: 2,
          renderOnHover: 1,
          allowSameDateSelection: 0,
          dayNames: {
            monday: "Mon",
            tuesday: "Tue",
            wednesday: "Wed",
            thursday: "Thu",
            friday: "Fri",
            saturday: "Sat",
            sunday: "Sun",
          },
          monthNames: {
            january: "January",
            february: "February",
            march: "March",
            april: "April",
            may: "May",
            june: "June",
            july: "July",
            august: "August",
            september: "September",
            october: "October",
            november: "November",
            december: "December",
          },
          renderSelected: function (e) {
            if ((_i_("4ab:9cb2ba8c"), !this.renderLoS)) return _r_("");
            var t = this.renderSelectedCustom(e);
            if (t) return _r_(t);
            var i = e.startDate,
              n = e.endDate;
            if (i && n && i < n) {
              var a = this.getFormattedDate(i),
                s = this.getFormattedDate(n),
                r = l.getDaysDifference(i, n),
                o = B.jstmpl.translations(
                  "ss_sxp_index_sbox_calendar_num_night_stay",
                  r,
                  { num_nights: r }
                ),
                _ = r / 7;
              if (
                (7 <= r &&
                  !(r % 7) &&
                  (o = B.jstmpl.translations(
                    "bh_ss_sxp_index_sbox_calendar_num_week_stay",
                    _,
                    { num_weeks: _ }
                  )),
                B.env.rtl)
              )
                return _r_("(" + o + ") " + a + " - " + s);
              return _r_(a + " - " + s + " " + o);
            }
            if (i) {
              a = this.getFormattedDate(i);
              return _r_(a + " - " + this.checkoutPlaceholder);
            }
            return _r_(
              this.checkinPlaceholder + " - " + this.checkoutPlaceholder
            );
          }.bind(this),
          onDateChange: function (e) {
            _i_("4ab:f931129e"),
              this.closeOnDateSelect ||
                (this.settingDatesFromUserInteraction = !0);
            var t = e.startDate,
              i = e.endDate;
            t &&
              ((t = r.create({
                year: t.getFullYear(),
                month: t.getMonth(),
                day: t.getDate(),
              })),
              this.model.dates.setDate("checkin", t),
              i ||
                this.separateTriggers ||
                this.$checkoutPlaceholder.text(this.checkoutPlaceholder)),
              i &&
                ((i = r.create({
                  year: i.getFullYear(),
                  month: i.getMonth(),
                  day: i.getDate(),
                })),
                this.model.dates.setDate("checkout", i)),
              t && i && !this.keepCalOpenOnDateSelect && this.hideCalendar(),
              e.startDate === e.clickedDate &&
                o.trackEvent(B.Search.TrackingEvents.CHECKIN_DATEPICKER),
              e.endDate === e.clickedDate &&
                o.trackEvent(B.Search.TrackingEvents.CHECKOUT_DATEPICKER),
              this.closeOnDateSelect && this.hideCalendar(),
              (this.settingDatesFromUserInteraction = !1),
              _r_();
          }.bind(this),
        };
        if (B.env.b_simple_weekdays && 7 === B.env.b_simple_weekdays.length) {
          var t = 0;
          for (var i in e.dayNames)
            e.dayNames[i] = B.env.b_simple_weekdays[t++];
        }
        if (B.env.b_short_months && 12 === B.env.b_short_months.length) {
          t = 0;
          for (var i in e.monthNames)
            e.monthNames[i] = B.env.b_short_months[t++];
        }
        B.env.sunday_first && h.extend(e, { firstWeekDay: 7 }),
          (this.minMaxDates = this.getMinMaxDates()),
          (e.minDate = this.minMaxDates.minDateISO),
          (e.maxDate = this.minMaxDates.maxDateISO),
          (this.calendarInstance = window.BUI.createInstance(
            "Calendar",
            this.$calendar[0],
            e
          )),
          _r_();
      },
      renderSelectedCustom: function () {},
      mountCalendar: function () {
        _i_("4ab:8e0cafba"),
          this.calendarMounted ||
            (this.calendarInstance.mount(), (this.calendarMounted = !0)),
          _r_();
      },
      onModelChange: function (e) {
        if ((_i_("4ab:d7c28836"), this.settingDatesFromUserInteraction))
          return _r_();
        if (e.checkin || e.checkout) {
          var t = this.model.dates.get().checkin,
            i = this.model.dates.get().checkout,
            n = { startDate: null, endDate: null };
          t && (n.startDate = new Date(t.year, t.month, t.day)),
            i && (n.endDate = new Date(i.year, i.month, i.day)),
            n.startDate && (n.baseMonthDate = n.startDate),
            (n.chooseMode = n.startDate && !n.endDate ? "end" : "start"),
            this.calendarInstance.setState(n),
            this.calendarInstance._updateDateClassNames &&
              (this.calendarInstance._updateDateClassNames(),
              this.calendarInstance._updateDisplayRender());
        }
        _r_();
      },
      showCalendar: function () {
        _i_("4ab:6760aa62"),
          this.$form.find("[data-dates-errors]").html(""),
          this.mountCalendar(),
          this.$calendar.show(),
          (this.calendarOpen = !0),
          this.isCalendarNotOpenYet && (this.isCalendarNotOpenYet = !1),
          d.trigger("SEARCHBOX_CALENDAR_OPENED", this.$el),
          _r_();
      },
      showStartCalendar: function () {
        _i_("4ab:cc8cd277"),
          this.$el.attr("data-choose-mode", "start"),
          this.showCalendar(),
          _r_();
      },
      showEndCalendar: function () {
        _i_("4ab:bc81115c"),
          this.$el.attr("data-choose-mode", "end"),
          this.showCalendar(),
          _r_();
      },
      hideCalendar: function () {
        _i_("4ab:75b20847"),
          this.$calendar.hide(),
          (this.calendarOpen = !1),
          this.keepInputFieldSelected &&
            this.$inputDateTimeFields.removeClass("focus"),
          _r_();
      },
      getFormattedDate: function (e) {
        return (
          _i_("4ab:a259ba5a"),
          _r_(
            a.format(
              { day: e.getDate(), month: e.getMonth(), year: e.getFullYear() },
              this.dateFormat
            )
          )
        );
      },
    })),
      _r_();
  }),
  B.define("search/dates/date-prices-service", function (e, t, i) {
    _i_("4ab:d913f4fb");
    var n,
      a = e("fragment"),
      s = e("promise"),
      r = e("search-config"),
      o = {
        propertyId: null,
        searchConfig: null,
        startDate: null,
        endDate: null,
        checkinAlt: null,
        los: 1,
      },
      h = {},
      _ = {},
      c = {};
    function u(e, t) {
      _i_("4ab:539b432a");
      var i,
        n,
        a = (function (e) {
          _i_("4ab:d58b2018");
          var t = String(e).match(/(\d{4})-(\d{2})-(\d{2})/);
          return _r_(
            t
              ? new Date(
                  parseInt(t[1], 10),
                  parseInt(t[2], 10) - 1,
                  parseInt(t[3], 10)
                )
              : null
          );
        })(e);
      if (a)
        for (var s = 1; s < t; s++)
          (i = new Date(a)).setDate(i.getDate() + s),
            (n = f(i)),
            _[n] || (_[n] = {}),
            (_[n][e] = t);
      _r_();
    }
    function f(e) {
      return (
        _i_("4ab:315515a1"),
        _r_(
          e
            ? [
                e.getFullYear(),
                ("0" + (e.getMonth() + 1)).slice(-2),
                ("0" + e.getDate()).slice(-2),
              ].join("-")
            : null
        )
      );
    }
    (i.exports = {
      init: function (e) {
        _i_("4ab:80c70299"), (n = e), _r_();
      },
      fetchPrices: function (e) {
        _i_("4ab:a0c81de1");
        var d = Object.assign({}, o, e);
        return _r_(
          new s(function (o, _) {
            if ((_i_("4ab:2fc13793"), !d.startDate))
              return _r_(_("You need to specify a `startDate` date"));
            d.searchConfig || (d.searchConfig = r.getRawValue()),
              d.propertyId || (d.propertyId = n);
            var l = f(d.checkinAlt);
            if (d.checkinAlt && void 0 !== c[l]) return _r_(o(c));
            if (
              !d.checkinAlt &&
              void 0 !== h[f(d.startDate)] &&
              void 0 !== h[f(d.endDate)]
            )
              return _r_(o(h));
            var e = {
              result_format: "price_histogram",
              hotel_id: d.propertyId,
              search_config: d.searchConfig,
              checkin: f(d.startDate),
              n_days:
                (function (e, t) {
                  _i_("4ab:2044c4c8");
                  var i = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
                    n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
                  return _r_(Math.floor((n - i) / 864e5));
                })(d.startDate, d.endDate) + 1,
              respect_min_los_restriction: 1,
              los: d.los,
            };
            d.checkinAlt && (e.checkin_alt = l),
              a
                .call("hotel.availability_calendar", e)
                .then(function (e) {
                  if ((_i_("4ab:0c0a8fb4"), !e || (e && void 0 === e.days)))
                    return _r_(_());
                  var t, i, n, a, s;
                  for (var r in e.days)
                    (t = e.days[r]),
                      (i = e.days[r].checkin),
                      d.checkinAlt
                        ? ((n = l),
                          (a = i),
                          (s = t.b_avg_price_pretty || null),
                          _i_("4ab:efb039bf"),
                          c[n] || (c[n] = {}),
                          (c[n][a] = s),
                          _r_())
                        : ((h[i] = t.b_avg_price_pretty || null),
                          1 < t.b_min_length_of_stay &&
                            u(i, t.b_min_length_of_stay));
                  o(d.checkinAlt ? c : h), _r_();
                })
                .catch(_),
              _r_();
          })
        );
      },
      pricesPerDay: h,
      pricesPerDayForSelectedCheckin: c,
      getMinLosForInterval: function (e, t) {
        _i_("4ab:b800dd0e");
        var i = f(e),
          n = "string" == typeof t ? t : f(t);
        return _r_(i && n && _[n] && _[n][i]);
      },
    }),
      _r_();
  }),
  B.define("searchbox/calendar-with-prices-core", function (e) {
    _i_("4ab:2f092a3a");
    var b,
      g,
      m = e("jstmpl"),
      M = e("search/dates/date-prices-service"),
      a = e("server-data"),
      v = m.translations("sr_calendar_checkout_only_tooltip_info"),
      y = new Date();
    function t(e, t) {
      return (
        _i_("4ab:e72f659e"),
        (this.service = M),
        (this.$calendarEl = e),
        (this.buiCalendar = t),
        _r_(this)
      );
    }
    function B(e) {
      return (
        _i_("4ab:315515a11"),
        _r_(
          e
            ? [
                e.getFullYear(),
                ("0" + (e.getMonth() + 1)).slice(-2),
                ("0" + e.getDate()).slice(-2),
              ].join("-")
            : null
        )
      );
    }
    return (
      y.setHours(0, 0, 0, 0),
      (t.prototype.initCalendarWithPrices = function (e) {
        _i_("4ab:e29ff034");
        var t = Object.assign({}, this.buiCalendar.props);
        this.buiCalendar.unmount(),
          (t.getDayMarkup = function (e) {
            _i_("4ab:7308e10e");
            var t = e.getDate(),
              i = !1,
              n = B(e),
              a = new Date(e);
            a.setDate(e.getDate() - 1);
            var s = B(a),
              r = B(g),
              o = M.pricesPerDay;
            g &&
              (o =
                M.pricesPerDayForSelectedCheckin &&
                M.pricesPerDayForSelectedCheckin[r]);
            var _,
              l = g && e < g,
              d = (o && o[n]) || "&mdash;",
              h = o && void 0 !== o[n] && null !== o[n],
              c = o && void 0 !== o[s] && null !== o[s],
              u = h || l ? "" : " calendar-day--unavailable",
              f = M.getMinLosForInterval(b, n);
            f &&
              (_ = m.translations(
                "sr_calendar_min_night_stay_tooltip_info",
                f,
                { num_nights: f }
              ));
            _ || !c || h || (_ = v);
            var p = _
              ? 'data-bui-component="Tooltip" data-tooltip-position="bottom" data-tooltip-text="' +
                m.fn.FILTERS.html(
                  '<span id="calendar-with-price-tooltip">' + _ + "</span>"
                ) +
                '"'
              : "";
            e < y && (i = !0);
            return _r_(
              '<span class="' +
                u +
                '" ' +
                p +
                '><span aria-hidden="true" class="calendar-day__number">' +
                t +
                '</span><span aria-hidden="true" class="calendar-day__price">' +
                (i || l ? "&nbsp;" : d) +
                "</span></span>"
            );
          }.bind(this)),
          (this.buiCalendar = window.BUI.createInstance(
            "Calendar",
            this.$calendarEl[0],
            t
          )),
          "function" == typeof e
            ? e(this.buiCalendar)
            : this.buiCalendar.mount(),
          this.hideLoading(),
          _r_();
      }),
      (t.prototype.bindMonthChangeHandlers = function () {
        _i_("4ab:fc176f8d"),
          this.$calendarEl.on(
            "click",
            ".bui-calendar__control--prev, .bui-calendar__control--next",
            function () {
              _i_("4ab:c5238e49"),
                setTimeout(
                  function () {
                    _i_("4ab:e78e9e27"), this.getPricesAndRender(), _r_();
                  }.bind(this),
                  1
                ),
                _r_();
            }.bind(this)
          ),
          _r_();
      }),
      (t.prototype.getPricesAndRender = function (e, t, i) {
        _i_("4ab:f2d7f1bd"),
          e || (e = this._getCalendarBaseDate()),
          t || (t = this._getCalendarEndDate());
        var n = { startDate: e, endDate: t, los: 1 };
        i && (n.checkinAlt = i),
          a.b_min_bookable_los && (n.los = a.b_min_bookable_los),
          this.showLoading(),
          M.fetchPrices(n)
            .then(
              function () {
                _i_("4ab:35dc3fb9"),
                  this.buiCalendar._handleMonthChange(),
                  window.BUI.initComponents(this.$calendarEl[0]),
                  this.hideLoading(),
                  _r_();
              }.bind(this)
            )
            .catch(
              function (e) {
                _i_("4ab:2e2f621b"), this.hideLoading(), _r_();
              }.bind(this)
            ),
          _r_();
      }),
      (t.prototype.showLoading = function () {
        _i_("4ab:401ed64e"),
          this.$calendarEl.find(".calendar-dates-prices-info-message").hide(),
          this.$calendarEl.find(".calendar-dates-prices-loader").show(),
          _r_();
      }),
      (t.prototype.hideLoading = function () {
        _i_("4ab:9cafc21b"),
          this.$calendarEl.find(".calendar-dates-prices-loader").hide(),
          this.$calendarEl.find(".calendar-dates-prices-info-message").show(),
          _r_();
      }),
      (t.prototype.isLoading = function () {
        return (
          _i_("4ab:b8601c81"),
          _r_(
            0 <
              this.$calendarEl.find(".calendar-dates-prices-loader:visible")
                .length
          )
        );
      }),
      (t.prototype.showInfoMessage = function (e) {
        _i_("4ab:688285db");
        var t = this.$calendarEl.find(".calendar-dates-prices-info-message");
        e && !this.defaultInfoMessage && (this.defaultInfoMessage = t.html());
        var i = e;
        if (
          (void 0 === e &&
            this.defaultInfoMessage &&
            (i = this.defaultInfoMessage),
          void 0 === i)
        )
          return _r_();
        t.html(i), _r_();
      }),
      (t.prototype._getCalendarBaseDate = function () {
        _i_("4ab:80ebfa41");
        try {
          var e = this.buiCalendar.state.baseMonthDate;
          if (1 === e.getDate()) return _r_(e);
          return _r_(new Date(new Date(e).setDate(1)));
        } catch (e) {
          return _r_(null);
        }
        _r_();
      }),
      (t.prototype._getCalendarEndDate = function () {
        _i_("4ab:74015c2d");
        var e = this._getCalendarBaseDate();
        if (1 < this.buiCalendar.props.monthsToShow) {
          var t = new Date(
            e.getFullYear(),
            e.getMonth() + this.buiCalendar.props.monthsToShow - 1,
            1
          );
          return _r_(new Date(t.getFullYear(), t.getMonth() + 1, 0));
        }
        return _r_(new Date(e.getFullYear(), e.getMonth() + 1, 0));
      }),
      (t.prototype.removeCalendarTooltip = function () {
        _i_("4ab:b6ec720f"),
          $("#calendar-with-price-tooltip").closest(".bui-tooltip").remove(),
          _r_();
      }),
      (t.prototype.setCheckinDate = function (e, t) {
        if ((_i_("4ab:27f6bc37"), !e)) return _r_();
        (b = e),
          t
            ? (g && B(b) === B(g)) ||
              ((g = b), this.getPricesAndRender(void 0, void 0, g))
            : g && (g = void 0),
          this.removeCalendarTooltip(),
          this.buiCalendar && this.buiCalendar._handleMonthChange(),
          window.BUI.initComponents(this.$calendarEl[0]),
          _r_();
      }),
      _r_(t)
    );
  }),
  B.define(
    "component/search/dates/single-calendar-with-prices",
    function (e, t, i) {
      "use strict";
      _i_("4ab:853e18d6");
      var a = e("server-data"),
        s = e("jstmpl"),
        r = e("formatting/date"),
        o = e("component/search/dates/single-calendar"),
        n = e("searchbox/calendar-with-prices-core"),
        _ = e("et"),
        l = "ODRdeOYJLBWHcfXSUHLQYfNWOBOFO";
      (i.exports = o.extend({
        init: function () {
          _i_("4ab:a219fbfa"),
            o.prototype.init.apply(this, arguments),
            (this.showMinLosWarning = this.$el.data("show-min-los-warning")),
            (this.showAvForSelectedCheckin = this.$el.data(
              "show-av-for-selected-checkin"
            )),
            (this.isCheckInChangedByUser = !1),
            (this.isCheckOutChangedByUser = !1),
            (this.calendarWithPrices = new n(
              this.$calendar,
              this.calendarInstance
            )),
            this.calendarWithPrices.service.init(a.b_hotel_id),
            this.calendarWithPrices.initCalendarWithPrices(
              function (e) {
                _i_("4ab:f45f77a2"),
                  (this.calendarInstance = e),
                  this.separateTriggers ||
                    this.onModelChange({ checkin: !0, checkout: !0 }),
                  this.mountCalendar(),
                  _r_();
              }.bind(this)
            ),
            this.calendarWithPrices.bindMonthChangeHandlers(),
            _r_();
        },
        showCalendar: function () {
          _i_("4ab:9b0d64df"),
            o.prototype.showCalendar.apply(this, arguments),
            this.calendarWithPrices.getPricesAndRender(),
            _r_();
        },
        hideCalendar: function () {
          _i_("4ab:75337a9a"),
            o.prototype.hideCalendar.apply(this, arguments),
            this.calendarWithPrices.removeCalendarTooltip(),
            _r_();
        },
        onModelChange: function (e) {
          _i_("4ab:4d46b12d"), o.prototype.onModelChange.apply(this, arguments);
          var t =
              this.calendarInstance &&
              this.calendarInstance.state &&
              this.calendarInstance.state.startDate,
            i =
              this.calendarInstance &&
              this.calendarInstance.state &&
              this.calendarInstance.state.endDate;
          if (
            (t &&
              !i &&
              ((this.isCheckInChangedByUser = !0),
              this.isCheckOutChangedByUser && _.customGoal(l, 3)),
            i &&
              this.isCheckInChangedByUser &&
              (_.customGoal(l, 2), (this.isCheckOutChangedByUser = !0)),
            t &&
              (this.showMinLosWarning || this.showAvForSelectedCheckin) &&
              this.calendarWithPrices.setCheckinDate(
                t,
                this.showAvForSelectedCheckin && this.isCheckInChangedByUser
              ),
            this.showAvForSelectedCheckin && this.isCheckInChangedByUser && t)
          ) {
            var n = r.format(
              { day: t.getDate(), month: t.getMonth(), year: t.getFullYear() },
              "short_date_without_year"
            );
            this.calendarWithPrices.showInfoMessage(
              s.translations(
                "sr_calendar_approx_prices_info_multi_day_stay",
                null,
                { currency: a.b_selected_currency, date: n }
              )
            ),
              i &&
                this.checkinAvModeOn &&
                this.calendarWithPrices.isLoading() &&
                _.customGoal(l, 1),
              (this.checkinAvModeOn = !i);
          }
          t &&
            !i &&
            (_.stage(l, 1),
            _.stage(l, a.b_has_valid_dates_not_in_past ? 2 : 3),
            a.b_has_maxotel_rooms || _.stage(l, 4)),
            _r_();
        },
        renderSelectedCustom: function () {
          if (
            (_i_("4ab:6c4c8b72"),
            o.prototype.renderSelectedCustom.apply(this, arguments),
            this.calendarInstance &&
              this.calendarInstance.state &&
              this.calendarInstance.state.startDate &&
              this.calendarInstance.state.endDate &&
              this.calendarInstance.state.startDate <
                this.calendarInstance.state.endDate &&
              this.calendarWithPrices)
          ) {
            var e = this.calendarWithPrices.service.getMinLosForInterval(
              this.calendarInstance.state.startDate,
              this.calendarInstance.state.endDate
            );
            if (e && this.showMinLosWarning)
              return _r_(
                '<div class="bui-text">' +
                  s.translations("sr_calendar_min_night_stay_footer", e, {
                    num_nights: e,
                  }) +
                  "</div>"
              );
          }
          _r_();
        },
      })),
        _r_();
    }
  ),
  B.define("component/searchbox/calendar-extended-dates", function (i, e, t) {
    "use strict";
    _i_("4ab:a555376b");
    var n = i("component"),
      a = i("server-data"),
      s = i("events"),
      r = i("jquery"),
      o = i("et"),
      _ = "mdot" === a.b_site_type || a.fe_is_tdot;
    (t.exports = n.extend({
      init: function () {
        _i_("4ab:03dc9ae0"),
          this.initVariables(),
          this.selectCheck(this.$defaultCheckBox),
          this.checkBoxClick(),
          _r_();
      },
      initVariables: function () {
        _i_("4ab:3f040df2"),
          (this.$checkboxes = this.$el.find("input:checkbox")),
          (this.$defaultCheckBox = this.$el.find("[data-flex-dates-default]")),
          (this.defaultSelected = !1),
          _r_();
      },
      checkBoxClick: function () {
        _i_("4ab:fb062b41"),
          this.$checkboxes.on(
            "click",
            function (e) {
              _i_("4ab:aab1ad3e");
              var t = r(e.target).val();
              r(e.target).prop("checked")
                ? ((this.defaultSelected = !1),
                  "0" === t && (this.defaultSelected = !0),
                  this.selectCheck(e.target),
                  _ &&
                    o.goalWithValue(
                      "js_flexible_dates_checked_" + ("0" === t ? "exact" : t),
                      1
                    ))
                : ((this.defaultSelected = !0),
                  this.selectCheck(this.$defaultCheckBox),
                  _ &&
                    o.goalWithValue(
                      "js_flexible_dates_unchecked_" +
                        ("0" === t ? "exact" : t),
                      1
                    )),
                _r_();
            }.bind(this)
          ),
          _r_();
      },
      selectCheck: function (e) {
        _i_("4ab:335cff2f"),
          this.$checkboxes
            .prop("checked", !1)
            .next()
            .removeClass("ced-checked"),
          r(e).prop("checked", !0).next().addClass("ced-checked"),
          r(e).focus(),
          _
            ? this.handleCalendarDatesTextMdot(+r(e).val())
            : this.handleCalendarDatesTextWww(+r(e).val()),
          _r_();
      },
      handleCalendarDatesTextMdot: function (e) {
        _i_("4ab:e5c3cde4");
        var t = i("event-bus");
        t.trigger("SEARCHBOX_CALENDAR_EXTEND_DATE", e),
          this.defaultSelected &&
            t.trigger("SEARCHBOX_CALENDAR_EXTEND_DATE_DEFAULT_SELECTED", e),
          _r_();
      },
      handleCalendarDatesTextWww: function (e) {
        _i_("4ab:fd1ee4af");
        var t = i("search/searchbox/model");
        (this.model = t.getInstance(
          this.$el.closest("[data-sb-id]").data("sb-id")
        )),
          this.model.use("dates"),
          this.model.dates.setExtendedDate(e),
          this.defaultSelected &&
            s.trigger("SEARCHBOX_CALENDAR_EXTEND_DATE_DEFAULT_SELECTED", e),
          _r_();
      },
    })),
      _r_();
  }),
  B.when({ condition: B.env.fe_should_track_flex_dates_calendar_open }).run(
    function (t) {
      _i_("4ab:ca1fbb33");
      var i = t("et"),
        e = t("server-data"),
        n = t("events"),
        a = "TZUfdbYfTLBbPTPCDWOOC",
        s = "TZUfdbYfTLBbPTPdKNKNKWe",
        r = '<input type="hidden" name="efdco" id="efdco" value="1" />';
      "mdot" === e.b_site_type || e.fe_is_tdot
        ? (function () {
            _i_("4ab:3c91bb9b");
            var e = t("event-bus");
            e.on("SEARCHBOX_CALENDAR_OPENED", function (e, t) {
              _i_("4ab:31f5046f"),
                $("#efdco").length || t.append(r),
                i.stage(a, 1),
                i.stage(a, 3),
                _r_();
            }),
              e.on(
                "SEARCHBOX_CALENDAR_EXTEND_DATE_DEFAULT_SELECTED",
                function () {
                  _i_("4ab:317e71d9"), i.customGoal(a, 2), _r_();
                }
              ),
              _r_();
          })()
        : (_i_("4ab:cb032845"),
          n.on("SEARCHBOX_CALENDAR_OPENED", function (e) {
            _i_("4ab:a44c6d1f"),
              $("#efdco").length || e.append(r),
              "index" === B.env.b_action && i.stage(s, 1),
              i.stage(s, 3),
              _r_();
          }),
          n.on("SEARCHBOX_CALENDAR_EXTEND_DATE_DEFAULT_SELECTED", function () {
            _i_("4ab:e6795335"), i.customGoal(s, 2), _r_();
          }),
          _r_()),
        _r_();
    }
  ),
  B.when({
    events: "ready",
    action: "index",
    condition: B.env.b_favourite_properties,
  }).run(function () {
    _i_("4ab:1bf73ee7");
    var i = $("#ss"),
      t = $(".favourite-properties"),
      n = $(".favourite-properties").children(),
      e = i.val(),
      a = B.require("search/searchbox/model").getInstance("main"),
      s = 0;
    function r() {
      _i_("4ab:c0f065fc"),
        setTimeout(function () {
          _i_("4ab:0de9ca2d"),
            ((t.is(":focus") || i.is(":focus")) && d()) ||
              !t.hasClass("-visible") ||
              (t.removeClass("-visible"), o()),
            _r_();
        }, 0),
        _r_();
    }
    function o() {
      _i_("4ab:f4ded0e1"),
        $(n[s]).removeClass("favourite-hover"),
        (s = 0),
        _r_();
    }
    function _(e) {
      var t;
      _i_("4ab:196e6273"),
        (t = e),
        _i_("4ab:2016515b"),
        i.val(t),
        i.focus(),
        a.destination.set({ ss: t }),
        $(".xp__input-group").find('input[name="dest_id"]').remove(),
        $(".xp__input-group").find('input[name="dest_type"]').remove(),
        $(".xp__input-group").find('input[name="dest_type"]').remove(),
        _r_(),
        r(),
        (function () {
          _i_("4ab:f64b6a4c");
          var e = $(".sb-date-field__field");
          if (e.hasClass("-empty")) {
            var t = e.children();
            t[0] &&
              "button" === t[0].type &&
              setTimeout(function () {
                _i_("4ab:ed153dda"), $(t[0]).trigger("click"), _r_();
              }, 0);
          }
          _r_();
        })(),
        _r_();
    }
    function l(e) {
      if ((_i_("4ab:76855b46"), e.preventDefault(), 40 === e.keyCode))
        !(function () {
          if ((_i_("4ab:d5a1c268"), s === n.length - 1))
            return o(), i.focus(), _r_();
          0 !== s && $(n[s]).removeClass("favourite-hover"),
            s++,
            $(n[s]).addClass("favourite-hover"),
            _r_();
        })();
      else if (38 === e.keyCode)
        !(function () {
          if (
            (_i_("4ab:5bf0afc8"),
            0 === s
              ? (s = n.length - 1)
              : ($(n[s]).removeClass("favourite-hover"), s--),
            0 === s)
          )
            return i.focus(), _r_();
          $(n[s]).addClass("favourite-hover"), _r_();
        })();
      else if ("Enter" === e.key || 13 === e.keyCode) _($(n[s]).text());
      else {
        var t = String.fromCharCode(e.keyCode);
        /[a-zA-Z0-9-_ ]/.test(t) && (i.val(e.key), i.focus(), r());
      }
      _r_();
    }
    function d() {
      return _i_("4ab:9f3a423f"), _r_(i.val() == e || "" == i.val());
    }
    i.on("change keyup paste blur", r),
      i.focusin(function () {
        if ((_i_("4ab:a48837cc"), B.env.fe_popular_nearby_replace_favorite))
          return _r_();
        d() && !t.hasClass("-visible") && t.addClass("-visible");
        _r_();
      }),
      i.keydown(function (e) {
        _i_("4ab:476e84f7"),
          !d() || (40 !== e.keyCode && 38 !== e.keyCode) || (t.focus(), l(e));
        _r_();
      }),
      t.blur(r),
      t.keydown(l),
      t.hover(o),
      t.click(function (e) {
        _i_("4ab:50eb64b3");
        var t = e.target;
        if (
          t.classList.contains("favourite-heading") ||
          t.classList.contains("search-suggestion__title")
        )
          return _r_();
        "LI" !== t.tagName && (t = t.parentElement);
        "LI" === t.tagName && _($(t).text());
        _r_();
      }),
      _r_();
  }),
  booking.env.enable_scripts_tracking &&
    (booking.env.scripts_tracking.searchbox.run = !0);
