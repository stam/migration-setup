const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

const assetsLocation = path.join(__dirname, "../public");
app.use(express.static(assetsLocation));

app.use(
  "/legacy",
  createProxyMiddleware({
    target: "http://localhost:5001",
    changeOrigin: true,
  })
);

// Fallback routing
// If this is not desired or possible with the proxy setup, we can use hash routing
app.get("*", function (req, res) {
  res.sendFile(assetsLocation + "/index.html");
});

app.listen(5000);
