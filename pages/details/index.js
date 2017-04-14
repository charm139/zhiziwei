//获取应用实例
var app = getApp()
Page({
    data: {
        post_view:[],
    },
     onLoad: function(options) {
         console.log(options)
        var that = this
        // 商品详情
        wx.request({
            url: app.globalData.api_url+'details.html?id=' + options.id+'&term_id='+options.term_id,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                 that.setData({
                     post_view: res.data.data,

                })
            }
        })

    },
    onReachBottom: function(options) {
        // Do something when page reach bottom.
        console.log('circle 下一页');
    },
})
