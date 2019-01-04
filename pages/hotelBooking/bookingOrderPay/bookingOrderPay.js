// pages/hotelBooking/bookingOrderPay/bookingOrderPay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    list: [{
      id: 1,
      name: '微信支付',
      img: '../../../assets/images/wxPay.png',
    }, {
      id: 2,
      name: '支付宝',
      img: '../../../assets/images/aliPay.png'
    }, {
      id: 3,
      name: '网银支付',
        img: '../../../assets/images/uniaonPay.png'
    }],
    position: 'right',
    current: '微信支付'
  },

  collapse() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleChange({
    detail = {}
  }) {
    this.setData({
      current: detail.value
    });
  },
  confirmPay() {
    wx.navigateTo({
      url: '../../pay/payStatus/payStatus',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.animation = wx.createAnimation()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  confirm() {
    wx.navigateTo({
      url: '../../pay/paySuccess/paySuccess',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})