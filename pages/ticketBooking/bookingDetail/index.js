// pages/ticketBooking/bookingDetail/index.js
const util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'productList',
    list: [{
      flag: true,
      title: '玉龙雪山门票+碰碰车+卡丁车',
      price: '769',
      isRoomful: '满房',
    },
    {
      flag: false,
      title: '玉龙雪山日出日落+大保健',
      price: '76',
      isRoomful: '有房',
      },
      {
        flag: false,
        title: '玉龙雪山日出日落+大保健',
        price: '76',
        isRoomful: '有房',
      },
      {
        flag: false,
        title: '玉龙雪山日出日落+大保健',
        price: '76',
        isRoomful: '有房',
      }
    ],
    // isShow: false,
    isShowModal: false,
    loading: true,
    noData: false,
    isGoTop: false,
    isShowReminder:false
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
    const that = this;
    that.setData({
      loading: true,
    })
    const arr = that.data.list;
    setTimeout(()=>{
      that.setData({
        loading: false,
        list:[...arr,...arr]
      })
    },1500)
  },
  onPageScroll({ scrollTop }) {
    let top = scrollTop;
    console.log(top)
    const that = this;
    util.toTop(top, that);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleChange: function ({ detail }) {
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
  productClick() {
    wx.navigateTo({
      url: '../../hotelBooking/bookingIntroduce/bookingIntroduce',
    })
  },
  commentClick() {
    wx.navigateTo({
      url: '../bookingComments/index',
    })
  },
  bookBtnClick() {
    wx.navigateTo({
      url: '../bookingOrderPay/bookingOrderPay',
    })
  },
  /**
   * 显示预定须知
   */
  showReminder(){
    this.setData({
      isShowReminder:true
    })
  }
})