const pg_conn = require("./pg_config");

// async function insertFul(product_id){
//     const ins_query =
//     {
//         Text: 'INSERT INTO products VALUE($1, $2, $3, $4, $5)',
//         values: [id,product_name, price, quatity, shop_id]
//     };
//     var query_data = await pg_conn(shop_id);
//     return insertFul;
// }

async function set_data_account(nameproduct, quantity, price, description, shopid){

         const ins_query = `INSERT INTO product (productname, productquantity, productprice, productdescription, shopid)
         VALUES('${nameproduct}', ${quantity}, ${price}, '${description}', ${shopid})`
     console.log(ins_query);
    var data = await pg_conn.query(ins_query);
   return data;
}

module.exports = set_data_account;