const promise = require("promise.js");
const { code:CODE,server:SERVER,tip:TIP} = require("config.js");
const {api}  = require("interface.js");
const toast = require("toast.js");

let newPromise = promise.wxPromise(wx.request);

/**
 * http请求的公共方法
 * @param {string} url-接口地址
 * @param {string} method-请求方式
 * @param {Object} data - 请求参数
 */
const  request = ({url,method="POST",data={}})=>{
  wx.showNavigationBarLoading();
  return newPromise({
    url:SERVER+url,
    header: {
      'content-Type': 'application/json',
    },
    method: method,
    data:data
  })
  .then(res=>{
    wx.hideNavigationBarLoading();
    if (res.code == CODE.SUCCESS)
    {
      return res.hasOwnProperty('data') ? Promise.resolve(res.data) : Promise.resolve(res)
    } 
    else if (res.code == CODE.EXCEPTION){
      toast.tip(res.message);
       return Promise.reject(res.message)
    }
    else
    {
      toast.tip(res.message);
      return Promise.reject(res)
    }
  })
  .catch(error=>{
    wx.hideNavigationBarLoading();
    toast.tip(error||TIP.network);
    return Promise.reject();
  })
}

module.exports = {
  request: request
}