function t() {
    var t = getCurrentPages();
    return t[t.length - 1];
}

var e = function() {
    return (e = Object.assign || function(t) {
        for (var e, n = 1, o = arguments.length; n < o; n++) {
            e = arguments[n];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
        return t;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = [], o = {
    show: !1,
    title: "",
    width: null,
    theme: "default",
    message: "",
    zIndex: 100,
    overlay: !0,
    selector: "#van-dialog",
    className: "",
    asyncClose: !1,
    beforeClose: null,
    transition: "scale",
    customStyle: "",
    messageAlign: "",
    overlayStyle: "",
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    showConfirmButton: !0,
    showCancelButton: !1,
    closeOnClickOverlay: !1,
    confirmButtonOpenType: ""
}, r = e({}, o), c = function(o) {
    return o = e(e({}, r), o), new Promise(function(r, c) {
        var s = (o.context || t()).selectComponent(o.selector);
        delete o.context, delete o.selector, s ? (s.setData(e({
            callback: function(t, e) {
                "confirm" === t ? r(e) : c(e);
            }
        }, o)), wx.nextTick(function() {
            s.setData({
                show: !0
            });
        }), n.push(s)) : console.warn("未找到 van-dialog 节点，请确认 selector 及 context 是否正确");
    });
};

c.alert = function(t) {
    return c(t);
}, c.confirm = function(t) {
    return c(e({
        showCancelButton: !0
    }, t));
}, c.close = function() {
    n.forEach(function(t) {
        t.close();
    }), n = [];
}, c.stopLoading = function() {
    n.forEach(function(t) {
        t.stopLoading();
    });
}, c.currentOptions = r, c.defaultOptions = o, c.setDefaultOptions = function(t) {
    r = e(e({}, r), t), c.currentOptions = r;
}, c.resetDefaultOptions = function() {
    r = e({}, o), c.currentOptions = r;
}, c.resetDefaultOptions(), exports.default = c;