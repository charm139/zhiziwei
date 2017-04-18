var app = getApp()
Page({
    data: {
        tops:[],
        lists:[],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false  
    },
    onLoad: function() {
        var that = this
        // 商品详情
        wx.request({
            url: app.globalData.api_url+'index.html',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                 that.setData({
                     tops: res.data.data.istop_list,
                     lists: res.data.data.recommended_list,
                })
            }
        })

    },
    onShareAppMessage: function () {
        return {
        title: '真真叫你说情话，体会不一样的风情趴',
        path: '/pages/index/index'
        }
    }
    
})
