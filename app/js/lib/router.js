var url = require('url');

class Router {
  constructor (req) {
    this.method = req.method
    this.headers = req.headers
    this.statusMessage = req.statusMessage
    this.url = url.parse(req.url)
  }
}

export {Router}
