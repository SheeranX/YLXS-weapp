const { api } = require("interface.js");
const http = require("request.js");
const {mark} = require("config.js");

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

const queryLatestMessage  = ()=>{
  return http.request({
    url: api.queryLatestMessage,
    data:{
      platformType: mark.platformType
    }
  })
}
module.exports = {
  findAdvertiseList: findAdvertiseList,
  getWeatherByArea: getWeatherByArea,
  queryLatestMessage: queryLatestMessage
}