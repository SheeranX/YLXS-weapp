// pages/personnel/commentDetail/commentDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starGuide: 0,
    starGuideDes: "",
    starTravel: 0,
    starTravelDes: "",
    starRepast: 0,
    starRepastDes: "",
    starTraf: 0,
    starTrafDes: "",
    height: 20,
    imageArr: [],
    pageParams:''//页面传参
  },

  /**
   * 星星转文字等级
   */
  starToGrade(obj) {
    var result = "";
    if (obj === 1) {
      result = "差"
    } else if (obj === 2) {
      result = "不太满意"
    } else if (obj === 3) {
      result = "一般"
    } else if (obj === 4) {
      result = "满意"
    } else {
      result = "非常满意"
    }
    return result;
  },
/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var obj = JSON.parse(options.list);
    console.log(obj)
    this.setData({
      pageParams:obj
    })
  },

  /**
   * 导游服务
   */
  onChangeGuide(e) {
    const index = e.detail.index;
    var _this = this;
    this.setData({
      'starGuide': index,
      'starGuideDes': this.starToGrade(index)
    })
  },

  /**
   * 行程安排
   */
  onChangeTravel(e) {
    const index = e.detail.index;
    this.setData({
      'starTravel': index,
      'starTravelDes': this.starToGrade(index)
    })
  },

  /**
   * 餐饮住宿
   */
  onChangeRepast(e) {
    const index = e.detail.index;
    this.setData({
      'starRepast': index,
      'starRepastDes': this.starToGrade(index)
    })
  },

  /**
   * 旅行交通
   */
  onChangeTraf(e) {
    const index = e.detail.index;
    this.setData({
      'starTraf': index,
      'starTrafDes': this.starToGrade(index)
    })
  },
  sendComment() {
    wx.navigateTo({
      url: '../myComments/myComments',
    })
  },
  //上传图片
  uplodImag() {
    var _this = this;
    wx.chooseImage({
      count: 6,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log(res);
        const tempFilePaths = res.tempFilePaths;
        _this.setData({
          imageArr: tempFilePaths
        })
      }
    })
  },
  //预览图片
  previewImg(e) {
    var index = e.target.dataset.index;
    wx.previewImage({
      current: this.data.imageArr[index], // 当前显示图片的http链接
      urls: this.data.imageArr // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 点击加_压缩
  takePhoto: function () {
    const that = this;
    let imgViewList = that.data.imgViewList; //这个是用来承载页面循环展示图片的
    //拍照、从相册选择上传
    wx.chooseImage({
      count: 4,    //这个是上传的最大数量，默认为9
      sizeType: ['compressed'],    //这个可以理解为上传的图片质量类型（官方给的），虽然没什么卵用，要不然还要我们自己写压缩做什么
      sourceType: ['album', 'camera'],    //这个是图片来源，相册或者相机
      success: function (res) {
        let tempFilePaths = res.tempFilePaths    //这个是选择后返回的图片列表
        console.log("choose->" + tempFilePaths);
        that.setData({
          imageArr: tempFilePaths
        })
        that.getCanvasImg(0, 0, tempFilePaths);    //进行压缩
      }
    });
  },
  //压缩并获取图片，这里用了递归的方法来解决canvas的draw方法延时的问题
  getCanvasImg: function (index, failNum, tempFilePaths) {
    const that = this;
  //  debugger
    if (index < tempFilePaths.length) {
      const ctx = wx.createCanvasContext('attendCanvasId');
      ctx.drawImage(tempFilePaths[index], 0, 0, 300, 150);
      ctx.draw(true, function () {
        index = index + 1;//上传成功的数量，上传成功则加1
        console.log(index);
        wx.canvasToTempFilePath({
          canvasId: 'attendCanvasId',
          success: function success(res) {
            that.uploadCanvasImg(res.tempFilePath);
            that.getCanvasImg(index, failNum, tempFilePaths);
            console.log("+++");
          },
          fail: function (e) {
            failNum += 1;//失败数量，可以用来提示用户
            that.getCanvasImg(inedx, failNum, tempFilePaths);
            console.log("---");
          }
        });
      });
    }
  },
  //上传图片
  uploadCanvasImg: function (canvasImg) {
    const that = this;
    let imgViewList = that.data.imgViewList;
    let tempImg = canvasImg;
    wx.uploadFile({
      url: 'https://www.lekou.store',//文件服务器的地址
      filePath: tempImg,
      formData: {
        paramPath: "gift"
      },
      name: 'file',
      success: function (res) {
        //var json2map = JSON.parse(res.data);
       // imgViewList.push(app.d.imageUrlFix + json2map[0].fileUrl);
        that.setData({
         // imgViewList: imgViewList,
        })
      },
      fail(error) {
        console.log("error");
      }
    })
  },
  remove({ currentTarget }){
    const idx = currentTarget.dataset.idx;
    console.log(idx);
    let temp = this.data.imageArr;
    temp.splice(idx, 1);
    console.log(temp);
    this.setData({
      imageArr: temp
    })
  //  console.log(currentTarget.dataset.idx);
  }
})