var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

var server = app.listen(process.env.PORT || 5000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("This angular app is listening at http://%s:%s", host, port);
});
