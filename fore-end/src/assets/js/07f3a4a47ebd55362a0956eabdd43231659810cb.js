var _i_ = this._i_ || function () {},
  _r_ =
    this._r_ ||
    function (t) {
      return t;
    };
function init() {
  _i_("843:b5eeac3c"),
    B.require(["require_absolute"], function (t) {
      _i_("843:ccf64499");
      var e = B.env.b_is_tdot_traffic,
        s = t("../../components/lists/lists-api/lists-api"),
        _ = t("../../components/lists/lists-store/lists-store"),
        i = t("../../components/lists/lists-listview/lists-listview");
      function n(r) {
        _i_("843:322267cf"),
          r.getLists().then(function () {
            _i_("843:356d834c");
            var t,
              e = r.getListById(s.getLastChangedListId());
            r.lastSelectedListId
              ? (r.setCurrentList({ id: r.lastSelectedListId }),
                (t = r.lastSelectedListId))
              : e
              ? (r.setCurrentList({ id: e.id }), (t = e.id))
              : (r.setCurrentList({ id: _.getListByIndex(0).id }),
                (t = _.getListByIndex(0).id));
            var i = _.getHotelsCount(),
              n = _.getListsCount();
            0 == i
              ? B.et.stage("AfPcCWbKMDNdEHXdRT", 8)
              : i <= 3
              ? B.et.stage("AfPcCWbKMDNdEHXdRT", 3)
              : i <= 6
              ? B.et.stage("AfPcCWbKMDNdEHXdRT", 4)
              : 7 <= i && B.et.stage("AfPcCWbKMDNdEHXdRT", 5),
              B.env.b_user_auth_level_is_low_or_high &&
                (n < 2
                  ? B.et.stage("AfPcCWbKMDNdEHXdRT", 6)
                  : B.et.stage("AfPcCWbKMDNdEHXdRT", 7)),
              r.show(t),
              _r_();
          }),
          _r_();
      }
      if (e) return _r_();
      if (!B.env.is_listview_page) return _r_();
      var r = new i({ el: $(".listview_lightbox__container") });
      (window.listView = r),
        $(".js-uc-listview-lightbox").click(function (t) {
          _i_("843:01292022"),
            t.preventDefault(),
            e && $(".select_foldout").hide(),
            n(r),
            _r_();
        }),
        B.env.b_run_tfl_move_away_from_lightbox &&
          $(".js-uc-wishlists-trigger").click(function (t) {
            return (
              _i_("843:dcc731d0"),
              t.preventDefault(),
              (window.location.href = B.env.b_wishlist_singlepage_url),
              _r_()
            );
          });
      var a = function () {
        _i_("843:9803ce2c"),
          r && !r.isShown() && "hotel" != B.env.b_action && r.clearCache(),
          _r_();
      };
      B.eventEmitter.bind("wl:create", a),
        B.eventEmitter.bind("wl:edithotel", a);
      var o = $.grep(
        [
          ".js-wishlist-added-to-name-link",
          ".js-open-list",
          '.js-uc-notification-link[href*="wl_id="]',
          'a[href*="/mywishlist"][href*="wl_id="]',
        ],
        Boolean
      );
      if (
        ($(document.body).undelegate(".wl-dropdown-link", "click"),
        $(document.body).delegate(o.join(","), "click", function (t) {
          if ((_i_("843:dab62401"), !B.env.is_listview_page)) return _r_();
          if (B.env.b_run_tfl_move_away_from_lightbox) return _r_();
          var e = s.getIdFromUrl($(t.currentTarget).attr("href"));
          e &&
            (t.preventDefault(),
            r.getLists().then(function () {
              _i_("843:555ed1041"),
                r.setCurrentList({ id: e }),
                r.show(e),
                _r_();
            })),
            _r_();
        }),
        B.env.b_is_wishlist_singlepage)
      ) {
        var l = s.getIdFromUrl(window.location.href);
        "null" != l && 0 < B.env.auth_level
          ? r.getLists().then(function () {
              _i_("843:555ed104"),
                r.setCurrentList({ id: l }),
                r.show(l),
                _r_();
            })
          : n(r),
          B.env.is_dmw_d_wishlist_redesign ||
            $(".listview__controls").stick_in_parent({
              sticky_class: "listview__controls--sticky",
            });
      }
      "www" === B.env.b_site_type &&
        "mywishlist" === B.env.b_action &&
        (B.env.is_dmw_d_wishlist_redesign
          ? B.eventEmitter.bind(
              "listview:rendered:hotels",
              handleHotelsRenderedEvent_bui
            )
          : (B.eventEmitter.bind(
              "listview:rendered:hotels",
              handleHotelsRenderedEvent
            ),
            $(document.body).on(
              "click",
              ".comparable-list-scroll-btn",
              handleScrollClickEvent
            ))),
        _r_();
    }),
    _r_();
}
B.define("lists/lists-share/lists-share", function (t, e, i) {
  "use strict";
  _i_("843:3baaca77");
  var s = t("../lists-hotel-sidebar/lists-hotel-sidebar");
  B.define("component/lists-share", function (t, e, i) {
    _i_("843:c87571f0");
    var n = t("component"),
      r = t("jquery");
    (i.exports = n.extend({
      selectInput: function () {
        _i_("843:6308e5b7"),
          this.$el.find(".js-lists-share-input").select(),
          _r_();
      },
      init: function () {
        _i_("843:e106a531");
        var e = this;
        (this._isShown = !1),
          B.eventEmitter.bind("lists-share-active", function () {
            _i_("843:04e831e2"), e._isShown && e.render(), _r_();
          }),
          r(".js-lists-share").bind("click", function (t) {
            if ((_i_("843:ca3339d4"), t.preventDefault(), e._isShown))
              return e.selectInput(), _r_();
            e.$el.hide(),
              e.render().then(function () {
                _i_("843:086a1182"),
                  e.$el.slideDown("fast", r.proxy(e.selectInput, e)),
                  _r_();
              }),
              _r_();
          }),
          this.$el.delegate(
            ".js-lists-share-input",
            "click",
            r.proxy(this.selectInput, this)
          ),
          _r_();
      },
      render: function () {
        _i_("843:e655e9f2");
        var e = booking.promise(),
          i = this;
        return (
          s.getListById(s.getCurrentListId()).then(function (t) {
            _i_("843:0b6852ac"),
              i.$el.html(B.jstmpl("lists_share_template").render(t)),
              (i._isShown = !0),
              e.fulfill(),
              _r_();
          }),
          _r_(e)
        );
      },
    })),
      _r_();
  }),
    (i.exports = { init: function () {} }),
    _r_();
}),
  B.define("lists/lists-hotel-sidebar/lists-hotel-sidebar", function (t, e, i) {
    "use strict";
    _i_("843:c70de1e0");
    var n = t("lists/lists-api-legacy"),
      s = B.env.b_is_tdot_traffic,
      r = t("../lists-api/lists-api"),
      _ = t("../lists-store/lists-store");
    (i.exports = {
      getCurrentListId: function () {
        _i_("843:cc100dfc");
        var t = $(".js-wishlist-added-to-name-link")
          .attr("href")
          .match(/wl_id=([a-zA-Z0-9-_]+)/);
        return _r_(t && 1 < t.length && t[1]);
      },
      getListById: function (e) {
        _i_("843:69977acb");
        var i = B.promise(),
          t = null;
        if (B.env.lists) {
          var n = $.grep(B.env.lists.collection, function (t) {
            return _i_("843:80101369"), _r_(String(t.id) === String(e));
          });
          t = n && n[0];
        }
        return (
          t
            ? i.fulfill(t)
            : r.API.list({ id: e }, function (t) {
                _i_("843:9f418e15"),
                  t.lists && t.lists[0] ? i.fulfill(t.lists[0]) : i.reject(t),
                  _r_();
              }),
          _r_(i)
        );
      },
      render: function (t, e) {
        _i_("843:3f174352"),
          this.$root
            .find(".js-wishlist-added-to-name")
            .attr("data-wl-id", t.id || "")
            [e ? "show" : "hide"]();
        var i = this.$root.find(".js-wishlist-added-to-name-link");
        i.text(t.name || ""), i.attr("href", t.url || "");
        var n = $(".js-wl-handle-text"),
          r = { saved: n.data("text-saved"), unsaved: n.data("text-unsaved") };
        s && $(".wishlist_trigger_button").toggleClass("saved_in_wl", e),
          n.html(r[e ? "saved" : "unsaved"]),
          i.text(i.data("original-label")),
          this.$wishlistButton.toggleClass("added-to-list", e),
          this.$flyDropdown.toggleClass(
            "fly-dropdown-enhanced-dropdown-clicked-status",
            e
          ),
          s || this.$socialCount.toggleClass("g-hidden", e),
          _r_();
      },
      toggleLoading: function (t) {
        _i_("843:4cca8270"),
          this.$wishlistButton.toggleClass("disabled", t),
          this.$loadingIcon.toggleClass("g-hidden", !t),
          _r_();
      },
      updateState: function (r) {
        _i_("843:4f79d8f1");
        var s = this;
        this.toggleLoading(!0),
          (function (t) {
            _i_("843:79bdc9c3");
            var e = $.grep(t, function (t) {
                return _i_("843:83e841a0"), _r_(t.selected);
              }),
              i = 0 < e.length,
              n =
                $.grep(e, function (t) {
                  return (
                    _i_("843:ef8596ef"), _r_(String(t.id) === String(r.list_id))
                  );
                })[0] ||
                e[0] ||
                {};
            booking.eventEmitter.trigger("wl-hp-sidebar-active-list", n),
              s.render(n, i),
              s.toggleLoading(!1),
              B.eventEmitter.trigger("lists-share-active", { id: n.id }),
              _r_();
          })(n.getHotelLists(this.hotelId)),
          _r_();
      },
      $wishlistButton: $(),
      $loadingIcon: $(),
      $flyDropdown: $(),
      $socialCount: $(),
      $root: $(),
      init: function () {
        if ((_i_("843:9f9482aa"), "hotel" !== B.env.b_action)) return _r_();
        var i = this;
        if (
          ((this.$wishlistButton = $(
            ".wishlist_trigger_rounded_larger_button"
          )),
          (this.$loadingIcon = $(".tfl-clicked-status-loading")),
          (this.$flyDropdown = $(".fly-dropdown-enhanced-dropdown")),
          (this.$socialCount = $(".wishlist-social-count")),
          (this.$root = $(".js-hp-wl-sidebar")),
          (this.hotelId = this.$root.data("hotel-id")),
          s)
        )
          _.on("list:changed", function (t) {
            _i_("843:439955d91"), i.updateState({ list_id: t.id }), _r_();
          }).on("list:created", function (t) {
            _i_("843:439955d9"), i.updateState({ list_id: t.id }), _r_();
          });
        else {
          var t = [n.EVENTS.CREATE, n.EVENTS.EDITHOTEL].join(" ");
          n.bind(t, function (t, e) {
            _i_("843:75004c53"),
              i.updateState({ list_id: e.params.lists }),
              _r_();
          });
        }
        _r_();
      },
    }),
      _r_();
  }),
  B.define(
    "lists/lists-hotel-content-block/lists-hotel-content-block",
    function (t, e, i) {
      "use strict";
      _i_("843:16480028");
      var n = t("../lists-api/lists-api"),
        r = t("../lists-hotel-dropdown/lists-hotel-dropdown").wlDropdown,
        s = null;
      function _() {
        return _i_("843:1a4cd215"), _r_($(".hp-section--lists"));
      }
      function a() {
        _i_("843:ef14dc99"),
          (s = r.create(
            _().find(".hp-lists-save-list, .hp-lists-remove-list")
          )),
          _r_();
      }
      (i.exports = {
        init: function () {
          _i_("843:cc1b3c29"),
            $(function () {
              _i_("843:f248bd4d"),
                a(),
                B.eventEmitter.bind("update:b_hotel_is_saved", function (t, e) {
                  _i_("843:0b3b3bd3"),
                    (function (t, e, i) {
                      _i_("843:8981fac9"), s && s._destroy();
                      var n = i && i[i.length - 1];
                      _().replaceWith(
                        B.jstmpl("lists_hotel_content_block").render({
                          b_hotel_is_saved: e,
                          b_hotel_id: t.b_hotel_id,
                          b_wishlist_selected_url: n && n.url,
                          b_wishlist_selected_name: n && n.name,
                        })
                      ),
                        a(),
                        _r_();
                    })(n.currentHotel(), e.b_hotel_is_saved, e.lists),
                    _r_();
                }),
                _r_();
            }),
            _r_();
        },
      }),
        _r_();
    }
  ),
  B.define(
    "lists/lists-hotel-dropdown/lists-hotel-dropdown",
    function (e, t, i) {
      "use strict";
      _i_("843:53cfaf0a");
      var o = e("jquery"),
        l = e("lists/lists-api-legacy"),
        a = e("wishlists/hotel-page-ga-tracking"),
        d = e("server-data"),
        n = e("component/wishlist/tracking"),
        c = e("component/wishlist/utils"),
        u = e("et"),
        h = n.expDesktopEntryPointRefactoring;
      (i.exports = (function () {
        _i_("843:8ee4c169");
        var _ = l.EVENTS,
          i = e("trap-focus");
        function n() {
          _i_("843:7719ce88");
          var t = B.env.b_reg_user_last_used_wishlist;
          if (t && t[0]) return _r_(t[0].b_reg_user_detail_list_id);
          return _r_(null);
        }
        var r = null,
          t = {
            defaults: {
              gaAction: "Wishlist",
              extraClass: "wl-dropdown dmw-bui-wl-dropdown",
              showTooltip: !0,
              content: function (e) {
                _i_("843:3c77f3c2");
                var t = l.getHotelLists(this.params.hotel_id);
                this.comparisonMode && 0 < t.length
                  ? e(this.tmpl({ lists: t }))
                  : (this._$handle.attr(
                      "aria-label",
                      this._$handle.data("loadingtext")
                    ),
                    B.env.fe_wl_sr_saw_dropdow
                      ? this.showInlineLoader()
                      : this.show(this.tmpl({ lists: [], loading_list: !0 })),
                    l.fetch(this.params).then(
                      function (t) {
                        _i_("843:09f6b29e"),
                          this._$handle.attr("aria-live", "off"),
                          e(this.tmpl(t.result)),
                          this.updateAriaLabels(),
                          _r_();
                      }.bind(this)
                    )),
                  _r_();
              },
            },
            timeout: null,
            init: function () {
              _i_("843:5ab90188");
              var e = this;
              (this.params = { hotel_id: this.handle().attr("data-hotel-id") }),
                (this.comparisonMode = this.handle().attr(
                  "data-sr-comparison-mode"
                )),
                (this.$wlDropdownAriaOwn = this._$handle
                  .parent()
                  .find('[aria-owns="hotel-wishlists"]'));
              var t = Number(this.handle().attr("data-arrow-size"));
              t && (this.options.arrowSize = t),
                this.bindRoot(),
                this.bindData(e),
                this.handle().bind("mouseenter", function () {
                  _i_("843:cd923713"),
                    e.comparisonMode || l.fetch(e.params),
                    _r_();
                }),
                e.bind("show hide", function (t) {
                  _i_("843:ee396baa"),
                    setTimeout(function () {
                      _i_("843:d14d57de"),
                        booking.eventEmitter.trigger("wl-dropdown-toggle", {
                          node: e.root(),
                          state: "show" === t.type,
                        }),
                        _r_();
                    }, 0),
                    o("#tooltip_wrap").hide(),
                    e._$root.attr("id", "hotel-wishlists"),
                    e._$root.attr("tabindex", "0"),
                    "zh-cn" === B.env.b_lang_for_url &&
                      (e._$root.loadComponents(),
                      B.et.initAttributesTracking(e._$root)),
                    "show" === t.type &&
                      setTimeout(function () {
                        _i_("843:1e945609"),
                          e._$root.css("outline", "none"),
                          e._$root[0].focus(),
                          _r_();
                      }, 150),
                    e.options.showTooltip &&
                      "hide" === t.type &&
                      (i.release(!1), t.preventDefault()),
                    _r_();
                }),
                _r_();
            },
            onclick: function (t) {
              if (
                (_i_("843:e5287bee"),
                this.hide(),
                !this.comparisonMode && !this.isSelected())
              )
                return _r_(this.toggle());
              this.options.showTooltip &&
                "hotel" === B.env.b_action &&
                setTimeout(function () {
                  _i_("843:c897d1d4");
                  var t = o("#hotel-wishlists");
                  t.find("input[type=checkbox]").eq(0).focus(),
                    i.trap(t.get(0), o(".js-wl-dropdown-handle").get(0)),
                    _r_();
                }, 500),
                h.stage("entrypointClicked"),
                this.onclickComparisonHandler(t),
                _r_();
            },
            onclickComparisonHandler: function (t) {
              _i_("843:3d02d66f"),
                t.preventDefault(),
                this.isSelected()
                  ? ((this.showSavedMessage = !1),
                    this.removeHotelFromWishlists())
                  : (B.env.fe_wl_sr_saw_dropdow
                      ? this.showInlineLoader()
                      : this.show(this.tmpl({ lists: [], loading_list: !0 })),
                    this.autoSaveHotel()),
                _r_();
            },
            removeHotelFromWishlists: function () {
              _i_("843:dc490e65");
              var r = this;
              this.showInlineLoader(),
                l.fetch(this.params).then(function (t) {
                  if ((_i_("843:c4b40591"), !t || !t.result.success))
                    return r.handelRemoveHotelFromWishlistsError.call(r), _r_();
                  var i = r.params.hotel_id,
                    n = l.getHotelLists(i).filter(function (t) {
                      return _i_("843:398f4f90"), _r_(t.selected);
                    }),
                    e = {
                      lists: n
                        .map(function (t) {
                          return _i_("843:a3f40e7b"), _r_(String(t.id));
                        })
                        .join(","),
                      hotel_id: i,
                      new_state: 0,
                      single_selection_exp: 1,
                    };
                  r.showInlineLoader(),
                    h.customGoal("removeHotel"),
                    l.editHotel(e).then(function (t) {
                      if ((_i_("843:dfae5c3d"), !t || !t.result.success))
                        return r.handelRemoveHotelFromWishlistsError(), _r_();
                      var e = l.getHotelLists(i).filter(function (t) {
                        return _i_("843:627165601"), _r_(t.selected);
                      });
                      B.eventEmitter.trigger(
                        "wl:toggleHotelSavedStatus",
                        r.genEventParams(i, {
                          wl_lists: e,
                          wl_entrypoint_title: c.genEntryPointTooltipTitle(0),
                          wl_hotel_saved: 0,
                        })
                      ),
                        r.hideInlineLoader(),
                        r.toggleSavedToMessage(),
                        r.show(
                          B.jstmpl("lists_hotel_dropdown_removed").render({
                            lists: n,
                          })
                        ),
                        _r_();
                    }, r.handelRemoveHotelFromWishlistsError.bind(this)),
                    _r_();
                }, r.handelRemoveHotelFromWishlistsError.bind(this)),
                _r_();
            },
            handelRemoveHotelFromWishlistsError: function () {
              _i_("843:52c1a9ef"),
                h.customGoal("receiveResError"),
                this.hideInlineLoader(),
                _r_();
            },
            showInlineLoader: function () {
              _i_("843:85c7c557"),
                this.handle().addClass("show-loader-animation"),
                _r_();
            },
            hideInlineLoader: function () {
              _i_("843:5f5618d1"),
                this.handle().removeClass("show-loader-animation"),
                _r_();
            },
            getLastAddedToListId: function () {
              if ((_i_("843:62d6f5d0"), null != r)) return _r_(r);
              return _r_(n());
            },
            genEventParams: function (t, e) {
              _i_("843:3096dd9a");
              var i = {};
              return (i[t] = e), _r_(i);
            },
            autoSaveHotel: function () {
              _i_("843:dc060456");
              var t = this.getLastAddedToListId();
              null != t
                ? this.autoSaveHotelToList(t)
                : l
                    .fetch(this.params)
                    .then(
                      this.handleAutoSaveFetchResponse.bind(this),
                      this.handleAutoSaveFetchError.bind(this)
                    ),
                _r_();
            },
            handleAutoSaveFetchResponse: function () {
              _i_("843:eddfe57a");
              var t = l.getHotelLists(this.params.hotel_id)[0];
              t
                ? this.autoSaveHotelToList(t.id)
                : this.handleAutoSaveFetchError(),
                this.hideInlineLoader(),
                _r_();
            },
            handleAutoSaveFetchError: function () {
              _i_("843:cf783d24"),
                h.customGoal("receiveResError"),
                this.toggle(),
                _r_();
            },
            autoSaveHotelToList: function (t) {
              _i_("843:59f8dc43"),
                this.trackGA("editHotel", {
                  hotelId: this.params.hotel_id,
                  state: 1,
                });
              var e = { hotel: 2, searchresults: 3 }[B.env.b_action];
              u.customGoal("aDMWRfDSdWUUHfLebbMEXO", e),
                u.stage("aDMWRfDSdWUUHfLebbMEXO", 2);
              var i = {
                lists: String(t),
                hotel_id: this.params.hotel_id,
                new_state: 1,
                single_selection_exp: 1,
              };
              if (B.et.track("aDMWRfDSdWUUHfLebbMPAFFLKZLXJOfAdIUFZZcO")) {
                var n = "",
                  r = null,
                  s = null;
                B.env.b_occupancy &&
                  B.env.b_occupancy.adults &&
                  (r = B.env.b_occupancy.adults),
                  B.env.b_group &&
                    B.env.b_group.length &&
                    ((n = (
                      B.env.b_group[0].children_ages || B.env.b_group[0].ages
                    )
                      .map(function (t) {
                        return _i_("843:db4a75d0"), _r_(t.age || t);
                      })
                      .join(",")),
                    (s = B.env.b_group[0].ages.length)),
                  (i = Object.assign(i, {
                    checkin: B.env.b_checkin_date,
                    checkout: B.env.b_checkout_date,
                    rooms: B.env.b_nr_rooms_wanted || null,
                    adults: r,
                    childrenAges: n,
                    children: s,
                  }));
              }
              return (
                h.customGoal("saveHotel"),
                _r_(
                  l
                    .editHotel(i)
                    .then(
                      this.handleAutoSaveResponse.bind(this, t, i),
                      this.handleAutoSaveError.bind(this)
                    )
                )
              );
            },
            handleAutoSaveResponse: function (t, e, i) {
              _i_("843:07430ca1"),
                i && i.result.success
                  ? ((this.showSavedMessage = !0),
                    this.updateSRHandle(t, !0),
                    B.eventEmitter.trigger(
                      "wl:toggleHotelSavedStatus",
                      this.genEventParams(e.hotel_id, {
                        wl_entrypoint_title: c.genEntryPointTooltipTitle(1),
                        wl_hotel_saved: 1,
                      })
                    ),
                    "searchresults" == B.env.b_action &&
                      (B.env.fe_wl_sr_saw_dropdow = !0),
                    this.show(),
                    this.hideInlineLoader())
                  : this.handleAutoSaveError(),
                _r_();
            },
            handleAutoSaveError: function () {
              _i_("843:108eceb1"), h.customGoal("receiveResError");
              var t = this.toggle.bind(this);
              l.fetch(this.params).then(t, function () {
                _i_("843:9735f7ef"),
                  h.customGoal("receiveResError"),
                  t(),
                  _r_();
              }),
                _r_();
            },
            updateSRHandle: function (t, e) {
              _i_("843:c277ee36");
              var i = this.handle();
              i.attr("data-list-id", e ? t : null),
                i.toggleClass("sr-rt-compare-cta--saved", e);
              var n = i.find(".sr-rt-compare-checkbox").get(0);
              n && (n.checked = e), _r_();
            },
            bindRoot: function () {
              _i_("843:543dc6ff");
              var e = this;
              this.bind(this.events.rootready, function () {
                _i_("843:52fcf12c"),
                  o.extend(e.options, {
                    gaLabel: e.handle().attr("data-ga-label"),
                    position: e.handle().attr("data-position"),
                  }),
                  e
                    .root()
                    .delegate(
                      ".js-wl-dropdown-item-text",
                      "keyup",
                      o.proxy(e.ontext, e)
                    )
                    .delegate(
                      ".js-wl-dropdown-item-checkbox",
                      "change",
                      o.proxy(e.oncheckbox, e)
                    )
                    .delegate(
                      ".js-sr-wl-expand-trigger",
                      "click",
                      o.proxy(e.onListExpand, e)
                    )
                    .delegate(".js-open-list", "click", function () {
                      _i_("843:de3b33b8"),
                        e.trackGA("goToList", { hotelId: e.params.hotel_id }),
                        "hotel" === d.b_action
                          ? B.squeak(d.wl_squeak.open_wishlist_from_hp)
                          : "searchresults" === d.b_action &&
                            B.squeak(d.wl_squeak.open_wishlist_from_sr),
                        _r_();
                    })
                    .bind("mouseenter", function () {
                      _i_("843:2fe5af96"),
                        h.stage("popoverMouseEnter"),
                        clearTimeout(e.timeout),
                        _r_();
                    })
                    .bind("mouseleave", function () {
                      _i_("843:55720c6e"),
                        (e.timeout = setTimeout(o.proxy(e.hide, e), 2e3)),
                        _r_();
                    }),
                  e.bind(e.events.show, function () {
                    _i_("843:85edafe3"), clearTimeout(e.timeout), _r_();
                  }),
                  e.$wlDropdownAriaOwn.bind("focusout", function (t) {
                    _i_("843:7b1e88da"),
                      (e.timeout = setTimeout(o.proxy(e.hide, e), 500)),
                      _r_();
                  }),
                  e.root().bind("focusin mousedown", function () {
                    _i_("843:db358593"),
                      setTimeout(function () {
                        _i_("843:4c8514df"), clearTimeout(e.timeout), _r_();
                      }, 0),
                      _r_();
                  }),
                  _r_();
              }),
                _r_();
            },
            triggerHotelSavedEvent: function (t) {
              _i_("843:019ddffd");
              var e = l.getHotelLists(this.params.hotel_id),
                i = o.grep(e, function (t) {
                  return _i_("843:83e841a01"), _r_(t.selected);
                });
              B.eventEmitter.trigger("update:b_hotel_is_saved", {
                b_hotel_is_saved: t,
                hotel_id: this.params.hotel_id,
                lists: i,
              }),
                _r_();
            },
            isSelected: function () {
              _i_("843:f189f97e");
              var t = l.getHotelLists(this.params.hotel_id);
              if (t && 0 < t.length)
                return _r_(
                  0 <
                    o.grep(t, function (t) {
                      return _i_("843:f821a392"), _r_(t.selected);
                    }).length
                );
              var e = this.handle();
              return _r_(
                e.hasClass("sr-rt-compare-cta--saved") ||
                  e.hasClass("saved_in_wl")
              );
            },
            getListIdFromResponse: function (t) {
              if ((_i_("843:558e4043"), !t)) return _r_(null);
              if (null != t.params.lists) return _r_(t.params.lists);
              if (null != t.result.id) return _r_(t.result.id);
              return _r_(null);
            },
            updateSelectedState: function (t) {
              _i_("843:5628d522");
              var e = this.isSelected();
              if (
                (this.triggerHotelSavedEvent(e),
                this.handle().toggleClass("saved_in_wl", e),
                this.updateSprite(e),
                this.comparisonMode)
              ) {
                var i = this.getListIdFromResponse(t),
                  n = i;
                "string" == typeof i && (n = i.split(",")[0]),
                  this.updateSRHandle(n, e),
                  (r = e ? n : r);
              }
              this.updateAriaLabels(),
                this.options.showTooltip && this.updateHoverLabels(),
                _r_();
            },
            updateAriaLabels: function () {
              _i_("843:87f7dcbc");
              var t = l
                  .getHotelLists(this.params.hotel_id)
                  .filter(function (t) {
                    return _i_("843:045a5de1"), _r_(t.selected);
                  }),
                e = t.length,
                i = t.map(function (t) {
                  return _i_("843:b3447bf2"), _r_(t.name);
                });
              this._$handle.attr(
                "aria-label",
                0 < e
                  ? B.jstmpl.translations("a11y_hp_bookmarks_button_saved", e, {
                      num_lists: e,
                    })
                  : B.jstmpl.translations("a11y_hp_bookmarks_add_to")
              ),
                this.$wlDropdownAriaOwn.attr(
                  "aria-label",
                  0 < e
                    ? B.jstmpl.translations("a11y_hp_bookmarks_added", null, {
                        list_name: i.join(", "),
                      })
                    : B.jstmpl.translations("a11y_hp_bookmarks_button_hover")
                ),
                _r_();
            },
            updateHoverLabels: function () {
              _i_("843:e6c8eeb6");
              var t = l
                  .getHotelLists(this.params.hotel_id)
                  .filter(function (t) {
                    return _i_("843:045a5de11"), _r_(t.selected);
                  }).length,
                e = "b_tt_holder_wl_new_" + t;
              this._$handle.hasClass("saved_in_wl")
                ? (0 == t && (t = 1),
                  this._$handle.attr("id", e),
                  this._$handle.attr(
                    "data-title",
                    B.jstmpl.translations("a11y_hp_bookmarks_button_saved", t, {
                      num_lists: t,
                    })
                  ))
                : (this._$handle.removeAttr("id"),
                  this._$handle.attr(
                    "data-title",
                    B.jstmpl.translations("cdm_hp_quick_share_save")
                  )),
                this._$handle.data("materialized-id", null),
                _r_();
            },
            bindData: function (s) {
              _i_("843:4cc3fc04"),
                l.bind(
                  [_.LOADINGSTART, _.LOADINGEND].join(" "),
                  function (e, t) {
                    _i_("843:eff2ec82");
                    var i = t.params,
                      n = String(i.hotel_id) === String(s.params.hotel_id),
                      r = !i.lists && !i.name;
                    if (!n || (!s.comparisonMode && r)) return _r_();
                    "string" == typeof i.lists
                      ? i.lists.split(",").forEach(function (t) {
                          _i_("843:4722b13c"),
                            s.loading(e.type === _.LOADINGSTART, t),
                            _r_();
                        })
                      : s.loading(e.type === _.LOADINGSTART, i.lists),
                      _r_();
                  }
                ),
                l.bind([_.CREATE, _.EDITHOTEL].join(" "), function (t, n) {
                  if (
                    (_i_("843:a40b343c"),
                    String(n.params.hotel_id) !== String(s.params.hotel_id))
                  )
                    return _r_();
                  var r = !1;
                  n.result.success
                    ? ((r = Boolean(n.params.new_state)),
                      s.handle().toggleClass("saved_in_wl", r),
                      s.updateSelectedState(n))
                    : l.fetch(s.params).then(function (t) {
                        _i_("843:21d2306b");
                        var e = o.grep(t.result.lists, function (t) {
                          return _i_("843:8191fec6"), _r_(t.selected);
                        });
                        n.result.success ||
                          ((r = Boolean(e.length)),
                          s.handle().toggleClass("saved_in_wl", r),
                          s.updateSprite(r)),
                          B.eventEmitter.trigger("update:b_hotel_is_saved", {
                            b_hotel_is_saved: r,
                            hotel_id: n.params.hotel_id,
                            lists: e,
                          });
                        var i = B.env.auth_level || 0;
                        (i = parseInt(i)), _r_();
                      }),
                    _r_();
                }),
                _r_();
            },
            updateSprite: function (t) {
              _i_("843:da544eba"),
                this.handle().hasClass("added_to_fav_lists") &&
                  this.handle()
                    .find(".b-sprite")
                    .toggleClass("icon_list_favorites_selected", t)
                    .toggleClass("icon_list_favorites", !t),
                this.handle().hasClass("lists-hotel-dropdown-alternative") &&
                  this.handle()
                    .find(".bui_icon__save_to_list")
                    .toggleClass("bui_icon__save_to_list-selected", t),
                this.handle().is('[data-placement="comparison_popup"]') &&
                  this.handle().toggleClass("selected", t),
                this.handle().is('[data-placement="hp_tittle"]') &&
                  this.handle().toggleClass("saved_in_wl", t),
                _r_();
            },
            ontext: function (t) {
              _i_("843:f1a1d686");
              var e = o(t.currentTarget),
                i = e.parent().parent();
              i
                .find(".js-wl-dropdown-item-checkbox")
                .attr("disabled", !e.val()),
                13 === t.which && (t.preventDefault(), this.createList(i)),
                _r_();
            },
            oncheckbox: function (t) {
              _i_("843:f8ddcee8"), t.preventDefault();
              var e = o(t.currentTarget).parent();
              this[
                e.find(".js-wl-dropdown-item-text")[0]
                  ? "createList"
                  : "toggleList"
              ](e),
                _r_();
            },
            onListExpand: function (t) {
              _i_("843:0c09b942"), t.preventDefault(), t.stopPropagation();
              var e = this.root().find(".dmw_sr_wl_dd_expand_trigger");
              e.next().removeClass("dmw_sr_wl_dd_collapsed"),
                e.remove(),
                this.root().css(this._position()),
                _r_();
            },
            createList: function (_) {
              _i_("843:c662af34");
              var a = this,
                t = _.find(".js-wl-dropdown-item-text");
              this.trackGA("createList", { hotelId: this.params.hotel_id });
              var e = { name: t.val(), hotel_id: this.params.hotel_id };
              if (B.et.track("aDMWRfDSdWUUHfLebbMPAFFLKZLXJOfAdIUFZZcO")) {
                var i = "",
                  n = null,
                  r = null;
                (B.env.b_occupancy || B.env.b_occupancy.adults) &&
                  (n = B.env.b_occupancy.adults),
                  (B.env.b_group || B.env.b_group.length) &&
                    ((i = (
                      B.env.b_group[0].children_ages || B.env.b_group[0].ages
                    )
                      .map(function (t) {
                        return _i_("843:db4a75d01"), _r_(t.age || t);
                      })
                      .join(",")),
                    (r = B.env.b_group[0].ages.length)),
                  (e = Object.assign(e, {
                    use_list_details: 1,
                    rooms: B.env.b_nr_rooms_wanted || null,
                    adults: n,
                    childrenAges: i,
                    children: r,
                  }));
              }
              h.customGoal("createList"),
                l.create(e).then(function (t) {
                  _i_("843:3eaa7e9a");
                  var e = t.result,
                    i = "";
                  (e.selected = !0),
                    (i = o("<div/>").html(a.tmpl({ lists: [e] }))),
                    a.handle().attr("data-list-id", e.list_id),
                    _.before(i.find(".js-wl-dropdown-item")),
                    _.replaceWith(i.find(".js-wl-dropdown-item-new")),
                    parseInt(e.remaining, 10) <= 0 &&
                      a._$root.find(".js-wl-dropdown-item-new").hide();
                  var n = a._$root.find(".js-wl-dropdown-item-text"),
                    r = n.data("originallabel");
                  r || ((r = n.attr("aria-label")), n.data("originallabel", r)),
                    n.attr(
                      "aria-label",
                      B.jstmpl.translations("a11y_hp_bookmarks_added", null, {
                        list_name: e.name,
                      }) +
                        ". " +
                        r
                    ),
                    n.focus();
                  var s = { hotel: 2, searchresults: 3 }[B.env.b_action];
                  u.customGoal("aDMWRfDSdWUUHfLebbMEXO", s),
                    u.stage("aDMWRfDSdWUUHfLebbMEXO", 2),
                    u.customGoal("aDMWRfDSdWUUHfLebbMEXO", 1),
                    _r_();
                }),
                "hotel" === d.b_action
                  ? B.squeak(B.env.wl_squeak.create_wishlist_from_hp)
                  : "searchresults" === d.b_action &&
                    B.squeak(B.env.wl_squeak.create_wishlist_from_sr),
                _r_();
            },
            checked: function (t, e) {
              return (
                _i_("843:622e9631"),
                void 0 !== e &&
                  ((t.get(0).checked = e),
                  t
                    .parent(".wl-dropdown-item")
                    .toggleClass("wl-dropdown-item--added", e)),
                _r_(t.get(0).checked)
              );
            },
            toggleListLink: function (t, e) {
              _i_("843:3f38a2a0"),
                t.find(".wl-dropdown-link-wrapper").toggleClass("g-hidden", !e),
                this.root().css(this._position()),
                _r_();
            },
            toggleList: function (e) {
              _i_("843:2d2e9949");
              var i = this,
                n = e.find(".js-wl-dropdown-item-checkbox");
              if (
                (this.trackGA("editHotel", {
                  hotelId: this.params.hotel_id,
                  state: Number(i.checked(n)),
                }),
                1 === Number(i.checked(n)))
              ) {
                var t = { hotel: 2, searchresults: 3 }[B.env.b_action];
                u.customGoal("aDMWRfDSdWUUHfLebbMEXO", t),
                  u.stage("aDMWRfDSdWUUHfLebbMEXO", 2),
                  u.customGoal("aDMWRfDSdWUUHfLebbMEXO", 1);
              }
              var r = {
                lists: String(n.attr("data-list-id")),
                hotel_id: i.params.hotel_id,
                new_state: Number(i.checked(n)),
                single_selection_exp: 1,
              };
              if (
                1 === Number(i.checked(n)) &&
                B.et.track("aDMWRfDSdWUUHfLebbMPAFFLKZLXJOfAdIUFZZcO")
              ) {
                var s = "",
                  _ = null,
                  a = null;
                (B.env.b_occupancy || B.env.b_occupancy.adults) &&
                  (_ = B.env.b_occupancy.adults),
                  (B.env.b_group || B.env.b_group.length) &&
                    ((s = (
                      B.env.b_group[0].children_ages || B.env.b_group[0].ages
                    )
                      .map(function (t) {
                        return _i_("843:db4a75d02"), _r_(t.age || t);
                      })
                      .join(",")),
                    (a = B.env.b_group[0].ages.length)),
                  (r = Object.assign(r, {
                    checkin: B.env.b_checkin_date,
                    checkout: B.env.b_checkout_date,
                    rooms: B.env.b_nr_rooms_wanted || null,
                    adults: _,
                    childrenAges: s,
                    children: a,
                  }));
              }
              h.customGoal("toggleList"),
                l.editHotel(r).then(
                  function () {
                    _i_("843:61c1ff7b");
                    var t = i.checked(n);
                    i.toggleListLink(e, t),
                      i.toggleSavedToMessage(),
                      i.hideInlineLoader(),
                      _r_();
                  },
                  function () {
                    _i_("843:e03d1e82"), h.customGoal("receiveResError"), _r_();
                  }
                ),
                _r_();
            },
            trackGA: function (t, e) {
              _i_("843:eb916bbf"),
                "editHotel" === t
                  ? e.state
                    ? a.trackSaveToWishlist(e.hotelId)
                    : a.trackRemoveFromWishlist(e.hotelId)
                  : "createList" === t
                  ? a.trackCreateList(e.hotelId)
                  : "goToList" === t && a.trackGoToWishlist(e.hotelId),
                _r_();
            },
            toggleSavedToMessage: function () {
              _i_("843:78bfc95d"),
                this.root()
                  .find(".wl-dropdown-saved-to-message")
                  .hide({
                    duration: 100,
                    step: function () {
                      _i_("843:e4b401f2"),
                        this.root().css(this._position()),
                        _r_();
                    }.bind(this),
                  }),
                _r_();
            },
            loading: function (t, e) {
              _i_("843:7881e5e5"),
                this.root()
                  .find("[data-list-id=" + (e || '""') + "]")
                  .parent()
                  .toggleClass("wl-dropdown-item_loading", t),
                B.env.fe_wl_sr_saw_dropdow
                  ? this.handle().toggleClass("show-loader-animation", t)
                  : this.handle().toggleClass("wl-dropdown-handle_loading", t),
                _r_();
            },
            tmpl: function (t) {
              return (
                _i_("843:cf1a3363"),
                _r_(
                  B.jstmpl("lists_hotel_dropdown").render(
                    o.extend(t, {
                      lists: (function (t) {
                        _i_("843:20f18e63");
                        var e = n();
                        return _r_(
                          o.map(t, function (t) {
                            return (
                              _i_("843:0d3fa9b3"),
                              _r_(
                                o.extend({}, t, {
                                  name: t.name,
                                  lastUsed: t.id == e,
                                })
                              )
                            );
                          })
                        );
                      })(t.lists),
                      b_user_auth_level_is_low_or_high:
                        B.env.b_user_auth_level_is_low_or_high,
                      b_reg_user_wishlist_remaining:
                        B.env.b_reg_user_wishlist_remaining,
                      b_action: B.env.b_action,
                      fe_wl_sr_saw_dropdow: B.env.fe_wl_sr_saw_dropdow,
                      b_is_tdot_traffic: B.env.b_is_tdot_traffic,
                      b_selected_language: B.env.b_selected_language,
                      b_bookings_owned: B.env.b_bookings_owned,
                      fe_comparison_mode: this.comparisonMode,
                      fe_show_saved_message: this.showSavedMessage,
                      b_canonical_url: B.env.b_canonical_url,
                    })
                  )
                )
              );
            },
          },
          s = o.fly.dropdown.extend(t);
        return _r_({
          wlDropdown: s,
          create: function (e) {
            _i_("843:84194bf7"),
              o(".js-wl-dropdown-handle").one("click", function (t) {
                _i_("843:578fa7f0"),
                  s.create(this, e),
                  h.stage("entrypointClicked"),
                  t.delegateTarget.click(),
                  _r_();
              }),
              _r_();
          },
          init: function (t) {
            _i_("843:f31a2adb"), this.create(t), _r_();
          },
          initWithTargets: function (t) {
            _i_("843:9e5d9b49"),
              t.forEach(function (t) {
                _i_("843:5d20144c"), s.create(t), _r_();
              }),
              _r_();
          },
        });
      })()),
        _r_();
    }
  ),
  booking.jstmpl(
    "wishlist_entry_point",
    (function () {
      _i_("843:17691675");
      var f,
        g = [
          "\n        ",
          "\n    ",
          '\n    <button\n        id="wl--',
          '"\n        data-bui-component="',
          '"\n        data-popover-content-id="',
          '"\n        data-wl-hotel-saved="',
          '"\n        data-popover-position="bottom end"\n        data-popover-trigger="click"\n        data-component="wishlist/entrypoint"\n        type="button"\n        data-hotel-id="',
          '"\n        data-list-id="',
          '"\n        data-key="',
          '"\n        data-popover-z-index="modal"\n        data-corner-icon="',
          '"\n        data-bui-button="',
          '"\n        data-bui-button-type="',
          '"\n        data-bui-button-size="',
          '"\n        data-wl-icon-size="',
          '"\n        data-expand-list="',
          '"\n        data-show-text="',
          '"\n        data-placement="hp_title"\n        data-position="',
          '"\n        data-disable-tooltip="',
          '"\n        ',
          '\n        data-title="',
          '\n        data-single-selection="',
          '"\n\n        class="',
          "wl-entrypoint ",
          "bui-button bui-button--",
          " ",
          "bui-button--",
          "corner ",
          "saved_in_wl",
          '"\n\n        aria-label="',
          "/private/a11y_hp_bookmarks_button_saved/name",
          "",
          "/private/a11y_hp_bookmarks_add_to/name",
          '"\n\n        role="button"\n        aria-live="assertive"\n        data-loadingtext="',
          "/private/a11y_hp_bookmarks_loading/name",
          '"\n    >\n        ',
          '\n            <div aria-label="loading" class="bui-spinner',
          " bui-spinner--size-small",
          '" role="alert" aria-busy="true">\n                <div class="bui-spinner__inner"></div>\n            </div>\n        ',
          "\n            ",
          "\n                ",
          "true",
          "sr-wl-entry-heart-svg",
          "false",
          "iconset/heart",
          "presentation",
          "medium",
          "\n                    ",
          "saved",
          "iconset/heart_outline",
          '\n            <span class="wl-entrypoint__btn-text">\n                ',
          "/private/sr_lists_saved_notification/name",
          "/private/lists_add_to_list/name",
          "\n            </span>\n        ",
          '\n    <div\n        id="',
          '"\n        class="bui-card bui-u-hidden"\n    >\n        <div class="bui-card__content">\n            ',
          "\n\n    ",
          '\n        <div class="bui-inline-container bui-inline-container--align">\n            <div class="list-manager__title bui-inline-container__start">\n                ',
          "/private/wl_removed_from/name",
          '\n            </div>\n            <div class="bui-inline-container__main">\n                ',
          '\n        <a\n            class="bui-link bui-link--primary bui_font_body js-open-list"\n            target="_blank"\n            href="',
          '"\n        >\n            ',
          '\n            <span aria-label="',
          '"></span>\n        </a>\n    ',
          "\n            </div>\n        </div>\n    ",
          '\n        <span class="list-manager__title">\n            ',
          '\n        </span>\n        <ul class="bui-list bui-list--unordered list-manager__removed-list">\n            ',
          '\n                <li class="bui-list__item list-manager__removed-item">\n                    ',
          "\n                </li>\n            ",
          "\n        </ul>\n    ",
          "\n",
          '\n    <div class="list-manager__loading',
          " list-manager__loading-mask",
          '">\n        <div aria-label="Loading" class="bui-spinner" role="alert" aria-busy="true">\n            <div class="bui-spinner__inner"></div>\n        </div>\n    </div>\n',
          '<div class="list-manager__title" aria-hidden="true">\n    ',
          "/private/wl_select_a_list/name",
          '\n                    <a href="',
          '" class="js-open-list list-manager__title--saved" target="_blank">\n                ',
          "/private/wl_saved_to/name",
          "</a>",
          "        \n    ",
          "\n</div>\n",
          '\n    <div class="list-manager__title" aria-hidden="true">\n        ',
          "        \n    </div>\n",
          '\n                    <div class="bui-link bui-link--secondary list-manager__expand-link js-list-manager__expand-link">\n                        <div class="bui-inline-container bui-inline-container--align">\n                            <div class="bui-inline-container__main">\n                                ',
          "/private/wl_lists_funnel_edit/name",
          '\n                            </div>\n                            <div class="bui-inline-container__end">\n                                ',
          "iconset/navarrow_down_bold",
          "small",
          "\n                            </div>\n                        </div>\n                    </div>\n                ",
          "\n                        ",
          '\n                            <div class="',
          "bui-form__group list-manager__lists",
          '"\n                                role="group"\n                            >\n                                <div class="bui-group">\n                                    ',
          "\n                                        ",
          '<label\n    class="bui-radio js-wl-radio"\n    aria-label="',
          '"\n    data-list-id="',
          '"\n>\n    <input\n        type="radio"\n        class="bui-radio__input"\n        ',
          'checked="checked"',
          '\n    />\n\n    <span class="bui-radio__label">\n        <span class="list-manager__list-name">\n            ',
          "\n        </span>\n        ",
          '\n            <span class="list-manager_view-link-wrapper">\n                <a\n                    class="js-open-list"\n                    target="_blank"\n                    href="',
          '"\n                    aria-describedby="wl_checkbox_label_',
          '"\n                >\n                    ',
          "/private/wl_view_list/name",
          '\n                    <span aria-label="',
          '"></span>\n                </a>\n            </span>\n        ',
          "\n    </span>\n</label>\n",
          "\n                                    ",
          "\n\n",
          '\n\n<div class="list-manager__input-wrapper',
          " bui-has-error",
          '">\n    ',
          '\n    <label class="bui-radio list-manager__input-create js-list-manager__input-create">\n        <input\n            type="radio"\n            name="radio"\n            ',
          'disabled=""',
          '\n            class="bui-radio__input"\n            aria-hidden="true"\n        />\n        <span class="bui-radio__label">\n            ',
          "/private/wl_new_list/name",
          "\n        </span>\n    </label>\n",
          '\n    <div class="bui-input-text__content"\n        data-bui-tooltip\n        data-bui-component="',
          "Tooltip",
          '"\n        data-tooltip-position="bottom"\n        data-tooltip-z-index="modal"\n        title="',
          "/private/wl_lists_max_tooltip/name",
          '"\n        aria-label="',
          '"\n    >\n        <div class="bui-input-text__field">\n            <input\n                type="text"\n                ',
          "disabled",
          '\n                class="bui-input-text__control js-wl-create-input"\n                value="',
          '"\n                placeholder="',
          '"\n                aria-label="',
          "/private/a11y_hp_bookmarks_name_new/name",
          '"\n            />\n            <div class="bui-input-text__decorator"></div>\n            ',
          '\n                <div class="bui-input-text__side">\n                    <span class="bui-icon bui-icon--medium bui-icon--color-destructive">\n                        <svg viewBox="0 0 24 24" width="1em" height="1em" iconset="streamline" name="Warning" focusable="false" aria-hidden="true">\n                            <path d="M12 15.75A1.125 1.125 0 1 0 12 18a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm.75-2.25V5.25a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>\n                        </svg>\n                    </span>\n                </div>\n            ',
          "\n        </div>\n    </div>\n",
          '\n    <label class="bui-checkbox js-wl-checkbox list-manager__input-create js-list-manager__input-create',
          " bui-checkout__loading",
          '">\n        <input\n            type="checkbox"\n            name="create"\n            ',
          '\n            class="bui-checkbox__input"\n            aria-hidden="true"\n        />\n        <span class="bui-checkbox__label">\n            ',
          '\n                <div aria-label="Label" class="bui-spinner bui-spinner--size-small" role="alert" aria-busy="true">\n                    <div class="bui-spinner__inner"></div>\n                </div>\n            ',
          "\n    \n    ",
          '\n        <div class="bui-form__error">\n            ',
          "/private/wl_lists_create_failed/name",
          "\n        </div>\n    ",
          "\n</div>",
          "\n                                </div>\n                            </div>\n                            ",
          "\n                                ",
          "\n                            ",
          '\n                        <div class="',
          '"\n                            role="group"\n                        >\n                            <div class="bui-group">\n                                ',
          '<label\n    class="bui-checkbox js-wl-checkbox',
          '"\n    aria-label="',
          '"\n>\n    <input\n        type="checkbox"\n        class="bui-checkbox__input"\n        ',
          '\n    />\n    <span class="bui-checkbox__label">\n        ',
          '\n            <div aria-label="Label" class="bui-spinner bui-spinner--size-small" role="alert" aria-busy="true">\n                <div class="bui-spinner__inner"></div>\n            </div>\n        ',
          '\n        <span class="list-manager__list-name">\n            ',
          "\n    </span>\n</label>",
          "\n                            </div>\n                        </div>\n                        ",
          "\n    </button>\n",
        ],
        v = [
          "wl_popover_content_id",
          "component_id",
          "wl_hotel_saved",
          "hotel_id",
          "wl_list_id",
          "wl_popover_key",
          "wl_corner_icon",
          "bui_button",
          "bui_button_type",
          "bui_button_size",
          "wl_icon_size",
          "wl_expand_list",
          "show_text",
          "b_lang_is_rtl",
          "wl_disable_tooltip",
          "wl_entrypoint_title",
          "wl_single_selection",
          "fe_hotel_wishlists_count",
          "listsCount",
          "wl_entrypoint_loading",
          "wl_lists",
          "url",
          "list_name",
          "name",
          "wl_expand_before_save",
          "wl_list_toggled",
          "wl_submitting",
          "wl_loading_list",
          "b_user_auth_level_is_low_or_high",
          "wl_list_expanded",
          "fe_wl_list_start_link",
          "fe_wl_list_link",
          "id",
          "selected",
          "wl_error_when_creating",
          "wl_new_list_input_disabled",
          "wl_remaining",
          "wl_new_list_name",
          "input_placeholder",
          "wl_new_list_hint",
          "wl_list_loading_status",
          "wishlist_create_new",
          "b_reg_user_wishlist_remaining",
          "b_action",
          "b_site_type",
        ];
      return _r_(function (l) {
        _i_("843:ba843692");
        var t,
          e,
          i = "",
          d = this.fn;
        function c(t) {
          return (
            _i_("843:3dfb2d67"),
            (t += g[108]),
            (t += g[108]),
            (t += g[109]),
            d.MD(v[34]) && (t += g[110]),
            (t += g[111]),
            d.MD(v[16])
              ? ((t = (function (t) {
                  _i_("843:df8cbcc1"),
                    (t += g[112]),
                    d.MD(v[35]) && (t += g[113]);
                  return (
                    (t += [g[114], d.ME(g[115], d.MB, d.MN, null), g[116]].join(
                      ""
                    )),
                    _r_(t)
                  );
                })((t += g[0]))),
                (t += g[0]),
                l.unshift({ input_placeholder: d.MB(v[39]) }),
                (t = n(t)),
                l.shift())
              : (t = (function (t) {
                  _i_("843:76c3854e"),
                    (t += g[131]),
                    d.MJ(d.MG((d.MC(v[40]) || {}).newList)) && (t += g[132]);
                  (t += g[133]), d.MD(v[35]) && (t += g[113]);
                  (t += g[134]),
                    d.MJ(d.MG((d.MC(v[40]) || {}).newList)) && (t += g[135]);
                  return (
                    (t += g[38]),
                    l.unshift({ input_placeholder: d.MB(v[41]) }),
                    (t = n(t)),
                    l.shift(),
                    (t += g[116]),
                    _r_(t)
                  );
                })((t += g[0]))),
            (t += g[1]),
            (t += g[136]),
            d.MD(v[34]) &&
              (t += [g[137], d.ME(g[138], d.MB, d.MN, null), g[139]].join("")),
            (t += g[140]),
            _r_(t)
          );
        }
        function u(t) {
          return (
            _i_("843:5e086ca1"),
            (t += g[108]),
            (t += g[108]),
            (t += g[109]),
            d.MD(v[34]) && (t += g[110]),
            (t += g[111]),
            d.MD(v[16])
              ? ((t = (function (t) {
                  _i_("843:1c4c31cb"),
                    (t += g[112]),
                    d.MD(v[35]) && (t += g[113]);
                  return (
                    (t += [g[114], d.ME(g[115], d.MB, d.MN, null), g[116]].join(
                      ""
                    )),
                    _r_(t)
                  );
                })((t += g[0]))),
                (t += g[0]),
                l.unshift({ input_placeholder: d.MB(v[39]) }),
                (t = r(t)),
                l.shift())
              : (t = (function (t) {
                  _i_("843:72de7d95"),
                    (t += g[131]),
                    d.MJ(d.MG((d.MC(v[40]) || {}).newList)) && (t += g[132]);
                  (t += g[133]), d.MD(v[35]) && (t += g[113]);
                  (t += g[134]),
                    d.MJ(d.MG((d.MC(v[40]) || {}).newList)) && (t += g[135]);
                  return (
                    (t += g[38]),
                    l.unshift({ input_placeholder: d.MB(v[41]) }),
                    (t = r(t)),
                    l.shift(),
                    (t += g[116]),
                    _r_(t)
                  );
                })((t += g[0]))),
            (t += g[1]),
            (t += g[136]),
            d.MD(v[34]) &&
              (t += [g[137], d.ME(g[138], d.MB, d.MN, null), g[139]].join("")),
            (t += g[140]),
            _r_(t)
          );
        }
        function n(t) {
          return (
            _i_("843:55f2ffa7"),
            (t += g[117]),
            d.MJ(d.MB(v[36]) <= 0) && (t += g[118]),
            (t += g[119]),
            d.MJ(d.MB(v[36]) <= 0) && (t += d.ME(g[120], d.MB, d.MN, null)),
            (t += g[121]),
            d.MJ(d.MB(v[36]) <= 0) && (t += d.ME(g[120], d.MB, d.MN, null)),
            (t += g[122]),
            (d.MJ(d.MB(v[36]) <= 0) || d.MJ(d.MB(v[26]))) && (t += g[123]),
            (t += [
              g[124],
              d.F.entities(d.MC(v[37])),
              g[125],
              d.F.entities(d.MC(v[38])),
              g[126],
              d.ME(g[127], d.MB, d.MN, null),
              g[128],
            ].join("")),
            d.MD(v[34]) && (t += g[129]),
            (t += g[130]),
            _r_(t)
          );
        }
        function r(t) {
          return (
            _i_("843:3cdadbd8"),
            (t += g[117]),
            d.MJ(d.MB(v[36]) <= 0) && (t += g[118]),
            (t += g[119]),
            d.MJ(d.MB(v[36]) <= 0) && (t += d.ME(g[120], d.MB, d.MN, null)),
            (t += g[121]),
            d.MJ(d.MB(v[36]) <= 0) && (t += d.ME(g[120], d.MB, d.MN, null)),
            (t += g[122]),
            (d.MJ(d.MB(v[36]) <= 0) || d.MJ(d.MB(v[26]))) && (t += g[123]),
            (t += [
              g[124],
              d.F.entities(d.MC(v[37])),
              g[125],
              d.F.entities(d.MC(v[38])),
              g[126],
              d.ME(g[127], d.MB, d.MN, null),
              g[128],
            ].join("")),
            d.MD(v[34]) && (t += g[129]),
            (t += g[130]),
            _r_(t)
          );
        }
        function h(t) {
          return (
            _i_("843:766e82b6"),
            (t += [
              g[59],
              d.F.html(d.MB(v[21])),
              g[60],
              d.F.js(d.F.html(d.MC(v[22]))),
              g[61],
              d.F.js(d.F.html(d.MB(v[22]))),
              g[62],
            ].join("")),
            _r_(t)
          );
        }
        return (
          (i += g[0]),
          (t = i),
          _i_("843:514c8363"),
          (e = t += ["", g[1]].join("")),
          _i_("843:e5c4211d"),
          (e += [
            "",
            g[2],
            d.F.entities(d.MC(v[0])),
            g[3],
            d.F.entities(d.MC(v[1])),
            g[4],
            d.F.entities(d.MC(v[0])),
            g[5],
            d.F.entities(d.MC(v[2])),
            g[6],
            d.F.entities(d.MC(v[3])),
            g[7],
            d.F.entities(d.MC(v[4])),
            g[8],
            d.F.entities(d.MC(v[5])),
            g[9],
            d.F.entities(d.MC(v[6])),
            g[10],
            d.F.entities(d.MC(v[7])),
            g[11],
            d.F.entities(d.MC(v[8])),
            g[12],
            d.F.entities(d.MC(v[9])),
            g[13],
            d.F.entities(d.MC(v[10])),
            g[14],
            d.F.entities(d.MC(v[11])),
            g[15],
            d.F.entities(d.MC(v[12])),
            g[16],
            d.F.entities(d.MC(v[13]) ? "bottom left" : "bottom right"),
            g[17],
            d.F.entities(d.MC(v[14])),
            g[18],
          ].join("")),
          d.MK(d.MB(v[14])) &&
            (e += [g[19], d.F.entities(d.MC(v[15])), g[18]].join("")),
          (e += [g[20], d.F.entities(d.MC(v[16])), g[21]].join("")),
          (e += g[22]),
          d.MD(v[7]) &&
            ((e += [g[23], d.F.entities(d.MC(v[8])), g[24]].join("")),
            d.MD(v[9]) &&
              (e += [g[25], d.F.entities(d.MC(v[9])), g[24]].join(""))),
          d.MJ(1 < d.MB(v[6])) && (e += g[26]),
          d.MD(v[10]) && (e += [d.F.entities(d.MC(v[10])), g[24]].join("")),
          d.MD(v[2]) && (e += g[27]),
          (e += g[28]),
          d.MJ(0 < d.MB(v[18]))
            ? (e += [
                (l.unshift({ num_lists: d.MB(v[17]) }),
                (f = d.ME(g[29], d.MB, d.MN, null)),
                l.shift(),
                f),
                g[30],
              ].join(""))
            : (e += [d.ME(g[31], d.MB, d.MN, null), g[24]].join("")),
          (e += [g[32], d.ME(g[33], d.MB, d.MN, null), g[34]].join("")),
          d.MD(v[19])
            ? ((e += g[35]), d.MD(v[10]) && (e += g[36]), (e += g[37]))
            : ((e += g[38]),
              d.MD(v[6])
                ? (e += [
                    g[39],
                    (l.unshift({
                      "aria-hidden": g[40],
                      class: g[41],
                      focusable: g[42],
                      name: g[43],
                      role: g[44],
                      size: g[45],
                    }),
                    (f = d.HELPER("icon", l[0])),
                    l.shift(),
                    f),
                    g[38],
                  ].join(""))
                : ((e += g[39]),
                  d.MD(v[2])
                    ? (e += [
                        g[46],
                        (l.unshift({ class: g[47], name: g[43], size: g[45] }),
                        (f = d.HELPER("icon", l[0])),
                        l.shift(),
                        f),
                        g[39],
                      ].join(""))
                    : (e += [
                        g[46],
                        (l.unshift({
                          color: "#0071C2",
                          name: g[48],
                          size: g[45],
                        }),
                        (f = d.HELPER("icon", l[0])),
                        l.shift(),
                        f),
                        g[39],
                      ].join("")),
                  (e += g[38])),
              (e += g[0])),
          (e += g[0]),
          d.MD(v[12]) &&
            ((e += g[49]),
            d.MD(v[2])
              ? (e += [g[46], d.ME(g[50], d.MB, d.MN, null), g[39]].join(""))
              : (e += [g[46], d.ME(g[51], d.MB, d.MN, null), g[39]].join("")),
            (e += g[52])),
          (e += g[0]),
          d.MJ(d.MC(v[44]) + "" == "www") &&
            ((e = (function (t) {
              if (
                (_i_("843:f654b2c5"),
                (t += ["", g[53], d.F.entities(d.MC(v[0])), g[54]].join("")),
                d.MK(d.MB(v[2]) || d.MB(v[24]) || d.MB(v[25])))
              )
                (t = (function (t) {
                  if (
                    (_i_("843:8ea24128"),
                    (t += ["", g[1]].join("")),
                    (t += g[55]),
                    d.MJ(1 == d.array_length(d.MB(v[20]))))
                  ) {
                    t += [g[56], d.ME(g[57], d.MB, d.MN, null), g[58]].join("");
                    var e = d.MC(v[20]) || [];
                    l.unshift(null);
                    for (var i = 1, n = e.length; i <= n; i++)
                      (l[0] = e[i - 1]),
                        (t += g[46]),
                        l.unshift({ list_name: d.MB(v[23]), url: d.MB(v[21]) }),
                        (t = h(t)),
                        l.shift(),
                        (t += g[39]);
                    l.shift(), (t += g[63]);
                  } else {
                    for (
                      t += [g[64], d.ME(g[57], d.MB, d.MN, null), g[65]].join(
                        ""
                      ),
                        e = d.MC(v[20]) || [],
                        l.unshift(null),
                        i = 1,
                        n = e.length;
                      i <= n;
                      i++
                    )
                      (l[0] = e[i - 1]),
                        (t += g[66]),
                        l.unshift({ list_name: d.MB(v[23]), url: d.MB(v[21]) }),
                        (t = h(t)),
                        l.shift(),
                        (t += g[67]);
                    l.shift(), (t += g[68]);
                  }
                  return (t += [g[69], ""].join("")), _r_(t);
                })((t += g[39]))),
                  (t += g[38]);
              else if (d.MD(v[27]))
                (a = t += g[39]),
                  _i_("843:bda3c773"),
                  (a += ["", g[70]].join("")),
                  d.MD(v[26]) && (a += g[71]),
                  (a += [g[72], ""].join("")),
                  (t = _r_(a)),
                  (t += g[38]);
              else {
                if (
                  ((t += g[39]),
                  (t = d.MD(v[16])
                    ? (function (t) {
                        if (
                          (_i_("843:302e8ecc"),
                          (t += g[73]),
                          d.MJ(d.MC(v[28])) && d.MJ(d.MB(v[29])))
                        )
                          t += [g[0], d.ME(g[74], d.MB, d.MN, null), g[1]].join(
                            ""
                          );
                        else {
                          t += g[0];
                          var e = d.MC(v[20]) || [];
                          l.unshift({ list: null });
                          for (var i, n = 1, r = e.length; n <= r; n++)
                            (l[0].list = i = e[n - 1]),
                              (t += g[38]),
                              d.MJ(d.MG((i || {}).selected)) &&
                                ((t += g[39]),
                                d.MN(
                                  v[30],
                                  [g[75], d.F.html((i || {}).url), g[76]].join(
                                    ""
                                  )
                                ),
                                (t += g[39]),
                                d.MN("fe_wl_list_link", d.MG((i || {}).name)),
                                (t += g[38])),
                              (t += g[0]);
                          l.shift(),
                            (t += [
                              g[0],
                              (l.unshift({
                                end_link: g[78],
                                list_name: d.MB(v[31]),
                                start_link: d.MB(v[30]),
                              }),
                              (f = d.ME(g[77], d.MB, d.MN, null)),
                              l.shift(),
                              f),
                              g[79],
                            ].join(""));
                        }
                        return (t += g[80]), _r_(t);
                      })((t += g[46]))
                    : (function (t) {
                        if (
                          (_i_("843:6b9762d8"),
                          d.MK(d.MB(v[24]) || d.MB(v[25])))
                        ) {
                          t += g[81];
                          var e = d.MC(v[20]) || [];
                          l.unshift({ list: null });
                          for (var i, n = 1, r = e.length; n <= r; n++)
                            (l[0].list = i = e[n - 1]),
                              (t += g[38]),
                              d.MJ(d.MG((i || {}).selected)) &&
                                ((t += g[39]),
                                d.MN(
                                  v[30],
                                  [g[75], d.F.html((i || {}).url), g[76]].join(
                                    ""
                                  )
                                ),
                                (t += g[39]),
                                d.MN(
                                  v[31],
                                  [
                                    g[46],
                                    d.F.js(d.F.html((i || {}).name)),
                                    g[39],
                                  ].join("")
                                ),
                                (t += g[38])),
                              (t += g[0]);
                          l.shift(),
                            (t += [
                              g[0],
                              (l.unshift({
                                end_link: g[78],
                                list_name: d.MB(v[31]),
                                start_link: d.MB(v[30]),
                              }),
                              (f = d.ME(g[77], d.MB, d.MN, null)),
                              l.shift(),
                              f),
                              g[82],
                            ].join(""));
                        }
                        return (t += g[69]), _r_(t);
                      })((t += g[46]))),
                  (t += g[39]),
                  (t += g[39]),
                  d.MJ(d.MC(v[28])) && d.MK(d.MB(v[29])))
                )
                  t += [
                    g[83],
                    d.ME(g[84], d.MB, d.MN, null),
                    g[85],
                    (l.unshift({ color: "#000000", name: g[86], size: g[87] }),
                    (f = d.HELPER("icon", l[0])),
                    l.shift(),
                    f),
                    g[88],
                  ].join("");
                else {
                  if (((t += g[46]), d.MD(v[16]))) {
                    if (((t += g[89]), d.MD(v[28]))) {
                      (t += g[90]), (t += g[91]), (t += g[92]);
                      var e = d.MC(v[20]) || [];
                      l.unshift(null);
                      for (var i = 1, n = e.length; i <= n; i++)
                        (l[0] = e[i - 1]),
                          (_ = t += g[93]),
                          _i_("843:1b6c551e"),
                          (_ += [
                            g[94],
                            d.F.js(d.F.html(d.MC(v[23]))),
                            g[95],
                            d.F.js(d.F.html(d.MC(v[32]))),
                            g[96],
                          ].join("")),
                          d.MD(v[33]) && (_ += g[97]),
                          (_ += [
                            g[98],
                            d.F.js(d.F.html(d.MC(v[23]))),
                            g[99],
                          ].join("")),
                          d.MD(v[33]) &&
                            (_ += [
                              g[100],
                              d.F.html(d.MC(v[21])),
                              g[101],
                              d.F.js(d.F.html(d.MB(v[32]))),
                              g[102],
                              d.ME(g[103], d.MB, d.MN, null),
                              g[104],
                              d.F.js(d.F.html(d.MC(v[23]))),
                              g[105],
                            ].join("")),
                          (_ += g[106]),
                          (t = _r_(_)),
                          (t += g[107]);
                      l.shift(),
                        (t += g[107]),
                        d.MJ(0 < d.MC(v[42])) &&
                          ((t = c((t += g[93]))), (t += g[107])),
                        (t += g[141]),
                        d.MD(v[26]) &&
                          ((s = t += g[142]),
                          _i_("843:9d07d1eb"),
                          (s += ["", g[70]].join("")),
                          d.MD(v[26]) && (s += g[71]),
                          (s += [g[72], ""].join("")),
                          (t = _r_(s)),
                          (t += g[143])),
                        (t += g[89]);
                    }
                    t += g[46];
                  } else {
                    (t += g[144]), (t += g[91]), (t += g[145]);
                    var e = d.MC(v[20]) || [];
                    l.unshift(null);
                    for (var i = 1, n = e.length; i <= n; i++)
                      (l[0] = e[i - 1]),
                        (t += g[107]),
                        (o = t),
                        _i_("843:0bc144df"),
                        (o += g[146]),
                        d.MJ(d.MC(v[40])[d.MB(v[32])]) && (o += g[132]),
                        (o += [
                          g[147],
                          d.F.js(d.F.html(d.MC(v[23]))),
                          g[95],
                          d.F.js(d.F.html(d.MC(v[32]))),
                          g[148],
                        ].join("")),
                        d.MD(v[33]) && (o += g[97]),
                        (o += g[149]),
                        d.MJ(d.MC(v[40])[d.MB(v[32])]) && (o += g[150]),
                        (o += [
                          g[151],
                          d.F.js(d.F.html(d.MC(v[23]))),
                          g[99],
                        ].join("")),
                        d.MJ(d.MB(v[33])) &&
                          d.MJ(d.MC(v[43]) + "" == "hotel") &&
                          (o += [
                            g[100],
                            d.F.html(d.MC(v[21])),
                            g[101],
                            d.F.js(d.F.html(d.MB(v[32]))),
                            g[102],
                            d.ME(g[103], d.MB, d.MN, null),
                            g[104],
                            d.F.js(d.F.html(d.MC(v[23]))),
                            g[105],
                          ].join("")),
                        (o += g[152]),
                        (t = _r_(o)),
                        (t += g[142]);
                    l.shift(),
                      (t += g[142]),
                      d.MJ(d.MC(v[28])) &&
                        d.MJ(0 < d.MC(v[42])) &&
                        ((t = u((t += g[107]))), (t += g[142])),
                      (t += g[153]),
                      d.MD(v[26]) &&
                        ((r = t += g[143]),
                        _i_("843:3512dfe7"),
                        (r += ["", g[70]].join("")),
                        d.MD(v[26]) && (r += g[71]),
                        (r += [g[72], ""].join("")),
                        (t = _r_(r)),
                        (t += g[89])),
                      (t += g[46]);
                  }
                  t += g[39];
                }
                t += g[38];
              }
              var r, s, _, a, o;
              return (t += [g[130], "", g[69]].join("")), _r_(t);
            })((e += g[38]))),
            (e += g[0])),
          (e += [g[154], ""].join("")),
          (t = _r_(e)),
          (t += [g[69], ""].join("")),
          (i = _r_(t)),
          (i += g[1]),
          _r_(i)
        );
      });
    })()
  ),
  booking.jstmpl(
    "wishlist_savers",
    (function () {
      _i_("843:2be2ecc5");
      var r,
        s = [
          "\n        ",
          '\n    <p\n        class="hp-lists-counter wishlist-social-count',
          " g-hidden",
          '"\n        data-component="wishlist/savers"\n        data-wl-hotel-saved="',
          '"\n        data-hotel-id="',
          '"\n        data-hotel-count="',
          '"\n    >\n        ',
          "\n            ",
          "\n                ",
          "/private/wish_lists_be_first/name",
          "/private/lists_added_to_x_lists/name",
          "/private/wish_lists_be_almost_first/name",
          "\n    </p>\n",
          "\n    ",
        ],
        _ = ["wl_hotel_saved", "hotel_id", "b_wishlists_hotel_count"];
      return _r_(function (t) {
        _i_("843:9be4e43d");
        var e,
          i = "",
          n = this.fn;
        return (
          (i += s[0]),
          (e = i),
          _i_("843:247adc96"),
          (e += ["", s[1]].join("")),
          n.MD(_[0]) && (e += s[2]),
          (e += [
            s[3],
            n.F.entities(n.MC(_[0])),
            s[4],
            n.F.entities(n.MC(_[1])),
            s[5],
            n.F.entities(n.MC(_[2])),
            s[6],
          ].join("")),
          n.MD(_[0]) ||
            ((e += s[7]),
            n.MJ(0 == n.MC(_[2]))
              ? (e += [s[8], n.ME(s[9], n.MB, n.MN, null), s[7]].join(""))
              : n.MJ(10 <= n.MC(_[2]))
              ? (e += [
                  s[8],
                  (t.unshift({ num_wishlists_16: n.MC(_[2]) }),
                  (r = n.ME(s[10], n.MB, n.MN, null)),
                  t.shift(),
                  r),
                  s[7],
                ].join(""))
              : (e += [s[8], n.ME(s[11], n.MB, n.MN, null), s[7]].join("")),
            (e += s[0])),
          (e += [s[12], ""].join("")),
          (i = _r_(e)),
          (i += s[13]),
          _r_(i)
        );
      });
    })()
  ),
  B.define("lists/lists-api-legacy", function (t, e, i) {
    _i_("843:edf74453");
    var a = t("jquery"),
      o = t("promise"),
      l = {},
      d = {
        EDIT: "wl:edit",
        FETCH: "wl:fetch",
        CREATE: "wl:create",
        REMOVE: "wl:remove",
        EDITHOTEL: "wl:edithotel",
        EDITHOTELSTART: "wl:edithotelstart",
        EDITHOTELS: "wl:edithotels",
        EDITHOTELSSTART: "wl:edithotelsstart",
        LOADINGSTART: "wl:loadingstart",
        LOADINGEND: "wl:loadingend",
      },
      c = {
        hotel: "hp_header",
        searchresults: "sr_list",
        mywishlist: "wishlist",
      };
    function n(t, n, e) {
      _i_("843:fcaf146b"),
        (n = (function (t) {
          _i_("843:da99af35");
          var e = B.env.b_action,
            i = "www" === B.env.b_site_type,
            n = c[e] || "";
          return _r_(
            a.extend(t || {}, {
              source: i ? n : "",
              aid: booking.env.b_aid,
              lang: booking.env.b_lang_for_url,
              sid: booking.env.b_sid,
              stype: booking.env.b_site_type_id,
              stid: booking.env.b_stid,
              label: booking.env.b_label,
              currency: B.env.b_selected_currency,
            })
          );
        })(n));
      var i = (e = e || {}).noCache,
        r = e.noErrorCode;
      if (!i) {
        var s = t + a.param(n);
        if (s in l) return _r_(l[s]);
      }
      u(d.LOADINGSTART, { params: n });
      var _ = new o(function (e, i) {
        _i_("843:88ba6750"),
          a.ajax({
            type: "POST",
            url: t,
            data: n,
            success: function (t) {
              if ((_i_("843:a6f00409"), !((t && t.success) || r)))
                return delete l[s], _r_(i("server error"));
              return _r_(e({ params: n, result: t }));
            },
            error: function (t) {
              return _i_("843:bc9f0fc3"), delete l[s], _r_(i(t));
            },
            complete: function () {
              _i_("843:449827e7"), u(d.LOADINGEND, { params: n }), _r_();
            },
          }),
          _r_();
      });
      return i || (l[s] = _), _r_(_);
    }
    function u(t, e) {
      return _i_("843:14982cfe"), B.eventEmitter.trigger(t, e), _r_(e);
    }
    function r(t) {
      _i_("843:e5d0874b");
      var e = "creation_timestamp",
        n = ["is_collaborated", "privacy", "selected"];
      a.each(t, function (t, i) {
        _i_("843:fe6dfd1e"),
          a.each(n, function (t, e) {
            _i_("843:001bb250"),
              e in i && (i[e] = Boolean(Number(i[e]))),
              _r_();
          }),
          e in i && (i.is_new = 1e3 * i[e] > new Date() - 864e5),
          _r_();
      }),
        _r_();
    }
    (i.exports = {
      init: function () {},
      EVENTS: d,
      TYPE: { RECENTLY_VIEWED: 3 },
      edit: function () {},
      lists: {},
      getHotelLists: function (t) {
        return _i_("843:8504519f"), _r_(this.lists[t] || []);
      },
      getListById: function (t, e) {
        _i_("843:55506ce2");
        for (var i = this.getHotelLists(t), n = 0; n < i.length; n++) {
          var r = i[n];
          if (r.id == e) return _r_(r);
        }
        return _r_(null);
      },
      updateLists: function (i, n) {
        if ((_i_("843:2a18ecee"), !i || !i.params)) return _r_();
        var r = this;
        i.params.lists.split(",").forEach(function (t) {
          _i_("843:2d1f76ed");
          var e = r.getListById(n, t);
          e && (e.selected = 1 == i.params.new_state), _r_();
        }),
          _r_();
      },
      addList: function (t, e) {
        if ((_i_("843:d480fad7"), !t || !t.id)) return _r_();
        for (var i in this.lists) {
          if (this.lists.hasOwnProperty(i))
            this.lists[i].push(
              a.extend({ hotels_count: 1, selected: i === e }, t)
            );
        }
        _r_();
      },
      fetch: function (e) {
        return (
          _i_("843:2bdb7d4f"),
          _r_(
            n("/wishlist/get", e).then(
              function (t) {
                return (
                  _i_("843:56665902"),
                  r(t.result.lists),
                  (this.lists[e.hotel_id] = t.result.lists),
                  _r_(u(d.FETCH, t))
                );
              }.bind(this)
            )
          )
        );
      },
      createList: function (t) {
        _i_("843:9b77871c");
        var e = this;
        return (
          this.clearCache(),
          _r_(
            n("/wishlist/create", t).then(function (t) {
              return (
                _i_("843:36ad0e89"), r([t.result]), e.addList(t.result), _r_(t)
              );
            })
          )
        );
      },
      create: function (e) {
        return (
          _i_("843:866f206f"),
          this.clearCache(),
          _r_(
            n("/wishlist/create", e).then(
              function (i) {
                if (
                  (_i_("843:422ac807"),
                  r([i.result]),
                  this.addList(i.result, e.hotel_id),
                  "string" == typeof e.hotel_ids)
                ) {
                  var t = e.hotel_ids.split(",");
                  a.each(t, function (t, e) {
                    _i_("843:28416e12"),
                      u(d.EDITHOTEL, {
                        params: a.extend(
                          { hotel_id: e, lists: i.result.id },
                          i.params
                        ),
                        result: i.result,
                      }),
                      _r_();
                  });
                }
                return _r_(u(d.CREATE, i));
              }.bind(this)
            )
          )
        );
      },
      renameList: function (t) {
        return (
          _i_("843:853caa31"), this.clearCache(), _r_(n("/wishlist/update", t))
        );
      },
      removeList: function (t) {
        return (
          _i_("843:9164debb"), this.clearCache(), _r_(n("/wishlist/delete", t))
        );
      },
      editHotels: function (t) {
        _i_("843:bc8f37fb"), this.clearCache(), u(d.EDITHOTELSSTART, t);
        var e = t.hotel_ids,
          i = new Array(e.length + 1).join("1").split("");
        return (
          a.isArray(e) && (t.hotel_ids = e.join(",")),
          _r_(
            n(
              "/wishlist/save_hotels",
              a.extend({ new_states: i.join(",") }, t)
            ).then(function (i) {
              return (
                _i_("843:ee3861a2"),
                a.each(e, function (t, e) {
                  _i_("843:9ee2b61a"),
                    u(d.EDITHOTELS, {
                      params: a.extend({ hotel_id: e }, i.params),
                      result: i.result,
                    }),
                    _r_();
                }),
                _r_(i)
              );
            })
          )
        );
      },
      switchList: function (i) {
        return (
          _i_("843:c7bf69b8"),
          this.clearCache(),
          _r_(
            n("/wishlist/save_hotel", i).then(
              function (t) {
                if ((_i_("843:735314eb"), !t || !t.params)) return _r_();
                var r = this,
                  s = i.hotel_id,
                  e = i.new_state.split(","),
                  _ = i.lists.split(",");
                return (
                  e.forEach(function (t, e) {
                    _i_("843:c9034521");
                    var i = _[e],
                      n = r.getListById(s, i);
                    n && (n.selected = !!+t), _r_();
                  }),
                  _r_(this.getHotelLists(s))
                );
              }.bind(this)
            )
          )
        );
      },
      editHotel: function (e) {
        return (
          _i_("843:06fa8621"),
          this.clearCache(),
          u(d.EDITHOTELSTART, e),
          _r_(
            n("/wishlist/save_hotel", e).then(
              function (t) {
                return (
                  _i_("843:7f0e2ac5"),
                  this.updateLists(t, e.hotel_id),
                  _r_(u(d.EDITHOTEL, t))
                );
              }.bind(this)
            )
          )
        );
      },
      getAvailability: function (t) {
        return (
          _i_("843:bb6d284c"),
          _r_(
            n("/wishlist/get_or_update_wishlist_hotels_dates", t, {
              noCache: !0,
              noErrorCode: !0,
            }).then(
              function (t) {
                return _i_("843:d3b76cd6"), _r_(t.result);
              }.bind(this)
            )
          )
        );
      },
      clearCache: function () {
        _i_("843:2766d5f5"), (l = {}), _r_();
      },
      bind: function (t, e, i) {
        _i_("843:a092e0ae"),
          B.eventEmitter.bind(t, function () {
            _i_("843:4dc0d951"), e.apply(i, arguments), _r_();
          }),
          _r_();
      },
    }),
      _r_();
  }),
  B.define("component/wishlist/tracking", function (t, e, i) {
    "use strict";
    _i_("843:7a2f224b");
    var r,
      n = t("server-data"),
      a = n.b_site_type,
      s = n.b_action,
      o = {
        www: [
          {
            name: "desktop_wishlist_entry_point_refactoring",
            hash: "EUXPNMHfLebbMHSWedNDeQfYUXVaKBIecO",
            condition: function () {
              return (
                _i_("843:711f77ba"),
                _r_(
                  !B.env.b_sr_replatforming_holdout &&
                    ("hotel" === s || "searchresults" === s)
                )
              );
            },
            customGoals: {
              saveHotel: 1,
              removeHotel: 2,
              toggleList: 3,
              createList: 4,
              receiveResError: 5,
            },
            stages: {
              loggedInUser: 1,
              nonLoggedInUser: 2,
              searchresults: 3,
              hotel: 4,
              entrypointClicked: 5,
              popoverMouseEnter: 6,
            },
          },
        ],
        mdot: [],
      },
      _ = {
        listPage: {
          name: "wl_list_page_interaction",
          condition: function () {
            return (
              _i_("843:d3f72d59"),
              _r_(
                "mdot" === a && ("mywishlist" === s || "show_wishlists" === s)
              )
            );
          },
        },
        detailPage: {
          name: "wl_detail_page_interaction",
          condition: function () {
            return (
              _i_("843:3fb650e2"),
              _r_("mywishlist" === s || "show_wishlists" === s)
            );
          },
        },
        updateSearchConfig: {
          name: "wl_update_search_config",
          condition: function () {
            return _i_("843:d1596889"), _r_("www" === a && "mywishlist" === s);
          },
        },
        shareList: { name: "wl_share_wishlist_web" },
        wishlistReturns: { name: "wl_returns_web" },
      },
      l = (function (e) {
        _i_("843:59e55152");
        var t = o[a];
        if (t && t.length) {
          var i = (function (t, e) {
            if (
              (_i_("843:9a652f88"),
              t instanceof Array && "function" == typeof e)
            )
              for (var i = t.length, n = 0; n < i; ) {
                var r = t[n];
                if (e(r, n, t)) return _r_(r);
                n++;
              }
            return _r_(void 0);
          })(t, function (t) {
            return _i_("843:7367d36f"), _r_(t.name === e);
          });
          if (i) {
            var n = i.hash,
              r = i.customGoals,
              s = i.condition,
              _ = i.stages;
            return _r_({
              getHash: function () {
                return _i_("843:0d692c1c"), _r_(n);
              },
              customGoal: function (t) {
                if ((_i_("843:342f0364"), s && !s())) return _r_();
                r && r[t] && B.et.customGoal(n, r[t]), _r_();
              },
              track: function () {
                if ((_i_("843:2e814938"), s && !s())) return _r_();
                return _r_(B.et.track(n));
              },
              isAllowed: function () {
                return _i_("843:ab7507a3"), _r_(!s || (s && s()));
              },
              stage: function (t) {
                if ((_i_("843:b8aa967e"), s && !s())) return _r_();
                if (_ && t && _[t]) {
                  var e = _[t];
                  B.et.stage(n, e);
                }
                _r_();
              },
            });
          }
        }
        return _r_({
          getHash: function () {
            return _i_("843:29517791"), _r_(null);
          },
          customGoal: function () {
            return _i_("843:dcc2d86f"), _r_(null);
          },
          track: function () {
            return _i_("843:37aed5b7"), _r_(null);
          },
          isAllowed: function () {
            return _i_("843:98a47ccb"), _r_(!1);
          },
          stage: function () {
            return _i_("843:fef99b7b"), _r_(null);
          },
        });
      })("desktop_wishlist_entry_point_refactoring"),
      d =
        ((r = _),
        _i_("843:a9de068e"),
        _r_({
          customGoal: function (t) {
            _i_("843:e5d8d220");
            var e = r[t];
            if (e) {
              var i = e.condition,
                n = e.name;
              if (!i || (i && i())) return _r_(B.et.goal(n));
            }
            _r_();
          },
        }));
    (i.exports = { expDesktopEntryPointRefactoring: l, expPageInteraction: d }),
      _r_();
  }),
  B.define("component/wishlist/utils", function (t, e, i) {
    "use strict";
    _i_("843:ca45e82b");
    var n = t("server-data"),
      u = t("jquery"),
      h = n.b_query_params_delimiter,
      r = {
        hotel: {
          openLink: "ZQafLebbMTSDSC",
          createList: "bYDXYFdKMDNdEPUUBYT",
        },
        searchresults: {
          openLink: "ZQafLebbMTSWYO",
          createList: "bYDXYFdKMDNdEPUUORe",
        },
        mywishlist: {
          viewSharedList: "IBZfWUFOJFIdOccPDNYPYKDcdC",
          register: "bESVCHAHNfUUIEC",
          signIn: "bEDcVDDNYVHO",
          updateDates: "BMRDfUFFdJfNWOOFBfC",
          updateGroup: "BMRDfUFFdJbRSdSSZRe",
          switchList: "YRCOMIIdOccPDbVT",
          renameList: "XMCDbMTSRDXe",
          deleteList: "EHMeGdEPUUIEC",
          createList: "bYDXYFdKMDNdEPUUIEC",
          shareList: "OcHeKMDNdEWe",
          searchFromEmptyList: "bESBbQAFfTFfFFdEWe",
        },
      },
      f = function (t, e, i) {
        _i_("843:dd035804"), (e = e || "&"), (i = i || "=");
        var n = [];
        for (var r in t) t.hasOwnProperty(r) && n.push(r + i + t[r]);
        return _r_(n.join(e));
      };
    (i.exports = {
      sendSqueak: function (t, e) {
        if ((_i_("843:44147f46"), !r[t] || !r[t][e])) return _r_();
        return _r_(B.squeak(r[t][e]));
      },
      getActiveWishlist: function (t) {
        _i_("843:b4e9b620");
        var e = [];
        for (var i in t)
          if (t.hasOwnProperty(i)) {
            var n = t[i];
            n.selected && e.push(n);
          }
        return _r_(e);
      },
      getWishlistNames: function (t) {
        return (
          _i_("843:11e0a57a"),
          _r_(
            t.map(function (t) {
              return _i_("843:b41b3979"), _r_(t.name);
            })
          )
        );
      },
      getLastUsedId: function () {
        _i_("843:5770ab34");
        var t = n.b_reg_user_last_used_wishlist;
        if (t && t[0]) return _r_(t[0].b_reg_user_detail_list_id);
        return _r_(null);
      },
      genEntryPointTooltipTitle: function (t) {
        return (
          _i_("843:c2a9678c"),
          _r_(
            t
              ? B.jstmpl.translations("a11y_hp_bookmarks_button_saved", t, {
                  num_lists: t,
                })
              : B.jstmpl.translations("cdm_hp_quick_share_save")
          )
        );
      },
      insertCSS: function (t) {
        _i_("843:940884e4");
        var e = "#".concat(
            t,
            " {\n            -webkit-animation-name: wl-popover-enter-bottom;\n            animation-name: wl-popover-enter-bottom;\n            -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n        }"
          ),
          i = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        i.appendChild(n),
          (n.type = "text/css"),
          n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e)),
          _r_();
      },
      stringifyUrl: f,
      genSearchConfigQuery: function (t, e) {
        _i_("843:2cf4394e");
        var i = t.url,
          n = e.checkin,
          r = e.checkout,
          s = e.adults,
          _ = e.rooms,
          a = e.children,
          o = e.childrenAges,
          l = [],
          d = i.split("#"),
          c =
            t.availability &&
            t.availability.availability_irene &&
            t.availability.availability_irene.highlighted_blocks;
        return (
          e &&
            !u.isEmptyObject(e) &&
            (n && r && l.push(f({ checkin: n, checkout: r }, h)),
            o &&
              (l = (l = l.concat(
                o.map(function (t) {
                  return _i_("843:4d32269c"), _r_(f({ age: t }, h));
                })
              )).concat(
                o.map(function (t) {
                  return _i_("843:072ea98b"), _r_(f({ req_age: t }, h));
                })
              )),
            c && (l = l.concat(f({ highlighted_blocks: c }, h))),
            (l = l.concat(
              f(
                {
                  group_rooms: _,
                  group_adults: s,
                  group_children: a,
                  no_rooms: _,
                  req_adults: s,
                  req_children: a,
                },
                h
              )
            ))),
          _r_(d[0] + h + l.join(h) + (d[1] ? "#" + d[1] : ""))
        );
      },
      genSearchConfigQueryDeprecated: function (t, e) {
        _i_("843:f0a70766");
        var i = t.url,
          n = t.availability || {},
          r = [],
          s = i.split("#"),
          _ = n.checkin,
          a = n.checkout;
        if (
          ((_ = _ || B.search.dates("checkin").toString()),
          (a = a || B.search.dates("checkout").toString()),
          _ && a && r.push(f({ checkin: _, checkout: a }, h)),
          e && !u.isEmptyObject(e))
        ) {
          var o = e.childrenAges,
            l = e.rooms,
            d = e.adults,
            c = e.children;
          o &&
            (r = (r = r.concat(
              o.map(function (t) {
                return _i_("843:4d32269c1"), _r_(f({ age: t }, h));
              })
            )).concat(
              o.map(function (t) {
                return _i_("843:072ea98b1"), _r_(f({ req_age: t }, h));
              })
            )),
            (r = r.concat(
              f(
                {
                  group_rooms: l,
                  group_adults: d,
                  group_children: c,
                  no_rooms: l,
                  req_adults: d,
                  req_children: c,
                },
                h
              )
            ));
        }
        return _r_(s[0] + h + r.join(h) + (s[1] ? "#" + s[1] : ""));
      },
      find: function (t, e) {
        if (
          (_i_("843:9a652f881"), t instanceof Array && "function" == typeof e)
        )
          for (var i = t.length, n = 0; n < i; ) {
            var r = t[n];
            if (e(r, n, t)) return _r_(r);
            n++;
          }
        return _r_(void 0);
      },
      findIndex: function (t, e) {
        if ((_i_("843:efdd28ca"), t instanceof Array && "function" == typeof e))
          for (var i = t.length, n = 0; n < i; ) {
            if (e(t[n], n, t)) return _r_(n);
            n++;
          }
        return _r_(-1);
      },
      fill: function (t, e) {
        _i_("843:802eefd9");
        for (var i = [], n = 0; n < t; n++) i.push(e);
        return _r_(i);
      },
    }),
      _r_();
  }),
  B.define("component/wishlist/service", function (t, e, i) {
    _i_("843:f9398739");
    var s = t("server-data"),
      _ = t("formatting/date"),
      a = t("lists/lists-api-legacy"),
      n = t("component/wishlist/utils"),
      r = n.fill,
      o = n.find,
      l = t("component/wishlist/tracking").expDesktopEntryPointRefactoring,
      d = t("jquery"),
      c = t("promise"),
      u = function (t) {
        return (
          _i_("843:e4d1d798"),
          _r_(
            d.extend(
              {},
              (function (t) {
                if ((_i_("843:bd1968aa"), t && t.length))
                  return _r_({
                    childrenAges: (t[0].children_ages || t[0].ages)
                      .map(function (t) {
                        return (
                          _i_("843:3bb51209"), _r_(void 0 !== t.age ? t.age : t)
                        );
                      })
                      .join(","),
                    children: t[0].ages.length,
                  });
                return _r_({ children: null, childrenAges: "" });
              })(t.b_group),
              {
                rooms: t.b_nr_rooms_wanted || null,
                adults: (t.b_occupancy && t.b_occupancy.adults) || null,
              }
            )
          )
        );
      },
      h = function (t) {
        _i_("843:fc1d42f7");
        var e = t.b_checkin_date,
          i = t.b_checkout_date;
        if (e || i) return _r_({ checkin: e, checkout: i });
        return _r_({});
      },
      f = function (t, e) {
        return _i_("843:784e75fc"), e && e(), _r_(t);
      },
      g = function (t, e) {
        _i_("843:40d2f03c");
        var i = e.hotel_id;
        switch (t) {
          case "get":
          case "update":
          case "delete":
            return _r_(e);
          case "save":
            return _r_(
              f(d.extend(e, u(s), h(s), { new_state: 1 }), function () {
                _i_("843:31def660"), l.customGoal("saveHotel"), _r_();
              })
            );
          case "remove":
            return _r_(
              f(d.extend(e, { new_state: 0 }), function () {
                _i_("843:5ddcf727"), l.customGoal("removeHotel"), _r_();
              })
            );
          case "switch":
            return _r_(d.extend(e, u(s), h(s)));
          case "create":
            return _r_(
              f(d.extend(e, u(s), { use_list_details: 1 }), function () {
                _i_("843:e81e5ca5"), l.customGoal("createList"), _r_();
              })
            );
          case "toggle":
            return _r_(
              f(d.extend(e, u(s), h(s)), function () {
                _i_("843:af1ca61c"), l.customGoal("toggleList"), _r_();
              })
            );
          case "getHotels":
            return _r_(
              d.extend(e, {
                with_hotels: 1,
                include_availability: 1,
                include_list_search_config: 1,
              })
            );
          case "getLists":
            return _r_({ with_hotels: 0, include_availability: 0 });
          case "availability":
            return (
              e.childrenAges &&
                e.childrenAges instanceof Array &&
                (e.childrenAges = e.childrenAges.join(" ")),
              _r_(e)
            );
          case "availabilityDeprecated":
            var n = s.fe_current_date,
              r = d.extend(
                {
                  rooms: B.search.group("rooms"),
                  adults: B.search.group("adults"),
                  children: B.search.group("children"),
                  childrenAges: B.search.group("childrenAges"),
                },
                e,
                {
                  checkin: B.search.dates("checkin").toString() || n,
                  checkout:
                    B.search.dates("checkout").toString() || _.add_days(n, 1),
                }
              );
            return (
              r.childrenAges &&
                r.childrenAges instanceof Array &&
                (r.childrenAges = r.childrenAges.join(" ")),
              _r_(r)
            );
        }
        return _r_({ hotel_id: i, new_state: 1 });
      };
    (i.exports = {
      createList: function (t, e) {
        return (
          _i_("843:89b48bc4"),
          _r_(
            a
              .createList(g("create", { name: t, hotel_id: e }))
              .then(function (t) {
                return _i_("843:547b8aad"), _r_(t.result);
              })
          )
        );
      },
      getList: function (t) {
        return _i_("843:144d6410"), _r_(a.fetch(g("get", { hotel_id: t })));
      },
      getHotelLists: function (t) {
        return _i_("843:a9f71a1b"), _r_(a.getHotelLists(t));
      },
      getCachedList: function (t) {
        _i_("843:e472f6a4");
        var e = a.getHotelLists(t);
        if (e.length) return _r_(c.resolve({ lists: e }));
        return _r_(
          a.fetch(g("get", { hotel_id: t })).then(function (t) {
            return _i_("843:547b8aad1"), _r_(t.result);
          })
        );
      },
      toggleList: function (e, t) {
        _i_("843:4b1e5028");
        var i = o(a.getHotelLists(t), function (t) {
          return _i_("843:fa6938c6"), _r_(e == t.id && t.selected);
        });
        return _r_(
          a.switchList(
            g("toggle", {
              hotel_id: t,
              new_state: String(+!i),
              lists: String(e),
            })
          )
        );
      },
      switchList: function (t, e) {
        _i_("843:38093b43");
        var i = a
          .getHotelLists(e)
          .filter(function (t) {
            return _i_("843:d420c2cb"), _r_(t.selected);
          })
          .map(function (t) {
            return _i_("843:27b13853"), _r_(t.id);
          });
        if (i.length) {
          var n = r(i.length, 0);
          return (
            n.push(1),
            i.push(t),
            _r_(
              a.switchList(
                g("switch", {
                  hotel_id: e,
                  new_state: n.join(","),
                  lists: i.join(","),
                })
              )
            )
          );
        }
        return _r_(
          a.editHotel(
            g("switch", { hotel_id: e, new_state: 1, lists: String(i) })
          )
        );
      },
      save: function (t, e) {
        if ((_i_("843:6c8a3b83"), null !== t))
          return _r_(a.editHotel(g("save", { lists: String(t), hotel_id: e })));
        return _r_(
          a.fetch(g("get", { hotel_id: e })).then(function () {
            _i_("843:06224181");
            var t = a.getHotelLists(e)[0];
            if (t)
              return _r_(
                a.editHotel(g("save", { lists: String(t.id), hotel_id: e }))
              );
            return _r_(c.reject());
          })
        );
      },
      remove: function (t, e) {
        return (
          _i_("843:2719f0c2"),
          _r_(
            a
              .editHotel(g("remove", { hotel_id: t, lists: e }))
              .then(function () {
                return _i_("843:3bb64ad0"), _r_(e);
              })
          )
        );
      },
      removeAll: function (r) {
        return (
          _i_("843:3f7a7a7b"),
          _r_(
            a.fetch(g("get", { hotel_id: r })).then(function (t) {
              _i_("843:e9d5ab42");
              var e = t.result.remaining,
                i = a.getHotelLists(r).filter(function (t) {
                  return _i_("843:203b363b"), _r_(t.selected);
                }),
                n = i
                  .map(function (t) {
                    return _i_("843:3308c8f7"), _r_(String(t.id));
                  })
                  .join(",");
              return _r_(
                a
                  .editHotel(g("remove", { hotel_id: r, lists: n }))
                  .then(function () {
                    return (
                      _i_("843:b82dad21"), _r_({ removed: i, remaining: e })
                    );
                  })
              );
            })
          )
        );
      },
      getHotels: function (t) {
        return (
          _i_("843:57cf0202"),
          _r_(
            a.fetch(g("getHotels", { id: t })).then(
              function (t) {
                _i_("843:c00a47aa");
                var e = t.result;
                if (!e.success) return _r_(c.reject(e));
                var i = e.lists[0];
                return _r_(i);
              },
              function (t) {
                return _i_("843:7f5de410"), _r_(c.reject(t));
              }
            )
          )
        );
      },
      getLists: function () {
        return (
          _i_("843:6c3a7c85"),
          _r_(
            a.fetch(g("getLists", {})).then(function (t) {
              _i_("843:d95981e9");
              var e = t.result;
              if (!e.success) return _r_(c.reject(e));
              return _r_(e);
            })
          )
        );
      },
      getAvailability: function (t) {
        return (
          _i_("843:2b678d48"), _r_(a.getAvailability(g("availability", t)))
        );
      },
      getAvailabilityDeprecated: function (t) {
        return (
          _i_("843:044379bc"),
          _r_(a.getAvailability(g("availabilityDeprecated", t)))
        );
      },
      renameList: function (t) {
        return _i_("843:7058fe0e"), _r_(a.renameList(g("update", t)));
      },
      removeList: function (t) {
        return _i_("843:583075a7"), _r_(a.removeList(g("delete", t)));
      },
      clearCache: function () {
        return _i_("843:b94e1033"), _r_(a.clearCache());
      },
    }),
      _r_();
  }),
  B.define("component/wishlist/entrypoint", function (t, e, i) {
    _i_("843:97197ec2");
    var n = t("component/reactive"),
      r = t("server-data"),
      c = t("jquery"),
      o = r.b_action,
      s = r.b_is_tdot_traffic,
      u = r.b_site_type,
      _ = t("component/wishlist/utils"),
      l = _.sendSqueak,
      h = _.getActiveWishlist,
      f = _.getWishlistNames,
      a = _.getLastUsedId,
      g = _.genEntryPointTooltipTitle,
      d = _.insertCSS,
      v = t("component/wishlist/service"),
      p = v.createList,
      m = v.getList,
      b = v.getHotelLists,
      w = v.getCachedList,
      y = v.switchList,
      k = v.toggleList,
      L = v.save,
      E = v.remove,
      C = v.removeAll,
      M = t("component/wishlist/tracking").expDesktopEntryPointRefactoring,
      D = t("morphdom"),
      S = n.extend({
        template: "wishlist_entry_point",
        initialState: {
          last_used_id: a(),
          b_action: o,
          b_site_type: u,
          b_is_tdot_traffic: s,
          wl_entrypoint_title: 0,
          wl_saved_count: r.b_user_wishlisted_hotels_count,
          wl_hotel_saved: !1,
          wl_expand_before_save: !1,
          wl_list_toggled: !1,
          wl_entrypoint_loading: !1,
          wl_loading_list: !1,
          wl_submitting: !1,
          wl_error_when_creating: !1,
          wl_new_list_input_disabled: !0,
          wl_new_list_name: "",
          wl_disable_tooltip: !1,
          b_user_auth_level_is_low_or_high: r.b_user_auth_level_is_low_or_high,
          b_reg_user_wishlist_remaining: r.b_reg_user_wishlist_remaining,
        },
        initialize: function () {
          _i_("843:92b6d4d1");
          var t = this.getAttr("data-hotel-id"),
            e = this.getAttr("data-key"),
            i = "wl_entrypoint_".concat(e),
            n = +this.getAttr("data-wl-hotel-saved"),
            r = +this.getAttr("data-expand-list"),
            s = this.getAttr("data-disable-tooltip");
          this.setState({
            instances: {},
            wl_lists: [],
            wl_list_loading_status: {},
            wl_popover_content_id: i,
            wl_corner_icon: this.getAttr("data-corner-icon"),
            wl_single_selection: this.getAttr("data-single-selection"),
            wl_disable_tooltip: s,
            wl_entrypoint_title: !s && g(n),
            hotel_id: t,
            wl_list_id: this.getAttr("data-list-id"),
            wl_popover_key: e,
            bui_button: this.getAttr("data-bui-button"),
            bui_button_type: this.getAttr("data-bui-button-type"),
            bui_button_size: this.getAttr("data-bui-button-size"),
            wl_icon_size: this.getAttr("data-wl-icon-size"),
            show_text: +this.getAttr("data-show-text"),
            wl_expand_list: r,
            wl_list_expanded: r,
            wl_hotel_saved: n,
          }),
            this.$el.on("click", this.toggle.bind(this)),
            B.eventEmitter.bind(
              "wl:updateLastUsedId",
              this.updateLastUsedId.bind(this)
            ),
            B.eventEmitter.bind(
              "wl:toggleHotelSavedStatus",
              this.toggleHotelSavedStatus.bind(this)
            ),
            B.eventEmitter.bind("wl:reset", this.destroy.bind(this)),
            r ||
              c(document).on(
                "click.wl",
                "#".concat(i, " .js-list-manager__expand-link"),
                this.expand.bind(this)
              ),
            c(document).on(
              "keyup.wl",
              "#".concat(i, " .js-wl-create-input"),
              this.handleNameUpdate.bind(this)
            ),
            c(document).on(
              "focus.wl",
              "#".concat(i, " .js-wl-create-input"),
              this.handleFocus.bind(this)
            ),
            c(document).on(
              "change.wl",
              "#".concat(i, " .list-manager__lists .js-wl-radio"),
              this.handleSwitch.bind(this)
            ),
            c(document).on(
              "change.wl",
              "#".concat(i, " .list-manager__lists .js-wl-checkbox"),
              this.handleToggle.bind(this)
            ),
            c(document).on(
              "click.wl",
              "#".concat(i, " .js-list-manager__input-create"),
              this.handleClickOnCreate.bind(this)
            ),
            c(document).on(
              "click.wl",
              "#".concat(i, " .js-open-list"),
              function () {
                return _i_("843:918c986d"), _r_(l(o, "openLink"));
              }
            ),
            _r_();
        },
        destroy: function () {
          _i_("843:1415fdfd");
          var t = this.getState().instances,
            e = !1;
          for (var i in t)
            if (t.hasOwnProperty(i) && t[i]) {
              var n = t[i];
              (e = !0), n.close(), n.unmount();
            }
          e && this.setState({ instances: {} }),
            this.$el.off("click"),
            c(document).off("click.wl keyup.wl focus.wl change.wl"),
            B.eventEmitter.unbind(
              "wl:updateLastUsedId",
              this.updateLastUsedId.bind(this)
            ),
            B.eventEmitter.unbind(
              "wl:toggleHotelSavedStatus",
              this.toggleHotelSavedStatus.bind(this)
            ),
            B.eventEmitter.unbind("wl:reset", this.destroy.bind(this)),
            _r_();
        },
        getAttr: function (t) {
          return (
            _i_("843:01195e2a"),
            _r_(this.$el.attr(t) || this.$el.parent().attr(t) || "")
          );
        },
        initToast: function () {
          _i_("843:f2881453");
          var l = this,
            d = window.BUI.createInstance("Toast", null, { duration: 5e3 });
          return (
            (d.update = function () {
              _i_("843:7a1210e0");
              var t = l.getState(),
                e = t.wl_lists,
                i = t.wl_hotel_saved,
                n = t.wl_loading_list;
              if (!e.length) return _r_();
              if (i) {
                if (n) return _r_();
                var r = h(e);
                if (r.length) {
                  var s = r[0],
                    _ = s.name,
                    a = s.url;
                  d.show.call(this, {
                    actionText: "",
                    onActionClick: function () {
                      _i_("843:1dd500ee"), a && window.open(a), _r_();
                    },
                    text: B.jstmpl.translations("m_wl_saved_to", 1, {
                      list_name: _,
                    }),
                  });
                }
                return _r_();
              }
              var o = f(e);
              d.show.call(this, {
                text: B.jstmpl.translations("m_wl_removed_from", o.length, {
                  list_name: o.join(", "),
                }),
              }),
                _r_();
            }),
            (d.close = d.hide),
            _r_(d)
          );
        },
        getInstance: function () {
          _i_("843:d68c63f3");
          var t,
            e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "popover",
            i = this,
            n = this.getState().instances;
          if (n && n[e]) return _r_(n[e]);
          if ("toast" === e) t = this.initToast.call(this);
          else {
            if (
              (this.setState({ component_id: "Popover" }),
              !(t = window.BUI.createInstance("Popover", this.el, {
                onAfterOpen: function () {
                  _i_("843:e97a705c");
                  var t = this;
                  c(this.container).on("mouseenter.hide", function () {
                    _i_("843:60d35f96"),
                      M.stage("popoverMouseEnter"),
                      window.clearTimeout(i.timer),
                      _r_();
                  }),
                    c(this.container).on("mouseleave.hide", function () {
                      _i_("843:cb124133"),
                        window.clearTimeout(i.timer),
                        (i.timer = window.setTimeout(function () {
                          _i_("843:1fba8e12"), t.close(), _r_();
                        }, 3e3)),
                        _r_();
                    }),
                    _r_();
                },
                onAfterClose: function () {
                  _i_("843:6b113070"),
                    window.clearTimeout(i.timer),
                    c(this.container).off("mouseenter.hide"),
                    c(this.container).off("mouseleave.hide"),
                    i.setState({
                      wl_list_expanded: !1,
                      wl_list_loading_status: {},
                    }),
                    this.unmount(),
                    _r_();
                },
              })))
            )
              return _r_();
            (t.update = function () {
              if ((_i_("843:ddceb877"), !this.state.active)) return _r_();
              var t = (this.props || {}).contentId,
                e = t && document.getElementById(t);
              (this.content = e && e.cloneNode(!0)),
                this.content.classList.remove(this.modifiers.hidden);
              var i = this.container.querySelector("#" + t);
              return D(i, this.content), _r_(i);
            }),
              "searchresults" === o && d(t.id),
              this.setState({ component_id: "" });
          }
          return (n[e] = t), this.setState({ instances: n }), _r_(t);
        },
        updateLastUsedId: function (t, e) {
          _i_("843:275be486"), this.setState({ last_used_id: e }), _r_();
        },
        updateListLoadingStatus: function (t, e) {
          _i_("843:0a9d35f1");
          var i = this.getState().wl_list_loading_status;
          (i[t] = e), this.setState({ wl_list_loading_status: i }), _r_();
        },
        toggleHotelSavedStatus: function (t, e) {
          _i_("843:935fe6aa");
          var i = this.getState().hotel_id;
          for (var n in e)
            e.hasOwnProperty(n) &&
              n === i &&
              (this.setState(e[n]), this.$el.data("materialized-id", null));
          _r_();
        },
        expand: function (t) {
          _i_("843:645a1351");
          var e = this.getInstance();
          this.setState({ wl_list_expanded: !0 });
          var i = e.update(),
            n = i && i.querySelector('[data-bui-component="Tooltip"]');
          n && window.BUI.createInstance("Tooltip", n).mount();
          _r_();
        },
        handleSwitch: function (t) {
          _i_("843:2248dc8d");
          var e = this,
            i = c(t.currentTarget),
            n = this.getState(),
            r = n.wl_submitting,
            s = n.hotel_id,
            _ = n.wl_new_list_name,
            a = this.getInstance();
          if (r) return _r_();
          if (i.hasClass("js-list-manager__input-create"))
            return this.handleSubmit(_.trim()), _r_();
          var o = i.attr("data-list-id");
          return (
            this.setState({ wl_submitting: !0 }),
            a.update(),
            _r_(
              y(o, s).then(
                function (t) {
                  _i_("843:ef77c6f7"),
                    e.setState({ wl_submitting: !1 }),
                    B.eventEmitter.trigger(
                      "wl:toggleHotelSavedStatus",
                      e.genEventParams(s, { wl_lists: t })
                    ),
                    B.eventEmitter.trigger("wl:updateLastUsedId", o),
                    a.update(),
                    _r_();
                },
                function () {
                  _i_("843:15fd4ced"),
                    e.setState({ wl_submitting: !1 }),
                    a.update(),
                    _r_();
                }
              )
            )
          );
        },
        handleToggle: function (t) {
          _i_("843:297fe559");
          var i = this,
            e = c(t.currentTarget),
            n = this.getState(),
            r = n.wl_submitting,
            s = n.hotel_id,
            _ = n.wl_new_list_name,
            a = n.wl_list_loading_status,
            o = this.getInstance();
          if (r) return _r_();
          if (e.hasClass("js-list-manager__input-create"))
            return this.handleSubmit(_.trim()), _r_();
          var l = e.attr("data-list-id");
          if (a[l]) return _r_();
          var d = e.find("input").is(":checked");
          return (
            this.setState({ wl_entrypoint_loading: !0 }),
            this.updateListLoadingStatus(l, !0),
            o.update(),
            _r_(
              k(l, s).then(
                function (t) {
                  _i_("843:6d63e33b"), i.updateListLoadingStatus(l, !1);
                  var e = b(s).filter(function (t) {
                    return _i_("843:62716560"), _r_(t.selected);
                  }).length;
                  i.setState({
                    wl_lists: t,
                    wl_entrypoint_loading: !1,
                    wl_hotel_saved: !!e,
                    wl_list_toggled: !0,
                  }),
                    B.eventEmitter.trigger(
                      "wl:toggleHotelSavedStatus",
                      i.genEventParams(s, {
                        wl_lists: t,
                        wl_entrypoint_title: g(e),
                        wl_hotel_saved: !!e,
                      })
                    ),
                    B.eventEmitter.trigger("update:b_hotel_is_saved", {
                      b_hotel_is_saved: !!e,
                      hotel_id: s,
                      lists: t,
                    }),
                    d && B.eventEmitter.trigger("wl:updateLastUsedId", l),
                    o.update(),
                    _r_();
                },
                function () {
                  _i_("843:b3df9728"),
                    M.customGoal("receiveResError"),
                    i.setState({
                      wl_entrypoint_loading: !1,
                      wl_submitting: !1,
                    }),
                    o.update(),
                    _r_();
                }
              )
            )
          );
        },
        genEventParams: function (t, e) {
          _i_("843:09f2cc8a");
          var i = {};
          return (i[t] = e), _r_(i);
        },
        toggle: function (t) {
          _i_("843:b617be1a");
          var r = this;
          t.preventDefault();
          var e = this.getState(),
            i = e.wl_lists,
            n = e.wl_list_id,
            s = e.wl_hotel_saved,
            _ = e.wl_entrypoint_loading,
            a = e.hotel_id,
            o = e.last_used_id,
            l = e.wl_expand_list,
            d = this.getInstance("mdot" === u ? "toast" : "popover");
          if (!d) return _r_();
          if ((d.close(), d.unmount(), _)) return _r_();
          M.stage("entrypointClicked");
          var c = i.length
            ? !!b(a).filter(function (t) {
                return _i_("843:2279050c"), _r_(t.selected);
              }).length
            : s;
          if (
            (this.setState({
              wl_entrypoint_loading: !0,
              wl_error_when_creating: !1,
              wl_hotel_saved: c,
              wl_list_toggled: !1,
            }),
            c)
          ) {
            if (n)
              return _r_(
                E(a, n).then(
                  function (t) {
                    _i_("843:e6d4f8b8"),
                      r.setState({ wl_entrypoint_loading: !1 }),
                      B.eventEmitter.trigger(
                        "wl:toggleHotelSavedStatus",
                        r.genEventParams(a, {
                          wl_hotel_saved: 0,
                          wl_list_id: t,
                        })
                      ),
                      _r_();
                  },
                  function () {
                    _i_("843:1c20eb77"),
                      r.setState({ wl_entrypoint_loading: !1 }),
                      _r_();
                  }
                )
              );
            return _r_(
              C(a).then(
                function (t) {
                  _i_("843:9f92a6aa");
                  var e = t.removed,
                    i = t.remaining;
                  r.setState({
                    wl_entrypoint_loading: !1,
                    wl_expand_before_save: !1,
                    wl_remaining: i,
                  }),
                    B.eventEmitter.trigger(
                      "wl:toggleHotelSavedStatus",
                      r.genEventParams(a, {
                        wl_lists: e,
                        wl_entrypoint_title: g(0),
                        wl_hotel_saved: 0,
                        wl_remaining: i,
                      })
                    ),
                    B.eventEmitter.trigger("update:b_hotel_is_saved", {
                      b_hotel_is_saved: 0,
                      hotel_id: a,
                    }),
                    r.$el.data("materialized-id", null),
                    d.mount(),
                    d.open && d.open(),
                    d.update(),
                    _r_();
                },
                function (t) {
                  return (
                    _i_("843:0558f907"),
                    _r_(r.reset.call(r, t, { wl_hotel_saved: c }))
                  );
                }
              )
            );
          }
          if (1 < l)
            return _r_(
              w(a).then(function (t) {
                _i_("843:e59dfb4a");
                var e = t.lists,
                  i = t.remaining;
                r.setState({
                  wl_entrypoint_loading: !1,
                  wl_lists: e,
                  wl_list_expanded: !0,
                  wl_expand_before_save: !0,
                }),
                  void 0 !== i &&
                    (r.setState({ wl_remaining: i }),
                    B.eventEmitter.trigger(
                      "wl:toggleHotelSavedStatus",
                      r.genEventParams(a, { wl_remaining: i })
                    )),
                  d.mount(),
                  d.open && d.open(),
                  d.update(),
                  _r_();
              }, this.reset.bind(this))
            );
          if (n) return _r_();
          return _r_(
            L(o, a).then(function () {
              return (
                _i_("843:1b9b22f0"),
                r.setState({ wl_entrypoint_loading: !1, wl_loading_list: !0 }),
                B.eventEmitter.trigger(
                  "wl:toggleHotelSavedStatus",
                  r.genEventParams(a, {
                    wl_entrypoint_title: g(1),
                    wl_hotel_saved: 1,
                  })
                ),
                r.$el.data("materialized-id", null),
                d.mount(),
                d.open && d.open(),
                d.update(),
                _r_(
                  m(a).then(
                    function (t) {
                      _i_("843:8a809148");
                      var e = t.result,
                        i = e.lists,
                        n = e.remaining;
                      r.setState({
                        wl_remaining: n,
                        wl_lists: i,
                        wl_loading_list: !1,
                      }),
                        B.eventEmitter.trigger("update:b_hotel_is_saved", {
                          b_hotel_is_saved: 1,
                          hotel_id: a,
                          lists: i,
                        }),
                        l ? r.expand.call(r) : d.update(),
                        _r_();
                    },
                    function (t) {
                      return (
                        _i_("843:700be127"),
                        _r_(r.reset.call(r, t, { wl_hotel_saved: c }))
                      );
                    }
                  )
                )
              );
            }, this.reset.bind(this))
          );
        },
        handleClickOnCreate: function (t) {
          _i_("843:77268e77"),
            this.getState().wl_new_list_input_disabled &&
              c(t.currentTarget).next().find("input").trigger("focus"),
            _r_();
        },
        reset: function (t, e) {
          _i_("843:eecb98fa"),
            M.customGoal("receiveResError"),
            (e = c.extend(e, {
              wl_loading_list: !1,
              wl_entrypoint_loading: !1,
            })),
            this.setState(e),
            _r_();
        },
        handleNameUpdate: function (t) {
          _i_("843:90e55509");
          var e = c(t.target).val(),
            i = this.getState().wl_new_list_name;
          if (13 === t.which) this.handleSubmit(i.trim());
          else {
            var n = this.getInstance();
            this.setState({
              wl_new_list_name: e,
              wl_new_list_input_disabled: !e,
            }),
              n.update();
          }
          _r_();
        },
        handleSubmit: function (t) {
          _i_("843:ba1e568a");
          var r = this;
          if (!t) return _r_();
          var e = this.getState(),
            s = e.hotel_id,
            _ = e.wl_single_selection,
            i = e.wl_list_loading_status,
            a = this.getInstance();
          if (!_ && i.newList) return _r_();
          return (
            _
              ? this.setState({ wl_submitting: !0 })
              : this.updateListLoadingStatus("newList", !0),
            a.update(),
            l(o, "createList"),
            _r_(
              p(t, s).then(
                function (t) {
                  _i_("843:dc1e028a");
                  var e = t.id,
                    i = t.remaining;
                  r.setState({ wl_remaining: i });
                  var n = a.update();
                  i ||
                    window.BUI.createInstance(
                      "Tooltip",
                      n.querySelector('[data-bui-component="Tooltip"]')
                    ).mount();
                  if ((B.eventEmitter.trigger("wl:updateLastUsedId", e), !_))
                    return _r_(
                      m(s).then(
                        function (t) {
                          _i_("843:b03adc71");
                          var e = t.result,
                            i = e.lists,
                            n = e.remaining;
                          r.setState({
                            wl_remaining: n,
                            wl_lists: i,
                            wl_hotel_saved: !0,
                            wl_new_list_name: "",
                            wl_new_list_input_disabled: !0,
                          }),
                            r.updateListLoadingStatus("newList", !1),
                            B.eventEmitter.trigger(
                              "wl:toggleHotelSavedStatus",
                              r.genEventParams(s, {
                                wl_lists: i,
                                wl_hotel_saved: !0,
                              })
                            ),
                            a.update(),
                            _r_();
                        },
                        function () {
                          _i_("843:d0936117"),
                            r.setState({
                              wl_new_list_name: "",
                              wl_new_list_input_disabled: !0,
                              wl_submitting: !1,
                            }),
                            a.update(),
                            _r_();
                        },
                        function () {
                          _i_("843:1d5049a7"),
                            M.customGoal("receiveResError"),
                            _r_();
                        }
                      )
                    );
                  return _r_(
                    y(e, s).then(
                      function (t) {
                        _i_("843:0279a5cf"),
                          r.setState({
                            wl_new_list_name: "",
                            wl_new_list_input_disabled: !0,
                            wl_submitting: !1,
                          }),
                          B.eventEmitter.trigger(
                            "wl:toggleHotelSavedStatus",
                            r.genEventParams(s, { wl_lists: t })
                          ),
                          a.update(),
                          _r_();
                      },
                      function () {
                        _i_("843:025d23f0"),
                          r.setState({
                            wl_new_list_name: "",
                            wl_new_list_input_disabled: !0,
                            wl_submitting: !1,
                          }),
                          a.update(),
                          _r_();
                      }
                    )
                  );
                },
                function () {
                  _i_("843:ebb6b246"),
                    M.customGoal("receiveResError"),
                    r.setState({
                      wl_new_list_name: "",
                      wl_new_list_input_disabled: !0,
                      wl_submitting: !1,
                      wl_error_when_creating: !0,
                    }),
                    a.update(),
                    _r_();
                }
              )
            )
          );
        },
        handleFocus: function () {
          _i_("843:170157bc");
          var t = this.getInstance();
          this.setState({ wl_error_when_creating: !1 }), t.update(), _r_();
        },
      });
    (i.exports = S), _r_();
  }),
  B.define("component/wishlist/savers", function (t, e, i) {
    _i_("843:a7d5de94");
    var n = t("component/reactive").extend({
      template: "wishlist_savers",
      initialState: { wl_hotel_saved: !0 },
      initialize: function () {
        _i_("843:0c310e0e"),
          this.setState({
            hotel_id: this.getAttr("data-hotel-id"),
            wl_hotel_saved: this.getAttr("data-wl-hotel-saved"),
            b_wishlists_hotel_count: this.getAttr("data-hotel-count"),
          }),
          B.eventEmitter.bind(
            "wl:toggleHotelSavedStatus",
            this.toggleHotelSavedStatus.bind(this)
          ),
          _r_();
      },
      getAttr: function (t) {
        return _i_("843:7a8bd84a"), _r_(this.$el.attr(t));
      },
      toggleHotelSavedStatus: function (t, e) {
        _i_("843:796bf69d");
        var i = this.getState().hotel_id;
        for (var n in e) e.hasOwnProperty(n) && n === i && this.setState(e[n]);
        _r_();
      },
    });
    (i.exports = n), _r_();
  }),
  B.define("wishlists/hotel-page-ga-tracking", function (t, e, i) {
    _i_("843:139f06c8");
    var n = t("ga-tracker");
    function r(t, e) {
      _i_("843:b3bbd27f");
      e = e || "";
      var i = t.trim() + ":" + e.toString();
      n.trackEvent("wishlist", "submit", i), _r_();
    }
    (i.exports = {
      trackSaveToWishlist: function (t) {
        _i_("843:834494c9"), r("add-to-list", t), _r_();
      },
      trackRemoveFromWishlist: function (t) {
        _i_("843:fada10de"), r("remove-from-list", t), _r_();
      },
      trackCreateList: function (t) {
        _i_("843:43404069"), r("create-list", t), _r_();
      },
      trackGoToWishlist: function (t) {
        _i_("843:3883e521"), r("go-to-list", t), _r_();
      },
    }),
      _r_();
  }),
  B.define("lists/lists-api/lists-api", function (t, e, i) {
    "use strict";
    _i_("843:f4bd89fe");
    var r = t("jquery"),
      s = {
        hotel: "hp_header",
        searchresults: "sr_list",
        mywishlist: "wishlist",
      };
    function n(t) {
      _i_("843:cc677d27");
      var e = B.env.b_action,
        i = "www" === B.env.b_site_type,
        n = s[e] || "";
      return _r_(
        r.extend(
          {},
          t || {},
          {
            source: i ? n : "",
            aid: B.env.aid || B.env.b_aid,
            lang: B.env.b_lang_for_url,
            sid: B.env.b_sid,
            stype: B.env.b_site_type_id || "",
            currency: B.env.b_selected_currency,
            label: B.env.b_label,
            partner_channel_id: B.env.partner_id,
            stid: B.env.b_stid,
          },
          B.env.b_is_bbtool_admin ? { user_is_bbtool_admin: 1 } : {}
        )
      );
    }
    function _(t) {
      return (
        _i_("843:8127133c"),
        (t.data = n(t.data)),
        _r_(r.ajax(r.extend(t, { type: "POST" })))
      );
    }
    (i.exports = {
      API: {
        _prepareParams: n,
        request: function (t, e, i) {
          return (
            _i_("843:e1e546a6"),
            _r_(
              _({
                url: t,
                data: r.extend({}, e),
                success: function (t) {
                  return _i_("843:e2747043"), _r_((i || r.noop)(t));
                },
              })
            )
          );
        },
        list: function (t, e) {
          return (
            _i_("843:0dcebca4"),
            _r_(
              _({
                url: "/wishlist/get",
                data: r.extend({ with_hotels: 1, include_availability: 1 }, t),
                success: function (t) {
                  return _i_("843:e27470431"), _r_((e || r.noop)(t));
                },
              })
            )
          );
        },
        listById: function (t, e) {
          return (
            _i_("843:e7dedd58"),
            _r_(
              _({
                url: "/wishlist/get",
                data: { with_hotels: 1, include_availability: 1, id: t },
                success: function (t) {
                  return _i_("843:e27470432"), _r_((e || r.noop)(t));
                },
              })
            )
          );
        },
        updateComparisonHotel: function (t, e) {
          _i_("843:d12acce0");
          var i = "",
            n = null;
          return (
            (B.env.b_occupancy || B.env.b_occupancy.adults) &&
              (n = B.env.b_occupancy.adults),
            (B.env.b_group || B.env.b_group.length) &&
              (i = B.env.b_group[0].ages
                .map(function (t) {
                  return _i_("843:ca90e02d"), _r_(t.age);
                })
                .join(",")),
            _r_(
              _({
                url: "/wishlist/save_hotel",
                data: {
                  hotel_id: t.hotel_id,
                  lists: t.list_id,
                  new_state: t.new_state,
                  for_comparison: 1,
                  checkin: B.env.b_checkin_date || null,
                  checkout: B.env.b_checkout_date || null,
                  rooms: B.env.b_nr_rooms_wanted || null,
                  adults: n,
                  childrenAges: i,
                },
                success: function (t) {
                  _i_("843:5217e995"), (e || r.noop)(t), _r_();
                },
              })
            )
          );
        },
        removeHotelsFromComparison: function (t, e) {
          return (
            _i_("843:642ba594"),
            _r_(
              _({
                url: "/wishlist/save_hotels",
                data: {
                  list: t.list_id,
                  hotel_ids: t.hotel_ids.join(","),
                  new_states: t.states.join(","),
                  for_comparison: 1,
                },
                success: function (t) {
                  _i_("843:5217e9951"), (e || r.noop)(t), _r_();
                },
              })
            )
          );
        },
        updateHotels: function (t, e) {
          return (
            _i_("843:2048a9e9"),
            _r_(
              _({
                url: "/wishlist/save_hotels",
                data: {
                  list: t.list_id,
                  hotel_ids: t.hotel_ids.join(","),
                  new_states: t.states.join(","),
                  is_recently_viewed: t.is_recently_viewed,
                },
                success: function (t) {
                  _i_("843:5217e9952"), (e || r.noop)(t), _r_();
                },
              })
            )
          );
        },
        updateList: function (e, i) {
          return (
            _i_("843:7f291cf9"),
            _r_(
              _({
                url: "/wishlist/update",
                data: e,
                success: function (t) {
                  _i_("843:c43bc88d"),
                    t.success &&
                      (B.eventEmitter.trigger("lists:api:update", e),
                      (i || r.noop)(t)),
                    _r_();
                },
              })
            )
          );
        },
        createList: function (t, e) {
          return (
            _i_("843:e5b644f3"),
            _r_(
              _({
                url: "/wishlist/create",
                data: r.extend(t, {
                  name: String(t.name),
                  privacy: String(t.privacy),
                }),
                success: function (t) {
                  _i_("843:5217e9953"), (e || r.noop)(t), _r_();
                },
              })
            )
          );
        },
        removeList: function (t, e) {
          return (
            _i_("843:ab7aab67"),
            B.listmap && B.listmap.trigger("del_list"),
            _r_(
              _({
                url: "/wishlist/delete",
                data: { list_id: t.list_id },
                success: function (t) {
                  _i_("843:5217e9954"), (e || r.noop)(t), _r_();
                },
              })
            )
          );
        },
        updateTag: function (t, e) {
          return (
            _i_("843:e9c55a9b"),
            B.listmap &&
              B.listmap.trigger(t.is_deleted ? "del_tag" : "added_tag"),
            _r_(
              _({
                url: "/tag_item",
                data: {
                  item_id: t.list_id,
                  tags: t.tags,
                  is_deleted: t.is_deleted || 0,
                  type: t.type,
                },
                success: function (t) {
                  _i_("843:5217e9955"), (e || r.noop)(t), _r_();
                },
              })
            )
          );
        },
        updateNote: function (t, e) {
          return (
            _i_("843:b21ba870"),
            B.listmap && B.listmap.trigger("save_note"),
            _r_(
              _({
                url: "/wishlist/add_note",
                data: {
                  list_id: t.list_id,
                  hotel_id: t.hotel_id,
                  note: t.note,
                },
                success: function (t) {
                  _i_("843:5217e9956"), (e || r.noop)(t), _r_();
                },
              })
            )
          );
        },
        removeHotel: function (t, e) {
          return (
            _i_("843:3d247ce9"),
            _r_(
              _({
                url: "/wishlist/save_hotel",
                data: { hotel_id: t.hotel_id, lists: t.lists, new_state: 0 },
                success: function (t) {
                  _i_("843:5217e9957"), (e || r.noop)(t), _r_();
                },
              })
            )
          );
        },
        getRecentlyViewed: function (t, e) {
          return (
            _i_("843:feda774a"),
            _r_(
              _({
                url: "/wishlist/recently_viewed_hotel",
                data: { limit: t.limit, list_id: t.list_id },
                success: function (t) {
                  _i_("843:4d895166"), (e || r.noop)({ hotels: t }), _r_();
                },
              })
            )
          );
        },
        getAvailability: function (t, e) {
          return (
            _i_("843:e68cc4f5"),
            _r_(
              _({
                url: "/wishlist/get_or_update_wishlist_hotels_dates",
                data: r.extend(
                  {
                    hotel_ids: t.hotel_ids.join(","),
                    checkin: t.checkin,
                    checkout: t.checkout,
                    list_id: t.list_id || "",
                    is_recently_viewed: t.is_recently_viewed,
                  },
                  t.additional
                ),
                success: function (t) {
                  _i_("843:5217e9958"), (e || r.noop)(t), _r_();
                },
              })
            )
          );
        },
      },
      type: { RECENTLY_VIEWED: "3" },
      currentHotel: function () {
        _i_("843:4dc5577e");
        var t = {
          b_hotel_id: B.env.b_hotel_id,
          b_hotel_name: B.env.b_hotel_name,
          b_hotel_image_url_square60: B.env.b_hotel_image_url_square60,
          b_hotel_url: "",
          b_hotel_image_url_square150: "",
        };
        return (
          t.b_hotel_image_url_square60 &&
            (t.b_hotel_image_url_square150 =
              t.b_hotel_image_url_square60.replace("square60", "square150")),
          !t.b_hotel_image_url_square150 &&
            B.env.b_hotel_image_url_square90 &&
            (t.b_hotel_image_url_square150 =
              B.env.b_hotel_image_url_square90.replace(
                "square90",
                "square150"
              )),
          "hotel" === B.env.b_action && (t.b_hotel_url = location.href),
          _r_(t)
        );
      },
      getIdFromUrl: function (t) {
        _i_("843:0b240413");
        var e = t.match(/wl_id=([a-zA-Z0-9-_]+)/);
        return _r_(String(e && e[1]));
      },
      getLastChangedListId: function () {
        _i_("843:5df62bce");
        var t = B.env.b_reg_user_last_used_wishlist;
        if (t) return _r_(t && t[0] && t[0].b_reg_user_detail_list_id);
        return _r_("0");
      },
      storedProperty: function (t, e) {
        return (
          _i_("843:0cae4990"),
          window.b && window.b.storage
            ? (void 0 !== e &&
                window.b.storage({
                  key: t,
                  value: String(e),
                  location: "cookies",
                }),
              _r_(String(window.b.storage({ key: t, location: "cookies" }))))
            : (void 0 !== e &&
                r.cookie(t, String(e), { domain: "booking.com", path: "/" }),
              _r_(r.cookie(t)))
        );
      },
    }),
      _r_();
  }),
  B.define(
    "component/lists/listview-calendar/listview-controls-group-bui",
    function (t, e, i) {
      _i_("843:3aa9137d");
      var n = t("component"),
        h = t("search/searchbox/model"),
        f = t("read-data-options"),
        g = t("jquery"),
        r = t("component/wishlist/tracking").expPageInteraction;
      (i.exports = n.extend({
        init: function () {
          _i_("843:95284d74"),
            B.eventEmitter.bind(
              "listview:rendered:controls",
              this.init_group.bind(this)
            ),
            _r_();
        },
        init_group: function (t, e) {
          var i, n, r;
          if (
            (_i_("843:e476eddb"),
            (this.options = f(this.$el, {
              modelId: { name: "sb-id", type: String, required: !0 },
            })),
            (this.$modal = this.$el.find("[data-group-modal]")),
            (this.$cta = this.$el.find(".js-check-availability")),
            (this.$toggle = g("[data-wl-group-toggle]")),
            (this.model = h.getInstance(this.options.modelId)),
            this.model.use("group"),
            B.et.track("aDMWRfDSdWUUHfLebbMPAFFLKZLXJOfAdIUFZZcO"))
          ) {
            var s = B.env.fe_last_search_history_entry,
              _ = B.env.fe_current_date,
              a =
                e.hotels &&
                0 < e.hotels.length &&
                e.hotels[0].availability.checkin,
              o =
                e.hotels &&
                0 < e.hotels.length &&
                e.hotels[0].availability.checkout,
              l = 1,
              d = 2,
              c = 3,
              u = l;
            (u =
              a && o
                ? l
                : s &&
                  s.checkin &&
                  s.checkout &&
                  +new Date(s.checkin) >= +new Date(_)
                ? d
                : c),
              e.travel_group &&
              (e.travel_group.rooms ||
                e.travel_group.adults ||
                e.travel_group.children) &&
              u == l
                ? ((i = e.travel_group.rooms || 1),
                  (n = e.travel_group.adults || 2),
                  (r = e.travel_group.children || 0))
                : s &&
                  (s.total_rooms || s.total_adults || s.total_children) &&
                  u == d
                ? ((i = s.total_rooms || 1),
                  (n = s.total_adults || 2),
                  (r = s.total_children || 0))
                : ((i = 1), (n = 2), (r = 0));
          } else
            (i = e.travel_group.rooms ? e.travel_group.rooms : 1),
              (n = e.travel_group.adults ? e.travel_group.adults : 2),
              (r = e.travel_group.children ? e.travel_group.children : 0);
          this.model.group.set({ key: "rooms_count", value: i }),
            this.model.group.set({ key: "adults_count", value: n }),
            this.model.group.set({ key: "children_count", value: r }),
            e.travel_group &&
              e.travel_group.childrenAges &&
              e.travel_group.childrenAges.forEach(
                function (t, e) {
                  _i_("843:9382828e"),
                    this.model.group.set({
                      key: "children_ages",
                      i: e,
                      value: t,
                    }),
                    _r_();
                }.bind(this)
              ),
            (this.groupCount = g(".wl-bui-group-select")),
            (this.groupSummary = this.$el.find(".wl-bui-group-summary")),
            this.removeEventListener(),
            this.addModelListeners(),
            this.addEventListeners(),
            this.render(),
            this.$el.find("#xp__guests__input").remove(),
            this.triggerInitialSearch(e),
            _r_();
        },
        triggerInitialSearch: function (t) {
          if (
            (_i_("843:16e6b8a0"),
            B.env.wl_init_loaded && B.env.wl_init_loaded[t.id])
          )
            return _r_(!1);
          (B.env.wl_init_loaded = B.env.wl_init_loaded || {}),
            (B.env.wl_init_loaded[t.id] = !0),
            _r_();
        },
        addModelListeners: function () {
          _i_("843:d3663266"),
            this.model.on("change", this.modelChange.bind(this)),
            this.model.on("init", this.modelChange.bind(this)),
            _r_();
        },
        hideModel: function () {
          _i_("843:02280441"),
            this.$modal.addClass("hidden"),
            this.$toggle.removeAttr("data-group-toggle-shown"),
            _r_();
        },
        removeEventListener: function () {
          _i_("843:62938d92"),
            this.$toggle.off("click"),
            this.$cta.off("click"),
            g(document).on("mouseup.group"),
            _r_();
        },
        addEventListeners: function () {
          _i_("843:bfbee1a0"),
            this.$toggle.on(
              "click",
              function (t) {
                _i_("843:52ab5340"),
                  this.$modal.toggleClass("hidden"),
                  this.$toggle[
                    this.$modal.hasClass("hidden") ? "removeAttr" : "attr"
                  ]("data-group-toggle-shown", 1),
                  r.customGoal("detailPage"),
                  _r_();
              }.bind(this)
            ),
            this.$cta.on(
              "click",
              function (t, e) {
                _i_("843:b6aae558");
                var i = this.model.group.get();
                if (
                  (B.eventEmitter.trigger("wl:updateSearchConfig", {
                    adults: i.adults_count,
                    rooms: i.rooms_count,
                    children: i.children_ages.length,
                    childrenAges: i.children_ages,
                  }),
                  this.hideModel(),
                  e && e.isInit)
                )
                  return _r_();
                r.customGoal("updateSearchConfig"),
                  B.squeak(B.env.wl_squeak.change_wishlist_search_group_size),
                  _r_();
              }.bind(this)
            ),
            g(document).on(
              "mouseup.group",
              function (t) {
                _i_("843:8ae1ba7b"),
                  g(t.target).closest(this.$el).length ||
                    g(t.target).closest(this.$toggle).length ||
                    this.hideModel(),
                  _r_();
              }.bind(this)
            ),
            _r_();
        },
        modelChange: function (t) {
          _i_("843:652a2f0c"), "group" == t.group && this.render(), _r_();
        },
        render: function (t) {
          _i_("843:9a3268f5");
          var e = this.model.group.get(),
            i = +e.adults_count,
            n = e.children_ages.length,
            r = e.rooms_count,
            s = [],
            _ = B.jstmpl("listview_controls_bui_group_text").render({
              adults_count: i,
              children_count: n,
              room_count: r,
            });
          this.groupCount.html(_),
            s.push(
              B.jstmpl.translations("d_dmw_wl_calendar_occupancy_adults", i, {
                num_adults: i,
              })
            ),
            0 < n &&
              s.push(
                B.jstmpl.translations(
                  "d_dmw_wl_calendar_occupancy_children",
                  n,
                  { num_children: n }
                )
              ),
            s.unshift(
              B.jstmpl.translations(
                "d_dmw_wl_calendar_occupancy_rooms",
                e.rooms_count,
                { num_rooms: e.rooms_count }
              )
            ),
            this.groupSummary.html(s.join(" · ")),
            _r_();
        },
      })),
        _r_();
    }
  ),
  B.define(
    "component/lists/listview-calendar/listview-controls-calendar-bui",
    function (t, e, i) {
      "use strict";
      _i_("843:16e9e99f");
      var n = t("component"),
        g = t("formatting/date"),
        v = t("search/searchbox/model"),
        p = t("search/modules/search-date").SearchDate,
        m = t("search/calendar/utils"),
        b = t("jquery"),
        r = t("et"),
        _ = B.et.track("cCcCcCRDfUFFEPQBaYfGOaYdTSYaJeLT")
          ? "date_with_year"
          : "{day_of_month} {short_month_name}",
        s = t("component/wishlist/tracking").expPageInteraction;
      function a(t) {
        return _i_("843:a4f6ff92"), _r_(("0" + t).slice(-2));
      }
      (i.exports = n.extend({
        init: function () {
          _i_("843:b6868f8a"),
            B.eventEmitter.bind(
              "listview:rendered:controls",
              this.init_calendar.bind(this)
            ),
            _r_();
        },
        init_calendar: function (t, e) {
          _i_("843:9fedc022"),
            (this.$calendar = this.$el.find(".bui-calendar")),
            (this.$form = this.$el.parents("form")),
            (this.$toggle = b("[data-wl-calendar-toggle]")),
            (this.$toggleText = this.$toggle.find(".js-wl-date-text")),
            (this.$cta = this.$el.find(".js-check-availability")),
            (this.calendarMounted = !1),
            (this.calendarOpen = !1),
            (this.checkinPlaceholder = B.jstmpl.translations(
              "fe_sb_cal_checkin_date",
              null
            )),
            (this.checkoutPlaceholder = B.jstmpl.translations(
              "fe_sb_cal_checkout_date",
              null
            )),
            (this.dateFormat =
              "{short_weekday}, {short_month_name} {day_of_month} "),
            (this.model = v.getInstance(this.$el.data("sb-id"))),
            this.model.use("dates"),
            (this.initialDates = {}),
            (this.hasValidDates = !0),
            (this.renderLoS = !!this.$el.data("render-los"));
          var i = e.hotels[e.hotels.length - 1];
          if (i && i.availability) {
            var n,
              r,
              s = B.env.fe_current_date,
              _ = B.env.fe_last_search_history_entry,
              a = i.availability.checkin,
              o = i.availability.checkout;
            if (
              (a && o
                ? ((n = a), (r = o))
                : _ &&
                  _.checkin &&
                  _.checkout &&
                  +new Date(_.checkin) >= +new Date(s)
                ? ((n = _.checkin), (r = _.checkout))
                : ((n = s), (r = g.add_days(s, 1))),
              n)
            ) {
              var l = p.createFromString(n);
              (this.initialDates.checkin = l),
                this.model.dates.setDate("checkin", l);
            } else this.model.dates.clearDates();
            if (r) {
              var d = p.createFromString(r);
              (this.initialDates.checkout = d),
                this.model.dates.setDate("checkout", d);
            } else this.model.dates.clearDates();
          }
          var c = {
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
            renderSelected: function (t) {
              if ((_i_("843:ca7c4fa4"), !this.renderLoS)) return _r_("");
              var e = t.startDate,
                i = t.endDate;
              if (e && i && e < i) {
                var n = g.format(
                    {
                      day: e.getDate(),
                      month: e.getMonth(),
                      year: e.getFullYear(),
                    },
                    this.dateFormat
                  ),
                  r = g.format(
                    {
                      day: i.getDate(),
                      month: i.getMonth(),
                      year: i.getFullYear(),
                    },
                    this.dateFormat + ", {full_year}"
                  ),
                  s = m.getDaysDifference(e, i),
                  _ = B.jstmpl.translations(
                    "ss_sxp_index_sbox_calendar_num_night_stay",
                    null,
                    { num_nights: Math.floor((i - e) / 864e5) }
                  );
                if (
                  (7 <= s &&
                    !(s % 7) &&
                    (_ = B.jstmpl.translations(
                      "bh_ss_sxp_index_sbox_calendar_num_week_stay",
                      null,
                      { num_weeks: s / 7 }
                    )),
                  30 < s)
                )
                  return (
                    this.setCtaStatus(0),
                    _r_(
                      '<div class="wl-cal-banner-red">' +
                        B.jstmpl.translations("sbox_error_30_night_res") +
                        "</div>"
                    )
                  );
                if ((this.setCtaStatus(1), B.env.rtl))
                  return _r_(
                    "(" + _ + ") <strong>" + n + " - " + r + "</strong>"
                  );
                return _r_("<strong>" + n + " - " + r + "</strong> " + _);
              }
              if (e) {
                n = g.format(
                  {
                    day: e.getDate(),
                    month: e.getMonth(),
                    year: e.getFullYear(),
                  },
                  this.dateFormat
                );
                return _r_(
                  "<strong>" +
                    n +
                    " - " +
                    this.checkoutPlaceholder +
                    "</strong>"
                );
              }
              return _r_(
                "<strong>" +
                  this.checkinPlaceholder +
                  " - " +
                  this.checkoutPlaceholder +
                  "</strong> "
              );
            }.bind(this),
            onDateChange: function (t) {
              _i_("843:fea838b1");
              var e = t.startDate,
                i = t.endDate;
              if (
                ((this.hasValidDates = !1),
                e &&
                  ((e = p.create({
                    year: e.getFullYear(),
                    month: e.getMonth(),
                    day: e.getDate(),
                  })),
                  this.model.dates.setDate("checkin", e)),
                i &&
                  ((i = p.create({
                    year: i.getFullYear(),
                    month: i.getMonth(),
                    day: i.getDate(),
                  })),
                  this.model.dates.setDate("checkout", i)),
                e && i)
              ) {
                var n = Math.floor((i - e) / 864e5);
                this.setCtaStatus(n <= 30),
                  n <= 30 && (this.hasValidDates = !0);
              }
              this.updateToggleLabel(t), _r_();
            }.bind(this),
          };
          if (B.env.b_simple_weekdays && 7 === B.env.b_simple_weekdays.length) {
            var u = 0;
            for (var h in c.dayNames)
              c.dayNames[h] = B.env.b_simple_weekdays[u++];
          }
          if (B.env.b_short_months && 12 === B.env.b_short_months.length) {
            u = 0;
            for (var h in c.monthNames)
              c.monthNames[h] = B.env.b_short_months[u++];
          }
          B.env.sunday_first && b.extend(c, { firstWeekDay: 7 });
          var f = this.getMinMaxDates();
          b.extend(c, f),
            (this.calendarInstance = window.BUI.createInstance(
              "Calendar",
              this.$calendar[0],
              c
            )),
            this.unbindEvents(),
            this.bindEvents(),
            this.renderToggleLabel(),
            _r_();
        },
        renderToggleLabel: function () {
          _i_("843:f9a03e0b");
          var t = this.model.dates.get(),
            e = "",
            i = "",
            n = [];
          t.checkin && ((e = g.format(t.checkin, _)), n.push(e)),
            t.checkout && ((i = g.format(t.checkout, _)), n.push(i)),
            n.length
              ? this.$toggleText.html(n.join(" - "))
              : this.$toggleText.html(
                  B.jstmpl.translations("d_dmw_wl_select_dates_view_prices_cta")
                ),
            _r_();
        },
        updateToggleLabel: function (t) {
          _i_("843:63096443");
          var e = t.startDate,
            i = t.endDate,
            n = "",
            r = "",
            s = [];
          e &&
            ((n = g.format(
              { day: e.getDate(), month: e.getMonth(), year: e.getFullYear() },
              _
            )),
            s.push(n)),
            i &&
              ((r = g.format(
                {
                  day: i.getDate(),
                  month: i.getMonth(),
                  year: i.getFullYear(),
                },
                _
              )),
              s.push(r)),
            s.length
              ? this.$toggleText.html(s.join(" - "))
              : this.$toggleText.html(
                  B.jstmpl.translations("d_dmw_wl_select_dates_view_prices_cta")
                ),
            _r_();
        },
        validateDates: function () {
          _i_("843:138e8f56"),
            this.hasValidDates ||
              (this.model.dates.clearDates(),
              this.initialDates.checkin &&
                this.model.dates.setDate("checkin", this.initialDates.checkin),
              this.initialDates.checkout &&
                this.model.dates.setDate(
                  "checkout",
                  this.initialDates.checkout
                ),
              this.$toggle.addClass("highlight"),
              window.setTimeout(
                function () {
                  _i_("843:1f0176cd"),
                    this.$toggle.removeClass("highlight"),
                    _r_();
                }.bind(this),
                3e3
              ),
              (this.hasValidDates = !0),
              this.renderToggleLabel()),
            _r_();
        },
        ensureDates: function () {
          _i_("843:74a622c0");
          var t = null;
          if (!this.model.dates.get().checkin) {
            t = new Date();
            var e = p.create({
              year: t.getFullYear(),
              month: t.getMonth(),
              day: t.getDate(),
            });
            this.model.dates.setDate("checkin", e);
          }
          _r_();
        },
        setCtaStatus: function (t) {
          _i_("843:c004abe3"), this.$cta.attr("disabled", !t), _r_();
        },
        bindEvents: function () {
          _i_("843:a95b4458"),
            this.$toggle.on(
              "click",
              function () {
                _i_("843:24a44d58"),
                  this.mountCalendar(),
                  this.calendarOpen ? this.hideCalendar() : this.showCalendar(),
                  s.customGoal("detailPage"),
                  _r_();
              }.bind(this)
            ),
            B.eventEmitter.bind(
              "listview:calendar:ensure-dates",
              this.ensureDates.bind(this)
            ),
            this.$cta.on(
              "click",
              function (t) {
                _i_("843:0a6d09b0"),
                  B.eventEmitter.trigger("wl:updateSearchConfig"),
                  s.customGoal("updateSearchConfig"),
                  this.hideCalendar(),
                  B.squeak(
                    B.env.wl_squeak.change_wishlist_search_checkin_checkout
                  ),
                  _r_();
              }.bind(this)
            ),
            b(document).on(
              "mouseup.calendar",
              function (t) {
                _i_("843:fbd3b6a5"),
                  b(t.target).closest(this.$el).length ||
                    b(t.target).closest(this.$toggle).length ||
                    (this.hideCalendar(), this.validateDates()),
                  _r_();
              }.bind(this)
            ),
            this.$form
              .find(".xp__date-time")
              .one("mouseenter touchstart", this.mountCalendar.bind(this)),
            this.model.on("change", this.onModelChange.bind(this)),
            this.onModelChange({ checkin: !0, checkout: !0 }),
            _r_();
        },
        unbindEvents: function () {
          _i_("843:316f32f7"),
            this.$toggle.off("click"),
            this.$cta.off("click"),
            b(document).off("mouseup.calendar"),
            this.$form.find(".xp__date-time").off("mouseenter touchstart"),
            _r_();
        },
        getMinMaxDates: function () {
          _i_("843:dd42bf6d");
          var t = new Date(),
            e = new Date();
          return (
            B.env.b_search_max_months
              ? (e.setMonth(e.getMonth() + B.env.b_search_max_months),
                e.setDate(0))
              : (e = new Date(e.getFullYear() + 1, e.getMonth() + 1, 0)),
            _r_({
              minDate:
                t.getFullYear() +
                "-" +
                a(t.getMonth() + 1) +
                "-" +
                a(t.getDate()),
              maxDate:
                e.getFullYear() +
                "-" +
                a(e.getMonth() + 1) +
                "-" +
                a(e.getDate()),
            })
          );
        },
        mountCalendar: function () {
          _i_("843:8e0cafba"),
            this.calendarMounted ||
              (this.calendarInstance.mount(), (this.calendarMounted = !0)),
            _r_();
        },
        onModelChange: function (t) {
          if ((_i_("843:e51a64e4"), this.calendarOpen))
            return (
              r.customGoal("aDMWRfDSdWUUHfLebbMPAFFLKZLXJOfAdIUFZZcO", 1), _r_()
            );
          if (t.checkin || t.checkout) {
            var e = this.model.dates.get().checkin,
              i = this.model.dates.get().checkout,
              n = {};
            e && (n.startDate = new Date(e.year, e.month, e.day)),
              i && (n.endDate = new Date(i.year, i.month, i.day)),
              (n.startDate || n.endDate) &&
                ((n.baseMonthDate = n.startDate),
                this.calendarInstance.setState(n),
                this.calendarInstance.onMount());
          }
          _r_();
        },
        showCalendar: function () {
          _i_("843:2a1fcc30"),
            this.$form.find("[data-dates-errors]").html(""),
            this.$calendar.show(),
            (this.calendarOpen = !0),
            _r_();
        },
        hideCalendar: function () {
          _i_("843:5eb7c9ad"),
            this.$calendar.hide(),
            (this.calendarOpen = !1),
            _r_();
        },
        getFormattedDate: function (t) {
          return (
            _i_("843:a259ba5a"),
            _r_(
              g.format(
                {
                  day: t.getDate(),
                  month: t.getMonth(),
                  year: t.getFullYear(),
                },
                this.dateFormat
              )
            )
          );
        },
      })),
        _r_();
    }
  ),
  B.define("lists/lists-tools/lists-tools", function (t, e, i) {
    "use strict";
    _i_("843:24c81a12"),
      (i.exports = {
        pick: function (i) {
          _i_("843:fa15adaf");
          var n = {};
          return (
            $.each(Array.prototype.slice.call(arguments, 1), function (t, e) {
              _i_("843:277697e4"), (n[e] = i[e]), _r_();
            }),
            _r_(n)
          );
        },
        stringifyUrl: function (t, e, i) {
          _i_("843:e5290654"), (e = e || "&"), (i = i || "=");
          var n = [];
          for (var r in t) t.hasOwnProperty(r) && n.push(r + i + t[r]);
          return _r_(n.join(e));
        },
        keys: Object.keys,
        throttle: (function () {
          _i_("843:b5602fa1");
          var e = function () {};
          try {
            e = B.tools.functions.throttle;
          } catch (t) {
            e = function (t) {
              return _i_("843:ad68da36"), _r_(t());
            };
          }
          return _r_(e);
        })(),
        ellipsis: function (t, e) {
          if ((_i_("843:d5fe6f62"), t.length < e)) return _r_(t);
          return _r_(t.slice(0, e) + "&hellip;");
        },
        htmlEncode: (function () {
          _i_("843:b7ccd176");
          var e = function () {};
          try {
            e = B.tools.string.htmlEncode;
          } catch (t) {
            e = function (t) {
              return _i_("843:ee150175"), _r_(t);
            };
          }
          return _r_(e);
        })(),
        htmlDecode: (function () {
          _i_("843:2a0a63ce");
          var e = function () {};
          try {
            e = B.tools.string.htmlDecode;
          } catch (t) {
            e = function (t) {
              return _i_("843:ee1501751"), _r_(t);
            };
          }
          return _r_(e);
        })(),
      }),
      _r_();
  }),
  B.define("lists/lists-store/lists-store", function (t, e, i) {
    "use strict";
    _i_("843:3fb3df71");
    var r = t("jquery"),
      _ = t("../lists-api/lists-api").API,
      n = t("lists/lists-api-legacy"),
      a = t("et"),
      o = booking.promise;
    function l(t) {
      if ((_i_("843:9cf3eeae"), !n)) return _r_();
      if (B.env.b_show_recently_viewed_comparison) return _r_();
      setTimeout(function () {
        _i_("843:a2bed6f1"),
          n.clearCache(),
          B.eventEmitter.trigger(n.EVENTS.EDITHOTEL, t),
          _r_();
      }, 0),
        _r_();
    }
    function d(t) {
      return (
        _i_("843:e5b18bfe"),
        _r_(String(t.b_id || t.b_hotel_id || t.hotel_id || t.id))
      );
    }
    function s() {
      _i_("843:76285e3e");
      var t, i;
      (this._lists = []),
        (this._requestsInProgress = {}),
        (this._fetchedHotelIds = {}),
        (this._backCompatibility = !0),
        (t = this),
        (i = "listStore_"),
        _i_("843:4950271f"),
        (t.on = function (t, e) {
          return (
            _i_("843:84c095f4"),
            B.eventEmitter.bind(i + t, function () {
              _i_("843:ed4ddcf7");
              var t = Array.prototype.slice.call(arguments, 1);
              e.apply(B.eventEmitter, t), _r_();
            }),
            _r_(this)
          );
        }),
        (t.emit = function (t) {
          _i_("843:9afb29c3");
          var e = Array.prototype.slice.call(arguments, 1);
          B.eventEmitter.trigger.apply(B.eventEmitter, [i + t].concat(e)),
            _r_();
        }),
        _r_(),
        _r_();
    }
    function c(t, e) {
      return (
        _i_("843:92e03e2e"), _r_(new Array(t + 1).join(String(e)).split(""))
      );
    }
    (o = booking.promise
      ? booking.promise
      : function () {
          _i_("843:364b50af");
          var t = r.Deferred();
          return (t.fulfill = t.resolve), _r_(t);
        }),
      (s.prototype.getHotelId = d),
      (s.prototype.backCompatibility = function (t) {
        _i_("843:9a31ff21"), (this._backCompatibility = t), _r_();
      }),
      (s.prototype._prepareHotelsData = function (t) {
        _i_("843:83d50f05");
        var n = this;
        return (
          t.forEach(function (t, e, i) {
            _i_("843:c8c15a53"),
              (t.index = e),
              (t.index_is_first = 0 === e),
              (t.index_is_last = e === i.length - 1),
              n.emit("hotel:init", t),
              _r_();
          }),
          _r_(t)
        );
      }),
      (s.prototype._prepareListsData = function (t, e) {
        _i_("843:5aa515a5");
        var i = this;
        return (
          (e = e || {}),
          t.forEach(function (t) {
            _i_("843:38c3d222"),
              (t.hotels_count = t.hotels_count || 0),
              e.hotel_id &&
                (t.hotels || (t.hotels = []),
                t.selected && t.hotels.push({ id: e.hotel_id })),
              i._prepareHotelsData(t.hotels || []),
              _r_();
          }),
          _r_(t)
        );
      }),
      (s.prototype.getListById = function (t) {
        _i_("843:f5f9e344");
        var e = {};
        return (
          this._lists.forEach(function (t) {
            _i_("843:56e07c03"), (e[t.id] = t), _r_();
          }),
          _r_(e[t])
        );
      }),
      (s.prototype.getHotelsCount = function () {
        _i_("843:71b20774");
        var e = 0;
        return (
          this._lists.forEach(function (t) {
            _i_("843:0d1dbc7a"), (e += t.hotels_count), _r_();
          }),
          _r_(e)
        );
      }),
      (s.prototype.getListsCount = function () {
        return _i_("843:3afe31f9"), _r_(this._lists.length);
      }),
      (s.prototype.getComparisonList = function (t) {
        return (
          _i_("843:455202d3"),
          _r_(
            this._lists.find(function (t) {
              return _i_("843:3e1f88f9"), _r_(1 == t.is_for_comparison);
            })
          )
        );
      }),
      (s.prototype.getListByDefaultListId = function (e) {
        _i_("843:ec68b566");
        var i = null;
        return (
          this._lists.forEach(function (t) {
            _i_("843:300fb57a"),
              t.default_list && parseFloat(t.default_list) === e && (i = t),
              _r_();
          }),
          _r_(i)
        );
      }),
      (s.prototype.toggleHotel = function (t) {
        _i_("843:9b62a74b");
        var e = o(),
          i = this.getHotelById(t);
        return (
          i
            ? ("mdot" === B.env.b_site_type &&
                B.et.customGoal("AfPcCWPFeaOTDKMDNdEWe", 2),
              this.removeHotels({ hotels: [i], list_id: t.list_id }).then(
                function (t) {
                  _i_("843:ad9869e3"), e.fulfill({ res: t, state: !1 }), _r_();
                }
              ))
            : ("mdot" === B.env.b_site_type &&
                B.et.customGoal("AfPcCWPFeaOTDKMDNdEWe", 1),
              this.addHotels({
                hotels: [{ hotel_id: t.hotel_id }],
                list_id: t.list_id,
              }).then(function (t) {
                _i_("843:4250f25f"), e.fulfill({ res: t, state: !0 }), _r_();
              })),
          _r_(e)
        );
      }),
      (s.prototype.addComparisonHotel = function (i) {
        _i_("843:b2eb92a9");
        var n = this,
          r = o(),
          s = d(i.hotel);
        return (
          this.emit("list:changed:loading", !0, i),
          _.updateComparisonHotel(
            { list_id: i.list_id, hotel_id: s, new_state: 1 },
            function (t) {
              _i_("843:9b3a9c3a");
              var e = n.getListById(i.list_id);
              if (!e) return _r_();
              if (
                ((e.hotels = e.hotels || []),
                Array.prototype.push.apply(
                  e.hotels,
                  n._prepareHotelsData(t.hotels_data)
                ),
                void 0 !== e.hotels_count && (e.hotels_count += 1),
                B.eventEmitter.trigger("lists:hotels:added", i),
                n.emit("list:changed:loading", !1, i),
                n.emit("list:changed", e, { hotel_ids: [s] }),
                r.fulfill(t),
                !n._backCompatibility)
              )
                return _r_();
              l({ params: { hotel_id: s, lists: i.list_id }, result: t }),
                _r_();
            }
          ),
          _r_(r)
        );
      }),
      (s.prototype._safePush = function (n, t) {
        _i_("843:5e623293"),
          t.forEach(function (t) {
            _i_("843:1652664c");
            var i = d(t),
              e = n.hotels.filter(function (t) {
                _i_("843:bb800c51");
                var e = d(t);
                return _r_(e.toString() !== i.toString());
              });
            e.push(t), (n.hotels = e), _r_();
          }),
          _r_();
      }),
      (s.prototype.addHotels = function (i) {
        _i_("843:86256015");
        var n = this,
          r = o(),
          s = i.hotels.map(d),
          t = n.getListById(i.list_id);
        return (
          (t.hotels = t.hotels || []),
          this._safePush(t, i.hotels),
          this.emit("list:changed:loading", !0, i),
          _.updateHotels(
            { list_id: i.list_id, hotel_ids: s, states: c(i.hotels.length, 1) },
            function (t) {
              _i_("843:db2170e6");
              var e = n.getListById(i.list_id);
              if (
                ((e.hotels = e.hotels || []),
                n._safePush(e, n._prepareHotelsData(t.hotels_data)),
                void 0 !== e.hotels_count && (e.hotels_count += 1),
                B.eventEmitter.trigger("lists:hotels:added", i),
                n.emit("list:changed:loading", !1, i),
                n.emit("list:changed", e, { hotel_ids: s }),
                r.fulfill(t),
                !n._backCompatibility)
              )
                return _r_();
              l({ params: { hotel_id: s[0], lists: i.list_id }, result: t }),
                _r_();
            }
          ),
          a.stage("aDMWRfDSdWUUHfLebbMEKCDWOOC", 2),
          _r_(r)
        );
      }),
      (s.prototype.getListByIndex = function (t) {
        return _i_("843:c87efe92"), _r_(this._lists[t]);
      }),
      (s.prototype.removeHotelsFromComparison = function (e) {
        _i_("843:c0809fad");
        var i = this,
          n = o(),
          r = e.hotels.map(d),
          t = c(e.hotels.length, 0),
          s = i.getListById(e.list_id);
        return (
          e.hotels.length === s.hotels.length
            ? (s.hotels.length = 0)
            : e.hotels.forEach(function (t) {
                _i_("843:393a0e6d");
                var e = i.getHotelIndexById({ hotel_id: d(t), list_id: s.id });
                -1 !== e && s.hotels.splice(e, 1), _r_();
              }),
          B.eventEmitter.trigger("hotels:before:removed", e),
          this.emit("list:changed:loading", !0, e),
          _.removeHotelsFromComparison(
            { list_id: e.list_id, hotel_ids: r, states: t },
            function (t) {
              if (
                (_i_("843:aa14527f"),
                s.hotels_count && (s.hotels_count -= e.hotels.length),
                B.eventEmitter.trigger("hotels:removed", e),
                i.emit("list:changed:loading", !1, e),
                i.emit("list:changed", s, { hotel_ids: r }),
                n.fulfill(t),
                !i._backCompatibility)
              )
                return _r_();
              l({
                params: { hotel_id: r[0], lists: e.list_id, new_state: 0 },
                result: t,
              }),
                _r_();
            }
          ),
          _r_(n)
        );
      }),
      (s.prototype.removeHotels = function (e) {
        _i_("843:49b4739d");
        var i = this,
          n = o(),
          r = i.getListById(e.list_id);
        e.hotels.forEach(function (t) {
          _i_("843:bd03cf07");
          var e = i.getHotelIndexById({ hotel_id: d(t), list_id: r.id });
          -1 !== e && r.hotels.splice(e, 1), _r_();
        }),
          B.eventEmitter.trigger("hotels:before:removed", e);
        var s = e.hotels.map(d);
        return (
          this.emit("list:changed:loading", !0, e),
          _.updateHotels(
            { list_id: e.list_id, hotel_ids: s, states: c(e.hotels.length, 0) },
            function (t) {
              if (
                (_i_("843:ef24c7c0"),
                r.hotels_count && (r.hotels_count -= e.hotels.length),
                B.eventEmitter.trigger("hotels:removed", e),
                i.emit("list:changed:loading", !1, e),
                i.emit("list:changed", r, { hotel_ids: s }),
                n.fulfill(t),
                !i._backCompatibility)
              )
                return _r_();
              l({
                params: { hotel_id: s[0], lists: e.list_id, new_state: 0 },
                result: t,
              }),
                _r_();
            }
          ),
          _r_(n)
        );
      }),
      (s.prototype.removeHotelFromListStore = function (t, e) {
        _i_("843:73489bea");
        var i = this.getListById(t),
          n = this.getHotelIndexById({ hotel_id: d(e), list_id: i.id });
        -1 !== n && i.hotels.splice(n, 1), _r_();
      }),
      (s.prototype.createList = function (e) {
        _i_("843:80c7ddb9");
        var i = this,
          n = o();
        return (
          _.createList(r.extend(e, { name: e.name }), function (t) {
            if ((_i_("843:489775ac"), !t.success || !t.id))
              return _r_(n.reject(t));
            i._lists.push(t),
              (t.hotels = []),
              (t.hotels_count = 0),
              e.hotel_id &&
                (t.hotels.push({ hotel_id: e.hotel_id }), t.hotels_count++),
              i.emit("list:created", t, { hotel_ids: [e.hotel_id] }),
              B.eventEmitter.trigger("lists:created", e),
              n.fulfill(t),
              _r_();
          }),
          a.stage("aDMWRfDSdWUUHfLebbMEKCDWOOC", 2),
          _r_(n)
        );
      }),
      (s.prototype.updateList = function (t) {
        _i_("843:71b43a41");
        var e = o(),
          i = this.getListById(t.list_id);
        return (
          r.extend(i, t),
          _.updateList(t, function (t) {
            _i_("843:2c5bd41d"), e.fulfill(t), _r_();
          }),
          _r_(e)
        );
      }),
      (s.prototype.getHotels = function (i) {
        _i_("843:aec412f4");
        var n = this,
          r = o();
        if (
          i.hotels &&
          0 < i.hotels.length &&
          Number(i.hotels_count) === i.hotels.length &&
          i.hotels[0].name
        )
          return r.fulfill(i), _r_(r);
        n.emit("list:hotels:loading", !0);
        var t = {
          id: i.id,
          with_hotels: 1,
          include_availability: 1,
          comparison_mode: B.env.fe_cdm_wl_fetch_additional_data,
        };
        return (
          B.et.track("aDMWRfDSdWUUHfLebbMPAFFLKZLXJOfAdIUFZZcO") &&
            (t.include_list_search_config = 1),
          _.list(t, function (t) {
            if ((_i_("843:a9e5eab0"), !t.success)) return _r_(r.reject(t));
            var e = t.lists[0];
            (i.hotels = n._prepareHotelsData(e.hotels)),
              e && e.travel_group && (i.travel_group = e.travel_group),
              n.emit("list:hotels:loading", !1),
              r.fulfill(i),
              _r_();
          }),
          _r_(r)
        );
      }),
      (s.prototype.removeList = function (i) {
        _i_("843:54b994e6");
        var t = this,
          n = -1;
        if (
          (this._lists.forEach(function (t, e) {
            _i_("843:075cbcae"),
              String(i.list_id) === String(t.id) && (n = e),
              _r_();
          }),
          -1 === n)
        )
          return _r_();
        this._lists.splice(n, 1),
          _.removeList({ list_id: i.list_id }, function () {
            _i_("843:6662f924"), t.emit("list:removed", i), _r_();
          }),
          _r_();
      }),
      (s.prototype._find = function (i) {
        _i_("843:c3585303");
        var n = null,
          r = -1,
          t = this.getListById(i.list_id);
        return (
          i.list_id
            ? t.hotels.forEach(function (t, e) {
                _i_("843:8736545e"),
                  d(t) === String(i.hotel_id) && ((n = t), (r = e)),
                  _r_();
              })
            : this._lists.forEach(function (t) {
                _i_("843:5d3377bf"),
                  t.hotels.forEach(function (t, e) {
                    _i_("843:90a83c36"),
                      d(t) === String(i.hotel_id) && ((n = t), (r = e)),
                      _r_();
                  }),
                  _r_();
              }),
          _r_({ index: r, res: n })
        );
      }),
      (s.prototype.getHotelById = function (t) {
        return _i_("843:17dc6528"), _r_(this._find(t).res);
      }),
      (s.prototype.getHotelIndexById = function (t) {
        return _i_("843:c9074247"), _r_(this._find(t).index);
      }),
      (s.prototype.fetch = function (e) {
        _i_("843:656c42b1"), (e = e || {});
        var i = this,
          n = o();
        if (this._requestsInProgress[JSON.stringify(e)])
          return _r_(this._requestsInProgress[JSON.stringify(e)]);
        if (0 < i._lists.length) {
          if (!e.hotel_id) return n.fulfill({ lists: i._lists }), _r_(n);
          if (i._fetchedHotelIds[e.hotel_id])
            return n.fulfill({ lists: i._lists }), _r_(n);
        }
        return (
          (this._requestsInProgress[JSON.stringify(e)] = n),
          e.hotel_id || i.emit("liststore:loading", !0),
          e.hotel_id
            ? _.list(r.extend({}, e), function (t) {
                _i_("843:5391845e"),
                  (i._fetchedHotelIds[e.hotel_id] = !0),
                  i._prepareListsData(t.lists, e).forEach(function (t) {
                    _i_("843:929ec912");
                    var e = i.getListById(t.id);
                    e
                      ? (e.hotels || (e.hotels = []),
                        t.hotels.forEach(function (t) {
                          _i_("843:c06bbdf7"),
                            i.getHotelById({
                              list_id: e.id,
                              hotel_id: i.getHotelId(t),
                            }) || e.hotels.push(t),
                            _r_();
                        }))
                      : i._lists.push(t),
                      _r_();
                  }),
                  (i._requestsInProgress[JSON.stringify(e)] = null),
                  n.fulfill(t),
                  _r_();
              })
            : _.list(r.extend({}, e), function (t) {
                if ((_i_("843:89747c73"), (i._lists.length = 0), null === t))
                  return _r_();
                Array.prototype.push.apply(
                  i._lists,
                  i._prepareListsData(t.lists, e)
                ),
                  i.emit("liststore:loading", !1),
                  (i._requestsInProgress[JSON.stringify(e)] = null),
                  n.fulfill(t),
                  _r_();
              }),
          _r_(n)
        );
      }),
      (s.prototype.getLists = function () {
        return _i_("843:4c651522"), _r_(this._lists);
      }),
      (s.prototype.clearCache = function () {
        _i_("843:5186e96b"), (this._lists.length = 0), _r_();
      }),
      (i.exports = new s()),
      _r_();
  }),
  B.define("lists/listview-header/listview-header", function (t, e, i) {
    "use strict";
    _i_("843:5c606cb2");
    var n = t("../listview-dropdown/listview-dropdown"),
      r = t("../lists-store/lists-store");
    (i.exports = function () {
      _i_("843:e2ad723a");
      var e = this,
        i = {
          RENAME: ".js-listview-header-list-rename",
          REMOVE: ".js-listview-header-list-remove",
        };
      function t() {
        _i_("843:fd1e2aa5");
        var t = r._lists.length <= 1;
        e.el.find(i.REMOVE).toggleClass("g-hidden", t), _r_();
      }
      r.on("list:removed", $.proxy(t, e)),
        r.on("list:created", $.proxy(t, e)),
        this.el.delegate(i.RENAME, "click", function (t) {
          _i_("843:65731034"),
            t.preventDefault(),
            n.renameList.call(e, e.getCurrentList()),
            _r_();
        }),
        this.el.delegate(i.REMOVE, "click", function (t) {
          _i_("843:42ea5233"),
            t.preventDefault(),
            n.removeList.call(e, e.getCurrentList()),
            _r_();
        }),
        this.el.delegate(".listview-header-recent-link", "click", function (t) {
          _i_("843:6067b4d8"),
            t.preventDefault(),
            e.toggleRecentlyViewed(),
            _r_();
        }),
        _r_();
    }),
      _r_();
  }),
  B.define("lists/listview-touch/listview-touch", function (t, e, i) {
    "use strict";
    function n() {
      _i_("843:12b35fe6"),
        $(document.body).toggleClass(
          "listview--is-tablet",
          B.env.b_is_tdot_traffic
        ),
        B.eventEmitter.bind("foldout:login:success", function () {
          if ((_i_("843:027f4e08"), !window.listView)) return _r_();
          window.listView.clearCache(), _r_();
        }),
        _r_();
    }
    _i_("843:706ade3d"),
      (n.isEnabled = function () {
        return _i_("843:008c2002"), _r_(B.env.b_is_tdot_traffic);
      }),
      (i.exports = n),
      _r_();
  }),
  B.define("lists/listview-dropdown/listview-dropdown", function (t, e, i) {
    "use strict";
    _i_("843:be7768ef");
    var o = t("jquery"),
      n = t("../lists-tools/lists-tools"),
      r = t("../lists-store/lists-store"),
      s = t("../listview-touch/listview-touch"),
      _ = t("component/wishlist/tracking"),
      l = _.expPageInteraction,
      d = _.expDetailPageRefactoring;
    function c() {
      _i_("843:37e2f82f");
      var a = this,
        t = "listview__dropdown";
      s.isEnabled() && (t += " listview__dropdown--touch"),
        o.fly.dropdown
          .extend({
            defaults: {
              position: "bottom center",
              extraClass: t,
              content: function () {
                return (
                  _i_("843:70a43466"),
                  _r_(
                    B.jstmpl("listview_dropdown").render({
                      lists: o.map(r._lists, function (t) {
                        return (
                          _i_("843:1527c1af"),
                          _r_(
                            o.extend({ name_short: n.ellipsis(t.name, 18) }, t)
                          )
                        );
                      }),
                      lists_count: r._lists.length,
                      currentList: a.getCurrentList(),
                      b_user_auth_level_is_low_or_high:
                        B.env.b_user_auth_level_is_low_or_high,
                      b_lang: B.env.b_lang,
                    })
                  )
                );
              },
            },
            onrootready: function () {
              _i_("843:272cd0e9");
              var i = this;
              i.bind("show", function () {
                _i_("843:d888caee"),
                  B.eventEmitter.trigger("listview:open-dropdown"),
                  l.customGoal("detailPage"),
                  _r_();
              });
              var t = i.root();
              t.css("z-index", 10004),
                t.delegate(".js-listview-change-list", "click", function (t) {
                  _i_("843:583460d0"), t.preventDefault();
                  var e = o(t.currentTarget).data("id");
                  a.setCurrentList({ id: e }),
                    B.eventEmitter.trigger("wl:updateList", e),
                    d.customGoal("switchList"),
                    i.hide(),
                    B.squeak(B.env.wl_squeak.switch_wishlist_list),
                    _r_();
                }),
                setTimeout(function () {
                  _i_("843:80f9212c");
                  var t = o(".listview__rename_input");
                  t.on("click", function (t) {
                    _i_("843:514af784"),
                      t.preventDefault(),
                      t.stopPropagation(),
                      _r_();
                  }),
                    t.off("keydown"),
                    t.off("keyup"),
                    t.off("keypress"),
                    t.on("change", function (t) {
                      _i_("843:5c6f3be2"),
                        t.preventDefault(),
                        t.stopPropagation();
                      var e = o(t.target),
                        i = e.val(),
                        n = e.closest(".listview__list"),
                        r = n.data("id"),
                        s = a.getListById(r);
                      c.renameList.call(a, s, i), e.hide();
                      var _ = n.find(".listmap__list_name");
                      _.text(i), _.show(), _r_();
                    }),
                    t.on("keydown", function (t) {
                      _i_("843:f7196558"), event.stopPropagation();
                      var e = o(event.target);
                      if (13 === t.which) {
                        t.preventDefault();
                        var i = e.val(),
                          n = e.closest(".listview__list"),
                          r = n.data("id"),
                          s = a.getListById(r);
                        c.renameList.call(a, s, i), e.hide();
                        var _ = n.find(".listmap__list_name");
                        _.text(i), _.show();
                      }
                      _r_();
                    }),
                    _r_();
                }, 0),
                t
                  .delegate(".js-listview-rename-list", "click", function (t) {
                    _i_("843:5fa70b79"),
                      t.preventDefault(),
                      t.stopPropagation();
                    var e = o(this).parent(),
                      i = e.find(".listmap__list_name"),
                      n = e.find(".listview__rename_input");
                    i.hide(),
                      o(".listview__rename_input").removeClass("active"),
                      n.addClass("active"),
                      n.show().focus().select(),
                      B.squeak(B.env.wl_squeak.rename_list_from_wl),
                      _r_();
                  })
                  .delegate(".js-listview-remove-list", "click", function (t) {
                    _i_("843:edb1238c"),
                      t.preventDefault(),
                      t.stopPropagation();
                    var e = o(t.currentTarget)
                      .closest(".listview__list")
                      .data("id");
                    c.removeList.call(a, { id: e }, function () {
                      _i_("843:110d259e"), i.show(), _r_();
                    }),
                      B.squeak(B.env.wl_squeak.delete_list_from_wl),
                      _r_();
                  })
                  .delegate(".js-listview-create-list", "click", function (t) {
                    _i_("843:3dbbcc5a"),
                      t.preventDefault(),
                      t.stopPropagation();
                    var e = o.trim(
                      window.prompt(
                        B.jstmpl.translations("lists_map_list_name"),
                        ""
                      )
                    );
                    if (!e) return _r_();
                    r.createList({ name: e }).then(function (t) {
                      _i_("843:eed859ff"),
                        a.setCurrentList({ id: t.id }),
                        i.hide(),
                        _r_();
                    }),
                      _r_();
                  }),
                _r_();
            },
          })
          .delegate(".js-listview-header-dropdown"),
        _r_();
    }
    (c.renameList = function (t, e) {
      _i_("843:0825e1f8");
      if (
        !(e =
          e ||
          o.trim(
            window.prompt(
              B.jstmpl.translations("dsf_rename_list_dialogue"),
              t.name
            )
          ))
      )
        return _r_();
      d.customGoal("renameList"),
        r.updateList({ list_id: t.id, name: e }),
        this.getCurrentList().id == t.id &&
          o(".wl-bui-header h1").text(n.htmlEncode(e)),
        this.renderHeader(),
        o(".js-listview-header-dropdown .bui-button__text").text(
          o(".wl-bui-header h1").text()
        ),
        _r_();
    }),
      (c.removeList = function (t, e) {
        _i_("843:b1fc010d");
        var i = o.trim(B.jstmpl.translations("wishlist_delete_prompt"));
        window.confirm(i) &&
          (d.customGoal("deleteList"),
          r.removeList({ list_id: t.id }),
          B.eventEmitter.trigger("listview:remove-list"),
          e && e()),
          _r_();
      }),
      (i.exports = c),
      _r_();
  }),
  B.define(
    "lists/listview-travel-party/listview-travel-party",
    function (t, e, i) {
      "use strict";
      _i_("843:04adaf06");
      var s = t("jquery"),
        _ = t("../lists-tools/lists-tools");
      if (B.env.is_dmw_d_wishlist_redesign) {
        var a = t("search/searchbox/model").getInstance("wl-bui-controls");
        a.use("group");
      }
      function r(t) {
        _i_("843:a30a7549"),
          setTimeout(function () {
            _i_("843:d121081c"), t.resizeLightbox(), _r_();
          }, 300),
          _r_();
      }
      function n() {
        _i_("843:63f4a80c");
        var n = this;
        B.env.b_is_wishlist_singlepage ||
          n.el.find(".b-selectbox__groupselection").bind("change", function () {
            _i_("843:44121b96"), r(n), _r_();
          }),
          B.eventEmitter.bind("change:list:hotels", function (t, e) {
            _i_("843:6205c0be");
            var i = e.travel_group;
            if (
              ((i && !s.isEmptyObject(i)) ||
                (i = { rooms: 1, adults: 2, children: 0 }),
              1 === Number(i.rooms) &&
                0 === Number(i.children) &&
                B.search.group("adults") === Number(i.adults))
            )
              return _r_();
            B.search.group(i), B.env.b_is_wishlist_singlepage || r(n), _r_();
          }),
          _r_();
      }
      (n.buildUrlPart = function () {
        _i_("843:d05ed965");
        var t = B.env.b_query_params_delimiter;
        if (B.env.is_dmw_d_wishlist_redesign)
          var e = a.group.get(),
            i = e.children_ages
              .map(function (t) {
                return _i_("843:e57c615c"), _r_("age=" + t);
              })
              .join(t),
            n = e.children_ages
              .map(function (t) {
                return _i_("843:13186953"), _r_("req_age=" + t);
              })
              .join(t),
            r =
              t +
              _.stringifyUrl(
                {
                  group_rooms: e.rooms_count,
                  group_adults: e.adults_count,
                  group_children: e.children_ages.length,
                  no_rooms: e.rooms_count,
                  req_adults: e.adults_count,
                  req_children: e.children_ages.length,
                },
                t
              ) +
              t +
              i +
              t +
              n;
        else
          (i = s
            .map(B.search.group("childrenAges"), function (t) {
              return _i_("843:e1259be6"), _r_("age=" + t);
            })
            .join(t)),
            (r =
              t +
              _.stringifyUrl(
                {
                  group_rooms: B.search.group("rooms"),
                  group_adults: B.search.group("adults"),
                  group_children: B.search.group("children"),
                },
                t
              ) +
              t +
              i);
        return _r_(r);
      }),
        (n.buildAvailabilityParams = function () {
          if ((_i_("843:3c01c14a"), B.env.is_dmw_d_wishlist_redesign))
            var t = a.group.get(),
              e = {
                rooms: t.rooms_count,
                adults: t.adults_count,
                children: t.children_ages.length,
                childrenAges: t.children_ages.join(" "),
              };
          else
            (e = _.pick(
              B.search.group("value"),
              "rooms",
              "adults",
              "children",
              "childrenAges"
            )).childrenAges && (e.childrenAges = e.childrenAges.join(" "));
          return _r_({ additional: e });
        }),
        (i.exports = n),
        _r_();
    }
  ),
  B.define("lists/listview-calendar/listview-calendar", function (t, e, i) {
    "use strict";
    _i_("843:e89b9a53");
    var c = t("../lists-tools/lists-tools"),
      u = t("../listview-hotel/listview-hotel"),
      h = t("../listview-availability/listview-availability"),
      f = "silent_update";
    function g() {
      if (
        (_i_("843:754b5e26"), B.calendar2 && g._bindEvents.call(this), B.search)
      ) {
        var n = B.search.dates;
        B.search.dates = function (t, e, i) {
          if ((_i_("843:8e4cc0a1"), void 0 === i))
            return _r_(n.apply(B.search, arguments));
          return (e = B.Search.createDate(e)), _r_(this.setDate_(t, e, i));
        };
      }
      _r_();
    }
    (g._bindEvents = function () {
      function i(t, e, i) {
        _i_("843:c457d633"),
          (t.availability[e] = i.toString()),
          (t.availability[e + "_localized_date_short"] = B.formatter.date(
            i.toString(),
            "short_date_without_year"
          )),
          _r_();
      }
      _i_("843:b54447ba");
      var n = 0,
        r = this,
        s = null,
        t = $.extend({}, B.calendar2.checkinOptions, { lazy: !1 }),
        e = $.extend({}, B.calendar2.checkoutOptions, { lazy: !1 }),
        _ = this.el
          .find(".b-form-checkin .b-datepicker")
          .calendar2(t)
          .data("calendar2"),
        a = this.el
          .find(".b-form-checkout .b-datepicker")
          .calendar2(e)
          .data("calendar2");
      function o(t) {
        _i_("843:c922f270");
        var e = B.Search.createDate(t);
        return _r_({
          date: e,
          dayId: B.calendar2.dayId(e.year, e.month, e.date),
          monthId: B.calendar2.monthId(e.year, e.month),
        });
      }
      function l(t) {
        _i_("843:2cb69e85");
        var e,
          i,
          n = (t && t.availability) || {};
        if (n.checkin && n.checkout) {
          var r = o(n.checkin),
            s = o(n.checkout);
          (e = r.date),
            (i = s.date),
            _i_("843:6e25a1fd"),
            B.eventEmitter.off("SEARCH:date_changed", d),
            i <= B.search.dates("checkout")
              ? (B.search.dates("checkin", e, { referrer: f }),
                B.search.dates("checkout", i, { referrer: f }))
              : (B.search.dates("checkout", i, { referrer: f }),
                B.search.dates("checkin", e, { referrer: f })),
            B.eventEmitter.bind("SEARCH:date_changed", d),
            _r_(),
            _.selectRange(r.dayId, s.dayId),
            _.selectMonth(r.monthId),
            a.selectRange(r.dayId, s.dayId),
            a.selectMonth(s.monthId);
        }
        _r_();
      }
      function d(t, e) {
        if ((_i_("843:7b628214"), !s || e.referrer === f)) return _r_();
        "checkin" === e.type && i(s, "checkin", e.value),
          "checkout" === e.type && i(s, "checkout", e.value),
          s.availability.checkout ||
            (g.ensureDates(), i(s, "checkout", B.search.dates("checkout"))),
          s.availability.checkin ||
            (g.ensureDates(), i(s, "checkin", B.search.dates("checkin"))),
          (n = setTimeout(function () {
            if ((_i_("843:41997e51"), n && window.clearTimeout(n), !s))
              return _r_();
            h.checkAvailability({
              list: r.getCurrentList(),
              hotels: [s],
              dates: c.pick(s.availability, "checkin", "checkout"),
            }),
              B.eventEmitter.trigger(
                "listview:check-single-hotel-availability"
              ),
              (s = null),
              _r_();
          }, 100)),
          _r_();
      }
      B.eventEmitter.bind("SEARCH:date_changed", d),
        this.el.delegate(".js-listview-toggle-calendar", "click", function (t) {
          _i_("843:4bc99277"),
            t.preventDefault(),
            (s = r.getHotelFromEvent(t)),
            u.setHotelProperty(s, "edit", !0);
          var e = $(t.currentTarget).attr("data-type");
          l(s),
            setTimeout(function () {
              _i_("843:70904e6c"),
                r.el
                  .find(".b-form-" + e + " .b-datepicker")
                  .trigger("showCalendar"),
                _r_();
            }, 0),
            _r_();
        }),
        _r_();
    }),
      (g.ensureDates = function () {
        if (
          (_i_("843:f16f53ce"),
          B.env.is_dmw_d_wishlist_redesign &&
            B.eventEmitter.trigger("listview:calendar:ensure-dates"),
          !(
            B.search.dates("checkin") instanceof B.Search.Date &&
            B.search.dates("checkout") instanceof B.Search.Date
          ))
        ) {
          var t = new Date();
          B.search.dates("checkin", {
            date: t.getDate(),
            month: t.getMonth(),
            year: t.getFullYear(),
          }),
            B.search.dates("checkout") instanceof B.Search.MonthDate &&
              B.search.dates("checkout", {
                date: 1,
                month: B.search.dates("checkout").month,
                year: B.search.dates("checkout").year,
              });
        }
        _r_();
      }),
      (i.exports = g),
      _r_();
  }),
  B.define("lists/listview-note/listview-note", function (t, e, i) {
    "use strict";
    _i_("843:cf18f9e1");
    var n = t("../lists-api/lists-api").API;
    function r(t) {
      _i_("843:685fa410"),
        $(t)
          .find("textarea")
          .each(function () {
            _i_("843:c6a8873d"),
              this.setAttribute(
                "style",
                "height:" + (this.scrollHeight - 5) + "px; overflow-y:hidden;"
              ),
              _r_();
          })
          .bind("input", function () {
            _i_("843:f81cfa45"),
              (this.style.height = "auto"),
              (this.style.height = this.scrollHeight - 5 + "px"),
              _r_();
          }),
        _r_();
    }
    (i.exports = function () {
      return (
        _i_("843:2a17d1f5"),
        $.extend(this, {
          noteInput: function (t, e) {
            _i_("843:54c35889");
            var i = this.getHotelNodeById(t.id).find(".js-listview-note-text");
            return "string" == typeof e && i.val(e), _r_(i.val());
          },
          toggleNote: function (t, e) {
            _i_("843:67731d23");
            var i = this.getHotelNodeById(t.id);
            i.find(".js-listview-note").toggleClass("g-hidden", !e),
              e && i.find(".js-listview-note-text").focus(),
              r(i),
              _r_();
          },
          toggleWrapper: function (t, e) {
            _i_("843:b16cd9ef"),
              this.getHotelNodeById(t.id)
                .find(".js-listview-note-toggle-wrapper")
                .css("visibility", e ? "visible" : "hidden"),
              _r_();
          },
          toggleNoteControls: function (t, e, i) {
            _i_("843:f53fbc2e");
            var n = this.getHotelNodeById(t.id);
            n.find(".listview-note__controls").toggleClass("g-hidden", !e),
              i && i.blur && n.find(".js-listview-note-text").blur(),
              _r_();
          },
          showSavedConfirmation: function (t) {
            if ((_i_("843:c42dd007"), "" === t.note)) return _r_();
            var e = this.getHotelNodeById(t.id),
              i = "listview-note__saved--showing",
              n = e.find(".js-listview-note-saved");
            n.addClass(i),
              setTimeout(function () {
                _i_("843:1dc285eb"), n.removeClass(i), _r_();
              }, 2e3),
              _r_();
          },
          setHotelNote: function (t) {
            _i_("843:0783f345");
            var e = this,
              i = this.getHotelById(t);
            (i.note = t.note),
              this.noteInput(i, t.note),
              n.updateNote(
                { list_id: t.list_id, hotel_id: t.hotel_id, note: t.note },
                function () {
                  _i_("843:be515b4a"), e.showSavedConfirmation(i), _r_();
                }
              ),
              _r_();
          },
          _bindNoteEvents: function () {
            _i_("843:6a76824d");
            var t = this;
            this.delegateEvents({
              "click .js-listview-note-toggle": function (t) {
                _i_("843:81a02e2f"), t.preventDefault();
                var e = this.getHotelFromEvent(t);
                this.toggleWrapper(e, !1), this.toggleNote(e, !0), _r_();
              },
              "mousedown .js-listview-note-save": function (t) {
                _i_("843:69f705dd"), t.preventDefault();
                var e = this.getHotelFromEvent(t);
                this.setHotelNote({
                  hotel_id: e.id,
                  list_id: this.currentList().id,
                  note: this.noteInput(e),
                }),
                  this.toggleNoteControls(e, !1, { blur: !0 }),
                  _r_();
              },
              "mousedown .js-listview-note-remove": function (t) {
                _i_("843:326e5884"), t.preventDefault();
                var e = this.getHotelFromEvent(t);
                this.toggleWrapper(e, !0),
                  this.toggleNote(e, !1),
                  this.setHotelNote({
                    hotel_id: e.id,
                    list_id: this.currentList().id,
                    note: "",
                  }),
                  this.toggleNoteControls(e, !1, { blur: !0 }),
                  _r_();
              },
              "blur .js-listview-note-text": function (t) {
                _i_("843:d9779921");
                var e = this.getHotelFromEvent(t);
                $(t.currentTarget).removeClass("listview-note__text--active"),
                  this.toggleNoteControls(e, !1),
                  e.note ||
                    this.noteInput(e) ||
                    (this.toggleNote(e, !1), this.toggleWrapper(e, !0)),
                  _r_();
              },
              "focus .js-listview-note-text": function (t) {
                _i_("843:f9cedccb");
                var e = this.getHotelFromEvent(t);
                $(t.currentTarget).addClass("listview-note__text--active"),
                  this.toggleNoteControls(e, !0),
                  _r_();
              },
            }),
              B.eventEmitter.bind("listview:rendered:hotels", function () {
                _i_("843:4f67f87f"), r(t.el), _r_();
              }),
              B.eventEmitter.bind("listview:rendered:hotel", function (t, e) {
                _i_("843:7d028771"), r(e), _r_();
              }),
              _r_();
          },
        }),
        _r_(this)
      );
    }),
      _r_();
  }),
  B.define("lists/listview-tabs/listview-tabs", function (t, e, i) {
    "use strict";
    function n(t) {
      if ((_i_("843:b62f9dd0"), (this._el = t.el), 0 === this._el.length))
        return _r_();
      (this._currentTab = null),
        this.currentTab(t.current),
        (this.onSwitch = t.onSwitch),
        _r_();
    }
    _i_("843:8c262ccc"),
      (n.prototype.currentTab = function (t) {
        if ((_i_("843:19c2d735"), void 0 === t)) return _r_(this._currentTab);
        var e = this._el.find('[data-tab="' + t + '"]');
        if (0 === e.length) throw new Error("[listview-tabs] No such tab");
        this._currentTab = t;
        var i = e.data("tab-template");
        i && 0 === e.children().length && e.html(B.jstmpl(i).render()),
          "function" == typeof this.onSwitch && this.onSwitch(t, e),
          this._el.find("[data-tab]").not(e).addClass("g-hidden"),
          e.removeClass("g-hidden"),
          _r_();
      }),
      (i.exports = n),
      _r_();
  }),
  B.define("lists/listview-share/listview-share", function (t, e, i) {
    "use strict";
    _i_("843:9c672330");
    var n = t("jquery"),
      r = t("component/wishlist/tracking").expPageInteraction;
    (i.exports = function () {
      _i_("843:66d0d26e");
      var t = this;
      if (
        (this.delegateEvents({
          "click .js-listview-share-link": function () {
            _i_("843:ae7a29c1"),
              r.customGoal("detailPage"),
              B.squeak(B.env.wl_squeak.share_wishlist),
              _r_();
          },
        }),
        "0" === B.env.auth_level)
      )
        return (
          this.delegateEvents({
            "click .js-listview-share-link": function (t) {
              _i_("843:90b1e825"),
                t.preventDefault(),
                B.lightbox.hide(),
                B.command("show-auth-lightbox").run(),
                _r_();
            },
          }),
          _r_()
        );
      n.fly.dropdown
        .extend({
          defaults: {
            position: "bottom center",
            extraClass: "listview-share",
            content: function () {
              return (
                _i_("843:7bc1d070"),
                _r_(
                  B.jstmpl("listview_share").render(
                    n.extend(t.getCurrentList(), {
                      b_selected_language: B.env.b_selected_language,
                    })
                  )
                )
              );
            },
          },
          selectInput: function () {
            _i_("843:0af636dc"),
              setTimeout(
                function () {
                  _i_("843:13cae5b7"),
                    this.root().find(".js-listview-share-url").select(),
                    _r_();
                }.bind(this),
                100
              ),
              _r_();
          },
          handleClick: function (t) {
            _i_("843:6fa23c0b"), t.preventDefault();
            var e = n(".listview_dropdown__link"),
              i = e.length ? e.text().trim() : "";
            B.require("ga-tracker").trackEvent(
              "Listview",
              "send-to-friend",
              "list-name:" + i
            ),
              this.selectInput(),
              _r_();
          },
          onrootready: function () {
            _i_("843:d6a38831");
            var t = this;
            this.bind("show", this.selectInput.bind(this)),
              this.bind("show", function () {
                _i_("843:6d547d73"), t.root().loadComponents(), _r_();
              }),
              this.root()
                .css("z-index", 10004)
                .delegate(
                  ".js-listview-share-url",
                  "click",
                  this.handleClick.bind(this)
                ),
              _r_();
          },
        })
        .delegate(".js-listview-share-link"),
        _r_();
    }),
      _r_();
  }),
  B.define("lists/lists-listview/lists-listview", function (t, e, i) {
    "use strict";
    _i_("843:a817f871");
    var r = t("../lists-tools/lists-tools"),
      _ = t("../lists-api/lists-api"),
      s = t("../lists-store/lists-store"),
      n = t("../listview-dropdown/listview-dropdown"),
      a = t("../listview-travel-party/listview-travel-party"),
      o = t("../listview-calendar/listview-calendar"),
      l = t("../listview-header/listview-header"),
      d = t("../listview-touch/listview-touch"),
      c = t("../listview-share/listview-share"),
      u = t("lists/listview-header/listview-create-list"),
      h = t("../listview-template/listview-template"),
      f = t("../listview-availability/listview-availability"),
      g = t("jquery"),
      v = t("ga-tracker"),
      p = t("server-data"),
      m = t("component/wishlist/tracking").expPageInteraction;
    function b(t) {
      _i_("843:d6412c18"),
        p.b_is_shared_wishlist &&
          B.squeak(B.env.wl_squeak.visit_shared_wishlist_from_desktop),
        (this.el = t.el),
        (this._currentList = {
          id: "",
          hotels: [],
          name: "",
          url: "",
          privacy: "",
          hotels_count: 0,
        }),
        (this._prevList = null),
        (this.store = s),
        (this._isShown = !1),
        s.on("hotel:init", function (t) {
          _i_("843:23322de5"),
            f.setHotelAvailability(t, t.availability || {}, {
              updateNights: !0,
              silent: !0,
            }),
            _r_();
        }),
        d.isEnabled() && d.call(this),
        _r_();
    }
    (b.prototype.renderHeader = function () {
      if (
        (_i_("843:572efadd"),
        B.env.b_is_hybrid && B.env.is_dmw_d_wishlist_redesign)
      )
        return _r_(!1);
      var t = this.getCurrentList(),
        e = B.jstmpl("listview_header").render(
          g.extend(
            {
              currentList: t,
              b_selected_language: B.env.b_selected_language,
              prevList: this.getPrevList(),
            },
            h.getEnv()
          )
        );
      this.el.find(".js-listview-header-wrapper").html(e).loadComponents(),
        (this.popoverInstance = window.BUI.createInstance(
          "Popover",
          g(".js-listview-create-list")[0],
          {
            position: "top",
            trigger: "click",
            contentId: "wl-create-list__container",
          }
        )),
        this.popoverInstance.mount(),
        _r_();
    }),
      (b.prototype.renderControls = function (t) {
        _i_("843:0e46a893");
        var e = t || this.getCurrentList(),
          i = B.jstmpl("listview_controls_bui").render(g.extend(e, h.getEnv()));
        this.el.find(".listview__controls--contents").html(i).loadComponents(),
          B.eventEmitter.trigger("listview:rendered:controls", e),
          _r_();
      }),
      (b.prototype.renderSignInBanner = function () {
        _i_("843:0a00e079");
        var t = this.el.find(".js-hotel-cards"),
          e = B.jstmpl("wishlist_sign_in_banner").render({
            disabled: g.cookie("tfl_listview_show_signin_banner"),
          });
        t.prepend(e), t.loadComponents(), _r_();
      }),
      (b.prototype.getHotelById = function (t) {
        return (
          _i_("843:71dec814"),
          (t.list_id = t.list_id || this.getCurrentList().id),
          _r_(s.getHotelById(t))
        );
      }),
      (b.prototype.getHotelNodesById = function (t) {
        return (
          _i_("843:9380020c"),
          _r_(this.el.find('.listview-hotel[data-id="' + String(t) + '"]'))
        );
      }),
      (b.prototype.getHotelNodeFromEvent = function (t) {
        return (
          _i_("843:168e5f3b"),
          _r_(g(t.currentTarget).closest(".listview-hotel"))
        );
      }),
      (b.prototype.getHotelFromEvent = function (t) {
        _i_("843:624d3e46");
        var e = this.getHotelNodeFromEvent(t).attr("data-id");
        return _r_(e && this.getHotelById({ hotel_id: e }));
      }),
      (b.prototype.delegateEvents = function (t) {
        for (var e in (_i_("843:b0ba2064"), t)) {
          var i = e.split(" ");
          this.el.delegate(i[1], i[0], t[e].bind(this));
        }
        return _r_(this);
      }),
      (b.prototype._bindEvents = function () {
        _i_("843:ad2063fa");
        var i = this;
        s.on("list:hotels:loading", function (t) {
          _i_("843:596e2ec6"),
            t
              ? B.env.is_dmw_d_wishlist_redesign &&
                g(".wl-bui-calendar-controls").hide()
              : B.env.is_dmw_d_wishlist_redesign &&
                g(".wl-bui-calendar-controls").show(),
            _r_();
        }),
          s.on("list:removed", function (t) {
            if (
              (_i_("843:5fd420b4"),
              String(i.getCurrentList().id) !== String(t.list_id))
            )
              return _r_();
            var e = s.getListByIndex(0);
            if (!e) return _r_();
            B.eventEmitter.trigger("wl:updateList", e.id),
              i.setCurrentList(e),
              _r_();
          }),
          B.eventEmitter.bind("change:list", function (t, e) {
            _i_("843:3de853e8"), e && i.renderHeader(), _r_();
          }),
          B.eventEmitter.bind(
            "change:lists:hotel_count",
            function (t, e) {
              _i_("843:b3f20ff3");
              var i = B.jstmpl.translations(
                "d_dmw_wl_num_properties_saved",
                e,
                { num_properties_saved: e }
              );
              g(".wl-bui-num-props span").html(i), _r_();
            }.bind(this)
          ),
          B.eventEmitter.bind(
            "wl:updateHotelCount",
            function (t, e) {
              _i_("843:899f0506"), (this._currentList.hotels_count = e), _r_();
            }.bind(this)
          ),
          B.eventEmitter.bind("wl:hotelsDidUpdate", function (t, e) {
            _i_("843:43988dfa"),
              !p.b_user_auth_level_is_low_or_high &&
                e.hotels.length &&
                i.renderSignInBanner(),
              e.hotels.length &&
                (i.renderControls(e),
                i.el
                  .find(".listview__controls--contents")
                  .removeClass("g-hidden")),
              _r_();
          }),
          B.eventEmitter.bind("wl:updateList", function (t) {
            _i_("843:85023147"),
              i.el.find(".listview__controls--contents").addClass("g-hidden"),
              _r_();
          }),
          B.eventEmitter.bind("change:hotel", function (t, e) {
            _i_("843:1a9047ff"), i.renderHotel(e), _r_();
          }),
          this.delegateEvents({
            "click .js-go-to-list": function () {
              _i_("843:5b84444d"),
                B.eventEmitter.trigger("listview:go-to-listmap-page"),
                _r_();
            },
            "click .js-listview-hotel-title": function () {
              _i_("843:d1443796"),
                B.eventEmitter.trigger("listview:click-on-hotel-link"),
                _r_();
            },
            "click .js-listview-hotel-image": function () {
              _i_("843:3a1773fe"),
                B.eventEmitter.trigger("listview:click-on-hotel-image"),
                _r_();
            },
            "click .js-listview-book": function (t) {
              _i_("843:984f132a"),
                B.eventEmitter.trigger("listview:book-now-clicked", {
                  hotelId: t.currentTarget.getAttribute("data-link-id"),
                }),
                m.customGoal("detailPage"),
                _r_();
            },
            "click .js-listview-footer-signin-link": function (t) {
              _i_("843:46525295"),
                t.preventDefault(),
                v.trackEvent("Listview", "sticky-notification", "sign-in"),
                B.lightbox.hide(),
                B.command("show-auth-lightbox").run(),
                _r_();
            },
            "click .js-listview-footer-remove-msg": function (t) {
              _i_("843:3562d672"),
                t.preventDefault(),
                i.toggleSigninBlock(!1),
                _r_();
            },
          }),
          B.env.b_is_shared_wishlist &&
            (g(".js-listview-footer-signin-link").on("click", function (t) {
              _i_("843:1cac7490"),
                t.preventDefault(),
                B.lightbox.hide(),
                B.command("show-auth-lightbox").run(),
                _r_();
            }),
            g(".js-listview-signin-banner-remove").on("click", function (t) {
              _i_("843:70069587"),
                t.preventDefault(),
                g.cookie("tfl_listview_show_signin_banner", 1, {
                  expires: 999,
                  path: "/",
                }),
                g(this).closest(".listview-signin-banner").remove(),
                _r_();
            })),
          B.env.b_is_wishlist_singlepage ||
            g(window).resize(
              r.throttle(function () {
                _i_("843:a1e0765a"), i.resizeLightbox(), _r_();
              }, 1e3)
            ),
          o.call(this),
          n.call(this),
          d.isEnabled() || a.call(this),
          l.call(this),
          c.call(this),
          u.call(this),
          this._bindGA(),
          _r_();
      }),
      (b.prototype.toggleUndoBlockAnimation = function (t) {
        _i_("843:a2da3db4"),
          clearTimeout(t.hide_timeout_id),
          (t.b_removed = !1),
          this.getHotelNodesById(t.id).removeClass("listview-hotel--undo"),
          t.b_undo &&
            (t.hide_timeout_id = setTimeout(
              this.hideUndoBlock.bind(this, t),
              4e3
            )),
          _r_();
      }),
      (b.prototype.updateCarousel = function (t) {
        _i_("843:98a7f656");
        var e = g(".mywishlist-is-bui .bui-carousel");
        e.removeClass(
          "bui-carousel--small bui-carousel--medium bui-carousel--large"
        ),
          t <= 3
            ? e.addClass("bui-carousel--large")
            : t <= 4
            ? e.addClass("bui-carousel--medium")
            : e.addClass("bui-carousel--small"),
          _r_();
      }),
      (b.prototype.hideUndoBlock = function (i) {
        if ((_i_("843:a11f81e9"), !i.b_undo)) return _r_();
        this.getHotelNodesById(i.id).each(
          function (t, e) {
            if (
              (_i_("843:c7e685a3"),
              !(e = g(e)).hasClass("listview-hotel--undo"))
            )
              return _r_();
            (i.b_removed = !0),
              e.addClass("listview-hotel--hide"),
              B.env.is_dmw_d_wishlist_redesign &&
                ((e = e.parent()), this.updateCurrentListHotelsCount()),
              setTimeout(function () {
                _i_("843:6f0414ba"),
                  i.b_undo &&
                    (e.remove(),
                    window.BUI.getInstance(
                      document.getElementById("js-wishlist-carousel")
                    ).update()),
                  _r_();
              }, 1e3),
              _r_();
          }.bind(this)
        ),
          _r_();
      }),
      (b.prototype.toggleSigninBlock = function (t) {
        _i_("843:6b214c25"),
          this.el
            .find(".js-listview-footer-signin")
            .toggleClass("g-hidden", !t),
          t ||
            g.cookie("tfl_listview_lightbox_show_signin_block", 1, {
              expires: 999,
              path: "/",
            }),
          B.env.b_is_wishlist_singlepage || this.resizeLightbox(),
          _r_();
      }),
      (b.prototype._bindGA = function () {
        _i_("843:02b93824");
        B.eventEmitter.bind(
          [
            "listview:show",
            "listview:hide",
            "listview:open-dropdown",
            "listview:go-to-listmap-page",
            "listview:remove-hotel",
            "listview:check-single-hotel-availability",
            "listview:check-all-hotels-availability",
            "listview:remove-list",
            "listview:book-now-clicked",
            "listview:click-on-hotel-link",
            "listview:click-on-hotel-image",
          ].join(" "),
          function (t, e) {
            _i_("843:c5af67e0");
            var i = t.type.toString(),
              n = {
                loggedIn: B.env.b_user_auth_level_is_low
                  ? "logged_in"
                  : "logged_out",
                pb: B.env.b_reg_user_detail_bookings_count,
                ac: B.env.b_action,
              };
            "listview:book-now-clicked" === i &&
              ((i = "book-now-clicked"), (n.PropertyID = e.hotelId)),
              this.getCurrentList() &&
                this.getCurrentList().hotels &&
                g.extend(n, {
                  L: s._lists.length,
                  H: this.getCurrentList().hotels.length,
                  pr: this.getCurrentList().privacy,
                }),
              v.trackEvent("Listview", i, r.stringifyUrl(n, " : ")),
              _r_();
          }.bind(this)
        ),
          _r_();
      }),
      (b.prototype.clearCache = function () {
        return _i_("843:b8cfe9db"), _r_(s.clearCache());
      }),
      (b.prototype.getLists = function () {
        _i_("843:c13c1633");
        var t = {};
        g.extend(t, { with_hotels: 0, include_availability: 0 });
        var e = s.fetch(t);
        return _r_(e);
      }),
      (b.prototype.getListById = function (t) {
        return _i_("843:7737fc13"), _r_(s.getListById(t));
      }),
      (b.prototype.getCurrentList = function () {
        return _i_("843:05086e88"), _r_(this._currentList);
      }),
      (b.prototype.updateCurrentListHotelsCount = function () {
        _i_("843:09f89b32");
        var e = 0;
        return (
          this._currentList.hotels.map(function (t) {
            _i_("843:10c6eb60"), t.b_removed || e++, _r_();
          }),
          (this._currentList.hotels_count = e),
          B.eventEmitter.trigger("change:lists:hotel_count", e),
          _r_(e)
        );
      }),
      (b.prototype.getPrevList = function () {
        return _i_("843:8d30bb84"), _r_(this._prevList);
      }),
      (b.prototype.setCurrentList = function (t) {
        _i_("843:9be50f5a");
        var e = this;
        if (
          ((this._prevList = this._currentList),
          (this._currentList = this.getListById(t.id)),
          !this._currentList)
        )
          return _r_(null);
        return (
          setTimeout(function () {
            _i_("843:c89de83a"),
              B.env.b_is_shared_wishlist ||
                B.eventEmitter.trigger("change:list", e._currentList),
              (e.lastSelectedListId = e._currentList.id),
              _r_();
          }, 0),
          _r_(this._currentList)
        );
      }),
      (b.prototype.removeRackRateLoadingIcon = function (t) {
        _i_("843:1b825893"),
          setTimeout(function () {
            _i_("843:a19feea4"),
              t
                .find(
                  ".js-listview-rack-rate-animated, .js-listview-price-animated"
                )
                .removeClass(
                  "listview-rack-rate-animated listview-price-animated"
                ),
              _r_();
          }, 1500),
          _r_();
      }),
      (b.prototype.getHotelTmplName = function (t) {
        if ((_i_("843:2b2356d3"), B.env.b_is_tdot_traffic))
          return _r_("listview_hotel_simple");
        if (B.env.is_dmw_d_wishlist_redesign) return _r_("listview_hotel_bui");
        return _r_("listview_hotel");
      }),
      (b.prototype.renderHotel = function (s) {
        _i_("843:f0f8809a"),
          this.getHotelNodesById(s.id).each(
            function (t, e) {
              _i_("843:5efa9162"), (e = g(e));
              var i = this.getHotelTmplName(e),
                n = h.prepare(s);
              (n.b_user_auth_level = parseInt(B.env.auth_level)),
                (n.b_site_type = B.env.b_site_type),
                (n.b_guest_country = B.env.b_guest_country),
                (n.b_reg_user_is_genius = B.env.b_reg_user_is_genius);
              var r = g(B.jstmpl(i).render(n));
              e.replaceWith(r),
                B.eventEmitter.trigger("listview:rendered:hotel", r),
                _r_();
            }.bind(this)
          ),
          this.removeRackRateLoadingIcon(this.el.find(".js-listview-hotels")),
          _r_();
      }),
      (b.prototype.renderHotelCards = function (t) {
        _i_("843:5869a82d");
        var e = this.el.find(".js-hotel-cards"),
          i = B.jstmpl("wishlist_hotel_carousel").render({ wl_list_id: t });
        e.append(i), e.loadComponents(), _r_();
      }),
      (b.prototype.renderHotels = function (t) {
        _i_("843:fe4c2509");
        var e = this;
        t.hotels &&
          t.hotels.sort(function (t, e) {
            _i_("843:01208d60");
            var i = new Date(t.added_date || 0),
              n = new Date(e.added_date || 0);
            return _r_(
              i.getTime() == n.getTime()
                ? t.id - e.id
                : i.getTime() - n.getTime()
            );
          }),
          B.env.is_dmw_d_wishlist_redesign && e.renderControls();
        var i = g.extend(
            {
              is_recently_viewed: t.is_recently_viewed,
              hotels_count: t.hotels_count,
              hotels: t.hotels.map(function (t) {
                return _i_("843:b866f3ae"), _r_(h.prepare(t));
              }),
              showListsSurvey: B.env.showListsSurvey,
              fe_use_simple_hotels: B.env.b_is_tdot_traffic,
              b_show_bbtool_sr_admin_favourite_hotel_badge: B.env
                .b_show_bbtool_sr_admin_favourite_hotel_badge
                ? 1
                : 0,
              b_selected_language: B.env.b_selected_language,
              b_user_auth_level: parseInt(B.env.auth_level),
              b_site_type: B.env.b_site_type,
              b_reg_user_is_genius: B.env.b_reg_user_is_genius,
            },
            h.getEnv(),
            _.currentHotel()
          ),
          n = this.el.find(".js-listview-hotels"),
          r = "listview_hotels";
        B.env.b_is_tdot_traffic && (r = "listview_hotels_simple");
        var s = B.jstmpl(r).render(i);
        return (
          n.html(s),
          B.env.b_is_wishlist_singlepage ||
            setTimeout(function () {
              _i_("843:e3b45ab9"), e.resizeLightbox(), _r_();
            }, 0),
          this.removeRackRateLoadingIcon(n),
          window.BUI.createInstance(
            "Carousel",
            g("#js-wishlist-carousel")[0]
          ).mount(),
          _r_(this)
        );
      }),
      (b.prototype.updateRootClassNames = function () {
        _i_("843:0fc0f0b9");
        var t = B.jstmpl("listview_root_classnames").render({
          b_action: B.env.b_action,
          shown: this._isShown,
          singlePage: !0,
          full_width: !0,
        });
        (this.el.get(0).className = t), _r_();
      }),
      (b.prototype.show = function (t) {
        _i_("843:85c4eaff");
        var e = this;
        this._binded || (this._bindEvents(), (this._binded = !0)),
          (e._isShown = !0),
          B.eventEmitter.trigger("listview:show", this),
          B.events.trigger("listview:show", this);
        this.updateRootClassNames(),
          this.renderHeader(),
          this.renderHotelCards(t),
          B.env.b_is_wishlist_singlepage ||
            B.lightbox.show(e.el, {
              bAnimation: !0,
              customWrapperClassName: "listview_lightbox",
              hideCallBack: function () {
                _i_("843:0b1772bf"),
                  B.eventEmitter.trigger("listview:hide"),
                  (e._isShown = !1),
                  e.updateRootClassNames(),
                  _r_();
              },
            }),
          g(".user_center_popover").hide(),
          "myreservations" === B.env.b_action &&
            setTimeout(function () {
              _i_("843:d07aabd4"), g(".modal-mask").css("zIndex", 10003), _r_();
            }, 0),
          B.env.auth_level < 1 &&
            !g.cookie("tfl_listview_lightbox_show_signin_block") &&
            2 < this.getCurrentList().hotels_count &&
            this.toggleSigninBlock(!0),
          _r_();
      }),
      (b.prototype.isShown = function () {
        return _i_("843:c5936cf7"), _r_(this._isShown);
      }),
      (b.prototype.resizeLightbox = function () {
        _i_("843:e2fa35e8");
        var t = this.el.find(".listview-footer").outerHeight();
        t = 0 < t ? t + 15 : t;
        var e = g(".listview_lightbox").height(),
          i = this.el.find(".listview__controls").is(":visible")
            ? this.el.find(".listview__controls").outerHeight()
            : 0;
        this.el.find(".js-listview-hotels").height(e - (75 + i) - t), _r_();
      }),
      (i.exports = b),
      _r_();
  }),
  B.define("component/lists/listview-empty-list", function (t, e, i) {
    "use strict";
    _i_("843:32455c90");
    var n = t("../lists-api/lists-api").API,
      r = {
        _hotels: [],
        get: function (e) {
          _i_("843:b33f5e9d");
          var i = this;
          n.getRecentlyViewed({ limit: 5 }, function (t) {
            _i_("843:c9bfd546"),
              (i._hotels = t.hotels),
              e(null, i._hotels),
              _r_();
          }),
            _r_();
        },
      };
    (i.exports = t("component").extend({
      tmpl: B.jstmpl("listview_empty_list_recently_viewed"),
      state: { recentlyViewedHotels: [] },
      setState: function (t) {
        _i_("843:51a9e06a"), $.extend(this.state, t), this.render(), _r_();
      },
      fetch: function () {
        _i_("843:c8069290");
        var i = this;
        r.get(function (t, e) {
          _i_("843:90a0dab4"), i.setState({ recentlyViewedHotels: e }), _r_();
        }),
          _r_();
      },
      render: function () {
        _i_("843:a8a6aca1");
        var t = this.tmpl.render(this.state);
        this.$el.html(t),
          this.$el
            .find(".js-listview-empty-list-recently-viewed")
            .hide()
            .slideDown(),
          _r_();
      },
      init: function () {
        _i_("843:a853249b"), this.render(), this.fetch(), _r_();
      },
    })),
      _r_();
  }),
  B.define("lists/listview-template/listview-template", function (t, e, i) {
    "use strict";
    _i_("843:7e4c70ea");
    var r = t("../lists-tools/lists-tools"),
      s = t("../listview-travel-party/listview-travel-party"),
      _ = t("../listview-touch/listview-touch"),
      a = t("../lists-store/lists-store");
    (i.exports = {
      getEnv: function () {
        return (
          _i_("843:7bfcb9ce"),
          _r_({
            b_action: B.env.b_action,
            b_user_auth_level_is_low_or_high:
              B.env.b_user_auth_level_is_low_or_high,
            has_cookie_tfl_listview_show_signin_banner: Boolean(
              $.cookie("tfl_listview_show_signin_banner")
            ),
            is_desktop: "1" === B.env.b_site_type_id,
            is_logged_in: 0 < B.env.auth_level,
            b_lang_is_rtl: B.env.rtl,
            b_is_hybrid: B.env.b_is_hybrid,
            is_inside_listview: 1,
            is_shared_wl: B.env.b_is_shared_wishlist,
            is_wl_using_bui: B.env.is_dmw_d_wishlist_redesign,
            b_reg_user_wishlist_remaining: B.env.b_reg_user_wishlist_remaining,
            b_wishlist_referrer: B.env.b_wishlist_referrer,
            b_ip_country: B.env.ip_country,
            b_selected_language: B.env.b_selected_language,
          })
        );
      },
      buildHotelLink: function (t, e) {
        _i_("843:e0547f0c");
        var i =
            0 === t.url.indexOf("http")
              ? t.url
              : B.env.b_nonsecure_hostname + t.url,
          n = B.env.b_query_params_delimiter;
        return (
          t.availability &&
            t.availability.checkin &&
            t.availability.checkout &&
            (i =
              i +
              n +
              r.stringifyUrl(r.pick(t.availability, "checkin", "checkout"), n)),
          _.isEnabled() || (i += s.buildUrlPart()),
          e && e.from_list && (i = i + n + "from_list=1"),
          B.env.b_label && (i = i + n + "label=" + B.env.b_label),
          B.env.b_aid && !/aid=/.test(i) && (i = i + n + "aid=" + B.env.b_aid),
          e && e.from_history && (i = i + n + "bhh=1"),
          e &&
            e.goToRoomTable &&
            (i = i + "#" + (t.availability.is_available ? "hprt-table" : "")),
          _r_(i)
        );
      },
      prepare: function (t, e) {
        _i_("843:98f99bef");
        var i = { from_list: 1 };
        e && e.from_history && (i.from_history = !0);
        $.extend(i, { goToRoomTable: !0 });
        var n = $.extend(
          {},
          t,
          {
            id: a.getHotelId(t),
            fe_cnd_b_lang: B.env.fe_cnd_b_lang,
            ip_country: B.env.ip_country,
            b_guest_country: B.env.b_guest_country,
            b_countrycode: t.cc1,
            b_bookings_owned: B.env.b_bookings_owned,
            b_partner_channel_id: B.env.b_partner_channel_id,
            absolute_url: this.buildHotelLink(t, e),
            book_now_url: this.buildHotelLink(t, i),
            has_availability:
              !$.isEmptyObject(t.availability) &&
              void 0 !== t.availability.is_available,
            available: Boolean(t.availability.is_available),
            edit: Boolean(t.edit),
            hotel_min_rate_num: parseFloat(t.hotel_min_rate_num),
            hotel_review_score_non_localized: parseFloat(
              t.hotel_review_score_non_localized
                ? t.hotel_review_score_non_localized
                : t.hotel_review_score
            ),
            name_ellipsis:
              t.name && 35 < t.name.length
                ? t.name.slice(0, 35) + "&hellip;"
                : t.name,
            has_animated_icon: B.env.is_pm_d_ms_wl,
          },
          this.getEnv(),
          e
        );
        return (
          n.availability &&
            (n.availability.checkin &&
              n.availability.checkout &&
              (n.availability.nights =
                B.Search.createDate(n.availability.checkout).valueOf() -
                B.Search.createDate(n.availability.checkin).valueOf()),
            (n.min_rate_availability = n.availability.is_available
              ? n.availability.price
              : void 0),
            (n.b_rooms_left = n.availability.rooms_available)),
          n.b_main_photos && (n.b_first_photo = n.b_main_photos[0]),
          _r_(n)
        );
      },
    }),
      _r_();
  }),
  B.define("lists/listview-hotel/listview-hotel", function (t, e, i) {
    "use strict";
    _i_("843:f1a74e05");
    var n = t("../lists-store/lists-store");
    (i.exports = {
      setHotelProperty: function (t, e, i) {
        return (
          _i_("843:f3f6b168"),
          (t[e] = i),
          n.emit("change:hotel_" + e, t, e),
          _r_(t)
        );
      },
    }),
      _r_();
  }),
  B.define(
    "lists/listview-availability/listview-availability",
    function (t, e, i) {
      "use strict";
      _i_("843:bb64a617");
      var a = t("../lists-api/lists-api").API,
        o = t("../lists-store/lists-store"),
        l = t("../listview-hotel/listview-hotel"),
        d = t("../listview-touch/listview-touch"),
        c = t("../listview-travel-party/listview-travel-party");
      (i.exports = {
        setHotelAvailability: function (t, e, i) {
          _i_("843:e0b92d39"),
            (t.availability = e),
            (i && i.silent) || B.eventEmitter.trigger("change:hotel", t),
            _r_();
        },
        checkAvailability: function (t, e) {
          _i_("843:bd191d3b");
          var n = this,
            r = t.list,
            i = t.dates,
            s = t.hotels || r.hotels;
          s.forEach(function (t) {
            _i_("843:3190ff71"), l.setHotelProperty(t, "loading", !0), _r_();
          });
          var _ = $.extend(
            {
              hotel_ids: s.map(o.getHotelId),
              list_id: r.id,
              is_recently_viewed: r.is_recently_viewed,
            },
            i
          );
          d.isEnabled() || $.extend(_, c.buildAvailabilityParams()),
            B.env.is_dmw_d_wishlist_redesign &&
              ((this.$overlay_loader = $(".listview-bui-loader")),
              this.$overlay_loader.removeClass("g-hidden")),
            a.getAvailability(_, function (i) {
              if (
                (_i_("843:b87a5efd"),
                B.env.is_dmw_d_wishlist_redesign &&
                  n.$overlay_loader.addClass("g-hidden"),
                s.forEach(function (t) {
                  _i_("843:8a4f98c4"),
                    l.setHotelProperty(t, "edit", !1),
                    l.setHotelProperty(t, "loading", !1);
                  var e = o.getHotelId(t);
                  i[e] && n.setHotelAvailability(t, i[e], { updateNights: !0 }),
                    _r_();
                }),
                0 < s.length)
              ) {
                var t = s[0].availability.group;
                r.travel_group = t;
              }
              e && e(), _r_();
            }),
            _r_();
        },
      }),
        _r_();
    }
  ),
  B.define("lists/listview-header/listview-create-list", function (t, e, i) {
    "use strict";
    _i_("843:61019d2c");
    var n = t("../lists-store/lists-store"),
      r = t("component/wishlist/tracking").expPageInteraction;
    (i.exports = function () {
      _i_("843:8120cb5e");
      var e = this;
      $(".js-listview-header-wrapper").on(
        "click",
        ".js-listview-create-list",
        function (t) {
          _i_("843:fced64f2"),
            t.preventDefault(),
            t.stopPropagation(),
            r.customGoal("detailPage"),
            setTimeout(function () {
              _i_("843:410a0cfa"),
                $(".create-list-btn").one("click", function () {
                  _i_("843:8ec6df64");
                  var t = $.trim($(".wl-create-list__name-input")[1].value);
                  if (($(".wl-create-list__close").click(), !t)) return _r_();
                  n.createList({ name: t }).then(function (t) {
                    _i_("843:c8fd180e"),
                      e.setCurrentList({ id: t.id }),
                      B.eventEmitter.trigger("wl:updateList", t.id),
                      t.remaining < 1 &&
                        (B.env.b_reg_user_wishlist_remaining = 0),
                      _r_();
                  }),
                    B.squeak(B.env.wl_squeak.create_wishlist_from_wl),
                    _r_();
                }),
                _r_();
            }, 0),
            _r_();
        }
      ),
        _r_();
    }),
      _r_();
  }),
  B.define("require_absolute", function (e, t, i) {
    _i_("843:a450d96e"),
      (i.exports = function (t) {
        return _i_("843:285c8d7d"), _r_(e(t.replace(/^.*components\//g, "")));
      }),
      _r_();
  });
var SCROLL_DURATION = 200,
  SCROLL_STEP = 300;
function handleScrollClickEvent(t) {
  _i_("843:26a54ee9");
  var e = $(t.target),
    i = $(".comparable-list-container"),
    n = i.scrollLeft() || 0;
  e.hasClass("comparable-list-scroll-btn--left")
    ? i.animate({ scrollLeft: n - SCROLL_STEP }, SCROLL_DURATION)
    : i.animate({ scrollLeft: n + SCROLL_STEP }, SCROLL_DURATION),
    _r_();
}
function handleHotelsRenderedEvent() {
  _i_("843:626e7390");
  var t = $(".comparable-list-container").get(0);
  if (!t) return _r_();
  t.scrollWidth > t.clientWidth
    ? $(".comparable-list-scroll-btn").show()
    : $(".comparable-list-scroll-btn").hide(),
    _r_();
}
function handleHotelsRenderedEvent_bui() {
  if ((_i_("843:f0b50f0f"), window.BUI && window.BUI.initComponents)) {
    if (!$(".comparable-list-container-bui")) return _r_();
    window.BUI.initComponents();
  }
  _r_();
}
document.addEventListener("DOMContentLoaded", init),
  B.define("component/qrcode/qrcodelib", function (t, e, i) {
    "use strict";
    var k;
    _i_("843:22b6969f"),
      (function () {
        function i(t) {
          _i_("843:6a350f6c"),
            (this.mode = s.MODE_8BIT_BYTE),
            (this.data = t),
            (this.parsedData = []);
          for (var e = 0, i = this.data.length; e < i; e++) {
            var n = [],
              r = this.data.charCodeAt(e);
            65536 < r
              ? ((n[0] = 240 | ((1835008 & r) >>> 18)),
                (n[1] = 128 | ((258048 & r) >>> 12)),
                (n[2] = 128 | ((4032 & r) >>> 6)),
                (n[3] = 128 | (63 & r)))
              : 2048 < r
              ? ((n[0] = 224 | ((61440 & r) >>> 12)),
                (n[1] = 128 | ((4032 & r) >>> 6)),
                (n[2] = 128 | (63 & r)))
              : 128 < r
              ? ((n[0] = 192 | ((1984 & r) >>> 6)), (n[1] = 128 | (63 & r)))
              : (n[0] = r),
              this.parsedData.push(n);
          }
          (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
            this.parsedData.length != this.data.length &&
              (this.parsedData.unshift(191),
              this.parsedData.unshift(187),
              this.parsedData.unshift(239)),
            _r_();
        }
        function o(t, e) {
          _i_("843:848638ee"),
            (this.typeNumber = t),
            (this.errorCorrectLevel = e),
            (this.modules = null),
            (this.moduleCount = 0),
            (this.dataCache = null),
            (this.dataList = []),
            _r_();
        }
        _i_("843:bb447d5b"),
          (i.prototype = {
            getLength: function (t) {
              return _i_("843:5d0dfc7d"), _r_(this.parsedData.length);
            },
            write: function (t) {
              _i_("843:ac0b6150");
              for (var e = 0, i = this.parsedData.length; e < i; e++)
                t.put(this.parsedData[e], 8);
              _r_();
            },
          }),
          (o.prototype = {
            addData: function (t) {
              _i_("843:4184ca21");
              var e = new i(t);
              this.dataList.push(e), (this.dataCache = null), _r_();
            },
            isDark: function (t, e) {
              if (
                (_i_("843:a10a59c0"),
                t < 0 ||
                  this.moduleCount <= t ||
                  e < 0 ||
                  this.moduleCount <= e)
              )
                throw new Error(t + "," + e);
              return _r_(this.modules[t][e]);
            },
            getModuleCount: function () {
              return _i_("843:3b9a4381"), _r_(this.moduleCount);
            },
            make: function () {
              _i_("843:6dfe8dc4"),
                this.makeImpl(!1, this.getBestMaskPattern()),
                _r_();
            },
            makeImpl: function (t, e) {
              _i_("843:c47b7367"),
                (this.moduleCount = 4 * this.typeNumber + 17),
                (this.modules = new Array(this.moduleCount));
              for (var i = 0; i < this.moduleCount; i++) {
                this.modules[i] = new Array(this.moduleCount);
                for (var n = 0; n < this.moduleCount; n++)
                  this.modules[i][n] = null;
              }
              this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(t, e),
                7 <= this.typeNumber && this.setupTypeNumber(t),
                null == this.dataCache &&
                  (this.dataCache = o.createData(
                    this.typeNumber,
                    this.errorCorrectLevel,
                    this.dataList
                  )),
                this.mapData(this.dataCache, e),
                _r_();
            },
            setupPositionProbePattern: function (t, e) {
              _i_("843:d0cac6ba");
              for (var i = -1; i <= 7; i++) {
                if (t + i <= -1 || this.moduleCount <= t + i) continue;
                for (var n = -1; n <= 7; n++) {
                  if (e + n <= -1 || this.moduleCount <= e + n) continue;
                  this.modules[t + i][e + n] =
                    (0 <= i && i <= 6 && (0 == n || 6 == n)) ||
                    (0 <= n && n <= 6 && (0 == i || 6 == i)) ||
                    (2 <= i && i <= 4 && 2 <= n && n <= 4);
                }
              }
              _r_();
            },
            getBestMaskPattern: function () {
              _i_("843:1dce2cb5");
              for (var t = 0, e = 0, i = 0; i < 8; i++) {
                this.makeImpl(!0, i);
                var n = p.getLostPoint(this);
                (0 == i || n < t) && ((t = n), (e = i));
              }
              return _r_(e);
            },
            createMovieClip: function (t, e, i) {
              _i_("843:383aa69e");
              var n = t.createEmptyMovieClip(e, i);
              this.make();
              for (var r = 0; r < this.modules.length; r++)
                for (var s = 1 * r, _ = 0; _ < this.modules[r].length; _++) {
                  var a = 1 * _;
                  this.modules[r][_] &&
                    (n.beginFill(0, 100),
                    n.moveTo(a, s),
                    n.lineTo(a + 1, s),
                    n.lineTo(a + 1, s + 1),
                    n.lineTo(a, s + 1),
                    n.endFill());
                }
              return _r_(n);
            },
            setupTimingPattern: function () {
              _i_("843:318721a2");
              for (var t = 8; t < this.moduleCount - 8; t++) {
                if (null != this.modules[t][6]) continue;
                this.modules[t][6] = t % 2 == 0;
              }
              for (var e = 8; e < this.moduleCount - 8; e++) {
                if (null != this.modules[6][e]) continue;
                this.modules[6][e] = e % 2 == 0;
              }
              _r_();
            },
            setupPositionAdjustPattern: function () {
              _i_("843:4e8189d5");
              for (
                var t = p.getPatternPosition(this.typeNumber), e = 0;
                e < t.length;
                e++
              )
                for (var i = 0; i < t.length; i++) {
                  var n = t[e],
                    r = t[i];
                  if (null != this.modules[n][r]) continue;
                  for (var s = -2; s <= 2; s++)
                    for (var _ = -2; _ <= 2; _++)
                      this.modules[n + s][r + _] =
                        -2 == s ||
                        2 == s ||
                        -2 == _ ||
                        2 == _ ||
                        (0 == s && 0 == _);
                }
              _r_();
            },
            setupTypeNumber: function (t) {
              _i_("843:40faf419");
              for (
                var e = p.getBCHTypeNumber(this.typeNumber), i = 0;
                i < 18;
                i++
              ) {
                var n = !t && 1 == ((e >> i) & 1);
                this.modules[Math.floor(i / 3)][
                  (i % 3) + this.moduleCount - 8 - 3
                ] = n;
              }
              for (i = 0; i < 18; i++) {
                n = !t && 1 == ((e >> i) & 1);
                this.modules[(i % 3) + this.moduleCount - 8 - 3][
                  Math.floor(i / 3)
                ] = n;
              }
              _r_();
            },
            setupTypeInfo: function (t, e) {
              _i_("843:e4f9db77");
              for (
                var i = (this.errorCorrectLevel << 3) | e,
                  n = p.getBCHTypeInfo(i),
                  r = 0;
                r < 15;
                r++
              ) {
                var s = !t && 1 == ((n >> r) & 1);
                r < 6
                  ? (this.modules[r][8] = s)
                  : r < 8
                  ? (this.modules[r + 1][8] = s)
                  : (this.modules[this.moduleCount - 15 + r][8] = s);
              }
              for (r = 0; r < 15; r++) {
                s = !t && 1 == ((n >> r) & 1);
                r < 8
                  ? (this.modules[8][this.moduleCount - r - 1] = s)
                  : r < 9
                  ? (this.modules[8][15 - r - 1 + 1] = s)
                  : (this.modules[8][15 - r - 1] = s);
              }
              (this.modules[this.moduleCount - 8][8] = !t), _r_();
            },
            mapData: function (t, e) {
              _i_("843:10392954");
              for (
                var i = -1,
                  n = this.moduleCount - 1,
                  r = 7,
                  s = 0,
                  _ = this.moduleCount - 1;
                0 < _;
                _ -= 2
              )
                for (6 == _ && _--; ; ) {
                  for (var a = 0; a < 2; a++)
                    if (null == this.modules[n][_ - a]) {
                      var o = !1;
                      s < t.length && (o = 1 == ((t[s] >>> r) & 1)),
                        p.getMask(e, n, _ - a) && (o = !o),
                        (this.modules[n][_ - a] = o),
                        -1 == --r && (s++, (r = 7));
                    }
                  if ((n += i) < 0 || this.moduleCount <= n) {
                    (n -= i), (i = -i);
                    break;
                  }
                }
              _r_();
            },
          }),
          (o.PAD0 = 236),
          (o.PAD1 = 17),
          (o.createData = function (t, e, i) {
            _i_("843:aaf15052");
            for (
              var n = g.getRSBlocks(t, e), r = new v(), s = 0;
              s < i.length;
              s++
            ) {
              var _ = i[s];
              r.put(_.mode, 4),
                r.put(_.getLength(), p.getLengthInBits(_.mode, t)),
                _.write(r);
            }
            var a = 0;
            for (s = 0; s < n.length; s++) a += n[s].dataCount;
            if (r.getLengthInBits() > 8 * a)
              throw new Error(
                "code length overflow. (" +
                  r.getLengthInBits() +
                  ">" +
                  8 * a +
                  ")"
              );
            for (
              r.getLengthInBits() + 4 <= 8 * a && r.put(0, 4);
              r.getLengthInBits() % 8 != 0;

            )
              r.putBit(!1);
            for (
              ;
              !(
                r.getLengthInBits() >= 8 * a ||
                (r.put(o.PAD0, 8), r.getLengthInBits() >= 8 * a)
              );

            )
              r.put(o.PAD1, 8);
            return _r_(o.createBytes(r, n));
          }),
          (o.createBytes = function (t, e) {
            _i_("843:99b7c05c");
            for (
              var i = 0,
                n = 0,
                r = 0,
                s = new Array(e.length),
                _ = new Array(e.length),
                a = 0;
              a < e.length;
              a++
            ) {
              var o = e[a].dataCount,
                l = e[a].totalCount - o;
              (n = Math.max(n, o)), (r = Math.max(r, l)), (s[a] = new Array(o));
              for (var d = 0; d < s[a].length; d++)
                s[a][d] = 255 & t.buffer[d + i];
              i += o;
              var c = p.getErrorCorrectPolynomial(l),
                u = new m(s[a], c.getLength() - 1).mod(c);
              _[a] = new Array(c.getLength() - 1);
              for (d = 0; d < _[a].length; d++) {
                var h = d + u.getLength() - _[a].length;
                _[a][d] = 0 <= h ? u.get(h) : 0;
              }
            }
            var f = 0;
            for (d = 0; d < e.length; d++) f += e[d].totalCount;
            var g = new Array(f),
              v = 0;
            for (d = 0; d < n; d++)
              for (a = 0; a < e.length; a++)
                d < s[a].length && (g[v++] = s[a][d]);
            for (d = 0; d < r; d++)
              for (a = 0; a < e.length; a++)
                d < _[a].length && (g[v++] = _[a][d]);
            return _r_(g);
          });
        for (
          var s = {
              MODE_NUMBER: 1,
              MODE_ALPHA_NUM: 2,
              MODE_8BIT_BYTE: 4,
              MODE_KANJI: 8,
            },
            a = { L: 1, M: 0, Q: 3, H: 2 },
            n = 0,
            r = 1,
            _ = 2,
            l = 3,
            d = 4,
            c = 5,
            u = 6,
            h = 7,
            p = {
              PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170],
              ],
              G15: 1335,
              G18: 7973,
              G15_MASK: 21522,
              getBCHTypeInfo: function (t) {
                _i_("843:2cb66f64");
                for (
                  var e = t << 10;
                  0 <= p.getBCHDigit(e) - p.getBCHDigit(p.G15);

                )
                  e ^= p.G15 << (p.getBCHDigit(e) - p.getBCHDigit(p.G15));
                return _r_(((t << 10) | e) ^ p.G15_MASK);
              },
              getBCHTypeNumber: function (t) {
                _i_("843:31bfa3d0");
                for (
                  var e = t << 12;
                  0 <= p.getBCHDigit(e) - p.getBCHDigit(p.G18);

                )
                  e ^= p.G18 << (p.getBCHDigit(e) - p.getBCHDigit(p.G18));
                return _r_((t << 12) | e);
              },
              getBCHDigit: function (t) {
                _i_("843:2598b9a6");
                for (var e = 0; 0 != t; ) e++, (t >>>= 1);
                return _r_(e);
              },
              getPatternPosition: function (t) {
                return (
                  _i_("843:5ef7f2c4"), _r_(p.PATTERN_POSITION_TABLE[t - 1])
                );
              },
              getMask: function (t, e, i) {
                switch ((_i_("843:22766df0"), t)) {
                  case n:
                    return _r_((e + i) % 2 == 0);
                  case r:
                    return _r_(e % 2 == 0);
                  case _:
                    return _r_(i % 3 == 0);
                  case l:
                    return _r_((e + i) % 3 == 0);
                  case d:
                    return _r_(
                      (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0
                    );
                  case c:
                    return _r_(((e * i) % 2) + ((e * i) % 3) == 0);
                  case u:
                    return _r_((((e * i) % 2) + ((e * i) % 3)) % 2 == 0);
                  case h:
                    return _r_((((e * i) % 3) + ((e + i) % 2)) % 2 == 0);
                  default:
                    throw new Error("bad maskPattern:" + t);
                }
                _r_();
              },
              getErrorCorrectPolynomial: function (t) {
                _i_("843:4bfdec0d");
                for (var e = new m([1], 0), i = 0; i < t; i++)
                  e = e.multiply(new m([1, f.gexp(i)], 0));
                return _r_(e);
              },
              getLengthInBits: function (t, e) {
                if ((_i_("843:e51ca4c5"), 1 <= e && e < 10))
                  switch (t) {
                    case s.MODE_NUMBER:
                      return _r_(10);
                    case s.MODE_ALPHA_NUM:
                      return _r_(9);
                    case s.MODE_8BIT_BYTE:
                    case s.MODE_KANJI:
                      return _r_(8);
                    default:
                      throw new Error("mode:" + t);
                  }
                else if (e < 27)
                  switch (t) {
                    case s.MODE_NUMBER:
                      return _r_(12);
                    case s.MODE_ALPHA_NUM:
                      return _r_(11);
                    case s.MODE_8BIT_BYTE:
                      return _r_(16);
                    case s.MODE_KANJI:
                      return _r_(10);
                    default:
                      throw new Error("mode:" + t);
                  }
                else {
                  if (!(e < 41)) throw new Error("type:" + e);
                  switch (t) {
                    case s.MODE_NUMBER:
                      return _r_(14);
                    case s.MODE_ALPHA_NUM:
                      return _r_(13);
                    case s.MODE_8BIT_BYTE:
                      return _r_(16);
                    case s.MODE_KANJI:
                      return _r_(12);
                    default:
                      throw new Error("mode:" + t);
                  }
                }
                _r_();
              },
              getLostPoint: function (t) {
                _i_("843:dcff7c73");
                for (var e = t.getModuleCount(), i = 0, n = 0; n < e; n++)
                  for (var r = 0; r < e; r++) {
                    for (var s = 0, _ = t.isDark(n, r), a = -1; a <= 1; a++) {
                      if (n + a < 0 || e <= n + a) continue;
                      for (var o = -1; o <= 1; o++) {
                        if (r + o < 0 || e <= r + o) continue;
                        if (0 == a && 0 == o) continue;
                        _ == t.isDark(n + a, r + o) && s++;
                      }
                    }
                    5 < s && (i += 3 + s - 5);
                  }
                for (n = 0; n < e - 1; n++)
                  for (r = 0; r < e - 1; r++) {
                    var l = 0;
                    t.isDark(n, r) && l++,
                      t.isDark(n + 1, r) && l++,
                      t.isDark(n, r + 1) && l++,
                      t.isDark(n + 1, r + 1) && l++,
                      (0 != l && 4 != l) || (i += 3);
                  }
                for (n = 0; n < e; n++)
                  for (r = 0; r < e - 6; r++)
                    t.isDark(n, r) &&
                      !t.isDark(n, r + 1) &&
                      t.isDark(n, r + 2) &&
                      t.isDark(n, r + 3) &&
                      t.isDark(n, r + 4) &&
                      !t.isDark(n, r + 5) &&
                      t.isDark(n, r + 6) &&
                      (i += 40);
                for (r = 0; r < e; r++)
                  for (n = 0; n < e - 6; n++)
                    t.isDark(n, r) &&
                      !t.isDark(n + 1, r) &&
                      t.isDark(n + 2, r) &&
                      t.isDark(n + 3, r) &&
                      t.isDark(n + 4, r) &&
                      !t.isDark(n + 5, r) &&
                      t.isDark(n + 6, r) &&
                      (i += 40);
                var d = 0;
                for (r = 0; r < e; r++)
                  for (n = 0; n < e; n++) t.isDark(n, r) && d++;
                var c = Math.abs((100 * d) / e / e - 50) / 5;
                return _r_((i += 10 * c));
              },
            },
            f = {
              glog: function (t) {
                if ((_i_("843:9601b075"), t < 1))
                  throw new Error("glog(" + t + ")");
                return _r_(f.LOG_TABLE[t]);
              },
              gexp: function (t) {
                for (_i_("843:01f5f72d"); t < 0; ) t += 255;
                for (; 256 <= t; ) t -= 255;
                return _r_(f.EXP_TABLE[t]);
              },
              EXP_TABLE: new Array(256),
              LOG_TABLE: new Array(256),
            },
            t = 0;
          t < 8;
          t++
        )
          f.EXP_TABLE[t] = 1 << t;
        for (t = 8; t < 256; t++)
          f.EXP_TABLE[t] =
            f.EXP_TABLE[t - 4] ^
            f.EXP_TABLE[t - 5] ^
            f.EXP_TABLE[t - 6] ^
            f.EXP_TABLE[t - 8];
        for (t = 0; t < 255; t++) f.LOG_TABLE[f.EXP_TABLE[t]] = t;
        function m(t, e) {
          if ((_i_("843:399c7d96"), null == t.length))
            throw new Error(t.length + "/" + e);
          for (var i = 0; i < t.length && 0 == t[i]; ) i++;
          this.num = new Array(t.length - i + e);
          for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i];
          _r_();
        }
        function g(t, e) {
          _i_("843:bf778816"),
            (this.totalCount = t),
            (this.dataCount = e),
            _r_();
        }
        function v() {
          _i_("843:e4634369"), (this.buffer = []), (this.length = 0), _r_();
        }
        (m.prototype = {
          get: function (t) {
            return _i_("843:2f0bb3b0"), _r_(this.num[t]);
          },
          getLength: function () {
            return _i_("843:fda85298"), _r_(this.num.length);
          },
          multiply: function (t) {
            _i_("843:185703d8");
            for (
              var e = new Array(this.getLength() + t.getLength() - 1), i = 0;
              i < this.getLength();
              i++
            )
              for (var n = 0; n < t.getLength(); n++)
                e[i + n] ^= f.gexp(f.glog(this.get(i)) + f.glog(t.get(n)));
            return _r_(new m(e, 0));
          },
          mod: function (t) {
            if ((_i_("843:78d93a47"), this.getLength() - t.getLength() < 0))
              return _r_(this);
            for (
              var e = f.glog(this.get(0)) - f.glog(t.get(0)),
                i = new Array(this.getLength()),
                n = 0;
              n < this.getLength();
              n++
            )
              i[n] = this.get(n);
            for (n = 0; n < t.getLength(); n++)
              i[n] ^= f.gexp(f.glog(t.get(n)) + e);
            return _r_(new m(i, 0).mod(t));
          },
        }),
          (g.RS_BLOCK_TABLE = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16],
          ]),
          (g.getRSBlocks = function (t, e) {
            _i_("843:0c299188");
            var i = g.getRsBlockTable(t, e);
            if (null == i)
              throw new Error(
                "bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e
              );
            for (var n = i.length / 3, r = [], s = 0; s < n; s++)
              for (
                var _ = i[3 * s + 0], a = i[3 * s + 1], o = i[3 * s + 2], l = 0;
                l < _;
                l++
              )
                r.push(new g(a, o));
            return _r_(r);
          }),
          (g.getRsBlockTable = function (t, e) {
            switch ((_i_("843:d74515ac"), e)) {
              case a.L:
                return _r_(g.RS_BLOCK_TABLE[4 * (t - 1) + 0]);
              case a.M:
                return _r_(g.RS_BLOCK_TABLE[4 * (t - 1) + 1]);
              case a.Q:
                return _r_(g.RS_BLOCK_TABLE[4 * (t - 1) + 2]);
              case a.H:
                return _r_(g.RS_BLOCK_TABLE[4 * (t - 1) + 3]);
              default:
                return _r_(void 0);
            }
            _r_();
          }),
          (v.prototype = {
            get: function (t) {
              _i_("843:278c939d");
              var e = Math.floor(t / 8);
              return _r_(1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1));
            },
            put: function (t, e) {
              _i_("843:3236a4ae");
              for (var i = 0; i < e; i++)
                this.putBit(1 == ((t >>> (e - i - 1)) & 1));
              _r_();
            },
            getLengthInBits: function () {
              return _i_("843:d80d0d96"), _r_(this.length);
            },
            putBit: function (t) {
              _i_("843:ce9316c4");
              var e = Math.floor(this.length / 8);
              this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++,
                _r_();
            },
          });
        var b = [
          [17, 14, 11, 7],
          [32, 26, 20, 14],
          [53, 42, 32, 24],
          [78, 62, 46, 34],
          [106, 84, 60, 44],
          [134, 106, 74, 58],
          [154, 122, 86, 64],
          [192, 152, 108, 84],
          [230, 180, 130, 98],
          [271, 213, 151, 119],
          [321, 251, 177, 137],
          [367, 287, 203, 155],
          [425, 331, 241, 177],
          [458, 362, 258, 194],
          [520, 412, 292, 220],
          [586, 450, 322, 250],
          [644, 504, 364, 280],
          [718, 560, 394, 310],
          [792, 624, 442, 338],
          [858, 666, 482, 382],
          [929, 711, 509, 403],
          [1003, 779, 565, 439],
          [1091, 857, 611, 461],
          [1171, 911, 661, 511],
          [1273, 997, 715, 535],
          [1367, 1059, 751, 593],
          [1465, 1125, 805, 625],
          [1528, 1190, 868, 658],
          [1628, 1264, 908, 698],
          [1732, 1370, 982, 742],
          [1840, 1452, 1030, 790],
          [1952, 1538, 1112, 842],
          [2068, 1628, 1168, 898],
          [2188, 1722, 1228, 958],
          [2303, 1809, 1283, 983],
          [2431, 1911, 1351, 1051],
          [2563, 1989, 1423, 1093],
          [2699, 2099, 1499, 1139],
          [2809, 2213, 1579, 1219],
          [2953, 2331, 1663, 1273],
        ];
        function w() {
          _i_("843:abf38cca");
          var t = !1,
            e = navigator.userAgent;
          if (/android/i.test(e)) {
            t = !0;
            var i = e.toString().match(/android ([0-9]\.[0-9])/i);
            i && i[1] && (t = parseFloat(i[1]));
          }
          return _r_(t);
        }
        var y = (function () {
            _i_("843:0d2f3985");
            var t = function (t, e) {
              _i_("843:5c8e4d4a"), (this._el = t), (this._htOption = e), _r_();
            };
            return (
              (t.prototype.draw = function (t) {
                _i_("843:3b130b0c");
                var e = this._htOption,
                  i = this._el,
                  n = t.getModuleCount();
                Math.floor(e.width / n), Math.floor(e.height / n);
                function r(t, e) {
                  _i_("843:049f82d5");
                  var i = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    t
                  );
                  for (var n in e)
                    e.hasOwnProperty(n) && i.setAttribute(n, e[n]);
                  return _r_(i);
                }
                this.clear();
                var s = r("svg", {
                  viewBox: "0 0 " + String(n) + " " + String(n),
                  width: "100%",
                  height: "100%",
                  fill: e.colorLight,
                });
                s.setAttributeNS(
                  "http://www.w3.org/2000/xmlns/",
                  "xmlns:xlink",
                  "http://www.w3.org/1999/xlink"
                ),
                  i.appendChild(s),
                  s.appendChild(
                    r("rect", {
                      fill: e.colorLight,
                      width: "100%",
                      height: "100%",
                    })
                  ),
                  s.appendChild(
                    r("rect", {
                      fill: e.colorDark,
                      width: "1",
                      height: "1",
                      id: "template",
                    })
                  );
                for (var _ = 0; _ < n; _++)
                  for (var a = 0; a < n; a++)
                    if (t.isDark(_, a)) {
                      var o = r("use", { x: String(a), y: String(_) });
                      o.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        "href",
                        "#template"
                      ),
                        s.appendChild(o);
                    }
                _r_();
              }),
              (t.prototype.clear = function () {
                for (_i_("843:971f3d15"); this._el.hasChildNodes(); )
                  this._el.removeChild(this._el.lastChild);
                _r_();
              }),
              _r_(t)
            );
          })(),
          B =
            "svg" === document.documentElement.tagName.toLowerCase()
              ? y
              : (_i_("843:6e68d0c1"),
                _r_("undefined" != typeof CanvasRenderingContext2D)
                  ? (function () {
                      function t() {
                        _i_("843:36058078"),
                          (this._elImage.src =
                            this._elCanvas.toDataURL("image/png")),
                          (this._elImage.style.display = "block"),
                          (this._elCanvas.style.display = "none"),
                          _r_();
                      }
                      _i_("843:db6a8b7b");
                      var e = function (t, e) {
                        _i_("843:df630b92"),
                          (this._bIsPainted = !1),
                          (this._android = w()),
                          (this._htOption = e),
                          (this._elCanvas = document.createElement("canvas")),
                          (this._elCanvas.width = e.width),
                          (this._elCanvas.height = e.height),
                          t.appendChild(this._elCanvas),
                          (this._el = t),
                          (this._oContext = this._elCanvas.getContext("2d")),
                          (this._bIsPainted = !1),
                          (this._elImage = document.createElement("img")),
                          (this._elImage.alt = "Scan me!"),
                          (this._elImage.style.display = "none"),
                          this._el.appendChild(this._elImage),
                          (this._bSupportDataURI = null),
                          _r_();
                      };
                      return (
                        (e.prototype.draw = function (t) {
                          _i_("843:9d192c49");
                          var e = this._elImage,
                            i = this._oContext,
                            n = this._htOption,
                            r = t.getModuleCount(),
                            s = n.width / r,
                            _ = n.height / r,
                            a = Math.round(s),
                            o = Math.round(_);
                          (e.style.display = "none"), this.clear();
                          for (var l = 0; l < r; l++)
                            for (var d = 0; d < r; d++) {
                              var c = t.isDark(l, d),
                                u = d * s,
                                h = l * _;
                              (i.strokeStyle = c ? n.colorDark : n.colorLight),
                                (i.lineWidth = 1),
                                (i.fillStyle = c ? n.colorDark : n.colorLight),
                                i.fillRect(u, h, s, _),
                                i.strokeRect(
                                  Math.floor(u) + 0.5,
                                  Math.floor(h) + 0.5,
                                  a,
                                  o
                                ),
                                i.strokeRect(
                                  Math.ceil(u) - 0.5,
                                  Math.ceil(h) - 0.5,
                                  a,
                                  o
                                );
                            }
                          (this._bIsPainted = !0), _r_();
                        }),
                        (e.prototype.makeImage = function () {
                          _i_("843:e6ae3626"),
                            this._bIsPainted &&
                              function (t, e) {
                                _i_("843:62accc87");
                                var i = this;
                                if (
                                  ((i._fFail = e),
                                  (i._fSuccess = t),
                                  null === i._bSupportDataURI)
                                ) {
                                  var n = document.createElement("img"),
                                    r = function () {
                                      _i_("843:296d561d"),
                                        (i._bSupportDataURI = !1),
                                        i._fFail && i._fFail.call(i),
                                        _r_();
                                    };
                                  return (
                                    (n.onabort = r),
                                    (n.onerror = r),
                                    (n.onload = function () {
                                      _i_("843:b3d5df6d"),
                                        (i._bSupportDataURI = !0),
                                        i._fSuccess && i._fSuccess.call(i),
                                        _r_();
                                    }),
                                    (n.src =
                                      "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="),
                                    _r_()
                                  );
                                }
                                !0 === i._bSupportDataURI && i._fSuccess
                                  ? i._fSuccess.call(i)
                                  : !1 === i._bSupportDataURI &&
                                    i._fFail &&
                                    i._fFail.call(i),
                                  _r_();
                              }.call(this, t),
                            _r_();
                        }),
                        (e.prototype.isPainted = function () {
                          return _i_("843:18799e81"), _r_(this._bIsPainted);
                        }),
                        (e.prototype.clear = function () {
                          _i_("843:3b235e20"),
                            this._oContext.clearRect(
                              0,
                              0,
                              this._elCanvas.width,
                              this._elCanvas.height
                            ),
                            (this._bIsPainted = !1),
                            _r_();
                        }),
                        (e.prototype.round = function (t) {
                          if ((_i_("843:d65848a8"), !t)) return _r_(t);
                          return _r_(Math.floor(1e3 * t) / 1e3);
                        }),
                        _r_(e)
                      );
                    })()
                  : (function () {
                      _i_("843:8eaa92b5");
                      var t = function (t, e) {
                        _i_("843:5c8e4d4a1"),
                          (this._el = t),
                          (this._htOption = e),
                          _r_();
                      };
                      return (
                        (t.prototype.draw = function (t) {
                          _i_("843:920a0b0e");
                          for (
                            var e = this._htOption,
                              i = this._el,
                              n = t.getModuleCount(),
                              r = Math.floor(e.width / n),
                              s = Math.floor(e.height / n),
                              _ = [
                                '<table style="border:0;border-collapse:collapse;">',
                              ],
                              a = 0;
                            a < n;
                            a++
                          ) {
                            _.push("<tr>");
                            for (var o = 0; o < n; o++)
                              _.push(
                                '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
                                  r +
                                  "px;height:" +
                                  s +
                                  "px;background-color:" +
                                  (t.isDark(a, o)
                                    ? e.colorDark
                                    : e.colorLight) +
                                  ';"></td>'
                              );
                            _.push("</tr>");
                          }
                          _.push("</table>"), (i.innerHTML = _.join(""));
                          var l = i.childNodes[0],
                            d = (e.width - l.offsetWidth) / 2,
                            c = (e.height - l.offsetHeight) / 2;
                          0 < d &&
                            0 < c &&
                            (l.style.margin = c + "px " + d + "px"),
                            _r_();
                        }),
                        (t.prototype.clear = function () {
                          _i_("843:a15cf22c"), (this._el.innerHTML = ""), _r_();
                        }),
                        _r_(t)
                      );
                    })());
        function e(t, e) {
          _i_("843:9effcde0");
          for (
            var i = 1,
              n = (function (t) {
                _i_("843:d9afcbf0");
                var e = encodeURI(t)
                  .toString()
                  .replace(/\%[0-9a-fA-F]{2}/g, "a");
                return _r_(e.length + (e.length != t ? 3 : 0));
              })(t),
              r = 0,
              s = b.length;
            r <= s;
            r++
          ) {
            var _ = 0;
            switch (e) {
              case a.L:
                _ = b[r][0];
                break;
              case a.M:
                _ = b[r][1];
                break;
              case a.Q:
                _ = b[r][2];
                break;
              case a.H:
                _ = b[r][3];
            }
            if (n <= _) break;
            i++;
          }
          if (b.length < i) throw new Error("Too long data");
          return _r_(i);
        }
        ((k = function (t, e) {
          if (
            (_i_("843:6f3c472b"),
            (this._htOption = {
              width: 256,
              height: 256,
              typeNumber: 4,
              colorDark: "#000000",
              colorLight: "#ffffff",
              correctLevel: a.H,
            }),
            "string" == typeof e && (e = { text: e }),
            e)
          )
            for (var i in e) this._htOption[i] = e[i];
          "string" == typeof t && (t = document.getElementById(t)),
            this._htOption.useSVG && (B = y),
            (this._android = w()),
            (this._el = t),
            (this._oQRCode = null),
            (this._oDrawing = new B(this._el, this._htOption)),
            this._htOption.text && this.makeCode(this._htOption.text),
            _r_();
        }).prototype.makeCode = function (t) {
          _i_("843:be6d9c4e"),
            (this._oQRCode = new o(
              e(t, this._htOption.correctLevel),
              this._htOption.correctLevel
            )),
            this._oQRCode.addData(t),
            this._oQRCode.make(),
            (this._el.title = t),
            this._oDrawing.draw(this._oQRCode),
            this.makeImage(),
            _r_();
        }),
          (k.prototype.makeImage = function () {
            _i_("843:7d14ef0b"),
              "function" == typeof this._oDrawing.makeImage &&
                (!this._android || 3 <= this._android) &&
                this._oDrawing.makeImage(),
              _r_();
          }),
          (k.prototype.clear = function () {
            _i_("843:47e085f6"), this._oDrawing.clear(), _r_();
          }),
          (k.CorrectLevel = a),
          _r_();
      })(),
      (e.QRCode = k),
      _r_();
  }),
  B.define("component/qrcode/qrcode", function (t, e, i) {
    "use strict";
    _i_("843:1bfa1277");
    var n = t("component"),
      r = t("read-data-options"),
      s = t("component/qrcode/qrcodelib").QRCode;
    (i.exports = n.extend({
      init: function () {
        _i_("843:d4f27e56"),
          (this.options = r(this.el, {
            url: String,
            width: { type: Number, defaultValue: 160 },
            height: { type: Number, defaultValue: 160 },
            skipShorten: { type: Boolean, defaultValue: !1 },
          })),
          this.$el.css({
            width: this.options.width + "px",
            height: this.options.height + "px",
          }),
          this.options.skipShorten ? this.createQrCode() : this.shortenUrl(),
          _r_();
      },
      shortenUrl: function () {
        _i_("843:680749f5");
        var e = this;
        $.get(
          "/short_uri?url=" +
            encodeURIComponent(e.options.url) +
            "&aid=" +
            booking.env.aid,
          function (t) {
            _i_("843:efd01736"),
              (e.options.url =
                location.protocol + "//www.booking.com/" + t.short_url),
              e.createQrCode(),
              _r_();
          }
        ),
          _r_();
      },
      createQrCode: function () {
        _i_("843:f9264827"),
          new s(this.$el[0], {
            text: this.options.url,
            width: this.options.width,
            height: this.options.height,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: 2,
          }),
          _r_();
      },
    })),
      _r_();
  }),
  B.define("lists/lists-api-legacy", function (t, e, i) {
    _i_("843:edf744531");
    var a = t("jquery"),
      o = t("promise"),
      l = {},
      d = {
        EDIT: "wl:edit",
        FETCH: "wl:fetch",
        CREATE: "wl:create",
        REMOVE: "wl:remove",
        EDITHOTEL: "wl:edithotel",
        EDITHOTELSTART: "wl:edithotelstart",
        EDITHOTELS: "wl:edithotels",
        EDITHOTELSSTART: "wl:edithotelsstart",
        LOADINGSTART: "wl:loadingstart",
        LOADINGEND: "wl:loadingend",
      },
      c = {
        hotel: "hp_header",
        searchresults: "sr_list",
        mywishlist: "wishlist",
      };
    function n(t, n, e) {
      _i_("843:fcaf146b1"),
        (n = (function (t) {
          _i_("843:da99af351");
          var e = B.env.b_action,
            i = "www" === B.env.b_site_type,
            n = c[e] || "";
          return _r_(
            a.extend(t || {}, {
              source: i ? n : "",
              aid: booking.env.b_aid,
              lang: booking.env.b_lang_for_url,
              sid: booking.env.b_sid,
              stype: booking.env.b_site_type_id,
              stid: booking.env.b_stid,
              label: booking.env.b_label,
              currency: B.env.b_selected_currency,
            })
          );
        })(n));
      var i = (e = e || {}).noCache,
        r = e.noErrorCode;
      if (!i) {
        var s = t + a.param(n);
        if (s in l) return _r_(l[s]);
      }
      u(d.LOADINGSTART, { params: n });
      var _ = new o(function (e, i) {
        _i_("843:88ba67501"),
          a.ajax({
            type: "POST",
            url: t,
            data: n,
            success: function (t) {
              if ((_i_("843:a6f004091"), !((t && t.success) || r)))
                return delete l[s], _r_(i("server error"));
              return _r_(e({ params: n, result: t }));
            },
            error: function (t) {
              return _i_("843:bc9f0fc31"), delete l[s], _r_(i(t));
            },
            complete: function () {
              _i_("843:449827e71"), u(d.LOADINGEND, { params: n }), _r_();
            },
          }),
          _r_();
      });
      return i || (l[s] = _), _r_(_);
    }
    function u(t, e) {
      return _i_("843:14982cfe1"), B.eventEmitter.trigger(t, e), _r_(e);
    }
    function r(t) {
      _i_("843:e5d0874b1");
      var e = "creation_timestamp",
        n = ["is_collaborated", "privacy", "selected"];
      a.each(t, function (t, i) {
        _i_("843:fe6dfd1e1"),
          a.each(n, function (t, e) {
            _i_("843:001bb2501"),
              e in i && (i[e] = Boolean(Number(i[e]))),
              _r_();
          }),
          e in i && (i.is_new = 1e3 * i[e] > new Date() - 864e5),
          _r_();
      }),
        _r_();
    }
    (i.exports = {
      init: function () {},
      EVENTS: d,
      TYPE: { RECENTLY_VIEWED: 3 },
      edit: function () {},
      lists: {},
      getHotelLists: function (t) {
        return _i_("843:8504519f1"), _r_(this.lists[t] || []);
      },
      getListById: function (t, e) {
        _i_("843:55506ce21");
        for (var i = this.getHotelLists(t), n = 0; n < i.length; n++) {
          var r = i[n];
          if (r.id == e) return _r_(r);
        }
        return _r_(null);
      },
      updateLists: function (i, n) {
        if ((_i_("843:2a18ecee1"), !i || !i.params)) return _r_();
        var r = this;
        i.params.lists.split(",").forEach(function (t) {
          _i_("843:2d1f76ed1");
          var e = r.getListById(n, t);
          e && (e.selected = 1 == i.params.new_state), _r_();
        }),
          _r_();
      },
      addList: function (t, e) {
        if ((_i_("843:d480fad71"), !t || !t.id)) return _r_();
        for (var i in this.lists) {
          if (this.lists.hasOwnProperty(i))
            this.lists[i].push(
              a.extend({ hotels_count: 1, selected: i === e }, t)
            );
        }
        _r_();
      },
      fetch: function (e) {
        return (
          _i_("843:2bdb7d4f1"),
          _r_(
            n("/wishlist/get", e).then(
              function (t) {
                return (
                  _i_("843:566659021"),
                  r(t.result.lists),
                  (this.lists[e.hotel_id] = t.result.lists),
                  _r_(u(d.FETCH, t))
                );
              }.bind(this)
            )
          )
        );
      },
      createList: function (t) {
        _i_("843:9b77871c1");
        var e = this;
        return (
          this.clearCache(),
          _r_(
            n("/wishlist/create", t).then(function (t) {
              return (
                _i_("843:36ad0e891"), r([t.result]), e.addList(t.result), _r_(t)
              );
            })
          )
        );
      },
      create: function (e) {
        return (
          _i_("843:866f206f1"),
          this.clearCache(),
          _r_(
            n("/wishlist/create", e).then(
              function (i) {
                if (
                  (_i_("843:422ac8071"),
                  r([i.result]),
                  this.addList(i.result, e.hotel_id),
                  "string" == typeof e.hotel_ids)
                ) {
                  var t = e.hotel_ids.split(",");
                  a.each(t, function (t, e) {
                    _i_("843:28416e121"),
                      u(d.EDITHOTEL, {
                        params: a.extend(
                          { hotel_id: e, lists: i.result.id },
                          i.params
                        ),
                        result: i.result,
                      }),
                      _r_();
                  });
                }
                return _r_(u(d.CREATE, i));
              }.bind(this)
            )
          )
        );
      },
      renameList: function (t) {
        return (
          _i_("843:853caa311"), this.clearCache(), _r_(n("/wishlist/update", t))
        );
      },
      removeList: function (t) {
        return (
          _i_("843:9164debb1"), this.clearCache(), _r_(n("/wishlist/delete", t))
        );
      },
      editHotels: function (t) {
        _i_("843:bc8f37fb1"), this.clearCache(), u(d.EDITHOTELSSTART, t);
        var e = t.hotel_ids,
          i = new Array(e.length + 1).join("1").split("");
        return (
          a.isArray(e) && (t.hotel_ids = e.join(",")),
          _r_(
            n(
              "/wishlist/save_hotels",
              a.extend({ new_states: i.join(",") }, t)
            ).then(function (i) {
              return (
                _i_("843:ee3861a21"),
                a.each(e, function (t, e) {
                  _i_("843:9ee2b61a1"),
                    u(d.EDITHOTELS, {
                      params: a.extend({ hotel_id: e }, i.params),
                      result: i.result,
                    }),
                    _r_();
                }),
                _r_(i)
              );
            })
          )
        );
      },
      switchList: function (i) {
        return (
          _i_("843:c7bf69b81"),
          this.clearCache(),
          _r_(
            n("/wishlist/save_hotel", i).then(
              function (t) {
                if ((_i_("843:735314eb1"), !t || !t.params)) return _r_();
                var r = this,
                  s = i.hotel_id,
                  e = i.new_state.split(","),
                  _ = i.lists.split(",");
                return (
                  e.forEach(function (t, e) {
                    _i_("843:c90345211");
                    var i = _[e],
                      n = r.getListById(s, i);
                    n && (n.selected = !!+t), _r_();
                  }),
                  _r_(this.getHotelLists(s))
                );
              }.bind(this)
            )
          )
        );
      },
      editHotel: function (e) {
        return (
          _i_("843:06fa86211"),
          this.clearCache(),
          u(d.EDITHOTELSTART, e),
          _r_(
            n("/wishlist/save_hotel", e).then(
              function (t) {
                return (
                  _i_("843:7f0e2ac51"),
                  this.updateLists(t, e.hotel_id),
                  _r_(u(d.EDITHOTEL, t))
                );
              }.bind(this)
            )
          )
        );
      },
      getAvailability: function (t) {
        return (
          _i_("843:bb6d284c1"),
          _r_(
            n("/wishlist/get_or_update_wishlist_hotels_dates", t, {
              noCache: !0,
              noErrorCode: !0,
            }).then(
              function (t) {
                return _i_("843:d3b76cd61"), _r_(t.result);
              }.bind(this)
            )
          )
        );
      },
      clearCache: function () {
        _i_("843:2766d5f51"), (l = {}), _r_();
      },
      bind: function (t, e, i) {
        _i_("843:a092e0ae1"),
          B.eventEmitter.bind(t, function () {
            _i_("843:4dc0d9511"), e.apply(i, arguments), _r_();
          }),
          _r_();
      },
    }),
      _r_();
  }),
  B.define(
    "lists/lists-recently-viewed/lists-recently-viewed",
    function (t, e, i) {
      "use strict";
      _i_("843:b381304c");
      var r = t("../lists-api/lists-api"),
        s = t("../lists-api/lists-api").API,
        _ = t("../lists-store/lists-store");
      (i.exports = {
        recentlyViewedHotels: [],
        addHotelsToList: function (t) {
          _i_("843:479a60ac");
          var e = this;
          _.addHotels({ list_id: t.id, hotels: e.recentlyViewedHotels }).then(
            function () {
              _i_("843:adbf5bbb"), e.onAddedtoList(t), _r_();
            }
          ),
            _r_();
        },
        onAddedtoList: function (t) {
          if (
            (_i_("843:4dd353a7"),
            this.renderAddRecentlyViewedToList({
              success: 1,
              recently_viewed_list_name: t.name,
              recently_viewed_list_url: t.url,
            }),
            window.listView && !B.env.b_run_tfl_move_away_from_lightbox)
          ) {
            var e = window.listView;
            e.setCurrentList({ id: t.id }), e.show();
          }
          _r_();
        },
        toggleLoader: function (t) {
          _i_("843:f0da46af"),
            $(".js-add-recently-viewed-to-list-loader").toggleClass(
              "g-hidden",
              !t
            ),
            _r_();
        },
        addBinds: function () {
          _i_("843:bc653240");
          var n = this;
          function e() {
            _i_("843:13089c67");
            var t = _.getListByDefaultListId(r.type.RECENTLY_VIEWED);
            B.env.auth_level < 1 && (t = _.getListById("0"));
            var e = booking.promise();
            if (t) e.fulfill(t);
            else {
              var i = $.trim($(".js-uc-viewed-hotels-trigger").text());
              e.fulfill(
                _.createList({ name: i, default_list: r.type.RECENTLY_VIEWED })
              );
            }
            e.then(function (t) {
              _i_("843:ac2a5c01"), n.addHotelsToList(t), _r_();
            }),
              _r_();
          }
          $(".uc_viewedhotels").delegate(
            ".js-save-recently-viewed",
            "click",
            function () {
              _i_("843:881f414e");
              var t = { limit: 5 };
              n.toggleLoader(!0),
                s.getRecentlyViewed(t, function (t) {
                  _i_("843:48839f44"),
                    (n.recentlyViewedHotels = t.hotels),
                    _.fetch({}).then(e),
                    _r_();
                }),
                _r_();
            }
          ),
            _r_();
        },
        renderAddRecentlyViewedToList: function (t) {
          _i_("843:dc299371");
          var e = $(
            ".uc_viewedhotels .user_search_item:not(.no_listing)"
          ).length;
          if (0 === e) return _r_();
          var i = $.extend(t, {
            wl_recently_viewed_loader: B.tools.jsStaticUrl(
              "static/image/wl-recently-viewed-loader.gif"
            ),
            properties_length: e,
          });
          $(".save-recently-viewed-container").remove(),
            $(".popover_footer_add_to_list").prepend(
              B.jstmpl("lists_recently_viewed").render(i)
            ),
            B.eventEmitter.trigger("recently_viewed_properties_nav_trigger"),
            _r_();
        },
        init: function () {
          _i_("843:f1638db1"),
            booking.eventEmitter.bind(
              "uc_recently_viewed_loaded",
              this.renderAddRecentlyViewedToList.bind(this)
            ),
            this.addBinds(),
            _r_();
        },
      }),
        _r_();
    }
  ),
  B.define("lists/lists-header-button/lists-header-button", function (t, e, i) {
    "use strict";
    _i_("843:be61e252");
    var r = t("lists/lists-api-legacy"),
      s = t("../lists-store/lists-store"),
      _ = t("../listview-touch/listview-touch");
    (i.exports = t("component").extend({
      init: function () {
        _i_("843:b8eda3a1");
        var i = this.$el.find(".js-lists-header-button"),
          n = "lists-header-button--flash",
          t = [r.EVENTS.EDITHOTEL];
        B.eventEmitter.bind(t.join(" "), function (t, e) {
          _i_("843:5cff1e8c"),
            i.addClass(n),
            setTimeout(function () {
              _i_("843:3f65c77b"), i.removeClass(n), _r_();
            }, 600),
            _r_();
        }),
          s.on("liststore:loading", function (t) {
            _i_("843:513a4927"),
              $(".lists-header-button").toggleClass(
                "lists-header-button--loading",
                t
              ),
              _.isEnabled() &&
                $(".js-uc-listview-lightbox").toggleClass(
                  "uc-listview-loading",
                  t
                ),
              _r_();
          }),
          _r_();
      },
    })),
      _r_();
  }),
  B.require(["require"], function (t) {
    _i_("843:f1d2eb40"),
      t("lists/lists-recently-viewed/lists-recently-viewed").init(),
      B.define("component/lists-header-button", function () {
        return (
          _i_("843:ca858179"),
          _r_(t("lists/lists-header-button/lists-header-button"))
        );
      }),
      _r_();
  }),
  _i_("843:26f84b55"),
  B.require("lists/lists-share/lists-share").init(),
  B.require("lists/lists-hotel-sidebar/lists-hotel-sidebar").init(),
  B.require("lists/lists-hotel-dropdown/lists-hotel-dropdown").init(),
  _r_();
