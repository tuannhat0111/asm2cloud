var pg_conn = require("./pg_config")
async function authen(username, password)
{
    var authenticated = false;
    var shop_id;
    var role;
    var sql = `SELECT * FROM account Where username = '${username}' AND password = '${password}'`;
      var query_data = await pg_conn.query(sql);
    if(query_data.rowCount != 0)
    {
        authenticated = true;
        shop_id =query_data.rows[0].shopid;
        role = query_data.rows[0].role
    }
    // console.log(authenticated);
    // console.log("Trong ham");
    // console.log(query_data.rows);
    // return query_data;
    return [authenticated, shop_id, role];
}

module.exports = authen;