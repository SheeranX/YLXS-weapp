// components/scroll-view/index.js
Component({
  externalClasses: ['i-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    //是否显示star
    isStar: {
      type: Boolean,
      value: true
    },
    //是否显示距离
    isDis: {
      type: Boolean,
      value: true
    },
    //是否显示距离，star和单价
    isDetail: {
      type: Boolean,
      value: true
    },
    item:{
      type:Object,
      value:{
        id: '',
        title: '',
        salePrice: '',
        originPrice: '',
        star: '',
        distance: '',
        img: '',
        singlePrice: ""
      }
    }
  },
  lifetimes: {
    created() {

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
    lower(e) {
      console.log('btm')
    },
    goto(){
      this.trigger("goto");
    }
  }
})
