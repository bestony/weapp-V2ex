Page({
  data:{
    datas:[],
    hidden:false,
  },
  onReady:function(){
    this.setData({
      hidden:true,
    })
  },
  onShow:function(){
    
  },
  onLoad:function(options){
      var that =this;
    wx.request({
        url:"https://www.v2ex.com/api/topics/hot.json",
        success:function(data){
           
            that.setData({
                datas:data.data
            })
        }
    })
  },
  readDetial:function(e){
    wx.navigateTo({
      url:"../detail/detail?id="+e.currentTarget.id,
    })
  }
})