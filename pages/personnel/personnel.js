// pages/personnel/personnel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.setBackgroundColor({
      backgroundColor:'#000'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5c9bfd',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    wx.setNavigationBarTitle({
      title: '个人中心'
    })
  },

  //设置
  settingClick() {
    wx.navigateTo({
      url: 'settings/settings',
    })
  },
  // 全部
  allClick() {
    wx.navigateTo({
      url: 'myOrder/myOrder',
    })
  },

  //待评价
  uncommnetClick(){
      wx.navigateTo({
        url: 'commentDetail/commentDetail',
      })
  },

  //待支付
  unpayClick(){
    wx.navigateTo({
      url: 'myOrder/myOrder',
    })
  },

  //待使用
  unusedClick(){
    wx.navigateTo({
      url: 'myOrder/myOrder',
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