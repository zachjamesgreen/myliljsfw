requirejs(['../init'], function(init) {
  requirejs(['jquery', 'app'], function($, app) {
    console.log(app.b);
  })
})
