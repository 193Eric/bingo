var t = function(t, e) {
    for (var a = 0, n = e.length, i = t.length; a < n; a++, i++) t[i] = e[a];
    return t;
}, e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("../common/component"), n = require("./utils"), i = e(require("../toast/toast")), o = require("../common/utils"), r = n.getToday().getTime(), s = function() {
    var t = n.getToday();
    return new Date(t.getFullYear(), t.getMonth() + 6, t.getDate()).getTime();
}();

a.VantComponent({
    props: {
        title: {
            type: String,
            value: "日期选择"
        },
        color: String,
        show: {
            type: Boolean,
            observer: function(t) {
                t && (this.initRect(), this.scrollIntoView());
            }
        },
        formatter: null,
        confirmText: {
            type: String,
            value: "确定"
        },
        rangePrompt: String,
        showRangePrompt: {
            type: Boolean,
            value: !0
        },
        defaultDate: {
            type: null,
            observer: function(t) {
                this.setData({
                    currentDate: t
                }), this.scrollIntoView();
            }
        },
        allowSameDay: Boolean,
        confirmDisabledText: String,
        type: {
            type: String,
            value: "single",
            observer: "reset"
        },
        minDate: {
            type: null,
            value: r
        },
        maxDate: {
            type: null,
            value: s
        },
        position: {
            type: String,
            value: "bottom"
        },
        rowHeight: {
            type: null,
            value: n.ROW_HEIGHT
        },
        round: {
            type: Boolean,
            value: !0
        },
        poppable: {
            type: Boolean,
            value: !0
        },
        showMark: {
            type: Boolean,
            value: !0
        },
        showTitle: {
            type: Boolean,
            value: !0
        },
        showConfirm: {
            type: Boolean,
            value: !0
        },
        showSubtitle: {
            type: Boolean,
            value: !0
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: !0
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: !0
        },
        maxRange: {
            type: null,
            value: null
        },
        firstDayOfWeek: {
            type: Number,
            value: 0
        }
    },
    data: {
        subtitle: "",
        currentDate: null,
        scrollIntoView: ""
    },
    created: function() {
        this.setData({
            currentDate: this.getInitialDate()
        });
    },
    mounted: function() {
        !this.data.show && this.data.poppable || (this.initRect(), this.scrollIntoView());
    },
    methods: {
        reset: function() {
            this.setData({
                currentDate: this.getInitialDate()
            }), this.scrollIntoView();
        },
        initRect: function() {
            var t = this;
            null != this.contentObserver && this.contentObserver.disconnect();
            var e = this.createIntersectionObserver({
                thresholds: [ 0, .1, .9, 1 ],
                observeAll: !0
            });
            this.contentObserver = e, e.relativeTo(".van-calendar__body"), e.observe(".month", function(e) {
                e.boundingClientRect.top <= e.relativeRect.top && t.setData({
                    subtitle: n.formatMonthTitle(e.dataset.date)
                });
            });
        },
        limitDateRange: function(t, e, a) {
            return void 0 === e && (e = null), void 0 === a && (a = null), e = e || this.data.minDate, 
            a = a || this.data.maxDate, -1 === n.compareDay(t, e) ? e : 1 === n.compareDay(t, a) ? a : t;
        },
        getInitialDate: function(t) {
            var e = this;
            void 0 === t && (t = null);
            var a = this.data, i = a.type, o = a.minDate, r = a.maxDate, s = n.getToday().getTime();
            if ("range" === i) {
                Array.isArray(t) || (t = []);
                var l = t || [], u = l[0], c = l[1];
                return [ this.limitDateRange(u || s, o, n.getPrevDay(r).getTime()), this.limitDateRange(c || s, n.getNextDay(o).getTime()) ];
            }
            return "multiple" === i ? Array.isArray(t) ? t.map(function(t) {
                return e.limitDateRange(t);
            }) : [ this.limitDateRange(s) ] : (t && !Array.isArray(t) || (t = s), this.limitDateRange(t));
        },
        scrollIntoView: function() {
            var t = this;
            o.requestAnimationFrame(function() {
                var e = t.data, a = e.currentDate, i = e.type, o = e.show, r = e.poppable, s = e.minDate, l = e.maxDate, u = "single" === i ? a : a[0], c = o || !r;
                u && c && n.getMonths(s, l).some(function(e, a) {
                    return 0 === n.compareMonth(e, u) && (t.setData({
                        scrollIntoView: "month" + a
                    }), !0);
                });
            });
        },
        onOpen: function() {
            this.$emit("open");
        },
        onOpened: function() {
            this.$emit("opened");
        },
        onClose: function() {
            this.$emit("close");
        },
        onClosed: function() {
            this.$emit("closed");
        },
        onClickDay: function(e) {
            var a = e.detail.date, i = this.data, o = i.type, r = i.currentDate, s = i.allowSameDay;
            if ("range" === o) {
                var l = r[0], u = r[1];
                if (l && !u) {
                    var c = n.compareDay(a, l);
                    1 === c ? this.select([ l, a ], !0) : -1 === c ? this.select([ a, null ]) : s && this.select([ a, a ]);
                } else this.select([ a, null ]);
            } else if ("multiple" === o) {
                var h;
                if (r.some(function(t, e) {
                    var i = 0 === n.compareDay(t, a);
                    return i && (h = e), i;
                })) {
                    var m = r.splice(h, 1);
                    this.setData({
                        currentDate: r
                    }), this.unselect(m);
                } else this.select(t(t([], r), [ a ]));
            } else this.select(a, !0);
        },
        unselect: function(t) {
            var e = t[0];
            e && this.$emit("unselect", n.copyDates(e));
        },
        select: function(t, e) {
            !e || "range" !== this.data.type || this.checkRange(t) ? (this.emit(t), e && !this.data.showConfirm && this.onConfirm()) : this.data.showConfirm ? this.emit([ t[0], n.getDayByOffset(t[0], this.data.maxRange - 1) ]) : this.emit(t);
        },
        emit: function(t) {
            var e = function(t) {
                return t instanceof Date ? t.getTime() : t;
            };
            this.setData({
                currentDate: Array.isArray(t) ? t.map(e) : e(t)
            }), this.$emit("select", n.copyDates(t));
        },
        checkRange: function(t) {
            var e = this.data, a = e.maxRange, o = e.rangePrompt, r = e.showRangePrompt;
            return !(a && n.calcDateNum(t) > a) || (r && i.default({
                duration: 0,
                context: this,
                message: o || "选择天数不能超过 " + a + " 天"
            }), this.$emit("over-range"), !1);
        },
        onConfirm: function() {
            var t = this;
            ("range" !== this.data.type || this.checkRange(this.data.currentDate)) && wx.nextTick(function() {
                t.$emit("confirm", n.copyDates(t.data.currentDate));
            });
        }
    }
});