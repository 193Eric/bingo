(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 124 ], {
    691: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t, e, n) {
            return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
        };
        function defineProperties(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var a = n(0), r = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(a), i = n(1);
        n(692);
        var u = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(Activity2, a.Component), o(Activity2, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, n) {
                    null === t && (t = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === o) {
                        var r = Object.getPrototypeOf(t);
                        return null === r ? void 0 : get(r, e, n);
                    }
                    if ("value" in o) return o.value;
                    var i = o.get;
                    return void 0 !== i ? i.call(n) : void 0;
                })(Activity2.prototype.__proto__ || Object.getPrototypeOf(Activity2.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isShowModal: !1,
                    imgHeight: 0
                }, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "onClickItem",
            value: function onClickItem(t) {
                var e = this.props.onOpenModal;
                -1 < t.url.indexOf("share/coupon") ? e && this.props.onOpenModal() : i.feNavigator.jumpUrl(t.url);
            }
        }, {
            key: "onImageLoad",
            value: function onImageLoad(t) {
                var e = t.detail, n = 750 / (e.width / e.height);
                this.setState({
                    imgHeight: n
                });
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, n) {
                var r = this;
                this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix;
                var i = this.__props.data;
                if (this.__state.imgHeight, !i || 0 == i.length) return null;
                var o = i ? i.map(function(t, e) {
                    t = {
                        $original: (0, a.internal_get_original)(t)
                    };
                    var n = i ? t.$original.itemKey || e : null, o = "cdazz" + e;
                    return r.anonymousFunc0Map[o] = function() {
                        return r.onClickItem(t.$original);
                    }, {
                        $loopState__temp2: n,
                        _$indexKey: o,
                        $original: t.$original
                    };
                }) : [];
                return Object.assign(this.__state, {
                    loopArray58: o,
                    data: i
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0(t) {
                for (var e, n = arguments.length, o = Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                return this.anonymousFunc0Map[t] && (e = this.anonymousFunc0Map)[t].apply(e, o);
            }
        } ]), Activity2);
        function Activity2() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, Activity2);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (Activity2.__proto__ || Object.getPrototypeOf(Activity2)).apply(this, arguments));
            return t.$usedState = [ "loopArray58", "data", "isShowModal", "imgHeight" ], t.anonymousFunc0Map = {}, 
            t.customComponents = [], t;
        }
        u.$$events = [ "anonymousFunc0" ], u.$$componentPath = "pages/paySuccess/modules/Activity2/index", 
        e.default = u, Component(n(0).default.createComponent(u));
    },
    692: function(t, e, n) {}
}, [ [ 691, 0, 1, 2, 3 ] ] ]);