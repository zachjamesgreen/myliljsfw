'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var url = require('url');

var Router = function Router(req) {
  _classCallCheck(this, Router);

  this.method = req.method;
  this.headers = req.headers;
  this.statusMessage = req.statusMessage;
  this.url = url.parse(req.url);
};

exports.Router = Router;