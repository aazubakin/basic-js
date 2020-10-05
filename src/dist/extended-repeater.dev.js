"use strict";

var CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  myObj = arguments[1] === undefined ? {} : arguments[1];
  if (myObj.separator === undefined) myObj.separator = '+';
  if (myObj.additionSeparator === undefined) myObj.additionSeparator = '|';
  if (myObj.repeatTimes === undefined) myObj.repeatTimes = 1;
  if (myObj.addition === undefined) myObj.addition = '';
  if (myObj.additionRepeatTimes === undefined) myObj.additionRepeatTimes = 0;
  myObj.str = str;
  myObj.additionStr = '';

  for (var j = 0; j < myObj.additionRepeatTimes; j++) {
    myObj.additionStr += myObj.addition;
  }

  myObj.str += myObj.additionStr;
  str = myObj.str;

  if (myObj.repeatTimes !== 1) {
    for (var i = 0; i < myObj.repeatTimes - 1; i++) {
      myObj.str = myObj.str + myObj.separator + str;
    }
  }

  return myObj.str;
};

console.log(module.exports('la', {
  repeatTimes: 3
}));
console.log(module.exports('la', {
  repeatTimes: 3,
  separator: 's',
  addition: '+',
  additionRepeatTimes: 1
}));