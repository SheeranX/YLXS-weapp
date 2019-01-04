//服务地址
const SERVER = "http://192.168.18.57:8501/";

//接口版本
const VERSION = "v1_0";

//返回值类型
const CODE = {
  SUCCESS:"200"
}

//地点标识
const MARK = {
  adlocation:1,
  platformType: "H_FIVE"
}

//错误提示
const TIP = {
  network:"网络异常，请检查网络连接"
}
module.exports = {
  server: SERVER,
  code: CODE,
  version: VERSION,
  mark:MARK,
  tip: TIP
}
