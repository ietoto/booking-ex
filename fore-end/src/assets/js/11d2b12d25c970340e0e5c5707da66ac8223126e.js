var _i_ = this._i_ || function () {},
  _r_ =
    this._r_ ||
    function (i) {
      return i;
    };
B.define("index_postcards_c360_tracker", function (i, n, t) {
  "use strict";
  _i_("3f2:96416b20");
  var _ = i("c360Tracker"),
    r = i("server-data"),
    e = i("utils/inviewport"),
    o = i("utils/debounce");
  (t.exports = {
    start: function (i) {
      _i_("3f2:18ce5911"),
        i.on("click", "[data-idr-ufi]", function () {
          _i_("3f2:fdbe6cba");
          var i = $(this).data("idr-ufi");
          _.track({
            action_name: "webcoreux.destination_recommender_navigated",
            action_version: "1.0.0",
            content: {
              clicked_ufi: i,
              postcards: r.b_index_postcards_ufi_algorithm,
            },
          }),
            _r_();
        });
      var n = o(function () {
        _i_("3f2:2126d20f"),
          e(i) &&
            _.track({
              action_name: "webcoreux.destination_recommender_viewed",
              action_version: "1.0.0",
              content: { postcards: r.b_index_postcards_ufi_algorithm },
            }),
          _r_();
      }, 200);
      $(window).on("scroll", n),
        $(window).on("resize", n),
        $(window).on("load", n),
        n(),
        _r_();
    },
  }),
    _r_();
});
