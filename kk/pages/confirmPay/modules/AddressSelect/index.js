(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 97 ], {
    662: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = _interopRequireDefault(r(3)), p = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            }
            return e;
        }, f = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var r = [], s = !0, n = !1, a = void 0;
                try {
                    for (var o, i = e[Symbol.iterator](); !(s = (o = i.next()).done) && (r.push(o.value), 
                    !t || r.length !== t); s = !0) ;
                } catch (e) {
                    n = !0, a = e;
                } finally {
                    try {
                        !s && i.return && i.return();
                    } finally {
                        if (n) throw a;
                    }
                }
                return r;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, n = function(e, t, r) {
            return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
        };
        function defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var s = t[r];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
                Object.defineProperty(e, s.key, s);
            }
        }
        var a, o = r(5), i = r(0), l = _interopRequireDefault(i), u = _interopRequireDefault(r(2)), d = r(1), c = r(10), y = r(8), h = _interopRequireDefault(r(56));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _asyncToGenerator(e) {
            return function() {
                var o = e.apply(this, arguments);
                return new Promise(function(n, a) {
                    return function step(e, t) {
                        try {
                            var r = o[e](t), s = r.value;
                        } catch (e) {
                            return void a(e);
                        }
                        if (!r.done) return Promise.resolve(s).then(function(e) {
                            step("next", e);
                        }, function(e) {
                            step("throw", e);
                        });
                        n(s);
                    }("next");
                });
            };
        }
        r(663);
        var v, _ = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(AddressSelect, i.Component), n(AddressSelect, [ {
            key: "_constructor",
            value: function _constructor(e) {
                (function get(e, t, r) {
                    null === e && (e = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === s) {
                        var n = Object.getPrototypeOf(e);
                        return null === n ? void 0 : get(n, t, r);
                    }
                    if ("value" in s) return s.value;
                    var a = s.get;
                    return void 0 !== a ? a.call(r) : void 0;
                })(AddressSelect.prototype.__proto__ || Object.getPrototypeOf(AddressSelect.prototype), "_constructor", this).call(this, e), 
                this.state = {
                    addressId: 12,
                    deliveryType: 1,
                    userAddress: null,
                    listUserAddress: [],
                    shelfManagerDetail: null,
                    canDelivery: !0,
                    enableSelectDeliveryType: !1
                }, this.lastDeliveryType = -1, this.$$refs = new l.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: (v = _asyncToGenerator(s.default.mark(function _callee() {
                var t, r;
                return s.default.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this.props.shelfId, e.next = 3, this.getAddressData(t);

                      case 3:
                        r = e.sent, this.setAddressData(r);

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, _callee, this);
            })), function componentDidMount() {
                return v.apply(this, arguments);
            })
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(e) {
                var t = this.state.deliveryType, r = e.operatingStatus, s = e.onChange, n = r === y.OperatingStatus.NORMAL;
                this.lastDeliveryType != r && this.setState({
                    canDelivery: !1,
                    deliveryType: n ? t : 2
                }, function() {
                    s && s(n ? t : 2, null);
                }), this.lastDeliveryType = r;
            }
        }, {
            key: "refreshOperatingStatus",
            value: function refreshOperatingStatus() {
                var e = this, t = this.state.deliveryType, r = this.props, s = r.operatingStatus, n = r.onChange, a = s === y.OperatingStatus.NORMAL;
                this.setState({
                    canDelivery: a,
                    deliveryType: a ? t : 2
                }, function() {
                    n && e.props.onChange(a ? t : 2, null), e.setState({
                        enableSelectDeliveryType: !0
                    });
                });
            }
        }, {
            key: "getLastSelectAddressId",
            value: function getLastSelectAddressId() {
                return this.props.addressSelectedId || d.Storage.get(c.STORAGE_ADDRESS_ID, null);
            }
        }, {
            key: "setDeliveryType",
            value: function setDeliveryType(e) {
                var t = this.state, r = t.enableSelectDeliveryType, s = t.canDelivery;
                if (r && (1 !== e || s)) {
                    this.setState({
                        deliveryType: e
                    });
                    var n = this.props, a = n.onChange, o = n.currentAddress;
                    a && this.props.onChange(e, o);
                }
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, r) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var s = this.$prefix, n = this.__props.currentAddress, a = this.__state, o = a.shelfManagerDetail, i = a.deliveryType, l = (a.canDelivery, 
                this._createUserAddressData(s + "bigzzzzzzz")(n)), u = n ? null : this._createNotUserAddressData(s + "bihzzzzzzz")(n), d = this._createAddressType2Data(s + "biizzzzzzz")(o, i);
                return Object.assign(this.__state, {
                    anonymousState__temp: l,
                    currentAddress: n,
                    anonymousState__temp2: u,
                    anonymousState__temp3: d
                }), this.__state;
            }
        }, {
            key: "_createUserAddressData",
            value: function _createUserAddressData() {
                return function(e) {
                    return e ? {
                        userAddress: e
                    } : null;
                };
            }
        }, {
            key: "_createNotUserAddressData",
            value: function _createNotUserAddressData() {
                return function(e) {
                    return e ? null : {
                        userAddress: e
                    };
                };
            }
        }, {
            key: "_createAddressType2Data",
            value: function _createAddressType2Data() {
                return function(e, t) {
                    return e ? {
                        shelfManagerDetail: e,
                        deliveryType: t
                    } : null;
                };
            }
        } ]), (a = AddressSelect).$$events = [ "setDeliveryType", "onJumpUrlAddressView", "onJumpUrlAddressView" ], 
        a.$$componentPath = "pages/confirmPay/modules/AddressSelect/index", a);
        function AddressSelect() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, AddressSelect);
            var c = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (AddressSelect.__proto__ || Object.getPrototypeOf(AddressSelect)).apply(this, arguments));
            return c.$usedState = [ "canDelivery", "deliveryType", "anonymousState__temp", "currentAddress", "anonymousState__temp2", "anonymousState__temp3", "addressId", "userAddress", "listUserAddress", "shelfManagerDetail", "enableSelectDeliveryType", "shelfId", "operatingStatus", "addressSelectedId" ], 
            c.getAddressData = function(e) {
                var t = [];
                return t.push(u.default.get("getSchoolShelfManagerByShelfId", {
                    shelfId: e
                }).catch(function() {
                    return {};
                })), t.push(u.default.get("listUserAddress", {}).catch(function() {
                    return [ {} ];
                })), Promise.all(t).then(function(e) {
                    return {
                        shelfManagerDetail: e[0],
                        listUserAddress: e[1]
                    };
                });
            }, c.setAddressData = function(e) {
                if (e) {
                    var t = c.state.deliveryType, r = c.props, s = r.onSelectAddress, n = (r.onChange, 
                    e.listUserAddress), a = e.shelfManagerDetail, o = c.getLastSelectAddressId(), i = null, l = null, u = {};
                    if (n && n.length) {
                        if (n.forEach(function(e) {
                            e.addressId == o && (i = e.addressId, l = e);
                        }), !i) {
                            i = n[0].addressId;
                            var d = f(n, 1);
                            l = d[0];
                        }
                        u.deliveryType = 1, u.addressId = i, u.userAddress = l, u.shelfManagerDetail = a, 
                        l && s && c.props.onSelectAddress(l);
                    }
                    u = p({
                        deliveryType: 1
                    }, e, u), c.props.onChange(t, l), c.setState(u);
                }
            }, c.onJumpUrlAddressView = function() {
                d.feNavigator.navigateTo("/packageA/pages/address/index", {
                    form: "confirmPay"
                });
            }, c.getAddressPostData = function() {
                var e = c.props.currentAddress, t = {
                    deliveryType: c.state.deliveryType
                };
                return e && Object.assign(t, {
                    addressId: e.addressId
                }), t;
            }, c.customComponents = [], c;
        }
        _ = (0, o.__decorate)([ h.default ], _), t.default = _, Component(r(0).default.createComponent(_));
    },
    663: function(e, t, r) {}
}, [ [ 662, 0, 1, 2, 3 ] ] ]);