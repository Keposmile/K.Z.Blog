# K.Z.Blog 搭建过程记录  

简单记录下博客创建过程中的想法

这是一个模块化的个人博客

通过引入不同的ejs模板构建不同的博客样式

尝试将交互组件化


## 项目初始化

初始化express和相关package
```
$ express -e
$ npm install

```

引入http和path模块
```

$ npm install http
$ npm install path

```

这时可以通过
```
$ node app
```

命令测试

可以在浏览器中通过打开 localhost:3000

判断express运行状况


## 重设路由设置

在/routes/index.js中删除
```javascript
 app.get('/',routes.index);
 app.get('/users',users.list);
```

修改index.js

```javascript
module.exports = function(app){
  app.get("/",function(req,res){
    res.render("index",{title:'Express'});
  });
};

```

export一个接口,可以在app.js中引用,这样我们就把app.js中的配置项和路由配置分开


## 路由设置

- /
  - /blog
  - /album
  -
