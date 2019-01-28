//服务地址
const SERVER = "http://192.168.18.90:8802/";

//接口版本
const VERSION = "v1_0";

//返回值类型
const CODE = {
  SUCCESS: "200",
  EXCEPTION:"500"
  // INEXISTENCE:"51004" //不存在
}

//标识
const MARK = {
  adlocation:1,
  platformType: "WXXCX",
  businessOrgId:"",
  destinationType:"",
  destinationID:"",
  platform: "1",
  timeControlType:"XSSKKC",
  orderNetType:"WXDGP",
  //产品类型
  productTypeSingle:"JQMP",//景区门票
  productTypeMuti:"ZHTC",//组合套餐
  productTypeRoute:"LYXL",//旅游路线
  productTypeHotel:"JDKZ",//酒店客栈
  productTypeFood:"CYMS"//餐饮美食
}

//错误提示
const TIP = {
  network:"网络开了点小差~"
}

//默认图片
const IMG = {
  noimg:'no-img.png',
  nocontent:"no-content.png",
  noorder:"no-order.png"
}
module.exports = {
  server: SERVER,
  code: CODE,
  version: VERSION,
  mark:MARK,
  tip: TIP,
  img: IMG
}
