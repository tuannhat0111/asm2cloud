const pg_conn = require("./pg_config");



async function deleteFunc(idproduct){
    const del_query= `DELETE FROM product WHERE productid = ${idproduct}`
    console.log(del_query);
    var query_data = await pg_conn.query(del_query);
    return query_data;
}
module.exports = deleteFunc;