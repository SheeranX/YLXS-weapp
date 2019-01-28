// components/image/index.js
const {img:IMG} = require('../../assets/scripts/config.js');
Component({
  externalClasses: ['i-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    imgurl:{
      type:String,
      value:""
    },
    mode:{
      type:String,
      value:"scaleToFill"
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
    handleError(){
      this.setData({
        imgurl: "../../assets/images/" + IMG.noimg,
        mode:"widthFix"
      })
      console.log('error');
    }
  }
})
