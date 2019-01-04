// pages/personnel/myOrder/myOrder.js
const util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: [{
      key: 'all',
      title: '全部'
    },
    {
      key: 'unpaid',
      title: '待支付'
    },
    {
      key: 'unused',
      title: '待使用'
    },
    {
      key: 'uncomment',
      title: '待评价'
    }
    ],
    showItemNum: true,
    list: [{
      "orderType": "景区",
      "batchNum": "1796268467101",
      "payStatus": "已支付",
      "name": "刘备",
      "phone": "1356194835",
      "dataTime": "2018-12-15 15:20:56",
      "orderList": [{
        "showMoreFlg": true,
        "orderNum": "986347133725598",
        "orderStatus": "未支付",
        "cardName": "济南野生动物园年卡",
        "cardPrice": "300",
        "cardType": "成人年卡",
        "cardAmount": "1"
      }, {
        "showMoreFlg": true,
        "orderNum": "986347133725598",
        "orderStatus": "已支付",
        "cardName": "济南野生动物园年卡",
        "cardPrice": "300",
        "cardType": "成人年卡",
        "cardAmount": "1"
      }]
    }, {
      "orderType": "酒店",
      "batchNum": "295268467101",
      "payStatus": "已支付",
      "name": "张飞",
      "phone": "187154835",
      "dataTime": "2018-11-12 16:40:36",
      "orderList": [{
        "showMoreFlg": true,
        "orderNum": "684076915672302158",
        "orderStatus": "已支付",
        "cardName": "上海迪士尼乐园年卡",
        "cardPrice": "600",
        "cardType": "成人年卡",
        "cardAmount": "1"
      }, {
        "showMoreFlg": true,
        "orderNum": "349148812558821",
        "orderStatus": "已支付",
        "cardName": "上海迪士尼乐园年卡",
        "cardPrice": "600",
        "cardType": "成人年卡",
        "cardAmount": "1"
      }, {
        "showMoreFlg": true,
        "orderNum": "349148812558821",
        "orderStatus": "已支付",
        "cardName": "上海迪士尼乐园年卡",
        "cardPrice": "600",
        "cardType": "成人年卡",
        "cardAmount": "1"
      }]
    }],
    swiperHeight: 470,
    current_scroll: 'all',
    current_swiper: 0,
    loading: false,
    noData: false,
    isGoTop: false,
    listIndex: 0,
    showList: true,
    showMoreFlg: true,
  },
  swiperChange(e) {
    console.log(e);
    let idx = e.detail.current;
    let current_scroll = this.data.tab[idx].key;
    this.setData({
      current_scroll: current_scroll
    })
    this.onReachBottom();
  },

  onReachBottom() {
    const that = this;
    that.setData({
      loading: true,
    })
    const arr = that.data.list;
    setTimeout(() => {
      that.setData({
        loading: false,
        list: [...arr, ...arr]
      })
    }, 1500)
    that.calHeight();
    setTimeout(() => {
      let data = {
        "orderType": "景区",
        "batchNum": "1796268467101",
        "payStatus": "已支付",
        "name": "刘备",
        "phone": "1356194835",
        "dataTime": "2018-12-15 15:20:56",
        "orderList": [{
          "orderNum": "986347133725598",
          "orderStatus": "已支付",
          "cardName": "济南野生动物园年卡",
          "cardPrice": "300",
          "cardType": "成人年卡",
          "cardAmount": "1"
        }]
      }
      that.setData({
        loading: false,
        list: that.data.list.concat(data)
      })
      that.calHeight()
    }, 2000)
    //TO_DO update data from the server
  },

  calHeight() {
    var that = this;
    wx.createSelectorQuery().selectAll('#swiper').boundingClientRect(function (rect) {
      try {
        that.setData({
          swiperHeight: (rect[0].height) * (that.data.list.length) * 2 + 20
        })
      } catch (e) { }

    }).exec()
  },

  handleChangeScroll({
    detail
  }) {
    let idx = 0;
    this.data.tab.forEach(function (item, i) {
      if (item.key == detail.key)
        idx = i
    });
    this.setData({
      current_scroll: detail.key,
      current_swiper: idx
    });
    this.onReachBottom();
  },
  showMoreData(e) {
    //获取数组
    var list = e.currentTarget.dataset.list;
    var index = e.currentTarget.dataset.index;
    console.log(list)
    var showFlg = list[index].showMoreFlg
    console.log(showFlg)
    this.setData({
      // showList: !this.data.showList,
      showMoreFlg: !this.data.showMoreFlg
    })
    this.calHeight();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const screenH = wx.getSystemInfoSync().windowWidth;
    // console.log(screenH)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onPageScroll({ scrollTop }) {
    let top = scrollTop;
    const that = this;
    util.toTop(top, that);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    _this.setData({
      listIndex: 0
    })
    var list = _this.data.list;
    for (var i = 0; i < list.length; i++) {
      for (var j = 0; j < list[i].orderList.length; j++) {
        var orderList = list[i].orderList;
        if (j === 0) {
          var arr = new Array();
          arr.push(list[i].orderList[j]);
          console.log(arr)
          _this.setData({
            list : list
          })
          console.log(orderList)
        }
      }

    }
    _this.calHeight();
    // _this.showList();
  },

  orderListClick() {
    wx.navigateTo({
      url: '../orderDetail/orderDetail',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
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


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})