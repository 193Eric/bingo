var e = function() {
    return (e = Object.assign || function(e) {
        for (var t, i = 1, n = arguments.length; i < n; i++) {
            t = arguments[i];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
        return e;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/utils"), i = require("../common/component"), n = require("./props");

i.VantComponent({
    field: !0,
    classes: [ "input-class", "right-icon-class", "label-class" ],
    props: e(e(e(e({}, n.commonProps), n.inputProps), n.textareaProps), {
        size: String,
        icon: String,
        label: String,
        error: Boolean,
        center: Boolean,
        isLink: Boolean,
        leftIcon: String,
        rightIcon: String,
        autosize: null,
        required: Boolean,
        iconClass: String,
        clickable: Boolean,
        inputAlign: String,
        customStyle: String,
        errorMessage: String,
        arrowDirection: String,
        showWordLimit: Boolean,
        errorMessageAlign: String,
        readonly: {
            type: Boolean,
            observer: "setShowClear"
        },
        clearable: {
            type: Boolean,
            observer: "setShowClear"
        },
        border: {
            type: Boolean,
            value: !0
        },
        titleWidth: {
            type: String,
            value: "6.2em"
        }
    }),
    data: {
        focused: !1,
        innerValue: "",
        showClear: !1
    },
    created: function() {
        this.value = this.data.value, this.setData({
            innerValue: this.value
        });
    },
    methods: {
        onInput: function(e) {
            var t = (e.detail || {}).value, i = void 0 === t ? "" : t;
            this.value = i, this.setShowClear(), this.emitChange();
        },
        onFocus: function(e) {
            this.focused = !0, this.setShowClear(), this.$emit("focus", e.detail);
        },
        onBlur: function(e) {
            this.focused = !1, this.setShowClear(), this.$emit("blur", e.detail);
        },
        onClickIcon: function() {
            this.$emit("click-icon");
        },
        onClickInput: function(e) {
            this.$emit("click-input", e.detail);
        },
        onClear: function() {
            var e = this;
            this.setData({
                innerValue: ""
            }), this.value = "", this.setShowClear(), t.nextTick(function() {
                e.emitChange(), e.$emit("clear", "");
            });
        },
        onConfirm: function(e) {
            var t = (e.detail || {}).value, i = void 0 === t ? "" : t;
            this.value = i, this.setShowClear(), this.$emit("confirm", i);
        },
        setValue: function(e) {
            this.value = e, this.setShowClear(), "" === e && this.setData({
                innerValue: ""
            }), this.emitChange();
        },
        onLineChange: function(e) {
            this.$emit("linechange", e.detail);
        },
        onKeyboardHeightChange: function(e) {
            this.$emit("keyboardheightchange", e.detail);
        },
        emitChange: function() {
            var e = this;
            this.setData({
                value: this.value
            }), t.nextTick(function() {
                e.$emit("input", e.value), e.$emit("change", e.value);
            });
        },
        setShowClear: function() {
            var e = this.data, t = e.clearable, i = e.readonly, n = this, o = n.focused, a = n.value;
            this.setData({
                showClear: !(!t || !o || !a || i)
            });
        },
        noop: function() {}
    }
});