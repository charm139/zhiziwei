//获取应用实例
var app = getApp()
Page({
    data: {
        lists:[],
    },
     onLoad: function(options) {
        wx.setNavigationBarTitle({
            title: options.name,
            fail: function() {
                console.log("更改标题失败");
            },
            success: function() {
                console.log("更改标题成功");
            }
        });
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
