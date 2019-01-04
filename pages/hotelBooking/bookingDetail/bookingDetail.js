// pages/hotelBooking/bookingDetail/bookingDetail.js
import initDatepicker from "../../../plugins/datepicker/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'productList', //产品列表Tab栏默认项
    list: [{
      flag: false,
      title: '豪华花园景观双床房（无早）豪华花园景观双床房（无早）',
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
    isShowModal:false, //酒店详情弹窗
    isShowBookInfoModal:false, //预定须知
    duration: 1, //停留时间
    contract: [],
    
    bottomLoading:true
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
//产品列表tab栏点击事件
  handleChange: function ({detail}) {
    console.log({
      detail
    })
    this.setData({
      current: detail.key
    });
    
  },
 
  //箭头折叠
  collapse: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.index;
    var list = this.data.list;
    var data = list[index];
    data.flag = !data.flag;
    console.log(data)
    this.setData({
      list: list,
    })
  },
  //酒店介绍
  productClick() {
    wx.navigateTo({
      url: '../bookingIntroduce/bookingIntroduce',
    })
  },
  //酒店详情
  productDetailClick(){
    this.setData({
      isShowModal: !this.isShowModal
    })
  },
  //评论
  commentClick(){
    wx.navigateTo({
      url: '../bookingComments/bookingComments',
    })
  },
  //预定按钮
  bookBtnClick(){
    wx.navigateTo({
      url: '../bookingOrderPay/bookingOrderPay',
    })
  },
  // 预订须知
  bookInfo(){
    console.log(232)
    this.setData({
      isShowBookInfoModal:true
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
    initDatepicker({
      showInput: false, // 默认为 true
      // placeholder: '请选择日期', // input 输入框
      type: 'timearea', // [normal 普通单选模式(默认), timearea 时间段选择模式(待开发), multiSelect 多选模式(待完善)]
    });

    console.log(this.data.contract);
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
    var _this = this;
    setTimeout(function(){
      _this.setData({
        bottomLoading: false
      })
    }, 2000)
    
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