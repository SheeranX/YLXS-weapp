let promise = require("promise.js");
let showModal = promise.wxPromise(wx.showModal,true);

/**
 * 全局消息的成功提示
 * @param {string} -msg 需要传入的提示信息
 */
 const success = (msg)=>{
    wx.showToast({
      title: msg,
      icon: 'success',
      duration: 2000
    })
 }

/**
 * 全局提示（包括错误提示，信息提示，警告提示）
 * @param {string} -msg 需要传入的提示信息
 */
 const tip = (msg)=>{
   wx.showToast({
     title: msg,
     icon:'none',
     duration:2000
   })
 }

/**
 *正在加载中
 */
 const loading = ()=>{
   wx.showLoading({
     title: '正在加载中...',
     mask:true
   })
 }

 /**
  * 关闭加载
  */
const hideLoading = ()=>{
  wx.hideLoading();
}

/**
 * 弹窗提示
 * @param {object} -obj 小程序弹窗封装
 */
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
     modal: modal,
     loading: loading,
     hideLoading: hideLoading
 }