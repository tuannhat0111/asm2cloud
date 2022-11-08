var express = require('express');
var session = require('express-session');
const get_data_account = require('../model/getdatabyaccount');
var router = express.Router();
const set_data_account = require('../model/setdatabyaccount');
const deleteFunc = require('../model/deletedatabyaccount');
const [getproduct, setproduct] = require('../model/getproduct');
var shopid;
// var session;
/* GET users listing. */
router.get('/', async function(req, res, next) {
    let session = req.session;
    shopid = session.shop_id;
    let [dataInDb, shopIdList] = await get_data_account(shopid);
    res.render('user', { title: 'USER PAGE', products: dataInDb.rows, shopid: shopid });
});


router.get('/createproduct/', function(req, res, next) {
    res.render('createproduct', { title: 'Create Product PAGE' });
});

router.post('/createproduct/', async function(req, res, next) {
    var data = await set_data_account(req.body.nameproduct, 
                     parseInt(req.body.quantity), 
                     parseInt(req.body.price), 
                     req.body.quality, 
                     req.body.description, shopid);
    let [dataInDb, shopIdList] = await get_data_account(shopid);

    res.render('user', { title: 'Hello', products: dataInDb.rows });
});

router.post('/deleteproduct', async function(req, res, next) {
    var data = await deleteFunc(parseInt(req.body.idproducttodelete));
    let [dataInDb, shopIdList] = await get_data_account(shopid);

    res.render('user', { title: 'Hello', products: dataInDb.rows });
});


router.get('/updateproduct', async function(req, res, next) {
    var data = await getproduct(parseInt(req.query.idproducttoupdate));
    res.render('updateproduct', { product: data.rows[0] });
});

router.post('/updateproduct', async function(req, res, next) {
    const productquantity = req.body.quantity;
    const productprice = req.body.price;
    const quality = req.body.quality;
    const productdescription = req.body.description;

    var data = await setproduct(parseInt(productquantity), parseInt(productprice), quality, productdescription);
    let [dataInDb, shopIdList] = await get_data_account(shopid);
    res.render('user', { title: 'USER PAGE', products: dataInDb.rows});

});

module.exports = router;