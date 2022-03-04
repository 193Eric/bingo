var e = require("../../utils/api"), t = require("../../utils/util");

Page({
    data: {
        code: "",
        orderList: [],
        currentSwiperIndex: 0,
        previousMargin: "32rpx",
        nextMargin: "32rpx",
        current: 0,
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        canIUseGetUserProfile: !1,
        canIUseOpenData: wx.canIUse("open-data.type.userAvatarUrl") && wx.canIUse("open-data.type.userNickName")
    },
    goHistory: function() {
        wx.navigateTo({
            url: "/pages/history/index"
        });
    },
    goOrderDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/order/index?id=" + t
        });
    },
    onSwiperChange: function(e) {
        this.setData({
            current: e.detail.currentSwiperIndex
        });
    },
    onLoad: function(e) {
        var t = this;
        wx.getUserProfile && this.setData({
            canIUseGetUserProfile: !0
        }), wx.login({
            success: function(e) {
                e.code ? t.setData({
                    code: e.code
                }) : console.log("获取用户登录态失败！" + e.errMsg);
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            userInfo: (0, t.getInfo)("userInfo")
        }), this.getOrderList();
    },
    getOrderList: function() {
        var t = this;
        wx.showLoading({
            mask: !0,
            title: "加载中..."
        }), (0, e.getUserQueue)().then(function(e) {
            var n = e.data.infos;
            t.setData({
                orderList: n
            }), wx.hideLoading(), wx.stopPullDownRefresh();
        }).catch(function() {
            wx.hideLoading();
        });
    },
    handlerCancel: function(t) {
        var n = t.currentTarget.dataset.id, o = this;
        wx.showModal({
            title: "提示",
            content: "确定要取消排队吗？",
            success: function(t) {
                t.confirm ? (0, e.cancelQueue)({
                    id: n
                }).then(function() {
                    wx.showToast({
                        title: "取消成功"
                    }), o.getOrderList(n);
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    onRefresh: function() {
        wx.showNavigationBarLoading(), wx.showLoading({
            title: "刷新中..."
        }), this.getOrderList();
    },
    onPullDownRefresh: function() {
        this.onRefresh();
    },
    callPhone: function(e) {
        var t = e.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    getPhoneNumber: function(n) {
        var o = this;
        if ("getPhoneNumber:ok" == n.detail.errMsg) {
            var a = this.data.code;
            (0, e.login)({
                code: a,
                encrypted_data: n.detail.encryptedData,
                iv: n.detail.iv,
                login_type: "third"
            }).then(function(e) {
                (0, t.setInfo)("userInfo", e.data), o.setData({
                    userInfo: e.data
                }), o.getOrderList();
            });
        }
    },
    getUserProfile: function(e) {
        var t = this;
        wx.getUserProfile({
            desc: "展示用户信息",
            success: function(e) {
                console.log(e), t.setData({
                    userInfo: e.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});