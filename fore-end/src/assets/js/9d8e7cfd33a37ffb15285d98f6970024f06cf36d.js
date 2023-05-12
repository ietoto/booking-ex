var _i_ = this._i_ || function () {},
  _r_ =
    this._r_ ||
    function (n) {
      return n;
    };
booking.jstmpl(
  "ski_image_gallery",
  (function () {
    _i_("acb:0b67013c");
    var l = [
        "\n    ",
        '\n<div class="sliding-view__content">\n',
        '\n    <ul class="ski-gallery">\n        ',
        '\n            <li class="ski-gallery__item"><img src="',
        '" alt="" class="ski-gallery__img"></li>\n        ',
        "\n    </ul>\n",
        "\n",
        '<div class="bui-grid">\n    <div class="bui-grid__column-6">\n        <button class="bui-button bui-button--primary" type="button" id="js-ski-close-gallery">\n            <span class="bui-button__text">\n                ',
        "/private/ski_dis_back_cta_mdot/name",
        '\n            </span>\n        </button>\n    </div>\n    <div class="bui-grid__column-6">\n        <button class="bui-button bui-button--secondary js-ski-gallery-view-properties" type="button">\n            <a href="',
        '">\n                <span class="bui-button__text">\n                    ',
        "/private/ski_dis_view__properties_mdot/name",
        "\n                </span>\n            </a>\n        </button>\n    </div>\n</div>\n\n\n",
        "\n</div>\n",
      ],
      u = ["photos", "sr_url"];
    return _r_(function (r) {
      _i_("acb:85bbca16");
      var n,
        i = "",
        a = this.fn;
      return (
        (i += l[0]),
        (i = (function (n) {
          if ((_i_("acb:976478a9"), a.MD(u[0]))) {
            n += l[2];
            var i = a.MC(u[0]) || [];
            r.unshift({ photo_url: null });
            for (var t, _ = 1, s = i.length; _ <= s; _++)
              (r[0].photo_url = t = i[_ - 1]),
                (n += [l[3], a.STATIC_HOSTNAME(t, 0, 0, 0, 0), l[4]].join(""));
            r.shift(), (n += l[5]);
          }
          return (n += l[6]), _r_(n);
        })((i += l[1]))),
        (i += l[6]),
        (n = i),
        _i_("acb:8232b666"),
        (n += [
          l[7],
          a.ME(l[8], a.MB, a.MN, null),
          l[9],
          a.F.entities(a.MC(u[1])),
          l[10],
          a.ME(l[11], a.MB, a.MN, null),
          l[12],
        ].join("")),
        (i = _r_(n)),
        (i += l[13]),
        (i += l[6]),
        _r_(i)
      );
    });
  })()
),
  booking.jstmpl(
    "ski_image_gallery_loading",
    (function () {
      _i_("acb:c70e21b6");
      var t = ["\n    ", "\nI AM LOADING......\n", "\n"];
      return _r_(function (n) {
        _i_("acb:8184788c");
        var i = "";
        this.fn;
        return (i += t[0]), (i += t[1]), _r_((i += t[2]));
      });
    })()
  );
