var pg_conn = require('./pg_config');

var idproduct;
async function getproduct(idproducttoupdate){
        idproduct = idproducttoupdate;
        var product_query = `SELECT * FROM product WHERE productid = ${idproducttoupdate}`;
  
    var data = await pg_conn.query(product_query);

    return data;
};
async function setproduct(quantity, price, description){

    var product_query = `UPDATE product SET  productquantity=${quantity}, 
    productprice= ${price}, productdescription= '${description}'
	WHERE productid = ${idproduct}`;
console.log(product_query);

var data = await pg_conn.query(product_query);
    return data;
};
module.exports = [getproduct,setproduct];