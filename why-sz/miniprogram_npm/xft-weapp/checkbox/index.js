function e(e, a) {
    e.$emit("input", a), e.$emit("change", a);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("../common/relation");

require("../common/component").VantComponent({
    field: !0,
    relation: a.useParent("checkbox-group"),
    classes: [ "icon-class", "label-class" ],
    props: {
        value: Boolean,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: {
            type: String,
            value: "right"
        },
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: "round"
        },
        iconSize: {
            type: null,
            value: 20
        }
    },
    data: {
        parentDisabled: !1,
        direction: "vertical"
    },
    methods: {
        emitChange: function(a) {
            this.parent ? this.setParentValue(this.parent, a) : e(this, a);
        },
        toggle: function() {
            var e = this.data, a = e.parentDisabled, t = e.disabled, i = e.value;
            t || a || this.emitChange(!i);
        },
        onClickLabel: function() {
            var e = this.data, a = e.labelDisabled, t = e.parentDisabled, i = e.disabled, n = e.value;
            i || a || t || this.emitChange(!n);
        },
        setParentValue: function(a, t) {
            var i = a.data.value.slice(), n = this.data.name, l = a.data.max;
            if (t) {
                if (l && i.length >= l) return;
                -1 === i.indexOf(n) && (i.push(n), e(a, i));
            } else {
                var o = i.indexOf(n);
                -1 !== o && (i.splice(o, 1), e(a, i));
            }
        }
    }
});