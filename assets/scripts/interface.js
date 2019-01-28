//api接口
const {version} = require("config.js");

const API = {
  //index-获取首页广告接口
  findAdvertiseList: "mainAction/findAdvertiseScroll",
  //index-获取天气
  getWeatherByArea: "mainAction/getWeather",
  //index-获取最近消息
  queryLatestMessage: "mainAction/getLatestMessage",
  //走进丽江--根据文档栏目编号获取一级子目录
  queryIntoLiJiangDocCatagory: "intoLiJiangAction/queryIntoLiJiangDocCatagory",
  //走进丽江--根据文档栏目ID获取文档列表
  queryDocContentByCatagoryNo: "intoLiJiangAction/queryDocContentByCatagoryNo",
  //走进丽江--根据文档ID获取文档详情
  queryDocConetentByDocId: "intoLiJiangAction/queryDocConetentByDocId", 
  //走进丽江--点赞
  incrDocLikeCache:"intoLiJiangAction/incrDocLikeCache",
  //个人中心--查询订单列表
  findOrderInfoList:"orderManagerAction/findOrderInfoList",
  //个人中心--查询订单详情
  queryOrderDetailByBatchId:"orderManagerAction/queryOrderDetailByBatchId",
  //个人中心--订单退订
  orderReturn:"orderManagerAction/orderReturn",
  //个人中心--订单取消
  orderCancel:"orderManagerAction/orderCancel",
  //合作供应商及产品
  findCooperativeSupplierAndProduct:"productReservationAction/findCooperativeSupplierAndProduct",
  //查询景区详情信息
  queryDestinationDetail: "destinationAction/queryDestinationDetail",
  //获取产品价格日历信息
  findProductPriceCalendar:"productReservationAction/findProductPriceCalendar",
  //获取场次接口
  findPerformanceTime : "timeAndPerformanceAction/findPerformanceTime",
  //获取时段接口
  findScenicSpotsTime: "timeAndPerformanceAction/findScenicSpotsTime",
  //获取证件类型
  fidncertificateType:"individualFrequentContactsInterface/fidncertificateType",
  //旅游攻略--注意事项--注意事项
  attentionMessage:"travleAction/attentionMessage",
  //旅游攻略--注意事项--景区公告
  scencNotice:"travleAction/scencNotice",
  //旅游攻略--注意事项--人脸识别
  faceRecognition:"travleAction/faceRecognition",
  //旅游攻略--注意事项--购买须知
  buyInstructions:"travleAction/buyInstructions",
  //旅游攻略—自驾游
  selfDrivingGuide:"travleAction/selfDrivingGuide",
  //旅游攻略—自由行
  freeTravelGuide:"travleAction/freeTravelGuide",
  //旅游攻略--推荐游记
  findTravelsList:"travleAction/findTravelsList",
  //旅游攻略--游记详情
  queryTravelsById:"travleAction/queryTravelsById",
  //游记--浏览量增加
  browseCountUp:"travleAction/browseCountUp",
  //游记--游记点赞
  likeCountUp:"travleAction/likeCountUp",
  //游记--写游记
  addTravels:"travleAction/addTravels",
  //游记--写游记--目的地
  findDestination:"travleAction/findDestination",
  //保存订单
  saveOrder:"productReservationAction/saveOrder",
  //游记--评论
  addTravelsComment:"intoLiJiangAction/addTravelsComment",
  //游记--获取评论列表
  findCommentBytravelId:"travleAction/findCommentBytravelId",
  //支付订单
  payOrder:"productReservationAction/payOrder",
  //添加常用联系人
  addIndividualFrequentContacts:"individualFrequentContactsInterface/addIndividualFrequentContacts",
  //查询常用联系人
  findIndividualFrequentContactsListByUserId:"individualFrequentContactsInterface/findIndividualFrequentContactsListByUserId",
  //删除常用联系人
  deleteIndividualFrequentContacts:"individualFrequentContactsInterface/deleteIndividualFrequentContacts",
  //编辑常用联系人
  updateIndividualFrequentContacts: "individualFrequentContactsInterface/updateIndividualFrequentContacts",
  //获取评论列表接口
  findTouristDestinationComment:"orderCommenAction/findTouristDestinationComment"
}

module.exports = {
  api: API
}