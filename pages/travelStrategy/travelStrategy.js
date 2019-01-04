// pages/travelStrategy/travelStrategy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    noData:false,
    loading:false,
    articleH:'',
    currentArticle:0,
    tabs:['推荐游记',"最新游记"]
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
    let _this = this
    _this.setData({
      loading: true,
    })

    setTimeout(()=>{
      _this.setData({
        loading: false,
      })
    },2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  prev(){//swiper右滑
    let _current = this.data.current;
    _current--
    if (_current<0)
      _current = 0
    this.setData({
      current: _current
    })
  },
  next(){//swiper 左滑
    let _current = this.data.current;
    _current++;
    if (_current > 2)
      _current = 2
    this.setData({
      current: _current
    })
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  calHeight() {
    var that = this;
    wx.createSelectorQuery().selectAll('#swiper').boundingClientRect(function (rect) {
      try {
        that.setData({
          articleH: rect[0].height * (that.data.list.length) * 2 + 'rpx'
        })
      } catch (e) { }
    }).exec()
  },
  switchTab({ currentTarget }) {//swiper 切换
    console.log(currentTarget.dataset);
    let idx = currentTarget.dataset.idx;
    this.setData({
      currentArticle:idx
    })
  },
  handleSwiper({ detail}){ //swiper 切换
    let current = detail.current;
    this.setData({
      currentArticle:current
    });
  },
  goCompass(){ //游记指南跳转
    wx.navigateTo({
      url: 'compass/index',
    })
  },
  goWrite(){
    wx.navigateTo({
      url: 'writeArticle/index',
    })
  }
})