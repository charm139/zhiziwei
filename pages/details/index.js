//获取应用实例
var app = getApp()
Page({
    data: {
        post_view:[],
        title:[],
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
            url: app.globalData.api_url+'details.html?id=' + options.id+'&term_id='+options.term_id,
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                 that.setData({
                     post_view: res.data.data,
                     titles: res.data.data.post_title,
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
