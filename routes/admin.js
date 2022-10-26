var express = require('express')
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin', { title: 'ATN shop ', name: 'TuanNhat' })
})

router.post('/', function(req, res, next) {
    res.render('login', { title: 'Login Page', message: 'TuanNhat' })
})




module.exports = router;