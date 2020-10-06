"use strict";

var CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  myObj = arguments[1] === undefined ? {} : arguments[1];
  if (myObj.separator === undefined) myObj.separator = '+';
  if (myObj.additionSeparator === undefined) myObj.additionSeparator = '|';
  if (myObj.repeatTimes === undefined) myObj.repeatTimes = 1;
  if (myObj.addition === undefined) myObj.addition = '';
  if (myObj.additionRepeatTimes === undefined) myObj.additionRepeatTimes = 1;
  myObj.str = str;
  myObj.additionStr = myObj.addition; //make addition string

  for (var j = 0; j < myObj.additionRepeatTimes - 1; j++) {
    if (myObj.additionRepeatTimes > 1) myObj.additionStr += myObj.additionSeparator + myObj.addition; //else myObj.additionStr += myObj.addition;
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
/*
console.log(module.exports('la', {
  repeatTimes: 3
})); //'la+la+la'
console.log(module.exports('la', {
  repeatTimes: 3,
  separator: 's',
  addition: '+',
  additionRepeatTimes: 1
})); //'la+sla+sla+'

console.log(module.exports('TESTstr', {
  repeatTimes: undefined,
  separator: 'ds',
  addition: 'ADD!',
  additionRepeatTimes: undefined,
  additionSeparator: ')))000'
})); //'TESTstrADD!'

console.log(module.exports('my test string', {
  repeatTimes: 5,
  separator: '?!',
  addition: 'PLUS',
  additionRepeatTimes: 4,
  additionSeparator: '))'
}) === 'my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS');

*/