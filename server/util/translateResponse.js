const fs = require('fs');
const path = require('path');

const readFileData = (filename)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'../database',filename),'utf-8',(err,data)=>{
            if(err){
                console.log('read filedata error!');
                reject(err);
            } else{
                resolve(JSON.parse(data));
            }
        })
    })
}


const transformResponse = (req, res,filename) => {
    const resData = {
        "resCode":"",
        "resDesc":"",
        "version":"1.0.0"
    };
    readFileData(filename).then((info)=>{
        resData.resCode = "0000";
        resData.resDesc = "操作成功";
        resData.info = info;
        res.send(JSON.stringify(resData));
    }).catch((errdata)=>{
        resData.resCode = "9999";
        resData.resDesc = "操作失败";
        resData.info = errdata;
        res.send(JSON.stringify(resData));
    })
}

module.exports = transformResponse;
