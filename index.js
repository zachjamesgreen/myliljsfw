'use strict';

var _router = require('./dist/js/lib/router.js');

var http = require('http');
var server = http.createServer();
var hostname = '127.0.0.1';
var port = 1337;
//create config file for vars
//this file is only the entry point dont not over load in
//you might have to make some middleware
// keep it small

server.on('request', function (req, res) {
  var r = new _router.Router(req);
  console.log(r.render());
  res.end('OK');
});

server.listen(port, hostname, function () {
  console.log("listening...");
});
