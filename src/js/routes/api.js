var express = require('express');
var userModel = require('../models/userModel')


var router = new express();

router.get('/', (req, res) => {
    paras = req.query;
    userModel.checkPassword(paras.user, paras.password).then(data => {
        console.log(data);
    }).catch(err => {
        console.log("error");
    })
})

module.exports = router;