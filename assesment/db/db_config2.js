const mysql = require("mysql2");
require('dotenv').config()

const connection2 = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306, //Not needed
    user: "root",
    password: process.env.PASSWORD, 
    database: "students",
});

connection2.connect(err => {
    if (err){
        console.log(`Database Error: ${err}`);
    } 
    else{
        console.log(`Database connection is successful`);
    }787
});

module.exports = {connection2};