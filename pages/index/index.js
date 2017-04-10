var app = getApp()
Page({
    data: {
        images:[
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
        loves:[
          '最难忘的是你的微笑，当它绽开在你的脸上时，我仿佛感到拂过一阵春风，暖融融的，把我的心都溶化了。',
          '自从我得到你的爱，好像在漫漫的黑暗中见到了光明，好象在无涯的沙漠中得到了清泉，更好像在山石中发现了一枝鲜花，我怎能不感谢你呢？',
          '自从你出现后，我才知道原来有人爱是那么的美好..',
          '只有你知我的情绪 也只有你能带给我情绪',
          '只要能常常和你见面，我就觉得快活；只要依偎着你娇小的身躯，我就不会寂寞。',
          '在认识你之后...我才发现自己可以这样情愿的付出.',
          '愿把我的心嵌入你的心，使我俩的爱永远不变。',
          '因为知道不能没有你 所以我会更珍惜....',
          '我想要和你一起慢慢变老',
          
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false  
    },
  onLoad: function () {
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
