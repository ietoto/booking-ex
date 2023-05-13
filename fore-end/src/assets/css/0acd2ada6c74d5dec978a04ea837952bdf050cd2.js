!(function (l, _, f) {
  var s,
    u = [],
    o = !!g();
  function g() {
    var e;
    if (l.XMLHttpRequest)
      try {
        e = new l.XMLHttpRequest();
      } catch (e) {
        return !1;
      }
    else
      for (
        var r = new Array(
            "Msxml2.XMLHTTP.5.0",
            "Msxml2.XMLHTTP.4.0",
            "Msxml2.XMLHTTP.3.0",
            "Msxml2.XMLHTTP",
            "Microsoft.XMLHTTP"
          ),
          t = 0;
        t < r.length;
        t++
      )
        try {
          e = new ActiveXObject(r[t]);
          break;
        } catch (e) {
          return !1;
        }
    return e;
  }
  function p(e) {
    return e;
  }
  function b(e, r, t, n, o) {
    var i;
    function a() {
      var e, r, t;
      try {
        for (e = 0, r = arguments.length; e < r; e += 1)
          if ((t = c(arguments[e]))) return t;
      } catch (e) {}
      return s;
    }
    function c(e) {
      var r;
      try {
        r = e();
      } catch (e) {
        r = s;
      }
      return r;
    }
    return (
      (i = {
        function_offset: c(function () {
          var e = u.length;
          return 0 < e ? p(u[e - 1]) : s;
        }),
        caller_offset: c(function () {
          var e = u.length;
          return 1 < e ? p(u[e - 2]) : s;
        }),
        message: a(
          function () {
            return e;
          },
          function () {
            return o.message;
          }
        ),
        file: a(
          function () {
            return "string" == typeof e.srcElement.src ? e.srcElement.src : s;
          },
          function () {
            return r;
          },
          function () {
            return l.document.location.href.split("?")[0];
          }
        ),
        line: t,
        column: n,
        stack: c(function () {
          return o.stack;
        }),
        bot: c(function () {
          return booking_extra.b01;
        }),
      }),
      (u = []),
      i
    );
  }
  (l._i_ = function (e) {
    u.push(e);
  }),
    (l._r_ = function (e) {
      return u.pop(), e;
    });
  var v = 0,
    d = 0,
    k = 0;
  var h = !1;
  l.addEventListener("load", function () {
    h = !0;
  }),
    (l.onabort = function () {
      _.ff_kill = !0;
    }),
    l.addEventListener &&
      void 0 !== l.onbeforeunload &&
      l.addEventListener(
        "beforeunload",
        function () {
          var e;
          (_.ff_kill = !0),
            "function" == typeof l.requestIdleCallback &&
              "serviceWorker" in navigator &&
              l.cssCoverage &&
              !l.cssCoverage.__processed__ &&
              l.cssCoverage.__collecting__ &&
              ((e = navigator.serviceWorker).controller &&
              e.controller.postMessage
                ? ((l.cssCoverage.__processed__ = !0),
                  e.controller.postMessage({
                    type: "css_coverage",
                    coverage: l.cssCoverage.getCoverage(),
                    extra: booking_extra,
                    csrf: l.cssCoverage.getConfig("service").csrfToken,
                    endpoint: l.cssCoverage.getConfig("service").endpoint,
                    origin: l.location.origin,
                  }))
                : e.ready &&
                  e.ready
                    .then(function (e) {
                      if (e.active && e.active.postMessage) return e.active;
                    })
                    .then(function (e) {
                      (l.cssCoverage.__processed__ = !0),
                        e.postMessage({
                          type: "css_coverage",
                          coverage: l.cssCoverage.getCoverage(),
                          extra: booking_extra,
                          csrf: l.cssCoverage.getConfig("service").csrfToken,
                          endpoint: l.cssCoverage.getConfig("service").endpoint,
                          origin: l.location.origin,
                        });
                    }));
        },
        !1
      );
  var e = function (e, i, r, t, a) {
    if (!o) return;
    if (navigator.userAgent.match(/VivoBrowser\/[789]\./)) return;
    var c = b.apply(this, [].slice.apply(arguments)),
      n = (function (e) {
        for (
          var r = e + "=", t = _.cookie.split(";"), n = 0;
          n < t.length;
          n++
        ) {
          for (var o = t[n]; " " == o.charAt(0); ) o = o.substring(1, o.length);
          if (0 === o.indexOf(r)) return o.substring(r.length, o.length);
        }
        return null;
      })("error_catcher");
    if (
      void 0 !== _.ff_kill &&
      !0 === _.ff_kill &&
      -1 != navigator.userAgent.search("Firefox") &&
      "Error loading script" === e
    )
      return !1;
    if ("kill" == n || (void 0 !== _.kill && !0 === _.kill)) return !1;
    if (3 <= k) return;
    v++;
    var s = g();
    return (
      (function e(r) {
        if (r && _.getElementById && _.getElementById("req_info"))
          r(_.getElementById("req_info").innerHTML), (r = null);
        else if (r) {
          if (
            ((r.retry_count = r.retry_count || 0),
            h && 20 < r.retry_count && B.js_catch_no_info)
          )
            return void r();
          r.retry_count++, setTimeout(e.bind(null, r), 100);
        }
      })(function (e) {
        var r = "pid=" + encodeURIComponent(booking_extra.pageview_id);
        if (
          ((r +=
            "&url=" +
            encodeURIComponent(
              "" !== i && void 0 !== i ? i : location.href.split("?")[0]
            )),
          f && f.env && f.env.enable_scripts_tracking)
        )
          try {
            r += (function (e) {
              var r,
                t,
                n = {},
                o = !1,
                i = f.env.scripts_tracking || {};
              for (r in i)
                Object.prototype.hasOwnProperty.call(i, r) &&
                  (((t = i[r]).loaded && t.run) ||
                    ((o = !0), (n[r] = { loaded: !!t.loaded, run: !!t.run })));
              if (!o) return "";
              return "&scripts=" + encodeURIComponent(JSON.stringify(n));
            })();
          } catch (e) {
            r += "&scripts=error";
          }
        l.B && l.B.jset && l.B.jset.m
          ? (r += "&m=" + encodeURIComponent(l.B.jset.m))
          : e && (r += "&info=" + e),
          (r +=
            "&aid=" +
            booking_extra.b_aid +
            "&lang=" +
            booking_extra.b_lang_for_url),
          6 < v && (v = d ? d + 1 : 5),
          (r += "&errc=" + v + "&errp=" + d),
          (r += "&stid=" + booking_extra.b_stid),
          (r += "&ch=" + booking_extra.b_ch),
          (r += "&ref_action=" + booking_extra.b_action),
          booking_extra.b_site_type_id &&
            (r += "&stype=" + booking_extra.b_site_type_id),
          booking_extra.b_bbtool && (r += "&bbtool=1");
        var t = booking_extra.b_gtt;
        if (c) {
          (r += "&error=" + encodeURIComponent(c.message)),
            (r +=
              "&be_running=1" +
              (function (e) {
                var r,
                  t,
                  n = "";
                for (r in e)
                  Object.prototype.hasOwnProperty.call(e, r) &&
                    void 0 !== (t = e[r]) &&
                    (n += "&be_" + r + "=" + encodeURIComponent(t));
                return n;
              })(c));
          try {
            var n = (
              l.__caplaTryGetMFEInfo ||
              function (e) {
                if (void 0 === e) return null;
                if (
                  -1 === e.indexOf("/psb/capla/static/js/") &&
                  -1 === e.indexOf("https://localhost:3001/static/js/")
                )
                  return null;
                var r = _.querySelectorAll('[id^="__CAPLA_CHUNK_METADATA__"]');
                if (!r || !r.length) return null;
                for (
                  var t = e
                      .split("/static/js/")[1]
                      .split(".js")[0]
                      .split(".")[0],
                    n = 0;
                  n < r.length;
                  n++
                ) {
                  var o = JSON.parse(r[n].innerHTML),
                    i = o.chunks;
                  if (i && -1 < i.indexOf(t)) {
                    var a = r[n].id,
                      c = a
                        .replace("__CAPLA_CHUNK_METADATA__", "")
                        .split("/")[0],
                      s = c.slice(0, -8),
                      l = c.slice(-8).replace(/^\|+/, "");
                    return { serverRole: s, hashedGitTag: l };
                  }
                }
                return null;
              }
            )(c.file);
            n &&
              ((t = n.hashedGitTag),
              (r += "&be_microfrontend=" + encodeURIComponent(n.serverRole)));
          } catch (e) {}
        }
        t && (r += "&gtt=" + encodeURIComponent(t)),
          booking_extra.b_bp_stage &&
            (r += "&bp_stage=" + booking_extra.b_bp_stage),
          booking_extra.b_bp_hid &&
            booking_extra.b_bp_blocks &&
            ((r +=
              "&bp_blocks=" +
              booking_extra.b_bp_hid +
              ":" +
              booking_extra.b_bp_blocks.join(",")),
            booking_extra.b_bp_checkin &&
              booking_extra.b_bp_checkout &&
              (r +=
                ":" +
                booking_extra.b_bp_checkin +
                ":" +
                booking_extra.b_bp_checkout));
        try {
          r += "&cors=" + (/cors_js=1/.test(_.cookie) ? 1 : 0);
        } catch (e) {}
        if (a && "object" == typeof a)
          for (var o in a)
            Object.prototype.hasOwnProperty.call(a, o) &&
              a[o] &&
              (r += "&" + o + "=" + encodeURIComponent(a[o]));
        (d = v),
          s.open("GET", "/js_errors?" + r, !0),
          s.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
          ),
          (s.onreadystatechange = function () {
            4 != s.readyState ||
              (503 != s.status && "shut up" != s.responseText) ||
              ((_.kill = !0),
              (function (e, r, t) {
                var n = "";
                if (t) {
                  var o = new Date();
                  o.setTime(o.getTime() + 24 * t * 60 * 60 * 1e3),
                    (n = "; expires=" + o.toGMTString());
                }
                _.cookie = e + "=" + r + n + "; path=/";
              })("error_catcher", "kill", 30));
          }),
          s.send(),
          k++;
      }),
      !1
    );
  };
  if (
    (B && B.alrt_js && (e = alert),
    (l.onerror = e),
    (f.reportError = function (e, r, t) {
      var n = "",
        o = "[" + (r || "Reported Error") + "] ";
      try {
        n = (o + (e.message || "") + " " + (e.stack || "")).slice(0, 500);
      } catch (e) {}
      n &&
        (t && "object" == typeof t
          ? l.onerror(n, void 0, void 0, void 0, t)
          : l.onerror(n));
    }),
    l.b_early_errors)
  )
    for (var r = 0; r < l.b_early_errors.length; r++)
      l.onerror.apply(null, l.b_early_errors[r]);
})(window, document, window.booking);
