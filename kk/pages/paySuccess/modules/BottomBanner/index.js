(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 125 ], {
    700: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var n = [], i = !0, o = !1, a = void 0;
                try {
                    for (var r, s = t[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), 
                    !e || n.length !== e); i = !0) ;
                } catch (t) {
                    o = !0, a = t;
                } finally {
                    try {
                        !i && s.return && s.return();
                    } finally {
                        if (o) throw a;
                    }
                }
                return n;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, i = function(t, e, n) {
            return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
        };
        function defineProperties(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(t, i.key, i);
            }
        }
        var d = n(0), o = _interopRequireDefault(d), a = n(1), v = _interopRequireDefault(n(9)), f = _interopRequireDefault(n(11));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function _defineProperty(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        n(701);
        var r = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(BottomBanner, d.Component), i(BottomBanner, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, n) {
                    null === t && (t = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === i) {
                        var o = Object.getPrototypeOf(t);
                        return null === o ? void 0 : get(o, e, n);
                    }
                    if ("value" in i) return i.value;
                    var a = i.get;
                    return void 0 !== a ? a.call(n) : void 0;
                })(BottomBanner.prototype.__proto__ || Object.getPrototypeOf(BottomBanner.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    bannerList: [],
                    isOpenActivityWindowModal: !1,
                    isOpenCouponMinModal: !1,
                    currentActivityAd: void 0
                }, this.data = {
                    activityBannerList: [],
                    lastAdvList: []
                }, this.$$refs = new o.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {}
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(t) {
                this.data.lastAdvList !== t.advList && 0 < t.advList.length && this.setBanner(t.advList), 
                this.data.lastAdvList = t.advList;
            }
        }, {
            key: "includesHost",
            value: function includesHost(e) {
                return [ "wxapp.feng1.com", "wxapp-feng1.sf-express.com" ].some(function(t) {
                    return -1 < e.indexOf(t) && e.indexOf(t) <= 8;
                });
            }
        }, {
            key: "getUrlHost",
            value: function getUrlHost(t) {
                var e = t.match(/^http(s)?:\/\/(.*?)\//);
                return e && e[2] ? e[2] : null;
            }
        }, {
            key: "setBanner",
            value: function setBanner(t) {
                var e = this.getAdvertisementByPosition(t);
                this.setState({
                    bannerList: e
                }), e && e["2-3"] ? (this.data.activityBannerList = e["2-3"], this.showDifferentBanner()) : this.initShareCoupon();
            }
        }, {
            key: "initShareCoupon",
            value: function initShareCoupon() {}
        }, {
            key: "showDifferentBanner",
            value: function showDifferentBanner() {
                var t = this.data.activityBannerList, e = this.props, n = e.shelfId, i = e.initShareConfig, o = e.actions, a = (0, 
                f.default)(new Date()).format("YYYY-MM-DD"), r = null;
                try {
                    var s = v.default.get("paySuccessAdFlag");
                    if (s) {
                        var c = s;
                        console.log(c);
                        for (var l = c[a] || [], u = 0; u < t.length; u++) {
                            var d = t[u];
                            if (-1 === l.indexOf(d.advertionId)) {
                                r = d;
                                break;
                            }
                        }
                    } else r = t[0];
                    if (r) {
                        if (s) {
                            var p = s[a] || [];
                            p.push(r.advertionId), v.default.setLocal("paySuccessAdFlag", _defineProperty({}, a, p));
                        } else v.default.setLocal("paySuccessAdFlag", _defineProperty({}, a, [ r.advertionId ]));
                        this.setState({
                            isOpenActivityWindowModal: !0,
                            currentActivityAd: r
                        }), o.$log.pushPageModule({
                            modelCode: "40080",
                            modelName: "2-1活动弹窗",
                            relateFromId: r.advertionId,
                            relateFromType: 3
                        }), i && i(n, r.shareTitle, r.shareAbstract, r.shareImgUrl, r.advertionUrl, !0, r.isShare);
                    } else this.initShareCoupon();
                } catch (t) {}
            }
        }, {
            key: "onCloseActivityWindowModal",
            value: function onCloseActivityWindowModal() {
                this.setState({
                    isOpenActivityWindowModal: !1
                });
            }
        }, {
            key: "openActivityPage",
            value: function openActivityPage() {
                var t = this.props.data;
                t && a.feNavigator.jumpUrl(t.linkUrl);
            }
        }, {
            key: "onClickBanner",
            value: function onClickBanner(t) {
                t.advertionUrl && a.feNavigator.jumpUrl(t.advertionUrl);
            }
        }, {
            key: "_createBannerData",
            value: function _createBannerData(c) {
                var l = this;
                return function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "2-1", n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [], i = (0, 
                    d.genCompid)(c + "$compid__303"), o = u(i, 2), a = o[0], r = o[1], s = l.state.bannerList[e] || n || [];
                    return d.propsManager.set({
                        data: s,
                        indicatorDots: !1
                    }, r, a), {
                        $compid__303: r
                    };
                };
            }
        }, {
            key: "_createCouponMinModalData",
            value: function _createCouponMinModalData(a) {
                var r = this;
                return function() {
                    var t = (0, d.genCompid)(a + "$compid__304"), e = u(t, 2), n = e[0], i = e[1], o = r.state.isOpenCouponMinModal;
                    return r.anonymousFunc0 = function() {
                        return r.setState({
                            isOpenCouponMinModal: !1
                        });
                    }, d.propsManager.set({
                        isOpen: o,
                        onClose: r.anonymousFunc0,
                        closeOnClickOverlay: !1,
                        style: null
                    }, i, n), {
                        $compid__304: i
                    };
                };
            }
        }, {
            key: "handleImageClick",
            value: function handleImageClick() {
                var t = this.state.currentActivityAd;
                if (t) {
                    var e = t.advertionUrl;
                    this.props.actions.$log.pushEvent({
                        eventCode: "40081",
                        eventName: "2-1活动弹窗",
                        relateFromId: t.advertionId,
                        relateFromType: 3
                    }), e && a.feNavigator.jumpUrl(e), this.setState({
                        isOpenActivityWindowModal: !1
                    });
                }
            }
        }, {
            key: "_createActivityWindowModalData",
            value: function _createActivityWindowModalData(s) {
                var c = this;
                return function() {
                    var t = (0, d.genCompid)(s + "$compid__305"), e = u(t, 2), n = e[0], i = e[1], o = c.state, a = o.isOpenActivityWindowModal, r = o.currentActivityAd;
                    return d.propsManager.set({
                        isOpen: a,
                        onClose: c.onCloseActivityWindowModal.bind(c),
                        style: null
                    }, i, n), {
                        $compid__305: i,
                        currentActivityAd: r
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, n) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var i = this.$prefix, o = this._createBannerData(i + "cdbzzzzzzz")("footer-banner-wrapper"), a = this._createActivityWindowModalData(i + "cdczzzzzzz")(), r = this._createCouponMinModalData(i + "cddzzzzzzz")();
                return Object.assign(this.__state, {
                    anonymousState__temp: o,
                    anonymousState__temp2: a,
                    anonymousState__temp3: r
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        } ]), BottomBanner);
        function BottomBanner() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, BottomBanner);
            var o = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (BottomBanner.__proto__ || Object.getPrototypeOf(BottomBanner)).apply(this, arguments));
            return o.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "bannerList", "isOpenActivityWindowModal", "isOpenCouponMinModal", "currentActivityAd", "shelfId", "initShareConfig", "actions", "data", "advList" ], 
            o.replaceAdvHost = function(t) {
                if (Array.isArray(t)) {
                    var n = "https://wxapp.feng1.com".replace(/http(s)?:\/\//, "");
                    t.forEach(function(t) {
                        t.advertionList && t.advertionList.forEach(function(t) {
                            if (t && t.advertionUrl && o.includesHost(t.advertionUrl)) {
                                var e = o.getUrlHost(t.advertionUrl);
                                e && e != n && (t.advertionUrl = function filterActivityUrl(t) {
                                    return -1 < t.indexOf("module_name=activity/h5PublicityPage") ? t = t.replace("weixin.html?module_name=activity/h5PublicityPage/index&", "activity/h5PublicityPage/index.html?") : -1 < t.indexOf("module_name=activity/themeActivity") && (t = t.replace("weixin.html?module_name=activity/themeActivity/index&", "activity/themeActivity/index.html?")), 
                                    t;
                                }(t.advertionUrl).replace(e, n));
                            }
                        });
                    });
                }
            }, o.getAdvertisementByPosition = function(t, e) {
                o.replaceAdvHost(t);
                var n = {};
                if (!t || !t.length) return [];
                var i = [];
                return t.forEach(function(t) {
                    e ? t.advertionPositionName === e && (i = t.advertionList || []) : n[t.advertionPositionName] = t.advertionList || [];
                }), e ? i : n;
            }, o.customComponents = [ "StoreSwiper", "Modal" ], o;
        }
        r.$$events = [ "handleImageClick" ], r.$$componentPath = "pages/paySuccess/modules/BottomBanner/index", 
        e.default = r, Component(n(0).default.createComponent(r));
    },
    701: function(t, e, n) {}
}, [ [ 700, 0, 1, 2, 3 ] ] ]);