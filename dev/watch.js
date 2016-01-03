'use strict';

var _ = require('underscore');
var chokidar = require('chokidar');
var cp = require('child_process')
var n = require('node-notifier');

// assetDirs = ['app/sass', 'app/sass/includes', 'app/sass/components', 'app/js', 'app/js/lib'];

// Initialize watcher.
var watcher = chokidar.watch(['app/sass', 'app/js'], {
  // ignored: /[\/\\]\./,
  persistent: true
});
var watchServer = chokidar.watch('app/app.js', {
  // ignored: /[\/\\]\./,
  persistent: true
});

watchServer.on('change', function(path, stat) {
  cp.exec('node_modules/.bin/babel -o app.js app/app.js', function(err, stdout, stderr) {
    if (stderr) {
      n.notify({
        'title': 'Server',
        'message': stderr
      });
    } else {
      n.notify({
        'title': 'Server',
        'message': "Server restarted"
      });
    }
  })
})

// Add event listeners.
watcher.on('change', function (path, stat) {
  if (path.match(/.*\.scss/)) {
    cp.exec('npm run build:css', function(err, stdout, stderr) {
      if (stderr) {
        n.notify({
          'title': 'SCSS',
          'message': stderr
        });
      } else {
        n.notify({
          'title': 'SCSS',
          'message': "Built CSS"
        });
      }
    })
  }
  if (path.match(/.*\.js/)) {
    console.log('Building Js');
    // && npm run build:browserify
    cp.exec('npm run build:babel', function(err, stdout, stderr) {
      if (stderr) {
        n.notify({
          'title': 'JS',
          'message': stderr
        });
      } else {
        n.notify({
          'title': 'JS',
          'message': "Built JS"
        });
      }
    })
  }
})
