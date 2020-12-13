const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 挂载路由
const routeInitializer = require('./routes/routes.js');
routeInitializer(app);




app.listen(8888);