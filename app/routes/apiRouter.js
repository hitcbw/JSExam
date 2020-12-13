var express = require('express');
const { compile } = require('morgan');
var userModel = require('../models/userModel')


var router = new express();

router.get('/', (req, res) => {
    paras = req.query;
    userModel.checkPassword(paras.id, paras.password).then(data => {

        if (data == 'get user success') { res.send('auth ok'); } else {
            res.send(data);
        }
    }).catch(err => {
        res.send('auth error');
    })
})

module.exports = router;