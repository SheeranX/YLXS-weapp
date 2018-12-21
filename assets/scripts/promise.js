
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
        wx.hideLoading()
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