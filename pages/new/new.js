Page( {
    data: {
        datas: [],
        loading: false,
        modal: true,
    },
    onLoad: function( options ) {
        var that = this;
        that.Request();
       
    },
    Request: function() {
        var that = this;
        wx.request( {
            url: "https://www.v2ex.com/api/topics/latest.json",
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
    Detail:function(e){
        //console.log(e.currentTarget.id);
        wx.navigateTo({
            url: '../detail/detail?postid='+e.currentTarget.id,
        })
    },
    onReady: function() {
    },
    onShow: function() {
    },
    onHide: function() {
    },
    onUnload: function() {
    }
})