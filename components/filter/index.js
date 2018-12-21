// components/filter/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShowFilter:{
      type:Boolean,
      value:false
    },
    data:{//需要填充的数据
      type:Array,
      value:[]
    },
    title:{//筛选项标题
      type:String,
      value: Symbol()
    },
    content:{//筛选项数组key
      type:String,
      value:""
    },
    val:{
      type: String,
      value: Symbol()
    },
    key:{//选项key
      type: String,
      value: Symbol()
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
    itemClick(e){
      const _this = this;
      let id = e.currentTarget.dataset.id;
      _this.selected(id, _this.data.data)
    },
    finish(){
    let selectedItem = [];
    let _this = this;
      let data = _this.data.data;
     data.map(function(item){
       let arr = item[_this.data.content].map(function(val){
         if (val.checked)
         {
           selectedItem.push(val);
         }
          return val
       })
       return item
     })
      _this.triggerEvent('finish',selectedItem) 
      _this.setData({
       isShowFilter:false
     })
    },
    //重置选项
    reset(){

      this.selected('', this.data.data,true)
    },
    //选择每一项触发
    selected(id,data,isReset){
      let _this = this
      let arr = data.map(function (item) {
        let sid = _this.data.key;
        let _arr = item[_this.data.content].map(function (val) {
          if(isReset)
          {
            val.checked = false;
          }
          else
          {
            if (id == val.sid) {
              if (val.checked)
                val.checked = false;
              else
                val.checked = true;
            }
          }
          return val
        })
        item[_this.data.content] = _arr;
        return item
      });
      _this.setData({
        data: arr
      })
    }
  }
})
