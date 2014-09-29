var modules = require('./lib/modules.json');

module.exports = function(packageName) {
  return !!~modules.indexOf(packageName);
}
