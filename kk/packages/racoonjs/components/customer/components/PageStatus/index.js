(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 60 ], {
    551: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var v = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var o = [], r = !0, a = !1, n = void 0;
                try {
                    for (var s, u = t[Symbol.iterator](); !(r = (s = u.next()).done) && (o.push(s.value), 
                    !e || o.length !== e); r = !0) ;
                } catch (t) {
                    a = !0, n = t;
                } finally {
                    try {
                        !r && u.return && u.return();
                    } finally {
                        if (a) throw n;
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
        var b = o(0), a = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(b);
        o(552);
        var n = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(PageStatus, b.Component), r(PageStatus, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, o) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === r) {
                        var a = Object.getPrototypeOf(t);
                        return null === a ? void 0 : get(a, e, o);
                    }
                    if ("value" in r) return r.value;
                    var n = r.get;
                    return void 0 !== n ? n.call(o) : void 0;
                })(PageStatus.prototype.__proto__ || Object.getPrototypeOf(PageStatus.prototype), "_constructor", this).apply(this, arguments), 
                this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(t) {
                return t.pageStatus !== this.props.pageStatus;
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, o) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var r = this.$prefix, a = (0, b.genCompid)(r + "$compid__77"), n = v(a, 2), s = n[0], u = n[1], i = (0, 
                b.genCompid)(r + "$compid__78"), p = v(i, 2), c = p[0], l = p[1], f = this.__props, _ = f.pageStatus, d = f.className, g = _.status, h = _.message, m = _.errorImage, y = !!g;
                return b.propsManager.set({
                    isShow: y
                }, u, s), "error" === g && b.propsManager.set({
                    message: h,
                    errorImage: m
                }, l, c), Object.assign(this.__state, {
                    anonymousState__temp: y,
                    $compid__77: u,
                    $compid__78: l,
                    status: g,
                    className: d
                }), this.__state;
            }
        } ]), PageStatus);
        function PageStatus() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, PageStatus);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (PageStatus.__proto__ || Object.getPrototypeOf(PageStatus)).apply(this, arguments));
            return t.$usedState = [ "anonymousState__temp", "$compid__77", "$compid__78", "status", "className", "pageStatus" ], 
            t.handleTouchMove = function(t) {
                t.stopPropagation();
            }, t.customComponents = [ "Toggle", "FELoading", "FEError" ], t;
        }
        n.$$events = [ "handleTouchMove" ], n.$$componentPath = "packages/racoonjs/components/customer/components/PageStatus/index", 
        n.options = {
            addGlobalClass: !0
        }, n.defaultProps = {
            pageStatus: {
                status: "",
                message: ""
            }
        }, e.default = n, Component(o(0).default.createComponent(n));
    },
    552: function(t, e, o) {}
}, [ [ 551, 0, 1, 2 ] ] ]);