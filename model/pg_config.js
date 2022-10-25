const { Pool, Client } = require("pg");


const pg_conn = new Pool(
    {
        user: 'utvmdcafqradkl',
        host: 'ec2-44-209-24-62.compute-1.amazonaws.com',
        database: 'dfifpbr2l6a6j5',
        password: 'a57b486a174b6cfcf6d50a258da9d72fd33f4b51cd54a0d5a8f52211916887c0',
        port: 5432,
        ssl:{
            rejectUnauthorized: false
        },
    });

// console.log(pg_conn);
    module.exports = pg_conn