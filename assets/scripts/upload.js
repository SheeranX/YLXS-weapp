const promise = require('../scripts/promise.js');

const upload = promise.wxPromise(wx.uploadFile);

const chooseImg = promise.wxPromise(wx.chooseImage,true);

let imgViewList = [];
const uploadfile = async (url,count=1)=>{
  // chooseImg({
  //   count
  // })
  // .then(res=>{
  //   return Promise.resolve(tempFilePaths)
  // })
  // .then(res=>{
  //   upload()
  // })
  const tempFilePaths = await chooseImg({count});
  const filePath = await upload({
    url,
    filePath: tempFilePaths
  });
}

//生成canvas图片
const getCanvasImg = (canvasid,index, failNum, tempFilePaths)=>{
  if(index < tempFilePaths.length)
  {
      const ctx = wx.createCanvasContext(canvasid);
      ctx.drawImage(tempFilePaths[index], 0, 0, 300, 150);
      ctx.draw(true,function(){
        index += 1;
        wx.canvasToTempFilePath({
          canvasId: canvasid,
          success(res){
            uploadCanvasImg(res.tempFilePath);
            getCanvasImg(index,failNum,tempFilePaths)
          },
          fail(){
            failNum += 1;
            getCanvasImg(index,failNum,tempFilePaths)
          }
        })
      })
  }
}

//上传图片
const uploadCanvasImg = (canvasImg,url)=>{
 let tempImg = canvasImg;
  upload({
    url,
    filePath:tempImg
  })
  .then(res=>{
    let json = JSON.parse(res.data);
    console.log(json);
   // imgViewList.push(json2map[0].fileUrl);
  })
}

module.exports = {
  uploadfile: uploadfile,
  getCanvasImg: getCanvasImg
}