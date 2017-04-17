var app = getApp()
var images=[
    'http://bxu2442380578.my3w.com/data/upload/portal/20170417/58f47da4c7133.jpg',
    'http://bxu2442380578.my3w.com/data/upload/portal/20170417/58f47da533c84.jpg',
    'http://bxu2442380578.my3w.com/data/upload/portal/20170417/58f47da59272b.jpg',
    'http://bxu2442380578.my3w.com/data/upload/portal/20170417/58f47da5ae4db.jpg',
    'http://bxu2442380578.my3w.com/data/upload/portal/20170417/58f47da61c2fe.jpg',
    'http://bxu2442380578.my3w.com/data/upload/portal/20170417/58f47da67b669.jpg',
    'http://bxu2442380578.my3w.com/data/upload/portal/20170417/58f47df1407bc.jpeg',
];
var loves=[
          '最难忘的是你的微笑，当它绽开在你的脸上时，我仿佛感到拂过一阵春风，暖融融的，把我的心都溶化了。',
          '自从我得到你的爱，好像在漫漫的黑暗中见到了光明，好象在无涯的沙漠中得到了清泉，更好像在山石中发现了一枝鲜花，我怎能不感谢你呢？',
          '自从你出现后，我才知道原来有人爱是那么的美好..',
          '只有你知我的情绪 也只有你能带给我情绪',
          '只要能常常和你见面，我就觉得快活；只要依偎着你娇小的身躯，我就不会寂寞。',
          '在认识你之后...我才发现自己可以这样情愿的付出.',
          '愿把我的心嵌入你的心，使我俩的爱永远不变。',
          '因为知道不能没有你 所以我会更珍惜....',
          '我想要和你一起慢慢变老',
          
        ];
Page({
    data: {
        pictrues:[
            {
                name:'这里不只故事还有酒',
                'link':'',
                'img':images[0],
            },
            {
                name:'这里没有你的，除了我',
                'link':'',
                 'img':images[1],
            },
            {
                name:'你想要的都在这里',
                'link':'',
                 'img':images[2],
            },
        ],
        images:images,
        lists:[],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false  
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
                that.setData({
                    lists: res.data,
                })
            }
        })
    },
  // onLoad: function () {
  //   var that = this
  //   app.getUserInfo(function(userInfo){
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // }
})
