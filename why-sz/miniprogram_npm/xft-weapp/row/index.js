Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), e = require("../common/relation");

t.VantComponent({
    relation: e.useChildren("col", function(t) {
        var e = this.data.gutter;
        e && t.setData({
            gutter: e
        });
    }),
    props: {
        gutter: {
            type: Number,
            observer: "setGutter"
        }
    },
    methods: {
        setGutter: function() {
            var t = this;
            this.children.forEach(function(e) {
                e.setData(t.data);
            });
        }
    }
});