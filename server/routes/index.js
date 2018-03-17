var express = require('express');
var router = express.Router();

/* 
app.get(path,callback[,callback])
使用指定的回调函数将http get请求路由到指定的路径
path
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
