const express = require("express");
const path = require("path");
// const {
//   createProxyMiddleware,
//   responseInterceptor,
// } = require("http-proxy-middleware");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// const proxy = createProxyMiddleware({
//   target: "https://kubusbranch25.bimcollab.com",
//   // pathRewrite: {
//   //   "^/foo/": "/", // rewrite path
//   // },
//   changeOrigin: true,
//   selfHandleResponse: true,
//   onProxyRes: responseInterceptor(
//     async (responseBuffer, proxyRes, req, res) => {
//       console.log("Proxying", req.originalUrl);
//       console.log(">>>", res.getHeader("content-security-policy"));

//       // const csp = `
//       // default-src 'none';
//       // manifest-src 'self';
//       // base-uri 'self';
//       // connect-src https: wss://api.appcues.net;
//       // font-src https: data:;
//       // img-src https: data: blob:;
//       // object-src 'none';
//       // child-src 'self' blob: data:;
//       // form-action 'self' https://mydev.bimcollab.com;
//       // frame-src https:;
//       // frame-ancestors 'self' *.bimcollab.com http://localhost:5173;
//       // report-uri https://kubusbranch25.bimcollab.com/WebApp/api/csp-report;
//       // `;
//       // res.setHeader(
//       //   "content-security-policy",
//       //   csp.replace(/(\r\n|\n|\r)/gm, "")
//       // );
//       res.removeHeader("content-security-policy");
//       res.removeHeader("x-frame-options");
//       res.removeHeader("x-content-type-options");
//       return responseBuffer;
//       // const response = responseBuffer.toString("utf8"); // convert buffer to string
//       // return response.replace("Hello", "Goodbye"); // manipulate response and return the result
//     }
//   ),
// });

// app.use("*", proxy);
// app.on("upgrade", proxy.upgrade);

app.listen(5000);
