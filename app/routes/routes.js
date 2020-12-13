const express = require('express')

// **配置路由**
// app.js中应该完成挂在route， 在各个分route.js中完成route定义，不要在route.js中
// 进行app.use。app.use从本质上来说是将处理过程加入处理链
module.exports = app => {
    const adminRouter = require('./adminRouter');
    const indexRouter = require('./indexRouter');
    const apiRouter = require('./apiRouter');

    app.use('/', indexRouter);
    app.use('/admin', adminRouter);
    app.use('/api', apiRouter);
}