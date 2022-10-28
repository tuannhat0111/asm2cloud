const pg_conn = require("./pg_config");
async function set_data_account(nameproduct, quality, price, evaluation, description, shopid) {

    const ins_query = `INSERT INTO product (productname, productquantity, productprice, qualityevaluation, productdescription, shopid)
         VALUES('${nameproduct}', ${quality}, ${price},'${evaluation}', '${description}', ${shopid})`
    console.log(ins_query);
    var data = await pg_conn.query(ins_query);
    return data;
}

module.exports = set_data_account;