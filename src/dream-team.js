const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
  // remove line with error and write your code here
  if (!Array.isArray(arguments[0])) return false;
  const nameOfTeam = [];
  const memberTeam = Array.from(arguments[0]);

  memberTeam.forEach(elem => {
    if (typeof (elem) === 'string') {
      for (let i = 0; i < elem.length; i++) {
        if (elem[i] !== ' ') {
          nameOfTeam.push(elem[i].toUpperCase());
          break;
        }
      }
    }
  })
  return nameOfTeam.sort().join('');
};
