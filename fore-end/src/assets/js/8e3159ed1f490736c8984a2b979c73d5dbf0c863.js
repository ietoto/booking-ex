var _i_ = this._i_ || function () {},
  _r_ =
    this._r_ ||
    function (e) {
      return e;
    };
B.define("querystring", function (e, n, t) {
  function s(e, t) {
    _i_("d27:b1205794");
    var i = e.split(t);
    return _r_([i.shift(), i.join(t)]);
  }
  _i_("d27:3ba17652"),
    (n.parseUrl = function (e) {
      _i_("d27:d897ad4d");
      var t = {},
        i = s(e, "#");
      return (
        (t.hash = i[1]),
        (i = s(i[0], "?")),
        (t.base = i[0]),
        (t.query = n.parse(i[1])),
        _r_(t)
      );
    }),
    (n.stringify = function (e, t) {
      _i_("d27:779bf395");
      var i = (t = t || {}).sep || "&",
        n = t.eq || "=",
        s = t.skipNull,
        a = t.encodeURIComponent || encodeURIComponent,
        r = [];
      function _(e, t) {
        _i_("d27:36687cac"), null == t && (t = ""), r.push(e + n + a(t)), _r_();
      }
      for (var o in e) {
        if (null === e[o] && s) continue;
        e[o] instanceof Array ? e[o].forEach(_.bind(this, o)) : _(o, e[o]);
      }
      return _r_(r.join(i));
    }),
    (n.parse = function (e, s) {
      _i_("d27:637f7447");
      var a = {};
      return (
        e.split(/[\&\;]+/).forEach(function (e) {
          if ((_i_("d27:20fe34d1"), !e)) return _r_();
          var t = e.split("="),
            i = t.shift(),
            n = t.join("=");
          if (!s)
            try {
              n = decodeURIComponent(n.replace(/\+/g, "%20"));
            } catch (e) {}
          i in a
            ? (Array.isArray(a[i]) || (a[i] = [a[i]]), a[i].push(n))
            : (a[i] = n),
            _r_();
        }),
        _r_(a)
      );
    }),
    (n.toArray = function (e) {
      _i_("d27:c31586d4");
      var t,
        i,
        n = [];
      for (t in e)
        if (e.hasOwnProperty(t))
          if (((i = e[t]), Array.isArray(i)))
            for (var s = 0, a = i.length; s < a; s++)
              n.push({ key: t, value: i[s] });
          else n.push({ key: t, value: i });
      return _r_(n);
    }),
    _r_();
}),
  B.define("utils/makeurl", function (e, s, t) {
    _i_("d27:37a9a4ee");
    var n = e("querystring");
    function _(e) {
      return (
        _i_("d27:3a4ddb84"),
        _r_(
          e instanceof i ? e : new i("string" == typeof e ? n.parseUrl(e) : e)
        )
      );
    }
    function i(e) {
      _i_("d27:81d337d1"),
        (this.base = e.base || ""),
        (this.query = e.query),
        (this.hash = e.hash);
      var t = this.base.match(
        /^(((https?)\:\/\/)[a-zA-Z0-9][a-zA-Z0-9\-\.\:]+[a-zA-Z0-9])(\/.*)/
      );
      t
        ? ((this.origin = t[1]), (this.scheme = t[3]))
        : (this.path = this.base),
        _r_();
    }
    ((s = t.exports =
      function (e, t, i) {
        _i_("d27:b1c6469b");
        var n = s.parse(e);
        return $.extend(n.query, t), _r_(n.toString(i));
      }).parse = _),
      (s.pick = function (e, t, i, n) {
        _i_("d27:0f81736e");
        var s = _(e),
          a = s.query,
          r = {};
        i && $.extend(a, i);
        return (
          t.forEach(function (e) {
            if ((_i_("d27:094899f0"), e instanceof RegExp))
              for (var t in a)
                a.hasOwnProperty(t) && e.test(t) && (r[t] = a[t]);
            else a.hasOwnProperty(e) && (r[e] = a[e]);
            _r_();
          }),
          (s.query = r),
          _r_(s.toString(n))
        );
      }),
      (i.prototype.toString = function (e) {
        _i_("d27:134103fe"), (e = e || {});
        var t = this.base || "",
          i = this.query ? n.stringify(this.query, e) : "";
        return (
          i && (t += "?" + i),
          this.hash && e.keepHash && (t += "#" + this.hash),
          _r_(t)
        );
      }),
      _r_();
  }),
  B.define("trip-types/question-types/base-question", function (e, t, i) {
    "use strict";
    _i_("d27:f92bc775");
    var n = e("jstmpl"),
      s = e("trip-types-quiz/quiz-buttons"),
      a = e("server-data"),
      r = "beach-quiz__item--selected";
    function _() {}
    return (
      (_.prototype.isInit = !1),
      (_.prototype.template = null),
      (_.prototype.question = null),
      (_.prototype.givenAnswer = null),
      (_.prototype.$container = null),
      (_.prototype.init = function () {}),
      (_.prototype.destroy = function () {}),
      (_.prototype.getHTML = function () {
        return (
          _i_("d27:09f3a67c"),
          _r_(
            n(this.template).render({
              question: this.question,
              givenAnswer: this.givenAnswer,
              serverData: a,
            })
          )
        );
      }),
      (_.prototype.render = function () {
        _i_("d27:971fda12"),
          this.$container && this.$container.html(this.getHTML()),
          _r_();
      }),
      (_.prototype.getGivenAnswer = function () {
        return _i_("d27:a4b545ab"), _r_(this.givenAnswer);
      }),
      (_.prototype.renderGivenAnswer = function () {
        _i_("d27:19f0df1a"),
          Array.isArray(this.givenAnswer)
            ? (this.$container.find(".ttqa").removeClass(r),
              this.givenAnswer.map(
                function (e) {
                  _i_("d27:1eec5240"),
                    this.$container.find(".ttqa-" + e).addClass(r),
                    _r_();
                }.bind(this)
              ))
            : (this.$container.find(".ttqa").removeClass(r),
              this.$container.find(".ttqa-" + this.givenAnswer.id).addClass(r)),
          _r_();
      }),
      (_.prototype.onAnswerClick = function () {}),
      (_.prototype.onAfterAnswerClick = function () {
        _i_("d27:7c35d9b2"),
          s.loadButtons(this.question, this.givenAnswer),
          _r_();
      }),
      (_.extend = function (e, t) {
        _i_("d27:a3ca22b9");
        var i = function () {},
          n = t ? new t() : new _();
        for (var s in e) e.hasOwnProperty(s) && (n[s] = e[s]);
        return (
          (i.prototype = n),
          (i.extend = function (e) {
            return _i_("d27:d7495955"), _r_(_.extend.call(null, e, i));
          }),
          _r_(i)
        );
      }),
      (_.prototype.prepare = function (e) {
        for (var t in (_i_("d27:6a7c5dd4"), e))
          e.hasOwnProperty(t) && (this[t] = e[t]);
        _r_();
      }),
      _r_(_)
    );
  }),
  B.define("trip-types/question-types/single-select", function (e, t, i) {
    _i_("d27:9113f0e8");
    var n = e("trip-types/question-types/base-question").extend({
      template: "single_select_question",
      init: function (e) {
        _i_("d27:c487ee78"),
          (this.isInit = !0),
          (this.$container = e.container),
          this.question.defaultFromUrl &&
            this.question.hasOwnProperty("defaultOptionValue") &&
            (this.givenAnswer = this._getGivenAnswer(
              this.question.defaultOptionValue
            )),
          this.render(),
          this.bindListeners(),
          _r_();
      },
      bindListeners: function () {
        _i_("d27:248ef6cd"),
          this.$container
            .off("change")
            .change(".js-tt-radiobox", this.onAnswerClick.bind(this)),
          _r_();
      },
      destroy: function () {
        _i_("d27:bbbe87e1"),
          (this.isInit = !1),
          this.$container.off("change"),
          (this.givenAnswer = null),
          this.$container.empty(),
          _r_();
      },
      onAnswerClick: function (e) {
        _i_("d27:fc8b09eb"), e.stopPropagation();
        var t = this._getGivenAnswer(e.target.value);
        (this.givenAnswer = t), this.onAfterAnswerClick(), this.render(), _r_();
      },
      _getGivenAnswer: function (t) {
        return (
          _i_("d27:78e0736c"),
          _r_(
            this.question.options.filter(function (e) {
              return _i_("d27:f75b18db"), _r_(e.value == t);
            })[0]
          )
        );
      },
    });
    return _r_(function (e) {
      _i_("d27:0fb525c2");
      var t = n.extend(e);
      return _r_(new t());
    });
  }),
  B.define("trip-types/question-types/multi-select", function (e, t, i) {
    _i_("d27:d9e2a15b");
    var n = e("trip-types/question-types/base-question").extend({
      template: "multi_select_question",
      init: function (e) {
        _i_("d27:f6e1a470"),
          (this.isInit = !0),
          (this.multipleAnswers = []),
          this.question.defaultFromUrl &&
            this.question.hasOwnProperty("defaultOptionValue") &&
            ((this.givenAnswer = this.question.defaultOptionValue),
            Array.isArray(this.question.defaultOptionValue)
              ? (this.multipleAnswers = this.question.defaultOptionValue.map(
                  function (e) {
                    return _i_("d27:06bdd6bb"), _r_(parseInt(e, 10));
                  }
                ))
              : (this.multipleAnswers = [
                  parseInt(this.question.defaultOptionValue, 10),
                ])),
          (this.$container = e.container),
          this.render(),
          this.bindListeners(),
          _r_();
      },
      bindListeners: function () {
        _i_("d27:799accfe"),
          this.$container
            .off("change")
            .change(".js-tt-checkbox", this.onAnswerClick.bind(this)),
          _r_();
      },
      destroy: function () {
        _i_("d27:ac684e94"),
          (this.isInit = !1),
          this.$container.off("change"),
          (this.multipleAnswers = []),
          (this.givenAnswer = null),
          this.$container.empty(),
          _r_();
      },
      onAnswerClick: function (t) {
        _i_("d27:348a228c"), t.stopPropagation();
        var e = t.target.checked,
          i = this.question.options.filter(function (e) {
            return _i_("d27:1ea9a0a7"), _r_(e.value == t.target.value);
          })[0];
        if (e) this.multipleAnswers.push(i.value);
        else {
          var n = this.multipleAnswers.indexOf(i.value);
          -1 < n && this.multipleAnswers.splice(n, 1);
        }
        this.multipleAnswers.length
          ? (this.givenAnswer = this.multipleAnswers)
          : (this.givenAnswer = null),
          this.onAfterAnswerClick(),
          this.render(),
          _r_();
      },
      _getGivenAnswer: function (t) {
        return (
          _i_("d27:78e0736c1"),
          _r_(
            this.question.options.filter(function (e) {
              return _i_("d27:f75b18db1"), _r_(e.value == t);
            })[0]
          )
        );
      },
    });
    return _r_(function (e) {
      _i_("d27:c773f600");
      var t = n.extend(e);
      return _r_(new t());
    });
  }),
  B.define("trip-types/question-types/calendar_old", function (e, t, i) {
    _i_("d27:79f4ae88");
    var n = e("trip-types/question-types/base-question"),
      s = e("events"),
      a = n.extend({
        template: "calendar_question",
        init: function (e) {
          _i_("d27:d8fac58a"),
            (this.isInit = !0),
            (this.$container = e.container),
            this.question.defaultOptionValue &&
              (this.givenAnswer = { value: this.question.defaultOptionValue }),
            this.render(),
            this.bindListeners(),
            _r_();
        },
        bindListeners: function () {
          _i_("d27:608fa23a"),
            this.$container.loadComponents(),
            s.on(
              "beach-quiz-calendar:date-selected",
              function (e) {
                _i_("d27:51c8bd7c"), this.onAnswerClick(e), _r_();
              }.bind(this)
            ),
            _r_();
        },
        destroy: function () {
          _i_("d27:fe96739f"),
            (this.isInit = !1),
            (this.givenAnswer = null),
            this.$container.empty(),
            _r_();
        },
        onAnswerClick: function (e) {
          _i_("d27:cb32db6f");
          var t = e.year + "-" + e.month + "-01";
          (this.givenAnswer = { value: t }),
            this.$container.find('input[name="date"]').val(t),
            this.onAfterAnswerClick(),
            _r_();
        },
      });
    return _r_(function (e) {
      _i_("d27:ef0a6420");
      var t = a.extend(e);
      return _r_(new t());
    });
  }),
  booking.jstmpl(
    "calendar_question",
    (function () {
      _i_("d27:7693f18b");
      var s = [
          '\n    <div class="bui-title bui-title--headline_2 c-beach_quiz__section-header">\n      <span class="bui-title__text">',
          "</span>\n      ",
          '\n        <span class="bui-title__subtitle">',
          '\n    </div>\n<div class="c-beach_quiz__section-wrapper">\n    <div class="c-beach_quiz__grid c-beach-quiz__grid--calendar">\n        ',
          '\n\n    <div\n        data-component="beach-quiz-calendar"\n        class="beach-calendar"\n        data-month="',
          '"\n        data-year="',
          '"\n        data-date="',
          '"\n    >\n\n      <div class="beach-calendar_wrapper">\n        <div class="bui-spinner">\n          <div class="bui-spinner__inner"></div>\n        </div>\n      </div>\n\n    <input type="hidden" id="selectedDate" name="date" value="',
          '">\n\n    </div>\n\n',
          "\n",
          '\n        <input type="hidden" name="',
          '" value="',
          '" />\n    </div>\n</div>\n',
        ],
        a = ["question", "fe_month", "fe_year", "fe_date", "givenAnswer"];
      return _r_(function (e) {
        _i_("d27:9c06562a");
        var t,
          i = "",
          n = this.fn;
        return (
          (i += [s[0], n.F.entities((n.MC(a[0]) || {}).text), s[1]].join("")),
          n.MJ(n.MG((n.MC(a[0]) || {}).subText)) &&
            (i += [s[2], n.F.entities((n.MC(a[0]) || {}).subText), s[1]].join(
              ""
            )),
          (i += s[3]),
          e.unshift({
            fe_date: n.MG((n.MC(a[4]) || {}).value),
            fe_month: n.MB(a[1]),
            fe_year: n.MB(a[2]),
          }),
          (t = i),
          _i_("d27:77e906f0"),
          (t += [
            "",
            s[4],
            n.F.entities(n.MC(a[1])),
            s[5],
            n.F.entities(n.MC(a[2])),
            s[6],
            n.F.entities(n.MC(a[3])),
            s[7],
            n.F.entities(n.MC(a[3])),
            s[8],
            "",
            s[9],
          ].join("")),
          (i = _r_(t)),
          e.shift(),
          (i += [
            s[10],
            n.F.entities((n.MC(a[0]) || {}).name),
            s[11],
            n.F.entities((n.MC(a[4]) || {}).value),
            s[12],
          ].join("")),
          _r_(i)
        );
      });
    })()
  ),
  B.define("trip-types/question-types/calendar", function (e) {
    _i_("d27:8a8b4f0f");
    var t = e("trip-types/question-types/base-question"),
      i = "mdot" === B.env.b_site_type,
      n = {
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
      },
      s = t.extend({
        template: "bui_calendar_question",
        init: function (e) {
          _i_("d27:49d836a3"),
            (this.isInit = !0),
            (this.$container = e.container),
            this.question.defaultOptionValue
              ? (this.givenAnswer = { value: this.question.defaultOptionValue })
              : (this.givenAnswer = { value: this.setTodayDates() }),
            this.render(),
            this.bindListeners(),
            _r_();
        },
        setTodayDates: function () {
          _i_("d27:3a27262f");
          var e = new Date(),
            t = new Date(e);
          return (
            t.setDate(t.getDate() + 1),
            _r_(this.dateToKebabCase(e) + ":" + this.dateToKebabCase(t))
          );
        },
        bindListeners: function () {
          _i_("d27:b6488c18");
          var t = this,
            e = t.givenAnswer ? t.givenAnswer.value.split(":") : [];
          window.BUI.extendComponent("Calendar.double", {
            dayNames: B.env.tt_quiz_weekdays ? t.getDayNames() : n.dayNames,
            monthNames: B.env.tt_quiz_months ? t.getMonthNames() : n.monthNames,
            minDate: e[0],
            startDate: e[0],
            endDate: e[1],
            monthsToShow: 2,
            onDateChange: function (e) {
              _i_("d27:9c67e692"), t.onAnswerClick(e), _r_();
            },
            vertical: i,
          }),
            window.BUI.initComponents(t.$container.get(0)),
            _r_();
        },
        destroy: function () {
          _i_("d27:fe96739f1"),
            (this.isInit = !1),
            (this.givenAnswer = null),
            this.$container.empty(),
            _r_();
        },
        onAnswerClick: function (e) {
          _i_("d27:6f00b4ac"), (this.givenAnswer = null);
          var t = e.startDate,
            i = e.endDate,
            n = this.dateToKebabCase(t) + ":" + this.dateToKebabCase(i);
          this.checkDateDifference(t, i) &&
            ((this.givenAnswer = { value: n }),
            this.$container.find("input").val(n)),
            this.onAfterAnswerClick(),
            _r_();
        },
        longStayAlertMessage: function (e) {
          _i_("d27:183b8ca8");
          var t = B.jstmpl.translations("ls_error_max_los_exceeded_p1", e, {
              max_num_nights: 30,
            }),
            i = B.jstmpl.translations("ls_error_max_los_exceeded_p2", e, {
              max_num_nights: 30,
            });
          alert(t + " " + i), _r_();
        },
        checkDateDifference: function (e, t) {
          if ((_i_("d27:dd99681f"), e && t)) {
            var i = t.getTime() - e.getTime();
            return Math.ceil(i / 864e5) <= 30
              ? _r_(!0)
              : (this.longStayAlertMessage(t), _r_(!1));
          }
          _r_();
        },
        dateToKebabCase: function (e) {
          if ((_i_("d27:820ce2ca"), !e)) return _r_("");
          var t = e.getDate(),
            i = e.getMonth() + 1,
            n = e.getFullYear();
          return _r_(
            n +
              "-" +
              (i = i < 10 ? "0" + i : i) +
              "-" +
              (t = t < 10 ? "0" + t : t)
          );
        },
        getMonthNames: function () {
          _i_("d27:966ad5a7");
          var i = {};
          return (
            [
              "january",
              "february",
              "march",
              "april",
              "may",
              "june",
              "july",
              "august",
              "september",
              "october",
              "november",
              "december",
            ].forEach(function (e, t) {
              _i_("d27:b2526945"), (i[e] = B.env.tt_quiz_months[t].name), _r_();
            }),
            _r_(i)
          );
        },
        getDayNames: function () {
          _i_("d27:fc47a149");
          var i = {};
          return (
            [
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
              "sunday",
            ].forEach(function (e, t) {
              _i_("d27:fa33ace4"),
                (i[e] = B.env.tt_quiz_weekdays[t].short),
                _r_();
            }),
            _r_(i)
          );
        },
      });
    return _r_(function (e) {
      _i_("d27:ef0a64201");
      var t = s.extend(e);
      return _r_(new t());
    });
  }),
  booking.jstmpl(
    "bui_calendar_question",
    (function () {
      _i_("d27:67d41113");
      var n = [
          "\n    ",
          '\n    <div class="bui-title bui-title--headline_2 c-beach_quiz__section-header">\n      <span class="bui-title__text">',
          "</span>\n      ",
          '\n        <span class="bui-title__subtitle">',
          '\n    </div>\n<div class="',
          "tt-quiz--new bui-f-depth-1",
          '">\n    <div class="bui-calendar" data-bui-component="Calendar.double">\n        <div class="bui-calendar__main">\n            <button class="bui-calendar__control bui-calendar__control--prev" aria-label="Previous month" data-bui-ref="calendar-prev">\n                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="presentation">\n                    <path d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path>\n                </svg>\n            </button>\n            <button class="bui-calendar__control bui-calendar__control--next" aria-label="Next month" data-bui-ref="calendar-next">\n                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="presentation">\n                    <path d="M9.45 6a.74.74 0 0 1 .53.22l5 5a1.08 1.08 0 0 1 .32.78 1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path>\n                </svg>\n            </button>\n            <div class="bui-calendar__content" data-bui-ref="calendar-content"></div>\n        </div>\n    </div>\n\n    <input type="hidden" name="',
          '" value="',
          '" />\n</div>\n\n',
        ],
        s = ["serverData", "question", "fe_is_index_quiz", "givenAnswer"];
      return _r_(function (e) {
        _i_("d27:3b4f7a9d");
        var t = "",
          i = this.fn;
        return (
          (t += n[0]),
          i.MN("fe_is_index_quiz", i.MG((i.MC(s[0]) || {}).fe_is_index_quiz)),
          (t += [n[1], i.F.entities((i.MC(s[1]) || {}).text), n[2]].join("")),
          i.MJ(i.MG((i.MC(s[1]) || {}).subText)) &&
            (t += [n[3], i.F.entities((i.MC(s[1]) || {}).subText), n[2]].join(
              ""
            )),
          (t += n[4]),
          i.MJ(i.MB(s[2])) && (t += n[5]),
          (t += [
            n[6],
            i.F.entities((i.MC(s[1]) || {}).name),
            n[7],
            i.F.entities((i.MC(s[3]) || {}).value),
            n[8],
          ].join("")),
          _r_(t)
        );
      });
    })()
  ),
  B.define("trip-types-quiz/quiz-data", function (e, t, i) {
    _i_("d27:65d6f47b");
    var n = e("fragment"),
      s = e("jquery"),
      a = e("events"),
      r = e("component/beach-quiz/events");
    (i.exports = {
      init: function (e) {
        _i_("d27:6b62af73");
        var t = new s.Deferred(),
          i = e.name;
        return (
          delete e.name,
          n.call(i, e).then(
            function (e) {
              _i_("d27:ae921e6c"), t.resolve(e), _r_();
            },
            function (e) {
              _i_("d27:541e52c8"),
                t.resolve({ error: e }),
                a.emit(r.QUIZ_DATA_FAILED),
                _r_();
            }
          ),
          _r_(t)
        );
      },
    }),
      _r_();
  }),
  B.define("trip-types-quiz/quiz-question", function (a, e, t) {
    _i_("d27:312c8c2f");
    var r = "SINGLE_SELECT",
      _ = "MULTI_SELECT",
      o = "MONTH_YEAR",
      u = "FULL_DATE";
    (t.exports = {
      init: function (e) {
        _i_("d27:d806e9e1"), (this.$container = e.container), _r_();
      },
      loadQuestion: function (e) {
        switch ((_i_("d27:c0dfb138"), e.type)) {
          case r:
            var t = a("trip-types/question-types/single-select");
            return _r_(new t({ question: e }));
          case _:
            var i = a("trip-types/question-types/multi-select");
            return _r_(new i({ question: e }));
          case o:
            var n = a("trip-types/question-types/calendar_old");
            return _r_(new n({ question: e }));
          case u:
            var s = a("trip-types/question-types/calendar");
            return _r_(new s({ question: e }));
        }
        _r_();
      },
    }),
      _r_();
  }),
  B.define("trip-types-quiz/quiz-buttons", function (e, t, i) {
    _i_("d27:56ec026a");
    var n = e("jstmpl"),
      s = e("events"),
      a = e("component/beach-quiz/events"),
      r = e("server-data");
    (i.exports = {
      init: function (e) {
        _i_("d27:b4df8443"),
          (this.$container = e.container),
          (this.$form = e.form),
          (this.answeredQuestions = e.answeredQuestions),
          (this.nextQuestionId = 0),
          (this.currentQuestion = null),
          (this.cst = n("tt_quiz_buttons")),
          _r_();
      },
      setHash: function (e) {
        _i_("d27:615b0b24"), (window.location.hash = "quiz-" + e), _r_();
      },
      bindListeners: function () {
        _i_("d27:656c0f6b"),
          this.nextBtn.click(this.nextQuestionHandler.bind(this)),
          this.prevButton.click(this.previousQuestionHandler.bind(this)),
          _r_();
      },
      loadButtons: function (e, t) {
        _i_("d27:5014d20e"), (this.currentQuestion = e);
        var i = {
          previous_btn_copy: n.translations("beach_bs_quiz_cta_back_web"),
          next_btn_copy: n.translations("beach_bs_quiz_cta_next_web"),
          fe_is_index_quiz: r.fe_is_index_quiz,
        };
        (this.nextQuestionId = this.findNextQuestionId(e, t)),
          !e || e.optional || t
            ? (i.disableNextButton = !1)
            : (i.disableNextButton = !0),
          !this.answeredQuestions ||
          0 == this.answeredQuestions.length ||
          e.firstQuestion
            ? (i.disablePrevButton = !0)
            : (i.disablePrevButton = !1),
          e.hidden ||
            e.optional ||
            !e.defaultOptionValue ||
            (this.nextQuestionId = -1),
          -1 == this.nextQuestionId &&
            (i.next_btn_copy = n.translations(
              "beach_bs_quiz_when_results_cta_web"
            )),
          this.render(i),
          _r_();
      },
      findNextQuestionId: function (e, t) {
        return (
          _i_("d27:8994cfd1"),
          t && t.nextQuestionId
            ? _r_(t.nextQuestionId)
            : e && e.nextQuestionId
            ? _r_(e.nextQuestionId)
            : _r_(-1)
        );
      },
      nextQuestionHandler: function (e) {
        _i_("d27:f384bdd8"),
          e.preventDefault(),
          this.answeredQuestions.push(this.currentQuestion.id);
        var t = this.nextQuestionId;
        -1 < t
          ? (this.setHash(t), s.emit(a.NEXT_PAGE))
          : (s.emit(a.SUBMIT_FORM), this.$form && this.$form.submit()),
          _r_();
      },
      previousQuestionHandler: function (e) {
        _i_("d27:d275bb58"), e.preventDefault();
        var t = this.answeredQuestions.pop();
        this.setHash(t), s.emit(a.PREVIOUS_PAGE), _r_();
      },
      render: function (e) {
        _i_("d27:d193f4bb");
        var t = this.cst.render(e);
        this.$container.html(t),
          (this.nextBtn = this.$container.find(".tt-quiz__next-btn")),
          (this.prevButton = this.$container.find(".tt-quiz__prev-btn")),
          this.bindListeners(),
          _r_();
      },
    }),
      _r_();
  }),
  B.define("trip-types-quiz/quiz-indicators", function (e, t, i) {
    _i_("d27:7989d5f3");
    var n = e("jstmpl"),
      s = e("server-data");
    (i.exports = {
      init: function (e) {
        _i_("d27:d14854f4"),
          (this.$container = e.container),
          (this.cst = n("tt_quiz_indicators")),
          _r_();
      },
      loadIndicators: function (e, t) {
        _i_("d27:f58b380c"),
          this.render({ current: e, total: t, serverData: s }),
          _r_();
      },
      render: function (e) {
        _i_("d27:651c983d");
        var t = this.cst.render(e);
        this.$container.html(t), _r_();
      },
    }),
      _r_();
  }),
  B.define("component/trip-types-quiz", function (e, t, i) {
    _i_("d27:ad2948da");
    var n = e("jstmpl"),
      s = e("component"),
      a = e("trip-types-quiz/quiz-data"),
      u = e("trip-types-quiz/quiz-buttons"),
      o = e("trip-types-quiz/quiz-question"),
      d = e("trip-types-quiz/quiz-indicators"),
      c = e("querystring").parseUrl(window.location.href),
      l = e("events"),
      h = e("component/beach-quiz/events"),
      r = {};
    (i.exports = s.extend({
      init: function () {
        _i_("d27:331f1b6c"),
          (this.activeQuestionId = 0),
          (this.questions = null),
          (this.answeredQuestions = []),
          (this.questionInstances = {}),
          (this.tabs = null),
          (this.$form = this.$el.find("form")),
          (this.activeTabIndex = this.getActiveTabIndex()),
          (this.$wrapper = $(".tt-quiz__params-wrapper")),
          (this.firstSelectedQuestionValue = null),
          o.init({ container: this.$el.find(".tt-quiz__content") }),
          u.init({
            container: this.$el.find(".tt-quiz--buttons__content"),
            form: this.$form,
            answeredQuestions: this.answeredQuestions,
          }),
          d.init({ container: this.$el.find(".tt-quiz__indicators") }),
          $.each(
            this.$wrapper.data(),
            function (e, t) {
              if (
                (_i_("d27:a69d2a4c"),
                "quizFirstSelected" === e &&
                  (this.firstSelectedQuestionValue = t),
                -1 < e.indexOf("quizArg"))
              ) {
                var i = e.substring(7).toLowerCase();
                "" !== i && ("fragment_name" === i ? (r.name = t) : (r[i] = t));
              }
              _r_();
            }.bind(this)
          ),
          this.questions || void 0 === r
            ? this.showQuestionFromHash()
            : a.init(r).then(
                function (e) {
                  _i_("d27:de770444"),
                    e &&
                      !e.error &&
                      (this.$form.append(
                        "<input type='hidden' name='quiz' value='" +
                          e.id +
                          "' />"
                      ),
                      this.$form.append(
                        "<input type='hidden' name='origin' value='trip_types_quiz' />"
                      ),
                      e.questions && Object.keys(e.questions).length
                        ? ((this.questions = e.questions),
                          this.renderTabs(e.questions),
                          this.$form.attr("action", e.targetUri),
                          l.emit(h.QUIZ_DATA_LOADED))
                        : (this.$form.replaceWith(
                            "<div>" +
                              n.translations("pm_generic_error_msg") +
                              "</div>"
                          ),
                          l.emit(h.QUIZ_DATA_FAILED))),
                    _r_();
                }.bind(this)
              ),
          this.$form.on("submit", this.handleFormSubmit.bind(this)),
          $(window).on("hashchange.quiz", this.handleChange.bind(this)),
          l.on(
            h.QUIZ_DATA_LOADED,
            function () {
              _i_("d27:e1b8ad13"),
                this.$el.find("div:first").addClass("data-loaded"),
                _r_();
            }.bind(this)
          ),
          _r_();
      },
      getActiveTabIndex: function () {
        return (
          _i_("d27:13c0671c"),
          _r_(
            this.$el
              .find(".bui-tab__content.bui-tab__content--selected")
              .index()
          )
        );
      },
      renderTabs: function (a) {
        _i_("d27:da491890");
        var r = n("tt_quiz_tab"),
          _ = "";
        a &&
          (Object.keys(a).forEach(
            function (e, t) {
              _i_("d27:782830df");
              var i = a[e];
              if (
                (((0 === t &&
                  !i.defaultOptionValue &&
                  this.firstSelectedQuestionValue) ||
                  (!i.defaultOptionValue && c.query[i.name])) &&
                  (this.firstSelectedQuestionValue
                    ? (i.defaultOptionValue = this.firstSelectedQuestionValue)
                    : (i.defaultOptionValue = c.query[i.name]),
                  (i.defaultFromUrl = !0)),
                i.hidden)
              )
                this.$form.append(
                  "<input type='hidden' name='" +
                    i.name +
                    "' value='" +
                    i.defaultOptionValue +
                    "' />"
                );
              else {
                var n = o.loadQuestion(i);
                if (n)
                  if (
                    ((this.questionInstances[i.id] = n),
                    Array.isArray(i.defaultOptionValue))
                  ) {
                    var s = "";
                    i.defaultOptionValue.forEach(function (e) {
                      _i_("d27:17b90228"),
                        (s +=
                          "<input type='hidden' name='" +
                          i.name +
                          "' value='" +
                          e +
                          "' />"),
                        _r_();
                    }),
                      (_ += r.render({ id: i.id, content: s }));
                  } else
                    _ += r.render({
                      id: i.id,
                      content:
                        "<input type='hidden' name='" +
                        i.name +
                        "' value='" +
                        i.defaultOptionValue +
                        "' />",
                    });
              }
              _r_();
            }.bind(this)
          ),
          this.$el.find(".tt-quiz__content").html(_),
          this.initTabs()),
          _r_();
      },
      initTabs: function () {
        _i_("d27:b4621321");
        var e = this.$el.find(".tt-quiz__content"),
          _ = $("#tt-quiz-modal .bui-modal__inner"),
          o = Object.keys(this.questionInstances).length;
        (this.tabs = window.BUI.createInstance("Tab", e[0], {
          onAfterTabChange: function (e) {
            if (
              (_i_("d27:7e66ec8e"),
              !(r = this.$el.find(".bui-tab__content--selected")).length)
            ) {
              var t = this.$el.find('[data-tab-id="' + e.id + '"]')[0];
              $(t).addClass("bui-tab__content--selected");
            }
            var i = this.activeTabIndex,
              n = this.getActiveTabIndex(),
              s = this.questionInstances[e.id],
              a = this.questionInstances[this.activeQuestionId];
            if (i <= n) {
              if (!s.isInit) {
                var r = this.$el.find(".bui-tab__content--selected");
                s.init({ container: r });
              }
            } else if (n < i) {
              if (a.isInit) a.destroy();
              else {
                r = this.$el.find(".bui-tab__content--selected");
                a.init({ container: r });
              }
              if (!s.isInit) {
                r = this.$el.find(".bui-tab__content--selected");
                s.init({ container: r });
              }
            }
            (this.activeQuestionId = parseInt(e.id)),
              (this.activeTabIndex = n),
              s &&
                (d.loadIndicators(this.activeTabIndex, o),
                u.loadButtons(s.question, s.givenAnswer)),
              _.animate({ scrollTop: 0 }, 100),
              l.emit(h.QUIZ_TAB_CHANGED, n),
              _r_();
          }.bind(this),
        })),
          this.tabs.mount(),
          this.showQuestionFromHash(),
          _r_();
      },
      getCurrentHash: function () {
        _i_("d27:416d5b7a");
        var e = window.location.hash.slice(1);
        return e && "" !== e && e.match("quiz-")
          ? ((e = e.split("-")[1]), _r_(e))
          : _r_(null);
      },
      getFirstQuestion: function () {
        _i_("d27:ddab3e0d");
        var e = Object.values(this.questions);
        return _r_(
          e.filter(function (e) {
            return _i_("d27:5f2a7ea1"), _r_(e.firstQuestion);
          })[0]
        );
      },
      showFirstQuestion: function () {
        _i_("d27:cb3a9eda");
        var e = this.getFirstQuestion();
        (window.location.hash = "quiz-" + e.id), _r_();
      },
      showQuestionFromHash: function () {
        _i_("d27:adb9fa02");
        var e = this.getCurrentHash();
        (e = parseInt(e)) && !isNaN(e) && this.questionInstances[e]
          ? this.tabs && this.tabs.changeTab(e)
          : this.showFirstQuestion(),
          _r_();
      },
      handleFormSubmit: function (e) {
        _i_("d27:62002fee");
        var t = this.questions,
          i = this.answeredQuestions;
        for (var n in t) {
          var s = t[n],
            a = i.indexOf(s.id);
          if (!s.optional && !s.hidden && !s.defaultOptionValue && -1 === a) {
            e.preventDefault(), this.tabs.changeTab(s.id);
            break;
          }
        }
        _r_();
      },
      handleChange: function () {
        _i_("d27:98772ac5");
        var e = this.getCurrentHash();
        e && "opener" !== e && this.tabs && this.tabs.changeTab(e), _r_();
      },
    })),
      _r_();
  }),
  booking.jstmpl(
    "single_select_question",
    (function () {
      _i_("d27:bca75df1");
      var _,
        o = [
          "\n    ",
          '\n\n    <div class="bui-title bui-title--headline_2 c-beach_quiz__section-header">\n      <span class="bui-title__text">',
          "</span>\n      ",
          '\n        <span class="bui-title__subtitle">',
          '\n    </div>\n\n  <div class="c-beach_quiz__section-wrapper">\n    ',
          '\n    <div class="c-beach_quiz__grid ',
          " c-beach_quiz__grid--2cols ",
          " c-beach_quiz__grid--3cols ",
          '">\n\n      ',
          "\n      ",
          "\n\n      ",
          '\n          <input type="hidden" name="',
          '" value="',
          '" />\n      ',
          "\n        ",
          "\n            ",
          '\n\n        <div aria-label="A11y description for card" class="bui-card bui-card--media beach-quiz__item">\n            <div class="bui-card__image-container beach-quiz__item-image-container ',
          "beach-quiz__item--selected",
          '"\n                style="background-image: url(',
          ')"\n            >\n\n\n               <label class="bui-radio">\n                    ',
          '\n                        <div class=" beach-quiz__item--image-overlay  ',
          "beach-quiz__item--image-overlay--checked",
          '"></div>\n                    ',
          "\n\n                   ",
          '\n                       <div class="beach-quiz__item--checked ',
          "bui-u-show",
          "bui-u-hidden",
          '">\n                           ',
          "24",
          "streamline/checkmark_selected",
          "\n                       </div>\n                   ",
          '\n                       <input checked type="radio" class="bui-radio__input js-tt-radiobox" name="',
          '"/>\n                   ',
          '\n                       <input type="radio" class="bui-radio__input js-tt-radiobox" name="',
          '\n\n                   <header class="beach-quiz__item-header">\n                     <span class="beach-quiz__item-title">',
          "</span>\n                   </header>\n\n                </label>\n\n\n\n            </div>\n        </div>\n      ",
          "\n    </div>\n </div>\n\n\n",
        ],
        u = [
          "serverData",
          "question",
          "fe_options_count",
          "fe_field_name",
          "givenAnswer",
          "fe_is_checked",
          "fe_is_index_quiz",
        ];
      return _r_(function (e) {
        _i_("d27:f71f2b36");
        var t = "",
          i = this.fn;
        (t += o[0]),
          i.MN("fe_is_index_quiz", i.MG((i.MC(u[0]) || {}).fe_is_index_quiz)),
          (t += [o[1], i.F.entities((i.MC(u[1]) || {}).text), o[2]].join("")),
          i.MJ(i.MG((i.MC(u[1]) || {}).subText)) &&
            (t += [o[3], i.F.entities((i.MC(u[1]) || {}).subText), o[2]].join(
              ""
            )),
          (t += o[4]),
          i.MN("fe_options_count", i.array_length(i.MC(u[1]).options)),
          (t += o[5]),
          i.MJ(4 == i.MB(u[2])) ? (t += o[6]) : (t += o[7]),
          (t += o[8]),
          i.MN("fe_field_name", i.MG((i.MC(u[1]) || {}).name)),
          (t += o[9]),
          i.MN("fe_field_id", i.MG((i.MC(u[1]) || {}).id)),
          (t += o[10]),
          i.MJ(i.MC(u[1]).optional) &&
            i.MK(i.MC(u[1]).hidden) &&
            i.MK(i.MB(u[4])) &&
            (t += [
              o[11],
              i.F.entities(i.MC(u[3])),
              o[12],
              i.F.entities((i.MC(u[1]) || {}).defaultOptionValue),
              o[13],
            ].join("")),
          (t += o[10]);
        var n = (i.MC(u[1]) || {}).options || [];
        e.unshift({ fe_answer: null });
        for (var s, a = 1, r = n.length; a <= r; a++)
          (e[0].fe_answer = s = n[a - 1]),
            (t += o[14]),
            i.MD(u[4]) &&
              ((t += o[15]),
              i.MN("fe_is_checked", i.MJ(s.value == i.MC(u[4]).value)),
              (t += o[14])),
            (t += o[16]),
            i.MD(u[5]) && (t += o[17]),
            (t += [
              o[18],
              i.STATIC_HOSTNAME(s.imageUris, 0, 0, 0, 0),
              o[19],
            ].join("")),
            i.MD(u[6]) ||
              ((t += o[20]), i.MD(u[5]) && (t += o[21]), (t += o[22])),
            (t += o[23]),
            i.MD(u[6]) ||
              ((t += o[24]),
              i.MD(u[5]) ? (t += o[25]) : (t += o[26]),
              (t += [
                o[27],
                (e.unshift({
                  color: "#FFFFFF",
                  height: o[28],
                  name: o[29],
                  width: o[28],
                }),
                (_ = i.HELPER("icon", e[0])),
                e.shift(),
                _),
                o[30],
              ].join(""))),
            (t += o[23]),
            i.MD(u[5])
              ? (t += [
                  o[31],
                  i.F.entities(i.MC(u[3])),
                  o[12],
                  i.F.entities((s || {}).value),
                  o[32],
                ].join(""))
              : (t += [
                  o[33],
                  i.F.entities(i.MC(u[3])),
                  o[12],
                  i.F.entities((s || {}).value),
                  o[32],
                ].join("")),
            (t += [o[34], i.F.entities((s || {}).text), o[35]].join(""));
        return e.shift(), (t += o[36]), _r_(t);
      });
    })()
  ),
  booking.jstmpl(
    "multi_select_question",
    (function () {
      _i_("d27:d46fcdf3");
      var _,
        o = [
          "\n    ",
          '\n\n    <div class="bui-title bui-title--headline_2 c-beach_quiz__section-header">\n      <span class="bui-title__text">',
          "</span>\n      ",
          '\n        <span class="bui-title__subtitle">',
          '\n    </div>\n\n  <div class="c-beach_quiz__section-wrapper">\n    <div class="c-beach_quiz__grid \n      ',
          "\n        c-beach_quiz__grid--2cols\n      ",
          "\n        c-beach_quiz__grid--4cols\n      ",
          '"\n      >\n\n      ',
          "\n      ",
          "\n\n      ",
          '\n          <input type="hidden" name="',
          '" value="',
          '" />\n      ',
          "\n        ",
          "\n            ",
          '\n\n        <div aria-label="A11y description for card" class="bui-card bui-card--media beach-quiz__item ',
          "tt-quiz--new",
          '">\n            <div class="bui-card__image-container beach-quiz__item-image-container ',
          "beach-quiz__item--selected",
          '"\n                style="background-image: url(',
          ')"\n            >\n\n\n               <label class="bui-checkbox">\n                   ',
          '\n                        <div class=" beach-quiz__item--image-overlay  ',
          "beach-quiz__item--image-overlay--checked",
          '"></div>\n                   ',
          "\n\n                   ",
          '\n                       <div class="beach-quiz__item--checked ',
          "bui-u-show",
          "bui-u-hidden",
          '">\n                           ',
          "24",
          "streamline/checkmark_selected",
          "\n                       </div>\n                   ",
          '\n                       <input checked type="checkbox" class="bui-checkbox__input js-tt-checkbox" name="',
          '" />\n                   ',
          '\n                       <input type="checkbox" class="bui-checkbox__input js-tt-checkbox" name="',
          '\n\n                   <header class="beach-quiz__item-header">\n                     <span class="beach-quiz__item-title">',
          "</span>\n                   </header>\n                </label>\n\n\n\n            </div>\n        </div>\n        ",
          "\n    </div>\n </div>\n\n ",
        ],
        u = [
          "serverData",
          "question",
          "fe_is_index_quiz",
          "fe_field_name",
          "givenAnswer",
          "fe_is_checked",
        ];
      return _r_(function (e) {
        _i_("d27:c48b73d6");
        var t = "",
          i = this.fn;
        (t += o[0]),
          i.MN("fe_is_index_quiz", i.MG((i.MC(u[0]) || {}).fe_is_index_quiz)),
          (t += [o[1], i.F.entities((i.MC(u[1]) || {}).text), o[2]].join("")),
          i.MJ(i.MG((i.MC(u[1]) || {}).subText)) &&
            (t += [o[3], i.F.entities((i.MC(u[1]) || {}).subText), o[2]].join(
              ""
            )),
          (t += o[4]),
          i.MD(u[2]) ? (t += o[5]) : (t += o[6]),
          (t += o[7]),
          i.MN("fe_field_name", i.MG((i.MC(u[1]) || {}).name)),
          (t += o[8]),
          i.MN("fe_field_id", i.MG((i.MC(u[1]) || {}).id)),
          (t += o[9]),
          i.MJ(i.MC(u[1]).optional) &&
            i.MK(i.MC(u[1]).hidden) &&
            i.MK(i.MB(u[4])) &&
            (t += [
              o[10],
              i.F.entities(i.MC(u[3])),
              o[11],
              i.F.entities((i.MC(u[1]) || {}).defaultOptionValue),
              o[12],
            ].join("")),
          (t += o[9]);
        var n = (i.MC(u[1]) || {}).options || [];
        e.unshift({ fe_answer: null });
        for (var s, a = 1, r = n.length; a <= r; a++)
          (e[0].fe_answer = s = n[a - 1]),
            (t += o[13]),
            i.MD(u[4]) &&
              ((t += o[14]),
              i.MN("fe_field_name", i.MG((i.MC(u[1]) || {}).name)),
              (t += o[14]),
              i.MJ(
                i.in_array.apply(i.in_array, [].concat(s.value, i.MB(u[4])))
              ) && i.MN("fe_is_checked", 1),
              (t += o[13])),
            (t += o[15]),
            i.MJ(i.MB(u[2])) && (t += o[16]),
            (t += o[17]),
            i.MD(u[5]) && (t += o[18]),
            (t += [
              o[19],
              i.STATIC_HOSTNAME(s.imageUris, 0, 0, 0, 0),
              o[20],
            ].join("")),
            i.MD(u[2]) ||
              ((t += o[21]), i.MD(u[5]) && (t += o[22]), (t += o[23])),
            (t += o[24]),
            i.MD(u[2]) ||
              ((t += o[25]),
              i.MD(u[5]) ? (t += o[26]) : (t += o[27]),
              (t += [
                o[28],
                (e.unshift({
                  color: "#FFFFFF",
                  height: o[29],
                  name: o[30],
                  width: o[29],
                }),
                (_ = i.HELPER("icon", e[0])),
                e.shift(),
                _),
                o[31],
              ].join(""))),
            (t += o[24]),
            i.MD(u[5])
              ? (t += [
                  o[32],
                  i.F.entities((i.MC(u[1]) || {}).name),
                  o[11],
                  i.F.entities((s || {}).value),
                  o[33],
                ].join(""))
              : (t += [
                  o[34],
                  i.F.entities((i.MC(u[1]) || {}).name),
                  o[11],
                  i.F.entities((s || {}).value),
                  o[33],
                ].join("")),
            (t += [o[35], i.F.entities((s || {}).text), o[36]].join("")),
            i.MN("fe_is_checked", 0),
            (t += o[8]);
        return e.shift(), (t += o[37]), _r_(t);
      });
    })()
  ),
  booking.jstmpl(
    "tt_quiz_buttons",
    (function () {
      _i_("d27:3d7b65a1");
      var n,
        s = [
          '\n    \n    \n    <div class="',
          "bui-u-hidden",
          '"></div>\n    <button class="bui-button bui-button--secondary bui-button--large tt-quiz__prev-btn ',
          " bui-u-hidden ",
          ' " type="button">\n      ',
          '\n      <span class="bui-button__icon">\n        ',
          "",
          "streamline/arrow_left",
          "16",
          "\n      </span>\n      ",
          '\n      <span class="bui-button__text">',
          '</span>\n    </button>\n\n    <button class="bui-button bui-button--large tt-quiz__next-btn ',
          "bui-button--wide",
          '" type="button" ',
          " disabled ",
          " >\n      ",
          "streamline/arrow_right",
          "</span>\n    </button>\n\n",
        ],
        a = [
          "disablePrevButton",
          "fe_is_index_quiz",
          "previous_btn_copy",
          "b_is_mobile_site",
          "disableNextButton",
          "next_btn_copy",
        ];
      return _r_(function (e) {
        _i_("d27:d2bb1caa");
        var t = "",
          i = this.fn;
        return (
          (t += s[0]),
          i.MD(a[0]) || (t += s[1]),
          (t += s[2]),
          i.MD(a[0]) && (t += s[3]),
          (t += s[4]),
          i.MD(a[1]) ||
            (t += [
              s[5],
              (e.unshift({ class: s[6], name: s[7], width: s[8] }),
              (n = i.HELPER("icon", e[0])),
              e.shift(),
              n),
              s[9],
            ].join("")),
          (t += [s[10], i.F.entities(i.MC(a[2])), s[11]].join("")),
          i.MJ(i.MB(a[1])) &&
            i.MJ(i.MB(a[0])) &&
            i.MJ(i.MC(a[3])) &&
            (t += s[12]),
          (t += s[13]),
          i.MD(a[4]) && (t += s[14]),
          (t += s[15]),
          i.MD(a[1]) ||
            (t += [
              s[5],
              (e.unshift({ class: s[6], name: s[16], width: s[8] }),
              (n = i.HELPER("icon", e[0])),
              e.shift(),
              n),
              s[9],
            ].join("")),
          (t += [s[10], i.F.entities(i.MC(a[5])), s[17]].join("")),
          _r_(t)
        );
      });
    })()
  ),
  booking.jstmpl(
    "tt_quiz_indicators",
    (function () {
      _i_("d27:f671cbf7");
      var r = [
          "\n    ",
          '\n\n    <div class="quiz-page-indicator ',
          "tt-quiz--new",
          '">\n        <ol class="quiz-page-indicator__list">\n          ',
          '\n             <li class="quiz-page-indicator__item">\n                 <span class="',
          "quiz-page-indicator__circle ",
          "current ",
          "active",
          '"\n                 >\n                 </span>\n             </li>\n            ',
          '\n                <li class="quiz-page-indicator__divider  ',
          '"></li>\n            ',
          "\n         ",
          "\n        </ol>\n    </div>\n\n",
        ],
        _ = ["serverData", "fe_is_index_quiz", "total", "current"];
      return _r_(function (e) {
        _i_("d27:dcbdb6ac");
        var t = "",
          i = this.fn;
        (t += r[0]),
          i.MN("fe_is_index_quiz", i.MG((i.MC(_[0]) || {}).fe_is_index_quiz)),
          (t += r[1]),
          i.MJ(i.MB(_[1])) && (t += r[2]),
          (t += r[3]);
        var n = i.seq(1, i.MB(_[2])) || [];
        e.unshift(null);
        for (var s = 1, a = n.length; s <= a; s++)
          (e[0] = n[s - 1]),
            (t += r[4]),
            (t += r[5]),
            i.MJ(i.MB(_[3]) == i.MI(s) - i.MI(1)) && (t += r[6]),
            i.MJ(i.MB(_[3]) >= i.MI(s) - i.MI(1)) && (t += r[7]),
            (t += r[8]),
            i.MK(i.MJ(s == n.length) || i.MB(_[1])) &&
              ((t += r[9]), i.MJ(i.MB(_[3]) >= s) && (t += r[7]), (t += r[10])),
            (t += r[11]);
        return e.shift(), _r_((t += r[12]));
      });
    })()
  ),
  booking.jstmpl(
    "tt_quiz_tab",
    (function () {
      _i_("d27:353bb246");
      var n = [
          '\n    \n    <div class="bui-tab__content" role="tabpanel" data-bui-ref="tab-content" data-tab-id="',
          '">\n        ',
          "\n    </div>\n",
        ],
        s = ["id", "content"];
      return _r_(function (e) {
        _i_("d27:af99796a");
        var t = "",
          i = this.fn;
        return (
          (t += [n[0], i.F.entities(i.MC(s[0])), n[1], i.MC(s[1]), n[2]].join(
            ""
          )),
          _r_(t)
        );
      });
    })()
  );
