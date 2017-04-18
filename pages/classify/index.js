var app = getApp()
Page({
    data: {
        lists:[],
        curNav: 1,
		curIndex: 0
    },
    onLoad: function() {
        var that = this
        wx.request({
            url: app.globalData.api_url+'classify.html',
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
        title: '真真叫你说情话，体会不一样的风情趴',
        path: '/pages/index/index'
        }
    }

})