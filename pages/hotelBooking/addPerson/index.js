// pages/hotelBooking/addPerson/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   form:{
     name: '',
     certificate: {
       id:'',
       name:''
     },
     cardID:"",
     phone:''
   },
   actions:[
     {
       id:"10010",
       name: "身份证",
     },
     {
       id: "10011",
       name: "回乡证",
     },
     {
       id: "10012",
       name: "残疾证",
     },
   ],
   isShow:false,
   selectedIdx:0
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
  inputUsername({detail}){
    console.log(detail.detail.value);
    this.setData({
      'form.name': detail.detail.value
    })
  },
  inputId({ detail}){
    console.log(detail.detail.value);
    this.setData({
      'form.cardID': detail.detail.value
    })
  },
  inputPhone({ detail }){
    console.log(detail.detail.value);
    this.setData({
      'form.phone': detail.detail.value
    })
  },
  handleClick(){
    this.setData({
      isShow: true
    })
  },
  handleCancel(){
    this.setData({
      isShow:false
    })
  },
  handleClickItem({detail}){
    const idx = detail.index;
    const cid = this.data.actions[idx].id;
    const name = this.data.actions[idx].name;
    this.setData({
      'form.certificate': {
         id:cid,
        name: name
      },
      isShow:false
    })
  },
  confirm(){
    const pages = getCurrentPages();
    const prevPage = pages[pages.length - 2];
    prevPage.setData({
      contract:[]
    })
   wx.navigateBack({
     delta:1
   })
  },
  formSubmit(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    console.log(this.data.form);
    const pages = getCurrentPages();
    const prevPage = pages[pages.length - 2];
    let temp = prevPage.data.tourist;
    temp.push(this.data.form);
    prevPage.setData({
      tourist: temp
    })
    wx.navigateBack({
      delta: 1
    })
  }
})