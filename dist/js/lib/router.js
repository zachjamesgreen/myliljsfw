'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = undefined;

var _routes = require('../routes.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('underscore');
var url = require('url');

var Router = (function () {
  function Router(req) {
    _classCallCheck(this, Router);

    this.routes = _routes.routes;
    this.method = req.method;
    this.headers = req.headers;
    this.statusMessage = req.statusMessage;
    this.url = url.parse(req.url);
  }

  _createClass(Router, [{
    key: 'getMethod',
    value: function getMethod() {
      return this.method;
    }
  }, {
    key: 'getController',
    value: function getController() {}
  }, {
    key: 'render',
    value: function render() {
      return this.url.pathname;
      // return html for view
    }
  }, {
    key: 'isAsset',
    value: function isAsset() {
      // Route request to asset
    }
  }]);

  return Router;
})();

exports.Router = Router;