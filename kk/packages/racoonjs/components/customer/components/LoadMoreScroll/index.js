(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 59 ], {
    674: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var g = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
            }
            return e;
        }, r = function(e, t, o) {
            return t && defineProperties(e.prototype, t), o && defineProperties(e, o), e;
        };
        function defineProperties(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        var n = o(0), a = _interopRequireDefault(n), y = _interopRequireDefault(o(2));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        o(675);
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
        }(LoadMoreScroll, n.Component), r(LoadMoreScroll, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, o) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === r) {
                        var n = Object.getPrototypeOf(e);
                        return null === n ? void 0 : get(n, t, o);
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    return void 0 !== a ? a.call(o) : void 0;
                })(LoadMoreScroll.prototype.__proto__ || Object.getPrototypeOf(LoadMoreScroll.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    loading: !1,
                    noMore: !1,
                    noData: !1,
                    hasError: !1,
                    currentPage: 1,
                    pageSize: 10,
                    currentCount: 0
                }, this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "fetch",
            value: function fetch(e) {
                var n = this, a = 0 < arguments.length && void 0 !== e && e, t = this.state, i = t.currentPage, s = t.pageSize, o = t.loading, r = t.noMore, c = t.noData, u = t.currentCount, l = this.props, p = l.url, f = l.params, h = l.onFetchSuccess, d = l.method, _ = g({
                    pageNo: i,
                    pageSize: s
                }, f);
                o || r || c || (this.setState({
                    loading: !0,
                    noMore: !1,
                    noData: !1
                }), ("get" === d ? y.default.get : y.default.post)(p, _).then(function(e) {
                    var t = Array.isArray(e.dataList) ? e.dataList : [], o = {
                        data: e
                    }, r = 0 === t.length && 1 === i;
                    setTimeout(function() {
                        n.setState({
                            noData: r,
                            loading: !1,
                            currentCount: u + t.length,
                            currentPage: i + 1,
                            noMore: t.length < s || u + t.length >= o
                        }), h && n.props.onFetchSuccess(e, a);
                    }, 10);
                }).catch(function(e) {
                    console.error(e), n.setState({
                        hasError: !0,
                        loading: !1
                    });
                }));
            }
        }, {
            key: "retryFetch",
            value: function retryFetch() {
                this.fetch();
            }
        }, {
            key: "refresh",
            value: function refresh() {
                var e = this;
                this.setState({
                    loading: !1,
                    noMore: !1,
                    noData: !1,
                    hasError: !1,
                    currentPage: 1,
                    pageSize: 10
                }, function() {
                    e.fetch(!0);
                });
            }
        }, {
            key: "_createLoadingData",
            value: function _createLoadingData() {
                return function() {
                    return {};
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var r = this.$prefix, n = this.__props.className, a = this.__state, i = a.loading, s = (a.noMore, 
                a.noData, a.hasError, i ? this._createLoadingData(r + "cafzzzzzzz")() : null);
                return Object.assign(this.__state, {
                    className: n,
                    anonymousState__temp: s
                }), this.__state;
            }
        } ]), LoadMoreScroll);
        function LoadMoreScroll() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, LoadMoreScroll);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (LoadMoreScroll.__proto__ || Object.getPrototypeOf(LoadMoreScroll)).apply(this, arguments));
            return e.$usedState = [ "className", "noData", "loading", "anonymousState__temp", "noMore", "hasError", "currentPage", "pageSize", "currentCount", "url", "params", "method", "children", "renderEmpty", "renderNoMore" ], 
            e.customComponents = [], e;
        }
        i.$$events = [ "retryFetch" ], i.multipleSlots = !0, i.$$componentPath = "packages/racoonjs/components/customer/components/LoadMoreScroll/index", 
        i.options = {
            addGlobalClass: !0
        }, t.default = i, Component(o(0).default.createComponent(i));
    },
    675: function(e, t, o) {}
}, [ [ 674, 0, 1, 2, 3 ] ] ]);