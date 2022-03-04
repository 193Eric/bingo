function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var t = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
}, n = require("../../utils/util"), a = require("../../utils/api"), o = require("../../assets/js/qqmap-wx-jssdk.js"), s = require("../../utils/promiss");

Page(s.loginCheck({
    data: {
        currentValue: 50,
        max_people: "",
        min_people: "",
        default_num: "",
        step: 0,
        banner: "",
        selectItem: 0,
        shopList: [],
        bannerList: [],
        form: {},
        nextMargin: "334rpx",
        someArray: [ 1, 2 ],
        code: "",
        queue_code: ""
    },
    onTextInput: function(t) {
        var n = t.currentTarget, a = t.detail, o = n.dataset.field;
        this.setData(e({}, "form." + o, a.value));
    },
    selectShop: function(e) {
        var t = this, n = "string" == typeof e ? e : e.currentTarget.dataset.code;
        (0, a.getMerchantStore)({
            store_code: n
        }).then(function(e) {
            var n = t.data.form, a = n.diners_num = e.data.infos[0].default_num || "";
            t.setData({
                step: 1,
                currentValue: 100,
                queueList: e.data.infos,
                queue_code: e.data.infos && e.data.infos[0].queue_code,
                max_people: e.data.infos[0].max_people,
                min_people: e.data.infos[0].min_people,
                default_num: a,
                form: n
            });
        });
    },
    handleBack: function() {
        this.setData({
            step: 0,
            currentValue: 50,
            diners_num: "",
            selectItem: 0
        }), this.getShopList();
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    selectTips: function(e) {
        var t = e.currentTarget.dataset.queue_state;
        2 == t ? wx.showToast({
            title: "当前已暂停线上取号，请前往现场",
            icon: "none"
        }) : 1 == t && wx.showToast({
            title: "当前暂未开放取号",
            icon: "none"
        });
    },
    sendQueue: function() {
        var e = this.data, n = e.form, o = e.queue_code, s = e.max_people;
        if (n.diners_num && !isNaN(n.diners_num)) if (n.diners_num > s) wx.showToast({
            title: "最多不能超过" + s + "人喔",
            icon: "none"
        }); else if (n.mobile) if (/^1[3456789]\d{9}$/.test(n.mobile)) {
            var i = this;
            wx.requestSubscribeMessage({
                tmplIds: [ "xbfhnx2Y8c3q1pVIG2QI-Gbz0sExDKD7bCzpnMg-ftE", "pCPqil0KRwMZGvo0wzUIXL3wlaxgnyRXw-dXmd2lDD8", "9xNwVkWxlqgKGXvvMkPQkq2Sx45bLTRxZp0yjtVA_mY" ],
                success: function(e) {
                    (0, a.applyUserGen)(t({}, n, {
                        queue_code: o,
                        batch_num: 1
                    })).then(function(e) {
                        setTimeout(function() {
                            i.handleBack(), wx.navigateTo({
                                url: "/pages/order/index?queue_code=" + o
                            });
                        }, 200);
                    });
                }
            });
        } else wx.showToast({
            title: "请输入合法手机号码！",
            icon: "none"
        }); else wx.showToast({
            title: "请输入手机号码！",
            icon: "none"
        }); else wx.showToast({
            title: "请输入就餐人数！",
            icon: "none"
        });
    },
    getPhoneNumber: function(e) {
        var t = this;
        "getPhoneNumber:ok" == e.detail.errMsg ? wx.login({
            success: function(o) {
                o.code ? t.setData({
                    code: o.code
                }) : console.log("获取用户登录态失败！" + o.errMsg);
                var s = t.data, i = s.code, r = s.form, u = e.currentTarget.dataset.code;
                r.mobile || (0, a.login)({
                    code: i,
                    encrypted_data: e.detail.encryptedData,
                    iv: e.detail.iv,
                    login_type: "third"
                }).then(function(e) {
                    (0, n.setInfo)("userInfo", e.data), t.selectShop(u), r.mobile = e.data.phone, t.setData({
                        form: r
                    });
                });
            }
        }) : this.selectShop(shopCode);
    },
    onShow: function() {
        var e = (0, n.getInfo)("replay");
        if (e) {
            this.selectShop(e.store_code);
            var t = {
                diners_num: e.diners_num,
                mobile: e.mobile
            };
            this.setData({
                form: t,
                currentValue: 100
            }), (0, n.setInfo)("replay", "");
        }
        this.getShopList();
    },
    onLoad: function(e) {
        var t = this, o = (0, n.getInfo)("userInfo");
        if (o && o.phone) {
            var s = {
                mobile: o.phone
            };
            this.setData({
                form: s
            });
        }
        (0, a.getBanner)().then(function(e) {
            t.setData({
                bannerList: e.data
            });
        });
    },
    getShopList: function() {
        var e = new o({
            key: "QDNBZ-32Q6J-UEPFY-KE6MH-G4LD3-2JF7J"
        }), t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(n) {
                var o = n.latitude, s = n.longitude;
                e.reverseGeocoder({
                    location: o + "," + s,
                    success: function(e) {
                        wx.showLoading({
                            mask: !0,
                            title: "加载中..."
                        }), (0, a.getShopList)({
                            longitude: s,
                            latitude: o,
                            provice_name: e.result.address_component.province,
                            city_name: e.result.address_component.city
                        }).then(function(e) {
                            t.setData({
                                shopList: e.data
                            }), wx.hideLoading();
                        }).catch(function() {
                            wx.hideLoading();
                        });
                    }
                });
            }
        });
    },
    selectBind: function(e) {
        var t = this.data, n = t.form, a = t.default_num;
        n.diners_num = a = e.currentTarget.dataset.default_num || "", this.setData({
            form: n,
            selectItem: e.currentTarget.dataset.index,
            queue_code: e.currentTarget.dataset.code,
            max_people: e.currentTarget.dataset.max_people,
            min_people: e.currentTarget.dataset.min_people,
            default_num: a
        });
    }
}));