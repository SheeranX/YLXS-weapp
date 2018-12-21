// pages/intoLijiang/review/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
        {
          id:'10001',
          url:'https://bulma.io/images/placeholders/128x128.png',
          text:' “司机师傅，我第一次来上海，昨天被蜈蚣咬了，在我们老家鸡血能治好伤口，所以我想问一下哪里能叫到鸡”',
          title:'施瓦辛格',
          time:'2013-07-23 16:00:00'
        },
        {
          id: '10002',
          url: 'https://bulma.io/images/placeholders/128x128.png',
          text: ' “司机师傅，我第一次来上海，昨天被蜈蚣咬了，在我们老家鸡血能治好伤口，所以我想问一下哪里能叫到鸡”',
          title: '施瓦辛格',
          time: '2013-07-23 16:00:00'
        },
        {
          id: '10003',
          url: 'https://bulma.io/images/placeholders/128x128.png',
          text: ' “司机师傅，我第一次来上海”',
          title: '施瓦辛格',
          time: '2013-07-23 16:00:00'
        },
        {
          id: '10003',
          url: 'https://bulma.io/images/placeholders/128x128.png',
          text: ' “司机师傅，我第一次来上海，昨天被蜈蚣咬了，在我们老家鸡血能治好伤口，所以我想问一下哪里能叫到鸡”',
          title: '施瓦辛格',
          time: '2013-07-23 16:00:00'
        },
        {
          id: '10003',
          url: 'https://bulma.io/images/placeholders/128x128.png',
          text: ' “司机师傅，我第一次来上海，昨天被蜈蚣咬了，在我们老家鸡血能治好伤口，所以我想问一下哪里能叫到鸡,我第一次来上海，昨天被蜈蚣咬了，在我们老家鸡血能治好伤口，所以我想问一下哪里”',
          title: '施瓦辛格',
          time: '2013-07-23 16:00:00'
        }
      ],
      contentHeight:0,
      noData:false,
      loading:false,
      isShowModal:false,
      isBg:false,
      isReply:false,
      replyWho:"unknow"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.calHeight();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  calHeight() {
    var that = this;
    // wx.createSelectorQuery().selectAll('#content').boundingClientRect(function (rect) {
    //   try {
    //     that.setData({
    //       swiperHeight: rect[0].height * (that.data.list.length) * 2 + 'rpx'
    //     })
    //   } catch (e) { }
    // }).exec()
    wx.getSystemInfo({
      success(res) {
        that.setData({
          contentHeight: res.windowHeight*2-150+'rpx'
        })
      //  console.log(res.windowHeight)
      }
    })
  },
  lower(e){
    const that = this;
    that.setData({
      loading:true
    })
    setTimeout(()=>{
      that.setData({
        loading: false
      })
    },2000 )
  },
  chat(){
    const _this = this;

    _this.setData({
      isShowModal:true
    })
  },
  reply({ currentTarget}){
    console.log(currentTarget);
    this.setData({
      isShowModal: true,
      isReply:true
    })
  }
})