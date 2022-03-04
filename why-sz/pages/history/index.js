var t = require("../../utils/api");

Page({
    data: {
        orderList: [],
        offset: 0,
        loadTrue: !1,
        marginTop: "50rpx",
        positionTop: ""
    },
    onLoad: function(t) {
        var o = wx.getSystemInfoSync(), a = 750 / o.windowWidth, n = o.statusBarHeight * a + 5;
        "android" === o.platform && (n += 10), this.setData({
            marginTop: n + "rpx",
            positionTop: 100 + o.statusBarHeight * a + "rpx"
        }), this.getData();
    },
    getData: function() {
        var o = this;
        (0, t.getUserHistory)().then(function(t) {
            o.setData({
                orderList: t.data.infos
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
        });
    },
    goOrderDetail: function(t) {
        console.log(123);
        var o = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/order/index?id=" + o
        });
    },
    goBack: function() {
        wx.navigateBack();
    },
    onRefresh: function() {
        wx.showNavigationBarLoading(), wx.showLoading({
            title: "刷新中..."
        }), this.getData();
    },
    onPullDownRefresh: function() {
        this.onRefresh();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {
        var o = this, a = this.data, n = a.offset, i = a.loadTrue, e = a.orderList;
        i || (n += 10, this.setData({
            loadTrue: !0
        }), (0, t.getUserHistory)({
            offset: n
        }).then(function(t) {
            o.setData({
                orderList: e.concat(t.data.infos),
                loadTrue: !1,
                offset: n
            });
        }).catch(function() {
            o.setData({
                loadTrue: !1
            });
        }));
    },
    onShareAppMessage: function() {}
});