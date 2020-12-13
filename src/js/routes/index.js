var express = require('express');

var router = new express();

router.get('/', (req, res) => {
    res.send('index page');
})

module.exports = router;