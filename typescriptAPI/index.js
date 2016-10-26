var fs = require('fs');

SupCore.system.registerPlugin('typescriptAPI', 'stats', {	
  defs: fs.readFileSync(__dirname + '/stats.d.ts', {
    encoding: 'utf8'
  })
});