const express = require("express");
const path = require("path");

const app = express();

app.get("*", function (req, res) {
  if (req.url.startsWith("/Details.aspx")) {
    res.sendFile(__dirname + "/details.html");
  }
  res.sendFile(__dirname + "/index.html");
});

app.listen(5001);
