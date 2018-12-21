// pages/hotelBooking/bookingDetail/bookingDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'productList',
    list: [{
      flag: false,
      title: '豪华花园景观双床房（无早）',
      price: '769',
      isRoomful: '满房',
    },
    {
      flag: false,
      title: '美女与野兽音乐剧套餐',
      price: '769',
      isRoomful: '有房',
    }
    ],
    // isShow: false,
    isShowModal:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleChange: function ({detail}) {
    console.log({
      detail
    })
    this.setData({
      current: detail.key
    });
    
  },
  collapse: function (e) {
    console.log(e)
    var index = e.target.dataset.index;
    var list = this.data.list;
    var data = list[index];
    data.flag = !data.flag;
    console.log(data)
    this.setData({
      list: list,
    })
  },
  productClick(){
    this.setData({
      isShowModal : !this.isShowModal
    })
  },
  commentClick(){
    wx.navigateTo({
      url: '../bookingComments/bookingComments',
    })
  },
  bookBtnClick(){
    wx.navigateTo({
      url: '../bookingOrderPay/bookingOrderPay',
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

  },
  goOrder(){
    wx.navigateTo({
      url: '../order/index',
    })
  }
})