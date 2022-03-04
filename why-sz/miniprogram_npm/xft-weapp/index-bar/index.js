Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/color"), e = require("../common/component"), n = require("../common/relation"), i = require("../common/utils"), o = require("../mixins/page-scroll");

e.VantComponent({
    relation: n.useChildren("index-anchor", function() {
        this.updateData();
    }),
    props: {
        sticky: {
            type: Boolean,
            value: !0
        },
        zIndex: {
            type: Number,
            value: 1
        },
        highlightColor: {
            type: String,
            value: t.GREEN
        },
        stickyOffsetTop: {
            type: Number,
            value: 0
        },
        indexList: {
            type: Array,
            value: function() {
                for (var t = [], e = "A".charCodeAt(0), n = 0; n < 26; n++) t.push(String.fromCharCode(e + n));
                return t;
            }()
        }
    },
    mixins: [ o.pageScrollMixin(function(t) {
        this.scrollTop = (null === t || void 0 === t ? void 0 : t.scrollTop) || 0, this.onScroll();
    }) ],
    data: {
        activeAnchorIndex: null,
        showSidebar: !1
    },
    created: function() {
        this.scrollTop = 0;
    },
    methods: {
        updateData: function() {
            var t = this;
            wx.nextTick(function() {
                null != t.timer && clearTimeout(t.timer), t.timer = setTimeout(function() {
                    t.setData({
                        showSidebar: !!t.children.length
                    }), t.setRect().then(function() {
                        t.onScroll();
                    });
                }, 0);
            });
        },
        setRect: function() {
            return Promise.all([ this.setAnchorsRect(), this.setListRect(), this.setSiderbarRect() ]);
        },
        setAnchorsRect: function() {
            var t = this;
            return Promise.all(this.children.map(function(e) {
                return i.getRect(e, ".van-index-anchor-wrapper").then(function(n) {
                    Object.assign(e, {
                        height: n.height,
                        top: n.top + t.scrollTop
                    });
                });
            }));
        },
        setListRect: function() {
            var t = this;
            return i.getRect(this, ".van-index-bar").then(function(e) {
                Object.assign(t, {
                    height: e.height,
                    top: e.top + t.scrollTop
                });
            });
        },
        setSiderbarRect: function() {
            var t = this;
            return i.getRect(this, ".van-index-bar__sidebar").then(function(e) {
                i.isDef(e) && (t.sidebar = {
                    height: e.height,
                    top: e.top
                });
            });
        },
        setDiffData: function(t) {
            var e = t.target, n = t.data, i = {};
            Object.keys(n).forEach(function(t) {
                e.data[t] !== n[t] && (i[t] = n[t]);
            }), Object.keys(i).length && e.setData(i);
        },
        getAnchorRect: function(t) {
            return i.getRect(t, ".van-index-anchor-wrapper").then(function(t) {
                return {
                    height: t.height,
                    top: t.top
                };
            });
        },
        getActiveAnchorIndex: function() {
            for (var t = this, e = t.children, n = t.scrollTop, i = this.data, o = i.sticky, r = i.stickyOffsetTop, a = this.children.length - 1; a >= 0; a--) {
                var c = a > 0 ? e[a - 1].height : 0;
                if ((o ? c + r : 0) + n >= e[a].top) return a;
            }
            return -1;
        },
        onScroll: function() {
            var t = this, e = this, n = e.children, i = void 0 === n ? [] : n, o = e.scrollTop;
            if (i.length) {
                var r = this.data, a = r.sticky, c = r.stickyOffsetTop, h = r.zIndex, s = r.highlightColor, l = this.getActiveAnchorIndex();
                if (this.setDiffData({
                    target: this,
                    data: {
                        activeAnchorIndex: l
                    }
                }), a) {
                    var u = !1;
                    -1 !== l && (u = i[l].top <= c + o), i.forEach(function(e, n) {
                        if (n === l) {
                            var o = "", r = "\n              color: " + s + ";\n            ";
                            u && (o = "\n                height: " + i[n].height + "px;\n              ", r = "\n                position: fixed;\n                top: " + c + "px;\n                z-index: " + h + ";\n                color: " + s + ";\n              "), 
                            t.setDiffData({
                                target: e,
                                data: {
                                    active: !0,
                                    anchorStyle: r,
                                    wrapperStyle: o
                                }
                            });
                        } else if (n === l - 1) {
                            var a = i[n], d = a.top, r = "\n              position: relative;\n              transform: translate3d(0, " + ((n === i.length - 1 ? t.top : i[n + 1].top) - d - a.height) + "px, 0);\n              z-index: " + h + ";\n              color: " + s + ";\n            ";
                            t.setDiffData({
                                target: e,
                                data: {
                                    active: !0,
                                    anchorStyle: r
                                }
                            });
                        } else t.setDiffData({
                            target: e,
                            data: {
                                active: !1,
                                anchorStyle: "",
                                wrapperStyle: ""
                            }
                        });
                    });
                }
            }
        },
        onClick: function(t) {
            this.scrollToAnchor(t.target.dataset.index);
        },
        onTouchMove: function(t) {
            var e = this.children.length, n = t.touches[0], i = this.sidebar.height / e, o = Math.floor((n.clientY - this.sidebar.top) / i);
            o < 0 ? o = 0 : o > e - 1 && (o = e - 1), this.scrollToAnchor(o);
        },
        onTouchStop: function() {
            this.scrollToAnchorIndex = null;
        },
        scrollToAnchor: function(t) {
            var e = this;
            if ("number" == typeof t && this.scrollToAnchorIndex !== t) {
                this.scrollToAnchorIndex = t;
                var n = this.children.find(function(n) {
                    return n.data.index === e.data.indexList[t];
                });
                n && (n.scrollIntoView(this.scrollTop), this.$emit("select", n.data.index));
            }
        }
    }
});