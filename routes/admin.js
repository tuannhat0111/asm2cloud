var express = require('express')
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin', { title: 'ATN shop ', name: 'Hieu' })
})

router.post('/', function(req, res, next) {
    res.render('login', { title: 'Login Page', message: 'Hieu' })
})




module.exports = router;