// components/goTop/index.js
/**
 * 使用该组件需要在页面js引入 util.toTop()，使用参考首页index.js
 */
Component({
  /**
   * 组件的属性列表
   */
  lifetimes: {
    attached() {
     wx.getSystemInfoSync({
       success(res){
         console.log(res.screenHeight);
       }
     })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  properties: {
    isShow:{
      type:Boolean,
      value:false
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
    gotop(){
      wx.pageScrollTo({
        scrollTop: 0
      })
      this.setData({
        isShow:false
      })
    }
  }
})

