/**
* GenPwd as a FaaS.
* @param {Number} genId The generator to use.
* @param {Number} nwords Number of words to generate.
* @param {Number} punctuation Include punctuation in generated words.
* @param {Number} capitals Include capitals.
* @param {Number} numbers Include numbers.
* @returns {Object}
*/

const g = require('../src/genpwd'); 

module.exports = (
  genId = 3, 
  nwords = 10, 
  punctuation = 0, 
  capitals = 0, 
  numbers = 0,
  context, callback) => {
    const opts = { 
      punctuation: (punctuation == 1), 
      capitals: (capitals == 1), 
      numbers: (numbers == 1) 
    };
  callback(null, g.generate(genId = genId, nwords = nwords, options = opts));
};
