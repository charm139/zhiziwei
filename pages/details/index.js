//获取应用实例
var app = getApp()
Page({
    data: {
        post_content:null,
        post_title:null,
    },
     onLoad: function(options) {
        var that = this
        // 商品详情
        wx.request({
            url: app.globalData.api_url+'details.html?id=' + options.id,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                 that.setData({
                     post_content: res.data.data.post_content,
                     post_title: res.data.data.post_title,
                })
            }
        })

    }
})
