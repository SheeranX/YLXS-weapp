const { api } = require("interface.js");
const http = require("request.js");
const {mark} = require("config.js");
const util = require("../../utils/util.js");
/**
 * 获取首页广告轮播
 */
const findAdvertiseList = ()=>{
   return http.request({
      url: api.findAdvertiseList,
      data: {
        advertiseLocation: mark.adlocation
      }
    })
}
/**
 * 获取首页天气
 */
const getWeatherByArea = ()=>{
   return http.request({
     url: api.getWeatherByArea
   })
}

/**
 * 获取最近消息通知
 */
const queryLatestMessage = () => {
  return http.request({
    url: api.queryLatestMessage,
    data: {
      platformType: mark.platformType
    }
  })
}
// 走进丽江 - 子菜单模块信息
const queryIntoLiJiangDocCatagory = () =>{
  return http.request({
    url: api.queryIntoLiJiangDocCatagory,
    method:"get",
    data:{
      param1:"DC1000022"
    }
  })
}
//根据文档栏目ID获取文档列表
const queryDocContentByCatagoryNo = (id) => {
  return http.request({
    url: api.queryDocContentByCatagoryNo,
    method:'get',
    data: {
      "documentCatagoryNo": id,
      // "page": JSON.stringify(page),
      // "pagesize": JSON.stringify(pagesize)
    }
  })
}
//根据文档ID获取文档详情
const queryDocConetentByDocId = (documentContentId, documentCatagoryNo) => {
  return http.request({
    url: api.queryDocConetentByDocId,
    method:"get",
    data: {
      documentCatagoryNo: documentCatagoryNo,
      documentContentId: documentContentId
    }
  })
}
/**
 * 保存订单
 * @params{Object}} - 参数对象
 */
const saveOrder = (params={})=>{
  return http.request({
    url: api.saveOrder,
    data:{
      orderNetType: mark.orderNetType,
      "orderTackTicketName": params.orderTackTicketName,
      "orderTackTicketPhone": params.orderTackTicketPhone,
      "arriveDT": params.arriveDT,
      "fitUserId": params.fitUserId,
      "orderItemsList": params.orderItemsList,
      "orderCertificateItemsList": params.orderCertificateItemsList,
      "orderTimeControlList": params.orderTimeControlList   
    }
  })
}
/**
 * 获取常用联系人
 * @param{Object} - 常用联系人
 */
const addIndividualFrequentContacts = (contacts={})=>{
  return http.request({
    url: api.addIndividualFrequentContacts,
    data:{
      "userId": 1,
      "certificateTypeId": contacts.certificateTypeId,
      "certificateNo": contacts.certificateNo,
      "frequentContactsName": contacts.frequentContactsName,
      "frequentContactsPhone": contacts.frequentContactsPhone
    }
  })
}
/**
 * 查询常用联系人
 */
const findIndividualFrequentContactsListByUserId = ()=>{
  return http.request({
    url: api.findIndividualFrequentContactsListByUserId,
    data:{
      userId:1,
      "page": 1,
      "pagesize": 10
    }
  })
}
/**
 * 删除常用联系人
 * @param {String} - individualFrequentContactsId 常用联系人id
 */
const deleteIndividualFrequentContacts = (individualFrequentContactsId)=>{
  return http.request({
    url: api.deleteIndividualFrequentContacts,
    data:{
      userId:1,
      individualFrequentContactsId: individualFrequentContactsId
    }
  })
}
/**
 * 编辑常用联系人
 */
const updateIndividualFrequentContacts = (obj)=>{
  return http.request({
    url: api.updateIndividualFrequentContacts,
    data:{
      "userId": 1,
      "individualFrequentContactsId": obj.individualFrequentContactsId,
      "certificateTypeId": obj.certificateTypeId,
      "certificateNo": obj.certificateNo,
      "frequentContactsName": obj.frequentContactsName,
      "frequentContactsPhone": obj.frequentContactsPhone
     }
  })
}
//走进丽江--文章点赞
const incrDocLikeCache = (documentContentId) => {
  return http.request({
    url: api.incrDocLikeCache,
    method: "get",
    data: {
      documentContentId: documentContentId
    }
  })
}

// 查询订单列表
const findOrderInfoList = (page,pagesize) => {
  return http.request({
    url: api.findOrderInfoList,
    data:{
      page:page,
      pagesize:pagesize
    }
  })
}

// 查询订单详情
const queryOrderDetailByBatchId = (orderBatchId) => {
  return http.request({
    url: api.queryOrderDetailByBatchId,
    data: {
      orderBatchId : orderBatchId
    }
  })
}

