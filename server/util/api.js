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
let Api = function(){
    this.resData = {
        "resCode":"",
        "resDesc":"",
        "version":"1.0.0"
    }
}
Api.prototype.getDefData = function(){
    return this.resData;
}
Api.prototype.setReqs = function(req, res){
    this.req = req;
    this.res = res;
}
Api.prototype.resDefData = function(desc){
    const data = Object.assign({},this.resData,{resCode:'61000',resDesc:desc})
    this.res.send(JSON.stringify(data));
}
Api.prototype.translateResponse = function(filename){
    const resData = this.resData;
    readFileData(filename).then((info)=>{
        resData.resCode = "0000";
        resData.resDesc = "操作成功";
        resData.info = info;
        this.res.send(JSON.stringify(resData));
    }).catch((errdata)=>{
        resData.resCode = "9999";
        resData.resDesc = "操作失败";
        resData.info = errdata;
        this.res.send(JSON.stringify(resData));
    })
}

module.exports.Api = new Api();

