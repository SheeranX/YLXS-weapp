// components/comments-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value: [{
        "id": "",
        "nickName": "",
        "roomType": "",
        "content": "",
        "dateTime": '',
        "like": "",
        "rate": "",
        "imgUrl":[]
      }]
    },
    isImg:{
      type:Boolean,
      value:false
    },
    isType:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scroll:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    likeBtnClick(){
      this.triggerEvent('click');
    },
    previewImg({ currentTarget}){
      console.log(currentTarget);
      const current = currentTarget.dataset.src;
      const seq = currentTarget.dataset.seq;
      console.log(seq);

      wx.previewImage({
        current: current, // 当前显示图片的http链接
        urls: this.data.list[seq].imgUrl // 需要预览的图片http链接列表
      })
    }
  }
})
