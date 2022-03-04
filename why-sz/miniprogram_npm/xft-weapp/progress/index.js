Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), e = require("../common/color"), o = require("../common/utils");

t.VantComponent({
    props: {
        inactive: Boolean,
        percentage: {
            type: Number,
            observer: "setLeft"
        },
        pivotText: String,
        pivotColor: String,
        trackColor: String,
        showPivot: {
            type: Boolean,
            value: !0
        },
        color: {
            type: String,
            value: e.BLUE
        },
        textColor: {
            type: String,
            value: "#fff"
        },
        strokeWidth: {
            type: null,
            value: 4
        }
    },
    data: {
        right: 0
    },
    mounted: function() {
        this.setLeft();
    },
    methods: {
        setLeft: function() {
            var t = this;
            Promise.all([ o.getRect(this, ".van-progress"), o.getRect(this, ".van-progress__pivot") ]).then(function(e) {
                var o = e[0], r = e[1];
                o && r && t.setData({
                    right: r.width * (t.data.percentage - 100) / 100
                });
            });
        }
    }
});