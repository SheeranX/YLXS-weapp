//api接口
const { version } = require("config.js");

const API = {
  findAdvertiseList: version + "/advertiseInterface/findAdvertiseList",
  getWeatherByArea: version +"/weatherInterface/getWeatherByArea",
  queryLatestMessage: version +"/messageInterface/queryLatestMessage"
}

module.exports = {
  api:API
}
