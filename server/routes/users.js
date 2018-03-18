var express = require('express');
var router = express.Router();

const Api = require('../util/api').Api;
/* GET users listing. */
router.post('/', function(req, res, next) {
    const bd = req.body;
    console.log(!/1(3[0-9]|5[012356789]|7[015678]|8[0-9]|4[57])\d{8}/.test(bd.userName))
    Api.setReqs(req, res,'user.json');
    if(!/1(3[0-9]|5[012356789]|7[015678]|8[0-9]|4[57])\d{8}/.test(bd.userName)){
        Api.resDefData('请正确填写手机号')
    } else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{8,20}$/.test(bd.password)){
        Api.resDefData('密码为8~20位字母、数字或符号组合')
    } else{
        Api.translateResponse('user.json');
    }
});

module.exports = router;
