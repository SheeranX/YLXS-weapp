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
      return Promise.resolve(res.data)
    }
    else
    {
      toast.tip(res.message);
      return reject();
    }
  })
  .catch(error=>{
    wx.hideNavigationBarLoading();
    toast.tip(TIP.network);
  })
}

module.exports = {
  request: request
}