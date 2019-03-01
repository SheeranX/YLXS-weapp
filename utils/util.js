const promise = require('../assets/scripts/promise.js');
/**
 * 日期格式化
 * @param{Date} date 日期
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/*   计算时间间隔
 *   @param{string} - interval,字符串表达式，表示要添加的时间间隔类型.
 *   @param{Number} - number,数值表达式，表示要添加的时间间隔的个数.
 *   @param{Date} - date起始时间对象.
 *   @return{Date} - 新的时间对象
 *   let now = new Date();
 *   let newDate = DateAdd( "d", 5, now);
 *---------------   DateAdd(interval,number,date)   -----------------
 */
const DateAdd = (interval, number, date)=> {
  switch (interval) {
    case "y": {
      date.setFullYear(date.getFullYear() + number);
      return date;
      break;
    }
    case "q": {
      date.setMonth(date.getMonth() + number * 3);
      return date;
      break;
    }
    case "M": {
      date.setMonth(date.getMonth() + number);
      return date;
      break;
    }
    case "w": {
      date.setDate(date.getDate() + number * 7);
      return date;
      break;
    }
    case "d": {
      date.setDate(date.getDate() + number);
      return date;
      break;
    }
    case "h": {
      date.setHours(date.getHours() + number);
      return date;
      break;
    }
    case "m": {
      date.setMinutes(date.getMinutes() + number);
      return date;
      break;
    }
    case "s": {
      date.setSeconds(date.getSeconds() + number);
      return date;
      break;
    }
    default: {
      date.setDate(d.getDate() + number);
      return date;
      break;
    }
  }
}

/**
 * 显示隐藏回到顶部按钮，需放在onPageScrol中使用，并传入scrollTop
 * @param {string} -top 离顶部的距离 
 * @param {object} -that 页面的this 
 */
const toTop = (top,that)=>{
  if (top > 350) {
    that.setData({
      isGoTop: true
    })
  }
  if (top < 350) {
    that.setData({
      isGoTop: false
    })
  }
}
/**
 * 手机号验证
 * @param {string}- phoneNum 
 * @return{boolean}- true 验证通过，false 验证不通过
 */
const regPhone = (phoneNum)=>{
  const reg = new RegExp("^1[3|4|5|7|8|9][0-9]{9}$");

  return reg.test(phoneNum); 
}
/**
 * 身份证验证
 * @param {string}-card 身份证号码
 * @return {boolean}-true 验证通过，false 验证不通过
 */
const regIDCard = (card)=>{
  const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  return reg.test(card);
}

/**
 * 邮箱验证
 * @param  {string} email 邮箱
 * @return {boolean} true 验证通过,false 验证不通过
 * @example 
 * console.log(regEmail(email))
 */
const regEmail = (email) =>{
  const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 

  return reg.test(email)
}

/**
 * 验证电话是否合法
 * @param{string} telePhonestr 电话号码
 * @return true为合法 false为不合法
 */
function checkTelePhone(telePhonestr) {
  var pattern = new RegExp("^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$");
  return pattern.test(telePhonestr);
}
/**
 * 日期格式化 
 * @params{string} -日期格式 如：yyyy-mm-dd
 * @return {string} fmt-字符串类型的日期 
 */
Date.prototype.Format = function (fmt) {
  let o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }
  return fmt;
}
/**
 * @params {string}-d 传入日期
 * @params {string}-fmt 目标格式 如：yyyy-MM-dd （小程序不要使用 ‘-’格式的，兼容性问题，ios会报错，用‘/’代替）
 * @return {string}-参数d合法时返回日期
 * @return {string}-参数d不合法使返回 ''
 */
const formatDate = (d,fmt)=>{
  if(typeof d=='string' && d!="")
  {
    let reg = new RegExp('-');
    return new Date(d.replace(reg,"/")).Format(fmt)
  }
  else
    return ''
}

/**
 * 获取当前页面的路径层级
 * @return{string} - url 页面路径层级
 */
const getRelativePath = ()=>{
  const length = getCurrentPages().length;
  const currentRoute = getCurrentPages()[length - 1].route;
  const pathIndex = currentRoute.split('/').length;
  let url = ""
  for (let i = 0; i < pathIndex - 1; i++) {
    url += '../'
  }
  return url
}

/**
 * 获取当前位置坐标
 */
const  getCurLocation = ()=>{
  let getLocation = promise.wxPromise(wx.getLocation, true);
  return getLocation({ type: 'wgs84' })
  .then(res=>{
    return Promise.resolve({
      latitude: res.latitude,
      longitude: res.longitude
    })
  })
}

/**
 *  计算swiper高度
 * @param {String} - ele 目标元素class
 * @param {Object} - that 上下文this
 */
const calHeight = (ele, that, swiperHeight)=> {
  wx.createSelectorQuery().selectAll(ele).boundingClientRect(function (rect) {
    let height = 0, space = 0, i = 0;
    console.log(rect)
    //debugger
    try {
      console.log(rect);
      if(Array.isArray(rect)&&rect.length>0)
      {
        space = rect[1].top - rect[0].top - rect[0].height;
        rect.forEach(function (item) {
          height += item.height;
        })
        that.setData({
          [swiperHeight]: (height + (space > 0 ? space * (rect.length) : 0)) 
        })
      }
      else
      {
        that.setData({
          [swiperHeight]: 0
        })
      }
    } catch (e) { }
  }).exec()
}

/**
 * 函数节流
 * @param {function} - func 需要做节流的函数
 * @parm {number} - wait 等待多久后再次触发
 * @return {function} -节流函数
 */
const throttle = (func,wait)=>{
  let lastTime = null;
  let timeOut;
  return function(){
    let context = this;
    let now = +new Date();
    if(now - lastTime - wait>0)
    {
      if(timeOut)
      {
        clearTimeout(timeOut);
        timeOut = null;
      }
      func.apply(context,arguments);
      lastTime = now;
    }
    else if(!timeOut)
    {
      timeOut = setTimeout(()=>{
        func.apply(context,arguments)
      },wait)
    }
  }
}

/**
 * 函数去抖
 * @param {function} - func 函数方法
 * @param {wait} - 设置去抖时间 
 * @return {function} - 去抖函数
 */
const debounce = (func,wait)=>{
  let lastTime = 0;
  let timeout;
  return function(){
    let context = this;
    let now = +new Date();
    if(now-lastTime-wait>0)
    {
      setTimeout(()=>{
        func.apply(context,arguments);
      },wait)
    }
    else
    {
      if(timeout)
      {
        clearTimeout(timeout)
        timeout = null;
      }
      timeout = setTimeout(()=>{
        func.apply (context,arguments);
      },wait)
    }
    lastTime = now;
  }
}

/**
 * uri 编码
 */
const encodeUri = (uri)=>{
  return encodeURIComponent(uri);
} 
/**
 * uri 逆解析
 */
const decodeUri = (uri)=>{
  return decodeURIComponent(uri)
}
module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  toTop: toTop,
  getCurLocation: getCurLocation,
  calHeight: calHeight,
  throttle: throttle,
  debounce: debounce,
  encodeUri: encodeUri,
  decodeUri: decodeUri,
  DateAdd: DateAdd,
  regPhone:regPhone,
  regIDCard: regIDCard
}
