const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { APP_USER, APP_USER_PASSWORD } = process.env;
const fileRoute = require("./routes/file");
const path = require("path");
// require("./db/db");

mongoose
  .connect(
    `mongodb+srv://${APP_USER}:${APP_USER_PASSWORD}@test.dnojk.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err.message, APP_USER, APP_USER_PASSWORD));

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.json());
app.use(cors());
app.use(fileRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("listening to port 5000"));
