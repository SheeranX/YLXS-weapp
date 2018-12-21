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

//显示隐藏回到顶部按钮，需放在onPageScrol中使用，并传入scrollTop
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

module.exports = {
  formatTime: formatTime,
  toTop: toTop
}
