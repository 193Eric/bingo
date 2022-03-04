require("./runtime"), require("./common"), require("./vendors"), require("./taro"), 
(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 5 ], {
    147: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e, t, r) {
            return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
        };
        function defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(e, a.key, a);
            }
        }
        var o = r(0), n = _interopRequireDefault(o), u = r(58), i = _interopRequireDefault(r(151)), c = _interopRequireDefault(r(48)), l = (_interopRequireDefault(r(9)), 
        r(106)), s = _interopRequireDefault(r(268));
        r(269), r(270), r(271);
        var d = r(49), p = r(72);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        n.default.uuid = (0, l.uuid)();
        var f = (0, i.default)();
        (0, u.setStore)(f), u.ReduxContext.Provider && (u.ReduxContext.Provider({
            store: f
        }), u.ReduxContext.Provider({
            store: f
        }));
        var y = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(_App, o.Component), a(_App, [ {
            key: "getShelfCode",
            value: function getShelfCode() {
                return this.$router.params.query.shelfCode;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var e = this.getShelfCode();
                console.log(e), f.dispatch((0, d.setShelfCode)(e)), n.default.getSystemInfo().then(function(e) {
                    e.screenHeight != e.safeArea.bottom && f.dispatch((0, p.setIsIphoneX)(!0));
                }), c.default.config({
                    shelfCode: e,
                    storage: {
                        getItem: function getItem(e) {
                            return n.default.getStorageSync(e);
                        },
                        setItem: function setItem(e, t) {
                            return n.default.setStorageSync(e, t);
                        },
                        removeItem: function removeItem(e) {
                            return n.default.removeStorageSync(e);
                        }
                    }
                }), (0, s.default)();
            }
        }, {
            key: "componentDidShow",
            value: function componentDidShow() {}
        }, {
            key: "componentDidHide",
            value: function componentDidHide() {}
        }, {
            key: "componentDidCatchError",
            value: function componentDidCatchError() {}
        }, {
            key: "_createData",
            value: function _createData() {}
        } ]), _App);
        function _App() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, _App);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));
            return e.config = {
                pages: [ "pages/entrance/index", "pages/webview/webview", "pages/wechatPay/index", "pages/index/index", "pages/cart/index", "pages/confirmPay/index", "pages/couponChoose/index", "pages/paySuccess/index", "pages/pay/index", "pages/auth/index" ],
                subpackages: [ {
                    root: "counter",
                    pages: [ "pages/index/index", "pages/payScore/index", "pages/agreement/index", "pages/discountCardList/index", "pages/discountCardRule/index" ]
                }, {
                    root: "packageA",
                    pages: [ "pages/user/index", "pages/userInfo/index", "pages/account/index", "pages/setPassword/index", "pages/accountLogin/index", "pages/shelfHistory/index", "pages/address/index", "pages/addressEdit/index", "pages/signTerms/index", "pages/signInfo/index" ]
                } ],
                window: {
                    backgroundTextStyle: "light",
                    navigationBarBackgroundColor: "#fff",
                    navigationBarTitleText: "WeChat",
                    navigationBarTextStyle: "black"
                },
                permission: {
                    "scope.userLocation": {
                        desc: "您的位置信息将用于小程序位置接口的效果展示"
                    }
                }
            }, e;
        }
        t.default = y, App(r(0).default.createApp(y)), n.default.initPxTransform({
            designWidth: 375,
            deviceRatio: {
                375: .5,
                640: 1.17,
                828: .905
            }
        });
    },
    151: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.default = function configStore() {
            return (0, o.createStore)(u.default, l);
        };
        var o = r(38), n = _interopRequireDefault(r(154)), u = _interopRequireDefault(r(155));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var i = "object" === ("undefined" == typeof window ? "undefined" : a(window)) && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : o.compose, c = [ n.default ];
        var l = i(o.applyMiddleware.apply(void 0, c));
    },
    154: function(e, t, r) {
        "use strict";
        function createThunkMiddleware(o) {
            return function(e) {
                var r = e.dispatch, a = e.getState;
                return function(t) {
                    return function(e) {
                        return "function" == typeof e ? e(r, a, o) : t(e);
                    };
                };
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = createThunkMiddleware();
        a.withExtraArgument = createThunkMiddleware, t.default = a;
    },
    155: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(38), o = _interopRequireDefault(r(156)), n = _interopRequireDefault(r(262)), u = _interopRequireDefault(r(263)), i = _interopRequireDefault(r(266)), c = _interopRequireDefault(r(267));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        t.default = (0, a.combineReducers)({
            store: o.default,
            shelf: n.default,
            cart: u.default,
            app: i.default,
            user: c.default
        });
    },
    156: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultState = void 0;
        var I = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
        };
        t.default = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : A, t = arguments[1];
            switch (t.type) {
              case M.SET_STORE_DETAIL:
                var r = I({}, t.payload);
                return delete r.shelf, delete r.frequentBuyList, r.productList && (r.productList = r.productList.filter(function(e) {
                    return 2 !== Number(e.salesStatus);
                })), I({}, e, r);

              case M.SET_PRODUCT_ACTIVITY:
                var a = t.payload, o = a.list, n = a.activitySortList, u = a.shelf, i = a.shelfProductCateList;
                (0, b.mainDataProcess)(o, e.productList, e.currentDateTime, u);
                var c = o.find(function(e) {
                    return 6 == e.activityType;
                }), l = [];
                return l = u.isCounter ? (0, b.generateProductGroupListByCounter)(o, e.productList, n, e.currentDateTime) : (0, 
                b.generateProductGroupList)(o, e.productList, n, e.currentDateTime, i), I({}, e, {
                    fullOrderCutActivity: c,
                    activityList: o,
                    classifyList: l
                });

              case M.SET_ADV_LIST:
                return I({}, e, {
                    advList: t.payload
                });

              case M.SET_HOME_CONFIG:
                return I({}, e, {
                    homeConfig: t.payload
                });

              case M.SET_STORE_CONFIG:
                return I({}, e, {
                    storeConfig: I({}, e.storeConfig, t.payload)
                });

              case M.SET_COUPON_LIST:
                var s = e.couponData, d = t.payload.couponVOList;
                return d ? d.sort((0, L.arrSortByKey)("receiveStatus")) : d = [], s.couponVOList = d, 
                I({}, e, {
                    couponData: s
                });

              case M.SET_USER_COUPON_RECORD:
                var p = t.payload, f = p.userAvaliableCouponRecordVOs, y = p.avaliableToDistributeCommonCoupons, _ = p.avalibleStarLevelShelfCoupon;
                return Object.assign(e.couponData, {
                    userCouponRecord: [].concat(function _toConsumableArray(e) {
                        {
                            if (Array.isArray(e)) {
                                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                                return r;
                            }
                            return Array.from(e);
                        }
                    }(f || [])),
                    autoReceiveCoupon: y || [],
                    avalibleStarLevelShelfCoupon: _
                }), I({}, e);

              case M.PROCESS_COUPON_DATA:
                return (0, R.default)(e.couponData.userCouponRecord, t.payload), I({}, e, {
                    couponData: e.couponData
                });

              case M.SET_COUPON_RECEVIED_STATUS:
                return e.couponData.couponVOList.forEach(function(e) {
                    e.couponId == t.payload && (e.receiveStatus = 2);
                }), I({}, e);

              case M.SET_AUTO_RECEIVE_COUPON:
                return e.couponData.autoReceiveCoupon = t.payload, I({}, e);

              case M.SET_RECOMMEND_PRODUCT:
                return I({}, e, {
                    frequentBuyList: (0, b.findProductMap)(e.productList, t.payload)
                });

              case M.SET_RECOMMEND_PRODUCT_DATA:
                return I({}, e, {
                    recommendProductData: t.payload
                });

              case M.RESET_STORE:
                return A;

              case M.ADD_PRODUCT_TO_STORE:
                var v = e.productList, C = e.currentDateTime, S = e.activityList, h = t.payload, P = h.product, T = h.shelf;
                return v.push(P), (0, b.mainDataProcess)(S, v, C, T), I({}, e, {
                    productList: v
                });

              case M.SET_CUSTOM_LABEL:
                var E = t.payload;
                return I({}, e, {
                    businessTypeStyleMap: E
                });

              case M.SET_MODAL_RULE_SORT:
                var O = t.payload;
                return I({}, e, {
                    modalSortList: O
                });

              case M.SET_PERSONAL_UNREAD:
                var g = t.payload;
                return I({}, e, {
                    personalUnread: g
                });

              case M.SET_DISCOUNT_CARD_INFO:
                var m = t.payload;
                return I({}, e, {
                    discountCardInfo: m
                });

              case M.SET_SHELF_BRAND:
                var D = t.payload;
                return I({}, e, {
                    currentBrand: D
                });
            }
            return e;
        };
        var R = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r(39)), L = r(85), a = r(1), M = function _interopRequireWildcard(e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t;
            }
        }(r(22)), b = r(23);
        var A = t.defaultState = {
            openType: a.Storage.get("openType") || "1",
            currentDateTime: 0,
            advList: {},
            couponData: {
                userCouponRecord: [],
                couponVOList: [],
                autoReceiveCoupon: [],
                isShowTitle: !0,
                imgUrl: "",
                title: ""
            },
            homeConfig: {},
            storeConfig: {},
            productList: [],
            frequentBuyList: [],
            guessYouLikeList: [],
            activityList: [],
            classifyList: [],
            fullOrderCutActivity: null,
            recommendProductData: {
                imgUrl: "",
                productIds: []
            },
            businessTypeStyleMap: {},
            personalUnread: !1,
            discountCardInfo: null,
            currentBrand: ""
        };
    },
    262: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultState = void 0;
        var u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
        };
        t.default = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : l, t = arguments[1];
            switch (t.type) {
              case i.SET_SHELF:
                var r = t.payload.shelf;
                return r.isSchoolShelf = 8 === Number(r.shelfType), r.isMachineShelf = 7 === Number(r.shelfType), 
                r.isCounter = 6 === Number(r.shelfType), r.isYuanQiMachineShelf = r.isMachineShelf && 14 == r.machineTypeId, 
                r.isYuanQiMachineShelf ? c.default.set("isYuanQiMachineShelf", "1") : c.default.remove("isYuanQiMachineShelf"), 
                u({}, e, r);

              case i.SET_SHELF_CODE:
                var a = t.payload;
                return c.default.set("shelfCode", a, -1), u({}, e, {
                    shelfCode: a,
                    shelfRandomCode: a
                });

              case i.SET_SHELF_FREIGHT_CONFIG:
                var o = e, n = t.payload;
                return n && (o.operatingStatus = n.businessStatus || 1, o.nextOpenTime = n.nextBusinessTime, 
                o.startDeliveryPrice = n.hasStartPrice ? n.startPrice : 0, o.deliveryPrice = n.hasDeliveryPrice ? n.deliveryPrice : 0), 
                u({}, o);
            }
            return e;
        };
        var i = function _interopRequireWildcard(e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t;
            }
        }(r(22)), c = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r(9)), a = r(8);
        var l = t.defaultState = {
            activateTime: "",
            areaAddress: "",
            city: "",
            district: "",
            province: "",
            shelfName: "",
            shelfCode: "",
            shelfId: "",
            shelfPicture: "",
            shelfRandomCode: "",
            onlineStatus: 0,
            shelfStatus: 0,
            shelfType: 0,
            isSchoolShelf: !1,
            operatingStatus: a.OperatingStatus.NORMAL
        };
    },
    263: function(e, t, r) {
        "use strict";
        var a;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultState = void 0;
        var w = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
        };
        t.default = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : i, t = arguments[1];
            return c[t.type] ? c[t.type](e, t) : e;
        };
        var q = r(8), n = _interopRequireDefault(r(39)), p = r(10), N = r(4), u = _interopRequireDefault(r(48)), o = r(22), j = r(23), k = r(104), B = r(41);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e;
        }
        var i = t.defaultState = {
            cartProductList: [],
            simpleCartItemList: [],
            totalPrice: 0,
            totalCount: 0,
            originTotalPrice: 0,
            cartBox: {
                totalPrice: 0,
                totalCount: 0,
                originTotalPrice: 0,
                satisfyCoupon: null,
                unsatisfiedCoupon: null
            },
            toast: "",
            cartProductMap: {},
            simpleCartProductMap: {},
            activityMap: {},
            satisfyCoupon: null,
            unsatisfiedCoupon: null,
            totalPriceWithoutDelivery: 0,
            cartGroupData: {
                normalCartGroup: null,
                discountCartGroupList: []
            },
            cartExchangeInfo: null,
            currentCoupon: null,
            isUsedFullOrderCut: !1,
            fullOrderDiscountInfo: null,
            isSelectAll: !1,
            cartItemSelectMap: {},
            currentCouponData: {
                isSelectByUser: !1,
                coupon: null
            },
            currentAddress: null,
            canCalcExchangeTotalPrice: 0,
            totalPriceWithoutExchange: 0
        }, c = (_defineProperty(a = {}, o.ADD_PRODUCT_TO_CART, function(e, t) {
            var r = t.payload.product, a = t.payload.shelf, o = t.payload.isCheckExchangeExceeded;
            if (!r) return e;
            var n = e.cartItemSelectMap, u = e.cartProductList, i = e.totalPriceWithoutExchange, c = "";
            if ((0, B.isExceededMachineShelfNumber)(a, u, r, 1)) return c = p.MACHINE_SHELF_MAX_CART_ITEM_COUNT_TIPS, 
            w({}, e, {
                toast: c,
                cartItemSelectMap: n
            });
            var l = r.activity, s = e.cartProductMap[r.productId];
            if (l) {
                var d = e.activityMap[l.activityId] ? e.activityMap[l.activityId].list : [];
                (0, B.isExceededPurchasesNumber)(r, d, s) && (c = "已超过限购数量，超过部分将按原价结算哦~"), o && (0, 
                B.isExceededExchangeNumber)(r, u, i) && (c = "超过可换购商品的最大数量，将按原价结算");
            }
            return s ? s.quantity < s.product.stockQuantity ? (s.quantity += 1, s.addTime = new Date(), 
            s.selected = !0) : c = "库存不足！" : u.unshift({
                productId: r.productId,
                product: r,
                addTime: new Date(),
                quantity: 1,
                selected: !0
            }), n[r.productId] = !0, w({}, e, {
                toast: c,
                cartProductList: u,
                cartItemSelectMap: n
            });
        }), _defineProperty(a, o.REDUCE_CART_PRODUCT, function(e, t) {
            for (var r = t.payload, a = e.cartProductList, o = e.cartItemSelectMap, n = 0; n < a.length; n++) if (r.productId === a[n].productId) {
                --a[n].quantity, 0 === a[n].quantity && (a.splice(n, 1), delete o[r.productId]);
                break;
            }
            return w({}, e, {
                cartProductList: a,
                cartItemSelectMap: o
            });
        }), _defineProperty(a, o.CLEAR_CART, function(e, t) {
            return w({}, e, {
                cartProductList: []
            });
        }), _defineProperty(a, o.CHANGE_CART_PRODUCT_NUMBER, function(e, t) {
            for (var r = t.payload, a = r.product, o = r.number, n = r.shelf, u = e.cartProductList, i = e.cartProductMap, c = 0, l = 0; l < u.length; l++) a.productId === u[l].productId && (o <= a.stockQuantity && (c = u[l].quantity, 
            u[l].quantity = o, u[l].addTime = new Date()), o <= 0 && u.splice(l, 1));
            var s = "";
            return (0, B.isExceededMachineShelfNumber)(n, u, a, 0) ? (s = p.MACHINE_SHELF_MAX_CART_ITEM_COUNT_TIPS, 
            i[a.productId].quantity = c, w({}, e, {
                toast: s
            })) : w({}, e, {
                cartProductList: u
            });
        }), _defineProperty(a, o.GENERATE_CART_PRODUCT_MAP, function(e, t) {
            var r = 0, a = {}, o = {};
            return e.cartProductList.forEach(function(e) {
                o[e.productId] = e, r += e.quantity;
                var t = e.product.activity;
                t && 1 == t.restrictionsStatus && (a[t.activityId] || (a[t.activityId] = {
                    list: [],
                    totalNumber: 0
                }), a[t.activityId].list.push(e), a[t.activityId].totalNumber += e.quantity);
            }), w({}, e, {
                cartProductMap: o,
                activityMap: a,
                totalCount: r
            });
        }), _defineProperty(a, o.UPDATE_CART_DATA_FROM_STORAGE, function(e, t) {
            var r = t.payload, a = e.cartItemSelectMap;
            u.default.$cart.convertDataByOldVersion();
            var o = u.default.$cart.get(r);
            return o.forEach(function(e) {
                e.selected ? a[e.productId] = !0 : delete a[e.productId];
            }), w({}, e, {
                cartProductList: o,
                cartItemSelectMap: a
            });
        }), _defineProperty(a, o.CLEAR_TOAST, function(e) {
            return w({}, e, {
                toast: ""
            });
        }), _defineProperty(a, o.SET_TOAST, function(e, t) {
            return w({}, e, {
                toast: t.payload
            });
        }), _defineProperty(a, o.CART_DATA_PROCESS, function(e, t) {
            var r = t.payload, a = r.couponList, o = r.productList, n = r.fullOrderCutActivity, u = e.cartItemSelectMap, i = e.isUsedFullOrderCut, c = e.currentCouponData, l = 0, s = {}, d = 0;
            e.cartProductList.forEach(function(e) {
                e.selected = !0, d += e.quantity;
            });
            var p = (0, j.originPriceCalculate)(e.cartProductList), f = (0, j.priceCalculateAndGetRuleData)(e.cartProductList, !1);
            console.log(f);
            var y = f.total, _ = (0, k.getCouponData)(a, f.normalPriceRule.meetConditionCartProductList);
            _.satisfyCoupon && (y = (0, N.sub)(y, _.satisfyCoupon.preferentialAmount || 0));
            var v = {
                totalPrice: Math.max(.01, y),
                originTotalPrice: p,
                totalCount: d,
                satisfyCoupon: _.satisfyCoupon || null,
                unsatisfiedCoupon: _.unsatisfiedCoupon || null
            }, C = {}, S = 0;
            e.cartProductList.forEach(function(e) {
                var t = e.productId;
                t in u || delete u[t], e.selected = u[t], (C[t] = e).selected && (l += e.quantity, 
                S += 1);
                var r = e.product.activity;
                r && 1 == r.restrictionsStatus && (s[r.activityId] || (s[r.activityId] = {
                    list: [],
                    totalNumber: 0
                }), s[r.activityId].list.push(e), s[r.activityId].totalNumber += e.quantity);
            });
            var h = (0, j.originPriceCalculate)(e.cartProductList), P = (0, B.getFullOrderDiscountInfo)(n, h);
            i && (null === P || 0 < P.needToSatisfyAmount) && (i = !1);
            var T = (0, j.priceCalculateAndGetRuleData)(e.cartProductList, i), E = T.total, O = T.normalPriceRule, g = T.ruleList, m = g.filter(function(e) {
                return "超值换购" !== e.name;
            }).reduce(function(e, t) {
                return (0, N.add)(e, t.calculateResult.total);
            }, 0), D = (0, B.groupCart)(g), I = (0, B.getCartExchangeInfo)(O, o), R = (0, k.getCouponData)(a, O.meetConditionCartProductList), L = R.satisfyCoupon, M = R.unsatisfiedCoupon;
            i && P && (E = (0, N.sub)(E, P.reducePrice)), !c.isSelectByUser && L && (c.coupon = L), 
            console.log(c.coupon), (c.coupon && c.coupon.currentCouponStatus === q.CurrentCouponStatus.Unsatisfied || i || !L && !c.isSelectByUser) && (c = {
                isSelectByUser: !1,
                coupon: null
            }), c.coupon && !i && (E = (0, N.sub)(E, c.coupon.preferentialAmount || 0));
            var b = E = Math.max(.01, E), A = S === e.cartProductList.length, x = e.cartProductList.map(function(e) {
                return (0, j.simplifyCartItem)(e);
            }), U = {};
            return x.forEach(function(e) {
                U[e.productId] = e;
            }), w({}, e, {
                simpleCartItemList: x,
                simpleCartProductMap: U,
                cartBox: v,
                fullOrderDiscountInfo: P,
                cartGroupData: D,
                cartExchangeInfo: I,
                cartProductMap: C,
                activityMap: s,
                totalCount: l,
                satisfyCoupon: L || null,
                unsatisfiedCoupon: M || null,
                totalPrice: E,
                totalPriceWithoutDelivery: b,
                originTotalPrice: h,
                isUsedFullOrderCut: i,
                isSelectAll: A,
                currentCouponData: c,
                canExchangePrice: O.calculateResult.restTotal || 0,
                totalPriceWithoutExchange: m
            });
        }), _defineProperty(a, o.TOGGLE_USED_FULL_ORDER_DISCOUNT, function(e, t) {
            return e.isUsedFullOrderCut = !e.isUsedFullOrderCut, w({}, e);
        }), _defineProperty(a, o.TOGGLE_SELECT_CART_ITEM, function(e, t) {
            var r = t.payload, a = e.cartItemSelectMap;
            return a[r.productId] ? delete a[r.productId] : a[r.productId] = !0, w({}, e, {
                cartItemSelectMap: a
            });
        }), _defineProperty(a, o.TOGGLE_SELECT_ALL_CART_ITEM, function(e, t) {
            var r = e.cartItemSelectMap, a = e.isSelectAll, o = e.cartProductList;
            return o.forEach(function(e) {
                var t = e.productId;
                a ? (delete r[t], e.selected = !1) : (r[t] = !0, e.selected = !0);
            }), w({}, e, {
                cartItemSelectMap: r,
                cartProductList: o
            });
        }), _defineProperty(a, o.SELECT_COUPON, function(e, t) {
            var r = e.cartProductList, a = t.payload, o = (0, j.priceCalculateAndGetRuleData)(r, !1);
            return null !== a && (0, n.default)([ a ], o.normalPriceRule.meetConditionCartProductList), 
            w({}, e, {
                currentCouponData: {
                    isSelectByUser: !0,
                    coupon: a
                }
            });
        }), _defineProperty(a, o.SELECT_ADDRESS, function(e, t) {
            return w({}, e, {
                currentAddress: t.payload
            });
        }), _defineProperty(a, o.REMOVE_SELECT_CART_ITEM, function(e, t) {
            var r = e.cartItemSelectMap, a = e.cartProductList.filter(function(e) {
                return !r[e.productId];
            });
            return w({}, e, {
                cartProductList: a,
                currentCouponData: {
                    isSelectByUser: !1,
                    coupon: null
                },
                isUsedFullOrderCut: !1
            });
        }), _defineProperty(a, o.RESET_COUPON, function(e, t) {
            return w({}, e, {
                currentCouponData: {
                    isSelectByUser: !1,
                    coupon: null
                },
                isUsedFullOrderCut: !1
            });
        }), _defineProperty(a, o.COMBINE_OLD_CART_DATA, function(e, t) {
            var r = t.payload, a = r.oldCartItemData, o = r.productList, n = e.cartProductMap, u = e.cartProductList, i = e.cartItemSelectMap, c = {};
            return o.forEach(function(e) {
                return c[e.productId] = e;
            }), Object.keys(a).forEach(function(e) {
                var t = n[e];
                t ? t.quantity = a[e].quantity : c[e] && (i[e] = !0, u.push({
                    productId: e,
                    product: c[e],
                    addTime: new Date(),
                    quantity: a[e].quantity,
                    selected: !0
                }));
            }), w({}, e);
        }), a);
    },
    266: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.defaultState = void 0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
        };
        t.default = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : u, t = arguments[1], r = e.dialogs;
            switch (t.type) {
              case n.SHOW_DIALOG:
                var a = t.payload;
                return r.push(a), o({}, e, {
                    dialogs: r
                });

              case n.DISMISS_DIALOG:
                return r.splice(r.length - 1, 1), o({}, e, {
                    dialogs: r
                });

              case n.SET_IS_IPHONE_X:
                return o({}, e, {
                    isIphoneX: !!t.payload
                });
            }
            return e;
        };
        var n = function _interopRequireWildcard(e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t;
            }
        }(r(22));
        var u = t.defaultState = {
            dialogs: [],
            loading: !1,
            error: null,
            isIphoneX: !1
        };
    },
    267: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
        };
        t.default = function user() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : n, t = arguments[1];
            switch (t.type) {
              case o.UPDATE_CITY:
                return a({}, e, {
                    city: Object.assign({}, e.city, t.payload)
                });

              case o.SET_USER_INFO:
              case o.SET_AUTH_LACTION:
                return Object.assign({}, e, t.payload);

              default:
                return e;
            }
        };
        var o = r(10), n = {
            city: {},
            nickname: "",
            headimgurl: "",
            userid: "",
            mobilePhone: "",
            isBindCompany: 0,
            isMerge: 0,
            opentype: 1,
            usertype: 0,
            isAuth: void 0
        };
    },
    268: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function checkUpdate() {
            try {
                var t = a.default.getUpdateManager();
                t.onCheckForUpdate(function(e) {
                    console.log(e.hasUpdate);
                }), t.onUpdateReady(function() {
                    a.default.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function success(e) {
                            e.confirm && t.applyUpdate();
                        }
                    });
                }), t.onUpdateFailed(function(e) {
                    console.log(e);
                });
            } catch (e) {
                throw new Error(e);
            }
        };
        var a = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r(0));
    },
    269: function(e, t, r) {},
    270: function(e, t, r) {},
    271: function(e, t, r) {}
}, [ [ 147, 0, 1, 2, 3 ] ] ]);