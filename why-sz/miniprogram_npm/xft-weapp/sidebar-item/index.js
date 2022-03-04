Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/component"), t = require("../common/relation");

e.VantComponent({
    classes: [ "active-class", "disabled-class" ],
    relation: t.useParent("sidebar"),
    props: {
        dot: Boolean,
        badge: null,
        info: null,
        title: String,
        disabled: Boolean
    },
    methods: {
        onClick: function() {
            var e = this, t = this.parent;
            if (t && !this.data.disabled) {
                var i = t.children.indexOf(this);
                t.setActive(i).then(function() {
                    e.$emit("click", i), t.$emit("change", i);
                });
            }
        },
        setActive: function(e) {
            return this.setData({
                selected: e
            });
        }
    }
});