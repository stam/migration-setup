const express = require("express");
const path = require("path");

const app = express();

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(5001);
