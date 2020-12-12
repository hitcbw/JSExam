const express = require('express')
const routers = require('./routers.js');
const app = express();


// 初始化 路由处理中间件
routers.initializeRouter(app);
// 初始化 错误处理中间件

app.listen(8888);