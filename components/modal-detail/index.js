// components/modal-detail/modal-detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      'http://mall.ltg.cn/images/1%20(29).png',
      'http://mall.ltg.cn/images/1%20(30).png',
      'http://mall.ltg.cn/images/1%20(32).png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    previewImg(e){
      var _this = this;
      console.log(_this.data)
      var index = e.target.dataset.index;
      console.log(index)
      wx.previewImage({
        current: _this.data.imgUrls[index], // 当前显示图片的http链接
        urls: _this.data.imgUrls // 需要预览的图片http链接列表
      })
    }
  }
})
