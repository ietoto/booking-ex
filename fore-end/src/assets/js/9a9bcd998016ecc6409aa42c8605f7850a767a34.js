var _i_ = this._i_ || function () {},
  _r_ =
    this._r_ ||
    function (e) {
      return e;
    };
B.atlas.define("jQuery", function () {
  return _i_("efa:2b36fd1f"), _r_(B.require("jquery"));
}),
  B.atlas.define("util-array", function () {
    "use strict";
    function n(e) {
      if ((_i_("efa:9f857ed0"), !Array.isArray))
        return _r_("[object Array]" === Object.prototype.toString.call(e));
      return _r_(Array.isArray(e));
    }
    function i(e, t) {
      var r, i;
      if ((_i_("efa:d4aa67c0"), !n(e))) return _r_(-1);
      if (Array.prototype.findIndex) return _r_(e.findIndex(t));
      for (r = 0, i = e.length; r < i; r++)
        if (t.call(e, e[r], r, e)) return _r_(r);
      return _r_(-1);
    }
    return (
      _i_("efa:1a0a56d4"),
      _r_({
        each: function (e, i, a) {
          var t, r;
          if ((_i_("efa:98f541e8"), !n(e))) return _r_(e);
          if (e.forEach)
            e.forEach(function (e, t, r) {
              _i_("efa:864681d5"), i.call(a, e, t, r), _r_();
            });
          else for (t = 0, r = e.length; t < r; ++t) i.call(a, e[t], t, e);
          return _r_(e);
        },
        find: function (e, t) {
          var r, i, a;
          if ((_i_("efa:e3968329"), !n(e))) return _r_(a);
          if (Array.prototype.find) return _r_(e.find(t));
          for (r = 0, i = e.length; r < i; r++)
            if (t.call(e, e[r], r, e)) return _r_(e[r]);
          return _r_(a);
        },
        findIndex: i,
        isArray: n,
        contains: function (e, t) {
          _i_("efa:e7033692");
          var r = i(e, function (e) {
            return _i_("efa:24142508"), _r_(e === t);
          });
          return _r_(-1 < r);
        },
        array_move: function (e, t, r) {
          for (_i_("efa:915d6bcb"); t < 0; ) t += e.length;
          for (; r < 0; ) r += e.length;
          if (r >= e.length)
            for (var i = r - e.length + 1; i--; ) e.push(void 0);
          return e.splice(r, 0, e.splice(t, 1)[0]), _r_(e);
        },
      })
    );
  }),
  B.atlas.define("util-getset", function () {
    "use strict";
    return (
      _i_("efa:9f4a205f"),
      _r_(function (r) {
        _i_("efa:2ab8a3a1"),
          (this.set = function (e, t) {
            if ((_i_("efa:d20d24cb"), e)) return (r[e] = t), _r_(t);
            return _r_(void 0);
          }),
          (this.get = function (e) {
            return _i_("efa:cc3a5c2d"), _r_(e ? r[e] : void 0);
          }),
          _r_();
      })
    );
  }),
  B.atlas.define("util-object", function () {
    "use strict";
    _i_("efa:a520c54e");
    var t = 0;
    function _(e) {
      _i_("efa:32789e19");
      var t = typeof e;
      return _r_("function" === t || ("object" === t && !!e));
    }
    return _r_({
      extend: function (e) {
        _i_("efa:6f3dc761");
        var t,
          r,
          i,
          a,
          n = [].slice.call(arguments, 0);
        if (!_(e)) return _r_(e);
        for (i = 1, a = n.length; i < a; ++i)
          for (r in (t = n[i])) void 0 !== t[r] && (e[r] = t[r]);
        return _r_(e);
      },
      isObject: _,
      uniqueId: function (e) {
        return _i_("efa:85449ae4"), _r_(e ? e + ++t : ++t + "");
      },
      simpleDiff: function e(t, r) {
        if ((_i_("efa:e749e55a"), "object" != typeof t || "object" != typeof r))
          return _r_(!1);
        for (var i in t) if (!(i in r)) return _r_(!0);
        for (var i in r)
          if (t[i] instanceof Object && r[i] instanceof Object) {
            if (e(t[i], r[i])) return _r_(!0);
          } else if (t[i] !== r[i]) return _r_(!0);
        return _r_(!1);
      },
      deepClone: function (e) {
        return _i_("efa:acedc825"), _r_(JSON.parse(JSON.stringify(e)));
      },
    });
  }),
  B.atlas.define(
    "atlas-places",
    ["pubsub", "util-getset", "util-object", "util-array"],
    function (n, _, s, f) {
      "use strict";
      _i_("efa:0705a460");
      var o = {},
        l = B.atlas.require;
      function e(e) {
        _i_("efa:462ca0aa");
        var t = this,
          r = e.provider || "provider-google-places",
          i = e.modules || [],
          a = {};
        if (
          (s.extend(a, o, e.options),
          s.extend(t, _.call(t, a)),
          s.extend(t, n.call(t)),
          !e.options || !e.options.domNode)
        )
          return _r_();
        t.trigger("pre-init"), t.initialize(r, i, a), _r_();
      }
      return (
        (e.prototype.initialize = function (t, e, r) {
          _i_("efa:e440fcb1");
          var i,
            a,
            n,
            _ = this,
            o = _.get("isInitialized"),
            c = this.get("domNode");
          if (o) return _r_(!1);
          if (
            ((i = c),
            (a = _),
            _i_("efa:5457fa8b"),
            ((n = document.createElement("div")).className = "places-results"),
            i.appendChild(n),
            a.set("resultsNode", n),
            ((n = document.createElement("div")).className =
              "places-attribution"),
            i.appendChild(n),
            a.set("attributionNode", n),
            _r_(),
            r.resolved)
          )
            return (
              f.each(e, function (e) {
                _i_("efa:5a60feff"),
                  e && e.init ? e.init.call(_) : e && s.extend(_, e),
                  t.init(_, r).then(function (e) {
                    _i_("efa:4b8d659a1"),
                      setTimeout(function () {
                        _i_("efa:5b98cc6c1"),
                          _.set("hasLoaded", !0),
                          (_.Interface = e),
                          _.trigger("ready", _),
                          _r_();
                      }, 4),
                      _r_();
                  }),
                  _r_();
              }),
              _.set("isInitialized", !0),
              _r_(this)
            );
          l(e, function () {
            _i_("efa:f82b9cae"),
              f.each([].slice.call(arguments, 0), function (e) {
                _i_("efa:1dfc4dca"),
                  e && e.init ? e.init.call(_) : e && s.extend(_, e),
                  _r_();
              }),
              l(t)
                .init(_, r)
                .then(function (e) {
                  _i_("efa:4b8d659a"),
                    setTimeout(function () {
                      _i_("efa:5b98cc6c"),
                        _.set("hasLoaded", !0),
                        (_.Interface = e),
                        _.trigger("ready", _),
                        _r_();
                    }, 4),
                    _r_();
                }),
              _r_();
          }),
            _.set("isInitialized", !0),
            _r_();
        }),
        (e.prototype.done = function (e) {
          _i_("efa:96dc78bf"),
            this.get("hasLoaded") ? e.call(this) : this.on("ready", e),
            _r_();
        }),
        _r_(e)
      );
    }
  ),
  B.atlas.define("pubsub", function (e, t, r) {
    "use strict";
    _i_("efa:dda057e1");
    var l = {
      API_BEFORE_LOAD: "api-before-load",
      API_LOADED: "api-loaded",
      BOUNDS_CHANGE: "bounds-change",
      BROWSER_USE_GEOLOCATION_ACCEPTED: "browser-use-geolocation-accepted",
      CLOSE: "close",
      DRAG: "drag",
      DRAG_END: "drag-end",
      DRAG_START: "drag-start",
      FILTERS_APPLIED: "filters-applied",
      FIXED_IW_OPEN: "fixed-iw-open",
      FIXED_IW_AUTO_OPEN: "fixed-iw-auto-open",
      IDLE: "idle",
      IW_OPEN: "iw-open",
      IW_CLOSE: "iw-close",
      IW_BEFORE_GET: "iw-get-before",
      IW_GET_SUCCESS: "iw-get-success",
      IW_GET_FAIL: "iw-get-fail",
      IW_RENDERED: "iw-rendered",
      IW_SWIPED_UP: "iw-swiped-up",
      IW_SWIPED_DOWN: "iw-swiped-down",
      LOAD: "load",
      CLICK: "click",
      MARKER_CLICK: "marker-click",
      MARKER_HOVER: "marker-hover",
      MARKER_OUT: "marker-out",
      MARKERS_GET_BEFORE: "markers-get-before",
      MARKERS_GET_SUCCESS: "markers-get-success",
      MARKERS_GET_FAIL: "markers-get-fail",
      MARKERS_GET_NO_DATA: "markers-get-no-data",
      MARKERS_RENDERED: "markers-rendered",
      MARKERS_READY: "markers-ready",
      RESULTS_CHANGED: "results-changed",
      LIST_UPDATED: "list-updated",
      MODULES_LOADED: "modules-loaded",
      OFFSET_CHANGE: "offset-change",
      OPEN: "open",
      REFRESH: "refresh",
      DISTRICT_POLYGON_DRAWN: "district-polygon-drawn",
      POLYGON_CLICK: "polygon-click",
      PRE_INIT: "pre-init",
      READY: "ready",
      RESIZE: "resize",
      SB_MARKER_ADDED: "sb-marker-added",
      TILES_LOAD: "tiles-loaded",
      ZOOM: "zoom",
      ZOOM_IN: "zoom-in",
      ZOOM_OUT: "zoom-out",
      GOOGLE_MAPTYPE_CHANGE: "google-map-type-change",
    };
    return _r_(function (e) {
      _i_("efa:857ccfa9");
      var _,
        o = !1,
        c = {},
        s = {};
      function f(e, t) {
        _i_("efa:8f23f3d4"),
          !c.hasOwnProperty(e) || (t && !0 !== t)
            ? c.hasOwnProperty(e) &&
              (c[e] = c[e].filter(function (e) {
                return _i_("efa:0d6051ad"), _r_(e.handler !== t);
              }))
            : (c[e] = []),
          _r_();
      }
      return _r_({
        EVENTS: l,
        trigger: function (t, r) {
          _i_("efa:301d82cc");
          var e,
            i,
            a = this,
            n = [];
          (e = t),
            (i = r = r || null),
            _i_("efa:0eab9a8b"),
            o && console.log("Atlas event: " + e, i),
            _r_(),
            _ || (_ = t === l.READY),
            c.hasOwnProperty(t) &&
              (c[t].forEach(function (e) {
                _i_("efa:919925a8"),
                  e.handler.call(a, r, e.args, t),
                  e.once && n.push([t, e.handler]),
                  _r_();
              }),
              n.forEach(function (e) {
                _i_("efa:9a763c52"), f(e[0], e[1]), _r_();
              })),
            s.hasOwnProperty(t) &&
              s[t].forEach(function (e) {
                _i_("efa:7a3c8a75"), e.handler.call(a, r, e.args, t), _r_();
              }),
            _r_();
        },
        on: function (e, t, r, i) {
          _i_("efa:f0fc3de5"),
            (e && "string" == typeof e ? [e] : e).forEach(function (e) {
              _i_("efa:07d27b41"),
                "ready" === e && _ && t.call(this, null, r),
                i
                  ? ((s[e] = s[e] || []),
                    s[e].push({ handler: t, args: r || null }))
                  : ((c[e] = c[e] || []),
                    c[e].push({ handler: t, args: r || null })),
                _r_();
            }),
            _r_();
        },
        once: function (e, t, r) {
          _i_("efa:62665005");
          var i = e && "string" == typeof e ? [e] : e;
          if ("ready" === e && _) return t.call(this, null, r), _r_();
          i.forEach(function (e) {
            _i_("efa:6b1917bd"),
              (c[e] = c[e] || []),
              c[e].push({ handler: t, args: r || null, once: !0 }),
              _r_();
          }),
            _r_();
        },
        off: f,
        destroyAllBindings: function () {
          _i_("efa:3370e245"), (c = {}), _r_();
        },
        getSubscribers: function (e) {
          return _i_("efa:aa0b5e28"), _r_(c[e] || []);
        },
        getEvents: function () {
          return _i_("efa:faefb19a"), _r_(Object.keys(c));
        },
        logEvents: function (e) {
          return _i_("efa:b2bbc88c"), _r_((o = e));
        },
      });
    });
  }),
  B.atlas.define("geo.latLng", function () {
    "use strict";
    function e(e, t) {
      var r;
      _i_("efa:a1a93be5"),
        "string" == typeof e && 0 < e.indexOf(",")
          ? ((r = e.split(",")), (this.lat = +r[0]), (this.lng = +r[1]))
          : "object" == typeof google &&
            google.maps &&
            e instanceof google.maps.LatLng
          ? ((this.lat = +e.lat()), (this.lng = +e.lng()))
          : "[object Array]" === Object.prototype.toString.call(e)
          ? ((this.lat = +e[0]), (this.lng = +e[1]))
          : ((this.lat = +e || 0), (this.lng = +t || 0)),
        (this[0] = this.lat),
        (this[1] = this.lng),
        _r_();
    }
    return (
      _i_("efa:de4738b1"),
      (e.prototype = {
        set: function (e, t) {
          return (
            _i_("efa:36ec4855"), (this.lat = +e), (this.lng = +t), _r_(this)
          );
        },
        clone: function () {
          return _i_("efa:52935c15"), _r_(new e(this.lat, this.lng));
        },
        toArray: function () {
          return _i_("efa:8f055bed"), _r_([this.lat, this.lng]);
        },
        toString: function () {
          return (
            _i_("efa:3753544c"),
            _r_(["[", this.lat, ",", this.lng, "]"].join(""))
          );
        },
      }),
      _r_(e)
    );
  }),
  B.atlas.define("autocomplete", function () {
    "use strict";
    return (
      _i_("efa:4edc7e81"),
      _r_({
        autocomplete: function (e, t, r) {
          _i_("efa:11d500dc"), this.Interface.autocomplete(e, t, r), _r_();
        },
      })
    );
  }),
  B.atlas.define("places", function () {
    "use strict";
    return (
      _i_("efa:7f9c2f79"),
      _r_({
        checkPlacesApi: function () {
          return (
            _i_("efa:22ac944e"),
            _r_(
              this.Interface.checkPlacesApi && this.Interface.checkPlacesApi()
            )
          );
        },
        getPlaceDetails: function (e, t, r) {
          if ((_i_("efa:8cd38ada"), !e)) return _r_();
          this.Interface.getPlaceDetails(e, t, r), _r_();
        },
        getGeocodeDetails: function (e, t) {
          if ((_i_("efa:ac3ab379"), !e)) return _r_();
          "function" == typeof this.Interface.getGeocodeDetails &&
            this.Interface.getGeocodeDetails(e, t),
            _r_();
        },
        searchPlaces: function (e, t, r) {
          if ((_i_("efa:5cb46dea"), !e || !this.Interface.searchPlaces))
            return _r_();
          this.Interface.searchPlaces(e, t, r), _r_();
        },
      })
    );
  }),
  B.atlas.define(
    "provider-google-autocomplete-result",
    ["util-object", "util-array", "util-getset"],
    function (a, n, _) {
      "use strict";
      function e(e, t) {
        _i_("efa:008e6160");
        var r,
          i = {
            map: t,
            data: {
              id: e.place_id,
              title:
                ((r = e.terms),
                _i_("efa:7124f750"),
                _r_((r && r.length && r[0].value) || "")),
              address: (function (e) {
                _i_("efa:fff678c1");
                var t = [];
                return (
                  n.each(e.slice(1), function (e) {
                    _i_("efa:ffcc73fc"), e.value && t.push(e.value), _r_();
                  }),
                  _r_(t.join(", "))
                );
              })(e.terms),
              description: e.description,
              matched_substrings: e.matched_substrings,
              types: e.types,
            },
          };
        a.extend(i, e), a.extend(this, _.call(this, i)), _r_();
      }
      return (
        _i_("efa:0a327398"),
        (e.prototype.getDetails = function (e) {
          _i_("efa:f864fa0a");
          var t = this.get("map"),
            r = this.get("place_id");
          return _r_(t.getPlaceDetails({ placeId: r }, e));
        }),
        _r_(e)
      );
    }
  ),
  B.atlas.define(
    "provider-google-autocomplete",
    ["util-array", "provider-google-autocomplete-result"],
    function (_, o) {
      "use strict";
      _i_("efa:6be95a0c");
      var t,
        c = B.require("jquery"),
        s = 4e3;
      return _r_({
        autocomplete: function (e, r, i) {
          _i_("efa:4526b2e5");
          var a = this,
            n = (function (e, t) {
              _i_("efa:b9be6cda");
              var r = t.map && t.map.getBounds(),
                i = { input: e.query };
              return (
                r
                  ? (i.bounds = r)
                  : e.lat &&
                    e.lon &&
                    ((i.location = new google.maps.LatLng(e.lat, e.lon)),
                    (i.radius = Math.min(parseInt(e.radius, 10), s))),
                e.types && (i.types = e.types),
                _r_(i)
              );
            })(e, a);
          (t = t || new google.maps.places.AutocompleteService()),
            c.get("/gapi_monitor", { type: "places_autocomplete" }),
            t.getPlacePredictions(n, function (e, t) {
              _i_("efa:ea730ec7"),
                t && -1 < t.indexOf("OK") && e
                  ? r(
                      (function (e, t) {
                        _i_("efa:a3ff6b8d");
                        var r = [];
                        return (
                          0 < e.length &&
                            _.each(e, function (e) {
                              _i_("efa:f390ea9c"),
                                e.place_id && e.terms && r.push(new o(e, t)),
                                _r_();
                            }),
                          _r_(r)
                        );
                      })(e, a)
                    )
                  : "function" == typeof i && i(t, n),
                _r_();
            }),
            _r_();
        },
      });
    }
  ),
  B.atlas.define(
    "provider-google-place-util",
    ["util-object", "geo.latLng", "util-array"],
    function (a, n, _) {
      "use strict";
      return (
        _i_("efa:5c44ba3a"),
        _r_({
          transform: function (e) {
            _i_("efa:b77d667b");
            var t =
                e.geometry && e.geometry.location
                  ? e.geometry.location
                  : new google.maps.LatLng(0, 0),
              r = new n(t.lat(), t.lng()),
              i = e.query || "";
            return (
              i &&
                i.types &&
                (e.type = (function (e, t) {
                  _i_("efa:f7d89f12");
                  var r,
                    i = "",
                    a = Number.POSITIVE_INFINITY;
                  return (
                    _.each(t, function (t) {
                      _i_("efa:2fcaab4d"),
                        -1 <
                          (r = _.findIndex(e, function (e) {
                            return _i_("efa:6e81e8b4"), _r_(t === e);
                          })) &&
                          r < a &&
                          (i = e[(a = r)]),
                        _r_();
                    }),
                    _r_(i)
                  );
                })(e.types || [], i.types)),
              _r_({
                id: e.place_id,
                source: "google",
                coordinates: r,
                location: t,
                data: e,
              })
            );
          },
          normalizeMarker: function (e) {
            _i_("efa:226ae492");
            var t = google.maps,
              r = a.extend({ position: this.get("location") }, e || {}),
              i = r.icon;
            return (
              i &&
                ((r.icon = {
                  url: i.url,
                  size: new t.Size(i.w, i.h),
                  origin: new t.Point(i.x, i.y),
                }),
                i.z && (r.zIndex = i.z)),
              _r_(r)
            );
          },
          setMarkerEvents: function (e) {
            _i_("efa:ac8d166b");
            var t = google.maps.event,
              r = this;
            t.addListener(e, "click", function (e) {
              _i_("efa:75767f93"), r.trigger("click", e), _r_();
            }),
              t.addListener(e, "mouseover", function (e) {
                _i_("efa:45e20d69"), r.trigger("mouseover", e), _r_();
              }),
              t.addListener(e, "mouseout", function (e) {
                _i_("efa:f825237d"), r.trigger("mouseout", e), _r_();
              }),
              _r_();
          },
          setIWEvents: function (e) {
            _i_("efa:cf36ee66");
            var t = google.maps.event,
              r = this;
            t.addListener(e, "closeclick", function (e) {
              _i_("efa:c1cd1dad"), r.trigger("close", e), _r_();
            }),
              _r_();
          },
          getBestImage: function (e, t, r) {
            _i_("efa:f98cff97");
            var i,
              a,
              n,
              _ = e[0];
            for (i = 0, a = e.length; i < a; ++i)
              if (
                ((n = e[i]),
                (_.ratio = n.width / n.height),
                (_.maxWidth = Math.ceil(r * _.ratio)),
                (_.maxHeight = r),
                _.maxWidth < t &&
                  ((_.maxWidth = t), (_.maxHeight = Math.ceil(t / _.ratio))),
                _.maxWidth <= n.width && _.maxHeight <= n.height)
              ) {
                _ = n;
                break;
              }
            return _r_(_);
          },
        })
      );
    }
  ),
  B.atlas.define(
    "provider-google-place",
    ["pubsub", "provider-google-place-util", "util-object"],
    function (a, n, _) {
      "use strict";
      _i_("efa:71dfd42b");
      var o = B.require("jquery");
      function e(e, t) {
        _i_("efa:1e7ab33d");
        var r = n.transform(e),
          i = this;
        (r.atlas = t),
          r.data &&
            (r.data.getImage = function (e) {
              return _i_("efa:a2aa0b36"), _r_(i.getImage.call(i, e));
            }),
          _.extend(this, a.call(this)),
          (this.get = function (e) {
            return _i_("efa:d7cfa9b1"), _r_(e ? r[e] : r.data);
          }),
          (this.set = function (e, t) {
            if ((_i_("efa:29f2c368"), e)) return (r[e] = t), _r_(t);
            return _r_(void 0);
          }),
          _r_();
      }
      return (
        (e.prototype.extend = function (e) {
          return (
            _i_("efa:c66cba61"),
            this.set("data", _.extend(this.get("data") || {}, e)),
            _r_(this)
          );
        }),
        (e.prototype.render = function (e) {
          _i_("efa:85686517"),
            this.get("atlas").Interface.map
              ? this.renderMarker(e)
              : this.renderHTML(e),
            this.set("isRendered", !0),
            _r_();
        }),
        (e.prototype.renderMarker = function (e) {
          _i_("efa:937ec453");
          var t = this.get("marker"),
            r = this.get("atlas").Interface.map,
            i = google.maps,
            a = n.normalizeMarker.call(this, e);
          if (!r) return _r_();
          t
            ? (t.setOptions(a), t.setMap(r))
            : ((t = new i.Marker(a)).setMap(r),
              n.setMarkerEvents.call(this, t),
              this.set("marker", t)),
            this.set("isRendered", !0),
            _r_();
        }),
        (e.prototype.renderHTML = function (e) {
          _i_("efa:e6923115");
          var t = this.get("$domNode"),
            r = o(this.get("atlas").get("resultsNode")),
            i = e.className,
            a = e.content || "";
          t
            ? t.html(a)
            : ((t = this.set("$domNode", o('<div class="' + i + '"/>'))).html(
                a
              ),
              r.append(t)),
            _r_();
        }),
        (e.prototype.remove = function () {
          _i_("efa:2b7d49a2"),
            this.get("atlas") && this.get("atlas").Interface.map
              ? this.removeMarker()
              : this.removeHTML(),
            this.set("isRendered", !1),
            _r_();
        }),
        (e.prototype.removeMarker = function () {
          _i_("efa:d2e5bcb1");
          var e = this.get("marker");
          e && (e.setMap(null), e.set("marker", null)), _r_();
        }),
        (e.prototype.removeHTML = function () {
          _i_("efa:864c19e6"),
            o(this.get("$domNode")).remove(),
            this.set("$domNode", null),
            _r_();
        }),
        (e.prototype.getImage = function (e) {
          _i_("efa:b06f1cc8");
          var t,
            r = this.get("data"),
            i = e ? e.width : 80,
            a = e ? e.height : 80;
          if (!r || !r.photos || !r.photos.length) return _r_(!1);
          return (
            (t = n.getBestImage(r.photos, i, a)),
            _r_({
              attribution: t.html_attributions || "",
              url: t.getUrl(t),
              width: t.width,
              height: t.height,
              layout: 1 <= t.ratio ? "landscape" : "portrait",
            })
          );
        }),
        (e.prototype.getDetails = function (e) {
          _i_("efa:2e4be19e");
          var t = this.get("atlas"),
            r = this.get("id");
          t.getPlaceDetails({ placeId: r }, e, this), _r_();
        }),
        (e.prototype.getMarkerConfig = function (e) {
          _i_("efa:148e5d67");
          var t,
            r = this.get("coordinates");
          return (
            (t = {
              b_id: this.get("id"),
              b_latitude: r.lat,
              b_longitude: r.lng,
              data: this.get("data"),
            }),
            _.extend(t, e),
            _r_(t)
          );
        }),
        (e.prototype.open = function (e) {
          _i_("efa:d28b260a");
          var t = this.get("iw"),
            r = this.get("marker"),
            i = this.get("atlas").Interface.map,
            a = _.extend({}, e || {});
          if (!i) return _r_();
          t
            ? t.setOptions(a)
            : ((t = new google.maps.InfoWindow(a)),
              n.setIWEvents.call(this, t),
              this.set("iw", t)),
            t && r && t.open(i, r),
            _r_();
        }),
        (e.prototype.close = function () {
          _i_("efa:7ba1a5e7");
          var e = this.get("iw");
          return _r_(!!e && e.close());
        }),
        _r_(e)
      );
    }
  ),
  B.atlas.define(
    "google-places",
    ["util-array", "geo.latLng", "provider-google-place"],
    function (c, s, f) {
      "use strict";
      _i_("efa:e2bace81");
      var l = B.require("jquery");
      return _r_({
        checkPlacesApi: function () {
          return (
            _i_("efa:4d438d6a"),
            _r_(!!(google && google.maps && google.maps.places))
          );
        },
        getPlacesService: function () {
          _i_("efa:6f11de82");
          var e = this.ubber,
            t = this.map || e.get("attributionNode");
          return _r_(
            e.get("placesService") ||
              e.set("placesService", new google.maps.places.PlacesService(t))
          );
        },
        getPlaceDetails: function (e, t, a) {
          _i_("efa:1bca6beb");
          var n = this.ubber,
            r = this.getPlacesService(),
            i = "object" == typeof t,
            _ = {
              success: i && t.success ? t.success : t,
              error: i && t.error ? t.error : function () {},
            };
          n.trigger("places-details", e),
            l.get("/gapi_monitor", { type: "places_details" }),
            r.getDetails(e, function (e, t) {
              _i_("efa:b3220335");
              var r,
                i = "fail";
              t === google.maps.places.PlacesServiceStatus.OK && e
                ? ((r = a instanceof f ? a.extend(e) : new f(e, n)),
                  _.success.call(a || n, r),
                  (i = "success"))
                : _.error.call(a || n, t, i, e),
                a && a.trigger && a.trigger("place-details-" + i, r),
                n.trigger("places-details-" + i, r),
                _r_();
            }),
            _r_();
        },
        getGeocodeService: function () {
          _i_("efa:e93d00bd");
          var e = this.ubber;
          return _r_(
            e.get("GeocodeService") ||
              e.set("GeocodeService", new google.maps.Geocoder())
          );
        },
        getGeocodeDetails: function (e, t) {
          _i_("efa:8f718263");
          var r = this.ubber,
            i = this.getGeocodeService(),
            a = "object" == typeof t,
            n = {
              success: a && t.success ? t.success : t,
              error: a && t.error ? t.error : function () {},
            };
          r.trigger("geocode-details", e),
            l.get("/gapi_monitor", { type: "geocoding" }),
            i.geocode(e, function (e, t) {
              _i_("efa:ba04e763"),
                t === google.maps.GeocoderStatus.OK && c.isArray(e) && e[0]
                  ? n.success.call(r, e[0])
                  : n.error.call(r, t, "fail", e),
                _r_();
            }),
            _r_();
        },
        searchPlaces: function (a, n, _) {
          _i_("efa:4828ebde");
          var o = this.ubber,
            e = this.getPlacesService();
          if (
            (o.trigger("places-search", a),
            !a || !n || (!a.location && !a.bounds))
          )
            return _r_();
          (a = (function (e) {
            _i_("efa:86227a32");
            var t,
              r,
              i = google.maps,
              a = e.bounds,
              n = e.location;
            return (
              a &&
                ((t = a.getNorthEast()),
                (r = a.getSouthWest()),
                (e.bounds = new i.LatLngBounds(
                  new i.LatLng(r.lat, r.lng),
                  new i.LatLng(t.lat, t.lng)
                ))),
              n instanceof s
                ? (e.location = new i.LatLng(n.lat, n.lng))
                : c.isArray(n) &&
                  2 === n.length &&
                  (e.location = new i.LatLng(n[0], n[1])),
              _r_(e)
            );
          })(a)),
            l.get("/gapi_monitor", { type: "places_nearby_search" }),
            e.nearbySearch(a, function (e, t, r) {
              var i;
              _i_("efa:53ad512f"),
                e && t === google.maps.places.PlacesServiceStatus.OK
                  ? ((i = (function (e, i, a) {
                      _i_("efa:4eb79f2e");
                      var n = [],
                        _ = a.exclude || [];
                      return (
                        c.each(e, function (t) {
                          _i_("efa:64397108");
                          var r = !1;
                          c.each(_, function (e) {
                            _i_("efa:99c7afac"),
                              c.contains(t.types || [], e) && (r = !0),
                              _r_();
                          }),
                            !r &&
                              t.geometry &&
                              t.geometry.location &&
                              ((t.query = a), n.push(new f(t, i))),
                            _r_();
                        }),
                        _r_(n)
                      );
                    })(e, o, a)) &&
                      i.length &&
                      n.call(_ || o, i, r),
                    o.trigger("places-search-success", i, r))
                  : o.trigger("places-search-fail", e),
                _r_();
            }),
            _r_();
        },
      });
    }
  ),
  B.atlas.define("provider-loader-v2", function (e) {
    "use strict";
    _i_("efa:7afae9ce");
    var t = e("promise"),
      _ = e("jquery");
    function r(e, t, r) {
      return (
        _i_("efa:770a022f"),
        _r_(
          "google" === r
            ? this.append(e, "GLOBAL_ATLAS_GOOGLE_MAPS_CALLBACK", t)
            : this.get(e, t, r)
        )
      );
    }
    function c(e, t, r) {
      _i_("efa:13aa6c1c");
      var i = new RegExp("\\b(" + t + "=).*?(&|$)");
      if (0 <= e.search(i)) return _r_(e.replace(i, "$1" + r + "$2"));
      return _r_(e + (0 < e.indexOf("?") ? "&" : "?") + t + "=" + r);
    }
    return (
      (r.prototype.append = function (r, i, a) {
        _i_("efa:052fe6b2");
        var n = this,
          _ = document.createElement("script"),
          o = function (e, t, r) {
            _i_("efa:7cf433b1"),
              e.trigger(e.EVENTS.API_LOADED, e),
              (t.isLoaded = !0),
              r(),
              _r_();
          };
        return _r_(
          new t(function (e, t) {
            _i_("efa:7ccb7908"),
              "object" == typeof window.google && window.google.maps
                ? o(a, n, e)
                : ((window[i] = function () {
                    _i_("efa:a604e423"), o(a, n, e), _r_();
                  }),
                  a.get("channel") && (r = c(r, "channel", a.get("channel"))),
                  (_.type = "text/javascript"),
                  (_.src = r),
                  document.body.appendChild(_),
                  (n.isLoading = !0)),
              _r_();
          })
        );
      }),
      (r.prototype.get = function (r, i, a) {
        _i_("efa:98dc460c");
        var n = this;
        return _r_(
          new t(function (e, t) {
            if ((_i_("efa:491cf974"), "leaflet" === a && window.L))
              return e(), _r_();
            i.get("channel") && (r = c(r, "channel", i.get("channel"))),
              _.getScript(r, function () {
                _i_("efa:83c8fafe"),
                  i.trigger(i.EVENTS.API_LOADED, i),
                  (n.isLoaded = !0),
                  e(),
                  _r_();
              }),
              (n.isLoading = !0),
              _r_();
          })
        );
      }),
      _r_(r)
    );
  }),
  B.atlas.define(
    "provider-google-places",
    [
      "provider-loader-v2",
      "util-env",
      "util-object",
      "provider-google-autocomplete",
    ],
    function (i, e, a, t) {
      "use strict";
      _i_("efa:cf56634e");
      var n = e.get("googleMapsUrl"),
        _ = !1,
        o = B.require("promise");
      function c(e, t) {
        _i_("efa:d348df9d");
        var r = this;
        (r.ubber = t),
          B.atlas.require(["google-places"], function () {
            _i_("efa:4a8688d5");
            for (var e = [].slice.call(arguments, 0); 0 < e.length; )
              a.extend(r, e.pop());
            _r_();
          }),
          _r_();
      }
      return (
        $.extend(c.prototype, t),
        _r_({
          init: function (e, t, r) {
            return (
              _i_("efa:dd4fc8f0"),
              _r_(
                _
                  ? o.resolve(new c(t, e))
                  : new i(n, e, "google").then(function () {
                      return _i_("efa:6c877628"), (_ = !0), _r_(new c(t, e));
                    })
              )
            );
          },
        })
      );
    }
  ),
  B.atlas.define(
    "provider-mapbox-places",
    ["provider-loader-v2", "util-env", "provider-mapbox-autocomplete"],
    function (i, r, e) {
      "use strict";
      _i_("efa:ab47fd85");
      var a = r.get("mapboxURL"),
        n = !1,
        _ = B.require("promise");
      function o(e, t) {
        _i_("efa:cb7014ce");
        (this.ubber = t),
          (L.mapbox.accessToken = r.get("mapboxAccessToken")),
          _r_();
      }
      return (
        $.extend(o.prototype, e),
        _r_({
          init: function (e, t, r) {
            return (
              _i_("efa:d4d8c874"),
              _r_(
                n
                  ? _.resolve(new o(t, e))
                  : new i(a, e, "provider-mapbox-places").then(function () {
                      return _i_("efa:0fa087a7"), (n = !0), _r_(new o(t, e));
                    })
              )
            );
          },
        })
      );
    }
  );
