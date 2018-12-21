// components/float-review/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isMessage:{ //是否需要显示review
      type:Boolean,
      value:true
    },
    likeCount:{
      type: null,
      value:''
    },
    messageCount: {
      type: null,
      value: ''
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
     like(){
       this.triggerEvent('like');
     },
     message(){
       this.triggerEvent('message');
     }
  }
})
