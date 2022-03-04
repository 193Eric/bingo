Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), e = require("../common/relation"), i = require("../common/utils"), n = [];

t.VantComponent({
    field: !0,
    relation: e.useChildren("dropdown-item", function() {
        this.updateItemListData();
    }),
    props: {
        activeColor: {
            type: String,
            observer: "updateChildrenData"
        },
        overlay: {
            type: Boolean,
            value: !0,
            observer: "updateChildrenData"
        },
        zIndex: {
            type: Number,
            value: 10
        },
        duration: {
            type: Number,
            value: 200,
            observer: "updateChildrenData"
        },
        direction: {
            type: String,
            value: "down",
            observer: "updateChildrenData"
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: !0,
            observer: "updateChildrenData"
        },
        closeOnClickOutside: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        itemListData: []
    },
    beforeCreate: function() {
        var t = i.getSystemInfoSync().windowHeight;
        this.windowHeight = t, n.push(this);
    },
    destroyed: function() {
        var t = this;
        n = n.filter(function(e) {
            return e !== t;
        });
    },
    methods: {
        updateItemListData: function() {
            this.setData({
                itemListData: this.children.map(function(t) {
                    return t.data;
                })
            });
        },
        updateChildrenData: function() {
            this.children.forEach(function(t) {
                t.updateDataFromParent();
            });
        },
        toggleItem: function(t) {
            this.children.forEach(function(e, i) {
                var n = e.data.showPopup;
                i === t ? e.toggle() : n && e.toggle(!1, {
                    immediate: !0
                });
            });
        },
        close: function() {
            this.children.forEach(function(t) {
                t.toggle(!1, {
                    immediate: !0
                });
            });
        },
        getChildWrapperStyle: function() {
            var t = this, e = this.data, n = e.zIndex, o = e.direction;
            return i.getRect(this, ".van-dropdown-menu").then(function(e) {
                var a = e.top, r = void 0 === a ? 0 : a, d = e.bottom, u = void 0 === d ? 0 : d, l = "down" === o ? u : t.windowHeight - r, s = "z-index: " + n + ";";
                return s += "down" === o ? "top: " + i.addUnit(l) + ";" : "bottom: " + i.addUnit(l) + ";";
            });
        },
        onTitleTap: function(t) {
            var e = this, i = t.currentTarget.dataset.index;
            this.children[i].data.disabled || (n.forEach(function(t) {
                t && t.data.closeOnClickOutside && t !== e && t.close();
            }), this.toggleItem(i));
        }
    }
});