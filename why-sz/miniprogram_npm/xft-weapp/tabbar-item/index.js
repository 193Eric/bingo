Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), e = require("../common/relation");

t.VantComponent({
    props: {
        info: null,
        name: null,
        icon: String,
        dot: Boolean,
        iconPrefix: {
            type: String,
            value: "van-icon"
        }
    },
    relation: e.useParent("tabbar"),
    data: {
        active: !1,
        activeColor: "",
        inactiveColor: ""
    },
    methods: {
        onClick: function() {
            var t = this.parent;
            if (t) {
                var e = t.children.indexOf(this), i = this.data.name || e;
                i !== this.data.active && t.$emit("change", i);
            }
            this.$emit("click");
        },
        updateFromParent: function() {
            var t = this.parent;
            if (t) {
                var e = t.children.indexOf(this), i = t.data, a = this.data, o = (a.name || e) === i.active, n = {};
                o !== a.active && (n.active = o), i.activeColor !== a.activeColor && (n.activeColor = i.activeColor), 
                i.inactiveColor !== a.inactiveColor && (n.inactiveColor = i.inactiveColor), Object.keys(n).length > 0 && this.setData(n);
            }
        }
    }
});