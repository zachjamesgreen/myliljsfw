'use strict';

var _router = require('./js/lib/router.js');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require('http');
var server = http.createServer();

var hostname = '127.0.0.1';
var port = 1337;
//create config file for vars
//this file is only the entry point dont not over load in
//you might have to make some middleware
// keep it small

server.on('request', function (req, res) {
  console.log(new _router2.default(req));
});

server.listen(port, hostname, function () {
  console.log("listening...");
});
