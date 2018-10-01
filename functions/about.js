/**
* @returns {any}
*/
const g = require('../src/genpwd');
module.exports = (context, callback) => {
  callback(null, g.info);
};
