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
  const reg = new RegExp("^1[3|4|5|7|8][0-9]{9}$");

  return reg.test(phoneNum); 
}
/**
 * 身份证验证
 * @param {string}-card 身份证号码
 * @return {boolean}-true 验证通过，false 验证不通过
 */
const regIDCard = (card)=>{
 
  const reg = new RegExp("^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$");

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
  var o = {
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
 * @params {string}- d 传入日期
 * @params {string}- fmt 目标格式 如：yyyy-mm-dd
 * @return {string}-参数d合法时返回日期
 * @return {string}-参数d不合法使返回 ''
 */
const formatDate = (d,fmt)=>{
  if(typeof d=='string' && d!="")
  {
    return new Date(d).Format(fmt)
  }
  else
    return ''
}
module.exports = {
  formatTime: formatTime,
  toTop: toTop,
}
