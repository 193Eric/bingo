Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/relation");

require("../common/component").VantComponent({
    field: !0,
    relation: e.useChildren("checkbox", function(e) {
        this.updateChild(e);
    }),
    props: {
        max: Number,
        value: {
            type: Array,
            observer: "updateChildren"
        },
        disabled: {
            type: Boolean,
            observer: "updateChildren"
        },
        direction: {
            type: String,
            value: "vertical"
        }
    },
    methods: {
        updateChildren: function() {
            var e = this;
            this.children.forEach(function(t) {
                return e.updateChild(t);
            });
        },
        updateChild: function(e) {
            var t = this.data, i = t.value, r = t.disabled, a = t.direction;
            e.setData({
                value: -1 !== i.indexOf(e.data.name),
                parentDisabled: r,
                direction: a
            });
        }
    }
});