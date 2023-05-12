var _i_ = this._i_ || function () {},
  _r_ =
    this._r_ ||
    function (i) {
      return i;
    };
B.define("component/core/et-scroll-observer", function (i, t, e) {
  _i_("430:d45b4d22");
  var n = B.eventEmitter;
  (e.exports = i("component").extend({
    init: function () {
      _i_("430:e45e90af"),
        this.$el.on("mousewheel DOMMouseScroll scroll", this.handler),
        _r_();
    },
    handler: function (i) {
      _i_("430:650662de"), n.trigger("et-scroll-observer:scroll", i), _r_();
    },
  })),
    _r_();
}),
  B.define("page-scroll-block", function (i, t, e) {
    "use strict";
    _i_("430:080cc4f9");
    var n,
      o = i("jquery")(window),
      a = document.body,
      s = !1;
    function d() {
      return (
        _i_("430:5b4bd53e"),
        _r_(a.scrollHeight > document.documentElement.clientHeight)
      );
    }
    function r(i) {
      _i_("430:5359ce54"),
        i ? o.on("resize.pageScrollBlock", _) : o.off("resize.pageScrollBlock"),
        _r_();
    }
    function _() {
      if ((_i_("430:759bcff1"), s)) return _r_();
      d() ? (a.style.paddingRight = n + "px") : (a.style.paddingRight = ""),
        (s = !0),
        window.setTimeout(function () {
          _i_("430:eb926743"), (s = !1), _r_();
        }, 150),
        _r_();
    }
    (t.init = function () {
      if ((_i_("430:0f51db79"), void 0 !== n)) return _r_(n);
      return _r_(
        (this.scrollWidth = n =
          (function () {
            _i_("430:d23b429b");
            var i,
              t = document.createElement("div");
            return (
              t.setAttribute(
                "style",
                [
                  "width: 100px",
                  "height: 100px",
                  "overflow: scroll",
                  "position: absolute",
                  "top: -9999px",
                ].join(";")
              ),
              a.appendChild(t),
              (i = t.offsetWidth - t.clientWidth),
              a.removeChild(t),
              _r_(i)
            );
          })())
      );
    }),
      (t.freeze = function () {
        if ((_i_("430:75b603b9"), (a.style.overflow = "hidden"), !n))
          return _r_();
        d() && (a.style.paddingRight = n + "px"), r(!0), _r_();
      }),
      (t.unfreeze = function () {
        if ((_i_("430:7093f204"), (a.style.overflow = ""), !n)) return _r_();
        (a.style.paddingRight = ""), r(!1), _r_();
      }),
      (t.getScrollWidth = function () {
        return _i_("430:45604e79"), _r_(this.scrollWidth);
      }),
      _r_();
  }),
  B.define("sliding-panel-model", function (t, i, e) {
    _i_("430:e110ec02");
    var n,
      o = t("event-emitter"),
      a = {},
      s = {
        show: "sliding-panel/show",
        hide: "sliding-panel/hide",
        dataLoadStart: "sliding-panel/dataLoad:start",
        dataLoadAborted: "sliding-panel/dataLoad:abort",
        dataShown: "sliding-panel/dataShown",
        dataLoaded: "sliding-panel/dataLoad:success",
        dataLoadFail: "sliding-panel/dataLoad:fail",
        dataShowStart: "sliding-panel/showData:start",
        dataShowEnd: "sliding-panel/showData:success",
        ajaxInited: "sliding-panel/ajaxInited",
      };
    function d() {
      _i_("430:365c1963"),
        (this.isShown = 0),
        (this.ajaxLoader = null),
        (this.ajaxEnabled = !1),
        (this.ajaxLoaded = !1),
        (this.ajaxLoading = !1),
        (this.ajaxLoadedUrl = ""),
        (this.dynamicData = {}),
        o.extend(this),
        _r_();
    }
    (d.prototype.isPanelShown = function () {
      return _i_("430:0ec51808"), _r_(this.isShown);
    }),
      (d.prototype.hide = function () {
        _i_("430:03dad44b"),
          this.isShown && ((this.isShown = 0), this.emit(s.hide)),
          _r_();
      }),
      (d.prototype.show = function () {
        if ((_i_("430:0171d1fe"), this.isShown)) return _r_();
        (this.isShown = 1), this.emit(s.show), _r_();
      }),
      (d.prototype.ajaxLoad = function (i) {
        _i_("430:fee25bc1"),
          this.ajaxLoadedUrl && this.ajaxLoadedUrl == i.url
            ? this.dynamicDataAborted()
            : this.ajaxLoader.load(i),
          _r_();
      }),
      (d.prototype.beginLoading = function (i) {
        _i_("430:34bd95f1"),
          (this.ajaxLoading = !0),
          this.emit(s.dataLoadStart, i),
          _r_();
      }),
      (d.prototype.dataLoaded = function (i, t) {
        _i_("430:eecc4c28"),
          this.emit(s.dataLoaded, t),
          (this.dynamicData = { content: i, requestParams: t }),
          this.setAjaxLoaded(t.url),
          this.showData(t),
          _r_();
      }),
      (d.prototype.dataFailed = function (i) {
        _i_("430:09d36cba"),
          this.emit(s.dataLoadFail, i),
          this.setAjaxLoaded(""),
          _r_();
      }),
      (d.prototype.showData = function () {
        _i_("430:9d268fff"), this.emit(s.dataShowStart), _r_();
      }),
      (d.prototype.isAjaxYetLoading = function () {
        return _i_("430:251b3948"), _r_(this.ajaxLoading);
      }),
      (d.prototype.getDynamicLoadedUrl = function () {
        return _i_("430:076e7826"), _r_(this.ajaxLoadedUrl);
      }),
      (d.prototype.setAjaxLoaded = function (i) {
        _i_("430:b8f8198e"),
          (this.ajaxLoadedUrl = i),
          (this.ajaxLoading = !1),
          _r_();
      }),
      (d.prototype.dynamicDataAborted = function () {
        _i_("430:801eb086"), this.emit(s.dataLoadAborted), _r_();
      }),
      (d.prototype.toggleAjaxEnabled = function (i) {
        if ((_i_("430:74a4aa73"), !i)) return _r_();
        "on" == i &&
          ((this.ajaxEnabled = !0),
          this.ajaxLoader ||
            ((n = t("sliding-panel-ajax")),
            (this.ajaxLoader = n.get(this.id)),
            this.setDataPreprocessor(),
            this.emit(s.ajaxInited))),
          "off" == i && (this.ajaxEnabled = !1),
          _r_();
      }),
      (d.prototype.getDynamicData = function () {
        return _i_("430:43b92ff4"), _r_(this.dynamicData);
      }),
      (d.prototype.setDataPreprocessor = function (i) {
        _i_("430:876300ce"),
          i && (this.preprocessor = i),
          this.ajaxLoader &&
            this.preprocessor &&
            (this.ajaxLoader.preprocessData = this.preprocessor),
          _r_();
      }),
      (e.exports = {
        EVENTS: s,
        get: function (i) {
          if ((_i_("430:55ad9802"), "string" != typeof i || 0 === i.length))
            throw new Error("sliding-panel-model: invalid .get() argument!");
          return (
            a.hasOwnProperty(i) || ((a[i] = new d()), (a[i].id = i)), _r_(a[i])
          );
        },
        hideAll: function () {
          for (var i in (_i_("430:41b07915"), a)) a[i].hide();
          _r_();
        },
      }),
      _r_();
  }),
  B.define("component/core/sliding-panel-core", function (i, t, e) {
    _i_("430:17725059");
    var n = i("jquery"),
      o = i("events"),
      a = i("component"),
      s = i("sliding-panel-model"),
      d = "is-hidden",
      r = "is-shown",
      _ = n(window),
      l = !0;
    (e.exports = a.extend({
      init: function () {
        if (
          (_i_("430:e9075e35"),
          (this.id = this.$el.data("id")),
          "string" != typeof this.id)
        )
          throw new Error(
            "core/sliding-panel: `data-id` is invalid or undefined!"
          );
        void 0 === this.useScrollBlocker && (this.useScrollBlocker = !0),
          (this.$close = this.$el.find("[data-close-button]")),
          (this.model = s.get(this.id)),
          this.initHandlers(),
          _r_();
      },
      initHandlers: function () {
        _i_("430:6297a5dd"),
          this.useScrollBlocker &&
            ((this.scrollBlocker = i("page-scroll-block")),
            this.scrollBlocker.init()),
          this.model.on(s.EVENTS.show, this.show.bind(this)),
          this.model.on(s.EVENTS.hide, this.hide.bind(this)),
          this.model.on(
            s.EVENTS.dataShowStart,
            this.renderDynamicContent.bind(this)
          ),
          this.model.on(
            s.EVENTS.dataLoadStart,
            this.showDynamicLoading.bind(this)
          ),
          this.model.on(s.EVENTS.dataLoadFail, this.showDynamicFail.bind(this)),
          this.$el.on("click", this.onContainerClick.bind(this)),
          this.$el.on(
            "click",
            "[data-content]",
            this.onContentClick.bind(this)
          ),
          this.model.isPanelShown() && this.show(),
          _r_();
      },
      eventsOn: function () {
        _i_("430:65158b6e"),
          this.$close.on("click.slidingPanel", this.onCloseClick.bind(this)),
          _.on("keydown.slidingPanel", this.onKeyDown.bind(this)),
          _r_();
      },
      eventsOff: function () {
        _i_("430:68417ed2"),
          this.$close.off("click.slidingPanel"),
          _.off("keydown.slidingPanel"),
          _r_();
      },
      onKeyDown: function (i) {
        _i_("430:611bcf83"),
          27 === i.which &&
            this.beforeHide(
              function () {
                _i_("430:b05cc5e0"),
                  this.model.hide(),
                  this.onHideEvents("escape"),
                  _r_();
              }.bind(this)
            ),
          _r_();
      },
      onCloseClick: function () {
        _i_("430:cddafe42"),
          this.beforeHide(
            function () {
              _i_("430:566f4714"),
                this.model.hide(),
                this.onHideEvents("close-button"),
                _r_();
            }.bind(this)
          ),
          _r_();
      },
      onOverlayClick: function () {
        _i_("430:070def41"),
          this.beforeHide(
            function () {
              _i_("430:fd9f3c21"),
                this.model.hide(),
                this.onHideEvents("overlay"),
                _r_();
            }.bind(this)
          ),
          _r_();
      },
      onHideEvents: function (i) {
        _i_("430:66f0d6c9"),
          o.emit("sliding-panel/on:hide", i),
          o.emit("sliding-panel/" + this.id + "/on:hide", i),
          _r_();
      },
      onShowEvents: function () {
        _i_("430:93d1f199"),
          o.emit("sliding-panel/on:show", this.id),
          o.emit("sliding-panel/" + this.id + "/on:show"),
          _r_();
      },
      onDataShowEvents: function () {
        _i_("430:c124c17a"),
          o.emit("sliding-panel/on:data_shown", this.id),
          o.emit("sliding-panel/" + this.id + "/on:data_shown"),
          _r_();
      },
      show: function () {
        _i_("430:ac12d080"),
          this.$el.removeClass(d).addClass(r).show(),
          this.useScrollBlocker && this.scrollBlocker.freeze(),
          this.onShowEvents(),
          this.eventsOn(),
          _r_();
      },
      beforeHide: function (i) {
        if ((_i_("430:36b3b1cc"), "function" != typeof i))
          throw new Error(
            "core/sliding-panel: `next` must be a callback function"
          );
        i(), _r_();
      },
      hide: function () {
        _i_("430:20bb6909");
        var i = this,
          t = this.$el;
        this.$el.removeClass(r).addClass(d),
          this.wait(400, function () {
            _i_("430:1af521c3"),
              t.css("display", "none"),
              i.useScrollBlocker && i.scrollBlocker.unfreeze(),
              _r_();
          }),
          o.emit("sliding-panel/is-hidden", this.id),
          this.eventsOff(),
          _r_();
      },
      showDynamicLoading: function () {
        _i_("430:c778d529"),
          this._setupDynamicElements(),
          this.$dynamicContainer.hide(),
          this.$dynamicLoadingBlock.show(),
          this.$dynamicFailBlock.hide(),
          _r_();
      },
      showDynamicFail: function () {
        _i_("430:28d90f5e"),
          this.$dynamicContainer.hide(),
          this.$dynamicLoadingBlock.hide(),
          this.$dynamicFailBlock.show(),
          _r_();
      },
      showDynamicContainer: function () {
        _i_("430:41e296c2"),
          this.$dynamicContainer.show(),
          this.$dynamicLoadingBlock.hide(),
          this.$dynamicFailBlock.hide(),
          this.onDataShowEvents(),
          _r_();
      },
      _setupDynamicElements: function () {
        _i_("430:e515b563"),
          (this.$dynamicContainer && !this.$dynamicContainer.length) ||
            ((this.$dynamicContainer = this.$el.find(
              ".sliding-panel__ajax-container"
            )),
            (this.$dynamicLoadingBlock = this.$el.find(
              ".sliding_panel__ajax_loading"
            )),
            (this.$dynamicFailBlock = this.$el.find(
              ".sliding_panel__ajax_fail"
            ))),
          _r_();
      },
      renderDynamicContent: function () {
        _i_("430:50e3d9fe"), this._setupDynamicElements();
        var i = this.model.getDynamicData().content;
        this.$dynamicContainer.html(i), this.showDynamicContainer(), _r_();
      },
      onContainerClick: function () {
        _i_("430:4c41b69e"),
          l &&
            this.beforeHide(
              function () {
                _i_("430:f43a13f1"),
                  this.model.hide(),
                  this.onHideEvents("overlay"),
                  _r_();
              }.bind(this)
            ),
          (l = !0),
          _r_();
      },
      onContentClick: function () {
        _i_("430:fdd89693"), (l = !1), _r_();
      },
      wait: function (i, t) {
        _i_("430:7271f8cb"), window.setTimeout(t, i), _r_();
      },
    })),
      _r_();
  }),
  B.define("component/core/sliding-panel-core-a11y", function (i, t, e) {
    _i_("430:7992c4da");
    var n = i("component/core/sliding-panel-core"),
      o = i("trap-focus");
    (e.exports = n.extend({
      show: function () {
        _i_("430:aa8ead78"), n.prototype.show.apply(this, arguments);
        var t = this;
        t.$el.attr("tabindex", "0").attr("aria-hidden", "false"),
          n.prototype.wait.call(t, 400, function () {
            _i_("430:a47db4b6");
            var i = $(window).scrollTop();
            o.trap(t.el), $(window).scrollTop(i), _r_();
          }),
          setTimeout(function () {
            _i_("430:1a5bdc85"), t.$el.find("*").blur(), _r_();
          }, 400),
          _r_();
      },
      hide: function () {
        _i_("430:fe3d6f6d"),
          n.prototype.hide.apply(this, arguments),
          this.$el.attr("tabindex", "-1").attr("aria-hidden", "true"),
          _r_();
      },
      eventsOn: function () {
        _i_("430:bf2b2aff"),
          n.prototype.eventsOn.apply(this),
          this.$close.on("keydown.slidingPanel", this.onEnterClose.bind(this)),
          _r_();
      },
      eventsOff: function () {
        _i_("430:fe7bc792"),
          n.prototype.eventsOff.apply(this, arguments),
          this.$close.off("keydown.slidingPanel"),
          _r_();
      },
      onEnterClose: function (i) {
        _i_("430:a9afc024"),
          13 == (i.which || i.keyCode) && this.$close.trigger("click"),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("component/core/sliding-panel-trigger", function (i, t, e) {
    _i_("430:f3a2e858");
    var n = i("component"),
      o = i("sliding-panel-model"),
      a = i("et");
    (e.exports = n.extend({
      init: function () {
        if (
          (_i_("430:7e76da42"),
          (this.target = this.$el.data("target")),
          (this.panelTarget = this.$el.data("target")),
          (this.a11yOpenOnKeyDown = a.track("OTfdASFZQfBJATNWXdBGHDDESWOGVO")),
          "string" != typeof this.target)
        )
          throw new Error(
            "core/sliding-panel: `data-target` is invalid or undefined!"
          );
        (this.shouldToggle = this.$el.data("toggle") || !1),
          (this.activeClass = this.$el.data("active-class") || "is-selected"),
          (this.preventDefault =
            void 0 === this.$el.data("prevent-default") ||
            this.$el.data("prevent-default")),
          (this.model = o.get(this.target)),
          this._initAjaxOptions(),
          this._attachEvents(),
          _r_();
      },
      _attachEvents: function () {
        _i_("430:8ad4bd32"),
          this.shouldToggle
            ? this.a11yOpenOnKeyDown
              ? this.$el.on("click keydown", this.onClickToggle.bind(this))
              : this.$el.on("click", this.onClickToggle.bind(this))
            : this.a11yOpenOnKeyDown
            ? this.$el.on("click keydown", this.onClick.bind(this))
            : this.$el.on("click", this.onClick.bind(this)),
          this.model.on(o.EVENTS.hide, this.onSlidingHide.bind(this)),
          this.model.on(o.EVENTS.show, this.onSlidingShow.bind(this)),
          _r_();
      },
      onSlidingHide: function () {
        _i_("430:2a5b13d7"), this.removeActiveClass(), _r_();
      },
      onSlidingShow: function () {
        _i_("430:b3283ee9"), this.addActiveClass(), _r_();
      },
      onClick: function (i) {
        if (
          (_i_("430:325219a5"),
          "keydown" === i.type && 13 !== i.which && 32 !== i.which)
        )
          return _r_();
        this.preventDefault && i.preventDefault(),
          this.model.show(),
          this.addActiveClass(),
          a.customGoal("OTfdASFZQfBJATNWXdBGHDDESWOGVO", 1),
          this.ajaxURL && this.model.ajaxLoad(this.ajaxOptions),
          _r_();
      },
      onClickToggle: function (i) {
        if (
          (_i_("430:2d8938c5"),
          "keydown" === i.type && 13 !== i.which && 32 !== i.which)
        )
          return _r_();
        this.preventDefault && i.preventDefault(),
          a.customGoal("OTfdASFZQfBJATNWXdBGHDDESWOGVO", 2),
          this.model.isPanelShown()
            ? (this.model.hide(), this.removeActiveClass())
            : (this.model.show(),
              this.addActiveClass(),
              this.ajaxURL && this.model.ajaxLoad(this.ajaxOptions)),
          _r_();
      },
      removeActiveClass: function () {
        _i_("430:1c690259"), this.$el.removeClass(this.activeClass), _r_();
      },
      addActiveClass: function () {
        _i_("430:3a7bca4f"), this.$el.addClass(this.activeClass), _r_();
      },
      _initAjaxOptions: function () {
        _i_("430:ee21145b"),
          this.$el.data("ajaxUrl") &&
            ((this.ajaxURL = this.$el.data("ajaxUrl")),
            (this.ajaxOptions = {
              url: this.$el.data("ajaxUrl") + "?" + this.$el.data("ajaxParams"),
              ajaxTmpl: this.$el.data("ajaxTmpl"),
            }),
            this.model.toggleAjaxEnabled("on")),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("component/assistant/sliding-panel", function (i, t, e) {
    _i_("430:bdde3a01");
    var n = i("component/core/sliding-panel-core-a11y"),
      o = i("et"),
      a = "ASSISTANT_CLOSE_TRIGGERED",
      s = null;
    window.addEventListener("message", function (i) {
      if ((_i_("430:3e013ae8"), i.origin != window.location.origin))
        return _r_();
      if (!i.data) return _r_();
      "BA_ACTIVE_THREAD_ID" === i.data.type && (s = i.data.payload), _r_();
    }),
      (e.exports = n.extend({
        beforeHide: function () {
          _i_("430:16dd3d88");
          var i = arguments;
          !(function (i) {
            if (
              (_i_("430:ea4af682"),
              o.customGoal("YTBHMGLLZBbKeHAcCOSPJTRHe", 2),
              !i || !s)
            )
              return _r_();
            var t = JSON.stringify({ thread_id: s, track_event: i });
            $.ajax({
              type: "POST",
              url: "/messaging/tracking",
              headers: { "content-type": "application/json" },
              data: t,
            }),
              _r_();
          })(a),
            n.prototype.beforeHide.apply(this, i),
            _r_();
        },
      })),
      _r_();
  });
