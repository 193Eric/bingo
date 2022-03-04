function e(e) {
    var t = {};
    console.log(e);
    for (var n = e.split("?")[1].split("&"), o = 0; o < n.length; o++) {
        var i = n[o].indexOf("=");
        if (-1 != i) {
            var a = n[o].substring(0, i), r = n[o].substring(i + 1);
            r = decodeURIComponent(r), t[a] = r;
        }
    }
    return t;
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
}, n = require("../../utils/api"), o = require("../../utils/util");

Page({
    data: {
        orderDetail: {},
        queue_code: "",
        marginTop: "50rpx",
        positionTop: "",
        id: ""
    },
    onLoad: function(t) {
        var i = this, a = decodeURIComponent(t.q), r = wx.getSystemInfoSync(), s = 750 / r.windowWidth, d = r.statusBarHeight * s + 5;
        "android" === r.platform && (d += 10);
        var c = t.id, u = t.queue_code, l = t.from;
        "undefined" != a && (c = e(a).id, l = e(a).from), this.setData({
            from: l,
            id: c,
            queue_code: u,
            marginTop: d + "rpx",
            positionTop: 100 + r.statusBarHeight * s + "rpx"
        }), l ? wx.login({
            success: function(e) {
                (0, n.login)({
                    code: e.code,
                    login_type: "third"
                }).then(function(e) {
                    (0, o.setInfo)("userInfo", e.data), i.getOrderDetial();
                }).catch(function() {
                    (0, o.setInfo)("userInfo", "");
                });
            }
        }) : this.getOrderDetial();
    },
    getOrderDetial: function(e) {
        var o = this, i = {}, a = void 0, r = this.data, s = r.id, d = r.queue_code;
        wx.showLoading({
            mask: !0,
            title: "加载中..."
        }), s || e ? (i.id = s || e, a = n.getOrder) : d && (i.queue_code = d, a = n.getLastOrder), 
        a && a(t({}, i)).then(function(e) {
            o.setData({
                orderDetail: e.data,
                id: e.data.id
            }), wx.hideLoading(), wx.stopPullDownRefresh();
        }).catch(function() {
            wx.hideLoading(), wx.stopPullDownRefresh();
        });
    },
    callPhone: function(e) {
        var t = e.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    handlerCancel: function(e) {
        var t = e.currentTarget.dataset.id, o = this;
        wx.showModal({
            title: "提示",
            content: "确定要取消排队吗？",
            success: function(e) {
                e.confirm ? (0, n.cancelQueue)({
                    id: t
                }).then(function() {
                    wx.showToast({
                        title: "取消成功"
                    }), o.getOrderDetial(t);
                }) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    handlerReapply: function(e) {
        var t = this.data.orderDetail;
        wx.switchTab({
            url: "/pages/index/index"
        }), (0, o.setInfo)("replay", t);
    },
    onReady: function() {},
    goBack: function() {
        "notice" == this.data.from ? wx.switchTab({
            url: "/pages/index/index"
        }) : wx.navigateBack();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    onRefresh: function() {
        wx.showNavigationBarLoading(), wx.showLoading({
            title: "刷新中..."
        }), this.getOrderDetial();
    },
    onPullDownRefresh: function() {
        this.onRefresh();
    }
});