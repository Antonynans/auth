const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const router = require("./routes/auth.route");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

const port = 4000;

app.use("/api", router);

app.listen(port, (err) => {
  if (err) {
    process.exit(1);
  }
  console.log(`server is running on  port ${port}`);
});
