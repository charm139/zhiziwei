Page({
  onReady: function (e) {
    // this.audioCtx = wx.createAudioContext('myAudio');
    // wx.playBackgroundAudio({
    //   dataUrl: '../../images/audio/merryyou.mp3',
    //   title: '丽水',
    //   coverImgUrl: '../../images/audio/home.png'
    // })
    //获取用户信息
    // var that = this
    // app.getUserInfo(function(userInfo) {
    //     that.setData({
    //         userInfo: userInfo
    //     })
    // })

  },
  
  data: {
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },


})