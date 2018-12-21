//index.js
const util = require('../../utils/util.js');
//获取应用实例
const toast = require("../../assets/scripts/toast.js");
const app = getApp()

Page({
  data: {
    tab:[
      {
        key: 'tab1',
        title: '超值套餐'
      },
      {
        key: 'tab2',
        title: '景点门票'
      },
      {
        key: 'tab3',
        title: '酒店客栈'
      },
      {
        key: 'tab4',
        title: '精品路线'
      },
      {
        key: 'tab5',
        title: '美食酒吧'
      }
    ],
    current_scroll:'tab1',
    current_swiper:0,
    swiperHeight:300,
    loading:true,
    noData:false,
    isGoTop:false,
    isShowModal:false,
    imgUrls: [
      'https://bulma.io/images/placeholders/128x128.png',
      'https://bulma.io/images/placeholders/256x256.png',
      'https://bulma.io/images/placeholders/480x480.png'
    ],
    list: [
      {
        id: 10000,
        title: '优山美地国家森林公园地国家森林',
        salePrice: '998',
        originPrice: '1300',
        star: '4',
        distance: '0.8km',
        img: 'https://bulma.io/images/placeholders/480x480.png',
        singlePrice: "123"
      },
      {
        id: 10001,
        title: '莫哈维大沙漠',
        salePrice: '123',
        originPrice: '1234',
        star: '3',
        distance: '12km',
        img: "https://bulma.io/images/placeholders/256x256.png",
        singlePrice: '134'
      },
      {
        id: 10002,
        title: '上海东方明珠',
        salePrice: '100',
        originPrice: '1000',
        star: '1',
        distance: '1.8km',
        img: "https://bulma.io/images/placeholders/128x128.png",
        singlePrice: "543"
      }
    ],
    condition: [
      { content: [{ sid: 10001, text: '五星级/豪华' }, { sid: 10002, text: "四星级/一般" }, { sid: 10003, text: "三星级/辣鸡" }], name: "星级" },
      { content: [{ sid: 20001, text: '￥400以下' }, { sid: 20002, text: "￥400-￥800" }, { sid: 20003, text: "￥800-￥900" }], name: "价格区间" },
      { content: [{ sid: 30001, text: '公寓' }, { sid: 30002, text: "客栈" }, { sid: 30003, text: "名宿" }], name: "特色" }
    ]
  },
  onLoad: function () {
    const screenH = wx.getSystemInfoSync().windowWidth;
   // console.log(screenH);
  },
  handleChangeScroll({ detail }) {
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
  onReady(){
  //  toast.modal({
  //     title:'提升',
  //     content:"这是一条提示",
  //     isCancel:false
  //   }).then(res=>{
  //     console.log(res);
  //   });
  },
  onPageScroll({scrollTop}){
    let top = scrollTop;
    const that = this;
    util.toTop(top,that);
  },
  onReachBottom(){
    const that = this;
    that.calHeight();
    that.setData({
      loading: true,
    })
    setTimeout(()=>{
      let data = {
        id: 10002,
        title: '上海东方明珠',
        salePrice: '100',
        originPrice: '1000',
        star: '1',
        distance: '1.8km',
        img: "https://bulma.io/images/placeholders/128x128.png",
        singlePrice: "543"
      }
        that.setData({
          loading:false,
          list: that.data.list.concat(data)
        })
     that.calHeight()
    },2000)
    //TO_DO update data from the server
  },
  calHeight(){
    var that = this;
     wx.createSelectorQuery().selectAll('#swiper').boundingClientRect(function (rect) {
      try{
        that.setData({
          swiperHeight: rect[0].height * (that.data.list.length) * 2 + 'rpx'
        })
      }catch(e){}
     }).exec()  
  },
  swiperChange(e){
    console.log(e);
    let idx = e.detail.current;
    let current_scroll = this.data.tab[idx].key;
    this.setData({
      current_scroll: current_scroll
    })
    this.onReachBottom();
  },
  temp(){
    this.setData({
      isShowModal:true
    })
  },
  finish(e){
    console.log(e);
    let para = e.detail;
    console.log(para);
  },
  // 酒店预订
  hotelBooking(){
    wx.navigateTo({
      url: '../hotelBooking/list',
    })
  }
})
