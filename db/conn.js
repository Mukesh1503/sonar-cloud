const mysql = require("mysql2");
require("dotenv").config();

const conn = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect((error) => {
  if (error) throw error;
  console.log("connected !");
});

module.exports = conn;
