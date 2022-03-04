function e(e) {
    return r.isObj(e) ? e : {
        message: e
    };
}

function t() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

function n(n) {
    var r = o(o({}, s), e(n)), a = (r.context || t()).selectComponent(r.selector);
    if (a) return delete r.context, delete r.selector, a.clear = function() {
        a.setData({
            show: !1
        }), r.onClose && r.onClose();
    }, i.push(a), a.setData(r), clearTimeout(a.timer), null != r.duration && r.duration > 0 && (a.timer = setTimeout(function() {
        a.clear(), i = i.filter(function(e) {
            return e !== a;
        });
    }, r.duration)), a;
    console.warn("未找到 van-toast 节点，请确认 selector 及 context 是否正确");
}

var o = function() {
    return (o = Object.assign || function(e) {
        for (var t, n = 1, o = arguments.length; n < o; n++) {
            t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }
        return e;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = require("../common/validator"), a = {
    type: "text",
    mask: !1,
    message: "",
    show: !0,
    zIndex: 1e3,
    duration: 2e3,
    position: "middle",
    forbidClick: !1,
    loadingType: "circular",
    selector: "#van-toast"
}, i = [], s = o({}, a), c = function(t) {
    return function(r) {
        return n(o({
            type: t
        }, e(r)));
    };
};

n.loading = c("loading"), n.success = c("success"), n.fail = c("fail"), n.clear = function() {
    i.forEach(function(e) {
        e.clear();
    }), i = [];
}, n.setDefaultOptions = function(e) {
    Object.assign(s, e);
}, n.resetDefaultOptions = function() {
    s = o({}, a);
}, exports.default = n;