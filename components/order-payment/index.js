// components/order-payment/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: true,
    list: [{
      id: 1,
      name: '微信支付',
    }, {
      id: 2,
      name: '支付宝'
    }, {
      id: 3,
      name: '网银支付'
    }],
    position: 'right',
    current: '微信支付'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    collapse() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    handleChange({ detail = {} }) {
      this.setData({
        current: detail.value
      });
    },
    confirmPay(){
      this.triggerEvent('confirm', {})
    }
  }
})
