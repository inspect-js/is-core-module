module.exports = function(packageName) {
  return !!~Object.keys(process.binding('natives')).indexOf(packageName);
}
