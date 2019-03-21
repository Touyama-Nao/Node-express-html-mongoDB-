//入口文件
var express = require('express');   //引入express
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(3000);   //监听3000端口
console.log("server running on port 3000"); //提示运行成功

