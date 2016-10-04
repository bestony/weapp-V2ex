Page( {
  data: {
    datas: [],
    loading: false,
    modal: true,
  },
  onLoad: function( options ) {
    this.Request();
  },
  Request: function() {
    var that = this;
    wx.request( {
      url: "https://www.v2ex.com/api/nodes/all.json",
      success: function( data ) {
        that.setData( {
          datas: data.data,
          loading: true,
          modal: true,
        })
      },
      fail: function( data ) {
        that.setData( {
          modal: false
        })
      }
    })
  },
  NodeDetail:function(e){
      wx.navigateTo({
            url: '../detail/detail?nodeid='+e.currentTarget.id,
        })
  }

})