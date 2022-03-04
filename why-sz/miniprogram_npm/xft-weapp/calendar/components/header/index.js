var e = function(e, t) {
    for (var i = 0, n = t.length, a = e.length; i < n; i++, a++) e[a] = t[i];
    return e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), require("../../../common/component").VantComponent({
    props: {
        title: {
            type: String,
            value: "日期选择"
        },
        subtitle: String,
        showTitle: Boolean,
        showSubtitle: Boolean,
        firstDayOfWeek: {
            type: Number,
            observer: "initWeekDay"
        }
    },
    data: {
        weekdays: []
    },
    created: function() {
        this.initWeekDay();
    },
    methods: {
        initWeekDay: function() {
            var t = [ "日", "一", "二", "三", "四", "五", "六" ], i = this.data.firstDayOfWeek || 0;
            this.setData({
                weekdays: e(e([], t.slice(i, 7)), t.slice(0, i))
            });
        }
    }
});