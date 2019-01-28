/**
 * 使用promise对小程序api进行封装
 * @param{function}-fn 传入的小程序api 
 * @param{boolean}-flag 默认为false,用于区别小程序api回调函数是否存在data
 * @return {promise} - 返回promise状态
 * @example 
 * wxPromise(wx.request) 该api接口的res存在data参数，所以不传 flag
 */
function wxPromise(fn, flag) {
  let isFlag = flag || false;

  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        if (!isFlag) {
          resolve(res.data);
        }
        else
          resolve(res)
      }

      obj.fail = function (res) {
        if (!isFlag) {
          reject(res.data);
        }
        else {
          reject(res);
        }
      }

      fn(obj);
    });
  }
}

module.exports = {
  wxPromise: wxPromise
}