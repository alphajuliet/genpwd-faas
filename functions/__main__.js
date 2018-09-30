/**
* GenPwd as a FaaS.
* @param {Number} genId The generator to use.
* @param {Number} nwords Number of words to generate.
* @returns {Object}
*/

const g = require('../src/genpwd'); 

module.exports = (genId = 3, nwords = 10, context, callback) => {
  callback(null, g.generate(genId = genId, nwords = nwords));
};
