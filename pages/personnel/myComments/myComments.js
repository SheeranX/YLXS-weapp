// pages/personnel/myComments/myComments.js
const util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      "id": "10001",
      "rate": 5,
      "content": '上雪山下了很大雪，是那种鹅毛般的大雪，非常喜欢看雪，感觉下雪天是最美的',
      "cardTitle": '丽江玉龙雪山印象丽江演出成人年卡',
      'cardName': '成人年卡',
      'price': '375'
    }, {
      "id": "10002",
      "rate": 4,
      "content": '上雪山下了很大雪，是那种鹅毛般的大雪，非常喜欢看雪，感觉下雪天是最美的',
      "cardTitle": '丽江玉龙雪山印象丽江演出成人年卡',
      'cardName': '成人年卡',
      'price': '175'
    }, {
      "id": "10003",
      "rate": 3,
      "content": '上雪山下了很大雪，是那种鹅毛般的大雪，非常喜欢看雪，感觉下雪天是最美的',
      "cardTitle": '丽江玉龙雪山印象丽江演出成人年卡',
      'cardName': '成人年卡',
      'price': '325'
    }],
    isGoTop: false,
  },
  editItem(e){
    var params =e.currentTarget.dataset.list;
    // console.log(params)
    wx.navigateTo({
      url: '../commentDetail/commentDetail?list=' + JSON.stringify(params),
    })
  },
  deleteItem(e) {
    console.log(e)
    var content = e.target.dataset.content;
    var index = e.target.id;
    console.log(index)
    var list = this.data.list;
    var _this = this;
    list.forEach(function(item, i) {
        if(content.id == item.id){
          list.splice(i,1)
          console.log(list)
          _this.setData({
            list : list
          })
        }
    })
  },
  onPageScroll({ scrollTop }) {
    let top = scrollTop;
    const that = this;
    util.toTop(top, that);
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