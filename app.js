require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./routes/router");
const { config } = require("dotenv");
const path = require('path')


app.use(express.json());
app.use(cors());
config({path:'./config.env'})

app.use("/uploads", express.static("./uploads"));
app.use(router);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,"/build")))

app.listen(PORT, () => {
  console.log("server start");
});
