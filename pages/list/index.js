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
        lists: [],
        curNav: 1,
		curIndex: 0
    },
    onLoad: function() {

        var that = this
        
        wx.request({
            url: 'http://bxu2442380578.my3w.com/classify.html',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                Console.log(res)
                that.setData({
                    lists: res.data,
                })
            }
        })
    },

    //事件处理函数
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
		this.setData({
			curNav: id,
			curIndex: index
		})
    }

})