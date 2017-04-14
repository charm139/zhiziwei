//获取应用实例
var app = getApp()
Page({
    data: {
        lists:[],
    },
     onLoad: function(options) {
        var that = this
        // 商品详情
        wx.request({
            url: app.globalData.api_url+'lists.html?term_id=' + options.id,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                 that.setData({
                     lists: res.data.data,
                })
            }
        })

    },
    onShareAppMessage: function () {
        return {
        title: '分享一下吧',
        path: '/page/user?id=123'
        }
    }
})
