(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 1 ], {
    0: function(e, t, n) {
        "use strict";
        e.exports = n(148).default, e.exports.default = e.exports;
    },
    148: function(e, ie, se) {
        "use strict";
        (function(e, t) {
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            };
            Object.defineProperty(ie, "__esModule", {
                value: !0
            });
            var p = se(84);
            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function _typeof(e) {
                    return void 0 === e ? "undefined" : a(e);
                } : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
                })(e);
            }
            function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function _createClass(e, t, n) {
                return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
            }
            function _defineProperty(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function _assertThisInitialized(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function _toConsumableArray(e) {
                return function _arrayWithoutHoles(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                }(e) || function _iterableToArray(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                }(e) || function _nonIterableSpread() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                }();
            }
            var i = Object.is || function(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            };
            function shallowEqual(e, t) {
                if ("object" !== _typeof(e) && "object" !== _typeof(t)) return e === t;
                if (null === e && null === t) return !0;
                if (null === e || null === t) return !1;
                if (i(e, t)) return !0;
                var n = e ? Object.keys(e) : [], r = t ? Object.keys(t) : [];
                if (n.length !== r.length) return !1;
                for (var o = 0; o < n.length; o++) {
                    var a = n[o];
                    if (!t.hasOwnProperty(a) || !i(e[a], t[a])) return !1;
                }
                return !0;
            }
            var n = function() {
                function SimpleMap() {
                    _classCallCheck(this, SimpleMap), this.cache = [], this.size = 0;
                }
                return _createClass(SimpleMap, [ {
                    key: "set",
                    value: function set(e, t) {
                        var n = this.cache.length;
                        if (!n) return this.cache.push({
                            k: e,
                            v: t
                        }), void (this.size += 1);
                        for (var r = 0; r < n; r++) {
                            var o = this.cache[r];
                            if (o.k === e) return void (o.v = t);
                        }
                        this.cache.push({
                            k: e,
                            v: t
                        }), this.size += 1;
                    }
                }, {
                    key: "get",
                    value: function get(e) {
                        var t = this.cache.length;
                        if (t) for (var n = 0; n < t; n++) {
                            var r = this.cache[n];
                            if (r.k === e) return r.v;
                        }
                    }
                }, {
                    key: "has",
                    value: function has(e) {
                        var t = this.cache.length;
                        if (!t) return !1;
                        for (var n = 0; n < t; n++) {
                            if (this.cache[n].k === e) return !0;
                        }
                        return !1;
                    }
                }, {
                    key: "delete",
                    value: function _delete(e) {
                        for (var t = this.cache.length, n = 0; n < t; n++) {
                            if (this.cache[n].k === e) return this.cache.splice(n, 1), --this.size, !0;
                        }
                        return !1;
                    }
                }, {
                    key: "clear",
                    value: function clear() {
                        var e = this.cache.length;
                        if (this.size = 0, e) for (;e; ) this.cache.pop(), e--;
                    }
                } ]), SimpleMap;
            }();
            function getCurrentPageUrl() {
                var e = getCurrentPages(), t = e[e.length - 1];
                return function addLeadingSlash(e) {
                    return "/" === e.charAt(0) ? e : "/" + e;
                }(t.route || t.__route__);
            }
            var c = function nextTick(e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                e = "function" == typeof e ? e.bind.apply(e, [ null ].concat(n)) : e, (wx.nextTick ? wx.nextTick : setTimeout)(e);
            }, r = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
            function unwrapExports(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
            }
            function createCommonjsModule(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports;
            }
            var o = createCommonjsModule(function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "function" == typeof Symbol && Symbol.for, r = n ? Symbol.for("react.element") : 60103, o = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, c = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110, f = n ? Symbol.for("react.async_mode") : 60111, l = n ? Symbol.for("react.concurrent_mode") : 60111, p = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113, h = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115, g = n ? Symbol.for("react.lazy") : 60116, v = n ? Symbol.for("react.fundamental") : 60117, _ = n ? Symbol.for("react.responder") : 60118, b = n ? Symbol.for("react.scope") : 60119;
                function y(e) {
                    if ("object" === _typeof(e) && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                          case r:
                            switch (e = e.type) {
                              case f:
                              case l:
                              case a:
                              case s:
                              case i:
                              case d:
                                return e;

                              default:
                                switch (e = e && e.$$typeof) {
                                  case u:
                                  case p:
                                  case c:
                                    return e;

                                  default:
                                    return t;
                                }
                            }

                          case g:
                          case m:
                          case o:
                            return t;
                        }
                    }
                }
                function z(e) {
                    return y(e) === l;
                }
                t.typeOf = y, t.AsyncMode = f, t.ConcurrentMode = l, t.ContextConsumer = u, t.ContextProvider = c, 
                t.Element = r, t.ForwardRef = p, t.Fragment = a, t.Lazy = g, t.Memo = m, t.Portal = o, 
                t.Profiler = s, t.StrictMode = i, t.Suspense = d, t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === a || e === l || e === s || e === i || e === d || e === h || "object" === _typeof(e) && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === c || e.$$typeof === u || e.$$typeof === p || e.$$typeof === v || e.$$typeof === _ || e.$$typeof === b);
                }, t.isAsyncMode = function(e) {
                    return z(e) || y(e) === f;
                }, t.isConcurrentMode = z, t.isContextConsumer = function(e) {
                    return y(e) === u;
                }, t.isContextProvider = function(e) {
                    return y(e) === c;
                }, t.isElement = function(e) {
                    return "object" === _typeof(e) && null !== e && e.$$typeof === r;
                }, t.isForwardRef = function(e) {
                    return y(e) === p;
                }, t.isFragment = function(e) {
                    return y(e) === a;
                }, t.isLazy = function(e) {
                    return y(e) === g;
                }, t.isMemo = function(e) {
                    return y(e) === m;
                }, t.isPortal = function(e) {
                    return y(e) === o;
                }, t.isProfiler = function(e) {
                    return y(e) === s;
                }, t.isStrictMode = function(e) {
                    return y(e) === i;
                }, t.isSuspense = function(e) {
                    return y(e) === d;
                };
            });
            unwrapExports(o);
            o.typeOf, o.AsyncMode, o.ConcurrentMode, o.ContextConsumer, o.ContextProvider, o.Element, 
            o.ForwardRef, o.Fragment, o.Lazy, o.Memo, o.Portal, o.Profiler, o.StrictMode, o.Suspense, 
            o.isValidElementType, o.isAsyncMode, o.isConcurrentMode, o.isContextConsumer, o.isContextProvider, 
            o.isElement, o.isForwardRef, o.isFragment, o.isLazy, o.isMemo, o.isPortal, o.isProfiler, 
            o.isStrictMode, o.isSuspense;
            var s = createCommonjsModule(function(e, t) {
                0;
            });
            unwrapExports(s);
            s.typeOf, s.AsyncMode, s.ConcurrentMode, s.ContextConsumer, s.ContextProvider, s.Element, 
            s.ForwardRef, s.Fragment, s.Lazy, s.Memo, s.Portal, s.Profiler, s.StrictMode, s.Suspense, 
            s.isValidElementType, s.isAsyncMode, s.isConcurrentMode, s.isContextConsumer, s.isContextProvider, 
            s.isElement, s.isForwardRef, s.isFragment, s.isLazy, s.isMemo, s.isPortal, s.isProfiler, 
            s.isStrictMode, s.isSuspense, createCommonjsModule(function(e) {
                e.exports = o;
            });
            var u = Object.getOwnPropertySymbols, f = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
            !function shouldUseNative() {
                try {
                    if (!Object.assign) return;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e];
                    }).join("")) return;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                        r[e] = e;
                    }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, r)).join("") ? void 0 : 1;
                } catch (e) {
                    return;
                }
            }() || Object.assign;
            var d = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            Function.call.bind(Object.prototype.hasOwnProperty);
            function emptyFunction() {}
            function emptyFunctionWithReset() {}
            emptyFunctionWithReset.resetWarningCache = emptyFunction;
            var h = createCommonjsModule(function(e) {
                e.exports = function factoryWithThrowingShims() {
                    function shim(e, t, n, r, o, a) {
                        if (a !== d) {
                            var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw i.name = "Invariant Violation", i;
                        }
                    }
                    function getShim() {
                        return shim;
                    }
                    var e = {
                        array: shim.isRequired = shim,
                        bool: shim,
                        func: shim,
                        number: shim,
                        object: shim,
                        string: shim,
                        symbol: shim,
                        any: shim,
                        arrayOf: getShim,
                        element: shim,
                        elementType: shim,
                        instanceOf: getShim,
                        node: shim,
                        objectOf: getShim,
                        oneOf: getShim,
                        oneOfType: getShim,
                        shape: getShim,
                        exact: getShim,
                        checkPropTypes: emptyFunctionWithReset,
                        resetWarningCache: emptyFunction
                    };
                    return e.PropTypes = e;
                }();
            }), m = "object" == _typeof(r) && r && r.Object === Object && r, g = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self, v = (m || g || {
                Function: Function,
                Boolean: Boolean,
                Object: Object,
                Number: Number,
                Array: Array,
                Date: Date,
                String: String,
                Symbol: Symbol,
                Error: Error,
                TypeError: TypeError,
                Map: Map,
                Set: Set,
                WeakMap: WeakMap,
                WeakSet: WeakSet,
                ArrayBuffer: ArrayBuffer,
                Math: Math,
                Promise: Promise,
                RegExp: RegExp,
                DataView: DataView,
                isFinite: isFinite,
                parseInt: parseInt,
                parseFloat: parseFloat,
                Float32Array: Float32Array,
                Float64Array: Float64Array,
                Int8Array: Int8Array,
                Int16Array: Int16Array,
                Int32Array: Int32Array,
                Uint8Array: Uint8Array,
                Uint16Array: Uint16Array,
                Uint32Array: Uint32Array,
                Uint8ClampedArray: Uint8ClampedArray,
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                setInterval: setInterval,
                clearInterval: clearInterval
            }).Symbol, _ = Object.prototype, b = _.hasOwnProperty, C = _.toString, S = v ? v.toStringTag : void 0;
            var P = function getRawTag(e) {
                var t = b.call(e, S), n = e[S];
                try {
                    e[S] = void 0;
                } catch (e) {}
                var r = C.call(e);
                return t ? e[S] = n : delete e[S], r;
            }, w = Object.prototype.toString;
            var A = function objectToString(e) {
                return w.call(e);
            }, O = v ? v.toStringTag : void 0;
            var E = function baseGetTag(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : (O && O in Object(e) ? P : A)(e);
            };
            var j = function overArg(t, n) {
                return function(e) {
                    return t(n(e));
                };
            }(Object.getPrototypeOf, Object);
            var k = function isObjectLike(e) {
                return null != e && "object" == _typeof(e);
            }, T = Function.prototype, R = Object.prototype, x = T.toString, $ = R.hasOwnProperty, I = x.call(Object);
            var D = function isPlainObject(e) {
                if (!k(e) || "[object Object]" != E(e)) return !1;
                var t = j(e);
                if (null === t) return !0;
                var n = $.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && x.call(n) == I;
            };
            function isEmptyObject(e) {
                if (e && D(e)) {
                    for (var t in e) if (e.hasOwnProperty(t)) return;
                    return 1;
                }
            }
            function isUndefined(e) {
                return void 0 === e;
            }
            function isFunction(e) {
                return "function" == typeof e;
            }
            function isArray(e) {
                return Array.isArray(e);
            }
            var M = Object.keys, L = Object.prototype.hasOwnProperty;
            function diffObjToPath(c, u, e, t) {
                for (var f = 2 < arguments.length && void 0 !== e ? e : {}, l = 3 < arguments.length && void 0 !== t ? t : "", p = M(c), n = p.length, r = function _loop2(e) {
                    var t = p[e], n = c[t], r = u[t], o = "".concat(l).concat(t);
                    if (/^\$compid__/.test(t)) f[o] = n; else {
                        if (n === r) return "continue";
                        if (L.call(u, t)) if (_typeof(n) !== _typeof(r)) f[o] = n; else if ("object" !== _typeof(n)) f[o] = n; else {
                            var a = isArray(n), i = isArray(r);
                            if (a !== i) f[o] = n; else if (a && i) n.length < r.length ? f[o] = n : function diffArrToPath(s, c, e, t) {
                                for (var u = 2 < arguments.length && void 0 !== e ? e : {}, f = 3 < arguments.length && void 0 !== t ? t : "", n = s.length, r = function _loop(e) {
                                    var t = s[e], n = c[e], r = "".concat(f, "[").concat(e, "]");
                                    if (t === n) return "continue";
                                    if (_typeof(t) !== _typeof(n)) u[r] = t; else if ("object" !== _typeof(t)) u[r] = t; else {
                                        var o = isArray(t), a = isArray(n);
                                        if (o !== a) u[r] = t; else if (o && a) t.length < n.length ? u[r] = t : diffArrToPath(t, n, u, "".concat(r)); else if (!t || !n || M(t).length < M(n).length) u[r] = t; else {
                                            var i = D(t);
                                            i && Object.keys(n).some(function(e) {
                                                if (void 0 === t[e] && void 0 !== n[e]) return !(i = !1);
                                            }), i ? diffObjToPath(t, n, u, "".concat(r, ".")) : u[r] = t;
                                        }
                                    }
                                }, o = 0; o < n; o++) r(o);
                                return u;
                            }(n, r, f, "".concat(o)); else if (n && r) {
                                var s = D(n);
                                s && Object.keys(r).some(function(e) {
                                    if (void 0 === n[e] && void 0 !== r[e]) return !(s = !1);
                                }), s ? diffObjToPath(n, r, f, "".concat(o, ".")) : f[o] = n;
                            } else f[o] = n;
                        } else f[o] = n;
                    }
                }, o = 0; o < n; o++) r(o);
                return f;
            }
            function queryToJson(e) {
                for (var t, n, r, o = decodeURIComponent, a = e.split("&"), i = {}, s = 0, c = a.length; s < c; ++s) if ((r = a[s]).length) {
                    var u = r.indexOf("=");
                    n = u < 0 ? (t = o(r), "") : (t = o(r.slice(0, u)), o(r.slice(u + 1))), "string" == typeof i[t] && (i[t] = [ i[t] ]), 
                    isArray(i[t]) ? i[t].push(n) : i[t] = n;
                }
                return i;
            }
            var U = new Date().getTime().toString(), F = 1;
            function getUniqueKey() {
                return U + F++;
            }
            var B, W = 0;
            function genId() {
                return String(W++);
            }
            try {
                B = new Map();
            } catch (e) {
                B = new n();
            }
            var N = 0;
            var H = {};
            function cacheDataSet(e, t) {
                H[e] = t;
            }
            function cacheDataGet(e, t) {
                var n = H[e];
                return t && delete H[e], n;
            }
            function cacheDataHas(e) {
                return e in H;
            }
            var q = new (function() {
                function Manager() {
                    _classCallCheck(this, Manager), _defineProperty(this, "map", {}), _defineProperty(this, "observers", {});
                }
                return _createClass(Manager, [ {
                    key: "set",
                    value: function set(e, t, n) {
                        var r = 0 < arguments.length && void 0 !== e ? e : {}, a = 1 < arguments.length ? t : void 0, o = 2 < arguments.length ? n : void 0;
                        if (a) {
                            o && this.delete(o);
                            var i = this.observers;
                            this.map[a] || Object.defineProperty(this.map, a, {
                                configurable: !0,
                                get: function get() {
                                    return this["__".concat(a)];
                                },
                                set: function set(e) {
                                    this["__".concat(a)] = e;
                                    var t = i[a] && i[a].component, n = i[a] && i[a].ComponentClass;
                                    if (t && n && t.__isReady) {
                                        var r = t.$scope && t.$scope.data && t.$scope.data.extraProps || null, o = filterProps(n.defaultProps, e, t.props, r);
                                        t.props = o, c(function() {
                                            t._unsafeCallUpdate = !0, updateComponent(t), t._unsafeCallUpdate = !1;
                                        });
                                    }
                                }
                            }), this.map[a] = r;
                        }
                    }
                }, {
                    key: "delete",
                    value: function _delete(e) {
                        delete this.map[e], delete this.map["__".concat(e)], delete this.observers[e];
                    }
                } ]), Manager;
            }())(), V = "funPrivate", G = "__key_", Q = "__preload_", K = "preload", J = "$preloadComponent", Y = [ "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap", "onResize" ];
            function bindMultipleSlots(e, t) {
                var n = t.multipleSlots;
                n && (e.options = function _objectSpread(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }))), r.forEach(function(e) {
                            _defineProperty(t, e, n[e]);
                        });
                    }
                    return t;
                }({}, e.options, {
                    multipleSlots: n
                }));
            }
            function bindEvents(e, t) {
                e.methods = e.methods || {};
                var n = e.methods;
                t.forEach(function(e) {
                    !function processEvent(p, e) {
                        e[p] || (e[p] = function(e) {
                            e && (e.preventDefault = function() {}, e.stopPropagation = function() {}, e.currentTarget = e.currentTarget || e.target || {}, 
                            e.target && Object.assign(e.target, e.detail), Object.assign(e.currentTarget, e.detail));
                            var t = this.$component, n = t, r = -1 < p.indexOf(V), o = [], a = [], i = [], s = !1, c = e.currentTarget.dataset || {}, u = {}, f = e.type.toLocaleLowerCase();
                            if (Object.keys(c).forEach(function(e) {
                                var t = e.toLocaleLowerCase();
                                if (/^e/.test(t) && 0 <= (t = t.replace(/^e/, "")).indexOf(f)) {
                                    var n = t.replace(f, "");
                                    /^(a[a-z]|so)$/.test(n) && (u[n] = c[e]);
                                }
                            }), e.detail && e.detail.__arguments && 0 < e.detail.__arguments.length && (a = e.detail.__arguments), 
                            r) {
                                var l = null;
                                "so" in u && ("this" !== u.so && (l = u.so), s = !0, delete u.so), 0 < a.length && (!s && a[0] && (n = a[0]), 
                                a.shift()), isEmptyObject(u) || (i = Object.keys(u).sort().map(function(e) {
                                    return u[e];
                                })), o = [ l ].concat(_toConsumableArray(i), _toConsumableArray(a), [ e ]);
                            } else "so" in u && ("this" !== u.so && (n = u.so), s = !0, delete u.so), 0 < a.length && (!s && a[0] && (n = a[0]), 
                            a.shift()), isEmptyObject(u) || (i = Object.keys(u).sort().map(function(e) {
                                return u[e];
                            })), o = _toConsumableArray(i).concat(_toConsumableArray(a), [ e ]);
                            return t[p].apply(n, o);
                        });
                    }(e, n);
                });
            }
            function filterProps(e, t, n, r) {
                var o = 0 < arguments.length && void 0 !== e ? e : {}, a = 1 < arguments.length && void 0 !== t ? t : {}, i = 2 < arguments.length && void 0 !== n ? n : {}, s = 3 < arguments.length ? r : void 0, c = Object.assign({}, i, a);
                if (!isEmptyObject(o)) for (var u in o) void 0 === c[u] && (c[u] = o[u]);
                return s && (c = Object.assign({}, c, s)), c;
            }
            function componentTrigger(n, e, t) {
                var r;
                if (t = t || [], "componentDidMount" === e) {
                    if (n.$$refs && 0 < n.$$refs.length) {
                        var o = {};
                        n.$$refs.forEach(function(e) {
                            var t;
                            "component" === e.type ? t = (t = n.$scope.selectComponent("#".concat(e.id))) ? t.$component || t : null : t = wx.createSelectorQuery().in(n.$scope).select("#".concat(e.id));
                            p.commitAttachRef(e, t, n, o, !0), e.target = t;
                        }), n.refs = Object.assign({}, n.refs || {}, o);
                    }
                    n.$$hasLoopRef && (p.Current.current = n, p.Current.index = 0, n._disableEffect = !0, 
                    n._createData(n.state, n.props, !0), n._disableEffect = !1, p.Current.current = null);
                }
                if ("componentWillUnmount" === e) {
                    var a = n.$scope.data.compid;
                    a && q.delete(a);
                }
                n[e] && "function" == typeof n[e] && (r = n[e]).call.apply(r, [ n ].concat(_toConsumableArray(t))), 
                "componentWillMount" === e && (n._dirty = !1, n._disable = !1, n.state = n.getState()), 
                "componentWillUnmount" === e && (n._dirty = !0, n._disable = !0, n.$router = {
                    params: {},
                    path: ""
                }, n._pendingStates = [], n._pendingCallbacks = [], p.detachAllRef(n));
            }
            function initComponent(e, t) {
                if (!this.$component.__isReady) {
                    if (this.$component.__isReady = !0, t) this.$component.$router.path = getCurrentPageUrl(); else {
                        var n = this.data.compid;
                        n && (q.observers[n] = {
                            component: this.$component,
                            ComponentClass: e
                        });
                        var r = filterProps(e.defaultProps, q.map[n], this.$component.props, this.data.extraProps);
                        this.$component.props = r;
                    }
                    !function mountComponent(e) {
                        var t = e.props;
                        e.__componentWillMountTriggered || e._constructor && e._constructor(t);
                        var n = callGetDerivedStateFromProps(e, t, e.state);
                        isUndefined(n) || (e.state = n);
                        e._dirty = !1, e._disable = !1, e._isForceUpdate = !1, e.__componentWillMountTriggered || (e.__componentWillMountTriggered = !0, 
                        hasNewLifecycle(e) || componentTrigger(e, "componentWillMount"));
                        doUpdate(e, t, e.state), e.prevProps = e.props, e.prevState = e.state;
                    }(this.$component);
                }
            }
            var X = void 0 === t || !t.env || !1;
            function hasNewLifecycle(e) {
                var t = e.constructor.getDerivedStateFromProps, n = e.getSnapshotBeforeUpdate;
                return isFunction(t) || isFunction(n);
            }
            function callGetDerivedStateFromProps(e, t, n) {
                var r, o = e.constructor.getDerivedStateFromProps;
                if (isFunction(o)) {
                    var a = o(t, n);
                    isUndefined(a) ? console.warn("getDerivedStateFromProps 没有返回任何内容，这个生命周期必须返回 null 或一个新对象。") : r = Object.assign({}, n, a);
                }
                return r;
            }
            function updateComponent(e) {
                var t = e.props, n = e.__propTypes;
                if (X && n) {
                    var r = e.constructor.name;
                    if (isUndefined(r)) {
                        var o = e.constructor.toString().match(/^function\s*([^\s(]+)/);
                        r = isArray(o) ? o[0] : "Component";
                    }
                    h.checkPropTypes(n, t, "prop", r);
                }
                var a = e.prevProps || t;
                e.props = a, e.__mounted && !0 === e._unsafeCallUpdate && !hasNewLifecycle(e) && e.componentWillReceiveProps && (e._disable = !0, 
                e.componentWillReceiveProps(t), e._disable = !1);
                var i = e.getState(), s = e.prevState || i, c = callGetDerivedStateFromProps(e, t, i);
                isUndefined(c) || (i = c);
                var u = !1;
                e.__mounted && ("function" != typeof e.shouldComponentUpdate || e._isForceUpdate || !1 !== e.shouldComponentUpdate(t, i) ? !hasNewLifecycle(e) && isFunction(e.componentWillUpdate) && e.componentWillUpdate(t, i) : u = !0), 
                e.props = t, e.state = i, e._dirty = !1, e._isForceUpdate = !1, u || doUpdate(e, a, s), 
                e.prevProps = e.props, e.prevState = e.state;
            }
            function doUpdate(n, t, r) {
                var e = n.state, o = n.props, a = void 0 === o ? {} : o, i = e || {};
                if (n._createData && (n.__isReady && (!function injectContextType(t) {
                    var e = t.constructor.contextType;
                    if (e) {
                        var n = e.context, r = n.emitter;
                        if (null === r) return void (t.context = n._defaultValue);
                        t._hasContext || (t._hasContext = !0, r.on(function(e) {
                            return enqueueRender(t);
                        })), t.context = r.value;
                    }
                }(n), p.Current.current = n, p.Current.index = 0, p.invokeEffects(n, !0)), i = n._createData(e, a) || i, 
                n.__isReady && (p.Current.current = null)), i = Object.assign({}, a, i), n.$usedState && n.$usedState.length) {
                    var s = {};
                    n.$usedState.forEach(function(e) {
                        var t = p.internal_safe_get(i, e);
                        if (void 0 !== t) if ("object" === _typeof(t)) {
                            if (isEmptyObject(t)) return p.internal_safe_set(s, e, {});
                            isEmptyObject(t = function cloneDeep(e) {
                                var t;
                                if (isArray(e)) {
                                    t = [];
                                    for (var n = e.length, r = 0; r < n; r++) t.push(cloneDeep(e[r]));
                                } else {
                                    if (!D(e)) return e;
                                    for (var o in t = {}, e) {
                                        var a = cloneDeep(e[o]);
                                        t[o] = a;
                                    }
                                }
                                return t;
                            }(t)) || p.internal_safe_set(s, e, t);
                        } else p.internal_safe_set(s, e, t);
                    }), i = s;
                }
                i.$taroCompReady = !0;
                var c, u = p.getIsUsingDiff() ? diffObjToPath(i, n.$scope.data) : i, f = n.__mounted;
                f && (c = function callGetSnapshotBeforeUpdate(e, t, n) {
                    var r, o = e.getSnapshotBeforeUpdate;
                    return isFunction(o) && (r = o.call(e, t, n)), r;
                }(n, t, r));
                var l = [];
                n._pendingCallbacks && n._pendingCallbacks.length && (l = n._pendingCallbacks, n._pendingCallbacks = []);
                function Al() {
                    if (f && (p.invokeEffects(n), n.$$refs && 0 < n.$$refs.length && n.$$refs.forEach(function(e) {
                        if ("component" === e.type) {
                            var t = n.$scope.selectComponent("#".concat(e.id));
                            (t = t ? t.$component || t : null) !== e.target && (p.commitAttachRef(e, t, n, n.refs), 
                            e.target = t);
                        }
                    }), n.$$hasLoopRef && (p.Current.current = n, p.Current.index = 0, n._disableEffect = !0, 
                    n._createData(n.state, n.props, !0), n._disableEffect = !1, p.Current.current = null), 
                    isFunction(n.componentDidUpdate) && n.componentDidUpdate(t, r, c)), l.length) for (var e = l.length; 0 <= --e; ) "function" == typeof l[e] && l[e].call(n);
                }
                0 === Object.keys(u).length ? Al() : n.$scope.setData(u, Al);
            }
            var Z = [];
            function enqueueRender(e, t) {
                var n = 1 < arguments.length && void 0 !== t && t;
                e._isForceUpdate = n, !e._dirty && (e._dirty = !0) && 1 === Z.push(e) && c(function() {
                    !function rerender() {
                        var e, t = Z;
                        Z = [];
                        for (;e = t.pop(); ) e._dirty && updateComponent(e);
                    }();
                });
            }
            var ee = "preload", te = function() {
                function BaseComponent() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = 1 < arguments.length ? arguments[1] : void 0;
                    _classCallCheck(this, BaseComponent), _defineProperty(this, "__computed", {}), _defineProperty(this, "__props", {}), 
                    _defineProperty(this, "__isReady", !1), _defineProperty(this, "__mounted", !1), 
                    _defineProperty(this, "context", {}), _defineProperty(this, "_dirty", !0), _defineProperty(this, "_disable", !0), 
                    _defineProperty(this, "_isForceUpdate", !1), _defineProperty(this, "_pendingStates", []), 
                    _defineProperty(this, "_pendingCallbacks", []), _defineProperty(this, "$componentType", ""), 
                    _defineProperty(this, "$router", {
                        params: {},
                        path: ""
                    }), _defineProperty(this, "_afterScheduleEffect", !1), _defineProperty(this, "_disableEffect", !1), 
                    _defineProperty(this, "hooks", []), _defineProperty(this, "effects", []), _defineProperty(this, "layoutEffects", []), 
                    this.state = {}, this.props = e, this.$componentType = t ? "PAGE" : "COMPONENT", 
                    this.$prefix = function genCompPrefix() {
                        return String(N++);
                    }(), this.isTaroComponent = this.$componentType && this.$router && this._pendingStates;
                }
                return _createClass(BaseComponent, [ {
                    key: "_constructor",
                    value: function _constructor(e) {
                        this.props = e || {};
                    }
                }, {
                    key: "_init",
                    value: function _init(e) {
                        this.$scope = e;
                    }
                }, {
                    key: "setState",
                    value: function setState(e, t) {
                        e && (this._pendingStates = this._pendingStates || []).push(e), isFunction(t) && (this._pendingCallbacks = this._pendingCallbacks || []).push(t), 
                        this._disable || enqueueRender(this, t === p.internal_force_update);
                    }
                }, {
                    key: "getState",
                    value: function getState() {
                        var t = this, e = this._pendingStates, n = this.state, r = this.props, o = Object.assign({}, n);
                        if (delete o.__data, !e.length) return o;
                        var a = e.concat();
                        return this._pendingStates.length = 0, a.forEach(function(e) {
                            isFunction(e) && (e = e.call(t, o, r)), Object.assign(o, e);
                        }), o;
                    }
                }, {
                    key: "forceUpdate",
                    value: function forceUpdate(e) {
                        isFunction(e) && (this._pendingCallbacks = this._pendingCallbacks || []).push(e), 
                        this._isForceUpdate = !0, updateComponent(this);
                    }
                }, {
                    key: "$preload",
                    value: function $preload(e, t) {
                        var n = cacheDataGet(ee) || {};
                        if ("object" === _typeof(e)) for (var r in e) n[r] = e[r]; else n[e] = t;
                        cacheDataSet(ee, n);
                    }
                }, {
                    key: "__triggerPropsFn",
                    value: function __triggerPropsFn(e, t) {
                        var n = e.split("."), r = "__event_" + n.shift();
                        if (r in this) {
                            var o = t.shift();
                            (0 < n.length ? p.internal_safe_get(this[r], n.join(".")) : this[r]).apply(o, t);
                        } else {
                            var a = e.toLocaleLowerCase(), i = {
                                __isCustomEvt: !0,
                                __arguments: t
                            };
                            0 < t.length && (i.value = t.slice(1)), this.$scope.triggerEvent(a, i);
                        }
                    }
                } ]), BaseComponent;
            }(), ne = function() {
                function PureComponent() {
                    var e, t;
                    _classCallCheck(this, PureComponent);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return t = function _possibleConstructorReturn(e, t) {
                        return !t || "object" !== (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? _assertThisInitialized(e) : t;
                    }(this, (e = _getPrototypeOf(PureComponent)).call.apply(e, [ this ].concat(r))), 
                    _defineProperty(_assertThisInitialized(_assertThisInitialized(t)), "isPureComponent", !0), 
                    t;
                }
                return function _inherits(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _setPrototypeOf(e, t);
                }(PureComponent, te), _createClass(PureComponent, [ {
                    key: "shouldComponentUpdate",
                    value: function shouldComponentUpdate(e, t) {
                        return !shallowEqual(this.props, e) || !shallowEqual(this.state, t);
                    }
                } ]), PureComponent;
            }();
            var re = {
                MAX_REQUEST: 10,
                queue: [],
                pendingQueue: [],
                request: function request(e) {
                    return this.queue.push(e), this.run();
                },
                run: function run() {
                    var i = this;
                    if (this.queue.length) for (var e = function _loop() {
                        var r = i.queue.shift(), o = r.success, a = r.fail;
                        return r.success = function() {
                            i.pendingQueue = i.pendingQueue.filter(function(e) {
                                return e !== r;
                            }), i.run();
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            o && o.apply(r, t);
                        }, r.fail = function() {
                            i.pendingQueue = i.pendingQueue.filter(function(e) {
                                return e !== r;
                            }), i.run();
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            a && a.apply(r, t);
                        }, i.pendingQueue.push(r), {
                            v: wx.request(r)
                        };
                    }; this.pendingQueue.length < this.MAX_REQUEST; ) {
                        var t = e();
                        if ("object" === _typeof(t)) return t.v;
                    }
                }
            };
            var oe = new p.Link(function taroInterceptor(e) {
                return function request(e) {
                    "string" == typeof (e = e || {}) && (e = {
                        url: e
                    });
                    var r, o = e.success, a = e.fail, i = e.complete, t = new Promise(function(t, n) {
                        e.success = function(e) {
                            o && o(e), t(e);
                        }, e.fail = function(e) {
                            a && a(e), n(e);
                        }, e.complete = function(e) {
                            i && i(e);
                        }, r = re.request(e);
                    });
                    return t.abort = function(e) {
                        return e && e(), r && r.abort(), t;
                    }, t;
                }(e.requestParams);
            });
            function canIUseWebp() {
                var e = wx.getSystemInfoSync().platform.toLowerCase();
                return "android" === e || "devtools" === e;
            }
            function initNativeApi(e) {
                !function processApis(e) {
                    var t = Object.assign({}, p.onAndSyncApis, p.noPromiseApis, p.otherApis), C = {
                        navigateTo: !0,
                        redirectTo: !0,
                        reLaunch: !0
                    };
                    Object.keys(t).forEach(function(b) {
                        b in wx ? p.onAndSyncApis[b] || p.noPromiseApis[b] ? e[b] = function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            var r = t.length, o = t.concat(), a = o[r - 1];
                            return a && a.isTaroComponent && a.$scope && o.splice(r - 1, 1, a.$scope), wx[b].apply(wx, o);
                        } : e[b] = function(o) {
                            for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
                            o = o || {};
                            var r, a = null, i = Object.assign({}, o);
                            if ("string" == typeof o) return t.length ? (r = wx)[b].apply(r, [ o ].concat(t)) : wx[b](o);
                            if ("navigateTo" === b || "redirectTo" === b) {
                                var s = i.url ? i.url.replace(/^\//, "") : "";
                                -1 < s.indexOf("?") && (s = s.split("?")[0]);
                                var c = cacheDataGet(s);
                                if (c) {
                                    var u = new c();
                                    if (u.componentWillPreload) {
                                        var f = getUniqueKey(), l = i.url.indexOf("?"), p = -1 < l, d = queryToJson(p ? i.url.substring(l + 1, i.url.length) : "");
                                        i.url += (p ? "&" : "?") + "".concat("__preload_", "=").concat(f), cacheDataSet(f, u.componentWillPreload(d)), 
                                        cacheDataSet("$preloadComponent", u);
                                    }
                                }
                            }
                            if (C[b]) {
                                var h = i.url = i.url || "", y = h.indexOf("?"), m = -1 < y, g = queryToJson(m ? h.substring(y + 1, h.length) : ""), v = getUniqueKey();
                                i.url += (m ? "&" : "?") + "".concat("__key_", "=").concat(v), cacheDataSet(v, g);
                            }
                            var _ = new Promise(function(n, r) {
                                var e;
                                ([ "fail", "success", "complete" ].forEach(function(t) {
                                    i[t] = function(e) {
                                        o[t] && o[t](e), "success" === t ? n("connectSocket" === b ? Promise.resolve().then(function() {
                                            return Object.assign(a, e);
                                        }) : e) : "fail" === t && r(e);
                                    };
                                }), t.length) ? a = (e = wx)[b].apply(e, [ i ].concat(t)) : a = wx[b](i);
                            });
                            return "uploadFile" !== b && "downloadFile" !== b || (_.progress = function(e) {
                                return a && a.onProgressUpdate(e), _;
                            }, _.headersReceived = function(e) {
                                return a && a.onHeadersReceived(e), _;
                            }, _.abort = function(e) {
                                return e && e(), a && a.abort(), _;
                            }), _;
                        } : e[b] = function() {
                            console.warn("微信小程序暂不支持 ".concat(b));
                        };
                    });
                }(e), e.request = oe.request.bind(oe), e.addInterceptor = oe.addInterceptor.bind(oe), 
                e.cleanInterceptors = oe.cleanInterceptors.bind(oe), e.getCurrentPages = getCurrentPages, 
                e.getApp = getApp, e.requirePlugin = requirePlugin, e.initPxTransform = p.initPxTransform.bind(e), 
                e.pxTransform = function pxTransform(e) {
                    var t = this.config || {}, n = t.designWidth, r = void 0 === n ? 750 : n, o = t.deviceRatio, a = void 0 === o ? {
                        640: 1.17,
                        750: 1,
                        828: .905
                    } : o;
                    if (!(r in a)) throw new Error("deviceRatio 配置中不存在 ".concat(r, " 的设置！"));
                    return parseInt(e, 10) / a[r] + "rpx";
                }.bind(e), e.canIUseWebp = canIUseWebp, function wxCloud(e) {
                    var t = wx.cloud || {}, n = {};
                    [ "init", "database", "uploadFile", "downloadFile", "getTempFileURL", "deleteFile", "callFunction", "CloudID" ].forEach(function(e) {
                        n[e] = t[e];
                    }), e.cloud = n;
                }(e), function wxEnvObj(e) {
                    var t = wx.env || {}, n = {};
                    [ "USER_DATA_PATH" ].forEach(function(e) {
                        return n[e] = t[e];
                    }), e.env = n;
                }(e);
            }
            var ae = {
                Component: te,
                PureComponent: ne,
                createApp: function createApp(e) {
                    var t = new e(), n = {
                        onLaunch: function onLaunch(e) {
                            t.$app = this, t.$app.$router = t.$router = {
                                params: e
                            }, t.componentWillMount && t.componentWillMount(), t.componentDidMount && t.componentDidMount();
                        },
                        onShow: function onShow(e) {
                            Object.assign(t.$router.params, e), t.componentDidShow && t.componentDidShow();
                        },
                        onHide: function onHide() {
                            t.componentDidHide && t.componentDidHide();
                        },
                        onError: function onError(e) {
                            t.componentDidCatchError && t.componentDidCatchError(e);
                        },
                        onPageNotFound: function onPageNotFound(e) {
                            t.componentDidNotFound && t.componentDidNotFound(e);
                        }
                    };
                    return Object.assign(n, t);
                },
                initNativeApi: initNativeApi,
                Events: p.Events,
                eventCenter: p.eventCenter,
                getEnv: p.getEnv,
                createRef: p.createRef,
                render: p.render,
                ENV_TYPE: p.ENV_TYPE,
                internal_safe_get: p.internal_safe_get,
                internal_safe_set: p.internal_safe_set,
                internal_inline_style: p.internal_inline_style,
                createComponent: function createComponent(r, o) {
                    var e = {}, t = filterProps(r.defaultProps), a = new r(t);
                    a._constructor && a._constructor(t);
                    try {
                        p.Current.current = a, p.Current.index = 0, a.state = a._createData() || a.state;
                    } catch (e) {
                        o ? console.warn("[Taro warn] 请给页面提供初始 `state` 以提高初次渲染性能！") : console.warn("[Taro warn] 请给组件提供一个 `defaultProps` 以提高初次渲染性能！"), 
                        console.warn(e);
                    }
                    var i = {
                        data: e = Object.assign({}, e, a.props, a.state),
                        created: function created(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : {};
                            o && cacheDataHas(J) ? (this.$component = cacheDataGet(J, !0), this.$component.$componentType = "PAGE") : this.$component = new r({}, o), 
                            this.$component._init(this), this.$component.render = this.$component._createData, 
                            this.$component.__propTypes = r.propTypes, Object.assign(this.$component.$router.params, t);
                        },
                        attached: function attached() {
                            var e;
                            if (o) {
                                var t = {};
                                if (t = (e = cacheDataHas(this.data[G])) ? Object.assign({}, r.defaultParams, cacheDataGet(this.data[G], !0)) : function filterParams(e, t) {
                                    var n = 1 < arguments.length && void 0 !== t ? t : {}, r = {};
                                    for (var o in n) r[o] = o in e ? e[o] : n[o];
                                    return r;
                                }(this.data, r.defaultParams), cacheDataHas(K)) {
                                    var n = cacheDataGet(K, !0);
                                    this.$component.$router.preload = n;
                                }
                                Object.assign(this.$component.$router.params, t), cacheDataHas(this.data[Q]) ? this.$component.$preloadData = cacheDataGet(this.data[Q], !0) : this.$component.$preloadData = null;
                            }
                            !e && o || initComponent.apply(this, [ r, o ]);
                        },
                        ready: function ready() {
                            o || this.$component.__mounted || (this.$component.__mounted = !0, componentTrigger(this.$component, "componentDidMount"));
                        },
                        detached: function detached() {
                            var e = this.$component;
                            componentTrigger(e, "componentWillUnmount"), e.hooks.forEach(function(e) {
                                isFunction(e.cleanup) && e.cleanup();
                            });
                            var t = e.$$renderPropsEvents;
                            isArray(t) && t.forEach(function(e) {
                                return p.eventCenter.off(e);
                            });
                        }
                    };
                    return o ? (i.methods = i.methods || {}, i.methods.onLoad = function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.$component.__isReady || (Object.assign(this.$component.$router.params, e), 
                        initComponent.apply(this, [ r, o ]));
                    }, i.methods.onReady = function() {
                        this.$component.__mounted = !0, componentTrigger(this.$component, "componentDidMount");
                    }, i.methods.onShow = function() {
                        componentTrigger(this.$component, "componentDidShow");
                    }, i.methods.onHide = function() {
                        componentTrigger(this.$component, "componentDidHide");
                    }, Y.forEach(function(n) {
                        a[n] && "function" == typeof a[n] && (i.methods[n] = function() {
                            var e, t = this.$component;
                            if (t && t[n] && "function" == typeof t[n]) return (e = t[n]).call.apply(e, [ t ].concat(Array.prototype.slice.call(arguments)));
                        });
                    }), __wxRoute && cacheDataSet(__wxRoute, r)) : (i.pageLifetimes = i.pageLifetimes || {}, 
                    i.pageLifetimes.show = function() {
                        componentTrigger(this.$component, "componentDidShow");
                    }, i.pageLifetimes.hide = function() {
                        componentTrigger(this.$component, "componentDidHide");
                    }, i.pageLifetimes.resize = function() {
                        componentTrigger(this.$component, "onResize");
                    }), function bindProperties(e, i, s) {
                        if (e.properties = {}, s) {
                            e.properties[G] = {
                                type: null,
                                value: null
                            }, e.properties[Q] = {
                                type: null,
                                value: null
                            };
                            var t = i.defaultParams || {};
                            for (var n in t) t.hasOwnProperty(n) && (e.properties[n] = {
                                type: null,
                                value: null
                            });
                        }
                        e.properties.compid = {
                            type: null,
                            value: null,
                            observer: function observer(e, t) {
                                var n = this;
                                if (initComponent.apply(this, [ i, s ]), t && t !== e) {
                                    var r = this.data.extraProps, o = this.$component;
                                    q.observers[e] = {
                                        component: o,
                                        ComponentClass: o.constructor
                                    };
                                    var a = filterProps(o.constructor.defaultProps, q.map[e], o.props, r || null);
                                    this.$component.props = a, c(function() {
                                        n.$component._unsafeCallUpdate = !0, updateComponent(n.$component), n.$component._unsafeCallUpdate = !1;
                                    });
                                }
                            }
                        }, e.properties.extraProps = {
                            type: null,
                            value: null,
                            observer: function observer() {
                                var e = this;
                                if (this.$component && this.$component.__isReady) {
                                    var t = filterProps(i.defaultProps, {}, this.$component.props, this.data.extraProps);
                                    this.$component.props = t, c(function() {
                                        e.$component._unsafeCallUpdate = !0, updateComponent(e.$component), e.$component._unsafeCallUpdate = !1;
                                    });
                                }
                            }
                        };
                    }(i, r, o), function bindBehaviors(e, t) {
                        t.behaviors && (e.behaviors = t.behaviors);
                    }(i, r), function bindStaticFns(t, n) {
                        for (var e in n) "function" == typeof n[e] && (t[e] = n[e]);
                        Object.getOwnPropertyNames(n).forEach(function(e) {
                            [ "arguments", "caller", "length", "name", "prototype" ].indexOf(e) < 0 && "function" == typeof n[e] && (t[e] = n[e]);
                        });
                    }(i, r), function bindStaticOptions(e, t) {
                        t.options && (e.options = t.options);
                    }(i, r), bindMultipleSlots(i, r), r.$$events && bindEvents(i, r.$$events), r.externalClasses && r.externalClasses.length && (i.externalClasses = r.externalClasses), 
                    i;
                },
                internal_get_original: p.internal_get_original,
                handleLoopRef: p.handleLoopRef(function getElementById(e, t, n) {
                    return e && (r = "component" === n ? (r = e.selectComponent(t)) ? r.$component || r : null : wx.createSelectorQuery().in(e).select(t)) || null;
                    var r;
                }),
                propsManager: q,
                interceptors: p.interceptors,
                RefsArray: p.RefsArray,
                genCompid: function genCompid(e, t) {
                    if (!p.Current || !p.Current.current || !p.Current.current.$scope) return [];
                    var n = B.get(e);
                    if (t) {
                        var r = genId();
                        return B.set(e, r), [ n, r ];
                    }
                    var o = n || genId();
                    return n || B.set(e, o), [ null, o ];
                },
                useEffect: p.useEffect,
                useLayoutEffect: p.useLayoutEffect,
                useReducer: p.useReducer,
                useState: p.useState,
                useDidShow: p.useDidShow,
                useDidHide: p.useDidHide,
                usePullDownRefresh: p.usePullDownRefresh,
                useReachBottom: p.useReachBottom,
                usePageScroll: p.usePageScroll,
                useResize: p.useResize,
                useShareAppMessage: p.useShareAppMessage,
                useTabItemTap: p.useTabItemTap,
                useRouter: p.useRouter,
                useScope: p.useScope,
                useRef: p.useRef,
                useCallback: p.useCallback,
                useMemo: p.useMemo,
                useImperativeHandle: p.useImperativeHandle,
                useContext: p.useContext,
                createContext: p.createContext,
                memo: p.memo,
                shallowEqual: shallowEqual,
                setIsUsingDiff: p.setIsUsingDiff
            };
            initNativeApi(ae), ie.Taro = ae, ie.default = ae;
        }).call(this, se(34), se(149));
    },
    84: function(e, re, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(re, "__esModule", {
                value: !0
            });
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            };
            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function _typeof(e) {
                    return void 0 === e ? "undefined" : n(e);
                } : function _typeof(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : n(e);
                })(e);
            }
            function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function _createClass(e, t, n) {
                return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
            }
            function _objectSpread(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {}, t = Object.keys(a);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                    }))), t.forEach(function(e) {
                        var t, n, r;
                        t = o, r = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r;
                    });
                }
                return o;
            }
            function _getPrototypeOf(e) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            function _setPrototypeOf(e, t) {
                return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function _construct(e, t, n) {
                return (_construct = function isNativeReflectConstruct() {
                    if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
                        if ("function" == typeof Proxy) return 1;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                            1;
                        } catch (e) {
                            return;
                        }
                    }
                }() ? Reflect.construct : function _construct(e, t, n) {
                    var r = [ null ];
                    r.push.apply(r, t);
                    var o = new (Function.bind.apply(e, r))();
                    return n && _setPrototypeOf(o, n.prototype), o;
                }).apply(null, arguments);
            }
            function _wrapNativeSuper(e) {
                var t = "function" == typeof Map ? new Map() : void 0;
                return (_wrapNativeSuper = function _wrapNativeSuper(e) {
                    if (null === e || !function _isNativeFunction(e) {
                        return -1 !== Function.toString.call(e).indexOf("[native code]");
                    }(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, Wrapper);
                    }
                    function Wrapper() {
                        return _construct(e, arguments, _getPrototypeOf(this).constructor);
                    }
                    return Wrapper.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: Wrapper,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), _setPrototypeOf(Wrapper, e);
                })(e);
            }
            function _possibleConstructorReturn(e, t) {
                return !t || "object" !== (void 0 === t ? "undefined" : n(t)) && "function" != typeof t ? function _assertThisInitialized(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function _toConsumableArray(e) {
                return function _arrayWithoutHoles(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                }(e) || function _iterableToArray(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                }(e) || function _nonIterableSpread() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                }();
            }
            "function" != typeof Object.assign && (Object.assign = function(e) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                }
                return t;
            }), "function" != typeof Object.defineProperties && (Object.defineProperties = function(e, t) {
                function convertToDescriptor(e) {
                    function hasProperty(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }
                    function isCallable(e) {
                        return "function" == typeof e;
                    }
                    if ("object" !== _typeof(e) || null === e) throw new TypeError("bad desc");
                    var t = {};
                    if (hasProperty(e, "enumerable") && (t.enumerable = !!e.enumerable), hasProperty(e, "configurable") && (t.configurable = !!e.configurable), 
                    hasProperty(e, "value") && (t.value = e.value), hasProperty(e, "writable") && (t.writable = !!e.writable), 
                    hasProperty(e, "get")) {
                        var n = e.get;
                        if (!isCallable(n) && void 0 !== n) throw new TypeError("bad get");
                        t.get = n;
                    }
                    if (hasProperty(e, "set")) {
                        var r = e.set;
                        if (!isCallable(r) && void 0 !== r) throw new TypeError("bad set");
                        t.set = r;
                    }
                    if (("get" in t || "set" in t) && ("value" in t || "writable" in t)) throw new TypeError("identity-confused descriptor");
                    return t;
                }
                if ("object" !== _typeof(e) || null === e) throw new TypeError("bad obj");
                t = Object(t);
                for (var n = Object.keys(t), r = [], o = 0; o < n.length; o++) r.push([ n[o], convertToDescriptor(t[n[o]]) ]);
                for (o = 0; o < r.length; o++) Object.defineProperty(e, r[o][0], r[o][1]);
                return e;
            });
            function qo(e) {
                _classCallCheck(this, qo), this.state = {}, this.props = e || {};
            }
            var t = "Expected a function", r = "__lodash_hash_undefined__", o = "[object Function]", a = "[object GeneratorFunction]", i = "[object Symbol]", s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, c = /^\w*$/, u = /^\./, f = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, l = /\\(\\)?/g, p = /^\[object .+?Constructor\]$/, d = "object" === (void 0 === e ? "undefined" : _typeof(e)) && e && e.Object === Object && e, h = "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self, y = d || h || {
                Function: Function,
                Boolean: Boolean,
                Object: Object,
                Number: Number,
                Array: Array,
                Date: Date,
                String: String,
                Symbol: Symbol,
                Error: Error,
                TypeError: TypeError,
                Map: Map,
                Set: Set,
                WeakMap: WeakMap,
                WeakSet: WeakSet,
                ArrayBuffer: ArrayBuffer,
                Math: Math,
                Promise: Promise,
                RegExp: RegExp,
                DataView: DataView,
                isFinite: isFinite,
                parseInt: parseInt,
                parseFloat: parseFloat,
                Float32Array: Float32Array,
                Float64Array: Float64Array,
                Int8Array: Int8Array,
                Int16Array: Int16Array,
                Int32Array: Int32Array,
                Uint8Array: Uint8Array,
                Uint16Array: Uint16Array,
                Uint32Array: Uint32Array,
                Uint8ClampedArray: Uint8ClampedArray,
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                setInterval: setInterval,
                clearInterval: clearInterval
            }, m = 9007199254740991, g = /^(?:0|[1-9]\d*)$/;
            var v, _ = Array.prototype, b = Function.prototype, C = Object.prototype, S = y["__core-js_shared__"], P = (v = /[^.]+$/.exec(S && S.keys && S.keys.IE_PROTO || "")) ? "Symbol(src)_1." + v : "", w = b.toString, A = C.hasOwnProperty, O = C.toString, E = RegExp("^" + w.call(A).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), j = y.Symbol, k = _.splice, T = getNative(y, "Map"), R = getNative(Object, "create"), x = j ? j.prototype : void 0, $ = x ? x.toString : void 0;
            function Hash(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1]);
                }
            }
            function ListCache(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1]);
                }
            }
            function MapCache(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1]);
                }
            }
            function assocIndexOf(e, t) {
                for (var n = e.length; n--; ) if (eq(e[n][0], t)) return n;
                return -1;
            }
            function baseGet(e, t) {
                for (var n = 0, r = (t = function isKey(e, t) {
                    if (D(e)) return;
                    var n = _typeof(e);
                    if ("number" == n || "symbol" == n || "boolean" == n || null == e || isSymbol(e)) return 1;
                    return c.test(e) || !s.test(e) || null != t && e in Object(t);
                }(t, e) ? [ t ] : castPath(t)).length; null != e && n < r; ) e = e[toKey(t[n++])];
                return n && n == r ? e : void 0;
            }
            function baseIsNative(e) {
                return isObject(e) && !function isMasked(e) {
                    return P && P in e;
                }(e) && (function isFunction(e) {
                    var t = isObject(e) ? O.call(e) : "";
                    return t == o || t == a;
                }(e) || function isHostObject(e) {
                    var t = !1;
                    if (null != e && "function" != typeof e.toString) try {
                        t = !!(e + "");
                    } catch (e) {}
                    return t;
                }(e) ? E : p).test(function toSource(e) {
                    if (null != e) {
                        try {
                            return w.call(e);
                        } catch (e) {}
                        try {
                            return e + "";
                        } catch (e) {}
                    }
                    return "";
                }(e));
            }
            function castPath(e) {
                return D(e) ? e : I(e);
            }
            function getMapData(e, t) {
                var n = e.__data__;
                return function isKeyable(e) {
                    var t = _typeof(e);
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
                }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
            }
            function getNative(e, t) {
                var n = function getValue(e, t) {
                    return null == e ? void 0 : e[t];
                }(e, t);
                return baseIsNative(n) ? n : void 0;
            }
            Hash.prototype.clear = function hashClear() {
                this.__data__ = R ? R(null) : {};
            }, Hash.prototype.delete = function hashDelete(e) {
                return this.has(e) && delete this.__data__[e];
            }, Hash.prototype.get = function hashGet(e) {
                var t = this.__data__;
                if (R) {
                    var n = t[e];
                    return n === r ? void 0 : n;
                }
                return A.call(t, e) ? t[e] : void 0;
            }, Hash.prototype.has = function hashHas(e) {
                var t = this.__data__;
                return R ? void 0 !== t[e] : A.call(t, e);
            }, Hash.prototype.set = function hashSet(e, t) {
                return this.__data__[e] = R && void 0 === t ? r : t, this;
            }, ListCache.prototype.clear = function listCacheClear() {
                this.__data__ = [];
            }, ListCache.prototype.delete = function listCacheDelete(e) {
                var t = this.__data__, n = assocIndexOf(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : k.call(t, n, 1), !0);
            }, ListCache.prototype.get = function listCacheGet(e) {
                var t = this.__data__, n = assocIndexOf(t, e);
                return n < 0 ? void 0 : t[n][1];
            }, ListCache.prototype.has = function listCacheHas(e) {
                return -1 < assocIndexOf(this.__data__, e);
            }, ListCache.prototype.set = function listCacheSet(e, t) {
                var n = this.__data__, r = assocIndexOf(n, e);
                return r < 0 ? n.push([ e, t ]) : n[r][1] = t, this;
            }, MapCache.prototype.clear = function mapCacheClear() {
                this.__data__ = {
                    hash: new Hash(),
                    map: new (T || ListCache)(),
                    string: new Hash()
                };
            }, MapCache.prototype.delete = function mapCacheDelete(e) {
                return getMapData(this, e).delete(e);
            }, MapCache.prototype.get = function mapCacheGet(e) {
                return getMapData(this, e).get(e);
            }, MapCache.prototype.has = function mapCacheHas(e) {
                return getMapData(this, e).has(e);
            }, MapCache.prototype.set = function mapCacheSet(e, t) {
                return getMapData(this, e).set(e, t), this;
            };
            var I = memoize(function(e) {
                e = function toString(e) {
                    return null == e ? "" : function baseToString(e) {
                        if ("string" == typeof e) return e;
                        if (isSymbol(e)) return $ ? $.call(e) : "";
                        var t = e + "";
                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                    }(e);
                }(e);
                var o = [];
                return u.test(e) && o.push(""), e.replace(f, function(e, t, n, r) {
                    o.push(n ? r.replace(l, "$1") : t || e);
                }), o;
            });
            function toKey(e) {
                if ("string" == typeof e || isSymbol(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
            }
            function memoize(o, a) {
                if ("function" != typeof o || a && "function" != typeof a) throw new TypeError(t);
                function ms() {
                    var e = arguments, t = a ? a.apply(this, e) : e[0], n = ms.cache;
                    if (n.has(t)) return n.get(t);
                    var r = o.apply(this, e);
                    return ms.cache = n.set(t, r), r;
                }
                return ms.cache = new (memoize.Cache || MapCache)(), ms;
            }
            function eq(e, t) {
                return e === t || e != e && t != t;
            }
            memoize.Cache = MapCache;
            var D = Array.isArray;
            function isObject(e) {
                var t = _typeof(e);
                return e && ("object" == t || "function" == t);
            }
            function isSymbol(e) {
                return "symbol" === _typeof(e) || function isObjectLike(e) {
                    return !!e && "object" === _typeof(e);
                }(e) && O.call(e) == i;
            }
            A = Object.prototype.hasOwnProperty;
            function assignValue(e, t, n) {
                var r = e[t];
                A.call(e, t) && eq(r, n) && (void 0 !== n || t in e) || !function baseAssignValue(e, t, n) {
                    "__proto__" == t ? Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : e[t] = n;
                }(e, t, n);
            }
            function get(e, t, n) {
                var r = null == e ? void 0 : baseGet(e, t);
                return void 0 === r ? n : r;
            }
            function set$1(e, t, n) {
                return null == e ? e : function baseSet(e, t, n, r) {
                    if (!isObject(e)) return e;
                    for (var o, a, i, s = (t = castPath(t)).length, c = s - 1, u = -1, f = e; null != f && ++u < s; ) {
                        var l = toKey(t[u]), p = n;
                        if (u != c) {
                            var d = f[l];
                            void 0 === (p = r ? r(d, l, f) : void 0) && (p = isObject(d) ? d : (o = t[u + 1], 
                            a = void 0, i = _typeof(o), (a = null == a ? m : a) && ("number" == i || "symbol" != i && g.test(o)) && -1 < o && o % 1 == 0 && o < a ? [] : {}));
                        }
                        assignValue(f, l, p), f = f[l];
                    }
                    return e;
                }(e, t, n);
            }
            var M = /([A-Z])/g;
            function dashLower(e) {
                return "-" + e.toLowerCase();
            }
            function inlineStyle(t) {
                if (null == t) return "";
                if ("string" == typeof t) return t;
                if (null == t) return "";
                if (!function isObject$1(e) {
                    return null != e && "object" === _typeof(e) && !1 === Array.isArray(e);
                }(t)) throw new TypeError("style 只能是一个对象或字符串。");
                return Object.keys(t).map(function(e) {
                    return function dashify(e) {
                        return e.replace(M, dashLower);
                    }(e).concat(":").concat(t[e]);
                }).join(";");
            }
            var L = {
                WEAPP: "WEAPP",
                WEB: "WEB",
                RN: "RN",
                SWAN: "SWAN",
                ALIPAY: "ALIPAY",
                QUICKAPP: "QUICKAPP",
                TT: "TT",
                QQ: "QQ",
                JD: "JD"
            }, U = null;
            function getEnv() {
                return U || ("undefined" != typeof jd && jd.getSystemInfo ? (U = L.JD, L.JD) : "undefined" != typeof qq && qq.getSystemInfo ? (U = L.QQ, 
                L.QQ) : "undefined" != typeof tt && tt.getSystemInfo ? (U = L.TT, L.TT) : "undefined" != typeof wx && wx.getSystemInfo ? (U = L.WEAPP, 
                L.WEAPP) : "undefined" != typeof qa && qa.getSystemInfo ? (U = L.QUICKAPP, L.QUICKAPP) : "undefined" != typeof swan && swan.getSystemInfo ? (U = L.SWAN, 
                L.SWAN) : "undefined" != typeof my && my.getSystemInfo ? (U = L.ALIPAY, L.ALIPAY) : void 0 !== e && e.__fbGenNativeModule ? (U = L.RN, 
                L.RN) : "undefined" != typeof window ? (U = L.WEB, L.WEB) : "Unknown environment");
            }
            var F = null;
            function getOriginal(e) {
                return null === F && (F = getEnv()), function isObject$2(e) {
                    return e === Object(e) && "function" != typeof e;
                }(e) && e[F === L.SWAN ? "privateOriginal" : "$original"] || e;
            }
            var B = function() {
                function Events(e) {
                    _classCallCheck(this, Events), void 0 !== e && e.callbacks ? this.callbacks = e.callbacks : this.callbacks = {};
                }
                return _createClass(Events, [ {
                    key: "on",
                    value: function on(e, t, n) {
                        var r, o, a, i, s;
                        if (!t) return this;
                        for (e = e.split(Events.eventSplitter), r = this.callbacks; o = e.shift(); ) (a = (s = r[o]) ? s.tail : {}).next = i = {}, 
                        a.context = n, a.callback = t, r[o] = {
                            tail: i,
                            next: s ? s.next : a
                        };
                        return this;
                    }
                }, {
                    key: "once",
                    value: function once(r, o, a) {
                        var i = this;
                        return this.on(r, function wrapper() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            o.apply(i, t), i.off(r, wrapper, a);
                        }, a), this;
                    }
                }, {
                    key: "off",
                    value: function off(e, t, n) {
                        var r, o, a, i, s, c;
                        if (!(o = this.callbacks)) return this;
                        if (!(e || t || n)) return delete this.callbacks, this;
                        for (e = e ? e.split(Events.eventSplitter) : Object.keys(o); r = e.shift(); ) if (a = o[r], 
                        delete o[r], a && (t || n)) for (i = a.tail; (a = a.next) !== i; ) s = a.callback, 
                        c = a.context, (t && s !== t || n && c !== n) && this.on(r, s, c);
                        return this;
                    }
                }, {
                    key: "trigger",
                    value: function trigger(e) {
                        var t, n, r, o, a;
                        if (!(r = this.callbacks)) return this;
                        for (e = e.split(Events.eventSplitter), a = [].slice.call(arguments, 1); t = e.shift(); ) if (n = r[t]) for (o = n.tail; (n = n.next) !== o; ) n.callback.apply(n.context || this, a);
                        return this;
                    }
                } ]), Events;
            }();
            function render() {}
            function createRef() {
                return {
                    current: null
                };
            }
            function commitAttachRef(e, t, n, r) {
                4 < arguments.length && void 0 !== arguments[4] && arguments[4] && !t || ("refName" in e && e.refName ? r[e.refName] = t : "fn" in e && "function" == typeof e.fn ? e.fn.call(n, t) : e.fn && "object" === _typeof(e.fn) && "current" in e.fn && (e.fn.current = t));
            }
            function detachAllRef(t) {
                t.$$refs && 0 < t.$$refs.length && (t.$$refs.forEach(function(e) {
                    "function" == typeof e.fn ? e.fn.call(t, null) : e.fn && "object" === _typeof(e.fn) && "current" in e.fn && (e.fn.current = null), 
                    "target" in e && delete e.target;
                }), t.refs = {});
            }
            B.eventSplitter = /\s+/;
            var W = function() {
                function RefsArray() {
                    var e, t, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                    return _classCallCheck(this, RefsArray), (t = _possibleConstructorReturn(this, (e = _getPrototypeOf(RefsArray)).call.apply(e, [ this ].concat(_toConsumableArray(n))))).inited = !1, 
                    t;
                }
                return function _inherits(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _setPrototypeOf(e, t);
                }(RefsArray, _wrapNativeSuper(Array)), _createClass(RefsArray, [ {
                    key: "pushRefs",
                    value: function pushRefs(e) {
                        var t = this;
                        this.inited || (e.forEach(function(e) {
                            return t.pushRef(e);
                        }), this.inited = !0);
                    }
                }, {
                    key: "pushRef",
                    value: function pushRef(t) {
                        this.find(function(e) {
                            return e.id === t.id;
                        }) || this.push(t);
                    }
                } ]), RefsArray;
            }();
            function handleLoopRef(i) {
                return function(e, t, n, r) {
                    if (!e) return null;
                    var o = i(e, t, n), a = _typeof(r);
                    if ("function" !== a && "object" !== a) return console.warn("循环 Ref 只支持函数或 createRef()，当前类型为：".concat(a));
                    "object" === a ? r.current = o : "function" === a && r.call(e.$component, o);
                };
            }
            var N = function() {
                function Chain(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                    _classCallCheck(this, Chain), this.index = n, this.requestParams = e, this.interceptors = t;
                }
                return _createClass(Chain, [ {
                    key: "proceed",
                    value: function proceed(e) {
                        if (this.requestParams = e, this.index >= this.interceptors.length) throw new Error("chain 参数错误, 请勿直接修改 request.chain");
                        var t = this._getNextInterceptor()(this._getNextChain()), n = t.catch(function(e) {
                            return Promise.reject(e);
                        });
                        return "function" == typeof t.abort && (n.abort = t.abort), n;
                    }
                }, {
                    key: "_getNextInterceptor",
                    value: function _getNextInterceptor() {
                        return this.interceptors[this.index];
                    }
                }, {
                    key: "_getNextChain",
                    value: function _getNextChain() {
                        return new Chain(this.requestParams, this.interceptors, this.index + 1);
                    }
                } ]), Chain;
            }(), H = function() {
                function Link(e) {
                    _classCallCheck(this, Link), this.taroInterceptor = e, this.chain = new N();
                }
                return _createClass(Link, [ {
                    key: "request",
                    value: function request(e) {
                        var t = this;
                        return this.chain.interceptors = this.chain.interceptors.filter(function(e) {
                            return e !== t.taroInterceptor;
                        }), this.chain.interceptors.push(this.taroInterceptor), this.chain.proceed(_objectSpread({}, e));
                    }
                }, {
                    key: "addInterceptor",
                    value: function addInterceptor(e) {
                        this.chain.interceptors.push(e);
                    }
                }, {
                    key: "cleanInterceptors",
                    value: function cleanInterceptors() {
                        this.chain = new N();
                    }
                } ]), Link;
            }();
            var q = Object.freeze({
                timeoutInterceptor: function timeoutInterceptor(e) {
                    var o, a = e.requestParams, t = new Promise(function(t, n) {
                        var r = setTimeout(function() {
                            r = null, n(new Error("网络链接超时,请稍后再试！"));
                        }, a && a.timeout || 6e4);
                        (o = e.proceed(a)).then(function(e) {
                            r && (clearTimeout(r), t(e));
                        }).catch(function(e) {
                            r && clearTimeout(r), n(e);
                        });
                    });
                    return "function" == typeof o.abort && (t.abort = o.abort), t;
                },
                logInterceptor: function logInterceptor(e) {
                    var t = e.requestParams, n = t.method, r = t.data, o = t.url;
                    console.log("http ".concat(n || "GET", " --\x3e ").concat(o, " data: "), r);
                    var a = e.proceed(t), i = a.then(function(e) {
                        return console.log("http <-- ".concat(o, " result:"), e), e;
                    });
                    return "function" == typeof a.abort && (i.abort = a.abort), i;
                }
            }), z = {
                onSocketOpen: !0,
                onSocketError: !0,
                onSocketMessage: !0,
                onSocketClose: !0,
                onBackgroundAudioPlay: !0,
                onBackgroundAudioPause: !0,
                onBackgroundAudioStop: !0,
                onNetworkStatusChange: !0,
                onAccelerometerChange: !0,
                offAccelerometerChange: !0,
                onCompassChange: !0,
                onBluetoothAdapterStateChange: !0,
                onBluetoothDeviceFound: !0,
                onBLEConnectionStateChange: !0,
                onBLECharacteristicValueChange: !0,
                onBeaconUpdate: !0,
                onBeaconServiceChange: !0,
                onUserCaptureScreen: !0,
                onHCEMessage: !0,
                onGetWifiList: !0,
                onWifiConnected: !0,
                offWifiConnected: !0,
                offGetWifiList: !0,
                onDeviceMotionChange: !0,
                setStorageSync: !0,
                getStorageSync: !0,
                getStorageInfoSync: !0,
                removeStorageSync: !0,
                clearStorageSync: !0,
                getSystemInfoSync: !0,
                getExtConfigSync: !0,
                getLogManager: !0,
                onMemoryWarning: !0,
                reportMonitor: !0,
                reportAnalytics: !0,
                navigateToSmartGameProgram: !0,
                getFileSystemManager: !0,
                getLaunchOptionsSync: !0,
                onPageNotFound: !0,
                onError: !0,
                onAppShow: !0,
                onAppHide: !0,
                offPageNotFound: !0,
                offError: !0,
                offAppShow: !0,
                offAppHide: !0,
                onAudioInterruptionEnd: !0,
                onAudioInterruptionBegin: !0,
                onLocationChange: !0,
                offLocationChange: !0
            }, V = {
                stopRecord: !0,
                getRecorderManager: !0,
                pauseVoice: !0,
                stopVoice: !0,
                pauseBackgroundAudio: !0,
                stopBackgroundAudio: !0,
                getBackgroundAudioManager: !0,
                createAudioContext: !0,
                createInnerAudioContext: !0,
                createVideoContext: !0,
                createCameraContext: !0,
                createLivePlayerContext: !0,
                createLivePusherContext: !0,
                createMapContext: !0,
                canIUse: !0,
                startAccelerometer: !0,
                stopAccelerometer: !0,
                startCompass: !0,
                stopCompass: !0,
                hideToast: !0,
                hideLoading: !0,
                showNavigationBarLoading: !0,
                hideNavigationBarLoading: !0,
                createAnimation: !0,
                createSelectorQuery: !0,
                createOffscreenCanvas: !0,
                createCanvasContext: !0,
                drawCanvas: !0,
                hideKeyboard: !0,
                stopPullDownRefresh: !0,
                createIntersectionObserver: !0,
                nextTick: !0,
                getMenuButtonBoundingClientRect: !0,
                onWindowResize: !0,
                offWindowResize: !0,
                arrayBufferToBase64: !0,
                base64ToArrayBuffer: !0,
                getAccountInfoSync: !0,
                getUpdateManager: !0,
                createWorker: !0,
                createRewardedVideoAd: !0,
                createInterstitialAd: !0,
                getRealtimeLogManager: !0
            }, G = {
                uploadFile: !0,
                downloadFile: !0,
                connectSocket: !0,
                sendSocketMessage: !0,
                closeSocket: !0,
                chooseImage: !0,
                chooseMessageFile: !0,
                previewImage: !0,
                getImageInfo: !0,
                compressImage: !0,
                saveImageToPhotosAlbum: !0,
                startRecord: !0,
                playVoice: !0,
                setInnerAudioOption: !0,
                getAvailableAudioSources: !0,
                getBackgroundAudioPlayerState: !0,
                playBackgroundAudio: !0,
                seekBackgroundAudio: !0,
                chooseVideo: !0,
                saveVideoToPhotosAlbum: !0,
                loadFontFace: !0,
                saveFile: !0,
                getFileInfo: !0,
                getSavedFileList: !0,
                getSavedFileInfo: !0,
                removeSavedFile: !0,
                openDocument: !0,
                setStorage: !0,
                getStorage: !0,
                getStorageInfo: !0,
                removeStorage: !0,
                clearStorage: !0,
                navigateBack: !0,
                navigateTo: !0,
                redirectTo: !0,
                switchTab: !0,
                reLaunch: !0,
                startLocationUpdate: !0,
                startLocationUpdateBackground: !0,
                stopLocationUpdate: !0,
                getLocation: !0,
                chooseLocation: !0,
                openLocation: !0,
                getSystemInfo: !0,
                getNetworkType: !0,
                makePhoneCall: !0,
                scanCode: !0,
                setClipboardData: !0,
                getClipboardData: !0,
                openBluetoothAdapter: !0,
                closeBluetoothAdapter: !0,
                getBluetoothAdapterState: !0,
                startBluetoothDevicesDiscovery: !0,
                stopBluetoothDevicesDiscovery: !0,
                getBluetoothDevices: !0,
                getConnectedBluetoothDevices: !0,
                createBLEConnection: !0,
                closeBLEConnection: !0,
                getBLEDeviceServices: !0,
                getBLEDeviceCharacteristics: !0,
                readBLECharacteristicValue: !0,
                writeBLECharacteristicValue: !0,
                notifyBLECharacteristicValueChange: !0,
                startBeaconDiscovery: !0,
                stopBeaconDiscovery: !0,
                getBeacons: !0,
                setScreenBrightness: !0,
                getScreenBrightness: !0,
                setKeepScreenOn: !0,
                vibrateLong: !0,
                vibrateShort: !0,
                addPhoneContact: !0,
                getHCEState: !0,
                startHCE: !0,
                stopHCE: !0,
                sendHCEMessage: !0,
                startWifi: !0,
                stopWifi: !0,
                connectWifi: !0,
                getWifiList: !0,
                setWifiList: !0,
                getConnectedWifi: !0,
                startDeviceMotionListening: !0,
                stopDeviceMotionListening: !0,
                pageScrollTo: !0,
                showToast: !0,
                showLoading: !0,
                showModal: !0,
                showActionSheet: !0,
                setNavigationBarTitle: !0,
                setNavigationBarColor: !0,
                setTabBarBadge: !0,
                removeTabBarBadge: !0,
                showTabBarRedDot: !0,
                hideTabBarRedDot: !0,
                setTabBarStyle: !0,
                setTabBarItem: !0,
                showTabBar: !0,
                hideTabBar: !0,
                setTopBarText: !0,
                startPullDownRefresh: !0,
                canvasToTempFilePath: !0,
                canvasGetImageData: !0,
                canvasPutImageData: !0,
                setBackgroundColor: !0,
                setBackgroundTextStyle: !0,
                getSelectedTextRange: !0,
                hideHomeButton: !0,
                getExtConfig: !0,
                login: !0,
                checkSession: !0,
                authorize: !0,
                getUserInfo: !0,
                checkIsSupportFacialRecognition: !0,
                startFacialRecognitionVerify: !0,
                startFacialRecognitionVerifyAndUploadVideo: !0,
                faceVerifyForPay: !0,
                requestPayment: !0,
                showShareMenu: !0,
                hideShareMenu: !0,
                updateShareMenu: !0,
                getShareInfo: !0,
                chooseAddress: !0,
                addCard: !0,
                openCard: !0,
                openSetting: !0,
                getSetting: !0,
                getWeRunData: !0,
                navigateToMiniProgram: !0,
                navigateBackMiniProgram: !0,
                chooseInvoice: !0,
                chooseInvoiceTitle: !0,
                checkIsSupportSoterAuthentication: !0,
                startSoterAuthentication: !0,
                checkIsSoterEnrolledInDevice: !0,
                requestSubscribeMessage: !0,
                setEnableDebug: !0,
                getOpenUserInfo: !0,
                ocrIdCard: !0,
                ocrBankCard: !0,
                ocrDrivingLicense: !0,
                ocrVehicleLicense: !0,
                textReview: !0,
                textToAudio: !0,
                imageAudit: !0,
                advancedGeneralIdentify: !0,
                objectDetectIdentify: !0,
                carClassify: !0,
                dishClassify: !0,
                logoClassify: !0,
                animalClassify: !0,
                plantClassify: !0,
                setPageInfo: !0,
                getSwanId: !0,
                requestPolymerPayment: !0,
                navigateToSmartProgram: !0,
                navigateBackSmartProgram: !0,
                preloadSubPackage: !0
            };
            function initPxTransform(e) {
                var t = e.designWidth, n = void 0 === t ? 700 : t, r = e.deviceRatio, o = void 0 === r ? {
                    640: 1.17,
                    750: 1,
                    828: .905
                } : r;
                this.config = this.config || {}, this.config.designWidth = n, this.config.deviceRatio = o;
            }
            function objectIs(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            }
            function isFunction$1(e) {
                return "function" == typeof e;
            }
            var Q = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
            function isUndefined(e) {
                return void 0 === e;
            }
            function isNullOrUndef(e) {
                return isUndefined(e) || null === e;
            }
            var K, J = !0;
            function getIsUsingDiff() {
                return J;
            }
            function setIsUsingDiff(e) {
                J = Boolean(e);
            }
            function forceUpdateCallback() {}
            function getHooks(e) {
                if (null === K.current) throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
                var t = K.current.hooks;
                return e >= t.length && t.push({}), t[e];
            }
            function useState(e) {
                isFunction$1(e) && (e = e());
                var n = getHooks(K.index++);
                return n.state || (n.component = K.current, n.state = [ e, function(e) {
                    var t = isFunction$1(e) ? e(n.state[0]) : e;
                    n.state[0] !== t && (n.state[0] = t, n.component._disable = !1, n.component.setState({}, forceUpdateCallback));
                } ]), n.state;
            }
            function usePageLifecycle(e, t) {
                var n = getHooks(K.index++);
                if (n.marked) n.callback = e; else {
                    n.marked = !0, n.component = K.current, n.callback = e;
                    var r = n.component, o = r[t];
                    n.component[t] = function() {
                        var e = n.callback;
                        return o && o.call.apply(o, [ r ].concat(Array.prototype.slice.call(arguments))), 
                        e && e.call.apply(e, [ r ].concat(Array.prototype.slice.call(arguments)));
                    };
                }
            }
            function useDidShow(e) {
                usePageLifecycle(e, "componentDidShow");
            }
            function useDidHide(e) {
                usePageLifecycle(e, "componentDidHide");
            }
            function usePullDownRefresh(e) {
                usePageLifecycle(e, "onPullDownRefresh");
            }
            function useReachBottom(e) {
                usePageLifecycle(e, "onReachBottom");
            }
            function usePageScroll(e) {
                usePageLifecycle(e, "onPageScroll");
            }
            function useResize(e) {
                usePageLifecycle(e, "onResize");
            }
            function useShareAppMessage(e) {
                usePageLifecycle(e, "onShareAppMessage");
            }
            function useTabItemTap(e) {
                usePageLifecycle(e, "onTabItemTap");
            }
            function useRouter() {
                var e = getHooks(K.index++);
                return e.router || (e.component = K.current, e.router = e.component.$router), e.router;
            }
            function useScope() {
                var e = getHooks(K.index++);
                return e.scope || (e.component = K.current, e.scope = e.component.$scope), e.scope;
            }
            function useReducer(t, e, n) {
                isFunction$1(e) && (e = e());
                var r = getHooks(K.index++);
                return r.state || (r.component = K.current, r.state = [ isUndefined(n) ? e : n(e), function(e) {
                    r.state[0] = t(r.state[0], e), r.component._disable = !1, r.component.setState({}, forceUpdateCallback);
                } ]), r.state;
            }
            function areDepsChanged(n, e) {
                return isNullOrUndef(n) || isNullOrUndef(e) || e.some(function(e, t) {
                    return !objectIs(e, n[t]);
                });
            }
            function invokeEffects(e, t) {
                (t ? e.effects : e.layoutEffects).forEach(function(e) {
                    isFunction$1(e.cleanup) && e.cleanup();
                    var t = e.effect();
                    isFunction$1(t) && (e.cleanup = t);
                }), t ? e.effects = [] : e.layoutEffects = [];
            }
            re.Current = K = {
                current: null,
                index: 0
            };
            var Y = [];
            function useEffectImpl(e, t, n) {
                var r = getHooks(K.index++);
                !K.current._disableEffect && K.current.__isReady && areDepsChanged(r.deps, t) && (r.effect = e, 
                r.deps = t, n ? (K.current.effects = K.current.effects.concat(r), function invokeScheduleEffects(e) {
                    e._afterScheduleEffect || (e._afterScheduleEffect = !0, Y.push(e), 1 === Y.length && Q(function() {
                        setTimeout(function() {
                            Y.forEach(function(e) {
                                e._afterScheduleEffect = !1, invokeEffects(e, !0);
                            }), Y = [];
                        }, 0);
                    }));
                }(K.current)) : K.current.layoutEffects = K.current.layoutEffects.concat(r));
            }
            function useEffect(e, t) {
                useEffectImpl(e, t, !0);
            }
            function useLayoutEffect(e, t) {
                useEffectImpl(e, t);
            }
            function useRef(e) {
                var t = getHooks(K.index++);
                return t.ref || (t.ref = {
                    current: e
                }), t.ref;
            }
            function useMemo(e, t) {
                var n = getHooks(K.index++);
                return areDepsChanged(n.deps, t) && (n.deps = t, n.callback = e, n.value = e()), 
                n.value;
            }
            function useCallback(e, t) {
                return useMemo(function() {
                    return e;
                }, t);
            }
            function useImperativeHandle(e, t, n) {
                useLayoutEffect(function() {
                    return isFunction$1(e) ? (e(t()), function() {
                        return e(null);
                    }) : isUndefined(e) ? void 0 : (e.current = t(), function() {
                        delete e.current;
                    });
                }, function isArray$1(e) {
                    return Array.isArray(e);
                }(n) ? n.concat([ e ]) : void 0);
            }
            function useContext(e) {
                var t = e.context, n = t.emitter;
                if (null === n) return t._defaultValue;
                var r = getHooks(K.index++);
                return isUndefined(r.context) && (r.context = !0, r.component = K.current, n.on(function(e) {
                    r.component && (r.component._disable = !1, r.component.setState({}));
                })), n.value;
            }
            var X = function() {
                function Emitter() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    _classCallCheck(this, Emitter), this.value = e, this.handlers = [];
                }
                return _createClass(Emitter, [ {
                    key: "on",
                    value: function on(e) {
                        this.handlers.push(e);
                    }
                }, {
                    key: "off",
                    value: function off(t) {
                        this.handlers = this.handlers.filter(function(e) {
                            return e !== t;
                        });
                    }
                }, {
                    key: "set",
                    value: function set(e) {
                        var t = this;
                        objectIs(e, this.value) || (this.value = e, this.handlers.forEach(function(e) {
                            return e(t.value);
                        }));
                    }
                } ]), Emitter;
            }(), Z = 0;
            function createContext(n) {
                var r = {
                    emitter: null,
                    _id: "__context_" + Z++ + "__",
                    _defaultValue: n
                };
                return {
                    Provider: function Provider(e) {
                        var t = r.emitter;
                        t ? t.set(e) : r.emitter = new X(n);
                    },
                    context: r
                };
            }
            var ee, te = Object.is || function(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            };
            function memo(e, t) {
                return e.prototype.shouldComponentUpdate = function(e) {
                    return isFunction$1(t) ? !t(this.props, e) : !function shallowEqual(e, t) {
                        if ("object" !== _typeof(e) && "object" !== _typeof(t)) return e === t;
                        if (null === e && null === t) return 1;
                        if (null !== e && null !== t) {
                            if (te(e, t)) return 1;
                            var n = e ? Object.keys(e) : [], r = t ? Object.keys(t) : [];
                            if (n.length === r.length) {
                                for (var o = 0; o < n.length; o++) {
                                    var a = n[o];
                                    if (!t.hasOwnProperty(a) || !te(e[a], t[a])) return;
                                }
                                return 1;
                            }
                        }
                    }(this.props, e);
                }, e;
            }
            re.eventCenter = ee = new B();
            var ne = {
                Component: qo,
                Events: B,
                eventCenter: ee,
                getEnv: getEnv,
                ENV_TYPE: L,
                render: render,
                internal_safe_get: get,
                internal_safe_set: set$1,
                internal_inline_style: inlineStyle,
                internal_get_original: getOriginal,
                internal_force_update: forceUpdateCallback,
                noPromiseApis: V,
                onAndSyncApis: z,
                otherApis: G,
                initPxTransform: initPxTransform,
                createRef: createRef,
                commitAttachRef: commitAttachRef,
                detachAllRef: detachAllRef,
                Link: H,
                interceptors: q,
                RefsArray: W,
                handleLoopRef: handleLoopRef,
                Current: K,
                useEffect: useEffect,
                useLayoutEffect: useLayoutEffect,
                useReducer: useReducer,
                useState: useState,
                useDidShow: useDidShow,
                useDidHide: useDidHide,
                usePullDownRefresh: usePullDownRefresh,
                useReachBottom: useReachBottom,
                usePageScroll: usePageScroll,
                useResize: useResize,
                useShareAppMessage: useShareAppMessage,
                useTabItemTap: useTabItemTap,
                useRouter: useRouter,
                useScope: useScope,
                useRef: useRef,
                useCallback: useCallback,
                useMemo: useMemo,
                useImperativeHandle: useImperativeHandle,
                invokeEffects: invokeEffects,
                useContext: useContext,
                createContext: createContext,
                memo: memo,
                getIsUsingDiff: getIsUsingDiff,
                setIsUsingDiff: setIsUsingDiff
            };
            re.default = ne, re.Component = qo, re.Events = B, re.eventCenter = ee, re.getEnv = getEnv, 
            re.ENV_TYPE = L, re.render = render, re.internal_safe_get = get, re.internal_safe_set = set$1, 
            re.internal_inline_style = inlineStyle, re.internal_get_original = getOriginal, 
            re.internal_force_update = forceUpdateCallback, re.noPromiseApis = V, re.onAndSyncApis = z, 
            re.otherApis = G, re.initPxTransform = initPxTransform, re.createRef = createRef, 
            re.commitAttachRef = commitAttachRef, re.detachAllRef = detachAllRef, re.Link = H, 
            re.interceptors = q, re.RefsArray = W, re.handleLoopRef = handleLoopRef, re.Current = K, 
            re.useEffect = useEffect, re.useLayoutEffect = useLayoutEffect, re.useReducer = useReducer, 
            re.useState = useState, re.useDidShow = useDidShow, re.useDidHide = useDidHide, 
            re.usePullDownRefresh = usePullDownRefresh, re.useReachBottom = useReachBottom, 
            re.usePageScroll = usePageScroll, re.useResize = useResize, re.useShareAppMessage = useShareAppMessage, 
            re.useTabItemTap = useTabItemTap, re.useRouter = useRouter, re.useScope = useScope, 
            re.useRef = useRef, re.useCallback = useCallback, re.useMemo = useMemo, re.useImperativeHandle = useImperativeHandle, 
            re.invokeEffects = invokeEffects, re.useContext = useContext, re.createContext = createContext, 
            re.memo = memo, re.getIsUsingDiff = getIsUsingDiff, re.setIsUsingDiff = setIsUsingDiff;
        }).call(this, t(34));
    }
} ]);