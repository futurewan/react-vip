var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const fs = require('fs')

var index = require('./routes/index');
var users = require('./routes/users');
//实例化服务
var app = express();
var ejs = require('ejs');
console.log(fs.existsSync(path.join(__dirname, 'package.json')))
// 设置模版文件所在目录
app.set('views', path.join(__dirname, 'views'));
//设置要使用的模版引擎
// app.set('view engine', 'pug');
/* 
默认情况下，express会require()根据文件扩展名来使用引擎
例如加载foo.pug文件，express内部会调用：
app.engine('pug', require('pug').__express);
对于不提供__express开箱即用的引擎，活着如果希望将不同的扩展名映射到模版引擎时：
app.engine('html',require('ejs').renderFile)

*/
//将ejs模板映射至".html"文件
app.engine('html',ejs.renderFile)
app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//使用静态文件
/* 
可以指定虚拟静态路径
app.use('/static', express.static('public'));

*/
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
