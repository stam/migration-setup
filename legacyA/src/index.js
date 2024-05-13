const express = require("express");
const path = require("path");

const app = express();

app.get("*", function (req, res) {
  console.log("Legacy |", req.url);
  if (req.url.startsWith("/WebApp/Details.aspx")) {
    res.sendFile(__dirname + "/details.html");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(5001);
