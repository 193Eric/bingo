(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 110 ], {
    613: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var r = [], o = !0, n = !1, a = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (r.push(i.value), 
                    !t || r.length !== t); o = !0) ;
                } catch (e) {
                    n = !0, a = e;
                } finally {
                    try {
                        !o && s.return && s.return();
                    } finally {
                        if (n) throw a;
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
        var f = r(0), n = _interopRequireDefault(f), a = r(1), i = _interopRequireDefault(r(9));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        r(614);
        var s = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(MergeUserModal, f.Component), o(MergeUserModal, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === o) {
                        var n = Object.getPrototypeOf(e);
                        return null === n ? void 0 : get(n, t, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                })(MergeUserModal.prototype.__proto__ || Object.getPrototypeOf(MergeUserModal.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isShow: !0,
                    platformName: ""
                }, this.data = {
                    listBindPhoneUserInfo: []
                }, this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.extraData && this.props.extraData.listBindPhoneUserInfo) {
                    var e = this.props.extraData.listBindPhoneUserInfo, r = "";
                    e.forEach(function(e, t) {
                        r += 0 == t ? e.channelName : "、" + e.channelName;
                    }), this.data.listBindPhoneUserInfo = e, this.setState({
                        platformName: r
                    });
                }
            }
        }, {
            key: "openFAQPage",
            value: function openFAQPage() {
                a.feNavigator.jumpUrlByProject("/html/relateUser.html?from=v3");
            }
        }, {
            key: "relateUser",
            value: function relateUser() {
                i.default.set("listBindPhoneUserInfo", JSON.stringify(this.data.listBindPhoneUserInfo)), 
                a.feNavigator.jumpUrlByProject("/relateUserInfoPage/index.html?fromPage=");
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, r) {
                var o = this;
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var n = this.$prefix, a = (0, f.genCompid)(n + "$compid__151"), i = c(a, 2), s = i[0], u = i[1], l = this.__state, p = l.isShow;
                return l.platformName, this.anonymousFunc0 = function() {
                    return o.setState({
                        isShow: !1
                    });
                }, f.propsManager.set({
                    isOpen: p,
                    onClose: this.anonymousFunc0
                }, u, s), Object.assign(this.__state, {
                    $compid__151: u
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        } ]), MergeUserModal);
        function MergeUserModal() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, MergeUserModal);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (MergeUserModal.__proto__ || Object.getPrototypeOf(MergeUserModal)).apply(this, arguments));
            return e.$usedState = [ "$compid__151", "platformName", "isShow", "extraData" ], 
            e.customComponents = [ "Modal" ], e;
        }
        s.$$events = [ "openFAQPage", "relateUser" ], s.$$componentPath = "pages/index/modal/MergeUserModal/index", 
        t.default = s, Component(r(0).default.createComponent(s));
    },
    614: function(e, t, r) {}
}, [ [ 613, 0, 1, 2, 3 ] ] ]);