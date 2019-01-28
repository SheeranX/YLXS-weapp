// components/contract/index.js
const toast = require("../../assets/scripts/toast.js");
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    limit:{
      type:Number,
      value:1
    },
    showAdd:{
      type:String,
      value:true
    },
    isRadio:{
      type:Boolean,
      value:true
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
  methods : {
    handleTap({currentTarget}){
      debugger
      const idx = currentTarget.dataset.idx;
      const list = this.data.list;
      const len = list.filter(item=>item.choosed==true).length;
      const limit = this.data.limit;
      if (len >= limit)
      {
        toast.tip("人数超出最大数量");
        this.setData({
          list: list.map((item, index) => {
            if (idx == index) {
              item.choosed = false
            }
            return item
          })
        })
      }
      else
      {
        this.setData({
          list: list.map((item, index) => {
            if (idx == index) {
              item.choosed = !item.choosed
            }
            // idx == index ? item.choosed = true : item.choosed = false
            return item
          })
        })
      }
      this.triggerEvent("tapRadio",list);
    },
    addPerson(){
      this.triggerEvent('addPerson');
    },
    /**
     * 删除联系人
     */
    del({currentTarget}){
      const index = currentTarget.dataset.idx;
      const id = this.data.list[index].individualFrequentContactsId
      this.triggerEvent('del',id);
    }, 
    /**
     * 编辑
     */
    edit({currentTarget}){
      const index = currentTarget.dataset.idx;
    //  const id = this.data.list[index].individualFrequentContactsId
      this.triggerEvent('edit',index);
    }
  },
  lifetimes: {
    // attached() {
    //   // 在组件实例进入页面节点树时执行
    //   debugger
    //   const list = this.data.list;
    //   this.setData({
    //     'list[0].choosed':true
    //   })
    // },
  }
})
