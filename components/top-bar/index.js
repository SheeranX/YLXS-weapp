// components/top-bar/index.js
Component({
  externalClasses: ['i-class'],
  /**
   * 组件的属性列表
   */
  
  properties: {

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
    filterate(){
      this.triggerEvent('filter', {})
      console.log("我是组件筛选的点击事件")
    }
  }
})
