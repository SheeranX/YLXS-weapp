// pages/hotelBooking/order/index.js
import initDatepicker from "../../../plugins/datepicker/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:1,
    isShowModal:false,
    duration:1,
    contract:[],
    tourist:[
      {
        id:1001,
        name:'sheeran',
        card:'3343232333233234342',
        imageUrl:'https://bulma.io/images/placeholders/128x128.png'
      },
      {
        id: 1002,
        name: 'sheeran',
        card: '3343232333233234342',
        imageUrl: 'https://bulma.io/images/placeholders/128x128.png'
      }
    ]
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  minus(){
    let num = this.data.value;
    num--
    if(num<0)
     num = 0

    this.setData({
      value: num
    })
  },
  plus(){
    let num = this.data.value;
    num++;
    this.setData({
      value: num
    })
  },
  notice(){
    this.setData({
      isShowModal:true
    })
  },
  handleDel({currentTarget}){
    let temp = this.data.tourist;
    const index = currentTarget.dataset.idx;
    const key = `temp[${index}].isDel`;
    //debugger
    let flag = temp[index].isDel?false:true;
    temp.map((item,i)=>{
      if(i==index)
        temp[i].isDel = !temp[i].isDel;
      else
        temp[i].isDel = false;
    })
    this.setData({
      tourist:temp
    })
    console.log(currentTarget.dataset.idx);
  },
  del({ currentTarget }){
    const idx = currentTarget.dataset.idx;
    let temp = this.data.tourist;
    temp.splice(idx,1);
    this.setData({
      tourist:temp
    })
  },
  goPay(){
    wx,wx.navigateTo({
      url: '../bookingOrderPay/bookingOrderPay',
    })
  }
})