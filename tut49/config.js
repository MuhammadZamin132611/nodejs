const mysql = require("mysql");

const con = mysql.createConnection({
    host: "127.0.0.1",
    port: '3306',
    user: "root",
    password: "",
    database: "student"
})

con.connect((err) => {
    if (err) {
        console.log("error")
    }
    else {
        console.log("connected")
    }
});

module.exports = con;
