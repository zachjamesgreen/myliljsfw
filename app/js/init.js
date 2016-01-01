requirejs.config({
  baseUrl: 'app/js',
  paths: {
    jquery: '../../bower_components/jquery/dist/jquery.min',
    m: '../../bower_components/mustache.js/mustache.min',
    underscore: '../../bower_components/underscore/underscore-min'
  }
});

requirejs(['jquery', 'routes', 'underscore'], function($, routes, _) {
  console.log(routes.getFragment());
});