// 订单退订
const orderReturn = (orderBatchNO) => {
  return http.request({
    url: api.orderReturn,
    data: {
      orderBatchNO: orderBatchNO
    }
  })
}

//订单取消
const orderCancel = (orderBatchNO) => {
  return http.request({
    url: api.orderCancel,
    data: {
      orderBatchNO: orderBatchNO
    }
  })
}

/**
 * 获取合作供应商和产品信息
 */
const findCooperativeSupplierAndProduct = (page = 1, pagesize = 10, businessOrgId = "", destinationType = "", destinationID = "", productType = mark.productTypeSingle)=>{
  return http.request({
    url: api.findCooperativeSupplierAndProduct,
    data:{
      businessOrgId: businessOrgId,
      destinationType: destinationType,
      destinationID: destinationID,
      platform: mark.platform,
      page,
      pagesize,
      date:"",
      productType
    }
  })
}
/**
 * 获取景区详情信息
 */
const queryDestinationDetail = (scenicId)=>{
  return http.request({
    url: api.queryDestinationDetail,
    data:{
      scenicId
    }
  })
}
/**
 * 查询产品价格日历信息
 * 
 */
const findProductPriceCalendar = (productOnlyNo)=>{
  const now = new Date();
  console.log(now);
  const end = util.DateAdd('M',2,now);
  return http.request({
  url: api.findProductPriceCalendar,
   data:{
     productOnlyNo,
     startDate: new Date().Format('yyyy-MM-dd'),
     endDate: end.Format('yyyy-MM-dd'),
     platform: mark.platform
   }
  })
}
/**
 * 获取场次接口
 */
const findPerformanceTime = (businessOrgId, scenicSpotsId, controlDate = new Date().Format('yyyy-MM-dd'),stadiumsAreaId)=>{
  return http.request({
    url: api.findPerformanceTime,
    data:{
      businessOrgId,
      scenicSpotsId,
      timeControlType: mark.timeControlType ,
      controlDate,
      stadiumsAreaId
    }
  })
}
/**
 * 获取时段信息接口
 */
const findScenicSpotsTime = (businessOrgId, scenicSpotsId, controlDate = new Date().Format('yyyy-MM-dd'))=>{
    return http.request({
      url: api.findScenicSpotsTime,
      data:{
        businessOrgId,
        scenicSpotsId,
        timeControlType: mark.timeControlType ,
        controlDate
      }
    })
}

/**
 * 获取评论列表接口
 */
const findTouristDestinationComment = (businessOrgId, destinationType, destinationID)=>{
  return http.request({
    url: api.findTouristDestinationComment,
    data:{
      businessOrgId,
      destinationType, 
      destinationID
    }
  })
}
/**
 * 获取证件类型
 */
const fidncertificateType = ()=>{
   return http.request({
     url: api.fidncertificateType
   })
}
//旅游攻略--注意事项--注意事项
const attentionMessage = () => {
  return http.request({
    url: api.attentionMessage,
  })
}

//旅游攻略--注意事项--景区公告
const scencNotice = () => {
  return http.request({
    url: api.scencNotice,
  })
}

//旅游攻略--注意事项--人脸识别
const faceRecognition = () => {
  return http.request({
    url: api.faceRecognition,
  })
}

//旅游攻略--注意事项--购买须知
const buyInstructions = () => {
  return http.request({
    url: api.buyInstructions,
  })
}

//旅游攻略—自驾游
const selfDrivingGuide = () => {
  return http.request({
    url: api.selfDrivingGuide,
  })
}

//旅游攻略—自由行
const freeTravelGuide = () => {
  return http.request({
    url: api.freeTravelGuide,
  })
}

//旅游攻略--推荐游记
const findTravelsList = (searchKey,page, pagesize) => {
  return http.request({
    url: api.findTravelsList,
    data:{
      searchKey: searchKey,
      page:page,
      pagesize:pagesize
    }
  })
}

//旅游攻略--游记详情
const queryTravelsById = (travelsId) => {
  return http.request({
    url: api.queryTravelsById,
    method:"get",
    data: {
      travelsId: travelsId
    }
  })
}

//游记--浏览量增加
const browseCountUp = (travelsId) => {
  return http.request({
    url: api.browseCountUp,
    method: "get",
    data: {
      travelsId: travelsId
    }
  })
}

//游记--浏览量增加
const likeCountUp = (travelsId) => {
  return http.request({
    url: api.likeCountUp,
    method: "get",
    data: {
      travelsId: travelsId
    }
  })
}

