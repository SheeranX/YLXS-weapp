// pages/hotelBooking/order/index.js
import initDatepicker from "../../../plugins/datepicker/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 1,
    isShowModal: false,
    isShowBuyTicket:false,
    duration: 1,
    contract: [],
    tourist: [
      {
        id: 1001,
        name: 'sheeran',
        card: '3343232333233234342',
        imageUrl: 'https://bulma.io/images/placeholders/128x128.png',
        cardType:"身份证"
      },
      {
        id: 1002,
        name: 'sheeran',
        card: '3343232333233234342',
        imageUrl: 'https://bulma.io/images/placeholders/128x128.png',
        cardType:"回乡证"
      }
    ],
    time:[
      {
        id:'t001',
        duration:"07:00-08:00",
        left:0
      },
      {
        id: 't002',
        duration: "08:00-09:00",
        left: 22
      },
      {
        id: 't003',
        duration: "09:00-10:00",
        left: 227
      }
    ],
    cardList:[
      {id:'c001',date:'03-27',price:190,left:0},
      {id:'c002',date:'03-28', price: 90, left: 2},
      {id:'c003', date: '03-29', price: 9, left: 211},
      {id:'c004', date: '更多日期', price: 9, left: 0}
    ],
    chooseTime:{},
    flag:0
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
      type: 'normal', // [normal 普通单选模式(默认), timearea 时间段选择模式(待开发), multiSelect 多选模式(待完善)]
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
  minus() {
    let num = this.data.value;
    num--
    if (num < 0)
      num = 0

    this.setData({
      value: num
    })
  },
  plus() {
    let num = this.data.value;
    num++;
    this.setData({
      value: num
    })
  },
  notice() {
    this.setData({
      isShowModal: true
    })
  },
  handleDel({ currentTarget }) {
    let temp = this.data.tourist;
    const index = currentTarget.dataset.idx;
    const key = `temp[${index}].isDel`;
    //debugger
    let flag = temp[index].isDel ? false : true;
    temp.map((item, i) => {
      if (i == index)
        temp[i].isDel = !temp[i].isDel;
      else
        temp[i].isDel = false;
    })
    this.setData({
      tourist: temp
    })
    console.log(currentTarget.dataset.idx);
  },
  del({ currentTarget }) {//删除联系人
    const idx = currentTarget.dataset.idx;
    let temp = this.data.tourist;
    temp.splice(idx, 1);
    this.setData({
      tourist: temp
    })
  },
  goPay() {//去付款
    wx, wx.navigateTo({
      url: '../bookingOrderPay/index',
    })
  },
  getTime({ currentTarget }){//弹窗时间选择
    const idx = currentTarget.dataset.flag;

    this.setData({
      isShowBuyTicket:true,
      flag:idx
    })
  },
  chooseTime({ currentTarget}){//选择乘坐时间
   const idx = currentTarget.dataset.idx;
   const flag = this.data.flag;
   const key = `chooseTime[${flag}]`;
   this.setData({
     [key]:this.data.time[idx].duration,
     isShowBuyTicket:false
   })
  },
  dayChoose({ currentTarget}){//顶部卡片选择日期
    const idx = currentTarget.dataset.idx;
    const len = this.data.cardList.length;
    if(len==(idx+1))
    {
      this.showDatepicker();
    }
    const key = `cardList[${idx}].choosed`;
    let days = this.data.cardList;
    for(let i=0;i<days.length;i++){
      if (days[i].left == 0)
        continue
     else if (i == idx)
        days[i].choosed = true;
      else
        days[i].choosed = false
    }
    this.setData({
      cardList: days
    })
  },
  tabMore(){//选择更多日期
     
  },
  /**
   * 更新用户
   */
  update({currentTarget}){
    console.log(currentTarget)
    const idx = currentTarget.dataset.idx;
    const obj = this.data.tourist[idx];
    wx.navigateTo({
      url: '../addPerson/index?info='+JSON.stringify(obj)+'&index='+idx,
    })
  }
})