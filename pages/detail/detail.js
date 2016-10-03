Page({
  data:{
    datas:[],
    hidden:false,
  },
  onLoad:function(options){
    this.getData(options.id);
  },
  getData:function(id){
      var that=this;
     
      wx.request({
          url:"https://www.v2ex.com/api/topics/show.json?id="+id,
          success:function(data){
               
              that.setData({
                  datas:data.data[0],
              })
          }
      })
  },
  onReady:function(){
     this.setData({
      hidden:true,
    })
    
  },
  
})