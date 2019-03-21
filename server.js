//入口文件
var express = require('express'); //引入express
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList', ['contactList']);
app.use(express.static(__dirname + '/public'));

//路由部分
app.get('/contactList', function (req, res) {
    console.log("I received a get request");
    db.contactList.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    })
/*     person1 = {
        name: 'tim',
        email: 'tim@email.com',
        numberL: 123456
    };
    person2 = {
        name: 'Emaily',
        email: 'Emaily@email.com',
        numberL: 111111
    };
    person3 = {
        name: 'Jhone',
        email: 'Jhone@email.com',
        numberL: 888888
    }
    var contactList = [person1, person2, person3];
    res.json(contactList); //请求后返回一个json对象 */
});
app.post(function (req, res) {
    console.log("this is a post request");
    console.log(req.body);
    db
})


app.listen(3000); //监听3000端口
console.log("server running on port 3000"); //提示运行成功