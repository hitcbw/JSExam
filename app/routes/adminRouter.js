var express = require('express');

var router = new express();

router.get('/', (req, res) => {
    res.send('admin page');
})

module.exports = router;