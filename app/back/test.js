const { count } = require('console');
var fs = require('fs');
const { compile } = require('morgan');
const { resolve } = require('path')
var http = require('http')
    /* var p = new Promise(function(resolve, reject) {
                {
                    fs.readFile('./src/static/404.html', (err, data) => {
                        if (!err) { resolve(data); } else {
                            reject(data);
                        }

                    });
                };

                p.then((data) => {
                    console.log(data);
                }, function ca(params) {
                    console.log('error');
                }) */

/**
 * 啥几把回调，callback就是一个以函数作为参数传入Parent function。 js引擎是单线程的，即函数栈当前只会允许栈顶函数运行，
 * callback由一个callback queue维护。当函数栈不为空则cb queue始终阻塞（由eventlooper轮询function stack）
 * 只有函数运行完毕，才能执行参数列表传入的函数，即：函数完成了调用参数函数，看起来像是一个执行完毕反向通知，其实只是因为单线程
 * 只能等待母函数完成，才可以通过call back id从call back queue中取出对应的cb function并执行。
 * 所谓的promise即返回了一个还未指定cb function的结构体，return new Promise(function(resolve,reject))的原理就是对于一个异步
 * 函数，传入一个函数作为他的回调函数，该函数有母函数正确执行参数cb : resolve和错误执行参数cb : reject（该函数的参数是两个回调
 * 函数），
 * 存疑----------------
 * 具体是否正确执行由引擎决定，
 * 存疑----------------             
 * resolve 和 reject好像是自己随意定义的回调函数，没有正确执行（或者直接调用reject()）可以
 * 由Promise.catch()[也看有到promise.then.catch的写法]处理
 * reject是缺省的。通过resolve将异步代码中的数据传递出来，可以理解为引擎监控异步代码执行，如
 * 果执行成功则调起cb: resolve,Promise.then()其实是在绑定resolve与具体的函数体。这一流程其实就是以前的callback在函数定义时即指
 * 定转变为先定义一个待处理的返回，通过.then指定具体的返回处理函数
 * 
 */
/* var t1 = function() {
    console.log('callback function')
}

var t2 = function(para1, callback) {
    err = "a error message";
    data = 'the data from file'
    console.log(`retrieve ${para1} failed`);
    callback(err, data);
}
t2('1.html', (err, data) => {
    console.log(err);
    console.log(data);
}) */

/* async
var ptest = function() {
    return new Promise((resolve, reject) => {
        resolve("data to be sent");
    })
}

var p = ptest();
p.then((data) => {
    console.log(data);
}) */
/* const md5 = require('md5')
md5Psw = md5('chenbowen')
id = 1
let sql = `select count(*) from user where userId = ${id} and password = '${md5Psw}'`;
console.log(sql); */
/* var t = { "count(*)": 1 }
console.log(t['count(*)']) */
var querystring = require('querystring');
http.createServer((req, res) => {
    var body = '';
    req.on('data', function(chunk) {
        body += chunk; //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:", chunk);
    });

    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function() {
        // 解析参数
        body = querystring.parse(body); //将一个字符串反序列化为一个对象
        console.log("body:", body);
        // 设置响应头部信息及编码\<br><br>      res .writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        res.end();
    })
}).listen(3000);