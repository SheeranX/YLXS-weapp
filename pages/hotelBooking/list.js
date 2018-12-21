// pages/hotelBooking/list.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 10000,
        title: '优山美地国家森林公园地国家森林',
        salePrice: '998',
        originPrice: '1300',
        star: '4',
        distance: '0.8km',
        img: 'https://bulma.io/images/placeholders/480x480.png',
        singlePrice: "123"
      },
      {
        id: 10001,
        title: '莫哈维大沙漠',
        salePrice: '123',
        originPrice: '1234',
        star: '3',
        distance: '12km',
        img: "https://bulma.io/images/placeholders/256x256.png",
        singlePrice: '134'
      },
      {
        id: 10002,
        title: '上海东方明珠',
        salePrice: '100',
        originPrice: '1000',
        star: '1',
        distance: '1.8km',
        img: "https://bulma.io/images/placeholders/128x128.png",
        singlePrice: "543"
      }
    ],
    swiperHeight: 300,
    loading: true,
    noData: false,
    isShowFilter:false,
    isStar:false,
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
})