Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/component"), t = require("../common/relation"), r = require("../common/utils");

e.VantComponent({
    relation: t.useChildren("tabbar-item", function() {
        this.updateChildren();
    }),
    props: {
        active: {
            type: null,
            observer: "updateChildren"
        },
        activeColor: {
            type: String,
            observer: "updateChildren"
        },
        inactiveColor: {
            type: String,
            observer: "updateChildren"
        },
        fixed: {
            type: Boolean,
            value: !0,
            observer: "setHeight"
        },
        placeholder: {
            type: Boolean,
            observer: "setHeight"
        },
        border: {
            type: Boolean,
            value: !0
        },
        zIndex: {
            type: Number,
            value: 1
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        height: 50
    },
    methods: {
        updateChildren: function() {
            var e = this.children;
            Array.isArray(e) && e.length && e.forEach(function(e) {
                return e.updateFromParent();
            });
        },
        setHeight: function() {
            var e = this;
            this.data.fixed && this.data.placeholder && wx.nextTick(function() {
                r.getRect(e, ".van-tabbar").then(function(t) {
                    e.setData({
                        height: t.height
                    });
                });
            });
        }
    }
});