var express = require('express');


var userController = require('../controllers/userController')


var router = express.Router();
router.post('/login', (req, res) => {
    paras = req.body;
    console.log(paras);
    userController.getAuth(paras.id, paras.password).then(result => {
        res.send(result);
    })
})
module.exports = router;