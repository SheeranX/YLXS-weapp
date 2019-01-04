// components/upload/index.js
const promise = require("../../assets/scripts/promise.js");
const chooseImage = promise.wxPromise(wx.chooseImage,true);
const uploadImg = promise.wxPromise(wx.uploadFile,true);
const canvasToTempFilePath = promise.wxPromise(wx.canvasToTempFilePath,true);
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      imgList:{
        type:Array,
        value:[
          {
            id:'i1001',
            imgUrl:'https://bulma.io/images/placeholders/128x128.png'
          },
          {
            id: 'i1002',
            imgUrl: 'https://bulma.io/images/placeholders/256x256.png'
          },
          {
            id: 'i1001',
            imgUrl: 'https://bulma.io/images/placeholders/480x480.png'
          }
        ]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
  
  }
})
