var fs = require('fs');
var path = require('path');

scss = 'app/sass/app.scss';
js = 'app/js/app.js'

fs.watch(scss, {persistent: true}, function(event, filename) {
  console.log(event + " => " + filename);

})

fs.watch(js, {persistent: true}, function(event, filename) {
  console.log(event + " => " + filename);

})
