//获取应用实例
var app = getApp()
Page({
    data: {
        images:[
            "../../images/marry/emig1.jpg",
            "../../images/marry/emig2.jpg",
            "../../images/marry/emig3.jpg",
            "../../images/marry/emig4.jpg",
            "../../images/marry/emig5.jpg",
            "../../images/marry/emig6.jpg",
            "../../images/marry/emig7.jpg",
            "../../images/marry/emig8.jpg",
            "../../images/marry/emig9.jpg",
            
        ],
        details_list:[],
    },
     onLoad: function(options) {
        var that = this
        
        // 商品详情
        wx.request({
            url: 'http://bxu2442380578.my3w.com/details.html?term_id=' + options.id,
            // url: 'http://bxu2442380578.my3w.com/details.html?term_id=3',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                 that.setData({
                     details_list: res.data.data,
                })
            }
        })

    }
})
