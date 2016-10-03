var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../new/new'
    })
  },
  BindRequest:function(){
    wx.navigateTo({
      url:'../new/new'
    })
  }
  ,
  onLoad: function () {
   
  }
})
