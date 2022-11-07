const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./routes/router");
const { config } = require("dotenv");
const path = require('path')

let corsOptions = {
  origin: "neo-crud.herokuapp.com"
}

app.disable("x-powered-by");
app.use(express.json());
app.use(cors(corsOptions));
config({path:'./config.env'})

app.use("/uploads", express.static("./uploads"));
app.use(router);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,"/build")))

app.listen(PORT, () => {
  console.log("server start");
});
