Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/version"), a = require("../common/component"), t = require("../common/relation");

a.VantComponent({
    field: !0,
    relation: t.useParent("radio-group", function() {
        this.updateFromParent();
    }),
    classes: [ "icon-class", "label-class" ],
    props: {
        name: null,
        value: null,
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
        direction: "",
        parentDisabled: !1
    },
    methods: {
        updateFromParent: function() {
            if (this.parent) {
                var e = this.parent.data, a = e.value, t = e.disabled, n = e.direction;
                this.setData({
                    value: a,
                    direction: n,
                    parentDisabled: t
                });
            }
        },
        emitChange: function(a) {
            var t = this.parent || this;
            t.$emit("input", a), t.$emit("change", a), e.canIUseModel() && t.setData({
                value: a
            });
        },
        onChange: function() {
            this.data.disabled || this.data.parentDisabled || this.emitChange(this.data.name);
        },
        onClickLabel: function() {
            var e = this.data, a = e.disabled, t = e.parentDisabled, n = e.labelDisabled, i = e.name;
            a || t || n || this.emitChange(i);
        }
    }
});