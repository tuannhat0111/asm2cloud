var express = require('express');
var authen = require('../model/authenticator');
const get_data_account = require('../model/getdatabyaccount');
const get_all_product = require('../model/getallproduct');
var session = require('express-session')

var router = express.Router();
var shopid;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'ATN SHOP' });
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'LOGIN PAGE', notice: "Wellcome to ATN Company" });
});

router.get('/logout', function(req, res, next) {
    req.session.destroy;
    res.redirect('/');
});

router.post('/login', async function(req, res, next) {
    console.log('username: ' + req.body.username)
    console.log('password: ' + req.body.password)
    const username = req.body.username;
    const password = req.body.password;
    session = req.session;
    let [authenticated, shop_id, role] = await authen(username, password);
    shopid = shop_id;

    if (authenticated == true && role == "USER") {

        session.shop_id = shop_id;
        res.redirect('/user');
    } else if (authenticated == true && role == "ADMIN") {
        let [dataInDb, shopIdList] = await get_data_account(shop_id);
        session.shop_id = shop_id;
        res.render('admin', { title: 'ADMIN PAGES', data: dataInDb.rows, shopIdList: shopIdList.rows, products: null });
    } else {
        res.render('login', { title: 'Login Page', notice: 'Wrong username or password' });
    }

});

router.get('/getProductByShop', async function(req, res, next) {
    // res.render('createproduct', {  title: 'Create Product PAGE' })
    if(req.query.Select_Shop == 'All Shop'){
        const products = await get_all_product();
        console.log(req.query.Select_Shop );
        let [dataInDb, shopIdList] = await get_data_account(null);
        res.render('admin', { title: 'ATN SHOP', products: products.rows, shopIdList: shopIdList.rows, data: null });

    }
    else{
    const [dataInDb, shopIdList] = await get_data_account(req.query.Select_Shop);

    res.render('admin', { title: 'ATN SHOP', products: dataInDb.rows, shopIdList: shopIdList.rows, data: null });
    }

});


module.exports = router;