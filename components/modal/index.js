// components/modal/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{ //是否显示弹窗
      type:Boolean,
      value:true
    },
    position:{
      type:String,
      value:"top" //默认弹窗从顶部弹出 "bottom"为底部弹出
    },
    height:{ //定义弹窗内容的高度，可自定义 默认为 ‘80%’ 单位 rpx,px,%等
      type:String,
      value:'80%'
    },
    isBg:{
      type:Boolean,
      value: true
    },
    minHeight:{  //定义弹窗最小高度，可自定义，默认值为‘400rpx’
      type:String,
      value:'400rpx'
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
    //防止点击穿透
    preventD(){
      return false
    },
    //关闭弹窗
    close:function(){
     this.setData({
       isShow:false
     })
    
     this.triggerEvent("close");
    }
  }
})
