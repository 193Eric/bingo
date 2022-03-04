Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/utils"), e = require("../common/component"), o = require("../mixins/page-scroll");

e.VantComponent({
    props: {
        zIndex: {
            type: Number,
            value: 99
        },
        offsetTop: {
            type: Number,
            value: 0,
            observer: "onScroll"
        },
        disabled: {
            type: Boolean,
            observer: "onScroll"
        },
        container: {
            type: null,
            observer: "onScroll"
        },
        scrollTop: {
            type: null,
            observer: function(t) {
                this.onScroll({
                    scrollTop: t
                });
            }
        }
    },
    mixins: [ o.pageScrollMixin(function(t) {
        null == this.data.scrollTop && this.onScroll(t);
    }) ],
    data: {
        height: 0,
        fixed: !1,
        transform: 0
    },
    mounted: function() {
        this.onScroll();
    },
    methods: {
        onScroll: function(e) {
            var o = this, i = (void 0 === e ? {} : e).scrollTop, r = this.data, n = r.container, s = r.offsetTop;
            r.disabled ? this.setDataAfterDiff({
                fixed: !1,
                transform: 0
            }) : (this.scrollTop = i || this.scrollTop, "function" != typeof n ? t.getRect(this, ".van-sticky").then(function(t) {
                s >= t.top ? (o.setDataAfterDiff({
                    fixed: !0,
                    height: t.height
                }), o.transform = 0) : o.setDataAfterDiff({
                    fixed: !1
                });
            }) : Promise.all([ t.getRect(this, ".van-sticky"), this.getContainerRect() ]).then(function(t) {
                var e = t[0], i = t[1];
                s + e.height > i.height + i.top ? o.setDataAfterDiff({
                    fixed: !1,
                    transform: i.height - e.height
                }) : s >= e.top ? o.setDataAfterDiff({
                    fixed: !0,
                    height: e.height,
                    transform: 0
                }) : o.setDataAfterDiff({
                    fixed: !1,
                    transform: 0
                });
            }));
        },
        setDataAfterDiff: function(t) {
            var e = this;
            wx.nextTick(function() {
                var o = Object.keys(t).reduce(function(o, i) {
                    return t[i] !== e.data[i] && (o[i] = t[i]), o;
                }, {});
                Object.keys(o).length > 0 && e.setData(o), e.$emit("scroll", {
                    scrollTop: e.scrollTop,
                    isFixed: t.fixed || e.data.fixed
                });
            });
        },
        getContainerRect: function() {
            var t = this.data.container();
            return new Promise(function(e) {
                return t.boundingClientRect(e).exec();
            });
        }
    }
});