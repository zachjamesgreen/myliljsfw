'use strict';
import {routes} from '../routes.js'
var _ = require('underscore');
var url = require('url');

class Router{
  constructor (req) {
    this.routes = routes
    this.method = req.method
    this.headers = req.headers
    this.statusMessage = req.statusMessage
    this.url = url.parse(req.url)
  }

  getMethod () {
    return this.method
  }

  getController () {

  }

  render () {
    return this.url.pathname
    // return html for view
  }

  isAsset () {
    // Route request to asset
  }
}

export {Router}
