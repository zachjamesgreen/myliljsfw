import Router from './js/lib/router.js'
var http = require('http');
var server = http.createServer()

var hostname = '127.0.0.1';
var port = 1337;
//create config file for vars
//this file is only the entry point dont not over load in
//you might have to make some middleware
// keep it small

server.on('request', function(req, res) {
  console.log(new Router(req));
})

server.listen(port, hostname, function() {
  console.log("listening...");
})
