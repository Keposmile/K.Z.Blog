
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();
// all environments
//映射端口
app.set('port', process.env.PORT || 3000);
//配置模板引擎为ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//配置页面图标
app.use(express.favicon());
//终端输出简单日志
app.use(express.logger('dev'));

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(app.router);
//设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

routes(app);
