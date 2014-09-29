var modules = Object.keys(process.binding('natives'));

module.exports = function(packageName) {
  return !!~modules.indexOf(packageName);
}
