//入口文件
var express = require('express');   //引入express
var app = express();
app.use(express.static(__dirname + '/public'));

//路由部分
app.get('/contactList',function(req,res){
    console.log("T received a get request");
    person1 = {
        name:'tim',
        email:'tim@email.com',
        numberL:123456
    };
    person2 = {
        name:'Emaily',
        email:'Emaily@email.com',
        numberL:111111
    };
    person3 = {
        name:'Jhone',
        email:'Jhone@email.com',
        numberL:888888
    }
    var contactList = [person1,person2,person3];
    res.json(contactList);  //请求后返回一个json对象
});

app.listen(3000);   //监听3000端口
console.log("server running on port 3000"); //提示运行成功

