Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/component"), t = require("../common/color"), o = require("../common/utils");

e.VantComponent({
    props: {
        message: String,
        background: String,
        type: {
            type: String,
            value: "danger"
        },
        color: {
            type: String,
            value: t.WHITE
        },
        duration: {
            type: Number,
            value: 3e3
        },
        zIndex: {
            type: Number,
            value: 110
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: !1
        },
        top: null
    },
    data: {
        show: !1,
        onOpened: null,
        onClose: null,
        onClick: null
    },
    created: function() {
        var e = o.getSystemInfoSync().statusBarHeight;
        this.setData({
            statusBarHeight: e
        });
    },
    methods: {
        show: function() {
            var e = this, t = this.data, o = t.duration, n = t.onOpened;
            clearTimeout(this.timer), this.setData({
                show: !0
            }), wx.nextTick(n), o > 0 && o !== 1 / 0 && (this.timer = setTimeout(function() {
                e.hide();
            }, o));
        },
        hide: function() {
            var e = this.data.onClose;
            clearTimeout(this.timer), this.setData({
                show: !1
            }), wx.nextTick(e);
        },
        onTap: function(e) {
            var t = this.data.onClick;
            t && t(e.detail);
        }
    }
});