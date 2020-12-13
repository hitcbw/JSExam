const express = require('express')
const routers = require('../../back/routers.js');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// **配置路由**
// app.js中应该完成挂在route， 在各个分route.js中完成route定义，不要在route.js中
// 进行app.use。app.use从本质上来说是将处理过程加入处理链
const adminRouter = require('./routes/admin');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/api', apiRouter);





app.listen(8888);