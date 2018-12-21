let promise = require("promise.js");
let showModal = promise.wxPromise(wx.showModal,true);

//成功提示
 const success = (msg)=>{
    wx.showToast({
      title: msg,
      icon: 'success',
      duration: 2000
    })
 }

//提示（包括错误提示，信息提示，警告提示）
 const tip = (msg)=>{
   wx.showToast({
     title: msg,
     icon:'none',
     duration:2000
   })
 }
//弹窗
const modal = (obj)=>{

  return showModal({
       title: obj.title, // 弹窗标题
       content: obj.content, // 弹窗内容
       showCancel: obj.isCancel||false,//是否显示取消按钮，不填或者 'false' 则不显示
       cancelText: obj.cancelText||"取消",//取消文本， 默认为 ‘取消’
       confirmText: obj.confirmText||"确定",//确定文本 默认为 ‘确定’
  })
}


module.exports = {
     success: success,
     tip:tip,
     modal: modal
 }