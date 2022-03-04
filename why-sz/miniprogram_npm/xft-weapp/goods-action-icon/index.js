Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("../common/component"), n = require("../mixins/button"), e = require("../mixins/link");

i.VantComponent({
    classes: [ "icon-class", "text-class" ],
    mixins: [ e.link, n.button ],
    props: {
        text: String,
        dot: Boolean,
        info: String,
        icon: String,
        disabled: Boolean,
        loading: Boolean
    },
    methods: {
        onClick: function(i) {
            this.$emit("click", i.detail), this.jumpLink();
        }
    }
});