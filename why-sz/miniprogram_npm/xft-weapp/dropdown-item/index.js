Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/relation");

require("../common/component").VantComponent({
    field: !0,
    relation: e.useParent("dropdown-menu", function() {
        this.updateDataFromParent();
    }),
    props: {
        value: {
            type: null,
            observer: "rerender"
        },
        title: {
            type: String,
            observer: "rerender"
        },
        disabled: Boolean,
        titleClass: {
            type: String,
            observer: "rerender"
        },
        options: {
            type: Array,
            value: [],
            observer: "rerender"
        },
        popupStyle: String
    },
    data: {
        transition: !0,
        showPopup: !1,
        showWrapper: !1,
        displayTitle: ""
    },
    methods: {
        rerender: function() {
            var e = this;
            wx.nextTick(function() {
                var t;
                null === (t = e.parent) || void 0 === t || t.updateItemListData();
            });
        },
        updateDataFromParent: function() {
            if (this.parent) {
                var e = this.parent.data, t = e.overlay, r = e.duration, o = e.activeColor, n = e.closeOnClickOverlay, i = e.direction;
                this.setData({
                    overlay: t,
                    duration: r,
                    activeColor: o,
                    closeOnClickOverlay: n,
                    direction: i
                });
            }
        },
        onOpen: function() {
            this.$emit("open");
        },
        onOpened: function() {
            this.$emit("opened");
        },
        onClose: function() {
            this.$emit("close");
        },
        onClosed: function() {
            this.$emit("closed"), this.setData({
                showWrapper: !1
            });
        },
        onOptionTap: function(e) {
            var t = e.currentTarget.dataset.option.value, r = this.data.value !== t;
            this.setData({
                showPopup: !1,
                value: t
            }), this.$emit("close"), this.rerender(), r && this.$emit("change", t);
        },
        toggle: function(e, t) {
            var r, o = this;
            void 0 === t && (t = {});
            var n = this.data.showPopup;
            "boolean" != typeof e && (e = !n), e !== n && (this.setData({
                transition: !t.immediate,
                showPopup: e
            }), e ? null === (r = this.parent) || void 0 === r || r.getChildWrapperStyle().then(function(e) {
                o.setData({
                    wrapperStyle: e,
                    showWrapper: !0
                }), o.rerender();
            }) : this.rerender());
        }
    }
});