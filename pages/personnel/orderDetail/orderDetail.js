// pages/personnel/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      ticketName:"冰川公园大索道",
      useStatus:"待使用",
      ticketType:"索道成人票",
      ticketPrice:"265",
      ticketList:{
        "orderNo":"698134782618612",
        "singlePrice" : "156",
        "startTime":"2018-10-15",
        "endTime":'2019-10-10',
        "ticketNum":"2",
        "numOfRefund":"1",
        "refundAmount":"200",
        "getTicketNum":"0",
        "checkTicketNum":"0"
      },
      payInfo:{
        "payStatus":"已支付",
        "payMode":"微信支付",
        "payTime":"2018-09-15 16:20:12",
        "payMoney":"245"
      },
      getTicket:{
        "name":"张大大",
        "IDcardNum":"391587921587961588",
        "phone":"1329483615",
        "getTicketStatus":"已取票",
        "getTicketTime":"2018-12-12 12:12:12"
      },
    remark:"人生若只如初见，何事秋风悲画扇。等闲变却故人心，却道故人心易变。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  goToPay(){
    wx.navigateTo({
      url: '../../pay/payStatus/payStatus',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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

  }
})