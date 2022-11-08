var pg_conn = require("./pg_config")


async function get_data_account(shopid){

    if(shopid != null){
        var query = `SELECT * FROM product Where shopid = ${shopid}`;
    }
    else {
        var query = "SELECT * FROM account";
    }
    var data = await pg_conn.query(query);
   
        var query1 = `SELECT shopid FROM account`;
        var shopIdList = await pg_conn.query(query1);

    return [data,shopIdList] ;
}

module.exports = get_data_account


