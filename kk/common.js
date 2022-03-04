(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 3 ], [ , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(86);
    Object.defineProperty(t, "getDom", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(n).default;
        }
    });
    var o = r(59);
    Object.defineProperty(t, "Jump", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(o).default;
        }
    }), Object.defineProperty(t, "JumpUrl", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(o).default;
        }
    });
    var i = r(9);
    Object.defineProperty(t, "Storage", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(i).default;
        }
    });
    var a = r(87);
    Object.defineProperty(t, "JumpH5", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(a).default;
        }
    });
    var u = r(60);
    Object.defineProperty(t, "setParamsUrl", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(u).default;
        }
    });
    var s = r(88);
    Object.defineProperty(t, "getParamsUrl", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(s).default;
        }
    });
    var c = r(157);
    Object.defineProperty(t, "getSystemInfoSync", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(c).default;
        }
    });
    var l = r(158);
    Object.defineProperty(t, "getStorageSync", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(l).default;
        }
    });
    var f = r(159);
    Object.defineProperty(t, "setStorageSync", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(f).default;
        }
    });
    var p = r(160);
    Object.defineProperty(t, "removeStorageSync", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(p).default;
        }
    });
    var d = r(161);
    Object.defineProperty(t, "Tips", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(d).default;
        }
    });
    var h = r(162);
    Object.defineProperty(t, "Loading", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(h).default;
        }
    });
    var y = r(163);
    Object.defineProperty(t, "navigateBack", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(y).default;
        }
    });
    var g = r(164);
    Object.defineProperty(t, "previewImage", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(g).default;
        }
    });
    var v = r(165);
    Object.defineProperty(t, "showShareMenu", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(v).default;
        }
    });
    var m = r(89);
    Object.defineProperty(t, "feNavigator", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(m).default;
        }
    });
    var b = r(167);
    Object.defineProperty(t, "showToast", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(b).default;
        }
    });
    var _ = r(168);
    Object.defineProperty(t, "showModal", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(_).default;
        }
    });
    var P = r(169);
    Object.defineProperty(t, "makePhoneCall", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(P).default;
        }
    });
    var S = r(170);
    Object.defineProperty(t, "hideHomeButton", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(S).default;
        }
    });
    var A = r(171);
    Object.defineProperty(t, "subscribeMessage", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(A).default;
        }
    });
    var C = r(2);
    Object.defineProperty(t, "getServerTime", {
        enumerable: !0,
        get: function get() {
            return C.getServerTime;
        }
    });
    var T = r(177);
    Object.defineProperty(t, "logManager", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(T).default;
        }
    });
    var O = r(178);
    Object.defineProperty(t, "pageScrollTo", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(O).default;
        }
    });
    var D = r(179);
    Object.defineProperty(t, "copyText", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(D).default;
        }
    });
    var R = r(180);
    Object.defineProperty(t, "getLoginCode", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(R).default;
        }
    });
    var E = r(181);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "scanCode", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(E).default;
        }
    });
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getServerTime = void 0;
    var A = _interopRequireDefault(r(3)), C = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }, T = _interopRequireDefault(r(6)), n = r(9), O = _interopRequireDefault(n), o = _interopRequireDefault(r(61)), D = r(10), R = r(1), i = r(90);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function _asyncToGenerator(e) {
        return function() {
            var a = e.apply(this, arguments);
            return new Promise(function(o, i) {
                return function step(e, t) {
                    try {
                        var r = a[e](t), n = r.value;
                    } catch (e) {
                        return void i(e);
                    }
                    if (!r.done) return Promise.resolve(n).then(function(e) {
                        step("next", e);
                    }, function(e) {
                        step("throw", e);
                    });
                    o(n);
                }("next");
            });
        };
    }
    var E = "10005", I = "https://wxapp.feng1.com", M = void 0, w = 0, a = null, N = function updateStorageDeadTime() {
        clearTimeout(a), a = setTimeout(function() {
            var e = String(Date.parse(new Date()) / 1e3 + 3600);
            O.default.get(D.STORAGE_USER_INFO) && T.default.setStorageSync(D.STORAGE_USER_INFO + n.deadtime, e), 
            O.default.get(D.TOKEN_KEY) && T.default.setStorageSync(D.TOKEN_KEY + n.deadtime, e);
        }, 1e3);
    };
    function Fetch(e) {
        var i = this, a = e.url, t = e.params, u = void 0 === t ? {} : t, r = e.method, n = void 0 === r ? "GET" : r, o = e.Feng1Header, s = void 0 === o ? {} : o, c = e.failedMsg, l = e.showLoading, f = void 0 !== l && l, p = e.header, d = void 0 === p ? {} : p, h = e.checkResult, y = void 0 === h || h, g = e.showToast, v = void 0 === g || g;
        void 0 !== c && (v = c);
        var m = C({
            apiver: "12",
            appver: "12",
            ostype: 1,
            osuuid: "123",
            usertype: 1
        }, s);
        m.token = O.default.get(D.TOKEN_KEY) || "";
        var b = {
            "Feng1-Head": JSON.stringify(m)
        }, _ = Object.assign({}, d, b);
        f && T.default.showLoading({
            title: "加载中"
        });
        var P, S = -1 < a.indexOf("http") ? a : I + a;
        return T.default.request({
            url: S,
            method: n,
            data: u,
            header: _
        }).then((P = _asyncToGenerator(A.default.mark(function _callee(t) {
            var r, n, o;
            return A.default.wrap(function _callee$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (console.log("Request:", a, u), console.log("Response:", t.data), N(), M = t.currentTimeMillis || Date.now(), 
                    w = M - Date.now(), f && T.default.hideLoading(), r = t.data, n = r.success, o = r.data, 
                    !n && y) return e.abrupt("return", Promise.reject(t.data));
                    e.next = 9;
                    break;

                  case 9:
                    if (void 0 === o && y) return e.abrupt("return", Promise.resolve(!1));
                    e.next = 11;
                    break;

                  case 11:
                    return e.abrupt("return", y ? o : t.data);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, _callee, i);
        })), function(e) {
            return P.apply(this, arguments);
        })).catch(function(e) {
            R.logManager.error({
                type: "request failed",
                url: a,
                error: JSON.stringify(e)
            });
            var t;
            if (t = e.code === E ? "登录失效" : e.msg || e.message, e.code != E) return f && T.default.hideLoading(), 
            v && t && T.default.showToast({
                title: t,
                icon: "none"
            }), Promise.reject(C({
                message: t
            }, e));
            T.default.removeStorageSync(D.TOKEN_KEY), T.default.removeStorageSync(D.STORAGE_USER_INFO);
            var r = T.default.getCurrentPages(), n = r[r.length - 1];
            return setTimeout(function() {
                n.$component.initAuth();
            }, 100), Promise.reject(e);
        });
    }
    t.default = {
        get: function get(e, t, r) {
            return o.default[e] && -1 === e.indexOf("/") && (e = (0, i.transformUrlByRisk)(e), 
            e = o.default[e]), Fetch(C({
                url: e,
                method: "GET",
                params: t
            }, r));
        },
        post: function post(e, t, r) {
            return o.default[e] && -1 === e.indexOf("/") && (e = (0, i.transformUrlByRisk)(e), 
            e = o.default[e]), Fetch(C({
                url: e,
                method: "POST",
                params: t
            }, r));
        },
        pureGet: function pureGet(r, n) {
            var t, e = this, o = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).showLoading, i = void 0 !== o && o;
            return i && T.default.showLoading({
                title: "加载中"
            }), T.default.request({
                url: r,
                method: "GET",
                data: n
            }).then((t = _asyncToGenerator(A.default.mark(function _callee2(t) {
                return A.default.wrap(function _callee2$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log("Request:", r, n), console.log("Response:", t.data), i && T.default.hideLoading(), 
                        e.abrupt("return", t.data);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, _callee2, e);
            })), function(e) {
                return t.apply(this, arguments);
            })).catch(function(e) {
                return i && T.default.hideLoading(), Promise.reject(e);
            });
        },
        getAppDicName: function getAppDicName(e) {
            return Fetch({
                url: "/wxapp/dictionary/itemByType",
                method: "GET",
                params: {
                    code: e
                }
            });
        }
    };
    t.getServerTime = function getServerTime() {
        return Date.now() + w;
    };
}, , function(e, t, r) {
    "use strict";
    function add(e, t) {
        var r, n, o = void 0, i = void 0;
        try {
            o = e.toString().split(".")[1].length;
        } catch (e) {
            o = 0;
        }
        try {
            i = t.toString().split(".")[1].length;
        } catch (e) {
            i = 0;
        }
        if (n = Math.abs(o - i), r = Math.pow(10, Math.max(o, i)), 0 < n) {
            var a = Math.pow(10, n);
            t = i < o ? (e = Number(e.toString().replace(".", "")), Number(t.toString().replace(".", "")) * a) : (e = Number(e.toString().replace(".", "")) * a, 
            Number(t.toString().replace(".", "")));
        } else e = Number(e.toString().replace(".", "")), t = Number(t.toString().replace(".", ""));
        return (e + t) / r;
    }
    function sub(e, t) {
        var r, n = void 0, o = void 0;
        try {
            n = e.toString().split(".")[1].length;
        } catch (e) {
            n = 0;
        }
        try {
            o = t.toString().split(".")[1].length;
        } catch (e) {
            o = 0;
        }
        return r = Math.pow(10, Math.max(n, o)), Number(((e * r - t * r) / r).toFixed(o <= n ? n : o));
    }
    function mul(e, t) {
        if (null == e || null == t) throw TypeError("calculate mul args should not be undefined");
        var r = 0, n = e.toString(), o = t.toString();
        try {
            r += n.split(".")[1].length;
        } catch (e) {}
        try {
            r += o.split(".")[1].length;
        } catch (e) {}
        return Number(n.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, r);
    }
    function div(e, t) {
        var r = 0, n = 0;
        try {
            r = e.toString().split(".")[1].length;
        } catch (e) {}
        try {
            n = t.toString().split(".")[1].length;
        } catch (e) {}
        return Number(e.toString().replace(".", "")) / Number(t.toString().replace(".", "")) * Math.pow(10, n - r);
    }
    function round(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2;
        return div(Math.round(mul(e, Math.pow(10, t))), Math.pow(10, t));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.add = add, t.sub = sub, t.mul = mul, t.div = div, t.round = round, t.default = {
        add: add,
        sub: sub,
        mul: mul,
        div: div,
        round: round
    };
}, , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.useRef = t.useCallback = t.useMemo = t.useState = t.useEffect = t.Component = t.Storage = t.JumpUrl = t.getDom = void 0;
    var n = r(86);
    Object.defineProperty(t, "getDom", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(n).default;
        }
    });
    var o = r(59);
    Object.defineProperty(t, "JumpUrl", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(o).default;
        }
    });
    var i = r(9);
    Object.defineProperty(t, "Storage", {
        enumerable: !0,
        get: function get() {
            return _interopRequireDefault(i).default;
        }
    });
    var a = r(0), u = _interopRequireDefault(a);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.Component = a.PureComponent, t.useEffect = u.default.useEffect, t.useState = u.default.useState, 
    t.useMemo = u.default.useMemo, t.useCallback = u.default.useCallback, t.useRef = u.default.useRef;
    t.default = u.default;
}, , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = t.BusinessType = void 0;
    (n = o || (t.BusinessType = o = {}))[n.Seckill = 1] = "Seckill", n[n.DiscountPromotion = 2] = "DiscountPromotion", 
    n[n.OnSale = 3] = "OnSale", n[n.CombinedSales = 4] = "CombinedSales", n[n.FullPieceDiscount = 5] = "FullPieceDiscount", 
    n[n.FullPieceReduction = 6] = "FullPieceReduction", n[n.IncreasePurchase = 7] = "IncreasePurchase", 
    n[n.ManyCountManyYuan = 11] = "ManyCountManyYuan", n[n.NewCombinedSales = 14] = "NewCombinedSales", 
    n[n.SecondDiscount = 16] = "SecondDiscount";
    var i, a = t.CurrentCouponStatus = void 0;
    (i = a || (t.CurrentCouponStatus = a = {}))[i.Satisfy = 0] = "Satisfy", i[i.Unsatisfied = 1] = "Unsatisfied", 
    i[i.Dissatisfaction = 2] = "Dissatisfaction";
    var u, s = t.OperatingStatus = void 0;
    (u = s || (t.OperatingStatus = s = {}))[u.NORMAL = 1] = "NORMAL", u[u.REST = 2] = "REST", 
    u[u.CLOSED = 3] = "CLOSED";
    var c, l = t.CounterStatus = void 0;
    (c = l || (t.CounterStatus = l = {}))[c.NORMAL = 0] = "NORMAL", c[c.OPENING = 1] = "OPENING", 
    c[c.OPENED = 2] = "OPENED", c[c.ERROR = 3] = "ERROR", c[c.HAS_PAYING_ORDER = 4] = "HAS_PAYING_ORDER", 
    c[c.PAY_FAILED = 5] = "PAY_FAILED", c[c.CLOSE_SUCCESS = 6] = "CLOSE_SUCCESS", c[c.NEXT_VISIT = 7] = "NEXT_VISIT", 
    c[c.LOCKED = 8] = "LOCKED";
    var f, p = t.ShelfType = void 0;
    (f = p || (t.ShelfType = p = {}))[f.FOUR_FLOOR_STANTARD = 1] = "FOUR_FLOOR_STANTARD", 
    f[f.FRIDGE = 2] = "FRIDGE", f[f.PREVENT_MOUSE = 3] = "PREVENT_MOUSE", f[f.VIRTUAL_SHELF = 4] = "VIRTUAL_SHELF", 
    f[f.FREEZER = 5] = "FREEZER", f[f.COUNTER = 6] = "COUNTER", f[f.AUTO_SALE_MACHINET = 7] = "AUTO_SALE_MACHINET", 
    f[f.CAMPUST = 8] = "CAMPUST", f[f.PREWAREHOUSE = 9] = "PREWAREHOUSE";
    var d, h = t.CouponType = void 0;
    (d = h || (t.CouponType = h = {}))[d.category = 5] = "category", d[d.product = 6] = "product", 
    d[d.newProduct = 7] = "newProduct";
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.deadtime = void 0;
    var a = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
    var u = t.deadtime = "_deadtime";
    t.default = {
        add: function add() {},
        set: function set(e, t, r) {
            var n = 2 < arguments.length && void 0 !== r ? r : 3600;
            a.default.setStorageSync(e, t);
            var o = parseInt(String(n));
            if (0 < o) {
                var i = Date.parse(new Date());
                i = i / 1e3 + o, a.default.setStorageSync(e + u, i + "");
            } else a.default.removeStorageSync(e + u);
        },
        setLocal: function setLocal(e, t) {
            a.default.setStorageSync(e, t);
        },
        get: function get(e, t) {
            var r = parseInt(a.default.getStorageSync(e + u));
            if (r && parseInt(r) < Date.parse(new Date()) / 1e3) return t || void 0;
            var n = a.default.getStorageSync(e);
            return n || t;
        },
        remove: function remove(e) {
            a.default.removeStorageSync(e), a.default.removeStorageSync(e + u);
        },
        clear: function clear() {
            a.default.clearStorageSync();
        }
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.TOKEN_KEY = "token", t.STORAGE_USER_INFO = "@FEZS_USER_INFO", t.UPDATE_CITY = "UPDATE_CITY", 
    t.SET_USER_INFO = "SET_USER_INFO", t.SAVE_AUTH_USER_INFO = "SAVE_AUTH_USER_INFO", 
    t.SET_AUTH_LACTION = "SET_AUTH_LACTION", t.STORAGE_CITY_INFO = "STORAGE_CITY_INFO", 
    t.STORAGE_ADDRESS_ID = "ADDRESS_ID";
    var n = t.MACHINE_SHELF_MAX_CART_ITEM_COUNT = 4;
    t.MACHINE_SHELF_MAX_CART_ITEM_COUNT_TIPS = "一次最多只能购买" + n + "个商品", t.USER_TASK_STORAGE_KEY = "userTaskStorageKEY";
}, , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function createContainer(t) {
        var r = defaultMapStateToProps, n = defaultMapDispatchToProps;
        t && (r = function curMapStateToProps(e) {
            return {
                $store: e.store,
                $cart: t.$cart ? (0, p.default)(e.cart, t.$cart) : e.cart,
                $shelf: e.shelf,
                $app: e.app,
                $user: e.user
            };
        });
        return function connectAppScreen(e) {
            return e = (0, f.default)(e), (0, o.connect)(r, n)(e);
        };
    };
    var o = r(58), n = r(38), i = _interopRequireWildcard(r(108)), a = _interopRequireWildcard(r(73)), u = _interopRequireWildcard(r(49)), s = _interopRequireWildcard(r(72)), c = _interopRequireWildcard(r(109)), l = _interopRequireWildcard(r(110)), f = _interopRequireDefault(r(111)), p = (_interopRequireDefault(r(279)), 
    _interopRequireDefault(r(97)));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
    }
    function defaultMapStateToProps(e) {
        return {
            $store: e.store,
            $cart: e.cart,
            $shelf: e.shelf,
            $app: e.app,
            $user: e.user,
            $log: e.log
        };
    }
    function defaultMapDispatchToProps(e) {
        return {
            actions: {
                $store: (0, n.bindActionCreators)(Object.assign({}, i), e),
                $cart: (0, n.bindActionCreators)(Object.assign({}, a), e),
                $shelf: (0, n.bindActionCreators)(Object.assign({}, u), e),
                $user: (0, n.bindActionCreators)(Object.assign({}, c), e),
                $app: (0, n.bindActionCreators)(Object.assign({}, s), e),
                $log: (0, n.bindActionCreators)(Object.assign({}, l), e)
            }
        };
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        home: "/pages/index/index",
        cart: "/pages/cart/index",
        personal: "/packageA/pages/user/index",
        userInfo: "/packageA/pages/userInfo/index",
        location: "/packageA/pages/location/index",
        city: "/packageA/pages/city/index",
        shelfInformation: "/pages/user/index",
        confirmPay: "/pages/confirmPay/index",
        memberBenefits: "/personal/memberBenefits/index.html",
        ecbVerifyPhone: "/pages/ecb/verifyPhone/index",
        ecbSignInfo: "/packageA/pages/signInfo/index",
        ecbSignTerms: "/packageA/pages/signTerms/index",
        discountCardRule: "/counter/pages/discountCardRule/index"
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.REGISTER_MODAL_ID = "REGISTER_MODAL_ID", t.COUPON_MODAL_ID = "COUPON_MODAL_ID", 
    t.AD14_MODAL_ID = "AD14_MODAL_ID", t.RECOMMEND_PRODUCT_MODAL_ID = "RECOMMEND_PRODUCT_MODAL_ID", 
    t.STEAL_MODAL_ID = "STEAL_MODAL_ID", t.MERGE_MODAL_ID = "MERGE_MODAL_ID", t.SHELF_BIND_MODAL_ID = "SHELF_BIND_MODAL_ID", 
    t.DINE_AND_DASH_MODAL_ID = "DINE_AND_DASH_MODAL_ID", t.PRIVACY_POLICY_MODAL_ID = "PRIVACY_POLICY_MODAL_ID";
}, , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    function ke(e, t, r) {
        null === e && (e = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(e, t);
        if (void 0 === n) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : ke(o, t, r);
        }
        if ("value" in n) return n.value;
        var i = n.get;
        return void 0 !== i ? i.call(r) : void 0;
    }
    t.default = function PageHOC(e) {
        return function() {
            function Page() {
                return function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, Page), function _possibleConstructorReturn(e, t) {
                    if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
            }
            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(Page, e), n(Page, [ {
                key: "componentDidShow",
                value: function componentDidShow() {
                    var e = o.Storage.get("_updateParams");
                    return e && ke(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), "onNeedUpdate", this) && (o.Storage.remove("_updateParams"), 
                    ke(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), "onNeedUpdate", this).call(this, e)), 
                    ke(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), "componentDidShow", this) && ke(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), "componentDidShow", this).call(this);
                }
            }, {
                key: "componentWillMount",
                value: function componentWillMount() {
                    return ke(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), "componentWillMount", this) && ke(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), "componentWillMount", this).call(this);
                }
            }, {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    return ke(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), "componentWillUnmount", this) && ke(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), "componentWillUnmount", this).call(this);
                }
            }, {
                key: "componentDidHide",
                value: function componentDidHide() {
                    return ke(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), "componentDidHide", this) && ke(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), "componentDidHide", this).call(this);
                }
            }, {
                key: "notifyPrevPageUpdate",
                value: function notifyPrevPageUpdate(e) {
                    o.Storage.set("_updateParams", e || {});
                }
            } ]), Page;
        }();
    };
    var o = r(1);
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function createContainer() {
        var t = defaultMapStateToProps, r = defaultMapDispatchToProps;
        return function connectAppScreen(e) {
            return e = (0, f.default)(e), (0, n.connect)(t, r)(e);
        };
    };
    var n = r(58), o = r(38), i = _interopRequireWildcard(r(108)), a = _interopRequireWildcard(r(73)), u = _interopRequireWildcard(r(49)), s = _interopRequireWildcard(r(72)), c = _interopRequireWildcard(r(109)), l = _interopRequireWildcard(r(110)), f = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(111));
    function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
    }
    function defaultMapStateToProps(e) {
        return {
            $store: e.store,
            $cart: e.cart,
            $shelf: e.shelf,
            $app: e.app,
            $user: e.user,
            $log: e.log || {}
        };
    }
    function defaultMapDispatchToProps(e) {
        return {
            actions: {
                $store: (0, o.bindActionCreators)(Object.assign({}, i), e),
                $cart: (0, o.bindActionCreators)(Object.assign({}, a), e),
                $shelf: (0, o.bindActionCreators)(Object.assign({}, u), e),
                $user: (0, o.bindActionCreators)(Object.assign({}, c), e),
                $app: (0, o.bindActionCreators)(Object.assign({}, s), e),
                $log: (0, o.bindActionCreators)(Object.assign({}, l), e)
            }
        };
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    function of(e, t, r) {
        null === e && (e = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(e, t);
        if (void 0 === n) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : of(o, t, r);
        }
        if ("value" in n) return n.value;
        var i = n.get;
        return void 0 !== i ? i.call(r) : void 0;
    }
    t.default = function(e) {
        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(CommonPageHOC, e), n(CommonPageHOC, [ {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(e) {
                return of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentWillReceiveProps", this) && of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentWillReceiveProps", this).call(this, e);
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                return o.default.loggingIn = !0, of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentWillMount", this) && of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentWillMount", this).call(this);
            }
        }, {
            key: "componentDidShow",
            value: function componentDidShow() {
                return o.default.loggingIn = !0, o.default.log && o.default.log.init(this), of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentDidShow", this) && of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentDidShow", this).call(this);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                return of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentDidMount", this) && of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentDidMount", this).call(this);
            }
        }, {
            key: "componentDidHide",
            value: function componentDidHide() {
                return o.default.log && (o.default.log.clearPageInitTimer(), o.default.loggingIn && (o.default.loggingIn = !1, 
                o.default.log.signOut()), o.default.log.resetData()), of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentDidHide", this) && of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentDidHide", this).call(this);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                return o.default.log && (o.default.log.clearPageInitTimer(), o.default.loggingIn && (o.default.loggingIn = !1, 
                o.default.log.signOut()), o.default.log.resetData()), of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentWillUnmount", this) && of(CommonPageHOC.prototype.__proto__ || Object.getPrototypeOf(CommonPageHOC.prototype), "componentWillUnmount", this).call(this);
            }
        } ]), CommonPageHOC;
        function CommonPageHOC() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, CommonPageHOC), function _possibleConstructorReturn(e, t) {
                if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(this, (CommonPageHOC.__proto__ || Object.getPrototypeOf(CommonPageHOC)).apply(this, arguments));
        }
    };
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(0));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.isWeixin = function isWeixin() {
        return !0;
    }, t.isH5Weixin = function isH5Weixin() {
        return !1;
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = t.SubscribeMessageTemplateName = void 0;
    (n = o || (t.SubscribeMessageTemplateName = o = {}))[n.COUPON = 0] = "COUPON", n[n.ACTIVITY = 1] = "ACTIVITY", 
    n[n.COUNTER_ORDER_STATUS = 2] = "COUNTER_ORDER_STATUS";
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.SET_SHELF = "SET_SHELF", t.SET_SHELF_CODE = "SET_SHELF_CODE", t.SET_PRODUCT = "SET_PRODUCT", 
    t.SET_STORE_DETAIL = "SET_STORE_DETAIL", t.SET_SHELF_FREIGHT_CONFIG = "SET_SHELF_FREIGHT_CONFIG", 
    t.SET_PRODUCT_LIST = "SET_PRODUCT_LIST", t.SET_PRODUCT_ACTIVITY = "SET_PRODUCT_ACTIVITY", 
    t.SET_ADV_LIST = "SET_ADV_LIST", t.SET_RECOMMEND_PRODUCT = "SET_RECOMMEND_PRODUCT", 
    t.SET_RECOMMEND_PRODUCT_DATA = "SET_RECOMMEND_PRODUCT_DATA", t.SET_HOME_CONFIG = "SET_HOME_CONFIG", 
    t.SET_STORE_CONFIG = "SET_STORE_CONFIG", t.SET_COUPON_LIST = "SET_COUPON_LIST", 
    t.SET_USER_COUPON_RECORD = "SET_USER_COUPON_RECORD", t.SET_COUPON_RECEVIED_STATUS = "SET_COUPON_RECEVIED_STATUS", 
    t.SET_AUTO_RECEIVE_COUPON = "SET_AUTO_RECEIVE_COUPON", t.PROCESS_COUPON_DATA = "PROCESS_COUPON_DATA", 
    t.ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART", t.CHANGE_CART_PRODUCT_NUMBER = "CHANGE_CART_PRODUCT_NUMBER", 
    t.REDUCE_CART_PRODUCT = "REDUCE_CART_PRODUCT", t.CLEAR_CART = "CLEAR_CART", t.CALCULATE_CART_TOTAL_PRICE = "CALCULATE_CART_TOTAL_PRICE", 
    t.GENERATE_CART_PRODUCT_MAP = "GENERATE_CART_PRODUCT_MAP", t.UPDATE_CART_DATA_FROM_STORAGE = "UPDATE_CART_DATA_FROM_STORAGE", 
    t.CLEAR_TOAST = "CLEAR_TOAST", t.GET_DISCOUNT_INFO = "GET_DISCOUNT_INFO", t.CART_DATA_PROCESS = "CART_DATA_PROCESS", 
    t.TOGGLE_USED_FULL_ORDER_DISCOUNT = "TOGGLE_USED_FULL_ORDER_DISCOUNT", t.TOGGLE_SELECT_CART_ITEM = "TOGGLE_SELECT_CART_ITEM", 
    t.TOGGLE_SELECT_ALL_CART_ITEM = "TOGGLE_SELECT_ALL_CART_ITEM", t.SHOW_DIALOG = "SHOW_DIALOG", 
    t.DISMISS_DIALOG = "DISMISS_DIALOG", t.CHANGE_PAGE_STATUS = "CHANGE_PAGE_STATUS", 
    t.SET_IS_IPHONE_X = "SET_IS_IPHONE_X", t.SELECT_COUPON = "SELECT_COUPON", t.SELECT_ADDRESS = "SELECT_ADDRESS", 
    t.REMOVE_SELECT_CART_ITEM = "REMOVE_SELECT_CART_ITEM", t.COMBINE_OLD_CART_DATA = "COMBINE_OLD_CART_DATA", 
    t.RESET_STORE = "RESET_STORE", t.ADD_PRODUCT_TO_STORE = "ADD_PRODUCT_TO_STORE", 
    t.RESET_COUPON = "RESET_COUPON", t.SET_TOAST = "SET_TOAST", t.SET_CUSTOM_LABEL = "SET_CUSTOM_LABEL", 
    t.FETCH_CUSTOM_LABEL = "FETCH_CUSTOM_LABEL", t.SET_MODAL_RULE_SORT = "SET_MODAL_RULE_SORT", 
    t.SET_PERSONAL_UNREAD = "SET_PERSONAL_UNREAD", t.SET_DISCOUNT_CARD_INFO = "SET_DISCOUNT_CARD_INFO", 
    t.SET_SHELF_BRAND = "SET_SHELF_BRAND";
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.generateProductGroupListByCounter = t.generatePayData = t.priceCalculateAndGetRuleData = t.generateProductGroupList = t.originPriceCalculate = t.priceCalculate = t.mainDataProcess = void 0;
    var n = r(41);
    Object.keys(n).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function get() {
                return n[e];
            }
        });
    });
    var o = r(95);
    Object.keys(o).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function get() {
                return o[e];
            }
        });
    });
    var i = r(96);
    Object.keys(i).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function get() {
                return i[e];
            }
        });
    });
    var a = r(104);
    Object.keys(a).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function get() {
                return a[e];
            }
        });
    });
    var u = _interopRequireDefault(o), s = _interopRequireDefault(r(93)), c = r(249), l = r(260), f = r(261);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.mainDataProcess = u.default, t.priceCalculate = c.priceCalculate, t.originPriceCalculate = c.originPriceCalculate, 
    t.generateProductGroupList = l.generateProductGroupList, t.priceCalculateAndGetRuleData = c.priceCalculateAndGetRuleData, 
    t.generatePayData = s.default, t.generateProductGroupListByCounter = f.generateProductGroupList;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var n = (function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    }(BasePriceRule, [ {
        key: "getFilterCartProductList",
        value: function getFilterCartProductList(e) {
            var n = this, o = [], i = [];
            return e.forEach(function(e) {
                var t = !0, r = e.product.activity;
                r && (t = r.isInActivityPeriod || n.isNormalPriceRule()), t && n.filterCartProduct(e) ? o.push(e) : i.push(e);
            }), {
                satisfyList: o,
                unsatisfyList: i
            };
        }
    }, {
        key: "generateRestCartProduct",
        value: function generateRestCartProduct(e, t) {
            var r = o({}, e);
            return r.quantity = t, r;
        }
    }, {
        key: "recordMeetConditionCartProduct",
        value: function recordMeetConditionCartProduct(e, t, r) {
            if (!(t <= 0)) {
                var n = o({}, e);
                n.quantity = t, n.activityItem = r, this.meetConditionCartProductList.push(n);
            }
        }
    }, {
        key: "isNormalPriceRule",
        value: function isNormalPriceRule() {
            return !1;
        }
    } ]), BasePriceRule);
    function BasePriceRule() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, BasePriceRule), this.cartProductList = [], this.prevRuleList = [], this.meetConditionCartProductList = [], 
        this.calculateResult = {
            total: 0,
            notMeetConditionCartProductList: [],
            restTotal: 0
        }, this.name = "", this.sortValue = 0;
    }
    t.default = n;
}, , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function getApiPath(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "customer", r = e;
        if (-1 === r.indexOf("http")) r = (o[t] || "") + ("/" !== r.substr(0, 1) ? "/" : "") + r; else if (i[t]) {
            var n = a();
            r = n + i[t] + ("/" === r.substr(0, 1) ? r.substr(1) : r);
        }
        return r;
    };
    var o = {
        customer: "https://wxapp.feng1.com/wxapp",
        mall: "https://m.feng1.com/api/mall"
    }, i = {
        customer: "/wxapp/",
        mall: "/mall/api/",
        manager: "/wxadmin/",
        bssp: "/bssp/api/",
        scm: "/scm/api/",
        bas: "/bas/api/",
        oms: "/oms/api/",
        boms: "/boms/api/",
        bmall: "/bssp/mapi/"
    }, a = function getHost() {
        return "";
    };
}, , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.REGISTER_MODAL_ID = "REGISTER_MODAL_ID", t.COUPON_MODAL_ID = "COUPON_MODAL_ID", 
    t.AD14_MODAL_ID = "AD14_MODAL_ID", t.RECOMMEND_PRODUCT_MODAL_ID = "RECOMMEND_PRODUCT_MODAL_ID", 
    t.STEAL_MODAL_ID = "STEAL_MODAL_ID", t.MERGE_MODAL_ID = "MERGE_MODAL_ID", t.SHELF_BIND_MODAL_ID = "SHELF_BIND_MODAL_ID", 
    t.DINE_AND_DASH_MODAL_ID = "DINE_AND_DASH_MODAL_ID", t.PRIVACY_POLICY_MODAL_ID = "PRIVACY_POLICY_MODAL_ID";
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        home: "/counter/pages/index/index",
        paySuccess: "/pages/paySuccess/index",
        discountCardList: "/counter/pages/discountCardList/index",
        discountCardRule: "/counter/pages/discountCardRule/index",
        payScore: "/counter/pages/payScore/index",
        agreement: "/counter/pages/agreement/index"
    };
}, , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function couponProcess(e, t) {
        if (!e || 0 === e.length) return;
        var a = {}, u = {}, s = {
            list: [],
            total: 0
        }, c = {
            list: [],
            total: 0
        }, r = {
            typeMap: a,
            productMap: u,
            normal: s,
            newProduct: c
        };
        t.forEach(function(e) {
            var t = e.productId, r = e.quantity, n = e.product, o = n.salePrice, i = n.typeId;
            e.selected && (i && (a[i] || (a[i] = {
                list: [],
                total: 0
            }), a[i].list.push(e), a[i].total += r * o), u[t] = {
                list: [ e ],
                total: r * o
            }, s.list.push(e), s.total += r * o, e.product.isNewProduct && (c.list.push(e), 
            c.total += r * o));
        }), e.forEach(function(e) {
            var t = function getSatisfyInfo(e, t) {
                var r = {
                    isSatisfy: 0 < t.normal.list.length,
                    total: t.normal.total,
                    list: t.normal.list
                }, n = Number(e.couponType);
                if (e.couponTimeSlot) {
                    var o = e.couponTimeSlot, i = o.st, a = o.et, u = e.diffTime, s = void 0 === u ? 0 : u, c = new Date().getTime() + s;
                    try {
                        var l = (0, _.default)(i, "HH:mm").toDate(), f = (0, _.default)(a, "HH:mm").toDate();
                        if (!(c >= l.getTime() && c <= f.getTime())) return r.isSatisfy = !1, r;
                    } catch (e) {}
                }
                if (2 == e.whetherDay) {
                    var p = e.diffTime, d = void 0 === p ? 0 : p, h = e.validStartTime;
                    if (new Date().getTime() + d < h) return r.isSatisfy = !1, r;
                }
                if (n === b.type) {
                    var y = 0, g = [];
                    ((e.typeIds ? e.typeIds : [ e.typeId ]) || []).forEach(function(e) {
                        t.typeMap[e] && (y += t.typeMap[e].total, g = g.concat(t.typeMap[e].list));
                    }), r.isSatisfy = 0 < g.length, r.total = y, r.list = g;
                }
                if (n === b.product) {
                    var v = 0, m = [];
                    ((e.productIds ? e.productIds : [ e.productId ]) || []).forEach(function(e) {
                        t.productMap[e] && (v += t.productMap[e].total, m = m.concat(t.productMap[e].list));
                    }), r.isSatisfy = 0 < m.length, r.total = v, r.list = m;
                }
                n === b.newProduct && (r.isSatisfy = 0 < t.newProduct.list.length, r.total = t.newProduct.total, 
                r.list = t.newProduct.list);
                return r;
            }(e, r);
            t.isSatisfy ? (e.currentCouponStatus = o.CurrentCouponStatus.Satisfy, e.needToSatisfyAmount = 0) : e.currentCouponStatus = o.CurrentCouponStatus.Dissatisfaction, 
            t.total < e.orderAmount && e.currentCouponStatus !== o.CurrentCouponStatus.Dissatisfaction && (e.currentCouponStatus = o.CurrentCouponStatus.Unsatisfied, 
            e.needToSatisfyAmount = (0, f.round)((0, f.sub)(e.orderAmount, t.total))), e.currentCouponStatus !== o.CurrentCouponStatus.Satisfy && e.currentCouponStatus !== o.CurrentCouponStatus.Unsatisfied || (e.preferentialAmount = function calculateCouponPreferentialAmount(e, t) {
                var r = t.total, n = Number(e.discountType), o = 0;
                if (1 === n) o = Math.min(r, e.price); else if (2 === n) {
                    var i = e.discount, a = e.discountLimit, u = e.discountAmountMax, s = i / 10;
                    if (a) {
                        var c = t.list.sort(function(e, t) {
                            return t.product.salePrice - e.product.salePrice;
                        }), l = a;
                        c.forEach(function(e) {
                            if (0 !== l) {
                                var t = e.quantity, r = 0;
                                r = t <= l ? (l -= t, t) : l, o += e.product.salePrice * r * (1 - s);
                            }
                        });
                    } else o = r * (1 - s);
                    u && (o = Math.min(o, u));
                }
                return (0, f.round)(o);
            }(e, t));
        });
    };
    var b, n, o = r(8), f = r(4), _ = _interopRequireDefault(r(11)), i = _interopRequireDefault(r(40));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    _.default.extend(i.default), (n = b = b || {})[n.type = 5] = "type", n[n.product = 6] = "product", 
    n[n.newProduct = 7] = "newProduct";
}, , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isExceededExchangeNumber = t.isExceededMachineShelfNumber = t.isExceededPurchasesNumber = t.convertCartDataToOldVersion = t.getProductListFromIDList = t.getFullOrderDiscountInfo = t.getRecommendProduct = t.getGatheringProduct = t.getCartTips = t.groupCart = t.getCartExchangeInfo = void 0;
    var n = _interopRequireDefault(r(182)), o = _interopRequireDefault(r(183)), i = _interopRequireDefault(r(91)), a = _interopRequireDefault(r(196)), u = _interopRequireDefault(r(197)), s = _interopRequireDefault(r(198)), c = _interopRequireDefault(r(92)), l = _interopRequireDefault(r(199)), f = _interopRequireDefault(r(94)), p = _interopRequireDefault(r(200)), d = _interopRequireDefault(r(201));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.getCartExchangeInfo = n.default, t.groupCart = o.default, t.getCartTips = i.default, 
    t.getGatheringProduct = a.default, t.getRecommendProduct = u.default, t.getFullOrderDiscountInfo = s.default, 
    t.getProductListFromIDList = c.default, t.convertCartDataToOldVersion = l.default, 
    t.isExceededPurchasesNumber = f.default, t.isExceededMachineShelfNumber = p.default, 
    t.isExceededExchangeNumber = d.default;
}, , , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(264));
    function Storage() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, Storage), this.$cart = new o.default(), this.currentConfig = null, this.keyPrefix = "";
    }
    var i = new (n(Storage, [ {
        key: "config",
        value: function config(e) {
            this.currentConfig ? this.currentConfig = Object.assign(this.currentConfig, e) : this.currentConfig = e, 
            this.$cart.setConfig(this.currentConfig);
        }
    } ]), Storage)();
    t.default = i;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setShelfFreightConfig = t.setShelfCode = t.setShelf = void 0;
    var n = function _interopRequireWildcard(e) {
        {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t;
        }
    }(r(22));
    t.setShelf = function setShelf(e, t) {
        return {
            type: n.SET_SHELF,
            payload: {
                shelf: e,
                shelfFreightConfig: t
            }
        };
    }, t.setShelfCode = function setShelfCode(e) {
        return {
            type: n.SET_SHELF_CODE,
            payload: e
        };
    }, t.setShelfFreightConfig = function setShelfFreightConfig(e) {
        return {
            type: n.SET_SHELF_FREIGHT_CONFIG,
            payload: e
        };
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    t.shallowEqual = function shallowEqual(e, t, r, n) {
        var o = r ? r.call(n, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ("object" !== (void 0 === e ? "undefined" : p(e)) || !e || "object" !== (void 0 === t ? "undefined" : p(t)) || !t) return !1;
        var i = Object.keys(e), a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (var u = Object.prototype.hasOwnProperty.bind(t), s = 0; s < i.length; s++) {
            var c = i[s];
            if (!u(c)) return !1;
            var l = e[c], f = t[c];
            if (!1 === (o = r ? r.call(n, l, f, c) : void 0) || void 0 === o && l !== f) return !1;
        }
        return !0;
    };
    t.getAdvPosition = function getAdvPosition(e, t) {
        var r = [];
        return e && e.some ? (e.some(function(e) {
            return e.advertionPositionName == t && (r = e.advertionList, !0);
        }), r) : [];
    }, t.setRequestUrl = function setRequestUrl(e, t, r) {
        if ("object" !== (void 0 === t ? "undefined" : p(t))) return e;
        var n = e.split("#");
        e = n[0];
        var o = n[1] ? "#" + n[1] : "", i = [];
        for (var a in t) {
            var u = new RegExp(a + "=([^&]*)&?");
            e = e.replace(u, "");
            var s = r && r.encode ? encodeURIComponent(t[a]) : t[a];
            i.push(a + "=" + s);
        }
        return e.match("[\\?]") ? (e + "&" + i.join("&")).replace("?&", "?") + o : e + "?" + i.join("&") + o;
    };
}, , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    function ul(e, t, r) {
        null === e && (e = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(e, t);
        if (void 0 === n) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : ul(o, t, r);
        }
        if ("value" in n) return n.value;
        var i = n.get;
        return void 0 !== i ? i.call(r) : void 0;
    }
    t.default = function(e) {
        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(RouterHOC, e), n(RouterHOC, [ {
            key: "componentWillMount",
            value: function componentWillMount() {
                ul(RouterHOC.prototype.__proto__ || Object.getPrototypeOf(RouterHOC.prototype), "componentWillMount", this) && ul(RouterHOC.prototype.__proto__ || Object.getPrototypeOf(RouterHOC.prototype), "componentWillMount", this).call(this);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                return ul(RouterHOC.prototype.__proto__ || Object.getPrototypeOf(RouterHOC.prototype), "componentWillUnmount", this) && ul(RouterHOC.prototype.__proto__ || Object.getPrototypeOf(RouterHOC.prototype), "componentWillUnmount", this).call(this);
            }
        }, {
            key: "componentDidHide",
            value: function componentDidHide() {
                return ul(RouterHOC.prototype.__proto__ || Object.getPrototypeOf(RouterHOC.prototype), "componentDidHide", this) && ul(RouterHOC.prototype.__proto__ || Object.getPrototypeOf(RouterHOC.prototype), "componentDidHide", this).call(this);
            }
        } ]), RouterHOC;
        function RouterHOC() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, RouterHOC), function _possibleConstructorReturn(e, t) {
                if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(this, (RouterHOC.__proto__ || Object.getPrototypeOf(RouterHOC)).apply(this, arguments));
        }
    };
}, , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    };
    t.default = function Jump(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        if (!e) return;
        var n = r.method, o = void 0 === n ? "navigateTo" : n;
        /^https?:\/\//.test(e) ? a.default[o]({
            url: urlStringify(u, i({
                url: e
            }, t))
        }) : (/^\/pages\//.test(e) || /^\/package/.test(e)) && a.default[o]({
            url: urlStringify(e, t)
        });
    };
    var a = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
    var u = "/pages/webview/webview";
    function urlStringify(e, t, r) {
        var n = !(2 < arguments.length && void 0 !== r) || r, o = Object.keys(t).map(function(e) {
            return e + "=" + (n ? encodeURIComponent(t[e]) : t[e]);
        });
        return o.length ? e + "?" + o.join("&") : e;
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    t.default = function setUrl(e, t) {
        if ("object" !== (void 0 === t ? "undefined" : s(t)) || !t) return e;
        var r = e.split("#");
        e = r[0];
        var n = r[1] ? "#" + r[1] : "", o = [];
        for (var i in t) {
            var a = new RegExp(i + "=([^&]*)&?");
            e = e.replace(a, "");
            var u = encodeURIComponent(t[i] || "");
            o.push(i + "=" + u);
        }
        if (e.match("[\\?]")) return (e + "&" + o.join("&")).replace("?&", "?") + n;
        return e + "?" + o.join("&") + n;
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "/wxapp";
    t.default = {
        appDicNAme: n + "/dictionary/itemByType",
        userMiniInfo: n + "/user/miniInfo",
        decryptMiniMobile: n + "/user/decryptMiniMobile",
        homeConfig: n + "/cms/getContent",
        balance: n + "/user/balance/new",
        storeDetail: n + "/shelf/scanCode",
        shelfFreightConfig: n + "/shelfIndex/shelfFreightConfig",
        scanProductCode: n + "/shelfIndex/scanProductCode",
        getRecommendProductIdByShelfId: n + "/shelfIndex/getProductRecommendByShelfId",
        getRecommendProductData: n + "/advertisement/pop",
        couponCenter: n + "/coupon/getCouponCentreCoupons",
        getUserCouponMsg: n + "/coupon/getUserCouponMsgNew",
        getCategoryCouponProductInfo: n + "/coupon/getCategoryCouponProductInfo",
        listProductActivity: n + "/shelf/listProductActivity",
        cmsGetCategorySort: n + "/cms/getCategorySort",
        storeBanners: n + "/advertion/getAllAdvertisementList2",
        getSchoolShelfManagerByShelfId: n + "/school/getSchoolShelfManagerByShelfId",
        listUserAddress: n + "/userAddress/listUserAddress",
        addUserAddress: n + "/userAddress/addUserAddress",
        updateUserAddress: n + "/userAddress/updateUserAddress",
        deleteUserAddress: n + "/userAddress/deleteUserAddress",
        getUserAddress: n + "/userAddress/getUserAddress",
        couponDistributeCoupon: n + "/coupon/distributeCoupon",
        pageUserAvailableCoupon: n + "/coupon/pageUserAvailableCoupon",
        gerRegisterCouponList: n + "/coupon/gerRegisterCouponList",
        exchangeCouponByCode: n + "/gainCoupon/exchangeCouponByCode",
        pageUserCoupon: n + "/coupon/pageUserCoupon",
        listBindPhoneUserInfo: n + "/register/listBindPhoneUserInfo",
        listBindPhoneUserInfoNew: n + "/register/listBindPhoneUserInfoNew",
        getActivityCenterEntrance: n + "/activity/centered/entrance",
        getLossMessage: n + "/shelf/getLossTag",
        userSignIn: n + "/user/checkIn",
        userIntegalGrowth: n + "/userIntegalGrowth/getUserIntegalGrowth",
        getRegisterCouponList: n + "/coupon/getRegisterCouponList",
        getCouponCount: n + "/coupon/getUsableCouponCount",
        getExtraAwardNew: n + "/user/getExtraAwardNew",
        getInfoForUserCenter: n + "/user/getInfoForUserCenter",
        getOrDerDetail: n + "/postOrder/postOrderDetail",
        postOrderBox: n + "/postOrder/postOrderBox",
        userProfileGetUserSurveyAnswer: n + "/userprofile/getUserSurveyAnswer",
        businessPayInfoList: n + "/businessHelpPay/getBusinessList",
        foodCard: n + "/foodCard/getBalance",
        getXmfBalance: n + "/xmf/getXmfBalance",
        getThirdUserBalance: n + "/user/getThirdUserBalance",
        refundPay: n + "/refund/pay",
        requestPublicKey: n + "/encrypt/publicKey",
        memberInfo: n + "/user/memberInfo",
        sendModifyPhoneCode: n + "/register/sendModifyPhoneCode",
        createPayPassword: n + "/user/createPayPassword",
        resetPayPassword: n + "/user/resetPayPassword",
        checkOldValidateCode: n + "/register/checkOldValidateCode2",
        verifyPayPassword: n + "/user/verifyPayPassword",
        amendPayPassword: n + "/user/amendPayPassword",
        weixinPay: n + "/orderPayment/createPay",
        commonCreateOrder: n + "/orderPay2/createOrderWithoutPay",
        cancelPay: n + "/orderPayment/cancel",
        payOrder: n + "/orderPay/payOrder",
        getSchoolShelf: n + "/school/listNearBySchools",
        searchSchoolShelf: n + "/school/searchSchoolShelf",
        getCity: n + "/region/getCity",
        getShareBanner: n + "/advertion/getAllAdvertisementList2",
        checkShelfWhiteList: n + "/orderLink/checkShelfWhiteList",
        getCopywriting: n + "/copywriting/getCopywriting",
        createShareLink: n + "/orderLink/createOrderLink",
        getProductCategory: n + "/shelfIndex/getProductCategory",
        stimulateGetStimulate: n + "/stimulate/getStimulate",
        getActivityByType: n + "/activity/getActivityByType",
        stimulateJoinStimulateActivity: n + "/stimulate/joinStimulateActivity",
        overlordMealPop: n + "/advertisement/overlordMealPop",
        isSubscribe: n + "/user/isSubscribe",
        openSmartShelfDoorWithRandomCode: n + "/smartShelf/openSmartShelfDoorWithRandomCode",
        getShelfTransactionsState: n + "/smartShelf/getShelfTransactionsStateNew",
        feedBack: n + "/smartShelf/feedBack",
        getContractParam: n + "/contract/getContractParam",
        getPenddingPayOrder: n + "/smartShelf/getPenddingPayOrder",
        getNotPayOrderCount: n + "/order/getNotPayOrderCount",
        getDiscountCardInfoByOrderId: n + "/userDiscountCard/getDiscountCardInfoByOrderId",
        getDiscountCardList: n + "/userDiscountCard/getDiscountCardList",
        getUserDiscountCard: n + "/userDiscountCard/getUserDiscountCard",
        preCard: n + "/userDiscountCard/preCard",
        counterOrderDetail: n + "/order/detail",
        loginListAccount: n + "/user/login/listAccount",
        loginListAccountAfter: n + "/user/login/listAccountAfterLogin",
        loginListByCode: n + "/user/login/loginByCode",
        getShipmentState: n + "/postOrder/getShipmentState",
        fetchOpenId: n + "/user/getOpenIdByAppId",
        commonEncryptPhone: n + "/common/phoneSecurity/encryptPhone",
        commonSendPhoneCode: n + "/common/phoneSecurity/sendPhoneCode",
        shelfHistory: n + "/shelf/history",
        interceptOrder: n + "/orderPay2/interceptOrder",
        interceptOrderWithoutPay: n + "/orderPay2/interceptOrderWithoutPay",
        priceRiskControl: n + "/orderPay2/priceRiskControl",
        combinationPayCfg: n + "/frontConfig/combinationPayCfg",
        swapOrder: n + "/order/swapOrder",
        extendOrder: n + "/order/extendOrder",
        getShelfBrand: n + "/shelf/getShelfBrand",
        getPopSort: n + "/cms/getPopSort"
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function multiSkuPromotion(e) {
        var n = 0, o = !0;
        e.forEach(function(e) {
            n += e.quantity;
            var t = e.product.activity;
            if (t && t.originProductRestrictionsNum) {
                var r = t.originProductRestrictionsNum - (t.yetBuyProductNum || 0);
                e.quantity < r && (o = !1);
            } else o = !1;
        });
        var t = e[0].product.activity;
        if (!t) return "";
        var r = t.fullPieceList, i = t.businessType, a = t.originRestrictionsNum, u = t.restrictionsStatus, s = t.buyQuantity, c = 1 == u ? a - s : Number.MAX_VALUE;
        if (r) {
            var l = null, f = null, p = r.sort(function(e, t) {
                return e.fullPieceNumber - t.fullPieceNumber;
            });
            if (p.forEach(function(e, t) {
                if (n >= e.fullPieceNumber) {
                    f = e;
                    var r = p[t + 1];
                    !o && r && c >= r.fullPieceNumber && 0 < r.fullPieceNumber - n && (l = p[t + 1]);
                }
            }), l) {
                var d = l.fullPieceNumber - n;
                if (5 == i) return "再买 " + d + " 件可享 " + l.discountValue + " 折";
                if (6 == i) return "再买 " + d + " 件可减 " + l.discountValue + " 元";
                if (11 == i) return l.discountValue + " 元 " + l.fullPieceNumber + " 件，还差 " + d + " 件";
            }
            if (f) {
                var h = (0, y.round)(e[0].activityItem.promotionPrice);
                if (5 == i) return "已满 " + n + " 件，已减 " + h + " 元";
                if (6 == i) return "已满 " + n + " 件，已减 " + h + " 元";
                if (11 == i) return f.discountValue + " 元 " + f.fullPieceNumber + " 件，已满 " + f.fullPieceNumber + " 件";
            }
        }
        return "";
    };
    var y = r(4);
}, , , , , , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setIsIphoneX = t.changePageStatus = t.dismissDialog = t.showDialog = void 0;
    var n = function _interopRequireWildcard(e) {
        {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t;
        }
    }(r(22));
    t.showDialog = function showDialog(e) {
        return {
            type: n.SHOW_DIALOG,
            payload: e
        };
    }, t.dismissDialog = function dismissDialog(e) {
        return {
            type: n.DISMISS_DIALOG,
            payload: e
        };
    }, t.changePageStatus = function changePageStatus(e) {
        return {
            type: n.CHANGE_PAGE_STATUS,
            payload: e
        };
    }, t.setIsIphoneX = function setIsIphoneX(e) {
        return {
            type: n.SET_IS_IPHONE_X,
            payload: e
        };
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resetCoupon = t.combineOldCartData = t.removeSelectCartItem = t.selectAddress = t.selectCoupon = t.toggleSelectAllCartItem = t.toggleSelectCartItem = t.toggleUsedFullOrderDiscount = t.clearToast = t.updateCartDataFromStorage = t.generateCartProductMap = t.calculateCartTotalPrice = t.clearCart = t.reduceCartProduct = t.changeCartProductNumber = t.addProductToCartById = t.addProductToCart = t.cartDataProcess = void 0;
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(48)), o = r(1), i = r(22);
    function An(e, t) {
        e(a(t)), n.default.$cart.set(t().cart.cartProductList);
    }
    var a = t.cartDataProcess = function cartDataProcess(e) {
        return {
            type: i.CART_DATA_PROCESS,
            payload: {
                couponList: [].concat(function _toConsumableArray(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r;
                    }
                    return Array.from(e);
                }(e().store.couponData.userCouponRecord)),
                productList: e().store.productList,
                fullOrderCutActivity: e().store.fullOrderCutActivity,
                shelf: e().shelf
            }
        };
    };
    t.addProductToCart = function addProductToCart(r, n) {
        return function(e, t) {
            try {
                e({
                    type: i.ADD_PRODUCT_TO_CART,
                    payload: {
                        product: t().store.productList.find(function(e) {
                            return e.productId == r.productId;
                        }),
                        shelf: t().shelf,
                        isCheckExchangeExceeded: n
                    }
                }), An(e, t);
            } catch (e) {
                o.logManager.error("添加购物车失败", e);
            }
            return t();
        };
    }, t.addProductToCartById = function addProductToCartById(n) {
        return function(e, t) {
            try {
                var r = t().store.productList.find(function(e) {
                    return e.productId === n;
                });
                r ? (e({
                    type: i.ADD_PRODUCT_TO_CART,
                    payload: {
                        product: r,
                        shelf: t().shelf
                    }
                }), An(e, t)) : e({
                    type: i.SET_TOAST,
                    payload: "没有找到该商品"
                });
            } catch (e) {
                o.logManager.error("添加购物车失败", e);
            }
            return t();
        };
    }, t.changeCartProductNumber = function changeCartProductNumber(r, n) {
        return function(e, t) {
            return e({
                type: i.CHANGE_CART_PRODUCT_NUMBER,
                payload: {
                    product: r,
                    number: n,
                    shelf: t().shelf
                }
            }), An(e, t), t();
        };
    }, t.reduceCartProduct = function reduceCartProduct(r) {
        return function(e, t) {
            return e({
                type: i.REDUCE_CART_PRODUCT,
                payload: r
            }), An(e, t), t();
        };
    }, t.clearCart = function clearCart() {
        return function(e, t) {
            return e({
                type: i.CLEAR_CART,
                payload: null
            }), An(e, t), t();
        };
    }, t.calculateCartTotalPrice = function calculateCartTotalPrice(e) {
        return {
            type: i.CALCULATE_CART_TOTAL_PRICE,
            payload: e
        };
    }, t.generateCartProductMap = function generateCartProductMap() {
        return {
            type: i.GENERATE_CART_PRODUCT_MAP,
            payload: null
        };
    }, t.updateCartDataFromStorage = function updateCartDataFromStorage() {
        return function(e, t) {
            return e({
                type: i.UPDATE_CART_DATA_FROM_STORAGE,
                payload: t().store.productList
            }), An(e, t), t();
        };
    }, t.clearToast = function clearToast() {
        return {
            type: i.CLEAR_TOAST,
            payload: ""
        };
    }, t.toggleUsedFullOrderDiscount = function toggleUsedFullOrderDiscount() {
        return function(e, t) {
            return e({
                type: i.TOGGLE_USED_FULL_ORDER_DISCOUNT
            }), An(e, t), t();
        };
    }, t.toggleSelectCartItem = function toggleSelectCartItem(r) {
        return function(e, t) {
            return e({
                type: i.TOGGLE_SELECT_CART_ITEM,
                payload: r
            }), An(e, t), t();
        };
    }, t.toggleSelectAllCartItem = function toggleSelectAllCartItem() {
        return function(e, t) {
            return e({
                type: i.TOGGLE_SELECT_ALL_CART_ITEM
            }), An(e, t), t();
        };
    }, t.selectCoupon = function selectCoupon(r) {
        return function(e, t) {
            return e({
                type: i.SELECT_COUPON,
                payload: r
            }), An(e, t), t();
        };
    }, t.selectAddress = function selectAddress(r) {
        return function(e, t) {
            return e({
                type: i.SELECT_ADDRESS,
                payload: r
            }), t();
        };
    }, t.removeSelectCartItem = function removeSelectCartItem() {
        return function(e, t) {
            return e({
                type: i.REMOVE_SELECT_CART_ITEM,
                payload: null
            }), An(e, t), t();
        };
    }, t.combineOldCartData = function combineOldCartData(r) {
        return function(e, t) {
            return r && (e({
                type: i.COMBINE_OLD_CART_DATA,
                payload: {
                    oldCartItemData: r,
                    productList: t().store.productList
                }
            }), An(e, t)), t();
        };
    }, t.resetCoupon = function resetCoupon() {
        return function(e, t) {
            return e({
                type: i.RESET_COUPON
            }), An(e, t), t();
        };
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.SETTLEMENTING_MODAL = "SETTLEMENTING_MODAL", t.SUPPLEMENT_MODAL = "SUPPLEMENT_MODAL", 
    t.BREACH_MODAL = "BREACH_MODAL", t.REGISTER_MODAL = "REGISTER_MODAL", t.NEW_GUIDE_MODAL = "NEW_GUIDE_MODAL", 
    t.USAGE_TIPS_MODAL = "USAGE_TIPS_MODAL", t.ACTIVITY_CHANGED_TIPS_MODAL = "ACTIVITY_CHANGED_TIPS_MODAL", 
    t.NOT_PAY_TIPS_MODAL = "NOT_PAY_TIPS_MODAL", t.DISCOUNT_CARD_MODAL = "DISCOUNT_CARD_MODAL";
}, , , , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.clearCart = clearCart, t.clearCartInHomeIfNeed = function clearCartInHomeIfNeed() {
        var e = getNeedClearInHomeStorageKey();
        o.Storage.get(e) && (console.log("clear cart in home"), clearCart(), o.Storage.remove(e));
    }, t.isNeedClearCartInHome = function isNeedClearCartInHome() {
        var e = getNeedClearInHomeStorageKey();
        return !!o.Storage.get(e);
    }, t.setNeedClearCartInHomeFlag = function setNeedClearCartInHomeFlag() {
        var e = getNeedClearInHomeStorageKey();
        o.Storage.setLocal(e, "1");
    }, t.clearNeedClearCartInHomeFlag = function clearNeedClearCartInHomeFlag() {
        var e = getNeedClearInHomeStorageKey();
        o.Storage.remove(e);
    };
    var o = r(1), i = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(53));
    function _toConsumableArray(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
        }
        return Array.from(e);
    }
    var n = "NEED_CLEAR_IN_HOME";
    function clearCart() {
        var t = "customerCart_" + o.Storage.get("shelfCode");
        try {
            var e = o.Storage.get(t, {
                data: []
            }), r = e.data.filter(function(e) {
                return e.selected;
            }).map(function(e) {
                return e.productId;
            });
            e.data = e.data.filter(function(e) {
                return !e.selected;
            }), o.Storage.setLocal(t, JSON.stringify(e));
            var n = o.Storage.get("oncePurchased", []);
            n = (0, i.default)([].concat(_toConsumableArray(n), _toConsumableArray(r))), o.Storage.setLocal("oncePurchased", JSON.stringify(n));
        } catch (e) {
            o.Storage.remove(t);
        }
    }
    function getNeedClearInHomeStorageKey() {
        var e = o.Storage.get("shelfCode");
        return n + "_" + e;
    }
}, , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    t.arrSortByKey = function arrSortByKey(o, i) {
        return function(e, t) {
            var r = void 0, n = void 0;
            if ("object" === (void 0 === e ? "undefined" : a(e)) && "object" === (void 0 === t ? "undefined" : a(t)) && e && t) {
                if ((r = e[o]) === (n = t[o])) return 0;
                if ((void 0 === r ? "undefined" : a(r)) === (void 0 === n ? "undefined" : a(n))) {
                    if (!i || "asc" === i) return r < n ? -1 : 1;
                    if ("desc" === i) return n < r ? -1 : 1;
                }
                return (void 0 === r ? "undefined" : a(r)) < (void 0 === n ? "undefined" : a(n)) ? -1 : 1;
            }
            return 0;
        };
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function getDom(o, i) {
        return new Promise(function(t, r) {
            var e = i && i.selectAll ? "selectAll" : "select", n = 1;
            !function getRect() {
                (i && i.in ? a.default.createSelectorQuery().in(i.$scope) : a.default.createSelectorQuery())[e](o).boundingClientRect(function(e) {
                    30 < n ? r() : e && 0 != e.length ? t(e) : (n++, setTimeout(function() {
                        getRect();
                    }, 100));
                }).exec();
            }();
        });
    };
    var a = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mapBasePath = void 0;
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    t.default = function(e) {
        if (e) {
            var t = e.project ? d[e.project] : d.customer, r = d.customer + "/autoLogin/index.html", n = encodeURIComponent(t + e.path);
            e.path.startsWith("http") && (n = encodeURIComponent(e.path));
            var o = l.default.get(f.TOKEN_KEY), i = "object" == s(e.authUrlParams) && e.authUrlParams ? e.authUrlParams : {}, a = "object" == s(e.webviewParams) && e.webviewParams ? e.webviewParams : {}, u = Object.assign({
                token: o,
                redirect: n
            }, i);
            (0, c.default)((0, p.default)(r, u), a);
        }
    };
    var c = _interopRequireDefault(r(59)), l = _interopRequireDefault(r(9)), f = r(10), p = _interopRequireDefault(r(60));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var d = t.mapBasePath = {
        customer: "https://wxapp.feng1.com/static/customer",
        manager: "https://wxadmin-feng1.sf-express.com/static/manager",
        mall: "https://m.feng1.com/mall"
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function getParamsUrl(e, t) {
        if ("string" != typeof e) return {};
        var r = (t || {}).decode, n = void 0 === r || r, o = {}, i = n ? decodeURIComponent(e) : e, a = void 0;
        -1 != (i = i.split("#")[0]).indexOf("?") && (a = i.indexOf("?") + 1, i = i.substr(a), 
        i.split("&").forEach(function(e) {
            var t = e.indexOf("=");
            if (-1 != t) {
                var r = e.substring(0, t), n = e.substr(t + 1);
                o[r] = n;
            }
        }));
        return o;
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mapBasePath = void 0;
    var b = _interopRequireDefault(r(6)), _ = r(166), P = _interopRequireDefault(r(9)), S = r(10), n = _interopRequireDefault(r(60)), o = _interopRequireDefault(r(88));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var A = t.mapBasePath = {
        customer: "https://wxapp.feng1.com/static/customer",
        manager: "https://wxadmin-feng1.sf-express.com/static/manager",
        mall: "https://m.feng1.com/mall"
    };
    function urlStringify(e, t, r) {
        var n = !(2 < arguments.length && void 0 !== r) || r, o = Object.keys(t).map(function(e) {
            return e + "=" + (n ? encodeURIComponent(t[e]) : t[e]);
        });
        return o.length ? e + "?" + o.join("&") : e;
    }
    t.default = {
        setParamsUrl: n.default,
        getParamsUrl: o.default,
        jumpUrl: function jumpUrl(e, t, r) {
            var n = 1 < arguments.length && void 0 !== t ? t : "customer", o = r, i = (0, _.resolveMPUrl)(e);
            if (i) {
                var a = i.appId, u = i.path, s = i.extraData;
                b.default.navigateToMiniProgram({
                    appId: a,
                    path: u,
                    extraData: s
                });
            } else {
                var c = encodeURIComponent(e.startsWith("http") ? e : "https://wxapp.feng1.com" + e), l = A[n] + "/autoLogin/index.html", f = P.default.get(S.TOKEN_KEY), p = P.default.get("shelfId"), d = P.default.get("shelfCode"), h = P.default.get("shelfType"), y = P.default.get("channel"), g = l + "?token=" + f + (p ? "&shelfId=" + p : "") + (h ? "&shelfType=" + h : "") + (d ? "&shelfCode=" + d : "") + (y ? "&channel=" + y : "") + "&redirect=" + c, v = (o || {}).title, m = void 0 === v ? "" : v;
                b.default.navigateTo({
                    url: urlStringify("/pages/webview/webview", {
                        url: g,
                        title: m
                    })
                });
            }
        },
        jumpUrlByProject: function jumpUrlByProject(e, t, r) {
            var n = 1 < arguments.length && void 0 !== t ? t : "customer", o = r, i = A[n] || A.customer;
            this.jumpUrl(i + e, n, o);
        },
        navigateTo: function navigateTo(e, t) {
            var r = 1 < arguments.length && void 0 !== t ? t : {};
            b.default.navigateTo({
                url: urlStringify(e, r)
            });
        },
        redirectTo: function redirectTo(e, t) {
            var r = 1 < arguments.length && void 0 !== t ? t : {};
            b.default.redirectTo({
                url: urlStringify(e, r)
            });
        },
        switchTab: function switchTab(e, t) {
            var r = 1 < arguments.length && void 0 !== t ? t : {};
            b.default.switchTab({
                url: urlStringify(e, r)
            });
        },
        reLaunch: function reLaunch(e, t) {
            var r = 1 < arguments.length && void 0 !== t ? t : {};
            b.default.reLaunch({
                url: urlStringify(e, r)
            });
        },
        navigateBack: function navigateBack(e) {
            b.default.navigateBack(e);
        },
        getCurrentPagePath: function getCurrentPagePath() {
            var e = b.default.getCurrentPages(), t = e[e.length - 1];
            return urlStringify(t.route, t.options || {});
        }
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RISK_URL_TRANSFORM_MAP = void 0, t.resetRiskTrigger = resetRiskTrigger, t.fetchRisk = function fetchRisk(t) {
        return resetRiskTrigger(), o.default.post("priceRiskControl", t, {
            showToast: !1
        }).then(function(e) {
            return e || (n.logManager.error("触发风控，请求参数：", t), n.Storage.set(i, "1")), Promise.resolve(e);
        }).catch(function(e) {
            return n.logManager.info("风控接口失败", e), Promise.resolve(!0);
        });
    }, t.transformUrlByRisk = function transformUrlByRisk(e) {
        return n.Storage.get(i) && a[e] ? a[e] : e;
    }, t.calcPriceByRisk = function calcPriceByRisk(e) {
        return e.originTotalPrice;
    };
    var n = r(1), o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(2));
    var i = "PRICE_RISK_TRIGGERED", a = t.RISK_URL_TRANSFORM_MAP = {
        weixinPay: "interceptOrder",
        commonCreateOrder: "interceptOrderWithoutPay"
    };
    function resetRiskTrigger() {
        n.Storage.remove(i);
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TipsType = void 0, t.default = function getCartTips(e) {
        for (var t = 0; t < a.length; t++) {
            var r = a[t];
            if (r.isShow.call(r, e)) return {
                text: "function" == typeof r.tips ? r.tips(r.extraData) : r.tips,
                type: r.type,
                extraData: r.extraData
            };
        }
        return {
            text: ""
        };
    };
    var s = _interopRequireDefault(r(11)), n = _interopRequireDefault(r(40)), c = r(1), l = r(4);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    s.default.extend(n.default);
    var o, i = t.TipsType = void 0;
    (o = i || (t.TipsType = i = {}))[o.Exchange = 0] = "Exchange", o[o.CouponExpiredToday = 1] = "CouponExpiredToday";
    var a = [ {
        tips: function tips(e) {
            var t = e.needToSatisfyAmount, r = e.satisfyAmount, n = e.hasExchangeProductCount, o = e.maxExchangeProductCount;
            return 0 < r ? "已满" + r + "元，可换购" + n + "/" + o + "超值商品" : 0 < t ? "还差" + t + "元，可换购超值商品" : "";
        },
        type: i.Exchange,
        extraData: {
            needToSatisfyAmount: 0,
            satisfyAmount: 0,
            canExchange: !1
        },
        isShow: function isShow(e) {
            var t = e.productList, r = e.totalPriceWithoutExchange, n = e.discountCartGroupList, o = null;
            if (t.some(function(e) {
                if (e.activity && 2 == e.activity.activityType) return o = e.activity, !0;
            }), !o) return !1;
            var i = o.markupPriceList;
            if (!i || !i[0]) return !1;
            var a = i[0].fullPrice, u = n.find(function(e) {
                return "超值换购" === e.name;
            });
            if (a <= r) {
                var s = 0;
                u && (s = u.cartProductList.reduce(function(e, t) {
                    return e + t.quantity;
                }, 0));
                var c = Math.floor(r / a);
                this.extraData = {
                    needToSatisfyAmount: 0,
                    satisfyAmount: a,
                    hasExchangeProductCount: s,
                    maxExchangeProductCount: Math.floor(r / a),
                    canExchange: 0 < c - s
                };
            } else this.extraData = {
                needToSatisfyAmount: (0, l.sub)(a, r),
                satisfyAmount: 0,
                canExchange: !1
            };
            return !0;
        }
    }, {
        tips: "检查效期提醒：请检查您选购的商品是否在有效期内",
        isShow: function isShow(e) {
            return e.cartItemList.some(function(e) {
                return e.product.hasDangerFlag;
            });
        }
    }, {
        tips: function tips(e) {
            return "您的账户中有" + e.expiredTodayCouponNumber + "张优惠券今日到期，请及时使用";
        },
        extraData: {
            expiredTodayCouponNumber: 0
        },
        type: i.CouponExpiredToday,
        isShow: function isShow(e) {
            var t = e.userCouponRecord, r = void 0 === t ? [] : t, n = e.currentCoupon, o = e.currentDateTime, a = n || {}, i = 0, u = (0, 
            c.getServerTime)();
            return console.log("serverTime = ", u), 0 < r.length && (i = 0, r.filter(function(e) {
                try {
                    var t = e.couponTimeSlot, r = t.st, n = t.et, o = (0, s.default)(r, "HH:mm").toDate(), i = (0, 
                    s.default)(n, "HH:mm").toDate();
                    if (!(u >= o.getTime() && u <= i.getTime())) return !1;
                } catch (e) {}
                return !a.recordId || e.recordId != a.recordId;
            }).map(function(e) {
                var t = e.validTime, r = o;
                0 < t && 0 < r && (t = (0, s.default)(t).format("YYYY-MM-DD")) == (r = (0, s.default)(r).format("YYYY-MM-DD")) && i++;
            })), 0 < (this.extraData.expiredTodayCouponNumber = i);
        }
    }, {
        tips: "整单满减不能与折扣商品/优惠券同享",
        isShow: function isShow(e) {
            return e.isUseFullCut;
        }
    }, {
        tips: "折扣商品不能使用优惠券",
        isShow: function isShow(e) {
            var t = e.cartItemList;
            if (null !== e.currentCoupon && 0 < t.filter(function(e) {
                return !!e.product.activity;
            }).length) return !0;
            return !1;
        }
    }, {
        tips: "您选择的商品库存不足，请确认是否已拿到足量商品",
        isShow: function isShow(e) {
            for (var t = e.cartItemList, r = 0; r < t.length; r++) {
                var n = t[r], o = n.product.originStockQuantity;
                if (n.quantity > Number(o)) return !0;
            }
            return !1;
        }
    }, {
        tips: "请确认商品及数量",
        isShow: function isShow() {
            return !0;
        }
    } ];
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function getProductListFromIDList(e, t) {
        if (!e) return [];
        var r = {};
        return t.forEach(function(e) {
            r[e.productId] = e;
        }), e.map(function(e) {
            return r[e];
        }).filter(function(e) {
            return !!e;
        });
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.generatePayDataItems = generatePayDataItems, t.generateOrderSubmitProductActivityList = generateOrderSubmitProductActivityList, 
    t.default = function generatePayData(e, t, r, n) {
        var o = generatePayDataItems(t), i = r && r.coupon ? r.coupon.recordId : "";
        return {
            openid: "",
            groupCustomerId: n && n.groupCustomerId ? n.groupCustomerId : "",
            buyChannel: 5,
            items: o,
            orderSubmitProductActivityList: generateOrderSubmitProductActivityList(t),
            payMethod: 7,
            paymentType: 0,
            shelfCode: e,
            userCouponRecordIdToUse: i,
            leadVersion: "V3"
        };
    };
    var o = r(23);
    function generatePayDataItems(e) {
        var r = {};
        e.forEach(function(t) {
            var e = t.product;
            e.groupList ? e.groupList.forEach(function(e) {
                r[e.productId] || (r[e.productId] = {
                    typeId: e.typeId,
                    productId: String(e.productId),
                    quantity: 0,
                    isNewProduct: e.isNewProduct
                }), r[e.productId].quantity += t.quantity;
            }) : (r[e.productId] || (r[e.productId] = {
                typeId: e.typeId,
                productId: String(e.productId),
                quantity: 0,
                isNewProduct: e.isNewProduct
            }), r[e.productId].quantity += t.quantity);
        });
        var t = [], n = !0, o = !1, i = void 0;
        try {
            for (var a, u = Object.keys(r)[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                var s = a.value;
                t.push(r[s]);
            }
        } catch (e) {
            o = !0, i = e;
        } finally {
            try {
                !n && u.return && u.return();
            } finally {
                if (o) throw i;
            }
        }
        return t;
    }
    function generateOrderSubmitProductActivityList(e) {
        var r = [], t = (0, o.priceCalculateAndGetRuleData)(e, !1).ruleList, n = {};
        return t.forEach(function(e) {
            e.isNormalPriceRule() || e.meetConditionCartProductList.forEach(function(e) {
                if (e.product.activity) {
                    var t = e.product.activity.activityId;
                    2 == e.product.activity.skuType ? (n[t] || (n[t] = {
                        activityId: t,
                        productList: []
                    }), n[t].productList.push({
                        activityItemId: e.activityItem ? e.activityItem.activityItemId : null,
                        productId: String(e.productId),
                        quantity: e.quantity
                    })) : r.push({
                        activityId: t,
                        productList: [ {
                            activityItemId: e.activityItem ? e.activityItem.activityItemId : null,
                            productId: String(e.productId),
                            quantity: e.quantity
                        } ]
                    });
                }
            });
        }), Object.keys(n).forEach(function(e) {
            r.push(n[e]);
        }), r;
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function isExceededPurchasesNumber(e, t, r) {
        if (!e.activity) return !1;
        if (2 == e.activity.activityType) return !1;
        var i = 0;
        t.forEach(function(e) {
            var t = e.product, r = e.quantity, n = t.activity;
            if (n && 0 < n.originProductRestrictionsNum) {
                var o = n.originProductRestrictionsNum - (n.yetBuyProductNum || 0);
                i += o <= r ? o : r;
            } else i += r;
        });
        var n = r ? r.quantity : 0, o = e.activity, a = o.buyQuantity, u = o.originRestrictionsNum, s = o.productRestrictionsNum, c = o.restrictionsStatus, l = o.skuType, f = 2 == (void 0 === l ? 1 : l) ? i : n;
        if (0 < u && u - a <= f && 1 == c) return !0;
        if (!e.isCombinationProduct && s && s < n + 1) return !0;
        if (e.isCombinationProduct && e.combinationRestrictionsNum && n + 1 > e.combinationRestrictionsNum) return !0;
        return !1;
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getProductMaxStock = void 0;
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    };
    t.default = function dataProcess(e) {
        var f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], p = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : new Date().getTime(), d = arguments[3], h = new Map();
        f.forEach(function(e) {
            e.hasDangerFlag = hasDangerFlag(e), e.ignoreDangerTips = d.isSchoolShelf, e.noProductionDate = !e.productionDate, 
            e.originStockQuantity = e.stockQuantity, e.stockQuantity = n(e, p, d), e.isLowStock = !!d.isSchoolShelf && e.stockQuantity <= 5, 
            e.isNewProduct = e.lables && e.lables[1] || e.labelList && 0 < e.labelList.length && 1 == e.labelList[0].labelType, 
            h.set(e.productId, e);
        }), e.forEach(function(e) {
            var t = e.startTime, r = e.endTime, n = e.businessType, o = e.restrictionsNum, i = e.productRestrictionsNum, a = e.yetBuyProductNum, u = e.buyQuantity, s = e.restrictionsStatus;
            if (e.isInActivityPeriod = t <= p && p <= r, e.originRestrictionsNum = o || 0, e.originProductRestrictionsNum = i || 0, 
            e.originRestrictionsStatus = s, e.buyQuantity = e.buyQuantity || 0, i && 0 < i && 7 != e.activityType) {
                var c = Math.max(i - (a || 0), 0);
                (0 < (e.productRestrictionsNum = c) && c < o - (u || 0) || void 0 === o) && (e.restrictionsNum = c, 
                e.buyQuantity = 0, e.restrictionsStatus = 1);
            }
            if (n === y.BusinessType.CombinedSales || n === y.BusinessType.NewCombinedSales) return e.productRestrictionsNum = 0, 
            void generateCombineSalesProductList(e, h).forEach(function(e) {
                f.push(e);
            });
            var l = h.get(e.productId);
            l && (l.activity = e, l.discountPrice = homePriceCalculate(l, d), l.homeRestrictionsNumber = calculateHomeRestrictionsNumber(l));
        });
    }, t.combineProduct = combineProduct, t.generateCombineSalesProductList = generateCombineSalesProductList, 
    t.homePriceCalculate = homePriceCalculate, t.hasDangerFlag = hasDangerFlag, t.calculateHomeRestrictionsNumber = calculateHomeRestrictionsNumber, 
    t.findProductMap = function findProductMap() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], r = arguments[1], n = [];
        Array.isArray(r) && e.map(function(t) {
            r.some(function(e) {
                return e == t.productId;
            }) && n.push(t);
        });
        return n;
    };
    var y = r(8), u = r(4), a = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(11));
    function combineProduct(e, t, r, n) {
        var o = i({}, r);
        return o.productId = t.goodsId, o.productName = r.productName + "+" + n.productName, 
        o.shortName = r.shortName + "+" + n.shortName, o.salePrice = (0, u.add)(r.salePrice, n.salePrice), 
        o.imagePath = "https://qn-cdn-pic.feng1.com/group_product_img.jpg", o.groupList = [ r, n ], 
        o.groupInfo = t, o.stockQuantity = Math.min(r.stockQuantity, n.stockQuantity), (o.activity = e).businessType === y.BusinessType.NewCombinedSales ? (o.discountPrice = homePriceCalculate(o), 
        t.configShelfProductRestrictionNum && 0 < t.configShelfProductRestrictionNum && (t.configShelfProductRestrictionNum = t.configShelfProductRestrictionNum || 0, 
        t.yetShelfProductRestrictionNum = t.yetShelfProductRestrictionNum || 0, o.combinationRestrictionsNum = t.configShelfProductRestrictionNum - t.yetShelfProductRestrictionNum)) : o.discountPrice = t.groupValue, 
        o.reducePrice = (0, u.sub)(o.salePrice, o.discountPrice), o.groupList.some(function(e) {
            return !0 === hasDangerFlag(e) && (o.hasDangerFlag = !0, o.dangerFlagProductName = e.shortName || e.productName, 
            !0);
        }), o.isCombinationProduct = !0, o;
    }
    function generateCombineSalesProductList(i, a) {
        var e = i.groupList, u = [];
        return e.forEach(function(e) {
            var t = e.goodsId.split(","), r = a.get(t[0]), n = a.get(t[1]);
            if (r && n) {
                var o = combineProduct(i, e, r, n);
                u.push(o);
            }
        }), u;
    }
    function homePriceCalculate(e, t) {
        var r = e.activity, n = e.salePrice, o = n, i = r && (1 === r.activityType || 7 === r.activityType) && r.isInActivityPeriod;
        if (t && t.isCounter && (i = r && 1 === r.activityType && 2 === Number(r.originRestrictionsStatus) && 1 === Number(r.skuType) && r.isInActivityPeriod), 
        i) {
            var a = r.discountValue;
            if (a) switch (r.discountType) {
              case 1:
                o = (0, u.round)((0, u.mul)(n, (0, u.div)(a, 10)));
                break;

              case 2:
                o = (0, u.round)((0, u.sub)(n, a));
                break;

              case 3:
                o = (0, u.round)(a);
            }
        }
        return Math.max(o, .01);
    }
    function hasDangerFlag(e) {
        return 4 === e.dangerFlag || 5 === e.dangerFlag || !e.productionDate;
    }
    var n = t.getProductMaxStock = function getProductMaxStock(e, t, r) {
        var n = 1 < arguments.length && void 0 !== t ? t : Date.now();
        if (r.isSchoolShelf || r.isMachineShelf || r.isCounter) return e.stockQuantity;
        var o = e.invalidProductionDate || 0;
        if (!o) return e.stockQuantity + 5;
        if (e.saveTimeDays && 0 < e.saveTimeDays && 0 < o) {
            var i = (0, u.mul)(e.saveTimeDays, 864e5);
            if (15 <= (0, a.default)((0, a.default)(o + i).format("YYYY-MM-DD")).diff((0, a.default)(n).format("YYYY-MM-DD"), "day")) return e.stockQuantity + 5;
        }
        return e.stockQuantity;
    };
    function calculateHomeRestrictionsNumber(e) {
        var t = e.activity;
        if (!t) return 0;
        var r = t.originRestrictionsStatus, n = t.originProductRestrictionsNum, o = void 0 === n ? 0 : n, i = t.originRestrictionsNum, a = void 0 === i ? 0 : i, u = t.skuType;
        return 2 == t.activityType ? 0 : 2 == r ? o || 0 : 1 == u && o ? Math.min(o, a) : 2 == u ? a <= o ? 0 : o : a || 0;
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.simplifyProduct = simplifyProduct, t.simplifyActivity = simplifyActivity, 
    t.simplifyCartItem = function simplifyCartItem(e) {
        var t = (0, n.default)(e, [ "productId", "quantity", "product" ]);
        return t.product = simplifyProduct(t.product), t;
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(97));
    function simplifyProduct(e) {
        var t = Object.assign({}, e);
        return delete e.productCate, e.activity && (t.activity = simplifyActivity(e.activity)), 
        t;
    }
    var o = {
        businessType: r(8).BusinessType.CombinedSales,
        startTime: 0,
        endTime: 0,
        activityProgress: "",
        activityBuyQuantity: 0,
        isInActivityPeriod: !0,
        showName: "",
        fullPieceList: [],
        restrictionsStatus: 1,
        originRestrictionsNum: 0,
        activityId: ""
    };
    function simplifyActivity(e) {
        return (0, n.default)(e, Object.keys(o));
    }
}, , , , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getCouponData = t.couponProcess = void 0;
    var n = r(247);
    Object.keys(n).forEach(function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function get() {
                return n[e];
            }
        });
    });
    var o = _interopRequireDefault(r(39)), i = _interopRequireDefault(r(248));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.couponProcess = o.default, t.getCouponData = i.default;
}, function(e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CounterRuleMap = t.CounterClassifyRuleList = t.CounterSingleDiscountRule = t.CounterSpikeRule = t.RuleMap = t.ClassifyRuleList = t.DefaultRule = t.SecondDiscountRule = t.NewCombinationRule = t.CombinationRule = t.SpikeRule = t.SingleDiscountRule = void 0;
    var o = r(8);
    function _defineProperty(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e;
    }
    var i = t.SingleDiscountRule = {
        businessTypes: [ o.BusinessType.DiscountPromotion, o.BusinessType.OnSale ],
        typeName: "特惠",
        isMergeGroup: !0,
        typeKey: "singleDiscount"
    }, a = t.SpikeRule = {
        businessTypes: [ o.BusinessType.Seckill ],
        typeName: function typeName(e, t) {
            return t >= e.startTime && t < e.endTime ? "秒杀" : t < e.startTime ? "秒杀预告" : "";
        },
        isMergeGroup: !0,
        groupKey: "activityId",
        typeKey: function typeKey(e, t) {
            return t >= e.startTime && t < e.endTime ? "spike" : t < e.startTime ? "willSpike" : "";
        }
    }, u = t.CombinationRule = {
        businessTypes: [ o.BusinessType.CombinedSales ],
        typeName: "组合销售",
        isMergeGroup: !0,
        groupKey: "activityId",
        typeKey: "combination"
    }, s = t.NewCombinationRule = {
        businessTypes: [ o.BusinessType.NewCombinedSales ],
        typeName: "组合销售",
        isMergeGroup: !0,
        groupKey: "activityId",
        typeKey: "combination"
    }, c = t.SecondDiscountRule = {
        businessTypes: [ o.BusinessType.SecondDiscount ],
        typeName: function typeName(e) {
            return 5 == e.discountValue ? "第2件半价" : "第2件" + e.discountValue + "折";
        },
        isMergeGroup: !0,
        groupKey: "activityId",
        typeKey: "secondDiscount"
    }, l = t.DefaultRule = {
        businessTypes: [ o.BusinessType.FullPieceDiscount, o.BusinessType.FullPieceReduction, o.BusinessType.ManyCountManyYuan ],
        typeName: (_defineProperty(n = {}, o.BusinessType.FullPieceDiscount, "满件折"), _defineProperty(n, o.BusinessType.FullPieceReduction, "满件减"), 
        _defineProperty(n, o.BusinessType.ManyCountManyYuan, "满件优惠"), n),
        isMergeGroup: !1,
        typeKey: function typeKey(e) {
            return 2 === Number(e.skuType) ? "multiSkuFull" : "singleSkuFull";
        }
    }, f = t.ClassifyRuleList = [ i, a, l, u, s, c ], p = t.RuleMap = {};
    f.forEach(function(t) {
        t.businessTypes.forEach(function(e) {
            p[e] = t;
        });
    });
    var d = t.CounterSpikeRule = {
        businessTypes: [ o.BusinessType.Seckill ],
        typeName: "秒杀",
        isMergeGroup: !0,
        groupKey: "activityId",
        typeKey: function typeKey(e, t) {
            return t >= e.startTime && t < e.endTime ? "spike" : t < e.startTime ? "willSpike" : "";
        }
    }, h = t.CounterSingleDiscountRule = {
        businessTypes: [ o.BusinessType.DiscountPromotion, o.BusinessType.OnSale ],
        typeName: "特惠",
        isMergeGroup: !0,
        typeKey: "singleDiscount"
    }, y = t.CounterClassifyRuleList = [ h, d ], g = t.CounterRuleMap = {};
    y.forEach(function(t) {
        t.businessTypes.forEach(function(e) {
            g[e] = t;
        });
    });
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Observer = t.getCurrentPages = t.getPerformance = t.uuid = t.getSystemInfo = void 0;
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(0));
    t.getSystemInfo = function getSystemInfo() {
        var e = {};
        try {
            e = n.default.getSystemInfoSync();
        } catch (e) {}
        return {
            screenWidth: e.screenWidth || "",
            screenHeight: e.screenHeight || "",
            brand: e.brand || "",
            model: e.model || "",
            pixelRatio: e.pixelRatio || "",
            version: e.version || "",
            system: e.system || "",
            platform: e.platform || "",
            SDKVersion: e.SDKVersion || ""
        };
    }, t.uuid = function uuid() {
        for (var e = [], t = "0123456789abcdef", r = 0; r < 36; r++) e[r] = t.substr(Math.floor(16 * Math.random()), 1);
        e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-";
        var uuid = e.join("");
        return uuid;
    }, t.getPerformance = function getPerformance() {
        return new Promise(function(r) {
            wx.getPerformance ? wx.getPerformance().createObserver(function(e) {
                var t = e.getEntries();
                t && 0 < t.length && r(t[0]);
            }).observe({
                entryTypes: [ "render", "script" ]
            }) : r(null);
        });
    }, t.getCurrentPages = function getCurrentPages() {
        var e = n.default.getCurrentPages();
        return e && 0 < e.length ? e[e.length - 1] : null;
    }, t.Observer = function Observer(e) {
        return n.default.createIntersectionObserver(e);
    };
}, , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.fetchDiscountCardInfo = t.fetchTaskCard = t.fetchCustomLabel = t.setCustomLabel = t.addProductItem = t.resetStore = t.setAutoReceiveCoupon = t.fetchRecommendProductData = t.fetchCouponMsgNew = t.setUserCouponRecord = t.setCouponByReceived = t.fetchCouponList = t.setCouponList = t.fetchStoreConfig = t.fetchHomeConfig = t.setHomeConfig = t.fetchAdvList = t.setAdvList = t.fetchRecommendedProduct = t.fetchScanQRCode = t.updateModalSort = t.fetchProductActivity = t.setProductActivity = t.fetchShelfFreightConfig = t.setShelfBrand = t.fetchShelfBrand = t.fetchScanStoreDetail = t.setStoreDetail = void 0;
    var y = _interopRequireDefault(r(3)), o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, g = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
            var r = [], n = !0, o = !1, i = void 0;
            try {
                for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), 
                !t || r.length !== t); n = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    !n && u.return && u.return();
                } finally {
                    if (o) throw i;
                }
            }
            return r;
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }, u = _interopRequireDefault(r(9)), s = _interopRequireDefault(r(273)), v = _interopRequireDefault(r(2)), c = function _interopRequireWildcard(e) {
        {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t;
        }
    }(r(22)), m = r(73), l = r(49), f = _interopRequireDefault(r(274)), p = r(50);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function _toConsumableArray(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
        }
        return Array.from(e);
    }
    function _asyncToGenerator(e) {
        return function() {
            var a = e.apply(this, arguments);
            return new Promise(function(o, i) {
                return function step(e, t) {
                    try {
                        var r = a[e](t), n = r.value;
                    } catch (e) {
                        return void i(e);
                    }
                    if (!r.done) return Promise.resolve(n).then(function(e) {
                        step("next", e);
                    }, function(e) {
                        step("throw", e);
                    });
                    o(n);
                }("next");
            });
        };
    }
    var d = t.setStoreDetail = function setStoreDetail(e) {
        return {
            type: c.SET_STORE_DETAIL,
            payload: e
        };
    }, i = (t.fetchScanStoreDetail = function fetchScanStoreDetail(i, a) {
        return r = _asyncToGenerator(y.default.mark(function _callee(t, r) {
            var n, o;
            return y.default.wrap(function _callee$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = null, e.prev = 1, e.next = 4, v.default.get("storeDetail", {
                        shelfCode: i
                    });

                  case 4:
                    n = e.sent, e.next = 11;
                    break;

                  case 7:
                    return e.prev = 7, e.t0 = e.catch(1), a && a(n, e.t0), e.abrupt("return", r());

                  case 11:
                    if (t((0, l.setShelf)(n.shelf)), u.default.set("shelfId", n.shelf.shelfId, -1), 
                    u.default.set("shelfType", n.shelf.shelfType, -1), e.prev = 14, n.shelf.isSchoolShelf) return e.next = 18, 
                    v.default.get("shelfFreightConfig", {
                        shelfId: n.shelf.shelfId
                    });
                    e.next = 20;
                    break;

                  case 18:
                    o = e.sent, t((0, l.setShelfFreightConfig)(o));

                  case 20:
                    e.next = 24;
                    break;

                  case 22:
                    e.prev = 22, e.t1 = e.catch(14);

                  case 24:
                    return t(d(n)), a && a(n), e.abrupt("return", r());

                  case 27:
                  case "end":
                    return e.stop();
                }
            }, _callee, this, [ [ 1, 7 ], [ 14, 22 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.fetchShelfBrand = function fetchShelfBrand(o) {
        return r = _asyncToGenerator(y.default.mark(function _callee2(t, r) {
            var n;
            return y.default.wrap(function _callee2$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = null, e.prev = 1, e.next = 4, v.default.get("getShelfBrand", {
                        shelfCode: o
                    }, {
                        failedMsg: !1,
                        showToast: !1
                    });

                  case 4:
                    n = e.sent, t(i(n)), e.next = 11;
                    break;

                  case 8:
                    return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", r());

                  case 11:
                    return e.abrupt("return", r());

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, _callee2, this, [ [ 1, 8 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.setShelfBrand = function setShelfBrand(e) {
        return {
            type: c.SET_SHELF_BRAND,
            payload: e
        };
    }), b = (t.fetchShelfFreightConfig = function fetchShelfFreightConfig(o, i) {
        return r = _asyncToGenerator(y.default.mark(function _callee3(t, r) {
            var n;
            return y.default.wrap(function _callee3$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, v.default.get("shelfFreightConfig", {
                        shelfId: o
                    });

                  case 2:
                    return n = e.sent, t((0, l.setShelfFreightConfig)(n)), i && i(n), e.abrupt("return", r());

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, _callee3, this);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.setProductActivity = function setProductActivity(e, t, r, n) {
        return {
            type: c.SET_PRODUCT_ACTIVITY,
            payload: {
                list: e,
                activitySortList: t,
                shelf: n,
                shelfProductCateList: r
            }
        };
    }), _ = (t.fetchProductActivity = function fetchProductActivity(e) {
        var r, d = e.shelfCode, h = e.productList;
        return r = _asyncToGenerator(y.default.mark(function _callee4(t, r) {
            var n, o, i, a, u, s, c, l, f, p;
            return y.default.wrap(function _callee4$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, n = [ v.default.get("listProductActivity", {
                        shelfCode: d
                    }).catch(function(e) {}) ], r().shelf.isCounter || (n.push(v.default.get("cmsGetCategorySort", {
                        shelfCode: d
                    }).catch(function(e) {})), n.push(v.default.get("getProductCategory", {
                        shelfCode: d
                    }).catch(function(e) {}))), e.next = 5, Promise.all(n);

                  case 5:
                    o = e.sent, i = g(o, 3), a = i[0], u = i[1], s = i[2], c = Array.isArray(a) ? a : [], 
                    l = u && Array.isArray(u.categorySortList) ? u.categorySortList : [], f = Array.isArray(s) ? s : [], 
                    p = u && Array.isArray(u.shopIndexSortList) ? u.shopIndexSortList : [], t(b(c, l, f, r().shelf)), 
                    t((0, m.updateCartDataFromStorage)(h)), t(_(p)), e.next = 22;
                    break;

                  case 19:
                    e.prev = 19, e.t0 = e.catch(0), console.error(e.t0);

                  case 22:
                    return e.abrupt("return", r());

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, _callee4, this, [ [ 0, 19 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
    }, t.updateModalSort = function updateModalSort(e) {
        return {
            type: c.SET_MODAL_RULE_SORT,
            payload: e
        };
    }), a = (t.fetchScanQRCode = function fetchScanQRCode(e, o) {
        var r, i = e.productCode, a = e.shelfRandomCode;
        return r = _asyncToGenerator(y.default.mark(function _callee5(e, t) {
            var r, n;
            return y.default.wrap(function _callee5$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, r = {
                        productCode: i,
                        shelfRandomCode: a
                    }, e.next = 4, v.default.get("scanProductCode", r);

                  case 4:
                    (n = e.sent).salesStatus, o && o(n), e.next = 12;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(0), o && o(Object.assign({
                        error: !0
                    }, e.t0));

                  case 12:
                    return e.abrupt("return", t());

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, _callee5, this, [ [ 0, 9 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
    }, t.fetchRecommendedProduct = function fetchRecommendedProduct(e) {
        var r, t = e.purchased, i = void 0 === t ? [] : t, n = e.shelfId, a = void 0 === n ? "" : n;
        return r = _asyncToGenerator(y.default.mark(function _callee6(t, r) {
            var n, o;
            return y.default.wrap(function _callee6$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, n = i && i.map(function(e) {
                        return String(e);
                    }) || [], e.next = 4, v.default.get("getRecommendProductIdByShelfId", {
                        shelfId: a
                    }, {
                        showToast: !1,
                        failedMsg: !1
                    });

                  case 4:
                    o = (o = e.sent) && 0 < o.length ? n.concat(o) : n, t({
                        type: c.SET_RECOMMEND_PRODUCT,
                        payload: [].concat(_toConsumableArray(new Set(o)))
                    }), e.next = 11;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(0);

                  case 11:
                    return e.abrupt("return", r());

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, _callee6, this, [ [ 0, 9 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
    }, t.setAdvList = function setAdvList(e) {
        return {
            type: c.SET_ADV_LIST,
            payload: e
        };
    }), h = (t.fetchAdvList = function fetchAdvList(i) {
        return r = _asyncToGenerator(y.default.mark(function _callee7(t, r) {
            var n, o;
            return y.default.wrap(function _callee7$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, v.default.get("storeBanners", i);

                  case 3:
                    n = e.sent, o = {}, n.forEach(function(e) {
                        e.advertionPositionName && (o[e.advertionPositionName] = e.advertionList);
                    }), t(a(o)), e.next = 11;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(0);

                  case 11:
                    return e.abrupt("return", r());

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, _callee7, this, [ [ 0, 9 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.setHomeConfig = function setHomeConfig(e) {
        return {
            type: c.SET_HOME_CONFIG,
            payload: e
        };
    }), P = (t.fetchHomeConfig = function fetchHomeConfig(o) {
        return r = _asyncToGenerator(y.default.mark(function _callee8(t, r) {
            var n;
            return y.default.wrap(function _callee8$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, v.default.get("homeConfig", {
                        shelfId: o
                    });

                  case 3:
                    n = e.sent, t(h(n)), e.next = 9;
                    break;

                  case 7:
                    e.prev = 7, e.t0 = e.catch(0);

                  case 9:
                    return e.abrupt("return", r());

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, _callee8, this, [ [ 0, 7 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.fetchStoreConfig = function fetchStoreConfig(n) {
        return r = _asyncToGenerator(y.default.mark(function _callee9(t, r) {
            var i, a;
            return y.default.wrap(function _callee9$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    return e.next = 4, (0, s.default)({
                        shelfId: n
                    });

                  case 4:
                    return i = e.sent, a = [], "object" === (void 0 === i ? "undefined" : o(i)) && Object.keys(i).forEach(function(e) {
                        var t = i[e] || {}, r = t.productIds, n = t.image, o = t.productScopeId;
                        r && 0 < r.length && a.push({
                            productIds: r,
                            image: n,
                            productScopeId: o,
                            type: e
                        });
                    }), t({
                        type: c.SET_STORE_CONFIG,
                        payload: {
                            collectCardConfig: a
                        }
                    }), e.abrupt("return", r());

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, _callee9, this);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.setCouponList = function setCouponList(e) {
        return {
            type: c.SET_COUPON_LIST,
            payload: e
        };
    }), S = (t.fetchCouponList = function fetchCouponList(o) {
        return r = _asyncToGenerator(y.default.mark(function _callee10(t, r) {
            var n;
            return y.default.wrap(function _callee10$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, v.default.post("couponCenter", {
                        shelfCode: o
                    });

                  case 3:
                    n = e.sent, t(P(n)), e.next = 9;
                    break;

                  case 7:
                    e.prev = 7, e.t0 = e.catch(0);

                  case 9:
                    return e.abrupt("return", r());

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, _callee10, this, [ [ 0, 7 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.setCouponByReceived = function setCouponByReceived(e) {
        return {
            type: c.SET_COUPON_RECEVIED_STATUS,
            payload: e
        };
    }, t.setUserCouponRecord = function setUserCouponRecord(e) {
        return {
            type: c.SET_USER_COUPON_RECORD,
            payload: e
        };
    });
    t.fetchCouponMsgNew = function fetchCouponMsgNew(o, e) {
        var r, i = 1 < arguments.length && void 0 !== e && e;
        return r = _asyncToGenerator(y.default.mark(function _callee11(t, r) {
            var n;
            return y.default.wrap(function _callee11$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, v.default.get("getUserCouponMsg", {
                        shelfId: o,
                        whetherIndex: i
                    });

                  case 3:
                    n = e.sent, t(S(n)), t((0, m.cartDataProcess)(r)), e.next = 10;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(0);

                  case 10:
                    return e.abrupt("return", r());

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, _callee11, this, [ [ 0, 8 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
    }, t.fetchRecommendProductData = function fetchRecommendProductData(e) {
        var r, o = e.advertionPositionCode, t = e.shelfId, i = void 0 === t ? "" : t;
        return r = _asyncToGenerator(y.default.mark(function _callee12(t, r) {
            var n;
            return y.default.wrap(function _callee12$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, v.default.post("getRecommendProductData", {
                        advertionPositionCode: o,
                        shelfId: i
                    }, {
                        showToast: !1
                    });

                  case 3:
                    n = e.sent, t({
                        type: c.SET_RECOMMEND_PRODUCT_DATA,
                        payload: n
                    }), e.next = 9;
                    break;

                  case 7:
                    e.prev = 7, e.t0 = e.catch(0);

                  case 9:
                    return e.abrupt("return", r());

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, _callee12, this, [ [ 0, 7 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
    }, t.setAutoReceiveCoupon = function setAutoReceiveCoupon(n) {
        return r = _asyncToGenerator(y.default.mark(function _callee13(t, r) {
            return y.default.wrap(function _callee13$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    try {
                        t({
                            type: c.SET_AUTO_RECEIVE_COUPON,
                            payload: n
                        });
                    } catch (e) {}
                    return e.abrupt("return", r());

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, _callee13, this);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.resetStore = function resetStore() {
        return {
            type: c.RESET_STORE
        };
    }, t.addProductItem = function addProductItem(n) {
        return r = _asyncToGenerator(y.default.mark(function _callee14(t, r) {
            return y.default.wrap(function _callee14$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    try {
                        t({
                            type: c.ADD_PRODUCT_TO_STORE,
                            payload: {
                                product: n,
                                shelf: r().shelf
                            }
                        });
                    } catch (e) {}
                    return e.abrupt("return", r());

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, _callee14, this);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.setCustomLabel = function setCustomLabel(e) {
        return {
            type: c.SET_CUSTOM_LABEL,
            payload: e
        };
    }, t.fetchCustomLabel = function fetchCustomLabel() {
        return r = _asyncToGenerator(y.default.mark(function _callee15(t, r) {
            var n, o;
            return y.default.wrap(function _callee15$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, v.default.post("getCopywriting", {
                        copywritingType: 1
                    }, {
                        showToast: !1
                    });

                  case 3:
                    n = e.sent, o = {}, n && n.length && (n.forEach(function(e) {
                        var t = e.businessType, r = e.image;
                        o[t] = {
                            backgroundImage: "url(" + r + ")"
                        };
                    }), t({
                        type: c.SET_CUSTOM_LABEL,
                        payload: o
                    })), e.next = 10;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(0);

                  case 10:
                    return e.abrupt("return", r());

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, _callee15, this, [ [ 0, 8 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.fetchTaskCard = function fetchTaskCard(a) {
        return r = _asyncToGenerator(y.default.mark(function _callee16(t, r) {
            var n, o, i;
            return y.default.wrap(function _callee16$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, n = u.default.get("shelfId") || "", e.next = 4, (0, f.default)({
                        shelfId: n
                    });

                  case 4:
                    o = e.sent, i = o && 3 == o.status, t({
                        type: c.SET_PERSONAL_UNREAD,
                        payload: i
                    }), a && a(o), e.next = 12;
                    break;

                  case 10:
                    e.prev = 10, e.t0 = e.catch(0);

                  case 12:
                    return e.abrupt("return", r());

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, _callee16, this, [ [ 0, 10 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    }, t.fetchDiscountCardInfo = function fetchDiscountCardInfo(a) {
        return r = _asyncToGenerator(y.default.mark(function _callee17(i, t) {
            var r, n;
            return y.default.wrap(function _callee17$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    try {
                        r = u.default.get("shelfId") || "", n = {
                            advertionPositionCode: "S1-1",
                            shelfId: r,
                            channelType: "1"
                        }, Promise.all([ v.default.get("getUserDiscountCard", {
                            shelfId: r
                        }, {
                            showToast: !1
                        }), v.default.get("storeBanners", n, {
                            showToast: !1
                        }).catch(function() {
                            return Promise.resolve(null);
                        }) ]).then(function(e) {
                            var t = g(e, 2), r = t[0], n = t[1], o = {
                                card: r,
                                bannerData: ((0, p.getAdvPosition)(n || [], "S1-1") || [])[0]
                            };
                            i({
                                type: c.SET_DISCOUNT_CARD_INFO,
                                payload: o
                            }), a && a(o);
                        }).catch(function() {
                            i({
                                type: c.SET_DISCOUNT_CARD_INFO,
                                payload: null
                            }), a && a(null);
                        });
                    } catch (e) {}
                    return e.abrupt("return", t());

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, _callee17, this);
        })), function(e, t) {
            return r.apply(this, arguments);
        };
        var r;
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setAuthLaction = t.setUserInfo = t.updateCity = void 0;
    var n = r(10);
    t.updateCity = function updateCity(e) {
        return {
            type: n.UPDATE_CITY,
            payload: e || {}
        };
    }, t.setUserInfo = function setUserInfo(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {};
        return {
            type: n.SET_USER_INFO,
            payload: t
        };
    }, t.setAuthLaction = function setAuthLaction(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {};
        return {
            type: n.SET_AUTH_LACTION,
            payload: t || {}
        };
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sendPageModel = t.pushEvent = t.pushPageModule = t.setPage = void 0;
    var n = _interopRequireDefault(r(0)), o = _interopRequireDefault(r(275));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    n.default.log || (n.default.log = new o.default());
    var i = n.default.log;
    t.setPage = function setPage(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {};
        return i.setPage(t), {
            type: "SET_PAGE",
            payload: t || {}
        };
    }, t.pushPageModule = function pushPageModule(e) {
        return i.pushPageModule(e), {
            type: "PUSH_PAGE_MODULE",
            payload: e || {}
        };
    }, t.pushEvent = function pushEvent(e) {
        return i.pushEvent(e), {
            type: "PUSH_EVENT",
            payload: e || {}
        };
    }, t.sendPageModel = function sendPageModel(e) {
        return i.sendPageModel(e), {
            type: "SEND",
            payload: e || {}
        };
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = _interopRequireDefault(r(3)), u = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }, s = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    function yD(e, t, r) {
        null === e && (e = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(e, t);
        if (void 0 === n) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : yD(o, t, r);
        }
        if ("value" in n) return n.value;
        var i = n.get;
        return void 0 !== i ? i.call(r) : void 0;
    }
    t.default = function auth(i) {
        return function() {
            function Auth() {
                var e = this;
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, Auth);
                var t, n = function _possibleConstructorReturn(e, t) {
                    if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).apply(this, arguments));
                return n.repeatUserRequestFlag = !1, n.onGetUserInfo = (t = _asyncToGenerator(a.default.mark(function _callee(t) {
                    var r;
                    return a.default.wrap(function _callee$(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if ("getUserInfo:ok" == t.detail.errMsg) return r = {}, t.detail.userInfo && (r = t.detail.userInfo), 
                            e.next = 5, n.authorizeGetUseInfo(r);
                            e.next = 8;
                            break;

                          case 5:
                            return e.abrupt("return", e.sent);

                          case 8:
                            (0, d.Tips)("您已取消了授权");

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, _callee, e);
                })), function(e) {
                    return t.apply(this, arguments);
                }), n;
            }
            var t, r, e, n, o;
            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(Auth, i), s(Auth, [ {
                key: "componentWillReceiveProps",
                value: function componentWillReceiveProps(e) {
                    return yD(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "componentWillReceiveProps", this) && yD(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "componentWillReceiveProps", this).call(this, e);
                }
            }, {
                key: "componentWillMount",
                value: function componentWillMount() {
                    return yD(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "componentWillMount", this) && yD(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "componentWillMount", this).call(this);
                }
            }, {
                key: "componentDidMount",
                value: function componentDidMount() {
                    return "PAGE" === this.$componentType && this.initAuth(), yD(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "componentDidMount", this) && yD(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "componentDidMount", this).call(this);
                }
            }, {
                key: "componentDidShow",
                value: function componentDidShow() {
                    return yD(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "componentDidShow", this) && yD(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "componentDidShow", this).call(this);
                }
            }, {
                key: "initAuth",
                value: (o = _asyncToGenerator(a.default.mark(function _callee2(t) {
                    var r, n, o = this;
                    return a.default.wrap(function _callee2$(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!(r = this.checkAuthUserInfo())) {
                                e.next = 15;
                                break;
                            }
                            if (l.default.get(p.TOKEN_KEY)) {
                                e.next = 7;
                                break;
                            }
                            return n = r, e.next = 7, this.setFetchMiniUserParams(u({}, n));

                          case 7:
                            if (this.setUserInfo(l.default.get(p.STORAGE_USER_INFO), !1), this.repeatUserRequestFlag) return e.abrupt("return");
                            e.next = 10;
                            break;

                          case 10:
                            this.repeatUserRequestFlag = !0, setTimeout(function() {
                                o.repeatUserRequestFlag = !1;
                            }, 1e3), this.onAuthSuccessCallback && this.onAuthSuccessCallback("userInfo"), e.next = 17;
                            break;

                          case 15:
                            this.onAuthErrorCallback && this.onAuthErrorCallback("userInfo"), this.props.actions.$user.setUserInfo({
                                isAuth: !1
                            });

                          case 17:
                            t && t();

                          case 18:
                          case "end":
                            return e.stop();
                        }
                    }, _callee2, this);
                })), function initAuth(e) {
                    return o.apply(this, arguments);
                })
            }, {
                key: "accountAutoLogin",
                value: (n = _asyncToGenerator(a.default.mark(function _callee3(t, r) {
                    var n, o;
                    return a.default.wrap(function _callee3$(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (this.isRequest) return e.abrupt("return");
                            e.next = 2;
                            break;

                          case 2:
                            return e.prev = 2, this.isRequest = !0, n = t.loginRandomCode, e.next = 7, f.default.post("loginListByCode", {
                                loginRandomCode: n
                            });

                          case 7:
                            o = e.sent, this.isRequest = !1, this.setUserInfo(o), r && r(), e.next = 17;
                            break;

                          case 13:
                            e.prev = 13, e.t0 = e.catch(2), console.error(e.t0), this.isRequest = !1;

                          case 17:
                          case "end":
                            return e.stop();
                        }
                    }, _callee3, this, [ [ 2, 13 ] ]);
                })), function accountAutoLogin(e, t) {
                    return n.apply(this, arguments);
                })
            }, {
                key: "authorizeGetUseInfo",
                value: (e = _asyncToGenerator(a.default.mark(function _callee4() {
                    var t, r, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return a.default.wrap(function _callee4$(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = this.checkAuthUserInfo()) return r = t, e.next = 5, this.setFetchMiniUserParams(u({}, r));
                            e.next = 8;
                            break;

                          case 5:
                            return e.abrupt("return", e.sent);

                          case 8:
                            return e.next = 10, this.setFetchMiniUserParams(u({}, n));

                          case 10:
                            return e.abrupt("return", e.sent);

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, _callee4, this);
                })), function authorizeGetUseInfo() {
                    return e.apply(this, arguments);
                })
            }, {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    return yD(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "componentWillUnmount", this) && yD(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "componentWillUnmount", this).call(this);
                }
            }, {
                key: "getSDKVersion",
                value: function getSDKVersion() {
                    return new Promise(function(r) {
                        c.default.getSystemInfo({
                            success: function success(e) {
                                var t = e.SDKVersion.replace(/\./g, "");
                                r(Number(t));
                            },
                            fail: function fail() {
                                r(null);
                            }
                        });
                    });
                }
            }, {
                key: "getUserProfileHOC",
                value: function getUserProfileHOC() {
                    var i = this;
                    return new Promise(function(o, t) {
                        var r;
                        wx.getUserProfile({
                            desc: "需要您的授权才能访问能量站哦",
                            success: (r = _asyncToGenerator(a.default.mark(function _callee5(t) {
                                var r, n;
                                return a.default.wrap(function _callee5$(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return r = t.userInfo, n = void 0 === r ? {} : r, e.next = 3, i.setFetchMiniUserParams(u({}, n));

                                      case 3:
                                        o(n);

                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, _callee5, i);
                            })), function success(e) {
                                return r.apply(this, arguments);
                            }),
                            fail: function fail(e) {
                                (0, d.Tips)("您已取消了授权"), t(e);
                            }
                        });
                    });
                }
            }, {
                key: "setFetchMiniUserParams",
                value: (r = _asyncToGenerator(a.default.mark(function _callee6(t) {
                    var r, n, o, i;
                    return a.default.wrap(function _callee6$(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, c.default.login();

                          case 2:
                            return r = e.sent, n = u({}, t, {
                                appType: "customerShelfMini",
                                code: r.code
                            }), e.next = 6, this.fetchMiniUserInfo(n);

                          case 6:
                            return o = e.sent, t && void 0 !== t.country ? this.saveWXAuthUserInfo(u({}, t)) : o && o.userid ? (i = {
                                userid: o.userid,
                                openid: o.openid,
                                unionid: o.unionid
                            }, this.saveWXAuthUserInfo(i)) : (d.logManager.error({
                                url: "fetchMiniUserInfo",
                                userData: t,
                                userInfo: o
                            }), this.saveWXAuthUserInfo({
                                isAuth: 1
                            })), e.abrupt("return", o);

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, _callee6, this);
                })), function setFetchMiniUserParams(e) {
                    return r.apply(this, arguments);
                })
            }, {
                key: "fetchMiniUserInfo",
                value: (t = _asyncToGenerator(a.default.mark(function _callee7(t) {
                    var r;
                    return a.default.wrap(function _callee7$(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, f.default.post("userMiniInfo", t);

                          case 3:
                            if ((r = e.sent).token) return this.setUserInfo(u({}, r), !0), e.abrupt("return", r);
                            e.next = 9;
                            break;

                          case 9:
                            c.default.showModal({
                                title: "提示",
                                content: "获取用户信息失败"
                            });

                          case 10:
                            e.next = 15;
                            break;

                          case 12:
                            e.prev = 12, e.t0 = e.catch(0), console.error(e.t0);

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, _callee7, this, [ [ 0, 12 ] ]);
                })), function fetchMiniUserInfo(e) {
                    return t.apply(this, arguments);
                })
            }, {
                key: "setUserInfo",
                value: function setUserInfo(e, t) {
                    e && (1 < arguments.length && void 0 !== t && !t || (l.default.set(p.STORAGE_USER_INFO, e), 
                    e.token && l.default.set(p.TOKEN_KEY, e.token)), delete e.token, this.props.actions.$user.setUserInfo(u({
                        isAuth: !0
                    }, e)));
                }
            }, {
                key: "saveWXAuthUserInfo",
                value: function saveWXAuthUserInfo(e) {
                    e && l.default.set(h, e, 2592e3);
                }
            }, {
                key: "checkAuthUserInfo",
                value: function checkAuthUserInfo() {
                    return l.default.get(h);
                }
            } ]), Auth;
        }();
    };
    var c = _interopRequireDefault(r(0)), l = _interopRequireDefault(r(9)), f = _interopRequireDefault(r(2)), p = r(10), d = r(1);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function _asyncToGenerator(e) {
        return function() {
            var a = e.apply(this, arguments);
            return new Promise(function(o, i) {
                return function step(e, t) {
                    try {
                        var r = a[e](t), n = r.value;
                    } catch (e) {
                        return void i(e);
                    }
                    if (!r.done) return Promise.resolve(n).then(function(e) {
                        step("next", e);
                    }, function(e) {
                        step("throw", e);
                    });
                    o(n);
                }("next");
            });
        };
    }
    var h = "SAVE_AUTH_USER_DATA";
}, function(e, t, r) {}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        if (e) {
            var t = u.Storage.get("shelfId"), r = u.Storage.get("shelfCode");
            e.authUrlParams = {
                shelfId: t,
                shelfCode: r,
                t: new Date().getTime()
            }, e.title && (e.webviewParams = {
                title: e.title || ""
            }), (0, n.default)(e);
        }
    }, t.formatH5Url = function formatH5Url(e) {
        var t = u.Storage.get("shelfId"), r = u.Storage.get("shelfCode"), n = e, o = s.mapBasePath.customer + "/autoLogin/index.html", i = encodeURIComponent(n + e);
        e.startsWith("http") && (i = encodeURIComponent(e));
        var a = u.Storage.get(c.TOKEN_KEY);
        return o + "?token=" + a + (t ? "&shelfId=" + t : "") + (r ? "&shelfCode=" + r : "") + "&t=" + new Date().getTime() + "&redirect=" + i;
    }, t.formatShareUrl = function formatShareUrl(e) {
        var t = e + e;
        e.startsWith("http") && (t = e);
        return t;
    };
    var u = r(1), s = r(87), n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(s), c = r(10);
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.encryptData = t.getPublicKey = void 0;
    var n, o, a = _interopRequireDefault(r(3)), u = t.getPublicKey = (n = _asyncToGenerator(a.default.mark(function _callee() {
        var t, r, n, o, i;
        return a.default.wrap(function _callee$(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (t = new Date().getTime(), r = s.default.get("publicKeyStr") || "", n = void 0, 
                (n = "" !== r ? r.saveTime : t) < t && (s.default.remove("publicKeyStr"), r = ""), 
                r) return e.abrupt("return", r.data);
                e.next = 7;
                break;

              case 7:
                return e.next = 9, c.default.get("requestPublicKey");

              case 9:
                return o = e.sent, n = new Date().getTime() + 6e3, i = {
                    data: o,
                    saveTime: n
                }, s.default.set("publicKeyStr", i), e.abrupt("return", o);

              case 14:
              case "end":
                return e.stop();
            }
        }, _callee, this);
    })), function getPublicKey() {
        return n.apply(this, arguments);
    }), s = (t.encryptData = (o = _asyncToGenerator(a.default.mark(function _callee2(t) {
        var r, n, o, i;
        return a.default.wrap(function _callee2$(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, u();

              case 2:
                return r = e.sent, n = "-----BEGIN PUBLIC KEY-----" + r + "-----END PUBLIC KEY-----", 
                (o = new l.JSEncrypt()).setPublicKey(n), i = o.encrypt(t), e.abrupt("return", i);

              case 8:
              case "end":
                return e.stop();
            }
        }, _callee2, this);
    })), function encryptData(e) {
        return o.apply(this, arguments);
    }), _interopRequireDefault(r(9))), c = _interopRequireDefault(r(2)), l = r(302);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function _asyncToGenerator(e) {
        return function() {
            var a = e.apply(this, arguments);
            return new Promise(function(o, i) {
                return function step(e, t) {
                    try {
                        var r = a[e](t), n = r.value;
                    } catch (e) {
                        return void i(e);
                    }
                    if (!r.done) return Promise.resolve(n).then(function(e) {
                        step("next", e);
                    }, function(e) {
                        step("throw", e);
                    });
                    o(n);
                }("next");
            });
        };
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    function LG(e, t, r) {
        null === e && (e = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(e, t);
        if (void 0 === n) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : LG(o, t, r);
        }
        if ("value" in n) return n.value;
        var i = n.get;
        return void 0 !== i ? i.call(r) : void 0;
    }
    t.default = function correctKeyboard(e) {
        return function() {
            function GetLocation() {
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, GetLocation);
                var t = function _possibleConstructorReturn(e, t) {
                    if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }(this, (GetLocation.__proto__ || Object.getPrototypeOf(GetLocation)).apply(this, arguments));
                return t.count = 1, t.limitCount = 2, t.correctKeyboard = function(e) {
                    if (t.count > t.limitCount) return !1;
                    if (-1 < e.indexOf("0")) {
                        if (t.count === t.limitCount) return o.default.hideToast(), o.default.showModal({
                            content: "您的账户存在风险，为保证账号安全，请重置密码~",
                            confirmText: "去重置密码",
                            showCancel: !1,
                            confirmColor: "#FABE39"
                        }).then(function(e) {
                            e.confirm && i.feNavigator.redirectTo("/packageA/pages/setPassword/index", {
                                status: "2"
                            });
                        }), !0;
                        t.count += 1;
                    }
                    return !1;
                }, t;
            }
            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
            }(GetLocation, e), n(GetLocation, [ {
                key: "componentWillReceiveProps",
                value: function componentWillReceiveProps(e) {
                    return LG(GetLocation.prototype.__proto__ || Object.getPrototypeOf(GetLocation.prototype), "componentWillReceiveProps", this) && LG(GetLocation.prototype.__proto__ || Object.getPrototypeOf(GetLocation.prototype), "componentWillReceiveProps", this).call(this, e);
                }
            }, {
                key: "componentWillMount",
                value: function componentWillMount() {
                    return LG(GetLocation.prototype.__proto__ || Object.getPrototypeOf(GetLocation.prototype), "componentWillMount", this) && LG(GetLocation.prototype.__proto__ || Object.getPrototypeOf(GetLocation.prototype), "componentWillMount", this).call(this);
                }
            }, {
                key: "componentDidShow",
                value: function componentDidShow() {
                    return this.count = 1, LG(GetLocation.prototype.__proto__ || Object.getPrototypeOf(GetLocation.prototype), "componentDidShow", this) && LG(GetLocation.prototype.__proto__ || Object.getPrototypeOf(GetLocation.prototype), "componentDidShow", this).call(this);
                }
            }, {
                key: "componentDidMount",
                value: function componentDidMount() {
                    return LG(GetLocation.prototype.__proto__ || Object.getPrototypeOf(GetLocation.prototype), "componentDidMount", this) && LG(GetLocation.prototype.__proto__ || Object.getPrototypeOf(GetLocation.prototype), "componentDidMount", this).call(this);
                }
            }, {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    return LG(GetLocation.prototype.__proto__ || Object.getPrototypeOf(GetLocation.prototype), "componentWillUnmount", this) && LG(GetLocation.prototype.__proto__ || Object.getPrototypeOf(GetLocation.prototype), "componentWillUnmount", this).call(this);
                }
            } ]), GetLocation;
        }();
    };
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6)), i = r(1);
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    };
    t.addShelfHistory = function addShelfHistory(e) {
        try {
            var t = o.Storage.get(a, []), r = {
                id: e.shelfCode,
                address: e.address,
                shelfCode: e.shelfCode,
                shelfName: e.shelfName,
                shelfRandomCode: e.shelfRandomCode,
                visitTime: new Date().getTime()
            };
            if (t) t.some(function(e) {
                var t = e.id === r.id;
                return t && Object.assign(e, n({}, function filterEmptyValue(r) {
                    var n = {};
                    if (!r || r && 0 === Object.keys(r).length) return n;
                    return Object.keys(r).forEach(function(e) {
                        var t = r[e];
                        "" !== t && null != t && "undefined" !== t && "null" !== t && (n[e] = t);
                    }), n;
                }(r), {
                    times: (e.times || 1) + 1
                })), t;
            }) || t.push(r);
            o.Storage.setLocal(a, t);
        } catch (e) {
            console.error(e);
        }
    }, t.getShelfHistory = function getShelfHistory(e) {
        var r = e && !0 === e.isAuth;
        return new Promise(function(t) {
            r ? i.default.get("shelfHistory").then(function(e) {
                t(e && e.length ? e : []);
            }).catch(function() {
                return t([]);
            }) : t([]);
        });
    };
    var o = r(1), i = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(2));
    var a = "shelfHistory";
}, , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = _interopRequireDefault(r(3));
    t.getPayMethodItemByPaymentType = function getPayMethodItemByPaymentType(t) {
        return L.find(function(e) {
            return e.paymentType === t;
        });
    }, t.default = function PaymentList(t) {
        if ((0, c.getXMFApp)()) return L.filter(function(e) {
            return "xmf" === e.channel;
        });
        if (o.Storage.get("fengxiangOpenId")) return L.filter(function(e) {
            return 36 === e.id;
        });
        if (t.isWeixin || (0, a.isWeixin)()) return L.filter(function(e) {
            return "wx" === e.channel && (!e.isEnable || e.isEnable(t.shelf));
        });
        return L.filter(function(e) {
            return !!(e.openType && -1 < e.openType.split(",").indexOf(String(t.openType))) && (!e.isEnable || e.isEnable(t.shelf));
        });
    };
    var o = r(1), c = r(137), l = _interopRequireDefault(r(423)), i = _interopRequireDefault(r(425)), n = _interopRequireDefault(r(426)), a = r(20), u = _interopRequireDefault(r(427)), f = _interopRequireDefault(r(13)), p = r(140), d = _interopRequireDefault(r(428)), h = _interopRequireDefault(r(429)), y = _interopRequireDefault(r(430)), g = _interopRequireDefault(r(431)), v = _interopRequireDefault(r(432)), m = _interopRequireDefault(r(433)), b = _interopRequireDefault(r(434)), _ = _interopRequireDefault(r(435)), P = _interopRequireDefault(r(436)), S = _interopRequireDefault(r(437)), A = _interopRequireDefault(r(438)), C = _interopRequireDefault(r(439)), T = r(82);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function _asyncToGenerator(e) {
        return function() {
            var a = e.apply(this, arguments);
            return new Promise(function(o, i) {
                return function step(e, t) {
                    try {
                        var r = a[e](t), n = r.value;
                    } catch (e) {
                        return void i(e);
                    }
                    if (!r.done) return Promise.resolve(n).then(function(e) {
                        step("next", e);
                    }, function(e) {
                        step("throw", e);
                    });
                    o(n);
                }("next");
            });
        };
    }
    var O, D, R, E, I, M, w, N, j, L = [ {
        id: 1,
        openType: "1,7",
        paymentType: 4,
        channel: "wx",
        icon: h.default,
        payDataMapKey: "balanceData",
        name: "账户余额",
        checkedSort: 8,
        checkBalance: !0,
        needPassword: !0
    }, {
        id: 2,
        openType: "8",
        paymentType: 12,
        icon: b.default,
        payDataMapKey: "xmfBalanceData",
        name: "积分支付",
        checkedSort: 1,
        checkBalance: !0,
        needPassword: !0
    }, {
        id: 3,
        openType: "9",
        paymentType: 13,
        icon: b.default,
        payDataMapKey: "centermBalanceData",
        name: "积分支付",
        checkedSort: 1,
        checkBalance: !0,
        handlePayment: (j = _asyncToGenerator(s.default.mark(function _callee(t) {
            var r, n;
            return s.default.wrap(function _callee$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = "", e.prev = 1, e.next = 4, (0, c.commonCreatePay)(t);

                  case 4:
                    return n = e.sent, r = n.orderId, e.abrupt("return", {
                        type: "success",
                        orderId: r
                    });

                  case 9:
                    return e.prev = 9, e.t0 = e.catch(1), (r || e.t0.orderId) && (0, c.cancelPay)(r || e.t0.orderId), 
                    e.abrupt("return", {
                        type: "failed",
                        orderId: e.t0 && e.t0.orderId,
                        msg: e.t0
                    });

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, _callee, void 0, [ [ 1, 9 ] ]);
        })), function handlePayment(e) {
            return j.apply(this, arguments);
        })
    }, {
        id: 4,
        openType: "1",
        paymentType: 1,
        channel: "wx",
        icon: d.default,
        name: "微信支付",
        checkedSort: 10,
        handlePayment: (N = _asyncToGenerator(s.default.mark(function _callee2(t, r) {
            var n, o, i, a, u;
            return s.default.wrap(function _callee2$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = "", e.prev = 1, e.next = 4, (0, c.createPayOrder)(t);

                  case 4:
                    return o = e.sent, n = o.orderId, e.next = 8, (0, c.checkWeChatPayData)(o, r);

                  case 8:
                    return i = e.sent, a = i.payParam, (0, T.setNeedClearCartInHomeFlag)(), e.next = 13, 
                    (0, l.default)({
                        payParam: a,
                        serveData: o
                    });

                  case 13:
                    return u = e.sent, e.abrupt("return", {
                        payParam: u.payParam,
                        type: "success",
                        orderId: n
                    });

                  case 17:
                    if (e.prev = 17, e.t0 = e.catch(1), (0, T.clearNeedClearCartInHomeFlag)(), e.t0 && "cancel" === e.t0.type) return e.abrupt("return", {
                        type: "cancel",
                        orderId: e.t0.orderId,
                        msg: e.t0
                    });
                    e.next = 22;
                    break;

                  case 22:
                    return e.abrupt("return", {
                        type: "failed",
                        orderId: e.t0 && e.t0.orderId,
                        msg: e.t0
                    });

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, _callee2, void 0, [ [ 1, 17 ] ]);
        })), function handlePayment(e, t) {
            return N.apply(this, arguments);
        })
    }, {
        id: 5,
        openType: "busPay",
        paymentType: 11,
        channel: "wx",
        icon: y.default,
        payDataMapKey: "businessPayInfoList",
        checkBalance: !0,
        name: "企业支付",
        checkedSort: 5,
        needPassword: !0
    }, {
        id: 6,
        openType: "4",
        paymentType: 3,
        icon: g.default,
        name: "龙支付",
        checkedSort: 2
    }, {
        id: 7,
        openType: "5",
        paymentType: 6,
        icon: v.default,
        icon2: m.default,
        name: "云闪付",
        checkedSort: 2,
        handlePayment: (w = _asyncToGenerator(s.default.mark(function _callee3(t, r) {
            var n, o;
            return s.default.wrap(function _callee3$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = "", e.prev = 1, e.next = 4, (0, c.createPayOrder)(t);

                  case 4:
                    return o = e.sent, n = o.orderId, (0, i.default)(o, r), e.abrupt("return", {
                        type: "success",
                        orderId: n
                    });

                  case 10:
                    return e.prev = 10, e.t0 = e.catch(1), e.abrupt("return", {
                        type: "failed",
                        orderId: e.t0 && e.t0.orderId,
                        msg: e.t0
                    });

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, _callee3, void 0, [ [ 1, 10 ] ]);
        })), function handlePayment(e, t) {
            return w.apply(this, arguments);
        })
    }, {
        id: 8,
        openType: "6",
        paymentType: 7,
        icon: S.default,
        name: "一网通银行卡支付",
        checkedSort: 2,
        handlePayment: (M = _asyncToGenerator(s.default.mark(function _callee4(t, r) {
            var n, o;
            return s.default.wrap(function _callee4$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = "", e.prev = 1, e.next = 4, (0, c.createPayOrder)(t);

                  case 4:
                    return o = e.sent, n = o.orderId, (0, i.default)(o, r), e.abrupt("return", {
                        type: "success",
                        orderId: n
                    });

                  case 10:
                    return e.prev = 10, e.t0 = e.catch(1), e.abrupt("return", {
                        type: "failed",
                        orderId: e.t0 && e.t0.orderId,
                        msg: e.t0
                    });

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, _callee4, void 0, [ [ 1, 10 ] ]);
        })), function handlePayment(e, t) {
            return M.apply(this, arguments);
        })
    }, {
        id: 10,
        openType: "10",
        paymentType: 15,
        icon: P.default,
        name: "和包支付",
        checkedSort: 2,
        handlePayment: (I = _asyncToGenerator(s.default.mark(function _callee5(t) {
            var r;
            return s.default.wrap(function _callee5$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, (0, c.commonCreatePay)(t);

                  case 3:
                    return r = e.sent, e.next = 6, (0, n.default)(r);

                  case 6:
                    return e.abrupt("return", {
                        type: "success",
                        orderId: r.orderId
                    });

                  case 9:
                    return e.prev = 9, e.t0 = e.catch(0), e.abrupt("return", {
                        type: "failed",
                        orderId: e.t0 && e.t0.orderId,
                        msg: e.t0
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, _callee5, void 0, [ [ 0, 9 ] ]);
        })), function handlePayment(e) {
            return I.apply(this, arguments);
        })
    }, {
        id: 11,
        channel: "xmf",
        paymentType: 4,
        icon: b.default,
        name: "丰享积分支付",
        checkedSort: 1,
        checkBalance: !0,
        needPassword: !0
    }, {
        id: 33,
        openType: "20",
        paymentType: 33,
        icon: _.default,
        name: "掌上生活支付",
        checkedSort: 2,
        handlePayment: (E = _asyncToGenerator(s.default.mark(function _callee6(t) {
            var r;
            return s.default.wrap(function _callee6$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, (0, c.commonCreatePay)(t);

                  case 3:
                    return r = e.sent, window.location.replace(r.payData), e.abrupt("return", {
                        type: "success",
                        orderId: r.orderId
                    });

                  case 8:
                    return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", {
                        type: "failed",
                        orderId: e.t0 && e.t0.orderId,
                        msg: e.t0
                    });

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, _callee6, void 0, [ [ 0, 8 ] ]);
        })), function handlePayment(e) {
            return E.apply(this, arguments);
        })
    }, {
        id: 13,
        openType: "1",
        paymentType: 34,
        channel: "wx",
        icon: C.default,
        name: "数字人民币支付",
        checkedSort: 1,
        needPassword: !0,
        key: "ecb",
        isEnable: function isEnable(e) {
            return "440300" === e.city || "350100" === e.city;
        },
        prePaymentHandle: (R = _asyncToGenerator(s.default.mark(function _callee7() {
            var t, r, n;
            return s.default.wrap(function _callee7$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, (0, u.default)();

                  case 3:
                    return t = e.sent, r = t.skipStatus, n = 0 == r, 1 == r && o.feNavigator.navigateTo(f.default.ecbSignTerms), 
                    e.abrupt("return", Promise.resolve(n));

                  case 10:
                    return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", Promise.resolve(!1));

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, _callee7, void 0, [ [ 0, 10 ] ]);
        })), function prePaymentHandle() {
            return R.apply(this, arguments);
        }),
        handlePayment: (D = _asyncToGenerator(s.default.mark(function _callee8(t, e) {
            var r, n;
            return s.default.wrap(function _callee8$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = (0, o.Loading)("支付中"), e.prev = 1, e.next = 4, (0, c.createPayOrder)(t);

                  case 4:
                    return n = e.sent, r.hide(), e.abrupt("return", {
                        type: "success",
                        orderId: n.orderId
                    });

                  case 9:
                    if (e.prev = 9, e.t0 = e.catch(1), r.hide(), e.t0 && "cancel" === e.t0.type) return e.abrupt("return", {
                        type: "cancel",
                        orderId: e.t0.orderId,
                        msg: e.t0
                    });
                    e.next = 14;
                    break;

                  case 14:
                    return e.abrupt("return", {
                        type: "failed",
                        orderId: e.t0 && e.t0.orderId,
                        msg: e.t0
                    });

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, _callee8, void 0, [ [ 1, 9 ] ]);
        })), function handlePayment(e, t) {
            return D.apply(this, arguments);
        })
    }, {
        id: 36,
        openType: "36",
        paymentType: 36,
        icon: A.default,
        name: "丰享支付",
        channel: "wx",
        checkedSort: 2,
        isEnable: function isEnable() {
            return !!o.Storage.get("fengxiangOpenId");
        },
        handlePayment: (O = _asyncToGenerator(s.default.mark(function _callee9(t) {
            var r;
            return s.default.wrap(function _callee9$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, (0, c.commonCreatePay)(t);

                  case 3:
                    return r = e.sent, (0, p.playSuccessHandleNotRedirect)(), window.location.replace(r.payData), 
                    e.abrupt("return", {
                        type: "success",
                        orderId: r.orderId
                    });

                  case 9:
                    return e.prev = 9, e.t0 = e.catch(0), e.abrupt("return", {
                        type: "failed",
                        orderId: e.t0 && e.t0.orderId,
                        msg: e.t0
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, _callee9, void 0, [ [ 0, 9 ] ]);
        })), function handlePayment(e) {
            return O.apply(this, arguments);
        })
    } ];
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkWeChatPayData = t.getXMFApp = t.cancelPay = t.commonCreatePay = t.createPayOrder = void 0;
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(2)), a = r(1);
    t.createPayOrder = function createPayOrder(e) {
        return new Promise(function(t, r) {
            n.default.post("weixinPay", e, {
                showLoading: !0
            }).then(function(e) {
                t(e);
            }).catch(function(e) {
                r(e);
            });
        });
    }, t.commonCreatePay = function commonCreatePay(e) {
        return new Promise(function(t, r) {
            n.default.post("commonCreateOrder", e, {
                showLoading: !0,
                async: !1,
                once: !0
            }).then(function(e) {
                t(e);
            }).catch(function(e) {
                r(e);
            });
        });
    }, t.cancelPay = function cancelPay(e) {
        return new Promise(function(t, r) {
            e ? n.default.get("cancelPay", {
                orderId: e
            }, {
                showLoading: !0
            }).then(function(e) {
                t(e);
            }).catch(function(e) {
                r(e);
            }) : r();
        });
    }, t.getXMFApp = function getXMFApp() {
        return !1;
    }, t.checkWeChatPayData = function checkWeChatPayData(o, i) {
        return new Promise(function(e, t) {
            var r = null, n = "";
            try {
                n = o.payData ? function checkPayParamsError(t, r) {
                    var n = 0, o = "";
                    if (t && ([ {
                        name: "timeStamp",
                        code: 4010
                    }, {
                        name: "nonceStr",
                        code: 4011
                    }, {
                        name: "package",
                        code: 4012
                    }, {
                        name: "signType",
                        code: 4013
                    }, {
                        name: "paySign",
                        code: 4014
                    } ].some(function(e) {
                        return void 0 === ("appId" != e.name && t[e.name]) && (n = e.code, o = "userid: " + r.userid + " 支付遇到问题，缺少参数：" + e.name, 
                        !0);
                    }), n)) return (0, a.Tips)("支付请求失败，请稍后重试"), o;
                    return o;
                }(r = JSON.parse(o.payData.replace(/'/g, '"')), i) : "无支付参数";
            } catch (e) {
                return void t(e);
            }
            n ? t(n) : e({
                payParam: r,
                orderId: o.orderId
            });
        });
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    t.default = function logToServer(e, t, r) {
        var n = {};
        "string" == typeof e ? n.msg = e : "object" === (void 0 === e ? "undefined" : o(e)) && (n = e);
        return n.time = (0, u.default)(new Date()).format("YYYY-MM-DD HH:mm:ss") + "." + new Date().getMilliseconds(), 
        i.default.post("useragent/log?level=" + t, n, {
            filedMsg: !1,
            showLoading: !1
        }).then(function() {
            r && (0, a.default)(r) && r();
        }).catch(function() {
            r && (0, a.default)(r) && r();
        });
    };
    var i = _interopRequireDefault(r(2)), a = _interopRequireDefault(r(27)), u = _interopRequireDefault(r(11));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = new (function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(424)).default)();
    t.default = n;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function playSuccessHandle(t) {
        var e = "customerCart_" + (sessionStorage.getItem("shelfCode") || localStorage.getItem("shelfCode"));
        try {
            var r = JSON.parse(localStorage.getItem(e) || ""), n = r.data.filter(function(e) {
                return e.selected;
            }).map(function(e) {
                return e.productId;
            }), o = JSON.parse(localStorage.getItem("oncePurchased") || "[]");
            o = (0, i.default)([].concat(_toConsumableArray(o), _toConsumableArray(n))), localStorage.setItem("oncePurchased", JSON.stringify(o)), 
            window.top.location.replace(window.location.origin + "/static/customer/v3/paySuccess/index.html?orderId=" + (t || "")), 
            r.data = r.data.filter(function(e) {
                return !e.selected;
            }), localStorage.setItem(e, JSON.stringify(r));
        } catch (e) {
            console.log(e), window.top.location.replace(window.location.origin + "/static/customer/v3/paySuccess/index.html?orderId=" + (t || ""));
        }
    }, t.playSuccessHandleNotRedirect = function playSuccessHandleNotRedirect() {
        var e = "customerCart_" + (sessionStorage.getItem("shelfCode") || localStorage.getItem("shelfCode"));
        try {
            var t = JSON.parse(localStorage.getItem(e) || ""), r = t.data.filter(function(e) {
                return e.selected;
            }).map(function(e) {
                return e.productId;
            }), n = JSON.parse(localStorage.getItem("oncePurchased") || "[]");
            n = (0, i.default)([].concat(_toConsumableArray(n), _toConsumableArray(r))), localStorage.setItem("oncePurchased", JSON.stringify(n)), 
            t.data = t.data.filter(function(e) {
                return !e.selected;
            }), localStorage.setItem(e, JSON.stringify(t));
        } catch (e) {
            console.log(e);
        }
    };
    var i = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(53));
    function _toConsumableArray(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
        }
        return Array.from(e);
    }
}, , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function dateFormat(e) {
        var t = e;
        try {
            if ("string" == typeof e) return e.substr(0, e.lastIndexOf(":"));
            e && (t = (0, n.default)(new Date(e)).format("YYYY-MM-DD HH:mm"));
        } catch (e) {}
        return t;
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(11));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PRIVACY_POLICY_STORAGE_KEY = void 0;
    var n = r(1), o = function _interopRequireWildcard(e) {
        {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t;
        }
    }(r(32));
    var i = t.PRIVACY_POLICY_STORAGE_KEY = "PRIVACY_POLICY", a = {
        modalId: o.PRIVACY_POLICY_MODAL_ID,
        extraData: {},
        modalCode: "",
        isShow: function isShow() {
            return !n.Storage.get(i);
        }
    };
    t.default = a;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    t.default = function(e) {
        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(ProductItemHOC, e), n(ProductItemHOC, [ {
            key: "flyInCart",
            value: function flyInCart() {
                return new Promise(function(e) {
                    setTimeout(function() {
                        e();
                    }, 300);
                });
            }
        } ]), ProductItemHOC;
        function ProductItemHOC() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, ProductItemHOC);
            var a = function _possibleConstructorReturn(e, t) {
                if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(this, (ProductItemHOC.__proto__ || Object.getPrototypeOf(ProductItemHOC)).apply(this, arguments));
            return a.hasCartAnimate = !1, a.animation = !1, a.onStepperBefore = function(e, t) {
                var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
                if (a.hasCartAnimate = r, !a.animation) {
                    var o = a.props.onOpenExpiredTipsDialog, i = a.props.$cart.simpleCartProductMap;
                    if (!(void 0 === i ? {} : i)[e.productId] && e.hasDangerFlag && !e.ignoreDangerTips && n) o && o(e, {
                        onCancel: function onCancel() {
                            return setTimeout(t, 200);
                        },
                        onConfirm: function onConfirm() {
                            return setTimeout(t, 200);
                        }
                    }); else t();
                }
            }, a.onAddCallback = function(e) {
                if (!a.animation) {
                    var t = a.props, r = t.product, n = t.actions, o = t.addEventCode;
                    a.hasCartAnimate && e <= r.stockQuantity ? (a.animation = !0, a.flyInCart().then(function() {
                        a.animation = !1, a.props.actions.$cart.addProductToCart(r);
                    })) : a.props.actions.$cart.addProductToCart(r), n && n.$log && o && n.$log.pushEvent({
                        eventCode: o,
                        eventName: "添加商品",
                        relateFromId: r.productId,
                        relateFromType: 2
                    });
                }
            }, a.onReduceCallback = function() {
                var e = a.props, t = e.product, r = e.actions, n = e.reduceEventCode;
                a.props.actions.$cart.reduceCartProduct(t), r && r.$log && n && r.$log.pushEvent({
                    eventCode: n,
                    eventName: "减少商品",
                    relateFromId: t.productId,
                    relateFromType: 2
                });
            }, a.renderRestrictionsNum = function() {
                var e = a.props.product.homeRestrictionsNumber;
                return e && 0 < e ? React.createElement(View, {
                    className: "restrictions_info_label"
                }, "限", e, "件") : null;
            }, a;
        }
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function scanQRCode() {
        return new Promise(function(r, n) {
            wx.scanCode({
                onlyFromCamera: !0,
                scanType: [ "barCode", "qrCode" ],
                success: function success(e) {
                    if ("scanCode:ok" === e.errMsg && e.result) {
                        var t = e.result.split(",")[1] || e.result;
                        if (!t) return void n({
                            result: t,
                            msg: "无法识别您选购的商品信息，换个商品试试吧!"
                        });
                        /^[0-9]*$/.test(t) && 8 <= t.length && t.length <= 13 ? r(t) : n({
                            result: t,
                            msg: "该商品不存在！"
                        });
                    } else n({
                        error: !0,
                        res: e
                    });
                }
            });
        });
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PRIVACY_POLICY_STORAGE_KEY = void 0;
    var n = r(1), o = function _interopRequireWildcard(e) {
        {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t;
        }
    }(r(14));
    var i = t.PRIVACY_POLICY_STORAGE_KEY = "PRIVACY_POLICY", a = {
        modalId: o.PRIVACY_POLICY_MODAL_ID,
        extraData: {},
        modalCode: "",
        isShow: function isShow() {
            return !n.Storage.get(i);
        }
    };
    t.default = a;
}, , , , , , , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
    t.default = n.default.getSystemInfoSync;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
    t.default = n.default.getStorageSync;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
    t.default = n.default.setStorageSync;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
    t.default = n.default.removeStorageSync;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function tips(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1500;
        setTimeout(function() {
            n.default.showToast({
                icon: "none",
                title: e,
                duration: t
            });
        }, 0);
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function loading(e) {
        "string" == typeof e ? n.default.showLoading({
            title: e
        }) : n.default.showLoading(e);
        return {
            hide: function hide() {
                n.default.hideLoading();
            }
        };
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function navigateBack(e) {
        n.default.navigateBack(e);
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function previewImage(e) {
        n.default.previewImage(e);
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function showShareMenu(e) {
        n.default.showShareMenu(e);
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
            var r = [], n = !0, o = !1, i = void 0;
            try {
                for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), 
                !t || r.length !== t); n = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    !n && u.return && u.return();
                } finally {
                    if (o) throw i;
                }
            }
            return r;
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
    t.resolveMPUrl = function resolveMPUrl(e) {
        if (!e) return null;
        if (/^mp:\/\/(.+?)\/(.+?)\/(.+?)\/(.+)$|^mp:\/\/(.+?)\/(.+?)\/(.+)$/.test(e)) {
            var t = e.split("/"), r = s(t, 6), n = r[2], o = r[3], i = r[4], a = r[5], u = {};
            try {
                u = JSON.parse(a);
            } catch (e) {}
            return {
                appId: n,
                ghId: o,
                path: decodeURIComponent(i),
                extraData: u
            };
        }
        return null;
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function showToast(e) {
        n.default.showToast(e);
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function showModal(e) {
        n.default.showModal(e);
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return n.default.makePhoneCall(e);
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function hideHomeButton() {
        n.default.hideHomeButton();
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function subscribeMessage(i) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function(e) {
            var t = a.moduleName, r = u.default.getCurrentPages(), n = r[r.length - 1];
            if (t && n && (n._subscribeMoudle || (n._subscribeMoudle = {}), !!n._subscribeMoudle[t])) return void e();
            var o = function getSubscribeTemplateIds(e) {
                0;
                return s.default[e] || [];
            }(i);
            0 !== o.length ? u.default.requestSubscribeMessage({
                tmplIds: o,
                success: function success(e) {
                    console.log("subscribe success", o, e), t && n && n._subscribeMoudle && (n._subscribeMoudle[t] = {
                        count: 1
                    });
                },
                fail: function fail(e) {
                    return console.error("subscribe error", e);
                },
                complete: function complete() {
                    return e();
                }
            }) : e();
        });
    };
    var u = _interopRequireDefault(r(6)), s = (r(21), _interopRequireDefault(r(172)));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    _interopRequireDefault(r(173));
    var n = _interopRequireDefault(r(174));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    t.default = n.default;
}, function(e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(21);
    function _defineProperty(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e;
    }
    var i = (_defineProperty(n = {}, o.SubscribeMessageTemplateName.COUPON, [ "3e8Dfh6y5dj8GXRNgAH1KsJRSxBIV8ruO0q0OR127Ds", "VxDtLH8jAjkbkU763v5dDE39oi-piTkODfayba0VHOI", "Mnj3AHpdO304PsAJ_KX8yygCrZzHxFzyTZuILBsX-DQ" ]), 
    _defineProperty(n, o.SubscribeMessageTemplateName.ACTIVITY, [ "Mnj3AHpdO304PsAJ_KX8yygCrZzHxFzyTZuILBsX-DQ" ]), 
    _defineProperty(n, o.SubscribeMessageTemplateName.COUNTER_ORDER_STATUS, [ "mbUe84uByrUV7f4tEbfiM8wDabygt6wj2sZVRFgIUYg", "VxDtLH8jAjkbkU763v5dDE39oi-piTkODfayba0VHOI", "3e8Dfh6y5dj8GXRNgAH1KsJRSxBIV8ruO0q0OR127Ds" ]), 
    n);
    t.default = i;
}, function(e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(21);
    function _defineProperty(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e;
    }
    var i = (_defineProperty(n = {}, o.SubscribeMessageTemplateName.COUPON, [ "naYUTTIzltE9YLpPwStTnSiEGLBE-n4Gaa4aRkIxiug", "_6rSuyZhXDsg8aS-miqS1duLa2n1fbrNoGEMPoO5XY4", "cuMlkODQvpPJoC0JVMPosSmnMwG9n4WUhiOYT4EzUig" ]), 
    _defineProperty(n, o.SubscribeMessageTemplateName.ACTIVITY, [ "cuMlkODQvpPJoC0JVMPoscMq8tjgRuEM9QlcTBv4ZFw" ]), 
    _defineProperty(n, o.SubscribeMessageTemplateName.COUNTER_ORDER_STATUS, [ "TVdXJEE2kx6jZTwnYvz6mldxFUOOgfXCXYx__0QR_XE", "_6rSuyZhXDsg8aS-miqS1duLa2n1fbrNoGEMPoO5XY4", "naYUTTIzltE9YLpPwStTnSiEGLBE-n4Gaa4aRkIxiug" ]), 
    n);
    t.default = i;
}, , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
    var o = n.default.getRealtimeLogManager ? n.default.getRealtimeLogManager() : null, i = {
        debug: function debug() {
            for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
            o && o.debug.apply(o, arguments);
        },
        info: function info() {
            for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
            o && o.info.apply(o, arguments);
        },
        warn: function warn() {
            for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
            o && o.warn.apply(o, arguments);
        },
        error: function error() {
            for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
            o && o.error.apply(o, arguments);
        }
    };
    t.default = i;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function pageScrollTo(e) {
        n.default.pageScrollTo(e);
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function copyText(t) {
        return new Promise(function(e) {
            n.default.setClipboardData({
                data: t,
                success: function success() {
                    e();
                }
            });
        });
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function getLoginCode() {
        return n.default.login();
    };
    var n = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(6));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function scanCode() {
        return new Promise(function(t, r) {
            wx.scanCode({
                onlyFromCamera: !0,
                scanType: [ "barCode", "qrCode" ],
                success: function success(e) {
                    "scanCode:ok" === e.errMsg && e.result ? t(e.result) : r({
                        error: !0,
                        res: e
                    });
                }
            });
        });
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function getCartExchangeInfo(e, t) {
        var a = e.calculateResult.restTotal, u = [];
        return t.forEach(function(e) {
            if (e.activity) {
                var t = e.activity, r = t.activityType, n = t.businessType, o = t.markupPriceList;
                if (2 === r && 7 === n) {
                    var i = o[0];
                    a >= i.fullPrice && u.push(e);
                }
            }
        }), {
            needSatisfyValue: 0,
            productList: u
        };
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function groupCart(e) {
        var a = [], n = null, r = [];
        return e.forEach(function(t) {
            t.meetConditionCartProductList.forEach(function(e) {
                r.push({
                    rule: t,
                    cartItem: e
                });
            });
        }), y.forEach(function(e) {
            e.cartItemList = [];
        }), r.forEach(function(e) {
            var t = e.rule, r = e.cartItem;
            y.forEach(function(e) {
                e.filter(t, r.product) && (e.cartItemList.push(r), e.priceRule = t);
            });
        }), y.forEach(function(o) {
            var e = o.cartItemList;
            if (0 !== e.length) if (o.isGroupByActivityId) {
                var i = {};
                e.forEach(function(e) {
                    var t = e.product.activity;
                    if (t) {
                        var r = t.activityId;
                        i[r] || (i[r] = []), i[r].push(e);
                    }
                }), Object.keys(i).forEach(function(e) {
                    var t = i[e], r = t[0].product, n = o.name instanceof Function ? o.name(r.activity) : o.name;
                    a.push({
                        name: n,
                        cartProductList: t,
                        extraInfo: o.getPromotionInfo ? o.getPromotionInfo(t) : ""
                    });
                });
            } else {
                var t = e[0].product, r = o.name instanceof Function ? o.name(t.activity) : o.name;
                "" === r ? n = {
                    name: "",
                    cartProductList: e
                } : a.push({
                    name: r,
                    extraInfo: o.getPromotionInfo ? o.getPromotionInfo(e) : "",
                    cartProductList: e
                });
            }
        }), {
            normalCartGroup: n,
            discountCartGroupList: a
        };
    };
    var n = _interopRequireDefault(r(184)), o = _interopRequireDefault(r(185)), i = _interopRequireDefault(r(186)), a = _interopRequireDefault(r(187)), u = _interopRequireDefault(r(188)), s = _interopRequireDefault(r(189)), c = _interopRequireDefault(r(190)), l = _interopRequireDefault(r(191)), f = _interopRequireDefault(r(192)), p = _interopRequireDefault(r(193)), d = _interopRequireDefault(r(194)), h = _interopRequireDefault(r(195));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var y = [ n.default, o.default, i.default, s.default, a.default, u.default, h.default, c.default, l.default, f.default, p.default, d.default ];
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        name: "",
        filter: function filter(e) {
            return e.isNormalPriceRule();
        }
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        name: "秒杀",
        filter: function filter(e, t) {
            return !("singleDiscount" !== e.name || !t.activity || 1 != t.activity.businessType);
        }
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        name: "特惠",
        filter: function filter(e, t) {
            var r = t.activity;
            return !!r && ("singleDiscount" === e.name && (2 == r.businessType || 3 == r.businessType));
        }
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        name: "满件折",
        filter: function filter(e, t) {
            return !("singleSkuFull" !== e.name || !t.activity || 1 != t.activity.skuType || 5 != t.activity.businessType);
        }
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        name: "满件减",
        filter: function filter(e, t) {
            return !("singleSkuFull" !== e.name || !t.activity || 1 != t.activity.skuType || 6 != t.activity.businessType);
        }
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = r(4), n = {
        name: function name(e) {
            var t = "第2件优惠";
            return 5 == (e && e.discountValue) && (t = "第2件半价"), t;
        },
        filter: function filter(e) {
            return "secondDiscount" === e.name;
        },
        isGroupByActivityId: !0,
        getPromotionInfo: function getPromotionInfo(e) {
            var t = e[0], r = t.product.activity.skuType, n = t.product.activity.discountValue, o = 0;
            if (1 == r) {
                var a = 0, u = 0, s = 0;
                e.forEach(function(e) {
                    if (e.product.activity) {
                        s = e.product.activity.discountValue;
                        var t = e.quantity, r = e.product.salePrice, n = t / 2, o = (0, c.mul)((0, c.mul)(r, n), (0, 
                        c.div)(s, 10)), i = (0, c.mul)(r, n);
                        u = (0, c.add)(u, (0, c.add)(o, i));
                    }
                    a = (0, c.add)(a, (0, c.mul)(e.quantity, e.product.salePrice));
                }), o = (0, c.sub)(a, (0, c.round)(u));
            } else {
                var i = t.activityItem;
                i && (o = (0, c.round)(i.promotionPrice));
            }
            return 5 == n ? "第2件半价，已优惠 " + o + " 元" : "第2件" + n + "折，已优惠 " + o + " 元";
        }
    };
    t.default = n;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        name: "满件折",
        filter: function filter(e, t) {
            return !("multiSkuFull" !== e.name || !t.activity || 2 != t.activity.skuType || 5 != t.activity.businessType);
        },
        isGroupByActivityId: !0,
        getPromotionInfo: function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r(62)).default
    };
    t.default = n;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        name: "满件减",
        filter: function filter(e, t) {
            return !("multiSkuFull" !== e.name || !t.activity || 2 != t.activity.skuType || 6 != t.activity.businessType);
        },
        isGroupByActivityId: !0,
        getPromotionInfo: function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r(62)).default
    };
    t.default = n;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        name: "满件惠",
        filter: function filter(e, t) {
            return !("multiSkuFull" !== e.name || !t.activity || 11 != t.activity.businessType);
        },
        isGroupByActivityId: !0,
        getPromotionInfo: function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r(62)).default
    };
    t.default = n;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4), o = {
        name: "组合销售",
        filter: function filter(e) {
            return "组合销售" === e.name;
        },
        getPromotionInfo: function getPromotionInfo(e) {
            var t = 0;
            return e.forEach(function(e) {
                t = (0, n.add)(t, (0, n.mul)(e.quantity, e.product.salePrice));
            }), "已减 " + (0, n.round)((0, n.sub)(t, this.priceRule.calculateResult.total)) + " 元";
        }
    };
    t.default = o;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = r(4), o = {
        name: "超值换购",
        filter: function filter(e) {
            return "超值换购" === e.name;
        },
        getPromotionInfo: function getPromotionInfo(e) {
            var t = 0;
            e.forEach(function(e) {
                t += e.quantity;
            });
            var r = 0;
            return e.forEach(function(e) {
                e.activityItem && (r = (0, n.add)(r, e.activityItem.promotionPrice || 0));
            }), "已换购 " + t + " 件，已减 " + r + " 元";
        }
    };
    t.default = o;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = {
        name: "满件惠",
        filter: function filter(e, t) {
            return !("singleSkuFull" !== e.name || !t.activity || 1 != t.activity.skuType || 11 != t.activity.businessType);
        }
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function getGatheringProduct(e) {
        var t = [], r = [], n = [], o = [];
        return e.sort(function(e, t) {
            return e.salePrice - t.salePrice;
        }).forEach(function(e) {
            var t = e.salePrice;
            1 <= t && t < 2 && r.push(e), 2 <= t && t < 3 && n.push(e), 3 <= t && t < 4 && o.push(e);
        }), (t = (t = (t = (t = (t = t.concat(r.splice(0, 2))).concat(n.splice(0, 4 - t.length))).concat(r.splice(0, 4 - t.length))).concat(o.splice(0, 6 - t.length))).concat(r.splice(0, 6 - t.length))).sort(function(e, t) {
            return e.salePrice - t.salePrice;
        });
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function getRecommendProduct(e, t, r) {
        if (!e) return [];
        var n = e.userPreferencesList || [], o = e.highGrossProfitList || [], i = (0, u.default)(n, t), a = (0, 
        u.default)(o, t);
        return i = i.filter(function(e) {
            return 0 < e.stockQuantity && !r[e.productId];
        }).sort(function(e, t) {
            return t.stockQuantity - e.stockQuantity;
        }).slice(0, 3), a = a.filter(function(e) {
            return 0 < e.stockQuantity && n && !n.includes(e.productId);
        }).sort(function(e, t) {
            return t.stockQuantity - e.stockQuantity;
        }).slice(0, 3), i.concat(a).splice(0, 3);
    };
    var u = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(92));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function getFullOrderDiscountInfo(e, t) {
        if (!e || "9" == a.Storage.get("openType")) return null;
        var r = {
            reducePrice: 0,
            needToSatisfyAmount: 0,
            activity: e,
            satisfyActivityItem: null
        }, n = e.reductionList;
        n.sort(function(e, t) {
            return e.discountValue - t.discountValue;
        });
        var o = !1;
        n.forEach(function(e) {
            t >= e.orderAmount && (o = !0, r.reducePrice = e.discountValue, r.satisfyActivityItem = e);
        }), !o && n[0] && (r.needToSatisfyAmount = Math.max(0, (0, i.sub)(n[0].orderAmount, t)), 
        r.reducePrice = n[0].discountValue);
        return r;
    };
    var i = r(4), a = r(1);
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function convertCartDataToOldVersion(e, t, r) {
        var n = {}, o = [];
        e.cartProductList.forEach(function(e) {
            if (e.selected) {
                n[e.productId] = e.product;
                var t = Object.assign({}, e.product);
                delete t.activity, t.quantity = e.quantity, o.push(t);
            }
        });
        var i = e.fullOrderDiscountInfo, a = {}, u = (0, s.generateOrderSubmitProductActivityList)(e.cartProductList);
        i && i.satisfyActivityItem && (a = {
            fullOrderReducePrice: i.reducePrice,
            useFullOrderDiscount: !0,
            activityRestrictionsNum: i.activity.activityRestrictionsNum,
            remark: i.activity.remark
        }, e.isUsedFullOrderCut && u.push({
            activityId: i.activity.activityId,
            productList: [ {
                activityItemId: i.satisfyActivityItem.activityItemId
            } ]
        }));
        return {
            cartTotalOriginPrice: e.originTotalPrice,
            cartTotalPrice: e.totalPrice,
            cartTotalQuantity: e.totalCount,
            shelfCode: t.shelfRandomCode,
            userCouponRecordIdToUse: e.currentCouponData.coupon,
            useFullOrderDiscount: e.isUsedFullOrderCut,
            items: o,
            payMethod: 1,
            discountPayPrice: e.currentCouponData.coupon && e.currentCouponData.coupon.price || 0,
            positiveAllPrice: e.totalPrice,
            positivePriceItems: n,
            allReducePrice: (0, c.sub)(e.originTotalPrice, e.totalPrice),
            orderSubmitProductActivityList: u,
            currentDateTime: r.currentDateTime,
            notUseCoupon: null == e.currentCouponData.coupon && e.currentCouponData.isSelectByUser,
            fullOrderData: a || {}
        };
    };
    var s = r(93), c = r(4);
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function isExceededMachineShelfNumber(e, t, r, n) {
        if (!e.isMachineShelf) return !1;
        var o = 0;
        t.forEach(function(e) {
            e.product.isCombinationProduct ? o += 2 * e.quantity : o += e.quantity;
        });
        var i = r.isCombinationProduct ? 2 * n : n;
        return o + i > a.MACHINE_SHELF_MAX_CART_ITEM_COUNT;
    };
    var a = r(10);
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function isExceededExchangeNumber(e, t, r) {
        var n = e.activity;
        if (!n) return !1;
        if (2 != n.activityType) return !1;
        var o = 0, i = 0, a = 0;
        return t.forEach(function(e) {
            var t = e.product.activity;
            t && 2 == t.activityType && t.markupPriceList && t.markupPriceList[0] && (o = t.markupPriceList[0].fullPrice, 
            i = Math.floor(r / o), a += e.quantity);
        }), 0 < i && i < a + 1;
    };
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getCouponTotalPrice = function getCouponTotalPrice(e) {
        var t = 0;
        return e.forEach(function(e) {
            t = (0, n.add)(t, getCouponPreferentialAmount(e));
        }), t;
    }, t.getCouponPreferentialAmount = getCouponPreferentialAmount;
    var n = r(4);
    function getCouponPreferentialAmount(e) {
        var t = e.discount, r = e.discountType, n = e.price, o = e.discountAmountMax, i = e.orderAmount;
        return 2 == r ? o || Math.ceil(i * (1 - t / 10)) : n;
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function getCouponData(e, t) {
        if (!e || 0 === t.length) return {
            satisfyCoupon: null,
            unsatisfiedCoupon: null
        };
        (0, a.default)(e, t);
        var r = function removeRepeatOrderAmountCoupon(e) {
            var t = [], r = {};
            return e.forEach(function(e) {
                e.preferentialAmount && ((r[e.preferentialAmount] || e).orderAmount || 0) >= e.orderAmount && (r[e.preferentialAmount] = e);
            }), Object.keys(r).forEach(function(e) {
                t.push(r[Number(e)]);
            }), t;
        }(e), n = e.filter(function(e) {
            return e.currentCouponStatus === i.CurrentCouponStatus.Satisfy;
        }).sort(function(e, t) {
            return t.preferentialAmount - e.preferentialAmount;
        })[0], o = r.filter(function(e) {
            return e.currentCouponStatus === i.CurrentCouponStatus.Unsatisfied && !(n && n.preferentialAmount && e.preferentialAmount && n.preferentialAmount >= e.preferentialAmount);
        }).sort(function(e, t) {
            return e.needToSatisfyAmount == t.needToSatisfyAmount ? t.preferentialAmount - e.preferentialAmount : e.needToSatisfyAmount - t.needToSatisfyAmount;
        })[0];
        return {
            satisfyCoupon: n,
            unsatisfiedCoupon: o
        };
    };
    var i = r(8), a = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(39));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.priceCalculate = function priceCalculate(e) {
        return n.cartProductList = [], n.meetConditionCartProductList = [], (0, o.default)(d, n, e);
    }, t.priceCalculateAndGetRuleData = function priceCalculateAndGetRuleData(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], r = new i.default(), n = [];
        n = t ? [ new f.default() ] : [ new l.default(), new a.default(), new u.default(), new s.default(), new p.default(), r, new c.default() ];
        return {
            total: (0, o.default)(n, r, e),
            normalPriceRule: r,
            ruleList: n
        };
    }, t.originPriceCalculate = function originPriceCalculate(e) {
        return new i.default().calculate(e).total;
    };
    var o = _interopRequireDefault(r(250)), i = _interopRequireDefault(r(252)), a = _interopRequireDefault(r(253)), u = _interopRequireDefault(r(254)), s = _interopRequireDefault(r(255)), c = _interopRequireDefault(r(256)), l = _interopRequireDefault(r(257)), f = _interopRequireDefault(r(258)), p = _interopRequireDefault(r(259));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var n = new i.default(), d = [ new l.default(), new a.default(), new u.default(), new s.default(), new p.default(), n, new c.default() ];
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function executeRuleList(e, t, r) {
        for (var n = [], o = 0, i = r, a = 0; a < e.length; a++) {
            var u = e[a];
            u.prevRuleList = n;
            var s = u.getFilterCartProductList(i), c = s.satisfyList, l = s.unsatisfyList, f = u.calculate(c);
            i = [].concat(_toConsumableArray(l), _toConsumableArray(f.notMeetConditionCartProductList)), 
            u.calculateResult = f, o = (0, p.add)(o, f.total), n.push(u);
        }
        return (0, d.default)(e), (0, p.round)(o, 2);
    };
    var p = r(4), d = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(251));
    function _toConsumableArray(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
        }
        return Array.from(e);
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function log(e) {
        var o = [];
        e.forEach(function(e) {
            e.meetConditionCartProductList.forEach(function(e) {
                var t = e.product, r = e.quantity, n = {
                    "参与商品": t.productName,
                    "参与数量": r,
                    "单价": t.salePrice,
                    "总价": t.salePrice * r,
                    "优惠后总价": 0,
                    "活动信息": JSON.stringify(t.activity)
                };
                o.push(n);
            });
        });
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(24)), a = r(4);
    var i = (function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(NormalPriceRule, o.default), n(NormalPriceRule, [ {
        key: "filterCartProduct",
        value: function filterCartProduct(e) {
            var t = e.product.activity;
            return !t || 2 !== t.activityType;
        }
    }, {
        key: "isNormalPriceRule",
        value: function isNormalPriceRule() {
            return !0;
        }
    }, {
        key: "calculate",
        value: function calculate(e) {
            var o = this, i = 0;
            return e.forEach(function(e) {
                var t = e.product, r = e.quantity, n = e.selected;
                o.recordMeetConditionCartProduct(e, r, null), n && (i = (0, a.add)(i, (0, a.mul)(t.salePrice, r)));
            }), {
                total: i,
                notMeetConditionCartProductList: []
            };
        }
    } ]), NormalPriceRule);
    function NormalPriceRule() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, NormalPriceRule);
        var e = function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (NormalPriceRule.__proto__ || Object.getPrototypeOf(NormalPriceRule)).apply(this, arguments));
        return e.name = "", e.sortValue = 1, e;
    }
    t.default = i;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(24)), b = r(4);
    var i = (function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(SingleDiscountPriceRule, o.default), n(SingleDiscountPriceRule, [ {
        key: "filterCartProduct",
        value: function filterCartProduct(e) {
            var t = e.product.activity;
            return !!t && 1 === t.activityType && !!e.selected;
        }
    }, {
        key: "calculate",
        value: function calculate(e) {
            var g = this, v = 0, m = [];
            return e.forEach(function(e) {
                var t = e.product, r = e.quantity, n = e.product.activity, o = n.originRestrictionsStatus, i = n.originRestrictionsNum, a = n.buyQuantity, u = n.originProductRestrictionsNum, s = n.yetBuyProductNum, c = n.discountValue, l = n.discountType, f = r;
                if (1 == o) {
                    var p = i - (a || 0);
                    f = Math.max(0, Math.min(p, f));
                }
                if (0 < u) {
                    var d = u - (s || 0);
                    f = Math.max(0, Math.min(d, f));
                }
                var h = t.salePrice, y = 0;
                1 === l ? v = (0, b.add)(v, (0, b.mul)((0, b.round)((0, b.mul)(h, (0, b.div)(c, 10))), f)) : 2 === l ? (y = (0, 
                b.sub)(h, c), v = (0, b.add)(v, (0, b.mul)(y, f))) : 3 === l && (y = c, v = (0, 
                b.add)(v, (0, b.mul)(y, f))), 0 < r - f && m.push(g.generateRestCartProduct(e, r - f)), 
                g.recordMeetConditionCartProduct(e, f, null);
            }), {
                total: v,
                notMeetConditionCartProductList: m
            };
        }
    } ]), SingleDiscountPriceRule);
    function SingleDiscountPriceRule() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, SingleDiscountPriceRule);
        var e = function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (SingleDiscountPriceRule.__proto__ || Object.getPrototypeOf(SingleDiscountPriceRule)).apply(this, arguments));
        return e.name = "singleDiscount", e.sortValue = 1, e;
    }
    t.default = i;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var A = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }, n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(24)), C = r(4);
    var i = (function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(SingleSkuFullPriceRule, o.default), n(SingleSkuFullPriceRule, [ {
        key: "filterCartProduct",
        value: function filterCartProduct(e) {
            var t = e.product.activity;
            return !!t && 3 === t.activityType && 1 === t.skuType && !!e.selected;
        }
    }, {
        key: "calculate",
        value: function calculate(e) {
            var b = this, _ = 0, P = 1, S = [];
            return e.forEach(function(e) {
                var t = e.product, r = e.quantity, n = t.activity, o = 0, i = n.businessType, a = n.originRestrictionsStatus, u = n.fullPieceList, s = n.originProductRestrictionsNum, c = n.yetBuyProductNum, l = e.quantity, f = null;
                u.sort(function(e, t) {
                    return e.fullPieceNumber - t.fullPieceNumber;
                });
                var p = 1 === a ? n.originRestrictionsNum - n.buyQuantity : r;
                if (s && 0 < s && (p = Math.min(s - (c || 0), p)), p = Math.min(p, e.quantity), 
                u.forEach(function(e) {
                    p >= e.fullPieceNumber && (f = A({}, e), P = e.discountValue, o = e.fullPieceNumber);
                }), f) {
                    if (5 === i) {
                        0 < r - (l = Math.min(p, r)) && S.push(b.generateRestCartProduct(e, r - l));
                        var d = (0, C.mul)((0, C.mul)(t.salePrice, l), (0, C.div)(P, 10)), h = (0, C.mul)(t.salePrice, l);
                        f.promotionPrice = (0, C.sub)(h, d), b.recordMeetConditionCartProduct(e, l, f), 
                        _ = (0, C.add)(_, d);
                    } else if (6 === i) {
                        0 < r - (l = Math.min(p, r)) && S.push(b.generateRestCartProduct(e, r - l));
                        var y = (0, C.sub)((0, C.mul)(t.salePrice, l), P), g = (0, C.mul)(t.salePrice, l);
                        f.promotionPrice = (0, C.sub)(g, y), b.recordMeetConditionCartProduct(e, l, f), 
                        _ = (0, C.add)(_, y);
                    } else if (11 === i) {
                        l = Math.min(p, r), 0 < r - (l = parseInt(String(l / o), 10) * o) && S.push(b.generateRestCartProduct(e, r - l));
                        var v = (0, C.mul)((0, C.div)(l, o), P), m = (0, C.mul)(t.salePrice, l);
                        f.promotionPrice = (0, C.sub)(m, v), b.recordMeetConditionCartProduct(e, l, f), 
                        _ = (0, C.add)(_, v);
                    }
                } else S.push(b.generateRestCartProduct(e, r));
            }), {
                total: _,
                notMeetConditionCartProductList: S
            };
        }
    } ]), SingleSkuFullPriceRule);
    function SingleSkuFullPriceRule() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, SingleSkuFullPriceRule);
        var e = function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (SingleSkuFullPriceRule.__proto__ || Object.getPrototypeOf(SingleSkuFullPriceRule)).apply(this, arguments));
        return e.name = "singleSkuFull", e.sortValue = 2, e;
    }
    t.default = i;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var C = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }, n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var T = r(4);
    var o = (function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(MultiSkuFullPriceRule, function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(24)).default), n(MultiSkuFullPriceRule, [ {
        key: "filterCartProduct",
        value: function filterCartProduct(e) {
            var t = e.product.activity;
            return !!t && 3 === t.activityType && 2 === Number(t.skuType) && !!e.selected;
        }
    }, {
        key: "calculate",
        value: function calculate(e) {
            var _ = this, P = 0, S = [], A = {};
            function j_(e) {
                var t = A[e], r = t.list, n = t.activity, o = t.totalNumber;
                if (1 === n.originRestrictionsStatus) {
                    var i = n.originRestrictionsNum - (n.buyQuantity || 0);
                    o = Math.min(o, i);
                }
                var a = n.fullPieceList, u = 0, s = 0, c = null;
                a.sort(function(e, t) {
                    return e.fullPieceNumber - t.fullPieceNumber;
                }), a.forEach(function(e) {
                    o >= e.fullPieceNumber && (c = C({}, e), u = e.discountValue, s = e.fullPieceNumber);
                });
                var l = o;
                1 === n.originRestrictionsStatus && (l = n.originRestrictionsNum - (n.buyQuantity || 0));
                var f = Math.min(l, o);
                if (c && 0 < f) {
                    if (5 === n.businessType) {
                        var p = 0;
                        r.sort(function(e, t) {
                            return e.product.salePrice - t.product.salePrice;
                        });
                        var d = 0;
                        r.forEach(function(e) {
                            var t = e.product.activity, r = 0 < t.productRestrictionsNum ? Math.min(e.quantity, t.productRestrictionsNum) : e.quantity, n = 0;
                            if (r + p <= f) {
                                p += r, n = r, d += (0, T.mul)(e.product.salePrice, n), _.recordMeetConditionCartProduct(e, n, c);
                                var o = e.quantity - n;
                                0 < o && S.push(_.generateRestCartProduct(e, o));
                            } else {
                                var i = f - p;
                                0 < (n = i) && (d += (0, T.mul)(e.product.salePrice, n), p += n, _.recordMeetConditionCartProduct(e, n, c)), 
                                0 < e.quantity - i && S.push(_.generateRestCartProduct(e, e.quantity - i));
                            }
                        });
                        var h = (0, T.mul)(d, (0, T.div)(u, 10));
                        c.promotionPrice = (0, T.sub)(d, (0, T.round)(h)), P = (0, T.add)(P, h);
                    } else if (6 === n.businessType) {
                        var y = 0;
                        r.sort(function(e, t) {
                            return e.product.salePrice - t.product.salePrice;
                        });
                        var g = 0;
                        r.forEach(function(e) {
                            var t = e.product.activity, r = 0 < t.productRestrictionsNum ? Math.min(e.quantity, t.productRestrictionsNum) : e.quantity, n = 0;
                            if (r + y <= f) {
                                y += r, n = r, g += (0, T.mul)(e.product.salePrice, n);
                                var o = e.quantity - n;
                                0 < o && S.push(_.generateRestCartProduct(e, o));
                            } else {
                                var i = f - y;
                                0 < (n = i) && (g += (0, T.mul)(e.product.salePrice, n), y += n), 0 < e.quantity - i && S.push(_.generateRestCartProduct(e, e.quantity - i));
                            }
                            _.recordMeetConditionCartProduct(e, n, c);
                        }), c.promotionPrice = u, P = (0, T.add)(P, (0, T.sub)(g, u));
                    } else if (11 === n.businessType) {
                        var v = 0;
                        r.sort(function(e, t) {
                            return e.product.salePrice - t.product.salePrice;
                        }), f = parseInt(String(f / s), 10) * s;
                        var m = 0;
                        r.forEach(function(e) {
                            var t = e.product.activity, r = 0 < t.productRestrictionsNum ? Math.min(e.quantity, t.productRestrictionsNum) : e.quantity, n = 0;
                            if (r + v <= f) {
                                n = r, m += (0, T.mul)(r, e.product.salePrice);
                                var o = e.quantity - n;
                                0 < o && S.push(_.generateRestCartProduct(e, o));
                            } else {
                                var i = f - v;
                                n = i, 0 < e.quantity - i && S.push(_.generateRestCartProduct(e, e.quantity - i));
                            }
                            v += n, m += (0, T.mul)(n, e.product.salePrice), _.recordMeetConditionCartProduct(e, n, c);
                        });
                        var b = (0, T.mul)(parseInt(String(f / s), 10), u);
                        c.promotionPrice = (0, T.sub)(m, b), P = (0, T.add)(P, (0, T.mul)(parseInt(String(f / s), 10), u));
                    }
                } else r.forEach(function(e) {
                    S.push(_.generateRestCartProduct(e, e.quantity));
                });
            }
            for (var t in e.forEach(function(e) {
                var t = e.product.activity;
                A[t.activityId] || (A[t.activityId] = {
                    list: [],
                    activity: t,
                    totalNumber: 0
                }), A[t.activityId].list.push(e);
                var r = t.productRestrictionsNum, n = r && 0 < r ? Math.min(e.quantity, t.productRestrictionsNum || 0) : e.quantity;
                A[t.activityId].totalNumber += n;
            }), A) j_(t);
            return {
                total: P,
                notMeetConditionCartProductList: S
            };
        }
    } ]), MultiSkuFullPriceRule);
    function MultiSkuFullPriceRule() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, MultiSkuFullPriceRule);
        var e = function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (MultiSkuFullPriceRule.__proto__ || Object.getPrototypeOf(MultiSkuFullPriceRule)).apply(this, arguments));
        return e.name = "multiSkuFull", e.sortValue = 4, e;
    }
    t.default = o;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var f = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }, n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(24)), p = r(4);
    var i = (function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(ExchangePriceRule, o.default), n(ExchangePriceRule, [ {
        key: "filterCartProduct",
        value: function filterCartProduct(e) {
            var t = e.product.activity;
            return !!t && 2 === t.activityType;
        }
    }, {
        key: "calculate",
        value: function calculate(e) {
            var s = this, c = 0, l = this.prevRuleList.reduce(function(e, t) {
                return (0, p.add)(e, t.calculateResult.total);
            }, 0);
            return e.filter(function(e) {
                return e.product.activity && e.product.activity.markupPriceList && e.product.activity.markupPriceList[0];
            }).sort(function(e, t) {
                var r = e.product.activity.markupPriceList[0], n = t.product.activity.markupPriceList[0];
                return (t.product.salePrice - n.discountValue) / n.fullPrice - (e.product.salePrice - r.discountValue) / r.fullPrice;
            }).forEach(function(e) {
                if (e.selected) {
                    for (var t = e.quantity, r = f({}, e.product.activity.markupPriceList[0]); t; ) {
                        var n = t * r.fullPrice;
                        if (n <= l) {
                            l = (0, p.sub)(l, n), s.recordMeetConditionCartProduct(e, t, r);
                            var o = (0, p.mul)(r.discountValue, t), i = (0, p.sub)((0, p.mul)(e.product.salePrice, t), o);
                            r.promotionPrice = i, c = (0, p.add)(c, (0, p.mul)(r.discountValue, t));
                            break;
                        }
                        t--;
                    }
                    if (t < e.quantity) {
                        var a = s.prevRuleList[s.prevRuleList.length - 1], u = e.quantity - t;
                        a.recordMeetConditionCartProduct(e, u, r), c = (0, p.add)(c, (0, p.mul)(e.product.salePrice, u));
                    }
                } else s.prevRuleList[s.prevRuleList.length - 1].recordMeetConditionCartProduct(e, e.quantity);
            }), this.prevRuleList[this.prevRuleList.length - 1].calculateResult.restTotal = l, 
            {
                total: c,
                notMeetConditionCartProductList: []
            };
        }
    } ]), ExchangePriceRule);
    function ExchangePriceRule() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, ExchangePriceRule);
        var e = function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (ExchangePriceRule.__proto__ || Object.getPrototypeOf(ExchangePriceRule)).apply(this, arguments));
        return e.name = "超值换购", e.sortValue = 6, e;
    }
    t.default = i;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var h = r(4);
    var o = (function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(CombinationPriceRule, function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(24)).default), n(CombinationPriceRule, [ {
        key: "filterCartProduct",
        value: function filterCartProduct(e) {
            var t = e.product, r = t.activity, n = t.groupInfo;
            return !(!r || 4 !== r.activityType && 7 !== r.activityType || !n);
        }
    }, {
        key: "calculate",
        value: function calculate(c) {
            var l = this, f = 0, p = [], d = {};
            function Q1(e) {
                var t = d[e], r = t.list, i = t.activity, n = t.totalNumber, o = n;
                1 === i.restrictionsStatus && (o = i.restrictionsNum - (i.buyQuantity || 0));
                var a = Math.min(o, n);
                if (0 < a) {
                    var u = 0;
                    r.sort(function(e, t) {
                        return e.product.discountPrice !== t.product.discountPrice ? t.product.discountPrice - e.product.discountPrice : e.product.salePrice - e.product.discountPrice - (t.product.salePrice - t.product.discountPrice);
                    });
                    var s = 0;
                    r.forEach(function(e) {
                        var t = e.product, r = e.quantity;
                        0 < t.combinationRestrictionsNum && (r = Math.min(r, t.combinationRestrictionsNum)), 
                        0 < i.restrictionsNum && (r = Math.min(r, i.restrictionsNum));
                        var n = 0;
                        if (r + u <= a) u += r, n = r, s += (0, h.mul)(e.product.discountPrice, n), l.recordMeetConditionCartProduct(e, n, t.groupInfo), 
                        e.quantity > r && p.push(l.generateRestCartProduct(e, e.quantity - r)); else {
                            var o = a - u;
                            0 < (n = o) && (s += (0, h.mul)(e.product.discountPrice, n), l.recordMeetConditionCartProduct(e, n, t.groupInfo), 
                            u += n), 0 < e.quantity - o && p.push(l.generateRestCartProduct(e, e.quantity - o));
                        }
                    }), f = (0, h.add)(f, s);
                } else c.forEach(function(e) {
                    var t = e.product, r = e.quantity, n = e.selected, o = t.activity, i = o.restrictionsStatus;
                    if (n) {
                        var a = e.quantity, u = 1 === i ? (o.restrictionsNum || 0) - (o.buyQuantity || 0) : r;
                        1 === i && (a = Math.min(u, r), null != t.combinationRestrictionsNum && (a = Math.min(a, t.combinationRestrictionsNum)), 
                        0 < r - a && p.push(l.generateRestCartProduct(e, r - a))), l.recordMeetConditionCartProduct(e, a, t.groupInfo), 
                        f = (0, h.add)(f, (0, h.mul)(t.discountPrice, a));
                    }
                });
            }
            for (var e in c.forEach(function(e) {
                var t = e.product.activity;
                d[t.activityId] || (d[t.activityId] = {
                    list: [],
                    activity: t,
                    totalNumber: 0
                }), d[t.activityId].list.push(e);
                var r = e.quantity;
                d[t.activityId].totalNumber += r;
            }), d) Q1(e);
            return {
                total: f,
                notMeetConditionCartProductList: p
            };
        }
    } ]), CombinationPriceRule);
    function CombinationPriceRule() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, CombinationPriceRule);
        var e = function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (CombinationPriceRule.__proto__ || Object.getPrototypeOf(CombinationPriceRule)).apply(this, arguments));
        return e.name = "组合销售", e.sortValue = 5, e;
    }
    t.default = o;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var i = r(4);
    var o = (function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(DefaultPriceRule, function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(24)).default), n(DefaultPriceRule, [ {
        key: "filterCartProduct",
        value: function filterCartProduct() {
            return !0;
        }
    }, {
        key: "isNormalPriceRule",
        value: function isNormalPriceRule() {
            return !0;
        }
    }, {
        key: "calculate",
        value: function calculate(e) {
            var n = this, o = 0;
            return e.forEach(function(e) {
                var t = e.product, r = e.quantity;
                n.recordMeetConditionCartProduct(e, r), e.selected && (o = (0, i.add)(o, (0, i.mul)(t.salePrice, r)));
            }), {
                total: o,
                notMeetConditionCartProductList: []
            };
        }
    } ]), DefaultPriceRule);
    function DefaultPriceRule() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, DefaultPriceRule);
        var e = function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (DefaultPriceRule.__proto__ || Object.getPrototypeOf(DefaultPriceRule)).apply(this, arguments));
        return e.name = "", e;
    }
    t.default = o;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(24)), P = r(4);
    var i = (function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(SecondDiscountPriceRule, o.default), n(SecondDiscountPriceRule, [ {
        key: "filterCartProduct",
        value: function filterCartProduct(e) {
            var t = e.product.activity;
            return !!t && 10 === t.activityType && !!e.selected;
        }
    }, {
        key: "calculate",
        value: function calculate(e) {
            var v = this, m = 0, b = [], _ = {};
            function A3(e) {
                var t = _[e], r = t.list, n = t.activity, o = t.totalNumber;
                if (1 === n.originRestrictionsStatus) {
                    var i = n.originRestrictionsNum - (n.buyQuantity || 0);
                    o = Math.min(o, i);
                }
                var u = 2 * Math.floor(o / 2), s = {
                    activityItemId: "savePromotionPrice"
                };
                if (0 < u) {
                    var c = 0, l = [];
                    r.sort(function(e, t) {
                        return e.product.salePrice - t.product.salePrice;
                    }), r.forEach(function(e) {
                        var t = e.product.activity, r = 0 < (t.productRestrictionsNum || 0) ? Math.min(e.quantity, t.productRestrictionsNum || 0) : e.quantity, n = 0;
                        if (r + c <= u) {
                            n = r;
                            var o = e.quantity - n;
                            0 < o && b.push(v.generateRestCartProduct(e, o));
                        } else {
                            var i = u - c;
                            n = i, 0 < e.quantity - i && b.push(v.generateRestCartProduct(e, e.quantity - i));
                        }
                        c += n;
                        for (var a = 0; a < n; a++) l.push(e.product.salePrice);
                        v.recordMeetConditionCartProduct(e, n, s);
                    });
                    for (var a = 0, f = 0, p = 0, d = l.length / 2, h = 0; h < l.length; h++) h < d ? a = (0, 
                    P.add)(a, l[h]) : f = (0, P.add)(f, l[h]), p = (0, P.add)(p, l[h]);
                    var y = (0, P.mul)(a, (0, P.div)(n.discountValue, 10)), g = (0, P.add)(y, f);
                    s.promotionPrice = (0, P.sub)(p, (0, P.round)(g)), m = (0, P.add)(m, (0, P.add)(y, f));
                } else r.forEach(function(e) {
                    b.push(v.generateRestCartProduct(e, e.quantity));
                });
            }
            for (var t in e.forEach(function(e) {
                var t = e.product.activity, r = 1 == t.skuType ? t.activityId + "-" + e.product.productId : t.activityId;
                _[r] || (_[r] = {
                    list: [],
                    activity: t,
                    totalNumber: 0
                }), _[r].list.push(e);
                var n = t.productRestrictionsNum, o = n && 0 < n ? Math.min(e.quantity, t.productRestrictionsNum || 0) : e.quantity;
                _[r].totalNumber += o;
            }), _) A3(t);
            return {
                total: m,
                notMeetConditionCartProductList: b
            };
        }
    } ]), SecondDiscountPriceRule);
    function SecondDiscountPriceRule() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, SecondDiscountPriceRule);
        var e = function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (SecondDiscountPriceRule.__proto__ || Object.getPrototypeOf(SecondDiscountPriceRule)).apply(this, arguments));
        return e.name = "secondDiscount", e;
    }
    t.default = i;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Classify = void 0;
    var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    t.generateProductGroupList = function generateProductGroupList(e, t, r) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : new Date().getTime(), o = arguments[4], i = new Map(), a = {}, u = new Map();
        t.forEach(function(e) {
            u.set(e.productId, e), a[e.typeId] || (a[e.typeId] = []), a[e.typeId].push(e);
        }), o.forEach(function(r) {
            var e = r.productIdList, t = r.secondProductCategoryList;
            e && 0 < e.length ? e.forEach(function(e) {
                var t = u.get(String(e));
                t && (t.productCate = r);
            }) : t && 0 < t.length && t.forEach(function(e) {
                var t = a[e.categoryId];
                t && t.forEach(function(e) {
                    e.productCate = r;
                });
            });
        });
        var s = {};
        t.forEach(function(e) {
            var t = e.isCombinationProduct;
            e.productCate && !t && (processClassify(e, i, n), s[e.productId] = !0);
        }), e.forEach(function(e) {
            if (e.businessType !== d.BusinessType.CombinedSales && e.businessType !== d.BusinessType.NewCombinedSales) {
                var t = u.get(e.productId);
                t && !s[e.productId] && processClassify(t, i, n);
            } else {
                e.groupList.forEach(function(e) {
                    var t = u.get(e.goodsId);
                    t && processClassify(t, i, n);
                });
            }
        }), t.filter(function(e) {
            return (e.isCombinationProduct && !e.groupInfo || !e.activity) && !s[e.productId];
        }).forEach(function(e) {
            processClassify(e, i, n);
        });
        var c = Array.from(i.values());
        return function sortProductInClassify(e) {
            e.forEach(function(e) {
                e.productList.sort(function(e, t) {
                    return (e.subTypeId || 0) - (t.subTypeId || 0);
                });
            });
        }(c = function sortClassify(e, a) {
            return e.forEach(function(e, t) {
                var r = a.indexOf(e.typeKey), n = e.typeKey === f, o = e.typeKey === y, i = 0;
                n && (i = .01 * (e.productList[0].typeSort || 0)), o && (i = -100 * (e.productList[0].productCate.sortNo || 1)), 
                e.typeSort = n || o ? 100 + i : -1 === r ? 100 - t : r;
            }), e.sort(function(e, t) {
                return e.typeKey !== t.typeKey || [ "newProduct", "otherItems", "productCate" ].includes(e.typeKey) ? e.typeSort - t.typeSort : t.productList[0].activity.addTime - e.productList[0].activity.addTime;
            });
        }(c, r)), function simplifyProductInClassify(e) {
            e.forEach(function(e) {
                e.productList = e.productList.map(function(e) {
                    return (0, l.simplifyProduct)(e);
                });
            });
        }(c), c;
    };
    var d = r(8), h = r(105), l = r(96);
    var f = "otherItems", y = "productCate", u = {
        1: "newProduct"
    }, g = t.Classify = function Classify(e, t, r) {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, Classify), this.name = e, this.typeKey = t, this.typeSort = r, this.productList = [], 
        this.typeId = null;
    };
    function processClassify(e, t, r, n) {
        var o = function getClassifyKeyObjectByProduct(e, t, r) {
            var n = e.activity && [ d.BusinessType.CombinedSales, d.BusinessType.NewCombinedSales ].includes(e.activity.businessType);
            return e.productCate && !n ? function getClassifyKeyObjectByProductCate(e) {
                var t = e.productCate, r = t.categoryName;
                return {
                    mapKey: "porductCategory" + t.pcId,
                    typeId: -1,
                    typeKey: y,
                    typeName: t.fullName || r,
                    navName: r,
                    pcId: t.pcId
                };
            }(e) : (!e.activity || ![ d.BusinessType.CombinedSales, d.BusinessType.NewCombinedSales ].includes(e.activity.businessType) || e.groupInfo) && e.activity && h.RuleMap[e.activity.businessType] ? function getClassifyKeyObjectByActivityProduct(e, t, r) {
                var n = {
                    mapKey: "",
                    typeId: null,
                    typeKey: "",
                    typeName: "",
                    navName: ""
                }, o = e.activity, i = Number(o.businessType), a = 2 === Number(o.skuType), u = (r && r.isCounter ? h.CounterRuleMap : h.RuleMap)[o.businessType], s = "";
                s = "object" === p(u.typeName) ? u.typeName[i] : u.typeName, "function" == typeof u.typeName && (s = u.typeName(o, t));
                n.typeName = o.showName || s;
                var c = o.fullPieceList;
                c && c.length ? n.navName = c[c.length - 1].activityItemName || u.navName || s : n.navName = u.navName || s;
                n.typeKey = "function" == typeof u.typeKey ? u.typeKey(o, t) : u.typeKey;
                var l = "";
                if (u.isMergeGroup) {
                    var f = u.groupKey ? o[u.groupKey] : "";
                    l = n.typeName + f;
                } else l = a ? n.typeName + o.activityId : n.typeName;
                return n.mapKey = l, n;
            }(e, t, r) : getClassifyKeyObjectByNoActivityProduct(e);
        }(e, r, n), i = o.typeName, a = o.mapKey, u = o.typeKey, s = o.typeId, c = o.navName, l = o.pcId;
        if (!t.has(a)) {
            var f = new g(i, u, 1);
            f.typeId = s, f.navName = c || i, f.pcId = l, t.set(a, f);
        }
        t.get(a).productList.push(e);
    }
    function getClassifyKeyObjectByNoActivityProduct(e) {
        var t = f, r = e.typeId, n = e.typeName, o = String(e.typeId);
        if (e.labelList) {
            var i = {};
            for (var a in e.labelList.forEach(function(e) {
                i[e.labelType] = e.labelName;
            }), i) if (u[a]) {
                o = t = u[a], r = null, n = i[a];
                break;
            }
        }
        return {
            mapKey: o,
            typeId: r,
            typeKey: t,
            typeName: n
        };
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Classify = void 0;
    var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    t.generateProductGroupList = function generateProductGroupList(e, t, r) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : new Date().getTime(), o = new Map(), i = new Map();
        t.forEach(function(e) {
            i.set(e.productId, e);
        }), e.forEach(function(e) {
            if (e.businessType !== u.BusinessType.CombinedSales) {
                var t = i.get(e.productId);
                t && processClassify(t, o, n);
            } else {
                e.groupList.forEach(function(e) {
                    var t = i.get(e.goodsId);
                    t && processClassify(t, o, n);
                });
            }
        }), t.filter(function(e) {
            return !e.activity;
        }).forEach(function(e) {
            e.activity = null, processClassify(e, o, n);
        });
        var a = Array.from(o.values());
        return function sortProductInClassify(e) {
            e.forEach(function(e) {
                e.productList.sort(function(e, t) {
                    return (t.isNewProduct ? 1 : 0) - (e.isNewProduct ? 1 : 0);
                });
            });
        }(a = function sortClassify(e, i) {
            return e.forEach(function(e, t) {
                var r = i.indexOf(e.typeKey), n = e.typeKey === l, o = n ? .01 * (e.productList[0].typeSort || 0) : 0;
                e.typeSort = n ? 100 + o : -1 === r ? 100 - t : r;
            }), e.sort(function(e, t) {
                return e.typeKey !== t.typeKey || [ "newProduct", "otherItems" ].includes(e.typeKey) ? e.typeSort - t.typeSort : t.productList[0].activity.addTime - e.productList[0].activity.addTime;
            });
        }(a, r)), a;
    };
    var p = r(105), u = r(8);
    var l = "otherItems", d = t.Classify = function Classify(e, t, r) {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, Classify), this.name = e, this.typeKey = t, this.typeSort = r, this.productList = [], 
        this.typeId = null;
    };
    function processClassify(e, t, r) {
        var n = function getClassifyKeyObjectByProduct(e, t) {
            return e.activity && p.CounterRuleMap[e.activity.businessType] && 2 === Number(e.activity.originRestrictionsStatus) && 1 === Number(e.activity.skuType) ? function getClassifyKeyObjectByActivityProduct(e, t) {
                var r = {
                    mapKey: "",
                    typeId: null,
                    typeKey: "",
                    typeName: "",
                    navName: ""
                }, n = e.activity, o = Number(n.businessType), i = 2 === Number(n.skuType), a = p.CounterRuleMap[n.businessType], u = "";
                u = "object" === f(a.typeName) ? a.typeName[o] : a.typeName, "function" == typeof a.typeName && (u = a.typeName(n, t));
                r.typeName = "object" === f(a.typeName) ? a.typeName[o] : a.typeName;
                var s = n.fullPieceList;
                s && s.length ? r.navName = s[s.length - 1].activityItemName || r.navName || u : r.navName = a.navName || u;
                r.typeKey = "function" == typeof a.typeKey ? a.typeKey(n, t) : a.typeKey;
                var c = "";
                if (a.isMergeGroup) {
                    var l = a.groupKey ? n[a.groupKey] : "";
                    c = r.typeName + l;
                } else c = i ? r.typeName + n.activityId : r.typeName;
                return r.mapKey = c, r;
            }(e, t) : function getClassifyKeyObjectByNoActivityProduct(e) {
                var t = l, r = e.typeId;
                return {
                    mapKey: l,
                    typeId: r,
                    typeKey: t,
                    typeName: "更多"
                };
            }(e);
        }(e, r), o = n.typeName, i = n.mapKey, a = n.typeKey, u = n.typeId, s = n.navName;
        if (!t.has(i)) {
            var c = new d(o, a, 1);
            c.typeId = u, c.navName = s || o, t.set(i, c);
        }
        t.get(i).productList.push(e);
    }
}, , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var o = (function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(CartStorage, function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(265)).default), n(CartStorage, [ {
        key: "getDefaultData",
        value: function getDefaultData() {
            return [];
        }
    }, {
        key: "get",
        value: function get(e) {
            var o = {};
            e.forEach(function(e) {
                o[e.productId] = e;
            });
            var t = this.getAction();
            if (!Array.isArray(t)) return [];
            var i = [];
            return t.forEach(function(e) {
                var t = e.productId, r = Number(e.quantity) || 0, n = o[t];
                n && 0 < r && (r > n.stockQuantity && (r = n.stockQuantity), i.push({
                    product: o[e.productId],
                    productId: t,
                    quantity: r,
                    selected: !("selected" in e && !e.selected)
                }));
            }), i;
        }
    }, {
        key: "set",
        value: function set(e) {
            var t = e.map(function(e) {
                return {
                    productId: e.productId,
                    quantity: e.quantity,
                    selected: !!e.selected
                };
            });
            this.setAction(t);
        }
    }, {
        key: "convertDataByOldVersion",
        value: function convertDataByOldVersion() {
            var e = this.config.storage, t = this.config.shelfCode;
            if (t && e.getItem(t)) try {
                var r = JSON.parse(e.getItem(t) || ""), n = Object.keys(r), o = [];
                n.forEach(function(e) {
                    var t = r[e];
                    "productId" in t && "quantity" in t && o.push(t);
                }), this.setAction(o), e.removeItem(t);
            } catch (e) {
                console.error(e);
            }
        }
    } ]), CartStorage);
    function CartStorage() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, CartStorage);
        var e = function _possibleConstructorReturn(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }(this, (CartStorage.__proto__ || Object.getPrototypeOf(CartStorage)).apply(this, arguments));
        return e.key = "Cart", e;
    }
    t.default = o;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var o = function _interopRequireWildcard(e) {
        {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t;
        }
    }(r(1));
    var i = (n(BaseStorage, [ {
        key: "setConfig",
        value: function setConfig(e) {
            this.config = e;
        }
    }, {
        key: "setKeyPrefix",
        value: function setKeyPrefix(e) {
            this.keyPrefix = e;
        }
    }, {
        key: "getStorageKey",
        value: function getStorageKey() {
            if (!this.key) throw "存储类必须声明不为空的 key";
            return "" + this.keyPrefix + this.key + "_" + this.config.shelfCode;
        }
    }, {
        key: "getOriginData",
        value: function getOriginData() {
            var e = this.getStorageKey();
            try {
                var t = this.config.storage.getItem(e);
                return "string" == typeof t ? JSON.parse(t || "null") : t;
            } catch (e) {
                console.error(e);
            }
            return null;
        }
    }, {
        key: "setAction",
        value: function setAction(e) {
            var t = this.getStorageKey(), r = new Date().getTime(), n = this.getOriginData(), o = {
                createdTime: n ? n.createdTime : r,
                updatedTime: r,
                data: e
            };
            this.config.storage.setItem(t, JSON.stringify(o));
        }
    }, {
        key: "getAction",
        value: function getAction() {
            var e = this.getOriginData();
            return e ? e.data : this.getDefaultData();
        }
    }, {
        key: "clear",
        value: function clear() {
            var e = this.getStorageKey();
            this.config.storage.removeItem(e);
        }
    }, {
        key: "getDefaultData",
        value: function getDefaultData() {
            return null;
        }
    } ]), BaseStorage);
    function BaseStorage() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, BaseStorage), this.keyPrefix = "customer", this.config = {
            storage: {
                getItem: function getItem(e) {
                    return o.getStorageSync(e);
                },
                setItem: function setItem(e, t) {
                    return o.setStorageSync(e, t);
                },
                removeItem: function removeItem(e) {
                    return o.removeStorageSync(e);
                }
            }
        };
    }
    t.default = i;
}, , , , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function fetchWxappCollectCardActivityGetActivityProductList(e, n) {
        var o = (0, a.default)("collectCardActivity/getActivityProductList", "customer");
        return new Promise(function(t, r) {
            i.default.get(o, e, n).then(function(e) {
                t(e);
            }).catch(function(e) {
                r(e);
            });
        });
    };
    var i = _interopRequireDefault(r(2)), a = _interopRequireDefault(r(29));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function fetchActivityCenteredDetail(e) {
        var n = "activity/centered/detail";
        -1 === n.indexOf("http") && (n = "https://wxapp.feng1.com/wxapp" + ("/" !== n.substr(0, 1) ? "/" : "") + n);
        return new Promise(function(t, r) {
            o.default.post(n, e, {
                failedMsg: !1
            }).then(function(e) {
                t(e);
            }).catch(function(e) {
                r(e);
            });
        });
    };
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(2));
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    }, n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var c = _interopRequireDefault(r(0)), i = r(1), l = _interopRequireDefault(r(276)), a = _interopRequireDefault(r(277)), f = r(106), p = _interopRequireDefault(r(278));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var u = (n(FeLog, [ {
        key: "clearPageInitTimer",
        value: function clearPageInitTimer() {
            clearTimeout(this.pageInitTimerOut);
        }
    }, {
        key: "init",
        value: function init(e) {
            var t = this;
            this.initApp && (this.initApp = !1, this.isInitBeenReport = !1, this.pageData.nowTime = Date.now(), 
            this.component = e, this.pageInitTimerOut = setTimeout(function() {
                t.checkPageDataFromCached(), t.storage.push(t.pageData), t.sendPageModel({
                    delay: 1500
                });
            }, 1e3));
        }
    }, {
        key: "setPage",
        value: function setPage(e) {
            e.pageCode && (this.pageData.pageCode = e.pageCode), e.pageName && (this.pageData.pageName = e.pageName);
        }
    }, {
        key: "getModels",
        value: function getModels(e) {
            return (e || this.models).map(function(e) {
                var t = "string" == typeof e.relateFromId ? [ e.relateFromId ] : e.relateFromId, r = o({}, e, {
                    relateFromId: t
                });
                return delete r.isADV, delete r.component, delete r.selector, delete r.lastModel, 
                r;
            });
        }
    }, {
        key: "sendPageLog",
        value: function sendPageLog(e) {
            this.checkPageDataFromCached();
            var t = o({}, this.pageData, e, {
                nowTime: Date.now()
            });
            this.storage.push(t), this.sendLog();
        }
    }, {
        key: "sendPageModel",
        value: function sendPageModel(e) {
            var r = this, t = (e || {}).delay, n = void 0 === t ? 1 : t;
            clearTimeout(this.initTimerOut), this.initTimerOut = setTimeout(function() {
                var e = r.getModels(), t = r.storage.get();
                0 < e.length && t.push(o({}, r.pageData, {
                    logType: 2,
                    pageModels: e,
                    nowTime: Date.now()
                })), r.isInitBeenReport = !0, r.fetch(t);
            }, n);
        }
    }, {
        key: "checkPageDataFromCached",
        value: function checkPageDataFromCached() {
            if (!this.pageData.userId) {
                var e = i.Storage.get("@FEZS_USER_INFO");
                e && e.userid && (this.pageData.userId = e.userid);
            }
            if (!this.pageData.shelfId) {
                var t = i.Storage.get("shelfId");
                this.pageData.shelfId = t || "";
            }
            var r = (0, f.getCurrentPages)();
            r && (this.pageData.pageUri = r.route);
        }
    }, {
        key: "pushPageModule",
        value: function pushPageModule(e) {
            var n = this;
            clearTimeout(this.initTimerOut), clearTimeout(this.initPageTimerOut);
            var t = [];
            if (t = Array.isArray(e) ? e : [ e ], this.isInitBeenReport) return this.models = this.models.concat(t), 
            void this.pushModelEvent();
            t.forEach(function(t) {
                var e = t.component;
                if (delete t.component, delete t.isADV, delete t.selector, t.selector && void 0 === t.observer && e) {
                    var r = (0, f.Observer)(e);
                    r.relativeToViewport({
                        top: 0
                    }).observe(t.selector, function(e) {
                        0 < e.intersectionRatio && n.setEventStorage(t);
                    }), n.observerArr.push(r);
                } else n.pushInterModel([ t ]);
            });
        }
    }, {
        key: "pushInterModel",
        value: function pushInterModel(e) {
            var t = this;
            this.models = this.models.concat(e), 0 !== this.models.length && (this.models.some(function(e) {
                return e.lastModel;
            }) ? (clearTimeout(this.initPageTimerOut), this.sendPageModel()) : this.initPageTimerOut = setTimeout(function() {
                t.sendPageModel();
            }, 4e3));
        }
    }, {
        key: "pushModelEvent",
        value: function pushModelEvent() {
            var e = this.getModels(), t = o({}, this.pageData, {
                pageModels: e,
                logType: 3,
                eventType: 1,
                nowTime: Date.now()
            });
            this.setEventStorage(t);
        }
    }, {
        key: "pushEvent",
        value: function pushEvent(e) {
            var t = o({}, this.pageData, {
                logType: 3,
                eventType: 2,
                nowTime: Date.now()
            }, e);
            e && e.eventCode && (t.modelCode = e.eventCode), e && e.eventName && (t.modelName = e.eventName), 
            this.setEventStorage(t);
        }
    }, {
        key: "sendPage",
        value: function sendPage() {}
    }, {
        key: "setEventStorage",
        value: function setEventStorage(e) {
            var t = this;
            this.storage.push(e), this.models = [];
            var r = this.storage.get();
            30 < r.length && setTimeout(function() {
                t.fetch(r);
            }, 500);
        }
    }, {
        key: "sendLog",
        value: function sendLog() {
            var e = this.storage.get();
            this.fetch(e);
        }
    }, {
        key: "signOut",
        value: function signOut() {
            var e = {
                logType: 4,
                platform: this.pageData.platform,
                userId: this.pageData.userId,
                sessionId: this.pageData.sessionId,
                pageCode: this.pageData.pageCode,
                pageName: this.pageData.pageName,
                pageUri: this.pageData.pageUri,
                signOutTime: Date.now()
            };
            this.storage.push(e);
        }
    }, {
        key: "fetch",
        value: function fetch(e) {
            e && 0 < e.length && (this.models = [], this.storage.clear(), (0, a.default)(e));
        }
    }, {
        key: "resetData",
        value: function resetData() {
            this.initApp = !0, this.isInitBeenReport = !1, this.models = [], this.component = null, 
            this.pageData.pageCode = "", this.pageData.pageName = "", this.pageData.referPageView = this.pageData.pageUri, 
            this.observerArr.forEach(function(e) {
                e.disconnect();
            }), this.observerArr.length = 0;
        }
    } ]), FeLog);
    function FeLog() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, FeLog), this.initApp = !0, this.pageModels = [], this.models = [], this.observerArr = [], 
        this.storage = new l.default();
        var e = (this.isInitBeenReport = !1, f.getSystemInfo)(), t = e.brand, r = e.model, n = e.screenWidth, o = e.screenHeight, i = e.version, a = e.system, u = e.platform, s = e.SDKVersion;
        this.pageData = {
            platform: "wxapp-miniprogram",
            appVersion: p.default.version,
            clientVersion: a,
            osType: t,
            openType: "1",
            shelfId: "",
            userId: "",
            pageCode: "",
            pageName: "",
            pageUri: "",
            referPageView: "",
            resolution: n + "*" + o,
            sessionId: c.default.uuid,
            logType: 1,
            loadTime: -1,
            userAgent: "model:" + r + ", version:" + i + ", SDKVersion:" + s + ", platform:" + u,
            nowTime: Date.now()
        };
    }
    t.default = u;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    var o = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(r(9));
    var i = (n(LogStorage, [ {
        key: "set",
        value: function set(e) {
            o.default.set(this.key, e, 31104e3);
        }
    }, {
        key: "push",
        value: function push(e) {
            var t = this.get();
            t.push(e), this.set(t);
        }
    }, {
        key: "get",
        value: function get() {
            return o.default.get(this.key) || [];
        }
    }, {
        key: "clear",
        value: function clear() {
            o.default.remove(this.key);
        }
    } ]), LogStorage);
    function LogStorage() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, LogStorage), this.key = "fezsUserBehavior";
    }
    t.default = i;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        if (Array.isArray(e) && 0 !== e.length) {
            console.log("埋点发送", e);
            var t = {};
            if (t.token = i.default.get(a.TOKEN_KEY) || "", t.token) {
                var r = {
                    "Feng1-Head": JSON.stringify(t),
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    "If-Modified-Since": "1"
                }, n = Object.assign({}, r);
                return o.default.request({
                    url: u + "/wxapp/behaviorLog/uploadFrontLog",
                    method: "POST",
                    data: e,
                    header: n
                });
            }
        }
    };
    var o = _interopRequireDefault(r(0)), i = _interopRequireDefault(r(9)), a = r(10);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var u = "https://wxapp.feng1.com";
}, function(e) {
    e.exports = JSON.parse('{"name":"fezs-applet-customer","version":"4.20.0","private":true,"description":"丰e足食消费端小程序","templateInfo":{"name":"redux","typescript":true,"css":"sass"},"scripts":{"build:weapp":"taro build --type weapp","build:swan":"taro build --type swan","build:alipay":"taro build --type alipay","build:tt":"taro build --type tt","build:h5":"taro build --type h5","build:rn":"taro build --type rn","build:qq":"taro build --type qq","build:quickapp":"taro build --type quickapp","dev:weapp":"npm run build:weapp -- --watch","dev:swan":"npm run build:swan -- --watch","dev:alipay":"npm run build:alipay -- --watch","dev:tt":"npm run build:tt -- --watch","dev:h5":"npm run build:h5 -- --watch","dev:rn":"npm run build:rn -- --watch","dev:qq":"npm run build:qq -- --watch","dev:quickapp":"npm run build:quickapp -- --watch","setEnv:local":"cross-env API_ENV=local node ./script/setEnv.js","setEnv:dev":"cross-env API_ENV=dev node ./script/setEnv.js","setEnv:test":"cross-env API_ENV=test node ./script/setEnv.js","setEnv:prod":"cross-env API_ENV=prod node ./script/setEnv.js","preview:local":"npm run preview -- --port=local","preview:dev":"npm run preview -- --port=dev","preview:test":"npm run preview -- --port=test","preview:prod":"npm run preview -- --port=prod","preview":"node ./script/build.ts --preview","upload:local":"npm run upload -- --port=local","upload:dev":"npm run upload -- --port=dev","upload:test":"npm run upload -- --port=test","upload:prod":"npm run upload -- --port=prod","upload":"node ./script/build.ts --upload ","build":"node script/build.ts","test":"taro build --type weapp --port=test"},"author":"","license":"MIT","dependencies":{"@tarojs/components":"2.0.5","@tarojs/components-qa":"2.0.5","@tarojs/redux":"2.0.5","@tarojs/redux-h5":"2.0.5","@tarojs/router":"2.0.5","@tarojs/taro":"2.0.5","@tarojs/taro-alipay":"2.0.5","@tarojs/taro-h5":"2.0.5","@tarojs/taro-qq":"2.0.5","@tarojs/taro-quickapp":"2.0.5","@tarojs/taro-swan":"2.0.5","@tarojs/taro-tt":"2.0.5","@tarojs/taro-weapp":"2.0.5","babel-runtime":"^6.26.0","classnames":"^2.2.6","date-fns":"^2.9.0","jsencrypt":"^3.0.0-rc.1","nerv-devtools":"^1.5.6","nervjs":"^1.5.6","redux":"^4.0.0","redux-logger":"^3.0.6","redux-thunk":"^2.3.0","regenerator":"0.13.1","regenerator-runtime":"^0.11.1","taro-ui":"^2.2.4"},"devDependencies":{"@tarojs/async-await":"2.0.5","@tarojs/cli":"2.0.5","@tarojs/mini-runner":"2.0.5","@tarojs/webpack-runner":"2.0.5","@types/react":"^16.4.8","@types/webpack-env":"^1.13.6","@typescript-eslint/eslint-plugin":"^2.13.0","@typescript-eslint/parser":"^2.13.0","babel-eslint":"^8.2.3","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-jsx-stylesheet":"^0.6.5","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.6.1","cli-table3":"^0.5.1","cross-env":"^7.0.2","eslint":"^5.16.0","eslint-config-taro":"2.0.5","eslint-plugin-import":"^2.12.0","eslint-plugin-react":"^7.8.2","eslint-plugin-react-hooks":"^1.6.1","eslint-plugin-taro":"2.0.5","miniprogram-ci":"^1.0.76","stylelint":"9.3.0","stylelint-config-taro-rn":"2.0.5","stylelint-taro-rn":"2.0.5","typescript":"^3.0.1","yargs":"^15.1.0"}}');
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = _interopRequireDefault(r(3)), n = function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    };
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    function Oba(e, t, r) {
        null === e && (e = Function.prototype);
        var n = Object.getOwnPropertyDescriptor(e, t);
        if (void 0 === n) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : Oba(o, t, r);
        }
        if ("value" in n) return n.value;
        var i = n.get;
        return void 0 !== i ? i.call(r) : void 0;
    }
    t.default = function(e) {
        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(getLocation, e), n(getLocation, [ {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(e) {
                return Oba(getLocation.prototype.__proto__ || Object.getPrototypeOf(getLocation.prototype), "componentWillReceiveProps", this) && Oba(getLocation.prototype.__proto__ || Object.getPrototypeOf(getLocation.prototype), "componentWillReceiveProps", this).call(this, e);
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                return Oba(getLocation.prototype.__proto__ || Object.getPrototypeOf(getLocation.prototype), "componentWillMount", this) && Oba(getLocation.prototype.__proto__ || Object.getPrototypeOf(getLocation.prototype), "componentWillMount", this).call(this);
            }
        }, {
            key: "componentDidShow",
            value: function componentDidShow() {
                return Oba(getLocation.prototype.__proto__ || Object.getPrototypeOf(getLocation.prototype), "componentDidShow", this) && Oba(getLocation.prototype.__proto__ || Object.getPrototypeOf(getLocation.prototype), "componentDidShow", this).call(this);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                return "PAGE" === this.$componentType && this.data && this.data.enableAuthLocation && this.initLocation(), 
                Oba(getLocation.prototype.__proto__ || Object.getPrototypeOf(getLocation.prototype), "componentDidMount", this) && Oba(getLocation.prototype.__proto__ || Object.getPrototypeOf(getLocation.prototype), "componentDidMount", this).call(this);
            }
        }, {
            key: "initLocationNoCache",
            value: (t = _asyncToGenerator(c.default.mark(function _callee() {
                return c.default.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.initLocation(!1, !0);

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee, this);
            })), function initLocationNoCache() {
                return t.apply(this, arguments);
            })
        }, {
            key: "initLocation",
            value: (r = _asyncToGenerator(c.default.mark(function _callee2(t, r) {
                var n, o, i, a, u, s = this;
                return c.default.wrap(function _callee2$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = f.default.get(p.STORAGE_CITY_INFO), o = null, !n || r) {
                            e.next = 10;
                            break;
                        }
                        if (this.onAuthSuccessCallback && this.onAuthSuccessCallback("location"), this.props.$user && this.props.$user.city.cityId && this.props.$user.city.groupId == n.groupId) return e.abrupt("return");
                        e.next = 8;
                        break;

                      case 8:
                        return this.props.actions.$user.updateCity(n), e.abrupt("return");

                      case 10:
                        if (!n || r) return e.prev = 11, e.next = 14, l.default.getSetting();
                        e.next = 39;
                        break;

                      case 14:
                        if (i = e.sent, t && !i.authSetting["scope.userLocation"]) return e.next = 18, l.default.openSetting();
                        e.next = 22;
                        break;

                      case 18:
                        return a = e.sent, console.log(a), this.initLocation(), e.abrupt("return");

                      case 22:
                        return e.next = 24, this.getWXLocation();

                      case 24:
                        n = e.sent, u = {
                            latitude: n.latitude,
                            longitude: n.longitude
                        }, this.getLocationCityNoLocation(n).then(function(t) {
                            s.onLocationCitySuccessCallback && s.onLocationCitySuccessCallback();
                            try {
                                JSON.parse(f.default.get("currentSelectCity"));
                            } catch (e) {
                                f.default.set("currentSelectCity", JSON.stringify(t), -1);
                            }
                        }), o = Object.assign({}, u, {}), this.setStorageCity(o), this.props.actions.$user.updateCity(o), 
                        this.props.actions.$user.setAuthLaction({
                            isAuthLocation: !0
                        }), this.onAuthSuccessCallback && this.onAuthSuccessCallback("location"), e.next = 39;
                        break;

                      case 34:
                        return e.prev = 34, e.t0 = e.catch(11), this.props.actions.$user.updateCity(null), 
                        this.onAuthErrorCallback && this.onAuthErrorCallback("location"), e.abrupt("return");

                      case 39:
                      case "end":
                        return e.stop();
                    }
                }, _callee2, this, [ [ 11, 34 ] ]);
            })), function initLocation(e, t) {
                return r.apply(this, arguments);
            })
        }, {
            key: "setStorageCity",
            value: function setStorageCity(e) {
                e && f.default.set(p.STORAGE_CITY_INFO, e);
            }
        }, {
            key: "setHistoryCity",
            value: function setHistoryCity() {}
        }, {
            key: "getWXLocation",
            value: function getWXLocation() {
                return new Promise(function(t, r) {
                    l.default.getLocation({
                        type: "wgs84",
                        success: function success(e) {
                            t(e);
                        },
                        fail: function fail(e) {
                            r(e);
                        }
                    }).catch(function(e) {
                        r(e);
                    });
                });
            }
        }, {
            key: "getLocationCity",
            value: function getLocationCity() {
                var t = this;
                return this.getWXLocation().then(function(e) {
                    return t.getLocationCityNoLocation(e);
                });
            }
        }, {
            key: "getLocationCityNoLocation",
            value: function getLocationCityNoLocation(e) {
                var t = "https://restapi.amap.com/v3/geocode/regeo?location=" + e.longitude + "," + e.latitude + "&key=81644bcad3ef4a5f29227c8f5c375bb5&output=JSON";
                return o.default.pureGet(t).then(function(e) {
                    console.log(e);
                    var t = e.regeocode;
                    if (t && t.addressComponent && t.addressComponent.adcode) {
                        var r = {
                            regionName: t.addressComponent.city,
                            regionCode: t.addressComponent.adcode.replace(/(\d{4})\d{2}/, "$100")
                        };
                        return console.log(r), f.default.set("currentLocationCity", JSON.stringify(r), -1), 
                        Promise.resolve(r);
                    }
                    return Promise.reject();
                });
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                return Oba(getLocation.prototype.__proto__ || Object.getPrototypeOf(getLocation.prototype), "componentWillUnmount", this) && Oba(getLocation.prototype.__proto__ || Object.getPrototypeOf(getLocation.prototype), "componentWillUnmount", this).call(this);
            }
        } ]), getLocation;
        function getLocation() {
            return function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, getLocation), function _possibleConstructorReturn(e, t) {
                if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }(this, (getLocation.__proto__ || Object.getPrototypeOf(getLocation)).apply(this, arguments));
        }
        var r, t;
    };
    var l = _interopRequireDefault(r(0)), f = _interopRequireDefault(r(9)), o = _interopRequireDefault(r(2)), p = r(10);
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function _asyncToGenerator(e) {
        return function() {
            var a = e.apply(this, arguments);
            return new Promise(function(o, i) {
                return function step(e, t) {
                    try {
                        var r = a[e](t), n = r.value;
                    } catch (e) {
                        return void i(e);
                    }
                    if (!r.done) return Promise.resolve(n).then(function(e) {
                        step("next", e);
                    }, function(e) {
                        step("throw", e);
                    });
                    o(n);
                }("next");
            });
        };
    }
}, , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    var n, o, i, a, u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    a = function(e) {
        var t = "0123456789abcdefghijklmnopqrstuvwxyz";
        function int2char(e) {
            return t.charAt(e);
        }
        function op_and(e, t) {
            return e & t;
        }
        function op_or(e, t) {
            return e | t;
        }
        function op_xor(e, t) {
            return e ^ t;
        }
        function op_andnot(e, t) {
            return e & ~t;
        }
        function lbit(e) {
            if (0 == e) return -1;
            var t = 0;
            return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8), 
            0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t, 
            t;
        }
        function cbit(e) {
            for (var t = 0; 0 != e; ) e &= e - 1, ++t;
            return t;
        }
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        function hex2b64(e) {
            var t, r, n = "";
            for (t = 0; t + 3 <= e.length; t += 3) r = parseInt(e.substring(t, t + 3), 16), 
            n += a.charAt(r >> 6) + a.charAt(63 & r);
            for (t + 1 == e.length ? (r = parseInt(e.substring(t, t + 1), 16), n += a.charAt(r << 2)) : t + 2 == e.length && (r = parseInt(e.substring(t, t + 2), 16), 
            n += a.charAt(r >> 2) + a.charAt((3 & r) << 4)); 0 < (3 & n.length); ) n += "=";
            return n;
        }
        var s, r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
        };
        var u, p = function decode(e) {
            var t;
            if (void 0 === s) {
                var r = "0123456789ABCDEF", n = " \f\n\r\t \u2028\u2029";
                for (s = {}, t = 0; t < 16; ++t) s[r.charAt(t)] = t;
                for (r = r.toLowerCase(), t = 10; t < 16; ++t) s[r.charAt(t)] = t;
                for (t = 0; t < n.length; ++t) s[n.charAt(t)] = -1;
            }
            var o = [], i = 0, a = 0;
            for (t = 0; t < e.length; ++t) {
                var u = e.charAt(t);
                if ("=" == u) break;
                if (-1 != (u = s[u])) {
                    if (void 0 === u) throw new Error("Illegal character at offset " + t);
                    i |= u, 2 <= ++a ? (o[o.length] = i, a = i = 0) : i <<= 4;
                }
            }
            if (a) throw new Error("Hex encoding incomplete: 4 bits missing");
            return o;
        }, d = {
            decode: function decode(e) {
                var t;
                if (void 0 === u) {
                    var r = "= \f\n\r\t \u2028\u2029";
                    for (u = Object.create(null), t = 0; t < 64; ++t) u["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)] = t;
                    for (t = 0; t < r.length; ++t) u[r.charAt(t)] = -1;
                }
                var n = [], o = 0, i = 0;
                for (t = 0; t < e.length; ++t) {
                    var a = e.charAt(t);
                    if ("=" == a) break;
                    if (-1 != (a = u[a])) {
                        if (void 0 === a) throw new Error("Illegal character at offset " + t);
                        o |= a, 4 <= ++i ? (n[n.length] = o >> 16, n[n.length] = o >> 8 & 255, n[n.length] = 255 & o, 
                        i = o = 0) : o <<= 6;
                    }
                }
                switch (i) {
                  case 1:
                    throw new Error("Base64 encoding incomplete: at least 2 bits missing");

                  case 2:
                    n[n.length] = o >> 10;
                    break;

                  case 3:
                    n[n.length] = o >> 16, n[n.length] = o >> 8 & 255;
                }
                return n;
            },
            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            unarmor: function unarmor(e) {
                var t = d.re.exec(e);
                if (t) if (t[1]) e = t[1]; else {
                    if (!t[2]) throw new Error("RegExp out of sync");
                    e = t[2];
                }
                return d.decode(e);
            }
        }, c = (Int10.prototype.mulAdd = function(e, t) {
            var r, n, o = this.buf, i = o.length;
            for (r = 0; r < i; ++r) (n = o[r] * e + t) < 1e13 ? t = 0 : n -= 1e13 * (t = 0 | n / 1e13), 
            o[r] = n;
            0 < t && (o[r] = t);
        }, Int10.prototype.sub = function(e) {
            var t, r, n = this.buf, o = n.length;
            for (t = 0; t < o; ++t) e = (r = n[t] - e) < 0 ? (r += 1e13, 1) : 0, n[t] = r;
            for (;0 === n[n.length - 1]; ) n.pop();
        }, Int10.prototype.toString = function(e) {
            if (10 != (e || 10)) throw new Error("only base 10 is supported");
            for (var t = this.buf, r = t[t.length - 1].toString(), n = t.length - 2; 0 <= n; --n) r += (1e13 + t[n]).toString().substring(1);
            return r;
        }, Int10.prototype.valueOf = function() {
            for (var e = this.buf, t = 0, r = e.length - 1; 0 <= r; --r) t = 1e13 * t + e[r];
            return t;
        }, Int10.prototype.simplify = function() {
            var e = this.buf;
            return 1 == e.length ? e[0] : this;
        }, Int10);
        function Int10(e) {
            this.buf = [ +e || 0 ];
        }
        var l = "…", i = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, f = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
        function stringCut(e, t) {
            return e.length > t && (e = e.substring(0, t) + l), e;
        }
        var h = (Stream.prototype.get = function(e) {
            if (void 0 === e && (e = this.pos++), e >= this.enc.length) throw new Error("Requesting byte offset " + e + " on a stream of length " + this.enc.length);
            return "string" == typeof this.enc ? this.enc.charCodeAt(e) : this.enc[e];
        }, Stream.prototype.hexByte = function(e) {
            return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(15 & e);
        }, Stream.prototype.hexDump = function(e, t, r) {
            for (var n = "", o = e; o < t; ++o) if (n += this.hexByte(this.get(o)), !0 !== r) switch (15 & o) {
              case 7:
                n += "  ";
                break;

              case 15:
                n += "\n";
                break;

              default:
                n += " ";
            }
            return n;
        }, Stream.prototype.isASCII = function(e, t) {
            for (var r = e; r < t; ++r) {
                var n = this.get(r);
                if (n < 32 || 176 < n) return !1;
            }
            return !0;
        }, Stream.prototype.parseStringISO = function(e, t) {
            for (var r = "", n = e; n < t; ++n) r += String.fromCharCode(this.get(n));
            return r;
        }, Stream.prototype.parseStringUTF = function(e, t) {
            for (var r = "", n = e; n < t; ) {
                var o = this.get(n++);
                r += o < 128 ? String.fromCharCode(o) : 191 < o && o < 224 ? String.fromCharCode((31 & o) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & o) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++));
            }
            return r;
        }, Stream.prototype.parseStringBMP = function(e, t) {
            for (var r, n, o = "", i = e; i < t; ) r = this.get(i++), n = this.get(i++), o += String.fromCharCode(r << 8 | n);
            return o;
        }, Stream.prototype.parseTime = function(e, t, r) {
            var n = this.parseStringISO(e, t), o = (r ? i : f).exec(n);
            return o ? (r && (o[1] = +o[1], o[1] += +o[1] < 70 ? 2e3 : 1900), n = o[1] + "-" + o[2] + "-" + o[3] + " " + o[4], 
            o[5] && (n += ":" + o[5], o[6] && (n += ":" + o[6], o[7] && (n += "." + o[7]))), 
            o[8] && (n += " UTC", "Z" != o[8] && (n += o[8], o[9] && (n += ":" + o[9]))), n) : "Unrecognized time: " + n;
        }, Stream.prototype.parseInteger = function(e, t) {
            for (var r, n = this.get(e), o = 127 < n, i = o ? 255 : 0, a = ""; n == i && ++e < t; ) n = this.get(e);
            if (0 == (r = t - e)) return o ? -1 : 0;
            if (4 < r) {
                for (a = n, r <<= 3; 0 == (128 & (+a ^ i)); ) a = +a << 1, --r;
                a = "(" + r + " bit)\n";
            }
            o && (n -= 256);
            for (var u = new c(n), s = e + 1; s < t; ++s) u.mulAdd(256, this.get(s));
            return a + u.toString();
        }, Stream.prototype.parseBitString = function(e, t, r) {
            for (var n = this.get(e), o = "(" + ((t - e - 1 << 3) - n) + " bit)\n", i = "", a = e + 1; a < t; ++a) {
                for (var u = this.get(a), s = a == t - 1 ? n : 0, c = 7; s <= c; --c) i += u >> c & 1 ? "1" : "0";
                if (i.length > r) return o + stringCut(i, r);
            }
            return o + i;
        }, Stream.prototype.parseOctetString = function(e, t, r) {
            if (this.isASCII(e, t)) return stringCut(this.parseStringISO(e, t), r);
            var n = t - e, o = "(" + n + " byte)\n";
            (r /= 2) < n && (t = e + r);
            for (var i = e; i < t; ++i) o += this.hexByte(this.get(i));
            return r < n && (o += l), o;
        }, Stream.prototype.parseOID = function(e, t, r) {
            for (var n = "", o = new c(), i = 0, a = e; a < t; ++a) {
                var u = this.get(a);
                if (o.mulAdd(128, 127 & u), i += 7, !(128 & u)) {
                    if ("" === n) if ((o = o.simplify()) instanceof c) o.sub(80), n = "2." + o.toString(); else {
                        var s = o < 80 ? o < 40 ? 0 : 1 : 2;
                        n = s + "." + (o - 40 * s);
                    } else n += "." + o.toString();
                    if (n.length > r) return stringCut(n, r);
                    o = new c(), i = 0;
                }
            }
            return 0 < i && (n += ".incomplete"), n;
        }, Stream);
        function Stream(e, t) {
            this.hexDigits = "0123456789ABCDEF", e instanceof Stream ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, 
            this.pos = t);
        }
        var y = (ASN1.prototype.typeName = function() {
            switch (this.tag.tagClass) {
              case 0:
                switch (this.tag.tagNumber) {
                  case 0:
                    return "EOC";

                  case 1:
                    return "BOOLEAN";

                  case 2:
                    return "INTEGER";

                  case 3:
                    return "BIT_STRING";

                  case 4:
                    return "OCTET_STRING";

                  case 5:
                    return "NULL";

                  case 6:
                    return "OBJECT_IDENTIFIER";

                  case 7:
                    return "ObjectDescriptor";

                  case 8:
                    return "EXTERNAL";

                  case 9:
                    return "REAL";

                  case 10:
                    return "ENUMERATED";

                  case 11:
                    return "EMBEDDED_PDV";

                  case 12:
                    return "UTF8String";

                  case 16:
                    return "SEQUENCE";

                  case 17:
                    return "SET";

                  case 18:
                    return "NumericString";

                  case 19:
                    return "PrintableString";

                  case 20:
                    return "TeletexString";

                  case 21:
                    return "VideotexString";

                  case 22:
                    return "IA5String";

                  case 23:
                    return "UTCTime";

                  case 24:
                    return "GeneralizedTime";

                  case 25:
                    return "GraphicString";

                  case 26:
                    return "VisibleString";

                  case 27:
                    return "GeneralString";

                  case 28:
                    return "UniversalString";

                  case 30:
                    return "BMPString";
                }
                return "Universal_" + this.tag.tagNumber.toString();

              case 1:
                return "Application_" + this.tag.tagNumber.toString();

              case 2:
                return "[" + this.tag.tagNumber.toString() + "]";

              case 3:
                return "Private_" + this.tag.tagNumber.toString();
            }
        }, ASN1.prototype.content = function(e) {
            if (void 0 === this.tag) return null;
            void 0 === e && (e = 1 / 0);
            var t = this.posContent(), r = Math.abs(this.length);
            if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + r, e);
            switch (this.tag.tagNumber) {
              case 1:
                return 0 === this.stream.get(t) ? "false" : "true";

              case 2:
                return this.stream.parseInteger(t, t + r);

              case 3:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(t, t + r, e);

              case 4:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + r, e);

              case 6:
                return this.stream.parseOID(t, t + r, e);

              case 16:
              case 17:
                return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";

              case 12:
                return stringCut(this.stream.parseStringUTF(t, t + r), e);

              case 18:
              case 19:
              case 20:
              case 21:
              case 22:
              case 26:
                return stringCut(this.stream.parseStringISO(t, t + r), e);

              case 30:
                return stringCut(this.stream.parseStringBMP(t, t + r), e);

              case 23:
              case 24:
                return this.stream.parseTime(t, t + r, 23 == this.tag.tagNumber);
            }
            return null;
        }, ASN1.prototype.toString = function() {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
        }, ASN1.prototype.toPrettyString = function(e) {
            void 0 === e && (e = "");
            var t = e + this.typeName() + " @" + this.stream.pos;
            if (0 <= this.length && (t += "+"), t += this.length, this.tag.tagConstructed ? t += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (t += " (encapsulates)"), 
            t += "\n", null !== this.sub) {
                e += "  ";
                for (var r = 0, n = this.sub.length; r < n; ++r) t += this.sub[r].toPrettyString(e);
            }
            return t;
        }, ASN1.prototype.posStart = function() {
            return this.stream.pos;
        }, ASN1.prototype.posContent = function() {
            return this.stream.pos + this.header;
        }, ASN1.prototype.posEnd = function() {
            return this.stream.pos + this.header + Math.abs(this.length);
        }, ASN1.prototype.toHexString = function() {
            return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
        }, ASN1.decodeLength = function(e) {
            var t = e.get(), r = 127 & t;
            if (r == t) return r;
            if (6 < r) throw new Error("Length over 48 bits not supported at position " + (e.pos - 1));
            if (0 == r) return null;
            for (var n = t = 0; n < r; ++n) t = 256 * t + e.get();
            return t;
        }, ASN1.prototype.getHexStringValue = function() {
            var e = this.toHexString(), t = 2 * this.header, r = 2 * this.length;
            return e.substr(t, r);
        }, ASN1.decode = function(e) {
            var n;
            function jha() {
                var e = [];
                if (null !== o) {
                    for (var t = i + o; n.pos < t; ) e[e.length] = ASN1.decode(n);
                    if (n.pos != t) throw new Error("Content size is not correct for container starting at offset " + i);
                } else try {
                    for (;;) {
                        var r = ASN1.decode(n);
                        if (r.tag.isEOC()) break;
                        e[e.length] = r;
                    }
                    o = i - n.pos;
                } catch (e) {
                    throw new Error("Exception while decoding undefined length content: " + e);
                }
                return e;
            }
            n = e instanceof h ? e : new h(e, 0);
            var t = new h(n), r = new g(n), o = ASN1.decodeLength(n), i = n.pos, a = i - t.pos, u = null;
            if (r.tagConstructed) u = jha(); else if (r.isUniversal() && (3 == r.tagNumber || 4 == r.tagNumber)) try {
                if (3 == r.tagNumber && 0 != n.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                u = jha();
                for (var s = 0; s < u.length; ++s) if (u[s].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
            } catch (e) {
                u = null;
            }
            if (null === u) {
                if (null === o) throw new Error("We can't skip over an invalid tag with undefined length at offset " + i);
                n.pos = i + Math.abs(o);
            }
            return new ASN1(t, a, o, r, u);
        }, ASN1);
        function ASN1(e, t, r, n, o) {
            if (!(n instanceof g)) throw new Error("Invalid tag value.");
            this.stream = e, this.header = t, this.length = r, this.tag = n, this.sub = o;
        }
        var g = (ASN1Tag.prototype.isUniversal = function() {
            return 0 === this.tagClass;
        }, ASN1Tag.prototype.isEOC = function() {
            return 0 === this.tagClass && 0 === this.tagNumber;
        }, ASN1Tag);
        function ASN1Tag(e) {
            var t = e.get();
            if (this.tagClass = t >> 6, this.tagConstructed = 0 != (32 & t), this.tagNumber = 31 & t, 
            31 == this.tagNumber) {
                for (var r = new c(); t = e.get(), r.mulAdd(128, 127 & t), 128 & t; ) ;
                this.tagNumber = r.simplify();
            }
        }
        var v = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997 ], m = 67108864 / v[v.length - 1], b = (BigInteger.prototype.toString = function(e) {
            if (this.s < 0) return "-" + this.negate().toString(e);
            var t;
            if (16 == e) t = 4; else if (8 == e) t = 3; else if (2 == e) t = 1; else if (32 == e) t = 5; else {
                if (4 != e) return this.toRadix(e);
                t = 2;
            }
            var r, n = (1 << t) - 1, o = !1, i = "", a = this.t, u = this.DB - a * this.DB % t;
            if (0 < a--) for (u < this.DB && 0 < (r = this[a] >> u) && (o = !0, i = int2char(r)); 0 <= a; ) u < t ? (r = (this[a] & (1 << u) - 1) << t - u, 
            r |= this[--a] >> (u += this.DB - t)) : (r = this[a] >> (u -= t) & n, u <= 0 && (u += this.DB, 
            --a)), 0 < r && (o = !0), o && (i += int2char(r));
            return o ? i : "0";
        }, BigInteger.prototype.negate = function() {
            var e = nbi();
            return BigInteger.ZERO.subTo(this, e), e;
        }, BigInteger.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this;
        }, BigInteger.prototype.compareTo = function(e) {
            var t = this.s - e.s;
            if (0 != t) return t;
            var r = this.t;
            if (0 != (t = r - e.t)) return this.s < 0 ? -t : t;
            for (;0 <= --r; ) if (0 != (t = this[r] - e[r])) return t;
            return 0;
        }, BigInteger.prototype.bitLength = function() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
        }, BigInteger.prototype.mod = function(e) {
            var t = nbi();
            return this.abs().divRemTo(e, null, t), this.s < 0 && 0 < t.compareTo(BigInteger.ZERO) && e.subTo(t, t), 
            t;
        }, BigInteger.prototype.modPowInt = function(e, t) {
            var r;
            return r = new (e < 256 || t.isEven() ? _ : P)(t), this.exp(e, r);
        }, BigInteger.prototype.clone = function() {
            var e = nbi();
            return this.copyTo(e), e;
        }, BigInteger.prototype.intValue = function() {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return -1;
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0;
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
        }, BigInteger.prototype.byteValue = function() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24;
        }, BigInteger.prototype.shortValue = function() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16;
        }, BigInteger.prototype.signum = function() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
        }, BigInteger.prototype.toByteArray = function() {
            var e = this.t, t = [];
            t[0] = this.s;
            var r, n = this.DB - e * this.DB % 8, o = 0;
            if (0 < e--) for (n < this.DB && (r = this[e] >> n) != (this.s & this.DM) >> n && (t[o++] = r | this.s << this.DB - n); 0 <= e; ) n < 8 ? (r = (this[e] & (1 << n) - 1) << 8 - n, 
            r |= this[--e] >> (n += this.DB - 8)) : (r = this[e] >> (n -= 8) & 255, n <= 0 && (n += this.DB, 
            --e)), 0 != (128 & r) && (r |= -256), 0 == o && (128 & this.s) != (128 & r) && ++o, 
            (0 < o || r != this.s) && (t[o++] = r);
            return t;
        }, BigInteger.prototype.equals = function(e) {
            return 0 == this.compareTo(e);
        }, BigInteger.prototype.min = function(e) {
            return this.compareTo(e) < 0 ? this : e;
        }, BigInteger.prototype.max = function(e) {
            return 0 < this.compareTo(e) ? this : e;
        }, BigInteger.prototype.and = function(e) {
            var t = nbi();
            return this.bitwiseTo(e, op_and, t), t;
        }, BigInteger.prototype.or = function(e) {
            var t = nbi();
            return this.bitwiseTo(e, op_or, t), t;
        }, BigInteger.prototype.xor = function(e) {
            var t = nbi();
            return this.bitwiseTo(e, op_xor, t), t;
        }, BigInteger.prototype.andNot = function(e) {
            var t = nbi();
            return this.bitwiseTo(e, op_andnot, t), t;
        }, BigInteger.prototype.not = function() {
            for (var e = nbi(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
            return e.t = this.t, e.s = ~this.s, e;
        }, BigInteger.prototype.shiftLeft = function(e) {
            var t = nbi();
            return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }, BigInteger.prototype.shiftRight = function(e) {
            var t = nbi();
            return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }, BigInteger.prototype.getLowestSetBit = function() {
            for (var e = 0; e < this.t; ++e) if (0 != this[e]) return e * this.DB + lbit(this[e]);
            return this.s < 0 ? this.t * this.DB : -1;
        }, BigInteger.prototype.bitCount = function() {
            for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r) e += cbit(this[r] ^ t);
            return e;
        }, BigInteger.prototype.testBit = function(e) {
            var t = Math.floor(e / this.DB);
            return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB);
        }, BigInteger.prototype.setBit = function(e) {
            return this.changeBit(e, op_or);
        }, BigInteger.prototype.clearBit = function(e) {
            return this.changeBit(e, op_andnot);
        }, BigInteger.prototype.flipBit = function(e) {
            return this.changeBit(e, op_xor);
        }, BigInteger.prototype.add = function(e) {
            var t = nbi();
            return this.addTo(e, t), t;
        }, BigInteger.prototype.subtract = function(e) {
            var t = nbi();
            return this.subTo(e, t), t;
        }, BigInteger.prototype.multiply = function(e) {
            var t = nbi();
            return this.multiplyTo(e, t), t;
        }, BigInteger.prototype.divide = function(e) {
            var t = nbi();
            return this.divRemTo(e, t, null), t;
        }, BigInteger.prototype.remainder = function(e) {
            var t = nbi();
            return this.divRemTo(e, null, t), t;
        }, BigInteger.prototype.divideAndRemainder = function(e) {
            var t = nbi(), r = nbi();
            return this.divRemTo(e, t, r), [ t, r ];
        }, BigInteger.prototype.modPow = function(e, t) {
            var r, n, o = e.bitLength(), i = nbv(1);
            if (o <= 0) return i;
            r = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6, n = new (o < 8 ? _ : t.isEven() ? S : P)(t);
            var a = [], u = 3, s = r - 1, c = (1 << r) - 1;
            if (a[1] = n.convert(this), 1 < r) {
                var l = nbi();
                for (n.sqrTo(a[1], l); u <= c; ) a[u] = nbi(), n.mulTo(l, a[u - 2], a[u]), u += 2;
            }
            var f, p, d = e.t - 1, h = !0, y = nbi();
            for (o = nbits(e[d]) - 1; 0 <= d; ) {
                for (s <= o ? f = e[d] >> o - s & c : (f = (e[d] & (1 << o + 1) - 1) << s - o, 0 < d && (f |= e[d - 1] >> this.DB + o - s)), 
                u = r; 0 == (1 & f); ) f >>= 1, --u;
                if ((o -= u) < 0 && (o += this.DB, --d), h) a[f].copyTo(i), h = !1; else {
                    for (;1 < u; ) n.sqrTo(i, y), n.sqrTo(y, i), u -= 2;
                    0 < u ? n.sqrTo(i, y) : (p = i, i = y, y = p), n.mulTo(y, a[f], i);
                }
                for (;0 <= d && 0 == (e[d] & 1 << o); ) n.sqrTo(i, y), p = i, i = y, y = p, --o < 0 && (o = this.DB - 1, 
                --d);
            }
            return n.revert(i);
        }, BigInteger.prototype.modInverse = function(e) {
            var t = e.isEven();
            if (this.isEven() && t || 0 == e.signum()) return BigInteger.ZERO;
            for (var r = e.clone(), n = this.clone(), o = nbv(1), i = nbv(0), a = nbv(0), u = nbv(1); 0 != r.signum(); ) {
                for (;r.isEven(); ) r.rShiftTo(1, r), t ? (o.isEven() && i.isEven() || (o.addTo(this, o), 
                i.subTo(e, i)), o.rShiftTo(1, o)) : i.isEven() || i.subTo(e, i), i.rShiftTo(1, i);
                for (;n.isEven(); ) n.rShiftTo(1, n), t ? (a.isEven() && u.isEven() || (a.addTo(this, a), 
                u.subTo(e, u)), a.rShiftTo(1, a)) : u.isEven() || u.subTo(e, u), u.rShiftTo(1, u);
                0 <= r.compareTo(n) ? (r.subTo(n, r), t && o.subTo(a, o), i.subTo(u, i)) : (n.subTo(r, n), 
                t && a.subTo(o, a), u.subTo(i, u));
            }
            return 0 != n.compareTo(BigInteger.ONE) ? BigInteger.ZERO : 0 <= u.compareTo(e) ? u.subtract(e) : u.signum() < 0 ? (u.addTo(e, u), 
            u.signum() < 0 ? u.add(e) : u) : u;
        }, BigInteger.prototype.pow = function(e) {
            return this.exp(e, new n());
        }, BigInteger.prototype.gcd = function(e) {
            var t = this.s < 0 ? this.negate() : this.clone(), r = e.s < 0 ? e.negate() : e.clone();
            if (t.compareTo(r) < 0) {
                var n = t;
                t = r, r = n;
            }
            var o = t.getLowestSetBit(), i = r.getLowestSetBit();
            if (i < 0) return t;
            for (o < i && (i = o), 0 < i && (t.rShiftTo(i, t), r.rShiftTo(i, r)); 0 < t.signum(); ) 0 < (o = t.getLowestSetBit()) && t.rShiftTo(o, t), 
            0 < (o = r.getLowestSetBit()) && r.rShiftTo(o, r), 0 <= t.compareTo(r) ? (t.subTo(r, t), 
            t.rShiftTo(1, t)) : (r.subTo(t, r), r.rShiftTo(1, r));
            return 0 < i && r.lShiftTo(i, r), r;
        }, BigInteger.prototype.isProbablePrime = function(e) {
            var t, r = this.abs();
            if (1 == r.t && r[0] <= v[v.length - 1]) {
                for (t = 0; t < v.length; ++t) if (r[0] == v[t]) return !0;
                return !1;
            }
            if (r.isEven()) return !1;
            for (t = 1; t < v.length; ) {
                for (var n = v[t], o = t + 1; o < v.length && n < m; ) n *= v[o++];
                for (n = r.modInt(n); t < o; ) if (n % v[t++] == 0) return !1;
            }
            return r.millerRabin(e);
        }, BigInteger.prototype.copyTo = function(e) {
            for (var t = this.t - 1; 0 <= t; --t) e[t] = this[t];
            e.t = this.t, e.s = this.s;
        }, BigInteger.prototype.fromInt = function(e) {
            this.t = 1, this.s = e < 0 ? -1 : 0, 0 < e ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
        }, BigInteger.prototype.fromString = function(e, t) {
            var r;
            if (16 == t) r = 4; else if (8 == t) r = 3; else if (256 == t) r = 8; else if (2 == t) r = 1; else if (32 == t) r = 5; else {
                if (4 != t) return void this.fromRadix(e, t);
                r = 2;
            }
            this.t = 0, this.s = 0;
            for (var n = e.length, o = !1, i = 0; 0 <= --n; ) {
                var a = 8 == r ? 255 & +e[n] : intAt(e, n);
                a < 0 ? "-" == e.charAt(n) && (o = !0) : (o = !1, 0 == i ? this[this.t++] = a : i + r > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - i) - 1) << i, 
                this[this.t++] = a >> this.DB - i) : this[this.t - 1] |= a << i, (i += r) >= this.DB && (i -= this.DB));
            }
            8 == r && 0 != (128 & +e[0]) && (this.s = -1, 0 < i && (this[this.t - 1] |= (1 << this.DB - i) - 1 << i)), 
            this.clamp(), o && BigInteger.ZERO.subTo(this, this);
        }, BigInteger.prototype.clamp = function() {
            for (var e = this.s & this.DM; 0 < this.t && this[this.t - 1] == e; ) --this.t;
        }, BigInteger.prototype.dlShiftTo = function(e, t) {
            var r;
            for (r = this.t - 1; 0 <= r; --r) t[r + e] = this[r];
            for (r = e - 1; 0 <= r; --r) t[r] = 0;
            t.t = this.t + e, t.s = this.s;
        }, BigInteger.prototype.drShiftTo = function(e, t) {
            for (var r = e; r < this.t; ++r) t[r - e] = this[r];
            t.t = Math.max(this.t - e, 0), t.s = this.s;
        }, BigInteger.prototype.lShiftTo = function(e, t) {
            for (var r = e % this.DB, n = this.DB - r, o = (1 << n) - 1, i = Math.floor(e / this.DB), a = this.s << r & this.DM, u = this.t - 1; 0 <= u; --u) t[u + i + 1] = this[u] >> n | a, 
            a = (this[u] & o) << r;
            for (u = i - 1; 0 <= u; --u) t[u] = 0;
            t[i] = a, t.t = this.t + i + 1, t.s = this.s, t.clamp();
        }, BigInteger.prototype.rShiftTo = function(e, t) {
            t.s = this.s;
            var r = Math.floor(e / this.DB);
            if (r >= this.t) t.t = 0; else {
                var n = e % this.DB, o = this.DB - n, i = (1 << n) - 1;
                t[0] = this[r] >> n;
                for (var a = r + 1; a < this.t; ++a) t[a - r - 1] |= (this[a] & i) << o, t[a - r] = this[a] >> n;
                0 < n && (t[this.t - r - 1] |= (this.s & i) << o), t.t = this.t - r, t.clamp();
            }
        }, BigInteger.prototype.subTo = function(e, t) {
            for (var r = 0, n = 0, o = Math.min(e.t, this.t); r < o; ) n += this[r] - e[r], 
            t[r++] = n & this.DM, n >>= this.DB;
            if (e.t < this.t) {
                for (n -= e.s; r < this.t; ) n += this[r], t[r++] = n & this.DM, n >>= this.DB;
                n += this.s;
            } else {
                for (n += this.s; r < e.t; ) n -= e[r], t[r++] = n & this.DM, n >>= this.DB;
                n -= e.s;
            }
            t.s = n < 0 ? -1 : 0, n < -1 ? t[r++] = this.DV + n : 0 < n && (t[r++] = n), t.t = r, 
            t.clamp();
        }, BigInteger.prototype.multiplyTo = function(e, t) {
            var r = this.abs(), n = e.abs(), o = r.t;
            for (t.t = o + n.t; 0 <= --o; ) t[o] = 0;
            for (o = 0; o < n.t; ++o) t[o + r.t] = r.am(0, n[o], t, o, 0, r.t);
            t.s = 0, t.clamp(), this.s != e.s && BigInteger.ZERO.subTo(t, t);
        }, BigInteger.prototype.squareTo = function(e) {
            for (var t = this.abs(), r = e.t = 2 * t.t; 0 <= --r; ) e[r] = 0;
            for (r = 0; r < t.t - 1; ++r) {
                var n = t.am(r, t[r], e, 2 * r, 0, 1);
                (e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, n, t.t - r - 1)) >= t.DV && (e[r + t.t] -= t.DV, 
                e[r + t.t + 1] = 1);
            }
            0 < e.t && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)), e.s = 0, e.clamp();
        }, BigInteger.prototype.divRemTo = function(e, t, r) {
            var n = e.abs();
            if (!(n.t <= 0)) {
                var o = this.abs();
                if (o.t < n.t) return null != t && t.fromInt(0), void (null != r && this.copyTo(r));
                null == r && (r = nbi());
                var i = nbi(), a = this.s, u = e.s, s = this.DB - nbits(n[n.t - 1]);
                0 < s ? (n.lShiftTo(s, i), o.lShiftTo(s, r)) : (n.copyTo(i), o.copyTo(r));
                var c = i.t, l = i[c - 1];
                if (0 != l) {
                    var f = l * (1 << this.F1) + (1 < c ? i[c - 2] >> this.F2 : 0), p = this.FV / f, d = (1 << this.F1) / f, h = 1 << this.F2, y = r.t, g = y - c, v = null == t ? nbi() : t;
                    for (i.dlShiftTo(g, v), 0 <= r.compareTo(v) && (r[r.t++] = 1, r.subTo(v, r)), BigInteger.ONE.dlShiftTo(c, v), 
                    v.subTo(i, i); i.t < c; ) i[i.t++] = 0;
                    for (;0 <= --g; ) {
                        var m = r[--y] == l ? this.DM : Math.floor(r[y] * p + (r[y - 1] + h) * d);
                        if ((r[y] += i.am(0, m, r, g, 0, c)) < m) for (i.dlShiftTo(g, v), r.subTo(v, r); r[y] < --m; ) r.subTo(v, r);
                    }
                    null != t && (r.drShiftTo(c, t), a != u && BigInteger.ZERO.subTo(t, t)), r.t = c, 
                    r.clamp(), 0 < s && r.rShiftTo(s, r), a < 0 && BigInteger.ZERO.subTo(r, r);
                }
            }
        }, BigInteger.prototype.invDigit = function() {
            if (this.t < 1) return 0;
            var e = this[0];
            if (0 == (1 & e)) return 0;
            var t = 3 & e;
            return 0 < (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) ? this.DV - t : -t;
        }, BigInteger.prototype.isEven = function() {
            return 0 == (0 < this.t ? 1 & this[0] : this.s);
        }, BigInteger.prototype.exp = function(e, t) {
            if (4294967295 < e || e < 1) return BigInteger.ONE;
            var r = nbi(), n = nbi(), o = t.convert(this), i = nbits(e) - 1;
            for (o.copyTo(r); 0 <= --i; ) if (t.sqrTo(r, n), 0 < (e & 1 << i)) t.mulTo(n, o, r); else {
                var a = r;
                r = n, n = a;
            }
            return t.revert(r);
        }, BigInteger.prototype.chunkSize = function(e) {
            return Math.floor(Math.LN2 * this.DB / Math.log(e));
        }, BigInteger.prototype.toRadix = function(e) {
            if (null == e && (e = 10), 0 == this.signum() || e < 2 || 36 < e) return "0";
            var t = this.chunkSize(e), r = Math.pow(e, t), n = nbv(r), o = nbi(), i = nbi(), a = "";
            for (this.divRemTo(n, o, i); 0 < o.signum(); ) a = (r + i.intValue()).toString(e).substr(1) + a, 
            o.divRemTo(n, o, i);
            return i.intValue().toString(e) + a;
        }, BigInteger.prototype.fromRadix = function(e, t) {
            this.fromInt(0), null == t && (t = 10);
            for (var r = this.chunkSize(t), n = Math.pow(t, r), o = !1, i = 0, a = 0, u = 0; u < e.length; ++u) {
                var s = intAt(e, u);
                s < 0 ? "-" == e.charAt(u) && 0 == this.signum() && (o = !0) : (a = t * a + s, ++i >= r && (this.dMultiply(n), 
                this.dAddOffset(a, 0), a = i = 0));
            }
            0 < i && (this.dMultiply(Math.pow(t, i)), this.dAddOffset(a, 0)), o && BigInteger.ZERO.subTo(this, this);
        }, BigInteger.prototype.fromNumber = function(e, t, r) {
            if ("number" == typeof t) if (e < 2) this.fromInt(1); else for (this.fromNumber(e, r), 
            this.testBit(e - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(e - 1), op_or, this), 
            this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(t); ) this.dAddOffset(2, 0), 
            this.bitLength() > e && this.subTo(BigInteger.ONE.shiftLeft(e - 1), this); else {
                var n = [], o = 7 & e;
                n.length = 1 + (e >> 3), t.nextBytes(n), 0 < o ? n[0] &= (1 << o) - 1 : n[0] = 0, 
                this.fromString(n, 256);
            }
        }, BigInteger.prototype.bitwiseTo = function(e, t, r) {
            var n, o, i = Math.min(e.t, this.t);
            for (n = 0; n < i; ++n) r[n] = t(this[n], e[n]);
            if (e.t < this.t) {
                for (o = e.s & this.DM, n = i; n < this.t; ++n) r[n] = t(this[n], o);
                r.t = this.t;
            } else {
                for (o = this.s & this.DM, n = i; n < e.t; ++n) r[n] = t(o, e[n]);
                r.t = e.t;
            }
            r.s = t(this.s, e.s), r.clamp();
        }, BigInteger.prototype.changeBit = function(e, t) {
            var r = BigInteger.ONE.shiftLeft(e);
            return this.bitwiseTo(r, t, r), r;
        }, BigInteger.prototype.addTo = function(e, t) {
            for (var r = 0, n = 0, o = Math.min(e.t, this.t); r < o; ) n += this[r] + e[r], 
            t[r++] = n & this.DM, n >>= this.DB;
            if (e.t < this.t) {
                for (n += e.s; r < this.t; ) n += this[r], t[r++] = n & this.DM, n >>= this.DB;
                n += this.s;
            } else {
                for (n += this.s; r < e.t; ) n += e[r], t[r++] = n & this.DM, n >>= this.DB;
                n += e.s;
            }
            t.s = n < 0 ? -1 : 0, 0 < n ? t[r++] = n : n < -1 && (t[r++] = this.DV + n), t.t = r, 
            t.clamp();
        }, BigInteger.prototype.dMultiply = function(e) {
            this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp();
        }, BigInteger.prototype.dAddOffset = function(e, t) {
            if (0 != e) {
                for (;this.t <= t; ) this[this.t++] = 0;
                for (this[t] += e; this[t] >= this.DV; ) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), 
                ++this[t];
            }
        }, BigInteger.prototype.multiplyLowerTo = function(e, t, r) {
            var n = Math.min(this.t + e.t, t);
            for (r.s = 0, r.t = n; 0 < n; ) r[--n] = 0;
            for (var o = r.t - this.t; n < o; ++n) r[n + this.t] = this.am(0, e[n], r, n, 0, this.t);
            for (o = Math.min(e.t, t); n < o; ++n) this.am(0, e[n], r, n, 0, t - n);
            r.clamp();
        }, BigInteger.prototype.multiplyUpperTo = function(e, t, r) {
            --t;
            var n = r.t = this.t + e.t - t;
            for (r.s = 0; 0 <= --n; ) r[n] = 0;
            for (n = Math.max(t - this.t, 0); n < e.t; ++n) r[this.t + n - t] = this.am(t - n, e[n], r, 0, 0, this.t + n - t);
            r.clamp(), r.drShiftTo(1, r);
        }, BigInteger.prototype.modInt = function(e) {
            if (e <= 0) return 0;
            var t = this.DV % e, r = this.s < 0 ? e - 1 : 0;
            if (0 < this.t) if (0 == t) r = this[0] % e; else for (var n = this.t - 1; 0 <= n; --n) r = (t * r + this[n]) % e;
            return r;
        }, BigInteger.prototype.millerRabin = function(e) {
            var t = this.subtract(BigInteger.ONE), r = t.getLowestSetBit();
            if (r <= 0) return !1;
            var n = t.shiftRight(r);
            v.length < (e = e + 1 >> 1) && (e = v.length);
            for (var o = nbi(), i = 0; i < e; ++i) {
                o.fromInt(v[Math.floor(Math.random() * v.length)]);
                var a = o.modPow(n, this);
                if (0 != a.compareTo(BigInteger.ONE) && 0 != a.compareTo(t)) {
                    for (var u = 1; u++ < r && 0 != a.compareTo(t); ) if (0 == (a = a.modPowInt(2, this)).compareTo(BigInteger.ONE)) return !1;
                    if (0 != a.compareTo(t)) return !1;
                }
            }
            return !0;
        }, BigInteger.prototype.square = function() {
            var e = nbi();
            return this.squareTo(e), e;
        }, BigInteger.prototype.gcda = function(e, t) {
            var r = this.s < 0 ? this.negate() : this.clone(), n = e.s < 0 ? e.negate() : e.clone();
            if (r.compareTo(n) < 0) {
                var o = r;
                r = n, n = o;
            }
            var i = r.getLowestSetBit(), a = n.getLowestSetBit();
            a < 0 ? t(r) : (i < a && (a = i), 0 < a && (r.rShiftTo(a, r), n.rShiftTo(a, n)), 
            setTimeout(function gcda1() {
                0 < (i = r.getLowestSetBit()) && r.rShiftTo(i, r), 0 < (i = n.getLowestSetBit()) && n.rShiftTo(i, n), 
                0 <= r.compareTo(n) ? (r.subTo(n, r), r.rShiftTo(1, r)) : (n.subTo(r, n), n.rShiftTo(1, n)), 
                0 < r.signum() ? setTimeout(gcda1, 0) : (0 < a && n.lShiftTo(a, n), setTimeout(function() {
                    t(n);
                }, 0));
            }, 10));
        }, BigInteger.prototype.fromNumberAsync = function(e, t, r, n) {
            if ("number" == typeof t) if (e < 2) this.fromInt(1); else {
                this.fromNumber(e, r), this.testBit(e - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(e - 1), op_or, this), 
                this.isEven() && this.dAddOffset(1, 0);
                var o = this;
                setTimeout(function bnpfn1_1() {
                    o.dAddOffset(2, 0), o.bitLength() > e && o.subTo(BigInteger.ONE.shiftLeft(e - 1), o), 
                    o.isProbablePrime(t) ? setTimeout(function() {
                        n();
                    }, 0) : setTimeout(bnpfn1_1, 0);
                }, 0);
            } else {
                var i = [], a = 7 & e;
                i.length = 1 + (e >> 3), t.nextBytes(i), 0 < a ? i[0] &= (1 << a) - 1 : i[0] = 0, 
                this.fromString(i, 256);
            }
        }, BigInteger);
        function BigInteger(e, t, r) {
            null != e && ("number" == typeof e ? this.fromNumber(e, t, r) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t));
        }
        var n = (NullExp.prototype.convert = function(e) {
            return e;
        }, NullExp.prototype.revert = function(e) {
            return e;
        }, NullExp.prototype.mulTo = function(e, t, r) {
            e.multiplyTo(t, r);
        }, NullExp.prototype.sqrTo = function(e, t) {
            e.squareTo(t);
        }, NullExp);
        function NullExp() {}
        var _ = (Classic.prototype.convert = function(e) {
            return e.s < 0 || 0 <= e.compareTo(this.m) ? e.mod(this.m) : e;
        }, Classic.prototype.revert = function(e) {
            return e;
        }, Classic.prototype.reduce = function(e) {
            e.divRemTo(this.m, null, e);
        }, Classic.prototype.mulTo = function(e, t, r) {
            e.multiplyTo(t, r), this.reduce(r);
        }, Classic.prototype.sqrTo = function(e, t) {
            e.squareTo(t), this.reduce(t);
        }, Classic);
        function Classic(e) {
            this.m = e;
        }
        var P = (Montgomery.prototype.convert = function(e) {
            var t = nbi();
            return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && 0 < t.compareTo(b.ZERO) && this.m.subTo(t, t), 
            t;
        }, Montgomery.prototype.revert = function(e) {
            var t = nbi();
            return e.copyTo(t), this.reduce(t), t;
        }, Montgomery.prototype.reduce = function(e) {
            for (;e.t <= this.mt2; ) e[e.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var r = 32767 & e[t], n = r * this.mpl + ((r * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                for (e[r = t + this.m.t] += this.m.am(0, n, e, t, 0, this.m.t); e[r] >= e.DV; ) e[r] -= e.DV, 
                e[++r]++;
            }
            e.clamp(), e.drShiftTo(this.m.t, e), 0 <= e.compareTo(this.m) && e.subTo(this.m, e);
        }, Montgomery.prototype.mulTo = function(e, t, r) {
            e.multiplyTo(t, r), this.reduce(r);
        }, Montgomery.prototype.sqrTo = function(e, t) {
            e.squareTo(t), this.reduce(t);
        }, Montgomery);
        function Montgomery(e) {
            this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, 
            this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
        }
        var S = (Barrett.prototype.convert = function(e) {
            if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
            if (e.compareTo(this.m) < 0) return e;
            var t = nbi();
            return e.copyTo(t), this.reduce(t), t;
        }, Barrett.prototype.revert = function(e) {
            return e;
        }, Barrett.prototype.reduce = function(e) {
            for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, 
            e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0; ) e.dAddOffset(1, this.m.t + 1);
            for (e.subTo(this.r2, e); 0 <= e.compareTo(this.m); ) e.subTo(this.m, e);
        }, Barrett.prototype.mulTo = function(e, t, r) {
            e.multiplyTo(t, r), this.reduce(r);
        }, Barrett.prototype.sqrTo = function(e, t) {
            e.squareTo(t), this.reduce(t);
        }, Barrett);
        function Barrett(e) {
            this.m = e, this.r2 = nbi(), this.q3 = nbi(), b.ONE.dlShiftTo(2 * e.t, this.r2), 
            this.mu = this.r2.divide(e);
        }
        function nbi() {
            return new b(null);
        }
        function parseBigInt(e, t) {
            return new b(e, t);
        }
        b.prototype.am = function am3(e, t, r, n, o, i) {
            for (var a = 16383 & t, u = t >> 14; 0 <= --i; ) {
                var s = 16383 & this[e], c = this[e++] >> 14, l = u * s + c * a;
                o = ((s = a * s + ((16383 & l) << 14) + r[n] + o) >> 28) + (l >> 14) + u * c, r[n++] = 268435455 & s;
            }
            return o;
        }, b.prototype.DB = 28, b.prototype.DM = 268435455, b.prototype.DV = 1 << 28;
        b.prototype.FV = Math.pow(2, 52), b.prototype.F1 = 24, b.prototype.F2 = 4;
        var o, A, C = [];
        for (o = "0".charCodeAt(0), A = 0; A <= 9; ++A) C[o++] = A;
        for (o = "a".charCodeAt(0), A = 10; A < 36; ++A) C[o++] = A;
        for (o = "A".charCodeAt(0), A = 10; A < 36; ++A) C[o++] = A;
        function intAt(e, t) {
            var r = C[e.charCodeAt(t)];
            return null == r ? -1 : r;
        }
        function nbv(e) {
            var t = nbi();
            return t.fromInt(e), t;
        }
        function nbits(e) {
            var t, r = 1;
            return 0 != (t = e >>> 16) && (e = t, r += 16), 0 != (t = e >> 8) && (e = t, r += 8), 
            0 != (t = e >> 4) && (e = t, r += 4), 0 != (t = e >> 2) && (e = t, r += 2), 0 != (t = e >> 1) && (e = t, 
            r += 1), r;
        }
        b.ZERO = nbv(0), b.ONE = nbv(1);
        var T = (Arcfour.prototype.init = function(e) {
            var t, r, n;
            for (t = 0; t < 256; ++t) this.S[t] = t;
            for (t = r = 0; t < 256; ++t) r = r + this.S[t] + e[t % e.length] & 255, n = this.S[t], 
            this.S[t] = this.S[r], this.S[r] = n;
            this.i = 0, this.j = 0;
        }, Arcfour.prototype.next = function() {
            var e;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], 
            this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255];
        }, Arcfour);
        function Arcfour() {
            this.i = 0, this.j = 0, this.S = [];
        }
        var O, D, R = 256, E = null;
        if (null == E) {
            E = [];
            var I = void (D = 0), M = new Uint32Array(256);
            for (!function getRandomValues(e) {
                for (var t = 0, r = e.length; t < r; t++) e[t] = Math.floor(10 * Math.random());
            }(M), I = 0; I < M.length; ++I) E[D++] = 255 & M[I];
        }
        function rng_get_byte() {
            if (null == O) {
                for (O = function prng_newstate() {
                    return new T();
                }(); D < R; ) {
                    var e = Math.floor(65536 * Math.random());
                    E[D++] = 255 & e;
                }
                for (O.init(E), D = 0; D < E.length; ++D) E[D] = 0;
                D = 0;
            }
            return O.next();
        }
        var w = (SecureRandom.prototype.nextBytes = function(e) {
            for (var t = 0; t < e.length; ++t) e[t] = rng_get_byte();
        }, SecureRandom);
        function SecureRandom() {}
        var N = (RSAKey.prototype.doPublic = function(e) {
            return e.modPowInt(this.e, this.n);
        }, RSAKey.prototype.doPrivate = function(e) {
            if (null == this.p || null == this.q) return e.modPow(this.d, this.n);
            for (var t = e.mod(this.p).modPow(this.dmp1, this.p), r = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(r) < 0; ) t = t.add(this.p);
            return t.subtract(r).multiply(this.coeff).mod(this.p).multiply(this.q).add(r);
        }, RSAKey.prototype.setPublic = function(e, t) {
            null != e && null != t && 0 < e.length && 0 < t.length ? (this.n = parseBigInt(e, 16), 
            this.e = parseInt(t, 16)) : console.error("Invalid RSA public key");
        }, RSAKey.prototype.encrypt = function(e) {
            var t = function pkcs1pad2(e, t) {
                if (t < e.length + 11) return console.error("Message too long for RSA"), null;
                for (var r = [], n = e.length - 1; 0 <= n && 0 < t; ) {
                    var o = e.charCodeAt(n--);
                    o < 128 ? r[--t] = o : 127 < o && o < 2048 ? (r[--t] = 63 & o | 128, r[--t] = o >> 6 | 192) : (r[--t] = 63 & o | 128, 
                    r[--t] = o >> 6 & 63 | 128, r[--t] = o >> 12 | 224);
                }
                r[--t] = 0;
                for (var i = new w(), a = []; 2 < t; ) {
                    for (a[0] = 0; 0 == a[0]; ) i.nextBytes(a);
                    r[--t] = a[0];
                }
                return r[--t] = 2, r[--t] = 0, new b(r);
            }(e, this.n.bitLength() + 7 >> 3);
            if (null == t) return null;
            var r = this.doPublic(t);
            if (null == r) return null;
            var n = r.toString(16);
            return 0 == (1 & n.length) ? n : "0" + n;
        }, RSAKey.prototype.setPrivate = function(e, t, r) {
            null != e && null != t && 0 < e.length && 0 < t.length ? (this.n = parseBigInt(e, 16), 
            this.e = parseInt(t, 16), this.d = parseBigInt(r, 16)) : console.error("Invalid RSA private key");
        }, RSAKey.prototype.setPrivateEx = function(e, t, r, n, o, i, a, u) {
            null != e && null != t && 0 < e.length && 0 < t.length ? (this.n = parseBigInt(e, 16), 
            this.e = parseInt(t, 16), this.d = parseBigInt(r, 16), this.p = parseBigInt(n, 16), 
            this.q = parseBigInt(o, 16), this.dmp1 = parseBigInt(i, 16), this.dmq1 = parseBigInt(a, 16), 
            this.coeff = parseBigInt(u, 16)) : console.error("Invalid RSA private key");
        }, RSAKey.prototype.generate = function(e, t) {
            var r = new w(), n = e >> 1;
            this.e = parseInt(t, 16);
            for (var o = new b(t, 16); ;) {
                for (;this.p = new b(e - n, 1, r), 0 != this.p.subtract(b.ONE).gcd(o).compareTo(b.ONE) || !this.p.isProbablePrime(10); ) ;
                for (;this.q = new b(n, 1, r), 0 != this.q.subtract(b.ONE).gcd(o).compareTo(b.ONE) || !this.q.isProbablePrime(10); ) ;
                if (this.p.compareTo(this.q) <= 0) {
                    var i = this.p;
                    this.p = this.q, this.q = i;
                }
                var a = this.p.subtract(b.ONE), u = this.q.subtract(b.ONE), s = a.multiply(u);
                if (0 == s.gcd(o).compareTo(b.ONE)) {
                    this.n = this.p.multiply(this.q), this.d = o.modInverse(s), this.dmp1 = this.d.mod(a), 
                    this.dmq1 = this.d.mod(u), this.coeff = this.q.modInverse(this.p);
                    break;
                }
            }
        }, RSAKey.prototype.decrypt = function(e) {
            var t = parseBigInt(e, 16), r = this.doPrivate(t);
            return null == r ? null : function pkcs1unpad2(e, t) {
                for (var r = e.toByteArray(), n = 0; n < r.length && 0 == r[n]; ) ++n;
                if (r.length - n != t - 1 || 2 != r[n]) return null;
                for (++n; 0 != r[n]; ) if (++n >= r.length) return null;
                for (var o = ""; ++n < r.length; ) {
                    var i = 255 & r[n];
                    i < 128 ? o += String.fromCharCode(i) : 191 < i && i < 224 ? (o += String.fromCharCode((31 & i) << 6 | 63 & r[n + 1]), 
                    ++n) : (o += String.fromCharCode((15 & i) << 12 | (63 & r[n + 1]) << 6 | 63 & r[n + 2]), 
                    n += 2);
                }
                return o;
            }(r, this.n.bitLength() + 7 >> 3);
        }, RSAKey.prototype.generateAsync = function(e, t, o) {
            var r = new w(), n = e >> 1;
            this.e = parseInt(t, 16);
            var i = new b(t, 16), a = this;
            setTimeout(function loop1() {
                function Ioa() {
                    if (a.p.compareTo(a.q) <= 0) {
                        var e = a.p;
                        a.p = a.q, a.q = e;
                    }
                    var t = a.p.subtract(b.ONE), r = a.q.subtract(b.ONE), n = t.multiply(r);
                    0 == n.gcd(i).compareTo(b.ONE) ? (a.n = a.p.multiply(a.q), a.d = i.modInverse(n), 
                    a.dmp1 = a.d.mod(t), a.dmq1 = a.d.mod(r), a.coeff = a.q.modInverse(a.p), setTimeout(function() {
                        o();
                    }, 0)) : setTimeout(loop1, 0);
                }
                function Joa() {
                    a.q = nbi(), a.q.fromNumberAsync(n, 1, r, function() {
                        a.q.subtract(b.ONE).gcda(i, function(e) {
                            0 == e.compareTo(b.ONE) && a.q.isProbablePrime(10) ? setTimeout(Ioa, 0) : setTimeout(Joa, 0);
                        });
                    });
                }
                setTimeout(function loop2() {
                    a.p = nbi(), a.p.fromNumberAsync(e - n, 1, r, function() {
                        a.p.subtract(b.ONE).gcda(i, function(e) {
                            0 == e.compareTo(b.ONE) && a.p.isProbablePrime(10) ? setTimeout(Joa, 0) : setTimeout(loop2, 0);
                        });
                    });
                }, 0);
            }, 0);
        }, RSAKey);
        function RSAKey() {
            this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, 
            this.dmq1 = null, this.coeff = null;
        }
        var j = {};
        j.lang = {
            extend: function extend(e, t, r) {
                if (!t || !e) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                function $oa() {}
                if ($oa.prototype = t.prototype, e.prototype = new $oa(), (e.prototype.constructor = e).superclass = t.prototype, 
                t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t), 
                r) {
                    var o;
                    for (o in r) e.prototype[o] = r[o];
                    var n = function _IEEnumFix() {}, i = [ "toString", "valueOf" ];
                    try {
                        /MSIE/.test(navigator.userAgent) && (n = function _IEEnumFix(e, t) {
                            for (o = 0; o < i.length; o += 1) {
                                var r = i[o], n = t[r];
                                "function" == typeof n && n != Object.prototype[r] && (e[r] = n);
                            }
                        });
                    } catch (e) {}
                    n(e.prototype, r);
                }
            }
        };
        var L = {};
        void 0 !== L.asn1 && L.asn1 || (L.asn1 = {}), L.asn1.ASN1Util = new function() {
            this.integerToByteHex = function(e) {
                var t = e.toString(16);
                return t.length % 2 == 1 && (t = "0" + t), t;
            }, this.bigIntToMinTwosComplementsHex = function(e) {
                var t = e.toString(16);
                if ("-" != t.substr(0, 1)) t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t); else {
                    var r = t.substr(1).length;
                    r % 2 == 1 ? r += 1 : t.match(/^[0-7]/) || (r += 2);
                    for (var n = "", o = 0; o < r; o++) n += "f";
                    t = new b(n, 16).xor(e).add(b.ONE).toString(16).replace(/^-/, "");
                }
                return t;
            }, this.getPEMStringFromHex = function(e, t) {
                return hextopem(e, t);
            }, this.newObject = function(e) {
                var t = L.asn1, r = t.DERBoolean, n = t.DERInteger, o = t.DERBitString, i = t.DEROctetString, a = t.DERNull, u = t.DERObjectIdentifier, s = t.DEREnumerated, c = t.DERUTF8String, l = t.DERNumericString, f = t.DERPrintableString, p = t.DERTeletexString, d = t.DERIA5String, h = t.DERUTCTime, y = t.DERGeneralizedTime, g = t.DERSequence, v = t.DERSet, m = t.DERTaggedObject, b = t.ASN1Util.newObject, _ = Object.keys(e);
                if (1 != _.length) throw "key of param shall be only one.";
                var P = _[0];
                if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + P + ":")) throw "undefined key: " + P;
                if ("bool" == P) return new r(e[P]);
                if ("int" == P) return new n(e[P]);
                if ("bitstr" == P) return new o(e[P]);
                if ("octstr" == P) return new i(e[P]);
                if ("null" == P) return new a(e[P]);
                if ("oid" == P) return new u(e[P]);
                if ("enum" == P) return new s(e[P]);
                if ("utf8str" == P) return new c(e[P]);
                if ("numstr" == P) return new l(e[P]);
                if ("prnstr" == P) return new f(e[P]);
                if ("telstr" == P) return new p(e[P]);
                if ("ia5str" == P) return new d(e[P]);
                if ("utctime" == P) return new h(e[P]);
                if ("gentime" == P) return new y(e[P]);
                if ("seq" == P) {
                    for (var S = e[P], A = [], C = 0; C < S.length; C++) {
                        var T = b(S[C]);
                        A.push(T);
                    }
                    return new g({
                        array: A
                    });
                }
                if ("set" == P) {
                    for (S = e[P], A = [], C = 0; C < S.length; C++) {
                        T = b(S[C]);
                        A.push(T);
                    }
                    return new v({
                        array: A
                    });
                }
                if ("tag" == P) {
                    var O = e[P];
                    if ("[object Array]" === Object.prototype.toString.call(O) && 3 == O.length) {
                        var D = b(O[2]);
                        return new m({
                            tag: O[0],
                            explicit: O[1],
                            obj: D
                        });
                    }
                    var R = {};
                    if (void 0 !== O.explicit && (R.explicit = O.explicit), void 0 !== O.tag && (R.tag = O.tag), 
                    void 0 === O.obj) throw "obj shall be specified for 'tag'.";
                    return R.obj = b(O.obj), new m(R);
                }
            }, this.jsonToASN1HEX = function(e) {
                return this.newObject(e).getEncodedHex();
            };
        }(), L.asn1.ASN1Util.oidHexToInt = function(e) {
            for (var t = "", r = parseInt(e.substr(0, 2), 16), n = (t = Math.floor(r / 40) + "." + r % 40, 
            ""), o = 2; o < e.length; o += 2) {
                var i = ("00000000" + parseInt(e.substr(o, 2), 16).toString(2)).slice(-8);
                if (n += i.substr(1, 7), "0" == i.substr(0, 1)) t = t + "." + new b(n, 2).toString(10), 
                n = "";
            }
            return t;
        }, L.asn1.ASN1Util.oidIntToHex = function(e) {
            function iqa(e) {
                var t = e.toString(16);
                return 1 == t.length && (t = "0" + t), t;
            }
            function jqa(e) {
                var t = "", r = new b(e, 10).toString(2), n = 7 - r.length % 7;
                7 == n && (n = 0);
                for (var o = "", i = 0; i < n; i++) o += "0";
                for (r = o + r, i = 0; i < r.length - 1; i += 7) {
                    var a = r.substr(i, 7);
                    i != r.length - 7 && (a = "1" + a), t += iqa(parseInt(a, 2));
                }
                return t;
            }
            if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
            var t = "", r = e.split("."), n = 40 * parseInt(r[0]) + parseInt(r[1]);
            t += iqa(n), r.splice(0, 2);
            for (var o = 0; o < r.length; o++) t += jqa(r[o]);
            return t;
        }, L.asn1.ASN1Object = function() {
            this.getLengthHexFromValue = function() {
                if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                var e = this.hV.length / 2, t = e.toString(16);
                if (t.length % 2 == 1 && (t = "0" + t), e < 128) return t;
                var r = t.length / 2;
                if (15 < r) throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                return (128 + r).toString(16) + t;
            }, this.getEncodedHex = function() {
                return null != this.hTLV && !this.isModified || (this.hV = this.getFreshValueHex(), 
                this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, 
                this.isModified = !1), this.hTLV;
            }, this.getValueHex = function() {
                return this.getEncodedHex(), this.hV;
            }, this.getFreshValueHex = function() {
                return "";
            };
        }, L.asn1.DERAbstractString = function(e) {
            L.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                return this.s;
            }, this.setString = function(e) {
                this.hTLV = null, this.isModified = !0, this.s = e, this.hV = stohex(this.s);
            }, this.setStringHex = function(e) {
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
            }, this.getFreshValueHex = function() {
                return this.hV;
            }, void 0 !== e && ("string" == typeof e ? this.setString(e) : void 0 !== e.str ? this.setString(e.str) : void 0 !== e.hex && this.setStringHex(e.hex));
        }, j.lang.extend(L.asn1.DERAbstractString, L.asn1.ASN1Object), L.asn1.DERAbstractTime = function(e) {
            L.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(e) {
                return utc = e.getTime() + 6e4 * e.getTimezoneOffset(), new Date(utc);
            }, this.formatDate = function(e, t, r) {
                var n = this.zeroPadding, o = this.localDateToUTC(e), i = String(o.getFullYear());
                "utc" == t && (i = i.substr(2, 2));
                var a = i + n(String(o.getMonth() + 1), 2) + n(String(o.getDate()), 2) + n(String(o.getHours()), 2) + n(String(o.getMinutes()), 2) + n(String(o.getSeconds()), 2);
                if (!0 === r) {
                    var u = o.getMilliseconds();
                    if (0 != u) {
                        var s = n(String(u), 3);
                        a = a + "." + (s = s.replace(/[0]+$/, ""));
                    }
                }
                return a + "Z";
            }, this.zeroPadding = function(e, t) {
                return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e;
            }, this.getString = function() {
                return this.s;
            }, this.setString = function(e) {
                this.hTLV = null, this.isModified = !0, this.s = e, this.hV = stohex(e);
            }, this.setByDateValue = function(e, t, r, n, o, i) {
                var a = new Date(Date.UTC(e, t - 1, r, n, o, i, 0));
                this.setByDate(a);
            }, this.getFreshValueHex = function() {
                return this.hV;
            };
        }, j.lang.extend(L.asn1.DERAbstractTime, L.asn1.ASN1Object), L.asn1.DERAbstractStructured = function(e) {
            L.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(e) {
                this.hTLV = null, this.isModified = !0, this.asn1Array = e;
            }, this.appendASN1Object = function(e) {
                this.hTLV = null, this.isModified = !0, this.asn1Array.push(e);
            }, this.asn1Array = new Array(), void 0 !== e && void 0 !== e.array && (this.asn1Array = e.array);
        }, j.lang.extend(L.asn1.DERAbstractStructured, L.asn1.ASN1Object), L.asn1.DERBoolean = function() {
            L.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
        }, j.lang.extend(L.asn1.DERBoolean, L.asn1.ASN1Object), L.asn1.DERInteger = function(e) {
            L.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(e) {
                this.hTLV = null, this.isModified = !0, this.hV = L.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e);
            }, this.setByInteger = function(e) {
                var t = new b(String(e), 10);
                this.setByBigInteger(t);
            }, this.setValueHex = function(e) {
                this.hV = e;
            }, this.getFreshValueHex = function() {
                return this.hV;
            }, void 0 !== e && (void 0 !== e.bigint ? this.setByBigInteger(e.bigint) : void 0 !== e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : void 0 !== e.hex && this.setValueHex(e.hex));
        }, j.lang.extend(L.asn1.DERInteger, L.asn1.ASN1Object), L.asn1.DERBitString = function(e) {
            if (void 0 !== e && void 0 !== e.obj) {
                var t = L.asn1.ASN1Util.newObject(e.obj);
                e.hex = "00" + t.getEncodedHex();
            }
            L.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(e) {
                this.hTLV = null, this.isModified = !0, this.hV = e;
            }, this.setUnusedBitsAndHexValue = function(e, t) {
                if (e < 0 || 7 < e) throw "unused bits shall be from 0 to 7: u = " + e;
                var r = "0" + e;
                this.hTLV = null, this.isModified = !0, this.hV = r + t;
            }, this.setByBinaryString = function(e) {
                var t = 8 - (e = e.replace(/0+$/, "")).length % 8;
                8 == t && (t = 0);
                for (var r = 0; r <= t; r++) e += "0";
                var n = "";
                for (r = 0; r < e.length - 1; r += 8) {
                    var o = e.substr(r, 8), i = parseInt(o, 2).toString(16);
                    1 == i.length && (i = "0" + i), n += i;
                }
                this.hTLV = null, this.isModified = !0, this.hV = "0" + t + n;
            }, this.setByBooleanArray = function(e) {
                for (var t = "", r = 0; r < e.length; r++) 1 == e[r] ? t += "1" : t += "0";
                this.setByBinaryString(t);
            }, this.newFalseArray = function(e) {
                for (var t = new Array(e), r = 0; r < e; r++) t[r] = !1;
                return t;
            }, this.getFreshValueHex = function() {
                return this.hV;
            }, void 0 !== e && ("string" == typeof e && e.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(e) : void 0 !== e.hex ? this.setHexValueIncludingUnusedBits(e.hex) : void 0 !== e.bin ? this.setByBinaryString(e.bin) : void 0 !== e.array && this.setByBooleanArray(e.array));
        }, j.lang.extend(L.asn1.DERBitString, L.asn1.ASN1Object), L.asn1.DEROctetString = function(e) {
            if (void 0 !== e && void 0 !== e.obj) {
                var t = L.asn1.ASN1Util.newObject(e.obj);
                e.hex = t.getEncodedHex();
            }
            L.asn1.DEROctetString.superclass.constructor.call(this, e), this.hT = "04";
        }, j.lang.extend(L.asn1.DEROctetString, L.asn1.DERAbstractString), L.asn1.DERNull = function() {
            L.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
        }, j.lang.extend(L.asn1.DERNull, L.asn1.ASN1Object), L.asn1.DERObjectIdentifier = function(e) {
            function Ira(e) {
                var t = e.toString(16);
                return 1 == t.length && (t = "0" + t), t;
            }
            function Jra(e) {
                var t = "", r = new b(e, 10).toString(2), n = 7 - r.length % 7;
                7 == n && (n = 0);
                for (var o = "", i = 0; i < n; i++) o += "0";
                for (r = o + r, i = 0; i < r.length - 1; i += 7) {
                    var a = r.substr(i, 7);
                    i != r.length - 7 && (a = "1" + a), t += Ira(parseInt(a, 2));
                }
                return t;
            }
            L.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(e) {
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
            }, this.setValueOidString = function(e) {
                if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
                var t = "", r = e.split("."), n = 40 * parseInt(r[0]) + parseInt(r[1]);
                t += Ira(n), r.splice(0, 2);
                for (var o = 0; o < r.length; o++) t += Jra(r[o]);
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t;
            }, this.setValueName = function(e) {
                var t = L.asn1.x509.OID.name2oid(e);
                if ("" === t) throw "DERObjectIdentifier oidName undefined: " + e;
                this.setValueOidString(t);
            }, this.getFreshValueHex = function() {
                return this.hV;
            }, void 0 !== e && ("string" == typeof e ? e.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(e) : this.setValueName(e) : void 0 !== e.oid ? this.setValueOidString(e.oid) : void 0 !== e.hex ? this.setValueHex(e.hex) : void 0 !== e.name && this.setValueName(e.name));
        }, j.lang.extend(L.asn1.DERObjectIdentifier, L.asn1.ASN1Object), L.asn1.DEREnumerated = function(e) {
            L.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(e) {
                this.hTLV = null, this.isModified = !0, this.hV = L.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e);
            }, this.setByInteger = function(e) {
                var t = new b(String(e), 10);
                this.setByBigInteger(t);
            }, this.setValueHex = function(e) {
                this.hV = e;
            }, this.getFreshValueHex = function() {
                return this.hV;
            }, void 0 !== e && (void 0 !== e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : void 0 !== e.hex && this.setValueHex(e.hex));
        }, j.lang.extend(L.asn1.DEREnumerated, L.asn1.ASN1Object), L.asn1.DERUTF8String = function(e) {
            L.asn1.DERUTF8String.superclass.constructor.call(this, e), this.hT = "0c";
        }, j.lang.extend(L.asn1.DERUTF8String, L.asn1.DERAbstractString), L.asn1.DERNumericString = function(e) {
            L.asn1.DERNumericString.superclass.constructor.call(this, e), this.hT = "12";
        }, j.lang.extend(L.asn1.DERNumericString, L.asn1.DERAbstractString), L.asn1.DERPrintableString = function(e) {
            L.asn1.DERPrintableString.superclass.constructor.call(this, e), this.hT = "13";
        }, j.lang.extend(L.asn1.DERPrintableString, L.asn1.DERAbstractString), L.asn1.DERTeletexString = function(e) {
            L.asn1.DERTeletexString.superclass.constructor.call(this, e), this.hT = "14";
        }, j.lang.extend(L.asn1.DERTeletexString, L.asn1.DERAbstractString), L.asn1.DERIA5String = function(e) {
            L.asn1.DERIA5String.superclass.constructor.call(this, e), this.hT = "16";
        }, j.lang.extend(L.asn1.DERIA5String, L.asn1.DERAbstractString), L.asn1.DERUTCTime = function(e) {
            L.asn1.DERUTCTime.superclass.constructor.call(this, e), this.hT = "17", this.setByDate = function(e) {
                this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "utc"), 
                this.hV = stohex(this.s);
            }, this.getFreshValueHex = function() {
                return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), 
                this.hV = stohex(this.s)), this.hV;
            }, void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{12}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date));
        }, j.lang.extend(L.asn1.DERUTCTime, L.asn1.DERAbstractTime), L.asn1.DERGeneralizedTime = function(e) {
            L.asn1.DERGeneralizedTime.superclass.constructor.call(this, e), this.hT = "18", 
            this.withMillis = !1, this.setByDate = function(e) {
                this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "gen", this.withMillis), 
                this.hV = stohex(this.s);
            }, this.getFreshValueHex = function() {
                return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), 
                this.hV = stohex(this.s)), this.hV;
            }, void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{14}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date), 
            !0 === e.millis && (this.withMillis = !0));
        }, j.lang.extend(L.asn1.DERGeneralizedTime, L.asn1.DERAbstractTime), L.asn1.DERSequence = function(e) {
            L.asn1.DERSequence.superclass.constructor.call(this, e), this.hT = "30", this.getFreshValueHex = function() {
                for (var e = "", t = 0; t < this.asn1Array.length; t++) {
                    e += this.asn1Array[t].getEncodedHex();
                }
                return this.hV = e, this.hV;
            };
        }, j.lang.extend(L.asn1.DERSequence, L.asn1.DERAbstractStructured), L.asn1.DERSet = function(e) {
            L.asn1.DERSet.superclass.constructor.call(this, e), this.hT = "31", this.sortFlag = !0, 
            this.getFreshValueHex = function() {
                for (var e = new Array(), t = 0; t < this.asn1Array.length; t++) {
                    var r = this.asn1Array[t];
                    e.push(r.getEncodedHex());
                }
                return 1 == this.sortFlag && e.sort(), this.hV = e.join(""), this.hV;
            }, void 0 !== e && void 0 !== e.sortflag && 0 == e.sortflag && (this.sortFlag = !1);
        }, j.lang.extend(L.asn1.DERSet, L.asn1.DERAbstractStructured), L.asn1.DERTaggedObject = function(e) {
            L.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", 
            this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(e, t, r) {
                this.hT = t, this.isExplicit = e, this.asn1Object = r, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), 
                this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = r.getEncodedHex(), 
                this.hTLV = this.hTLV.replace(/^../, t), this.isModified = !1);
            }, this.getFreshValueHex = function() {
                return this.hV;
            }, void 0 !== e && (void 0 !== e.tag && (this.hT = e.tag), void 0 !== e.explicit && (this.isExplicit = e.explicit), 
            void 0 !== e.obj && (this.asn1Object = e.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
        }, j.lang.extend(L.asn1.DERTaggedObject, L.asn1.ASN1Object);
        var x, k = (function __extends(e, t) {
            function __() {
                this.constructor = e;
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, 
            new __());
        }(JSEncryptRSAKey, x = N), JSEncryptRSAKey.prototype.parseKey = function(e) {
            try {
                var t = 0, r = 0, n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(e) ? p(e) : d.unarmor(e), o = y.decode(n);
                if (3 === o.sub.length && (o = o.sub[2].sub[0]), 9 === o.sub.length) {
                    t = o.sub[1].getHexStringValue(), this.n = parseBigInt(t, 16), r = o.sub[2].getHexStringValue(), 
                    this.e = parseInt(r, 16);
                    var i = o.sub[3].getHexStringValue();
                    this.d = parseBigInt(i, 16);
                    var a = o.sub[4].getHexStringValue();
                    this.p = parseBigInt(a, 16);
                    var u = o.sub[5].getHexStringValue();
                    this.q = parseBigInt(u, 16);
                    var s = o.sub[6].getHexStringValue();
                    this.dmp1 = parseBigInt(s, 16);
                    var c = o.sub[7].getHexStringValue();
                    this.dmq1 = parseBigInt(c, 16);
                    var l = o.sub[8].getHexStringValue();
                    this.coeff = parseBigInt(l, 16);
                } else {
                    if (2 !== o.sub.length) return !1;
                    var f = o.sub[1].sub[0];
                    t = f.sub[0].getHexStringValue(), this.n = parseBigInt(t, 16), r = f.sub[1].getHexStringValue(), 
                    this.e = parseInt(r, 16);
                }
                return !0;
            } catch (e) {
                return !1;
            }
        }, JSEncryptRSAKey.prototype.getPrivateBaseKey = function() {
            var e = {
                array: [ new L.asn1.DERInteger({
                    int: 0
                }), new L.asn1.DERInteger({
                    bigint: this.n
                }), new L.asn1.DERInteger({
                    int: this.e
                }), new L.asn1.DERInteger({
                    bigint: this.d
                }), new L.asn1.DERInteger({
                    bigint: this.p
                }), new L.asn1.DERInteger({
                    bigint: this.q
                }), new L.asn1.DERInteger({
                    bigint: this.dmp1
                }), new L.asn1.DERInteger({
                    bigint: this.dmq1
                }), new L.asn1.DERInteger({
                    bigint: this.coeff
                }) ]
            };
            return new L.asn1.DERSequence(e).getEncodedHex();
        }, JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function() {
            return hex2b64(this.getPrivateBaseKey());
        }, JSEncryptRSAKey.prototype.getPublicBaseKey = function() {
            var e = new L.asn1.DERSequence({
                array: [ new L.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.1.1"
                }), new L.asn1.DERNull() ]
            }), t = new L.asn1.DERSequence({
                array: [ new L.asn1.DERInteger({
                    bigint: this.n
                }), new L.asn1.DERInteger({
                    int: this.e
                }) ]
            }), r = new L.asn1.DERBitString({
                hex: "00" + t.getEncodedHex()
            });
            return new L.asn1.DERSequence({
                array: [ e, r ]
            }).getEncodedHex();
        }, JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function() {
            return hex2b64(this.getPublicBaseKey());
        }, JSEncryptRSAKey.wordwrap = function(e, t) {
            if (!e) return e;
            var r = "(.{1," + (t = t || 64) + "})( +|$\n?)|(.{1," + t + "})";
            return e.match(RegExp(r, "g")).join("\n");
        }, JSEncryptRSAKey.prototype.getPrivateKey = function() {
            var e = "-----BEGIN RSA PRIVATE KEY-----\n";
            return e += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + "\n", e += "-----END RSA PRIVATE KEY-----";
        }, JSEncryptRSAKey.prototype.getPublicKey = function() {
            var e = "-----BEGIN PUBLIC KEY-----\n";
            return e += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + "\n", e += "-----END PUBLIC KEY-----";
        }, JSEncryptRSAKey.hasPublicKeyProperty = function(e) {
            return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e");
        }, JSEncryptRSAKey.hasPrivateKeyProperty = function(e) {
            return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e") && e.hasOwnProperty("d") && e.hasOwnProperty("p") && e.hasOwnProperty("q") && e.hasOwnProperty("dmp1") && e.hasOwnProperty("dmq1") && e.hasOwnProperty("coeff");
        }, JSEncryptRSAKey.prototype.parsePropertiesFrom = function(e) {
            this.n = e.n, this.e = e.e, e.hasOwnProperty("d") && (this.d = e.d, this.p = e.p, 
            this.q = e.q, this.dmp1 = e.dmp1, this.dmq1 = e.dmq1, this.coeff = e.coeff);
        }, JSEncryptRSAKey);
        function JSEncryptRSAKey(e) {
            var t = x.call(this) || this;
            return e && ("string" == typeof e ? t.parseKey(e) : (JSEncryptRSAKey.hasPrivateKeyProperty(e) || JSEncryptRSAKey.hasPublicKeyProperty(e)) && t.parsePropertiesFrom(e)), 
            t;
        }
        var B = (JSEncrypt.prototype.setKey = function(e) {
            this.log && this.key && console.warn("A key was already set, overriding existing."), 
            this.key = new k(e);
        }, JSEncrypt.prototype.setPrivateKey = function(e) {
            this.setKey(e);
        }, JSEncrypt.prototype.setPublicKey = function(e) {
            this.setKey(e);
        }, JSEncrypt.prototype.decrypt = function(e) {
            try {
                return this.getKey().decrypt(function b64tohex(e) {
                    var t, r = "", n = 0, o = 0;
                    for (t = 0; t < e.length && "=" != e.charAt(t); ++t) {
                        var i = a.indexOf(e.charAt(t));
                        i < 0 || (n = 0 == n ? (r += int2char(i >> 2), o = 3 & i, 1) : 1 == n ? (r += int2char(o << 2 | i >> 4), 
                        o = 15 & i, 2) : 2 == n ? (r += int2char(o), r += int2char(i >> 2), o = 3 & i, 3) : (r += int2char(o << 2 | i >> 4), 
                        r += int2char(15 & i), 0));
                    }
                    return 1 == n && (r += int2char(o << 2)), r;
                }(e));
            } catch (e) {
                return !1;
            }
        }, JSEncrypt.prototype.encrypt = function(e) {
            try {
                return hex2b64(this.getKey().encrypt(e));
            } catch (e) {
                return !1;
            }
        }, JSEncrypt.prototype.getKey = function(e) {
            if (!this.key) {
                if (this.key = new k(), e && "[object Function]" === {}.toString.call(e)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, e);
                this.key.generate(this.default_key_size, this.default_public_exponent);
            }
            return this.key;
        }, JSEncrypt.prototype.getPrivateKey = function() {
            return this.getKey().getPrivateKey();
        }, JSEncrypt.prototype.getPrivateKeyB64 = function() {
            return this.getKey().getPrivateBaseKeyB64();
        }, JSEncrypt.prototype.getPublicKey = function() {
            return this.getKey().getPublicKey();
        }, JSEncrypt.prototype.getPublicKeyB64 = function() {
            return this.getKey().getPublicBaseKeyB64();
        }, JSEncrypt.version = "3.0.0-beta.1", JSEncrypt);
        function JSEncrypt(e) {
            e = e || {}, this.default_key_size = parseInt(e.default_key_size, 10) || 1024, this.default_public_exponent = e.default_public_exponent || "010001", 
            this.log = e.log || !1, this.key = null;
        }
        e.JSEncrypt = B, e.default = B, Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, "object" === u(t) && void 0 !== e ? a(t) : (o = [ t ], void 0 === (i = "function" == typeof (n = a) ? n.apply(t, o) : n) || (e.exports = i));
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, u = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    };
    t.default = function WXPayment(e) {
        var n = e.payParam, o = e.userId, i = e.serveData;
        return new Promise(function(t, r) {
            s.default.requestPayment(u({}, n, {
                success: function success(e) {
                    t(u({}, e, {
                        payParam: n,
                        userId: o,
                        type: "success"
                    }));
                },
                fail: function fail(e) {
                    e && e.errMsg && -1 !== e.errMsg.indexOf("fail cancel") ? ((0, l.default)("userid: " + o + " 取消微信支付"), 
                    (0, c.Tips)("已取消支付"), f.default.send({
                        code: "B05-1",
                        result: "cancel",
                        resultInfo: "用户取消支付"
                    }), r({
                        orderId: i.orderId,
                        type: "cancel",
                        msg: "用户取消支付"
                    })) : (e && e.errMsg ? ("object" === (void 0 === e ? "undefined" : a(e)) && (e.userid = o), 
                    (0, l.default)(e, "error"), f.default.record({
                        code: "B05-1",
                        result: "fail"
                    })) : ((0, c.Tips)("亲，请重新刷新页面哦~"), (0, l.default)(o + " catch错误: " + e, "error")), 
                    r({
                        orderId: i.orderId,
                        type: "failed",
                        msg: e
                    }));
                }
            }));
        });
    };
    var s = _interopRequireDefault(r(6)), c = r(1), l = _interopRequireDefault(r(138)), f = _interopRequireDefault(r(139));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
}, function(e, t, r) {
    "use strict";
    function defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = (function(e, t, r) {
        return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
    }(RecordUserBehaviors, [ {
        key: "config",
        value: function config() {}
    }, {
        key: "record",
        value: function record() {
            return [];
        }
    }, {
        key: "send",
        value: function send() {
            return new Promise(function(e) {
                e([]);
            });
        }
    }, {
        key: "sendSync",
        value: function sendSync() {}
    } ]), RecordUserBehaviors);
    function RecordUserBehaviors() {
        !function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, RecordUserBehaviors);
    }
    t.default = n;
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function arouseSFPay(e, t) {};
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function CMPay(a) {
        return new Promise(function(e, t) {
            var r = (a || {}).payData;
            try {
                r = JSON.parse(r);
                var n = r.url, o = void 0 === n ? "" : n, i = r.sessionId;
                app.jumpUrl(o, {
                    sessionId: i
                }), e();
            } catch (e) {
                t("解析错误");
            }
        });
    };
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function fetchEcbEcbDetail(e, n) {
        var o = (0, a.default)("ecb/ecbDetail", "customer");
        return new Promise(function(t, r) {
            i.default.get(o, null, n).then(function(e) {
                t(e);
            }).catch(function(e) {
                r(e);
            });
        });
    };
    var i = _interopRequireDefault(r(2)), a = _interopRequireDefault(r(29));
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAilBMVEUAAAA7y3JP6Yc8y3JI1nk7y3I8y3NE0Hc8zHM+zHU7y3I8ynI8y3JJ24k8y3I7y3I8y3M7y3I7y3M+zHQ7ynM7y3M9y3Q9zXM+0no7y3M8y3M7y3I7y3M8y3M8y3I8y3M8zHQ8y3Q+zXQ/znQ7y3M8zHM8zHM+y3U8zXQ+z3Y9y3I9ynQ7ynQ7ynKrtGVMAAAALXRSTlMA+wTwDMGiGWct5reaCPj04tCPO+uUWkMS1ca6sayJdXBeKR3bfU1KMyNVgnl8T2kqAAABkklEQVRIx+2V2XqCMBBGh4QAZVGURcQVcG/n/V+vH1I0wSx8vWw9dxAOSSb/ALz5w9jn7aY8UIvGLNx/jLWKHbOQx88uYKaZT/GVMjFo0dxCOY6r8z6WqGS6U3veBHU4ROWhgXWk8IwwW+KdLaM3y4nkzGOTtlqAjExvWc49QNFxeCoXrUa33fN5jNlADDVavLe7l7N2anHKiBor4oZd9cQc3LDH2wha8FMRsqP9i+QrnRTgTR8XTt9Sp8OzTMJZBtjz1SaWq0hLvUIOoVGe4fYJQBR2FekoBh1z40WuB6t7myQEOoiXoog3FKWbX8xwSAUcPjfAJev6LDE/zsH4E3jEdyvtzysvzvmRGu5Uvjy1QlOe+KGwvZOUqiYBHsJHblKD66CKCkC51tShSm9qi6I7wXFkMGA/zvNtGBKMEk/wgpuiGQckJNTorYn8B+AbvICAnGapX2cEKgrNnDQHDSv19hqdR6j6c6wlwZY4SAWLHRswcGyD6hGAaz7fsNmhXIefZxvMMLSyAn4BC2p486/4Bu/qyU469TpiAAAAAElFTkSuQmCC";
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAdVBMVEUAAAD5vTj4vjjmszP5vjj2uTX6vjn4vDf5vTj6vTn6vjj6vTj5vjj6vDf6vjj5vTj4vDb3vDb4uTj2ujX5vjj5vTj6vjj5vTjvsjDbrSS6jAD5vTj6vjj5vjf5vjj6vTf5vTj4uzTztjD6vjj5uzT5vTj6vjlTnAdCAAAAJnRSTlMAsU4K3x3vap6L+PGtLemFSDskGeTYk34PBwPPvol2YlggFccnpb1lDr0AAADzSURBVEjH7dLZTsMwEIXhSRMo9RLb2Zs0a8u8/yOChISpI5SZAhIX+e8/Hcs27P2kfDK1jfmsT/G9zvFYMxT4UZox2Hks8bOK7g5X/JKkTrrII8akfvWCMbmYQsjnIFkTLvM2P63L4bfTRkUbKaPXbpRISI6hcwJJCRdAhcRU8L1KKizPdzBOqDCJd/htKQMW0Yuvpz9Hv0AQDVYATdbyYZqDTcQlZ8MLtFdErB+BJSIaNkwaOApMNRviBKCnDPiwsODjQBRqOPocFYZVj8LTDv8xbDsqHOC+muiEDuDSUU8aNiuxzeQphnU3e9jIzrD3l70BR+XCZCbjWUsAAAAASUVORK5CYII=";
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAk1BMVEUAAAD7vzz6vzv7vjr7vzr7vzr7vzn6vjr7vzr7vzn7vjn6vjn6vjr7vzr6wDr/wzz7vzr6vjn////825D835/+9eH968H6xVD98NT6yVz+/fr978771oP98NH82Yz6wkX++/P++e397cf83pv70XT+89v7zWf6xEr6wD/6vzz+9+X846z703r6x1T7z2z7zGL96LkpIR4IAAAAEXRSTlMARDj88+7n2cK/raWZg20ikBBtLNYAAAGxSURBVEjH7ZZrk4IgFIZXMy+p1clNu1iWdrPr/v9ft+LCAgHBjDN96vmSzvgEvucgfH14H3YcBp7jeEEY2+aWFbnA4EaW2WA+CPj6YUcDkDIYaWbZBwX9l/Md9kBJb6j2xvCSsXI84JjnST4HFsWYFjfP63SC2O/Y2VrSPNlc6suEcGETkmXL1uGUTig/NVMVSd2BUiyRkD6OhxJdlCf4R+wEpl+Oe/R4AogKXa4K2kNCMtS7oVgWOb5btxEdgfCcT0SrsEUeDTNfNPfTDDDRk+gC5rBpntscgLJD5pZU1BWiEZ66V1VV0P96SOOJ2Xmdb4D4bi4zOvvNHVpiTgyxR5LgRbid0Xv/zTbkxAAXcEWy50XIpqQ+EHCiR1qmTE8gEaGYkfp4nOgApq4bI00vWCzTFrbTHVEkzJq6YRGzVoqeuejx4SjE2bLlChghnFAhZsAhliM2F2O+5cxFW2hyM9FVLKt5kiTnps2bH7T6q4RwVSwri65bOSu6kHl8M9EXP1Zmoi39POoZyD/IWvojxRagoWepNh0Nww7bXOeNtftWrj88dD6udD8g6Y9kH97GL8uHbCbAzlssAAAAAElFTkSuQmCC";
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAyCAMAAAAk/wjEAAAAk1BMVEUAAAATl9wXmN4Sl9wTltwSl9wSl9sSl9wSl9wSltwSl9sWmN0cnuRJtv8Sl9wSl9sVmuATmN0TmN0Sl9wUmN0XnOAcmuMlrPYTl9wSltwTl9wTl9wSl9wSl9wSl90SmN0TmNwUmN0UmNwSl9wSl90Vmd8Tl9wTl9wSl90TmN0YoecSltwSl9wTl9wUl9wUmN0SltteUBwkAAAAMHRSTlMA6RXDa7bB46zw7SoOA/nWI180jTkcEQb00M3JuqR9b1BMRpRxL4B3U0EK3J2HgliDdXzYAAACKklEQVRIx82V2ZKjMAxFRQgxGLOFJRCyANmT7p77/183ttPbAKm4a176vAAlTsmSKESaInGXzHoCW7qJoA+CkwdD+PbdEQ5+gHvVee4Os5/C7paSNpCsfTLAdyGRJ5yoevZkhs7ABe1VHjJG5UpoBSAejYvMD4Yn1FUxIBoxFlm7u4ElgwADlhQCq0Ek35Uy5r8Cb/1QDTAC4PQDBwYFizfAsRebAdaYlHnAl3UykgpLGxFT1hGeMJGOd2cSa+s0N8rE7o5sryWvgVFNuXJu0lFW2JGRlKkO5O+jvJCZNAfgZaQ587IsFwZSAWXp8ptQ3lpGjag+rFY5WBtJUyj4odMOLkZSUEHh3R3X8DOKLXwSCRNJW8sPxynIVKIgsQGETktkKmmucSwHZCD1+YVS4XfJ/vXFdWb2zFnvjtMmywP6wv4mCb+dvq5ntxBjWLWbbpuD+CYxt+Ywgi9dpqVHlF6JMQZSeLPX6SnpDrnQMy7irJm+vawib0TyKjfdn+cTekhxaLepW3mfkt1/ebEIHsmT+tGcwPlM/HS4WJB9bnf7eULnzFh623mXZRc11iLKSdIfLgfqgbSf+sKpeOumg40SqdVUAeF1eDy61BfWdEj6XYRaTalevf+yC+SMNi+b7sqvI0v3pP+Npf+gv6y/neYhAP++ennzwOo9//Hef4Q5g6RKt9MnbNMIEjbRKTl+gHUgTVybO3b+ddaVkRGuzvSdQEyeIgL6D/4CTemdEIxYvY8AAAAASUVORK5CYII=";
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAACHFBMVEUAAADeGyHnMybhIBvdExnfIyX64d7hLS7sfHjnNCbiJyPfFhvjLSTgJSTlLSX75uL1ubXgFRnlMSbhIh/XKCjlSkjqOCjfHh7gGR/nMibiPD7oOSrjTUrcFBriIiPfHR/fFRvfGh/lLyXgGB/gHx/qNibiJSToNiffHyPnNijnOCncHSP////fHSPhJSPjKiTfGyDmMSXgIiTdExrnNCf///3hISLoNifkLiXpaW3jLCbiKCTeFhvtb2XjIxzhIBzlLCDuh3/iLzH0rqnqYWHkKh///fn/+/j0s6vugXcPL13jPDrjMCv++PTsZ2DoSkHxOSnjJx7eGR763Nb62NL2xb/qV03lPznrMSbu9PX+8/L86OXypqDxnZbpaWjqaWPpYFznTkXmRDziNTLhJyfnLiXoJiXgHRz2vbjwmJHscmrsa2MJaWPnWVrnVVHhMjXsNijoKiX+8e397en749/xn5zwk5HthYjuioLtgX/ug3vnHCHhHRn51c/3ysP2wrv0q6Xqc24FXV4AYl3sVlTrW1DnTk3lSETkQUHiNjnpMTLiFRXdDxT4z8j1trHyopnvlYvwjYgcdG/qbmsGZmEJMV/oU0riKSzjHiThICD09veiqbyUtrbzpKZLjorvkokjQWsOS2AFKVl2JT6jIjTE2NaoxcKfvrygoLGGsK7UqKpWk5AiYG40QWgROl8iMVpELlHLMjzMICnaBAyYRvwwAAAALHRSTlMA16/Y2A3+/v3Yr8uvK9f+/eDXOQb+yol8Xvz8+vPHwahzWEsYF/i8tY13YEvVVngAAARaSURBVEjH7dbXV9pQHMBxOxgtbdXavfe8gZiYQDEQhhVkiEApLRtFWQKtq+5R9+h21O69d//BXqI5GgI97UPf+j0efbjn4+WSH/dQ9L9/3ubdp9euahNsI/zJtnP35oLsyI69dXVXsl1arrHxauPVbE2wEweO5GXH19bVyeXyClg5k0KhUMqUMpmsslLK1NS08VgetwOyVU6R6zAMI5sO8OS2tazj71fJOhLrObUtB+5m3cqGUOU6BOk5m7PhDt75+A6B3ZdwtyyTw8o1sPMwjUKhkamz0TRUizTJOBTN0jIOPFMH9xtVLWfT2FUDiWQyGQyGLNJo2GhGUdQRuZnC4Za7OPDkFXnFXicgmIDRbr/YWm2AVYOb0bDXazaPj0+kQLsIRe4f5MANcng62+jFpdwyiypss9XDYt60t1hb72X+IdGHocgaPmROCLOft4eBqre3u1063WFtbetsM6dTqdQ94vEEgvChpuZC340LTH2jNiIx3ekExmgH8Lq7rTqfzzGTqe6a4cOKCk1y0AlietjjQZuNUNWAuBjE2oTjM1qrqAvo0cnqazgfwuenUfc7z8NHYKm1q8OGW8BYGe0GbTURSmttwLUgrisIRwmtWiZTh0CiN0zUBJWklE5rnTocQtQxFCoI7X6QdNfXu+etAxCqprPzQutbRAxEcGqMyAO3lkOoBaAaRgB/rw2oolKM3l4M+klca9ChCNVuIEJUXqgoT9YwqSxSZaIB7kdaurrg0JgDcLrR9LUQiuSDcKztzHgy8xldZOaaohzQUFlA4fAPHzayn4dKi8WiJEmlmSTJRRSJmDGUiUF8uKWRcTD6du2tebfFHYyY6QYz6jP6dZPYAqZDC0H28y6NpUueDhi13T7XvZL+IddTn7i/83bnEFUIss7tqjXqE0b94J24vsMfd50L+W8EbhixQjsq2HupITYQvKW67Q+64tp78c6hn4GYL9OWpgqdUaNm7zOlhVRGIhFUh2DZECSDVPlZh1IoF66bTyhpKXu/kNn7Bb425s2Ev3UYusRwLDCeA1XgQrebplfus9UteYrKiPtA1XourAUAtBiDDXSUJhnHlQ6c0lXpWwDIC2GtJV1jIpqCA4Mu56Bw3CHaLi5pBUx8yEYUu9rFVfv2TGZEoszknn1V4nZXMQHYCkKWGzwtrd4Wj5UlfwqBx+N5cDnbg7+DN3W675+fPft09+4T4nfwYIjgwgDe82rOZLo+O/yRe4SUhAN32gycdeuEo+flnOlLc/PwI86CYWInB5YpnZx1J5yVb3Om583Ns69zFso4ULDuDmddjyM/vpognL17mbNwZ72giNPhKSFYlRge0QSP2DzMfW+EU4eLuAkkI56VdWL7zPTLFy9M14evv+c8oxGJgPcVp3REuAJdvsEP7x4+fPT2zeXV+42UbuYqRkqmOoQEKBgh7JiSQMdPsKt0YSxwrkCBsYXSXezr5NGjh/ZTeN6o/YeOCor+94/7BRwoyAXt8l7eAAAAAElFTkSuQmCC";
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAACSVBMVEUAAAAIaWMQMV/eHSIKaGMJaGPhHSPgGyHeHSHeHSEIaGMKZmMIaGPeHCIIaGPfHCIIaGLeHSMJaWMJZ2PdGiDeHSIRL1/eHSLdHSIJaGMIZ2MJZmPdHCTfHSINZGTiHScAXl7VKio8MVcQXGIJaGNOL1HfHCMZMV0ORF8GaGKmJDQJaWPeHiMHaWIJZl7cIyMRMV4JaGPeHSMIamQOL13///8CZF8HZ2IJMV8ZcWwMLVvlGyDjHiTnHSP7/Pz19/jE19a50tCTubcJbGcAYl0JKljgHCL9/f3P394cOGTw8vPfIyfeFx34+vrq8PHm7+3J29q/xNClr8CNtbJjnZpWlJFSko4qe3YQamUAXVrk5Ore6Ofb5uW/09GavruPmK7zrquIk6p7iqR3hZ9dmZY6hH9HWn40gHwXNGDiHSLnGyDcDRPq6+/n6O3g4OfT4uH64d6xysiqxcOfwb+Zo7d/raqEkKhuo59pn5xrepdhc5FGi4dBh4PrfHswfno+VHo2TnUVbmkMWmIOTmESR2HmTU3kP0GLJz3hMDH/+Pb88Ovi6ur86unW3N/N0NrHy9f219W1vcz4zMf0ureXuLeHs7B6q6h2qKRvfZrwm5m+jpjthYPqbm0qQ2zoZmMNUmIXMV0fMFouLFQ8LlJVK0tkKkeAJz/iNjiYJTisIzLmKy3KICnXGyPmFRv68u+5zsybqLu1oK7fpaZzoJ3vko9ZjY9ZbIxTZolKe4Y5YHkQPV8GOlnmWFjPS1BeK0lvKUW1KjaoJDS+IS1wyLVhAAAAMHRSTlMAs7KyLPnttU8i2sKdhH1uO/Tx6eLTsqWWjmxYOzATDQkG19HOysW4s7GxrV5JHhaaXcZcAAADHUlEQVRIx+2V5VcUURjGTZBSREVF7O6d2bl3mAG2i+0OukG6O6W7O8VAEexu/ctclx12lxmUr56zv3Nmvv3O+7z3nmdmhxcvXraFX5Dvbge+1y6eu7zLQWjolfMBOykC9zB5+3yioxxEd2RHsCgW2G4IQxhMP58o1EHkExZGaVgrG3FHGEgXD0SjTvGhax7rrqfI3k8Xj1Iiet9NxBFPMZjmnT3iTHrn6T1X0k+bvEOn6CselChRVCmxr4ixXCsiEELcJQYwnGlU57ICXe5Ecx5FuMSFZkuDhdgwhcfpYlDOSHe7oihZGfnAbUWbUaXmxmVBauIJuui70luEtoP63NWlCLGYRZIYZn9siZysMWC04TgOcYjspV/j6cNtIDl3FrS1f82MSU0VN2VmxzQ2fsS1haJETp2FsBAN1izC/wxNPKmctU+b6p3veiat0SWl5cvLUlRydZZaLuOU8no0iaUyQzxxlZ70xtoUaMsdHqnvmuZUy1PyUob6dQN6jVlaPJFRzjWDKgOXWwUZrv/YWjJ4MwPmkwen1ZMgDaTm62PLdPwJkGGz8WWVIKMSyKzsm3TxUuSXwe6iGXT41cuhir6mgVhdZsFkf7kgnsBhubonjjABEwy5RfNu+0iUik6FEl35EWMHy54TkzFkK45YEQgh0UyISmU4+wJ9YLgERdE/T05HBIZhLBKraWS9/2Ay1iLpZnO6kWjgmOE2qoFlJ4GCpHweDwgsUr60kFOs5eOIMOyf1SCbYssqUrjFPGltpUogN/C0helwO9Ug5wry9Druc1m8lc/jxb3mqUbrIHM1qKQ/HdUgq2Pzkvr4sgRBs1wbn1Ci0ZQQOHM1nKK9GuuitCKN+1aTYKzljqtMVYBPbFENakVnNcQ1IDUNjHIMVr5UCxLjEjh1kLkalLi6tB41U//inV5gEBCm9DFByTghyIBsxmpInGfza5HlgBSLxZ+hSIRD+0sEcRGOsJmqoaCSPnZrf8umL+P1v13/962/jEKmamyI39xFD49a0YNwhWQjKkaL6vTCmH8b1Ol0LLpGtrh5/sE7vHj5H/kNX6U2bf4K1t4AAAAASUVORK5CYII=";
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAhFBMVEUAAAD7vzn7vzn7vzn6vzr/wz7/yk77vzn6wDr6vzn6vjn/xDz8wTv/wD/7vzr7vzn6vzn7vjn6vjr/wD//0lL7vzr7vzn7vzn6vjr8vzn7vzr7wDr8vzv7wDv8vzn8wDv9wTr/wzz7vzn7wDr8wTv7wDr6vzv/yEn6vzn6vzn8wTz6vjnzd6DzAAAAK3RSTlMA+beObRkH9Gjd0RVaH+vm1rGmIgTvyryak4N4Yz9LRzIrwoVSOTgO05xe+MNTiwAAAaZJREFUSMftltmugjAURVtapIwyiMg8iGP////uRbw3xnOAJiQ+uRJfaBeQYvcu+fIhNqeCaZbpUeqZlsaK00bF0kVgyDeMQOgL2jmkEoWG5xnN1eQMmjvlcUPOYnDcO8pFjpiXSwVy6EVURaQREA9SiQMQLTXRAqKhJhpA3KuJeyAyNZEB0Y5VvNgmgLuKeCcIxbJXEJRqO69tK3z7EnJJ6bRG08swCZLwYRtnHq552bCVeQI9R8p0Mzy4Zv675bP6MZRK6QAxGCbUz09TijRI9r6/T4JUlM9PUA83DIA4LkzX7wjKru/GBcLEceTg6CDAnMMwjIuvcWPeRNXql93GbWqH38zX4EEWRwmHADoVr8Oy0Vz2TBfN8OuSd9UnOiOjcxrN8A5pfn9tSCe1sB0nwY3MHu+b+ZjmZ4+3ZLGNRYc2XnVFaNGXR1mhcMd7a1IyNKw8vvv7h0Vl5QjhVGX0f4l7aFgZ43rnNkGxc3OMx8lAphqPQD1wjYJAxiogThjvy6Ztm7LnLIlBBawonZU1p16sq6p8/eFB/biy/oCkfiT78hl+ABWv0OwbyrMyAAAAAElFTkSuQmCC";
}, function(e, t, r) {
    e.exports = r.p + "static/images/ic-cmb-life.png";
}, function(e, t) {
    e.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wgARCABLAEsDAREAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAUHCAMGBAL/xAAcAQEAAgIDAQAAAAAAAAAAAAAABAUGBwIDCAH/2gAMAwEAAhADEAAAAN/AAAAAAi+UzG1zvirJWZDStbqbTdZqIADynbdZ4sdoeQ7b2oZecXNDwHbNL5+AA8p23WFr30X8H2RacXDpHjF1/UaNAAi+UzD156GfElxi3TDwC+oGtgAI0kgRZKAAH4MUHvS1ykD7C3CzQDkZNJMtor888WSXEAD4TqdDiRhMHYAAAAAH/8QAPhAAAAUCBAMEBAoLAAAAAAAAAQIDBAUGEQAHEhMIFCEgIjFRFTI3dhYXMEFXYZWitNIJECMzOFJWcXTCw//aAAgBAQABPwD5StpglPUZLz6iW6SKj13hk721gmmY9vu4y9ms0s1FZ+qJvNKQpOIYomBF4EkZiyB0PVNuAAYoW03v84Y+NDMv6Ras+23P58fGhmX9IlWfbbn8+OArNmqatmpSj6okVZQWrLnWbtx1WKUDkIchjeJuqhRC/az49htZ+7j/APDqYyNpJglwwVK/Oq7exr6BXW3JJyYGBHei59tsW/VIyRQFY3eExe5jM3JCj6Ry9qGpFKoeOVGyyKMIVEhAQeqKAUdJDjcVrFNcRJYA8LiJRxU1G1RT06SFl4V03kTtyOQaAXWqCZvATFLcSj9Q9Qx+jd9uct7urfiW3az49htZ+7j/APDqYySqirZCSQy6bzBTRs6krFppv9aqTAFwMU6iRQMGg1jG8Og4zXo11lxUMGQk4D4HTJOSbKppaBQuqcunSIiGoBTxVlRzrysKarCVqRGC5+om5X8W3ORAjBujtiXmldQKLqbdvWKIY4JZQs3xa1nMEX3yP2D5cittOspnqAgNu1W0OSoaMl4BRXaJKx67Mylr6AUTMS/3sUBlzmHltm81fS9Az0gSMW1kXjGJ3KZxKNwMQ5CmAL4z6jcxK/n45+3ywrZAGDEWt3UU4UOqO8qpfoTyUtiqqTLW06pUVRZY5qREq7KTnU4yCF03VUKUCicm4BDE1WvbvY4WMtQhMw5WuG1MSVMxq8UlGMY+UOUXS1hIKi5yF/d6hSJ3Rv1Ew9p3UEC0GzqbjUBEbBuuyF6+XUf11VUcFTLJF3PyraORcuCtkTuD6QUVNfSQPMRsPaXMYqBzET3DAURKS9tQ+WIGGYk4mHETH8PDdVeOp3U4pk863V2lRXIcHYqnESX0HIXRikKEiq4ks1p2feTgPIioXqbQiEuskRApU9YF0kNYbGxwkOF3XDhSbh0uousdjc6ipxMY3fP4iOM93s/XXEelTdT0LUT2GiEnBoGMjHhGyrwxDlKd6ZQxg7v8uKJoyjKgn6gp2Qp2vKclYOK58yb6pjqXKa+n1Djjg4Wcr8NFKLvF1V1lGypjqKnE5jXXU8RHsPeY5NblNvf2zbW7fRrt01W62viAygfvOJFGPqOo37SrXtHDULyXj1bHbyAyAF7geAkKnZLT4CGKMrpWlpTN6HCi6vnubqR/d9ExpF0EbpAX9qbWXSPzjYMcHn8M9If4H/Q+OJdCFHidpA9TVZJ0pGLwLpIksxkRYm3QUvoFbE5HQUHPv5LLrP8ApZZSdixj5V3VlRFfOSlv3RROH+2ODacI7o2RpWM2HsFSCyUbHzSN9EofRqWOAD0sBx6WEehuz6HivhH6f9HNvSvKcnzu0G9sa9e1r8dOrrbzw2jmDfmOXYtkucOKjnbRKXfMPQTHsHeEfMcMWrZk0I1Zt0m6CQWIkiQCEKH1AHQMTEXGSzYG8pHNHyIG1Am5QKqUB87GAcfAijP6Qgfs1H8uGDRqxalasmyLZAnqJIpgQhf7AHT5X//EACwRAAIBAgQEAwkAAAAAAAAAAAECAwARBBIhcRMgUZEzUrEFFDAxQVBhgdH/2gAIAQIBAT8A+JGudwvWpFhhsipc9zauBD5R2rgReUdqx2HRAHQW5oPFXcetTyH3hR9b/uosU7uFtvSyIy5gdK9o+CN/7zQeKu49anjQDiW1GtQyiVTp+KRFCsgF7D59dqxq5cMq9Leh5o2yOG6VJNFLEQGGtYdoolIzjvSScMZVdSN6xU+ZAl7m99Pu3//EADIRAAEDAwMBAwoHAAAAAAAAAAECAwQFERIABiExByA1FkFRVGFzkpOy0RQiIzBQUnH/2gAIAQMBAT8A/cp8QzJjUUG2akp+I21VIdBoIYhx4CX3VHlOAWvDzq6E68m6J6m18tH215N0T1Nr5aPtrtJ2vAp7LU+GgIurFQHTkEggebp3tt+Nw/et/WNbiqjytzR2gAlxLiRZIGZRfi6z/cEnAcAHnVI3lUahUI8QMAAgly98kgXFyOibkWAOodXgzGDIYdBQCRfoLj2m19dq3gbXvU/Qvvbb8bh+9b+sa3BTaey2qqqb/UaIWSmwK8bEBRtyOBqiVdutR3yWscVFBBN78A9bDjnUKBEbhyYDLJdxaVis3JWpVwcBYpQm/oOu0GMYu1IbBFilSBb/ABtfep8sw5jUkC+Ckq+E31U6/R61SFNsS0IKx0WoJPPmIJGtsv0ejx3GlzmTkrLhaQB+VI9Ps1CqhpjAixZ0ZxtN8c3MVAE3sbFQNtby3D+Jp7VOW+l5wLK1KQDiOtkgnrbI/wAt/9k=";
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAyVBMVEUAAADIFi3IFi3IFi3IFi3NGTHIFi3JFy7JGC/QJDzIFy/HFi3IFi7IFy3JFy7LGDDLGy/TIDjIFy3IFi3IFy7HFy7IFy7IGC/JFy/KGzDMGi7HFi3+/v7NLUL++vv89PX78PLppa7JHzX44OP109fLJjvIGTD66uz229/ggI355ejvvcPss7rca3rXWWnQOUzuuL/rrLTooKrmlqDih5PgfInWVGTTSlvSQ1bONEjyy9HwwcjkkZzjjZjedoTaZ3bZYXHVT2Hxx8zr5xgxAAAAG3RSTlMA+uzZmB3FZUQKW+PQukw5JBKvoo6Dem9tLzIfD73AAAACeklEQVRIx62W6VbCMBCFaUEKBVtAFnECFMqOiOzIIuj7P5RhsjRQKO05fn+cnOaayc1tQ+w/yVct06i8GmYqlw6rSSXi4KElS7nHmnQ5Az6S1gOVwUR+oR0gsuJwl8LdVksQhJ66vasCBKO93lA9ZeEhCf9J4bYi654hFFd9JiAc2oUvBoRFzykb0yE0BU9WhAjY0nsNIpAUsheIhMUXA4WB2x+LujNttH+8J8PerKUsVwaPMaGsgDGltVMDxpJQmlgyM9V89AllC0itfh7MAWn1zgMH65Kvx09yZoP1AWunhYNvHLQ9U0xQ+CCyl+6QIN84cLFesqikrw5ts8IuGx1an2ghVziqK0PuKsTvoyU+H9B6RDhnM9tYHYCRunRkQsi6QSguwBcRvAOssGgIV00q00HSpNua4YwP2EtZvcZXngHHoDJMlnS8/oMzRt0ekRx4jxPvrVNlc0LZ/+IUtujUIZRed8yaFVTUJju4reGJKO3N8e8RD2MNapMZ4CxwyhynMD65MdtztH4BEZYkQcYHF2Bybgw3Y9Ny6EBiic+IjE8TnWG4Smz2ffCoUlkFQInPBJPPWADFZbGpHcEjT2VV8cpIt9byvCgDGRtJnKqElVsl+23xL6S/ru8jyzeHT3fqyisRHfRUIYUyW75p9TU3tc+Tj8tRh50JeGRijCxObTr9k8z0rrH7AqEbLLAWlMVlDVHIpKPdGzJZgjcID7of/QNrqRdwFkJSuryC9cj3DWJrEIIsuqhihtDFn2I+7Id9PudjUX9iyAT7SQedg27E7vJ2Ly9aMR/8Y/Jmpy/oRSB2Qr/yr4yix1QriWRG1zQ9/lw0UfNP/AHhLedmeGte6wAAAABJRU5ErkJggg==";
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABKVBMVEX////+qkr9pE3+qEv9ok7/rUn+rEr9n1D/sEj/r0j+p0z9oE/+pkz9oU7/sUf/skf/r0n/8OL+8uX+y5z+/v3+z579tHL//vv9voH+rE/++vX+yZP+uHH+9ev+2bX9zqL9vIL+vnv+sGD+pU7/8uD/58v+u3T+y5f+xo39unv+rFn9p1j+rFT9p1L+/Pn+7t//7dn+6NH+48b+1qr+0p7+z5v/05f+wIH9tGj+sFv/+PD/8+f+2bD+xIf/wXj+um/9sG3+tWr+uGn+smT9pFj/sVH/9u393sD+3bz+37v/0Jb/zY7+yYn/xH7/vm/+t2P+tl//tFf+sFb/69T+3sD+3bX+1aL+x5r+zJT9tnX9t23/vGn/v2b9rGT8o1T/tlD/8uL91rP/xndBlmYrAAADg0lEQVRIx72V2XLTQBBF2zJe5Mhg2QqObOzgfXewDXFMyB4gJIGEfV///yO43TOjEVTxyq1J5SHntK56VBX6X2lvf/l+i3OTfzjZm9msi+MWCgU39fjzdptsytvANA9WeGYZd92Um5KclyP+l6FxgMpshHEer5PeN8Z2bHoWJ4JdwBGOnOv+erhEwdnC+QVGF2K0GG39AMGzCubjPu4QPStoGIfxRDqReCDCF5keVUHtl/cI6TwWXifBORbhe9Rcr+W6SMH9R0T3XkoVoZUwFsFWV6/64iGVL1OpBwHtXgmNYyJCNurCJ/W8QpV97nI5pYcvZLZJUgt25XjPi4CefFbd9ys0fZ62dDKZFAHVZeVyRe+IflyDli7HNQo+GB7Rgstt9M7fEr1+ZfdyvUW0YBjHCuii75TXPw8F1nk1w4WESZOcFkBzeP1vBbcJ57iQ8Z9CSueK169oyyeSfCErhnM4Vkinsf7gEnjcaDZB4kIqO2J4cQHrpyJDNuNueBSyQVTpAvdynhK49gXGUBuUXXt40GgMxxh8AGi6ZEMJzGP9/sIKGLtKLrsn/eMxqtwhQt2q5zmOEhLpfV7/ffIFFv740epgvdptNHM5Fvq4kB3HUwJe86r4LEzcp7YISHhwtht+6D7YW4L3ICyHc3/oRE+QQPDNjdarRTparTf2jjwEwoaDGMEUX4egsgoWZernmv2dKnjHCK1/CY096vjU37s3pZ7nGAG4FaS6ET7NqlSrVhb40yMPkAiMW4ExLeD+Z8Ul1bzh7ElnILypdANRQjIScsiQguZ0c9Js9OonjFcHtyGAj4SkFfh76RJ9apycBRQ0ZH7tDQuCxwWMhuDh+zrBp9atEs3utJTwFMJdxedFYNoKnldc7/UW9Y3myJHiqKSFvBGAcxcW+HvZqe8SUp8AhzCasJDnrBlBBQLzzfpkc6s2/whWXnSrLk8QYU0EoTEbAjpMMFkCXIKXhoDpazgicHHHCK3+UOFR8NJaQJTAAVOiIqNxPI8mT0QAnFnLZEQYO47c6AbRbtHEL924vcn5SZtKyCCnIhwJjjYdimUrfya/g/m3rwEdZkQ4JE7JMdko2XzN50ej09HpN5T5OMiolETwW6a57Y7y+jXRxcYnSe8vGge0wWPCe1IpDwS3tMEzTNsM7D/qXsuOZz7exc4HH8UvHY4YlugeceH0sOTTf8pv7l1sGXUoetEAAAAASUVORK5CYII=";
}, function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAB2hJREFUWAnVWGmMVEUQ7uo3szsshxyy7BsFM8wKKgFR/ggE5fAHGgQFxQPvIyYSNcYjhgREY/hB4n2LiQFNlKwcGmLEIyx4EEW8RZHdAZSd2QVWDpdddmfea796s/2m5zE7u7MGo/1juqq6qrpeV3VV1wjxHx/UW/ua+8SHH2935whBk0mpqBJkk1BR4I4QKgk8SaQaiGiT6CM32C11B3qzV0kGqtMn9mlM7l+olLpWCXV+TzfEJi4M/1xIesOeMvx1qq3NlCDbPau66iortfbrW5QrHgU3TukfjZ0kaVHUSaztiZZuT7CpvDqe6XChTI0rphCKHLg1BTeHwDdM4ciK89Mm6iuv7s71spiSxlB8eqbD+aoL45oF0YuWJWdQhM6wLzojcppKDI+q3bZ9TkUkVB6OS0mziMQqEtQS3AchMk0dc7Y1lcW6+/CgaBZPWfGblatWQBGfSN7gTe3zBt9O27en8xa6QJLRCRUidWgDGxVk8Yy35Lxopu7D4BrjBd3AJ+c6amMh47JKqJ1CNDmart9eSGmQ1mhVz3ZdZ31XboeRRyksJ9oddTuCsie4mGPOcdwa0zgo2M9KcsKqXGTcmkMDxw/M0QpDTZFRIx3XWRkwLomTadUS2GuASrvvHRkwZrCm6TnPQL6t2QshTMZmGaYZQopbtRDP2DDWeuToKqScgl7weKqry532TA1g/0PwoWkrFJorLZoN+nHm4wEj4y1/ta3MYrnfPAM5lZgXgpXJEF1S1VH/E9LCGiTdp3OiDKnLklb1g/m0HJZKuM9g4/x8SfRAVXrXl1WZxCck5XU5bobULA4vk+YbyEm4M8/l1kk8YqcT2zTBPm/QQ4C3apxnUu6yZOjMC00aw0krdj1O906TjstVE3Xrn9W0qFO/jki+pnGeEfvLTa/4BnKFwLqZhL+z501YbgrzrY1ErPk42YOaDldbwsm83dQ3NkzTUmXVY1A7XtZ4dqbfwoPLbsunCREaErkP+po0HSc+IRWKX6Fx30AuX5rIs5RiGdXUoK7mjyFtdfuEJRcg8FC+sgNG2k4rvcUxvH/omH4q7bwDWl+9Dt5WKyyuHHpw51+apufKAz+3IIqf0rg3u8K3xTOQC78ZK1CYqFp805o8IQPhnKWIHjdIHOTTUmu+eSzd3IbcKc4y1xBrd1V1JH40aSYcGShfwimayXymwgVjHs/A7KvEECFaT0uX+idkrPhgdMmNj0LpRz4BgFLuIvxcY9I4xmynfqVJC8JD/qw7CtrHmo6P7de4R01ivNPFNFkv8qyk+sDEC8H8AailC3BNGgqtd9K+s0cMv7vIem6JKH9PV0zgRa+MZd9zBq8j1iVpJDxVfKhjLpei8q4Z6ezU3t8PQFdxRVjF6VsmE9znXTrPQLxCcHtz2wBCgOdwU7A0WLHxXiyVJsc12PUM9FyMJ5JdqoKTzq9kJe/R+VLxnunennDZMdzQ1SUZoMQInPjFpgwu0Dqkj0MmrRQYdvzKTsSMrE+xXwDr1HA86iYqUNZ67GN+reBB8K5pgBWWY7lEmrTewJ6LucExhCPNFaPNimIs/ftg9haj+1LGeaU7MufCFC99JEOxKViKFDNNue744LrriEkNoVjR2IaXDkXTia9Z1mstHMe/7uXhATtObfu+odNA2oRSd4PeBPDlgN/3cIfeRHwhxroeboEbD6Nf6VpCr6haQNMYczqc5zHNZJiHI1o4Nzd4Lua+FcGYqxyK5qipUz3jPe6T/JPsP+pUXIeL9Ta4YEcrzx3ovaI8A7OdFX2hGVBqKlOf7r1Z4yd9Ppa+F3vmDoTURt3veLeYDUha8TvglldzxtAf0bg806uJSvXJ0U+EEBIXIIYXmyuSaCFyxB6TFoRJWs1I5QlUpHoY2F+vkxW6KJrZtYVx30B2aXLzXk4Lo31Gkk/ggfmAxrua/0maQRlcC+P89x8MqkXrOk3vlY1BYPx3BHf8eoFn1Mf7cbJ8YU7KSMnYQtM43oQsa6m5mW8gE/nvCAToJpNBuOqNYJ+Qt95LpMEaeS3Cwn/+e2qIXrAzdZtNlXkG8gL/HYFj3quZ8IX9HEe9j5P03aDXejsnZfwecsUq5Fd/fxzMj9ERI04IJ59Bb8Y3Gs/z2RBo0TQ4uxwXaC0Ur/hz0MhTcvTSoP19x1Q1yNhqhA53e/6txYE0hsvElbSn9nhQ4wkGMsOwjt0/oO+Yx/nIFIDi29sOqx0pGX/w8CljB5lrxWBuqCCzONPatgs5fX6ANxkuK5s6tD3xW4DuoTC+64Hu7Bzu+PG18SAXBFvxWtmAL9wCT1W4ys3vAKW4QSgaghQ0HR96qXliWhd0/Boqk5dVttfXaVpwLmogM/PfEdmOX80KCvcWx6Z4n4jn7GjVw7Rva1sxPd0aqIU7/1BajpPwegVNL3XGaX5KllyC21rbE9keG8jK4C5CUz0XVZs7t5kwtl/PNvEu3EbLoieHZer9ktoz2Z5wFeDhvtUrg+i+uMHxeojsMx2dlGpGXB50hfuHZYU+qxrX/1tdWwuo+n+T/galZNA7ocEphAAAAABJRU5ErkJggg==";
} ] ]);