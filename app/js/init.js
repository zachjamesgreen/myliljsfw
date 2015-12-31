requirejs.config({
  baseUrl: 'app/js',
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery.min',
    m: '../../bower_components/mustache.js/mustache.min'
  }
});

requirejs(['jquery'], function($) {
  var load = function(page, elem) {
    requirejs(['pages/' + page], function(page) {
      elem.html(page)
    })
  }


  var uri = window.location.pathname
  var error = 0
  switch (uri) {
    case '/':
      load('index', $('index'))
      break;
    case '/page1':
      elem = $('page1')
      break;
    case '/page2':
      elem = $('page2')
      break;
    default:
      elem = '';
      error = 404;

  }

});
