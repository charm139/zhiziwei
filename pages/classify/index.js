var app = getApp()
Page({
    data: {
        navLeftItems: [
            {
                "id": 1,
                "desc": "宝宝奶粉",
                "logo": "../../images/emoij/zz2.jpg",
            },
            {
                "id":2,
                "desc":"第二个",
                "logo": "../../images/emoij/zhizhibang.jpg",
            },
            {
                "id":3,
                "desc":"第三个",
                "logo": "../../images/emoij/charm.jpg",
            },
        ],
        navRightItems: [],
        curNav: 1,
		curIndex: 0
    },


    //事件处理函数
    // switchRightTab: function(e) {
    //     let id = e.target.dataset.id,
	// 		index = parseInt(e.target.dataset.index);
	// 	this.setData({
	// 		curNav: id,
	// 		curIndex: index
	// 	})
    // }

})