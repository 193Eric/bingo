Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/relation");

require("../common/component").VantComponent({
    relation: e.useParent("row"),
    props: {
        span: Number,
        offset: Number
    }
});