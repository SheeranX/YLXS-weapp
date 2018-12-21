// pages/intoLijiang/intoLijiang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
        {id:10001,text:'历史文化'},
        {id:10002,text:'印象丽江'},
        {id:10003,text:'酒吧客栈'},
        {id:10004,text:"周边旅游"},
        {id:10005,text:"玉龙雪山"}
      ],
      articleArr:[
        {
          id:1,
          url:'https://bulma.io/images/placeholders/480x480.png',
          text:'多年以后当奥雷利亚诺布恩迪亚上校面对行刑队时仍然能够回忆起父亲带他去看冰块的那个遥远的下午',
          title:'百年孤独'
        },
        {
          id: 2,
          url: 'https://bulma.io/images/placeholders/480x480.png',
          text: '多年以后人们仍能够回忆起面对巨人时的恐惧',
          title:"进击的巨人"
        },
        {
          id: 3,
          url: 'https://bulma.io/images/placeholders/480x480.png',
          text: "逝者不死必将再起其势更烈",
          title:'权力的游戏'
        }
      ],
    loading: false,
    noData: false,
    isGoTop:false
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
      loading: true
    })

    setTimeout(() => {
      let data = {
        id: 1,
        url: 'https://bulma.io/images/placeholders/480x480.png',
        text: '多年以后当奥雷利亚诺布恩迪亚上校面对行刑队时仍然能够回忆起父亲带他去看冰块的那个遥远的下午',
        title: '百年孤独'
      }
      that.setData({
        loading: false,
        articleArr: that.data.articleArr.concat(data)
      })
    }, 2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll({ scrollTop }) {
    let top = scrollTop;
    if (top > 350) {
      this.setData({
        isGoTop: true
      })
    }
    if (top < 350) {
      this.setData({
        isGoTop: false
      })
    }
  },
  selected(e){
   //  console.log(e);
    const id = e.target.dataset.id;
    let list = this.data.list;
    let newList = list.map(function(item){
      if(item.id==id)
      {
          item['selected'] = true
      }
      else
        item['selected'] = false
      return item
    })

    this.setData({
      list: newList
    })
  }
})