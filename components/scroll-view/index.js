// components/scroll-view/index.js
Component({
  externalClasses: ['i-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    scroll:{//默认垂直方向，false 为水平方向
      type:Boolean,
      value:true
    },
    height:{
      type:String,
      value:''
    }
  },
  lifetimes:{
    created(){

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
    scroll(e) {
      console.log(e)
    },
    lower(e){
     this.triggerEvent("lower");
    }
  }
})
