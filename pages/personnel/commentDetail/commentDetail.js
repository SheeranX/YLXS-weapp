// pages/personnel/commentDetail/commentDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starGuide: 5,
    starGuideDesc:'非常满意',
    starTravel: 0,
    starRepast: 0,
    starTraf: 4,
    height:30,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChangeGuide(e) {
    const index = e.detail.index;
    this.setData({
      'starGuide': index
    })
  },
  onChangeTravel(e) {
    const index = e.detail.index;
    this.setData({
      'starTravel': index
    })
  },
  onChangeRepast(e) {
    const index = e.detail.index;
    this.setData({
      'starRepast': index
    })
  },
  onChangeTraf(e) {
    const index = e.detail.index;
    this.setData({
      'starTraf': index
    })
  },
  sendComment(){
    wx.navigateTo({
      url: '../myComments/myComments',
    })
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

  }
})