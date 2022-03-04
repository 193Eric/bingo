var e = function() {
    return (e = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
        return e;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/utils"), n = require("../common/component"), r = require("../common/version");

n.VantComponent({
    field: !0,
    classes: [ "icon-class" ],
    props: {
        value: {
            type: Number,
            observer: function(e) {
                e !== this.data.innerValue && this.setData({
                    innerValue: e
                });
            }
        },
        readonly: Boolean,
        disabled: Boolean,
        allowHalf: Boolean,
        size: null,
        icon: {
            type: String,
            value: "star"
        },
        voidIcon: {
            type: String,
            value: "star-o"
        },
        color: String,
        voidColor: String,
        disabledColor: String,
        count: {
            type: Number,
            value: 5,
            observer: function(e) {
                this.setData({
                    innerCountArray: Array.from({
                        length: e
                    })
                });
            }
        },
        gutter: null,
        touchable: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        innerValue: 0,
        innerCountArray: Array.from({
            length: 5
        })
    },
    methods: {
        onSelect: function(e) {
            var t = this, n = this.data, o = e.currentTarget.dataset.score;
            n.disabled || n.readonly || (this.setData({
                innerValue: o + 1
            }), r.canIUseModel() && this.setData({
                value: o + 1
            }), wx.nextTick(function() {
                t.$emit("input", o + 1), t.$emit("change", o + 1);
            }));
        },
        onTouchMove: function(n) {
            var r = this;
            if (this.data.touchable) {
                var o = n.touches[0].clientX;
                t.getAllRect(this, ".van-rate__icon").then(function(t) {
                    var a = t.sort(function(e, t) {
                        return e.dataset.score - t.dataset.score;
                    }).find(function(e) {
                        return o >= e.left && o <= e.right;
                    });
                    null != a && r.onSelect(e(e({}, n), {
                        currentTarget: a
                    }));
                });
            }
        }
    }
});