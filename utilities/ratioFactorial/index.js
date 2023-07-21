const fact = require("../factorial/index");
const ratio = require("../ratio/index");

function ratioAndFactorial(a, b, c) {
  return { ratio: ratio(a, b), factorial: fact(c) };
}

module.exports = ratioAndFactorial;
