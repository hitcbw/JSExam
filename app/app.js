const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 挂载路由
const routeInitializer = require('./routes/routes.js');
routeInitializer(app);





app.listen(8888);