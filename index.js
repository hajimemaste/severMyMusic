const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoDB = require("./config/connectDB");
const mySongRouter = require("./router/mySongRouter");

dotenv.config();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
mongoDB();

// ROUTER
app.use("/api/v1/myMusic", mySongRouter);
app.listen(3000, () => {
  console.log("severs is running .... ");
});
