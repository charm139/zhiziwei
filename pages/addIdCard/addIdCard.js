var app = getApp()
var user_service = require('../API/userService.js')
var qiniuService = require('../API/qiniuService.js');
var util = require('../../utils/util.js')
Page({
  data:{
    cardTips: '您好！为了给你更好地服务，购买全球购商品，需要填写身份证信息，我们会为您的信息保密，请放心使用。',
    name: '',
    cardId: '',
    imageId: '',
    back_pic: '',
    front_pic: '',
    front: '',
    back: '',
    isUpdate: false,
    addSuccess: false
  },
  onLoad:function(options){
    var that = this;  
    app.getUserInfo(function(userInfo){
        that.setData({userInfo: userInfo})
    })
    if(options.type == 'update') {
       wx.setNavigationBarTitle({
        title: '编辑身份证信息'
       })
        try {
           var value = wx.getStorageSync('updateCardData');
           if (value) {
             var tempData = JSON.parse(value);
            //  console.log(typeof tempData.card_front_pic);
             that.setData({
                isUpdate: true,
                front_pic: tempData.card_front_pic,
                back_pic: tempData.card_back_pic,
                name: tempData.member_name,
                cardId: tempData.id,
                imageId: tempData.image_id
             })
          }
        } catch (e) {
            that.showTips(e);
        }
    }
  },
  onUnload: function() {
      var text = '';
      this.data.isUpdate ? text = '修改成功' : text = '证件信息已添加';
      this.data.addSuccess ? this.showTips(text) : '';
      wx.removeStorage({key: 'updateCardData'})
  },
  setName: function(e) {
      this.setData({name: e.detail.value});
  },
  setCardId: function(e) {
      this.setData({cardId: e.detail.value});
  },
   addCard: function() {
      var name = this.data.name, cardId = this.data.cardId, back = this.data.back, front = this.data.front;
      if(name == '' || cardId == '' || back == '' || front == '') {
          this.showTips("请完善证件信息");
          return;
      }
      if(!util.checkCard(cardId)) {
          this.showTips("请输入有效证件号码");
          return;
      }
      wx.showToast({
            title: '',
            icon: 'loading',
            duration: 10000
       })
      var that = this;
      user_service.addCard(this.data.userInfo.member_id, this.data.userInfo.accesstoken,  back, front, name, cardId, function(res){
            wx.hideToast();
            if(res.rsp == "succ") {
                that.setData({addSuccess: true});
                wx.navigateBack();
            }else{
                that.showTips(res.data);
            }
      });
  },
  modifyCard: function() {
      var name = this.data.name, cardId = this.data.cardId, back = this.data.back, front = this.data.front, back_pic = this.data.back_pic, front_pic = this.data.front_pic;
      if(front == ''){
          front = front_pic.substr(28).split("?")[0];
      }
      if(back == ''){
          back = back_pic.substr(28).split("?")[0];
      }
    //   console.log(front);
    //   console.log(back);
      if(name == '' || cardId == '') {
          this.showTips("请完善证件信息");
          return;
      }
      if(!util.checkCard(cardId)) {
          this.showTips("请输入有效证件号码");
          return;
      }
      wx.showToast({
            title: '',
            icon: 'loading',
            duration: 10000
       })
      var that = this;
      user_service.modifyCard(this.data.userInfo.member_id, this.data.userInfo.accesstoken, this.data.imageId, back, front, name, cardId,  function(res){
            wx.hideToast();
            if(res.rsp == "succ") {
                that.setData({addSuccess: true});
                wx.navigateBack();
            }else{
                that.showTips(res.data);
            }
      });
  },
  choseImg: function(e){
    var that = this, picSides = e.target.dataset.type;
    wx.chooseImage({
      count: 1,
      success: function(res){
        picSides == 'front' ? that.setData({front_pic: res.tempFilePaths}) : that.setData({back_pic: res.tempFilePaths});
        qiniuService.getQiniuToken(that.data.userInfo.member_id, that.data.userInfo.accesstoken, function(res2){
            if(res2.rsp=='succ') {
                var token = res2.data, img = res.tempFilePaths, date = new Date();
                var key = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()+ '/' + Math.random().toString(36).substr(2,8) + '.jpg';
                // console.log(key.length);
                that.imageSave(img, key, token, picSides);
            }
        })
      }
    })
  },
  imageSave: function(filePath, key, token, picSides){
        var that = this;
        wx.uploadFile({
            url: 'https://upload.qbox.me',
            filePath:filePath[0],
            name:'file',
            formData: {'key': key, 'token': token}, 
            success: function(res){
                var d = JSON.parse(res.data);
                picSides == 'front' ? that.setData({front: d.key}) : that.setData({back: d.key});
            },
            fail: function(res) {
                that.showTips(res);
            }
        })
  },
  showTips: function(tipText) {
       wx.showToast({
            title: tipText,
            icon: 'success',
            duration: 1200
       })
  }
})