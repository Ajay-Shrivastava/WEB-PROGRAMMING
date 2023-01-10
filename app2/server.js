const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "mydb"
});
con.connect(function(err){
    if(err)
    console.log(err);
    else
    console.log("connected");
});

con.query("create database mydb", function(err , result) {
    console.log(result);
})
