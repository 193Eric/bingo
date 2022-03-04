Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/utils"), o = require("../common/component"), t = require("../common/relation");

o.VantComponent({
    relation: t.useParent("index-bar"),
    props: {
        useSlot: Boolean,
        index: null
    },
    data: {
        active: !1,
        wrapperStyle: "",
        anchorStyle: ""
    },
    methods: {
        scrollIntoView: function(o) {
            var t = this;
            e.getRect(this, ".van-index-anchor-wrapper").then(function(e) {
                wx.pageScrollTo({
                    duration: 0,
                    scrollTop: o + e.top - t.parent.data.stickyOffsetTop
                });
            });
        }
    }
});