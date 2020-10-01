"use strict";

var CustomError = require("../extensions/custom-error");

module.exports = function getSeason()
/* date */
{
  if (arguments[0] == undefined) return 'Unable to determine the time of year!';
  var date = arguments[0];
  if (Object.prototype.toString.call(date) != '[object Date]') throw Error;
  var month = date.getMonth();
  if (month === 11 || month < 2) return 'winter';
  if (month > 1 && month < 5) return 'spring';
  if (month > 4 && month < 8) return 'summer';else return 'autumn';
};

console.log(module.exports(new Date(1994, 1, 2, 3, 4, 5)));
console.log(module.exports(new Date(2018, 4, 17, 11, 27, 4, 321)));
console.log(module.exports(new Date(2017, 6, 11, 23, 45, 11, 500)));
console.log(module.exports(new Date(1994, 8, 26, 3, 0, 11, 500)));