(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 109 ], {
    604: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = _interopRequireDefault(r(3)), X = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
        }, Z = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var r = [], o = !0, a = !1, n = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(o = (i = u.next()).done) && (r.push(i.value), 
                    !t || r.length !== t); o = !0) ;
                } catch (e) {
                    a = !0, n = e;
                } finally {
                    try {
                        !o && u.return && u.return();
                    } finally {
                        if (a) throw n;
                    }
                }
                return r;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, o = function(e, t, r) {
            return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
        };
        function defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        var ee = r(0), a = _interopRequireDefault(ee), te = function _interopRequireWildcard(e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t;
            }
        }(r(14)), l = _interopRequireDefault(r(605));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _asyncToGenerator(e) {
            return function() {
                var i = e.apply(this, arguments);
                return new Promise(function(a, n) {
                    return function step(e, t) {
                        try {
                            var r = i[e](t), o = r.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!r.done) return Promise.resolve(o).then(function(e) {
                            step("next", e);
                        }, function(e) {
                            step("throw", e);
                        });
                        a(o);
                    }("next");
                });
            };
        }
        var n, i = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(IndexModal, ee.Component), o(IndexModal, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === o) {
                        var a = Object.getPrototypeOf(e);
                        return null === a ? void 0 : get(a, t, r);
                    }
                    if ("value" in o) return o.value;
                    var n = o.get;
                    return void 0 !== n ? n.call(r) : void 0;
                })(IndexModal.prototype.__proto__ || Object.getPrototypeOf(IndexModal.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    modalId: -1,
                    extraData: null
                }, this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(e, t) {
                return t.modalId !== this.state.modalId || t.extraData !== this.state.extraData;
            }
        }, {
            key: "generateModalId",
            value: (n = _asyncToGenerator(u.default.mark(function _callee() {
                var t, r, o, a, n, i;
                return u.default.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this.props.$store.modalSortList, e.prev = 1, e.next = 4, (0, l.default)(this.props, t);

                      case 4:
                        if (r = e.sent) {
                            e.next = 8;
                            break;
                        }
                        return this.props.actions.$log.sendPageModel(), e.abrupt("return");

                      case 8:
                        o = r.modalId, a = r.modalCode, n = r.extraData, this.setState({
                            modalId: o,
                            extraData: n
                        }), i = {
                            modelCode: a,
                            lastModel: !0
                        }, o === te.AD14_MODAL_ID && n && n.advertionId && Object.assign(i, {
                            relateFromType: 3,
                            relateFromId: n.advertionId
                        }), this.props.actions.$log.pushPageModule([ i ]), e.next = 18;
                        break;

                      case 15:
                        e.prev = 15, e.t0 = e.catch(1), console.error(e.t0);

                      case 18:
                      case "end":
                        return e.stop();
                    }
                }, _callee, this, [ [ 1, 15 ] ]);
            })), function generateModalId() {
                return n.apply(this, arguments);
            })
        }, {
            key: "_createGetModalByIdData",
            value: function _createGetModalByIdData(K) {
                var Q = this;
                return function(e, t) {
                    var r = (0, ee.genCompid)(K + "$compid__142"), o = Z(r, 2), a = o[0], n = o[1], i = (0, 
                    ee.genCompid)(K + "$compid__143"), u = Z(i, 2), l = u[0], s = u[1], d = (0, ee.genCompid)(K + "$compid__144"), c = Z(d, 2), f = c[0], p = c[1], _ = (0, 
                    ee.genCompid)(K + "$compid__145"), h = Z(_, 2), m = h[0], v = h[1], g = (0, ee.genCompid)(K + "$compid__146"), D = Z(g, 2), y = D[0], M = D[1], I = (0, 
                    ee.genCompid)(K + "$compid__147"), S = Z(I, 2), x = S[0], O = S[1], w = (0, ee.genCompid)(K + "$compid__148"), b = Z(w, 2), P = b[0], C = b[1], A = (0, 
                    ee.genCompid)(K + "$compid__149"), R = Z(A, 2), $ = R[0], L = R[1], j = (0, ee.genCompid)(K + "$compid__150"), q = Z(j, 2), N = q[0], E = q[1], F = Q.props, T = F.onBindSuccess, k = F.onModalClose, B = String(e) === te.REGISTER_MODAL_ID, G = String(e) === te.MERGE_MODAL_ID, W = String(e) === te.COUPON_MODAL_ID, Y = String(e) === te.AD14_MODAL_ID, z = String(e) === te.RECOMMEND_PRODUCT_MODAL_ID, U = String(e) === te.SHELF_BIND_MODAL_ID, H = String(e) === te.STEAL_MODAL_ID, J = String(e) === te.DINE_AND_DASH_MODAL_ID, V = String(e) === te.PRIVACY_POLICY_MODAL_ID;
                    return B ? (Q.anonymousFunc0 = T, ee.propsManager.set(X({}, F, {
                        extraData: t,
                        onBindSuccess: Q.anonymousFunc0,
                        actions: F.actions
                    }), n, a)) : G ? ee.propsManager.set({
                        extraData: t
                    }, s, l) : W ? ee.propsManager.set(X({}, F), p, f) : Y ? ee.propsManager.set(X({}, F, {
                        extraData: t
                    }), v, m) : z ? ee.propsManager.set(X({}, F), M, y) : U ? ee.propsManager.set(X({}, F), O, x) : H ? ee.propsManager.set({
                        extraData: t,
                        actions: F.actions
                    }, C, P) : J ? ee.propsManager.set({
                        extraData: t,
                        actions: F.actions
                    }, L, $) : V && (Q.anonymousFunc1 = k, ee.propsManager.set({
                        extraData: t,
                        onModalClose: Q.anonymousFunc1
                    }, E, N)), {
                        anonymousState__temp: B,
                        anonymousState__temp2: G,
                        anonymousState__temp3: W,
                        anonymousState__temp4: Y,
                        anonymousState__temp5: z,
                        anonymousState__temp6: U,
                        anonymousState__temp7: H,
                        anonymousState__temp8: J,
                        anonymousState__temp9: V,
                        $compid__142: n,
                        $compid__143: s,
                        $compid__144: p,
                        $compid__145: v,
                        $compid__146: M,
                        $compid__147: O,
                        $compid__148: C,
                        $compid__149: L,
                        $compid__150: E
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, r) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var o = this.$prefix, a = this.__state, n = a.modalId, i = a.extraData, u = this._createGetModalByIdData(o + "bdazzzzzzz")(n, i);
                return Object.assign(this.__state, {
                    anonymousState__temp10: u
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        }, {
            key: "anonymousFunc1",
            value: function anonymousFunc1() {}
        } ]), IndexModal);
        function IndexModal() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, IndexModal);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (IndexModal.__proto__ || Object.getPrototypeOf(IndexModal)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp10", "modalId", "extraData", "$store", "actions" ], 
            e.customComponents = [ "RegisterModal", "MergeUserModal", "CouponModal", "Ad14Modal", "RecommendProductModal", "ShelfBindModal", "StealModal", "DineAndDashModal", "PrivacyPolicyModal" ], 
            e;
        }
        i.$$events = [], i.$$componentPath = "pages/index/modal/IndexModal", t.default = i, 
        Component(r(0).default.createComponent(i));
    },
    605: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = _interopRequireDefault(r(3)), o = _interopRequireDefault(r(606)), a = _interopRequireDefault(r(607)), n = _interopRequireDefault(r(608)), i = _interopRequireDefault(r(609)), u = _interopRequireDefault(r(610)), s = _interopRequireDefault(r(611)), d = _interopRequireDefault(r(612)), c = _interopRequireDefault(r(146));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _asyncToGenerator(e) {
            return function() {
                var i = e.apply(this, arguments);
                return new Promise(function(a, n) {
                    return function step(e, t) {
                        try {
                            var r = i[e](t), o = r.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!r.done) return Promise.resolve(o).then(function(e) {
                            step("next", e);
                        }, function(e) {
                            step("throw", e);
                        });
                        a(o);
                    }("next");
                });
            };
        }
        var f, p = {
            registerModal: o.default,
            dineAndDash: d.default,
            couponModal: a.default,
            recommendProModal: n.default,
            ad14Modal: i.default,
            shelfBindModal: u.default,
            stealModal: s.default
        };
        t.default = (f = _asyncToGenerator(l.default.mark(function _callee(t, r) {
            var o, a, n, i, u;
            return l.default.wrap(function _callee$(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    o = [ c.default ], a = Object.assign({}, p), r.forEach(function(e) {
                        var t = a[e];
                        t && (o.push(t), delete a[e]);
                    }), Object.keys(a).forEach(function(e) {
                        o.push(a[e]);
                    }), n = 0;

                  case 5:
                    if (n < o.length) return i = o[n], e.prev = 7, e.next = 10, i.isShow(t);
                    e.next = 22;
                    break;

                  case 10:
                    if (u = e.sent) return console.log("modal Rules::", i.modalId, u, t), i.showNextAction && i.showNextAction(t), 
                    e.abrupt("return", Promise.resolve({
                        modalId: i.modalId,
                        modalCode: i.modalCode,
                        extraData: i.extraData
                    }));
                    e.next = 15;
                    break;

                  case 15:
                    e.next = 19;
                    break;

                  case 17:
                    e.prev = 17, e.t0 = e.catch(7);

                  case 19:
                    n++, e.next = 5;
                    break;

                  case 22:
                    return e.abrupt("return", Promise.resolve(null));

                  case 23:
                  case "end":
                    return e.stop();
                }
            }, _callee, this, [ [ 7, 17 ] ]);
        })), function getModalData(e, t) {
            return f.apply(this, arguments);
        });
    },
    606: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(1), o = function _interopRequireWildcard(e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t;
            }
        }(r(14)), u = _interopRequireDefault(r(2)), l = r(4), s = _interopRequireDefault(r(61));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var a = {
            modalId: o.REGISTER_MODAL_ID,
            modalCode: "10130",
            extraData: {
                shelfId: "",
                price: 0
            },
            isShow: function isShow(a) {
                var n = this;
                return new Promise(function(r) {
                    a && a.$user || r(!1);
                    var e = a.$user.mobilePhone, o = i.Storage.get("shelfId"), t = Number(i.Storage.get("registerFlag", 0)) || 0;
                    n.extraData = {
                        shelfId: o
                    }, !e && t < 5 ? u.default.get(s.default.getRegisterCouponList, {
                        shelfId: o
                    }).then(function(e) {
                        var t = 0;
                        e instanceof Array && 0 < e.length && (a.actions.$store.setAutoReceiveCoupon(e), 
                        e.forEach(function(e) {
                            e.children && 0 < e.children.length ? e.children.forEach(function(e) {
                                1 == e.childDiscountType && (t = (0, l.add)(t, e.childPrice));
                            }) : 1 == e.discountType && (t = (0, l.add)(t, e.price));
                        })), n.extraData = {
                            shelfId: o,
                            price: t
                        }, r(!0);
                    }).catch(function(e) {
                        console.error(e), r(!0);
                    }) : r(!1);
                });
            },
            showNextAction: function showNextAction() {
                var e = i.Storage.get("registerFlag", 0);
                e && i.Storage.setLocal("registerFlag", String(Number(e) + 1));
            }
        };
        t.default = a;
    },
    607: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(1);
        var a = {
            modalId: function _interopRequireWildcard(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }
            }(r(14)).COUPON_MODAL_ID,
            modalCode: "10170",
            isShow: function isShow(e) {
                var t = e.$store.couponData.autoReceiveCoupon;
                return o.logManager.info({
                    id: this.modalId,
                    data: {
                        autoReceiveCoupon: t
                    }
                }), t && 0 < t.length;
            },
            showNextAction: function showNextAction() {}
        };
        t.default = a;
    },
    608: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(1);
        var o = {
            modalId: function _interopRequireWildcard(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }
            }(r(14)).RECOMMEND_PRODUCT_MODAL_ID,
            modalCode: "10150",
            isShow: function isShow(e) {
                var t = e.$store, r = t.recommendProductData, o = t.productList;
                if (n.logManager.info({
                    id: this.modalId,
                    data: {
                        recommendProductData: r
                    }
                }), r && r.productIds && 0 < r.productIds.length && !n.Storage.get("recommendNoRem")) {
                    var a = r.productIds.map(function(e) {
                        return String(e);
                    });
                    return !!o.find(function(e) {
                        return a.includes(e.productId);
                    });
                }
                return !1;
            }
        };
        t.default = o;
    },
    609: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = r(1), d = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r(11)), c = r(20);
        function _defineProperty(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e;
        }
        var o = {
            modalId: function _interopRequireWildcard(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }
            }(r(14)).AD14_MODAL_ID,
            modalCode: "10140",
            extraData: null,
            isShow: function isShow(e) {
                var t = e.$shelf.isCounter;
                if (!(0, c.isWeixin)() && !t) return !1;
                var r = e.$store.advList, o = e.$shelf.shelfId, a = (0, d.default)(new Date()).format("YYYY-MM-DD"), n = r["1-4"];
                if (s.logManager.info({
                    id: this.modalId,
                    data: {
                        toDayStr: a,
                        ad14List: n,
                        adFlag: s.Storage.get("adFlag" + o)
                    }
                }), n && n.length) {
                    var i = s.Storage.get("adFlag" + o);
                    if (!i) return this.extraData = n[0], !0;
                    for (var u = i[a] || [], l = 0; l < n.length; l++) if (-1 === u.indexOf(n[l].advertionId)) return this.extraData = n[l], 
                    !0;
                }
                return !1;
            },
            showNextAction: function showNextAction(e) {
                var t = e.$shelf.shelfId, r = (0, d.default)(new Date()).format("YYYY-MM-DD"), o = s.Storage.get("adFlag" + (t || ""));
                if (o) {
                    var a = o[r] || [];
                    a.push(this.extraData.advertionId), s.Storage.setLocal("adFlag" + t, _defineProperty({}, r, a));
                } else s.Storage.setLocal("adFlag" + t, _defineProperty({}, r, [ this.extraData.advertionId ]));
            }
        };
        t.default = o;
    },
    610: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(1);
        var o = {
            modalId: function _interopRequireWildcard(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }
            }(r(14)).SHELF_BIND_MODAL_ID,
            modalCode: "10180",
            isShow: function isShow(e) {
                var t = e.$shelf, r = t.allRelateShelfCount, o = t.shelfId, a = n.Storage.get("shelfBindFlag" + o);
                return r && 1 < r && !a;
            },
            showNextAction: function showNextAction(e) {
                var t = "shelfBindFlag" + e.$shelf.shelfId, r = n.Storage.get(t);
                r ? n.Storage.setLocal(t, String(Number(r) + 1)) : n.Storage.setLocal(t, "1");
            }
        };
        t.default = o;
    },
    611: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r(2)), s = r(20);
        var o = {
            modalId: function _interopRequireWildcard(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t;
                }
            }(r(14)).STEAL_MODAL_ID,
            modalCode: "10190",
            isShow: function isShow(e) {
                var o = this, t = e.$user.userid, r = e.$shelf, a = r.shelfId, n = r.isMachineShelf, i = e.$store.couponData.avalibleStarLevelShelfCoupon, u = {
                    userId: t,
                    shelfId: a
                };
                return new Promise(function(r) {
                    (0, s.isWeixin)() && !n ? l.default.get("getLossMessage", u).then(function(e) {
                        if (e) {
                            var t = !1;
                            (0 < e.userTag || 0 < e.shelfTag && e.shelfTag < 4 || 0 == e.userTag && 5 == e.shelfTag && i) && (t = !0), 
                            o.extraData = {
                                lossMessage: e,
                                fiveStarLevelShelf: i
                            }, r(t);
                        } else r(!1);
                    }).catch(function(e) {
                        console.error(e), r(!1);
                    }) : r(!1);
                });
            },
            showNextAction: function showNextAction() {}
        };
        t.default = o;
    },
    612: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function _interopRequireWildcard(e) {
            {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t;
            }
        }(r(14)), a = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r(2)), n = r(1);
        var i = "DineAndDashModal", u = {
            modalId: o.DINE_AND_DASH_MODAL_ID,
            modalCode: "10160",
            extraData: {
                xmonth: "",
                activityCode: ""
            },
            isShow: function isShow() {
                var r = this;
                return new Promise(function(t) {
                    a.default.post("overlordMealPop", {}, {
                        showToast: !1,
                        failedMsg: !1
                    }).then(function(e) {
                        if (e && e.xmonth) {
                            r.extraData = e;
                            try {
                                if (n.Storage.get(i)[e.activityCode]) return void t(!1);
                                t(!0);
                            } catch (e) {
                                t(!0);
                            }
                        } else t(!1);
                    }).catch(function(e) {
                        console.error(e), t(!1);
                    });
                });
            },
            showNextAction: function showNextAction() {
                try {
                    var e = n.Storage.get(i) || {};
                    this.extraData.activityCode && (e[this.extraData.activityCode] = !0), n.Storage.setLocal(i, e);
                } catch (e) {
                    console.log(e);
                }
            }
        };
        t.default = u;
    }
}, [ [ 604, 0, 1, 2, 3 ] ] ]);