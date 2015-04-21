var fs = require('fs');

SupAPI.registerPlugin('typescript', 'stats', {	
  defs: fs.readFileSync(__dirname + '/stats.d.ts.txt', {
    encoding: 'utf8'
  })
});