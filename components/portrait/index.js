// components/portrait/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    avatarShow:{
      type:Boolean,
      value: true
    },
    time:{ //时间
      type:String,
      value:''
    },
    browser:{//浏览量
      type:String,
      value:''
    },
    src:{//图片地址
       type:String,
       value:''
    },
    title:{//标题
      type:String,
      value:''
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
