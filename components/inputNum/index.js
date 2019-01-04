// components/inputNum/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:{
      type:Number,
      value:1
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
    minus() {
      let num = this.data.value;
      num--
      if (num < 1)
        num = 1

      this.setData({
        value: num
      })
    },
    plus() {
      let num = this.data.value;
      num++;
      this.setData({
        value: num
      })
  }
  }
})
