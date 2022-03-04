var e = function() {
    return (e = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), n = require("./shared");

t.VantComponent({
    classes: [ "active-class", "toolbar-class", "column-class" ],
    props: e(e({}, n.pickerProps), {
        valueKey: {
            type: String,
            value: "text"
        },
        toolbarPosition: {
            type: String,
            value: "top"
        },
        defaultIndex: {
            type: Number,
            value: 0
        },
        columns: {
            type: Array,
            value: [],
            observer: function(e) {
                void 0 === e && (e = []), this.simple = e.length && !e[0].values, Array.isArray(this.children) && this.children.length && this.setColumns().catch(function() {});
            }
        }
    }),
    beforeCreate: function() {
        var e = this;
        Object.defineProperty(this, "children", {
            get: function() {
                return e.selectAllComponents(".van-picker__column") || [];
            }
        });
    },
    methods: {
        noop: function() {},
        setColumns: function() {
            var e = this, t = this.data, n = (this.simple ? [ {
                values: t.columns
            } ] : t.columns).map(function(t, n) {
                return e.setColumnValues(n, t.values);
            });
            return Promise.all(n);
        },
        emit: function(e) {
            var t = e.currentTarget.dataset.type;
            this.simple ? this.$emit(t, {
                value: this.getColumnValue(0),
                index: this.getColumnIndex(0)
            }) : this.$emit(t, {
                value: this.getValues(),
                index: this.getIndexes()
            });
        },
        onChange: function(e) {
            this.simple ? this.$emit("change", {
                picker: this,
                value: this.getColumnValue(0),
                index: this.getColumnIndex(0)
            }) : this.$emit("change", {
                picker: this,
                value: this.getValues(),
                index: e.currentTarget.dataset.index
            });
        },
        getColumn: function(e) {
            return this.children[e];
        },
        getColumnValue: function(e) {
            var t = this.getColumn(e);
            return t && t.getValue();
        },
        setColumnValue: function(e, t) {
            var n = this.getColumn(e);
            return null == n ? Promise.reject(new Error("setColumnValue: 对应列不存在")) : n.setValue(t);
        },
        getColumnIndex: function(e) {
            return (this.getColumn(e) || {}).data.currentIndex;
        },
        setColumnIndex: function(e, t) {
            var n = this.getColumn(e);
            return null == n ? Promise.reject(new Error("setColumnIndex: 对应列不存在")) : n.setIndex(t);
        },
        getColumnValues: function(e) {
            return (this.children[e] || {}).data.options;
        },
        setColumnValues: function(e, t, n) {
            void 0 === n && (n = !0);
            var r = this.children[e];
            return null == r ? Promise.reject(new Error("setColumnValues: 对应列不存在")) : JSON.stringify(r.data.options) === JSON.stringify(t) ? Promise.resolve() : r.set({
                options: t
            }).then(function() {
                n && r.setIndex(0);
            });
        },
        getValues: function() {
            return this.children.map(function(e) {
                return e.getValue();
            });
        },
        setValues: function(e) {
            var t = this, n = e.map(function(e, n) {
                return t.setColumnValue(n, e);
            });
            return Promise.all(n);
        },
        getIndexes: function() {
            return this.children.map(function(e) {
                return e.data.currentIndex;
            });
        },
        setIndexes: function(e) {
            var t = this, n = e.map(function(e, n) {
                return t.setColumnIndex(n, e);
            });
            return Promise.all(n);
        }
    }
});