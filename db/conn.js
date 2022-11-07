const mysql = require("mysql2");

const conn = mysql.createConnection({
  user: "sql12533577",
  host: "sql12.freesqldatabase.com",
  password: "ZkFVS4iaXW",
  database: "sql12533577",
});

conn.connect((error) => {
  if (error) throw error;
  console.log("connected !");
});

module.exports = conn;
