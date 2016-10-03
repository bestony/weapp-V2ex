Page({
  data:{
    datas:[]
  },
  
  onLoad:function(options){
      var that =this;
    wx.request({
        url:"https://www.v2ex.com/api/topics/hot.json",
        success:function(data){
           // console.info(data.data);
            that.setData({
                datas:data.data
            })
        }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})