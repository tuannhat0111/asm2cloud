var pg_conn = require("./pg_config")


async function get_all_product(){
        var query = `SELECT * FROM product`;
        var data = await pg_conn.query(query);
        return data ;
}

module.exports = get_all_product