Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../../common/component"), t = require("../../utils");

e.VantComponent({
    props: {
        date: {
            type: null,
            observer: "setDays"
        },
        type: {
            type: String,
            observer: "setDays"
        },
        color: String,
        minDate: {
            type: null,
            observer: "setDays"
        },
        maxDate: {
            type: null,
            observer: "setDays"
        },
        showMark: Boolean,
        rowHeight: null,
        formatter: {
            type: null,
            observer: "setDays"
        },
        currentDate: {
            type: null,
            observer: "setDays"
        },
        firstDayOfWeek: {
            type: Number,
            observer: "setDays"
        },
        allowSameDay: Boolean,
        showSubtitle: Boolean,
        showMonthTitle: Boolean
    },
    data: {
        visible: !0,
        days: []
    },
    methods: {
        onClick: function(e) {
            var t = e.currentTarget.dataset.index, a = this.data.days[t];
            "disabled" !== a.type && this.$emit("click", a);
        },
        setDays: function() {
            for (var e = [], a = new Date(this.data.date), r = a.getFullYear(), n = a.getMonth(), s = t.getMonthEndDay(a.getFullYear(), a.getMonth() + 1), o = 1; o <= s; o++) {
                var i = new Date(r, n, o), y = this.getDayType(i), l = {
                    date: i,
                    type: y,
                    text: o,
                    bottomInfo: this.getBottomInfo(y)
                };
                this.data.formatter && (l = this.data.formatter(l)), e.push(l);
            }
            this.setData({
                days: e
            });
        },
        getMultipleDayType: function(e) {
            var a = this.data.currentDate;
            if (!Array.isArray(a)) return "";
            var r = function(e) {
                return a.some(function(a) {
                    return 0 === t.compareDay(a, e);
                });
            };
            if (r(e)) {
                var n = t.getPrevDay(e), s = t.getNextDay(e), o = r(n), i = r(s);
                return o && i ? "multiple-middle" : o ? "end" : i ? "start" : "multiple-selected";
            }
            return "";
        },
        getRangeDayType: function(e) {
            var a = this.data, r = a.currentDate, n = a.allowSameDay;
            if (!Array.isArray(r)) return "";
            var s = r[0], o = r[1];
            if (!s) return "";
            var i = t.compareDay(e, s);
            if (!o) return 0 === i ? "start" : "";
            var y = t.compareDay(e, o);
            return 0 === i && 0 === y && n ? "start-end" : 0 === i ? "start" : 0 === y ? "end" : i > 0 && y < 0 ? "middle" : "";
        },
        getDayType: function(e) {
            var a = this.data, r = a.type, n = a.minDate, s = a.maxDate, o = a.currentDate;
            return t.compareDay(e, n) < 0 || t.compareDay(e, s) > 0 ? "disabled" : "single" === r ? 0 === t.compareDay(e, o) ? "selected" : "" : "multiple" === r ? this.getMultipleDayType(e) : "range" === r ? this.getRangeDayType(e) : "";
        },
        getBottomInfo: function(e) {
            if ("range" === this.data.type) {
                if ("start" === e) return "开始";
                if ("end" === e) return "结束";
                if ("start-end" === e) return "开始/结束";
            }
        }
    }
});