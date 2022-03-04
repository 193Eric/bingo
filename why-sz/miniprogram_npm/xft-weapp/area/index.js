var e = function() {
    return (e = Object.assign || function(e) {
        for (var t, n = 1, i = arguments.length; n < i; n++) {
            t = arguments[n];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
        }
        return e;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), n = require("../picker/shared"), i = require("../common/utils");

t.VantComponent({
    classes: [ "active-class", "toolbar-class", "column-class" ],
    props: e(e({}, n.pickerProps), {
        value: {
            type: String,
            observer: function(e) {
                this.code = e, this.setValues();
            }
        },
        areaList: {
            type: Object,
            value: {},
            observer: "setValues"
        },
        columnsNum: {
            type: null,
            value: 3
        },
        columnsPlaceholder: {
            type: Array,
            observer: function(e) {
                this.setData({
                    typeToColumnsPlaceholder: {
                        province: e[0] || "",
                        city: e[1] || "",
                        county: e[2] || ""
                    }
                });
            }
        }
    }),
    data: {
        columns: [ {
            values: []
        }, {
            values: []
        }, {
            values: []
        } ],
        typeToColumnsPlaceholder: {}
    },
    mounted: function() {
        var e = this;
        i.requestAnimationFrame(function() {
            e.setValues();
        });
    },
    methods: {
        getPicker: function() {
            return null == this.picker && (this.picker = this.selectComponent(".van-area__picker")), 
            this.picker;
        },
        onCancel: function(e) {
            this.emit("cancel", e.detail);
        },
        onConfirm: function(e) {
            var t = e.detail.index, n = e.detail.value;
            n = this.parseValues(n), this.emit("confirm", {
                value: n,
                index: t
            });
        },
        emit: function(e, t) {
            t.values = t.value, delete t.value, this.$emit(e, t);
        },
        parseValues: function(t) {
            var n = this.data.columnsPlaceholder;
            return t.map(function(t, i) {
                return !t || t.code && t.name !== n[i] ? t : e(e({}, t), {
                    code: "",
                    name: ""
                });
            });
        },
        onChange: function(e) {
            var t, n = this, i = e.detail, s = i.index, r = i.picker, c = i.value;
            this.code = c[s].code, null === (t = this.setValues()) || void 0 === t || t.then(function() {
                n.$emit("change", {
                    picker: r,
                    values: n.parseValues(r.getValues()),
                    index: s
                });
            });
        },
        getConfig: function(e) {
            var t = this.data.areaList;
            return t && t[e + "_list"] || {};
        },
        getList: function(e, t) {
            if ("province" !== e && !t) return [];
            var n = this.data.typeToColumnsPlaceholder, i = this.getConfig(e), s = Object.keys(i).map(function(e) {
                return {
                    code: e,
                    name: i[e]
                };
            });
            if (null != t && ("9" === t[0] && "city" === e && (t = "9"), s = s.filter(function(e) {
                return 0 === e.code.indexOf(t);
            })), n[e] && s.length) {
                var r = "province" === e ? "" : "city" === e ? "000000".slice(2, 4) : "000000".slice(4, 6);
                s.unshift({
                    code: "" + t + r,
                    name: n[e]
                });
            }
            return s;
        },
        getIndex: function(e, t) {
            var n = "province" === e ? 2 : "city" === e ? 4 : 6, i = this.getList(e, t.slice(0, n - 2));
            "9" === t[0] && "province" === e && (n = 1), t = t.slice(0, n);
            for (var s = 0; s < i.length; s++) if (i[s].code.slice(0, n) === t) return s;
            return 0;
        },
        setValues: function() {
            var e = this.getPicker();
            if (e) {
                var t = this.code || this.getDefaultCode(), n = this.getList("province"), i = this.getList("city", t.slice(0, 2)), s = [], r = [], c = this.data.columnsNum;
                return c >= 1 && (s.push(e.setColumnValues(0, n, !1)), r.push(this.getIndex("province", t))), 
                c >= 2 && (s.push(e.setColumnValues(1, i, !1)), r.push(this.getIndex("city", t)), 
                i.length && "00" === t.slice(2, 4) && (t = i[0].code)), 3 === c && (s.push(e.setColumnValues(2, this.getList("county", t.slice(0, 4)), !1)), 
                r.push(this.getIndex("county", t))), Promise.all(s).catch(function() {}).then(function() {
                    return e.setIndexes(r);
                }).catch(function() {});
            }
        },
        getDefaultCode: function() {
            if (this.data.columnsPlaceholder.length) return "000000";
            var e = Object.keys(this.getConfig("county"));
            if (e[0]) return e[0];
            var t = Object.keys(this.getConfig("city"));
            return t[0] ? t[0] : "";
        },
        getValues: function() {
            var e = this.getPicker();
            return e ? this.parseValues(e.getValues().filter(function(e) {
                return !!e;
            })) : [];
        },
        getDetail: function() {
            var e = this.getValues(), t = {
                code: "",
                country: "",
                province: "",
                city: "",
                county: ""
            };
            if (!e.length) return t;
            var n = e.map(function(e) {
                return e.name;
            });
            return t.code = e[e.length - 1].code, "9" === t.code[0] ? (t.country = n[1] || "", 
            t.province = n[2] || "") : (t.province = n[0] || "", t.city = n[1] || "", t.county = n[2] || ""), 
            t;
        },
        reset: function(e) {
            return this.code = e || "", this.setValues();
        }
    }
});