//游记--写游记
const addTravels = (travelsTitle, content, mainPhotoURL, destinationID, destinationType, keyWordsStr) => {
  return http.request({
    url: api.addTravels,
    method: "post",
    data: {
      travelsTitle: travelsTitle,
      content: content,
      mainPhotoURL: mainPhotoURL,
      destinationID: destinationID,
      destinationType:destinationType,
      keyWordsStr: keyWordsStr,
    }
  })
}
//游记--写游记--目的地
const findDestination = () => {
  return http.request({
    url: api.findDestination,
    method: "get",
  })
}


//游记--获取评论列表
const findCommentBytravelId = (travelsId, page, pagesize) => {
  return http.request({
    url: api.findCommentBytravelId,
    method: "post",
    data: {
      travelsId: travelsId,
      page: page,
      pagesize: pagesize
    }
  })
}

//游记--评论
const addTravelsComment = (travelsId, commentContent,userId) => {
  return http.request({
    url: api.addTravelsComment,
    method: "post",
    data:{
      travelsId: travelsId,
      commentContent: commentContent,
      userId: userId
    }
  })
}

//支付订单
const payOrder = (orderBatchNO, paymentTypeId) => {
  return http.request({
    url: api.payOrder,
    data:{
      orderBatchNO: orderBatchNO,
      paymentTypeId: paymentTypeId
    }
  })
}

module.exports = {
  //index-获取首页广告接口
  findAdvertiseList: findAdvertiseList,
  //index-获取天气
  getWeatherByArea: getWeatherByArea,
  //index-获取最近消息
  queryLatestMessage: queryLatestMessage,
  //走进丽江--根据文档栏目编号获取一级子目录
  queryIntoLiJiangDocCatagory: queryIntoLiJiangDocCatagory,
  //走进丽江--根据文档栏目ID获取文档列表
  queryDocContentByCatagoryNo: queryDocContentByCatagoryNo,
  //走进丽江--根据文档ID获取文档详情
  queryDocConetentByDocId: queryDocConetentByDocId,
  //走进丽江--点赞
  incrDocLikeCache: incrDocLikeCache,
  //订单查询
  findOrderInfoList: findOrderInfoList,
  //查询订单列表
  queryOrderDetailByBatchId: queryOrderDetailByBatchId,
  //退订
  orderReturn: orderReturn,
  //取消订单
  orderCancel: orderCancel,
  queryLatestMessage:queryLatestMessage,
  //获取合作供应商及产品列表
  findCooperativeSupplierAndProduct: findCooperativeSupplierAndProduct,
  //获取景区详情
  queryDestinationDetail: queryDestinationDetail,
  //获取价格日历
  findProductPriceCalendar:findProductPriceCalendar,
  //获取场次接口
  findPerformanceTime: findPerformanceTime,
  //获取时段接口
  findScenicSpotsTime: findScenicSpotsTime,
  //旅游攻略--注意事项--注意事项
  attentionMessage: attentionMessage,
  //旅游攻略--注意事项--景区公告
  scencNotice: scencNotice,
  //旅游攻略--注意事项--人脸识别
  faceRecognition: faceRecognition,
  //旅游攻略--注意事项--购买须知
  buyInstructions: buyInstructions,
  //旅游攻略—自驾游
  selfDrivingGuide: selfDrivingGuide,
  //旅游攻略—自由行
  freeTravelGuide: freeTravelGuide,
  //旅游攻略--推荐游记
  findTravelsList: findTravelsList,
  //旅游攻略--游记详情
  queryTravelsById: queryTravelsById,
  //游记--浏览量增加
  browseCountUp: browseCountUp,
  //游记--游记点赞
  likeCountUp: likeCountUp,
  //游记--写游记
  addTravels: addTravels,
  //游记--写游记--目的地
  findDestination: findDestination,
  //获取证件类型
  fidncertificateType: fidncertificateType,
  //保存订单
  saveOrder: saveOrder,
  //游记--评论
  addTravelsComment:addTravelsComment,
  //游记--获取评论列表
  findCommentBytravelId: findCommentBytravelId,
  //支付订单
  payOrder: payOrder,
  //添加常用联系人
  addIndividualFrequentContacts: addIndividualFrequentContacts,
  //查询常用联系人
  findIndividualFrequentContactsListByUserId: findIndividualFrequentContactsListByUserId,
  //删除常用联系人
  deleteIndividualFrequentContacts: deleteIndividualFrequentContacts,
  //编辑常用联系人
  updateIndividualFrequentContacts: updateIndividualFrequentContacts,
  //获取评论接口
  findTouristDestinationComment: findTouristDestinationComment
}