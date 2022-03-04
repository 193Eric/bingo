Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/component"), t = require("../common/relation");

e.VantComponent({
    relation: t.useChildren("sidebar-item", function() {
        this.setActive(this.data.activeKey);
    }),
    props: {
        activeKey: {
            type: Number,
            value: 0,
            observer: "setActive"
        }
    },
    beforeCreate: function() {
        this.currentActive = -1;
    },
    methods: {
        setActive: function(e) {
            var t = this, r = t.children, i = t.currentActive;
            if (!r.length) return Promise.resolve();
            this.currentActive = e;
            var n = [];
            return i !== e && r[i] && n.push(r[i].setActive(!1)), r[e] && n.push(r[e].setActive(!0)), 
            Promise.all(n);
        }
    }
});