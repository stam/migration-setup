const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(
  "/legacy",
  createProxyMiddleware({
    target: "http://localhost:5001",
    changeOrigin: true,
  })
);

app.listen(5000);
