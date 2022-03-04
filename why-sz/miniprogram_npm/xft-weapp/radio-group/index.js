Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/component"), r = require("../common/relation");

e.VantComponent({
    field: !0,
    relation: r.useChildren("radio"),
    props: {
        value: {
            type: null,
            observer: "updateChildren"
        },
        direction: String,
        disabled: {
            type: Boolean,
            observer: "updateChildren"
        }
    },
    methods: {
        updateChildren: function() {
            this.children.forEach(function(e) {
                return e.updateFromParent();
            });
        }
    }
});