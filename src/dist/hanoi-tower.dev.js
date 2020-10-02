"use strict";

var CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  numTransfers = Math.pow(2, disksNumber) - 1;
  timeToTransfer = Math.floor(numTransfers * 3600 / turnsSpeed);
  return {
    turns: numTransfers,
    seconds: timeToTransfer
  };
}; //console.log(module.exports(5, 4074));