const config = require("./config");

var express = require("express");
var app = express();

// 当对主页发出 GET 请求时，响应“hello world”
app.get("/", function (req, res) {
  res.send("hello world1122");
});

app.listen(config.app.port, () => {
  console.log(`http://localhost:${config.app.port}`);
});
