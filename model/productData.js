var pg_conn = require("./pg_config")

async function productData(shopID) {
    var product_query = `SELECT * FROM shop Where shop_id = '${shopID}'`;
    var query_data = await pg_conn.query(product_query);
    console.log(query_data.rows)

    return query_data.rows;
}

module.exports = authen;