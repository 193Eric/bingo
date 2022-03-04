(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 106 ], {
    617: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var d = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var o = [], r = !0, n = !1, a = void 0;
                try {
                    for (var i, s = t[Symbol.iterator](); !(r = (i = s.next()).done) && (o.push(i.value), 
                    !e || o.length !== e); r = !0) ;
                } catch (t) {
                    n = !0, a = t;
                } finally {
                    try {
                        !r && s.return && s.return();
                    } finally {
                        if (n) throw a;
                    }
                }
                return o;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, r = function(t, e, o) {
            return e && defineProperties(t.prototype, e), o && defineProperties(t, o), t;
        };
        function defineProperties(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        var f = o(0), n = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(f), a = o(1);
        o(618);
        var i = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(Ad14Modal, f.Component), r(Ad14Modal, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, o) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === r) {
                        var n = Object.getPrototypeOf(t);
                        return null === n ? void 0 : get(n, e, o);
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    return void 0 !== a ? a.call(o) : void 0;
                })(Ad14Modal.prototype.__proto__ || Object.getPrototypeOf(Ad14Modal.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isShow: !0
                }, this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "handleImageClick",
            value: function handleImageClick() {
                var t = this.props, e = t.actions, o = t.extraData;
                if (o) {
                    e && e.$log && e.$log.pushEvent({
                        eventName: "AD1-4点击次数",
                        eventCode: "10141"
                    });
                    var r = o.advertionUrl;
                    if (r && 0 == r.indexOf("productId=")) {
                        var n = r.split("productId=")[1];
                        e.$cart.addProductToCartById(n);
                    } else r && a.feNavigator.jumpUrl(r);
                    this.setState({
                        isShow: !1
                    });
                }
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, o) {
                var r = this;
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var n = this.$prefix, a = (0, f.genCompid)(n + "$compid__153"), i = d(a, 2), s = i[0], u = i[1], l = this.__state.isShow, c = this.__props.extraData, p = "";
                return c && (p = c.imgUrl), this.anonymousFunc0 = function() {
                    return r.setState({
                        isShow: !1
                    });
                }, f.propsManager.set({
                    isOpen: l,
                    onClose: this.anonymousFunc0,
                    closeOnClickOverlay: !0
                }, u, s), Object.assign(this.__state, {
                    $compid__153: u,
                    imgUrl: p
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        } ]), Ad14Modal);
        function Ad14Modal() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, Ad14Modal);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (Ad14Modal.__proto__ || Object.getPrototypeOf(Ad14Modal)).apply(this, arguments));
            return t.$usedState = [ "$compid__153", "imgUrl", "isShow", "actions", "extraData" ], 
            t.customComponents = [ "Modal" ], t;
        }
        i.$$events = [ "handleImageClick" ], i.$$componentPath = "pages/index/modal/Ad14Modal/index", 
        e.default = i, Component(o(0).default.createComponent(i));
    },
    618: function(t, e, o) {}
}, [ [ 617, 0, 1, 2, 3 ] ] ]);