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