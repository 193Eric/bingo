Component({
    properties: {
        currentSwiperIndex: {
            type: Number,
            value: 0
        },
        height: {
            type: String,
            value: "150px"
        },
        thing: {
            type: Object,
            value: []
        },
        nextMargin: {
            type: String,
            value: "0rpx"
        },
        indicatorDots: {
            type: Boolean,
            value: !1
        },
        autoplay: {
            type: Boolean,
            value: !1
        },
        interval: {
            type: Number,
            value: 3e3
        },
        duration: {
            type: Number,
            value: 1e3
        },
        circular: {
            type: Boolean,
            value: !1
        },
        previousMargin: {
            type: String,
            value: "0rpx"
        }
    },
    data: {},
    options: {
        multipleSlots: !0
    },
    methods: {
        swiperBindchange: function(e) {
            this.setData({
                currentSwiperIndex: e.detail.current
            }), this.triggerEvent("swiperChange", {
                currentSwiperIndex: e.detail.current
            });
        }
    }
});