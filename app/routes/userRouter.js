var express = require('express');


var userController = require('../controllers/userController')


// MODULE.EXPORTS = require时返回的对象
// module.exports = function ...则const a = require()，a为那个函数
// exports.name = name 则为require一个空间，通过require().name 调用
var router = express.Router();
router.post('/login', (req, res) => {
    paras = req.body;
    console.log(paras);
    userController.getAuth(paras.id, paras.password).then(result => {
        res.send(result);
    })
})
module.exports = router;