var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.on('connect', function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("This resume app is listening at http://%s:%s and you should hire me :)", host, port);
})

app.listen(process.env.PORT || 5000);
