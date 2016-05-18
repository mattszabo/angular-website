var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();
var http = require('http');

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

http.createServer(app).listen(process.env.PORT || 5000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("This resume app is listening at http://%s:%s and you should hire me :)", host, port);
});
