function e() {
    return null == o && (o = wx.getSystemInfoSync()), o;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCurrentPage = exports.toPromise = exports.groupSetData = exports.getAllRect = exports.getRect = exports.pickExclude = exports.requestAnimationFrame = exports.addUnit = exports.getSystemInfoSync = exports.nextTick = exports.range = exports.isDef = void 0;

var t = require("./validator"), r = require("./version"), n = require("./validator");

Object.defineProperty(exports, "isDef", {
    enumerable: !0,
    get: function() {
        return n.isDef;
    }
}), exports.range = function(e, t, r) {
    return Math.min(Math.max(e, t), r);
}, exports.nextTick = function(e) {
    r.canIUseNextTick() ? wx.nextTick(e) : setTimeout(function() {
        e();
    }, 1e3 / 30);
};

var o;

exports.getSystemInfoSync = e, exports.addUnit = function(e) {
    if (t.isDef(e)) return e = String(e), t.isNumber(e) ? e + "px" : e;
}, exports.requestAnimationFrame = function(t) {
    return "devtools" === e().platform ? setTimeout(function() {
        t();
    }, 1e3 / 30) : wx.createSelectorQuery().selectViewport().boundingClientRect().exec(function() {
        t();
    });
}, exports.pickExclude = function(e, r) {
    return t.isPlainObject(e) ? Object.keys(e).reduce(function(t, n) {
        return r.includes(n) || (t[n] = e[n]), t;
    }, {}) : {};
}, exports.getRect = function(e, t) {
    return new Promise(function(r) {
        wx.createSelectorQuery().in(e).select(t).boundingClientRect().exec(function(e) {
            return void 0 === e && (e = []), r(e[0]);
        });
    });
}, exports.getAllRect = function(e, t) {
    return new Promise(function(r) {
        wx.createSelectorQuery().in(e).selectAll(t).boundingClientRect().exec(function(e) {
            return void 0 === e && (e = []), r(e[0]);
        });
    });
}, exports.groupSetData = function(e, t) {
    r.canIUseGroupSetData() ? e.groupSetData(t) : t();
}, exports.toPromise = function(e) {
    return t.isPromise(e) ? e : Promise.resolve(e);
}, exports.getCurrentPage = function() {
    var e = getCurrentPages();
    return e[e.length - 1];
};