require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const contacts = require("./routes/contacts");
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();

const app = express();

// PORT
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/", user);
app.use("/me/contacts", contacts)

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});