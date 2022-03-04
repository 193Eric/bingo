(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 131 ], {
    687: function(e, t, r) {
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
        var o = r(0), n = _interopRequireDefault(o), i = _interopRequireDefault(r(13)), p = r(1);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        r(688);
        var u = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(UpgradePackage, o.Component), a(UpgradePackage, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, r) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === a) {
                        var o = Object.getPrototypeOf(e);
                        return null === o ? void 0 : get(o, t, r);
                    }
                    if ("value" in a) return a.value;
                    var n = a.get;
                    return void 0 !== n ? n.call(r) : void 0;
                })(UpgradePackage.prototype.__proto__ || Object.getPrototypeOf(UpgradePackage.prototype), "_constructor", this).apply(this, arguments), 
                this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, r) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {}, this.$prefix;
                var a = this.__props.data;
                if (!a) return null;
                var o = a.memberLevel;
                return o ? (Object.assign(this.__state, {
                    data: a,
                    memberLevel: o
                }), this.__state) : null;
            }
        } ]), UpgradePackage);
        function UpgradePackage() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, UpgradePackage);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (UpgradePackage.__proto__ || Object.getPrototypeOf(UpgradePackage)).apply(this, arguments));
            return e.$usedState = [ "data", "memberLevel" ], e.jumpMemberBenefits = function() {
                (0, p.JumpH5)({
                    path: i.default.memberBenefits
                });
            }, e.customComponents = [], e;
        }
        u.$$events = [ "jumpMemberBenefits" ], u.$$componentPath = "pages/paySuccess/modules/UpgradePackage/index", 
        u.defaultProps = {
            data: {}
        }, t.default = u, Component(r(0).default.createComponent(u));
    },
    688: function(e, t, r) {}
}, [ [ 687, 0, 1, 2, 3 ] ] ]);