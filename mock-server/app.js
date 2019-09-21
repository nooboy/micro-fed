const express = require('express');
const app = express();
const fs = require('fs');
const proxyMiddleWare= require('http-proxy-middleware');

const proxyOption1 ={
  target: 'http://localhost:3000',
  changeOrigoin: true,
  ws: true,
  pathRewrite: { '^/test1': '/' }
};

const proxyOption2 ={
  target: 'http://localhost:3000',
  changeOrigoin: true,
  ws: true,
  pathRewrite: { '^/test2': '/' }
};

// 指定根目录
app.use(express.static(__dirname + "/" , {index:"index.html"}));

// 代理
// app.use('/test1', express.static('./index.html'));
// app.use('/test2', express.static('./index.html'));
app.use("/test1", proxyMiddleWare(proxyOption1));
app.use("/test2", proxyMiddleWare(proxyOption2));

// 哒哒哒
app.listen(3000, () => console.log('Example app listening on port 3000!'))