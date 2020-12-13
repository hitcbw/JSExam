const { RSA_NO_PADDING } = require('constants');
var express = require('express');
var fs = require('fs');

// app.use(path, function)时这个path并不是完全匹配的，只要前缀匹配即可进入处理（要加/）。
//app.get 请求会完全匹配
// app.use 会进行前缀匹配，且只会匹配成功一次，测试了 前缀 + 完全，完全 + 前缀, 从前缀+前缀得出当存在多个二级路由时使用app.use只有第一个二级路由生效
// 可以存在深层路由
exports.initializeRouter = function(app) {

    const userInterface = express.Router();
    const adminInterface = express.Router();
    const apiInterface = express.Router();
    app.use('/', userInterface);
    app.use('/admin', adminInterface);
    app.use('/api', apiInterface);

    userInterface.get('/', (req, res) => {
        res.send("main page");
    })

    userInterface.get('/login', (req, res) => {
        res.send('login page')
    })



    apiInterface.post('/add', (req, res) => {
        res.send('api add user');
    })
    apiInterface.put('/update', (req, res) => {
        res.send('api update user');
    })
    apiInterface.get('/getUser', (req, res) => {
        res.send('api get user');
    })
    apiInterface.get('/deleteUser', (req, res) => {
        res.send('api delete user');
    })


    adminInterface.get('/login', (req, res) => {
        res.send('admin interface' + ' login');
        next();
    })

    app.use((req, res, next) => {
        fs.readFile('./src/static/404.html', (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end('file not exists');
            } else {
                res.set('Content-type', 'text/html');
                //res.writeHead(200, { 'Content-Type': 'text/html' });和res.send连用会出问题，使用
                //setContent type 即可成功运行，或者采用writeHead + end的组合
                res.send(data);
            }
        });

        // 同步方法无法通过var data = AsyncFunc()获取值，因为异步函数是延时执行，值在异步完成之前是Undefined，
        //没有什么意义，通过sync或者通过回调函数才能获取，readFile本身是不会返回任何值的
        /* var data = fs.readFileSync('./src/static/404.html');
        res.send(data); */


    })

    app.use((err, req, res, next) => {
        res.write('call catch exception');
        res.statusCode = 500;
        res.end(err.name);
    })


    return app;
}