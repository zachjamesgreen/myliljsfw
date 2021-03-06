var _ = require('underscore');
var chokidar = require('chokidar');

assetDirs = [
  'app/sass',
  'app/sass/includes',
  'app/sass/components',
  'app/js',
  'app/js/lib'
];

// Initialize watcher.
var watcher = chokidar.watch(['app/sass', 'app/js'], {
  // ignored: /[\/\\]\./,
  persistent: true
});

// Something to use when events are received.
var log = console.log.bind(console);
// Add event listeners.
watcher
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`));

// More possible events.
watcher
  .on('addDir', path => log(`Directory ${path} has been added`))
  .on('unlinkDir', path => log(`Directory ${path} has been removed`))
  .on('error', error => log(`Watcher error: ${error}`))
  .on('ready', () => log('Initial scan complete. Ready for changes'))
  .on('raw', (event, path, details) => {
    log('Raw event info:', event, path, details);
  });

// 'add', 'addDir' and 'change' events also receive stat() results as second
// argument when available: http://nodejs.org/api/fs.html#fs_class_fs_stats
watcher.on('change', (path, stats) => {
  if (stats) console.log(`File ${path} changed size to ${stats.size}`);
});

// Stop watching.
watcher.close();

// Full list of options. See below for descriptions. (do not use this example)
// chokidar.watch('file', {
//   persistent: true,
//
//   ignored: '*.txt',
//   ignoreInitial: false,
//   followSymlinks: true,
//   cwd: '.',
//
//   usePolling: true,
//   interval: 100,
//   binaryInterval: 300,
//   alwaysStat: false,
//   depth: 99,
//   awaitWriteFinish: {
//     stabilityThreshold: 2000,
//     pollInterval: 100
//   },
//
//   ignorePermissionErrors: false,
//   atomic: true
// });
