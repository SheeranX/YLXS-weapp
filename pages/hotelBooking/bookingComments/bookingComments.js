// pages/hotelBooking/bookingComments/bookingComments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{
      name1:'酒店服务',
      grade1:"4.9",
      name2:"酒店卫生",
      grade2:"4.7",
      name3:"酒店设施",
      grade3:"4.8",
      name4:"酒店位置",
      grade4:"4.6"
    },
    commentList:[{
      "id": "10000010",
      "nickName": "卡莉斯塔",
      "roomType": "商务大床房",
      "content": "大床房",
      "dateTime": '2018-12-12 10:59:45',
      "like": true,
      "rate": 5
    }, {
        "id": "10000011",
        "nickName": "卡尔玛",
        "roomType": "经济大床房",
        "content": "经济大床房",
        "dateTime": '2018-12-12 10:59:45',
        "like": true,
        "rate": 5
      }, {
        "id": "10000012",
        "nickName": "弗雷尔卓德之心",
        "roomType": "商务大床房",
        "content": "大床房",
        "dateTime": '2018-12-12 10:59:45',
        "like": true,
        "rate": 5
      }, {
        "id": "10000013",
        "nickName": "沙漠皇帝",
        "roomType": "经济大床房",
        "content": "大床房",
        "dateTime": '2018-12-12 10:59:45',
        "like": true,
        "rate": 5
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  likeBtnClick(){
    
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