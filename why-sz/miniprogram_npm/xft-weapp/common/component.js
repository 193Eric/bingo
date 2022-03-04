function e(e, s, a) {
    Object.keys(a).forEach(function(t) {
        e[t] && (s[a[t]] = e[t]);
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.VantComponent = void 0;

var s = require("../mixins/basic");

exports.VantComponent = function(a) {
    var t = {};
    e(a, t, {
        data: "data",
        props: "properties",
        mixins: "behaviors",
        methods: "methods",
        beforeCreate: "created",
        created: "attached",
        mounted: "ready",
        destroyed: "detached",
        classes: "externalClasses"
    }), t.externalClasses = t.externalClasses || [], t.externalClasses.push("custom-class"), 
    t.behaviors = t.behaviors || [], t.behaviors.push(s.basic);
    var o = a.relation;
    o && (t.relations = o.relations, t.behaviors.push(o.mixin)), a.field && t.behaviors.push("wx://form-field"), 
    t.options = {
        multipleSlots: !0,
        addGlobalClass: !0
    }, Component(t);
};