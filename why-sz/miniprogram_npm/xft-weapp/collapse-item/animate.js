function e(e, t, n, i) {
    var o = ".van-collapse-item__wrapper";
    t ? e.animate(o, [ {
        height: 0,
        ease: "ease-in-out",
        offset: 0
    }, {
        height: i + "px",
        ease: "ease-in-out",
        offset: 1
    }, {
        height: "auto",
        ease: "ease-in-out",
        offset: 1
    } ], n ? 300 : 0, function() {
        e.clearAnimation(o);
    }) : e.animate(o, [ {
        height: i + "px",
        ease: "ease-in-out",
        offset: 0
    }, {
        height: 0,
        ease: "ease-in-out",
        offset: 1
    } ], 300, function() {
        e.clearAnimation(o);
    });
}

function t(e, t, n, i) {
    var o = wx.createAnimation({
        duration: 0,
        timingFunction: "ease-in-out"
    });
    if (t) return 0 === i ? o.height("auto").top(1).step() : o.height(i).top(1).step({
        duration: n ? 300 : 1
    }).height("auto").step(), void e.setData({
        animation: o.export()
    });
    o.height(i).top(0).step({
        duration: 1
    }).height(0).step({
        duration: 300
    }), e.setData({
        animation: o.export()
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setContentAnimate = void 0;

var n = require("../common/version"), i = require("../common/utils");

exports.setContentAnimate = function(o, a, s) {
    i.getRect(o, ".van-collapse-item__content").then(function(e) {
        return e.height;
    }).then(function(i) {
        n.canIUseAnimate() ? e(o, a, s, i) : t(o, a, s, i);
    });
};