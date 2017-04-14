//获取应用实例
var app = getApp()
Page({
    data: {
        post_view:[],
        titles:[],
    },
     onLoad: function(options) {
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
    onReady:function(){
        console.log(titles)
        wx.setNavigationBarTitle({
            
            title: titles,
        })
        this.setData({
            hidden: true
        })
    },
    onReachBottom: function(options) {
        // Do something when page reach bottom.
        console.log('circle 下一页');
    },
})
