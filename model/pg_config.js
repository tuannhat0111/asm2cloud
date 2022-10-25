const { Pool, Client } = require("pg");


const pg_conn = new Pool({
    user: 'jwlrwdxxudhlbl',
    host: 'ec2-52-70-45-163.compute-1.amazonaws.com',
    database: 'd4knn7ptr9nj1k',
    password: '7a1ca949ea03185883f172e44a6d8bc3984f38e6abe86dc1620f271eb9f23c13',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
});

// console.log(pg_conn);
module.exports = pg_conn