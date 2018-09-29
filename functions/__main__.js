/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string}
*/

const g = require('../src/genpwd'); 

module.exports = (name = 'world', context, callback) => {
  callback(null, `Hello, ${name}.`);
};
