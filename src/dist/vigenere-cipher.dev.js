"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomError = require("../extensions/custom-error");

var VigenereCipheringMachine =
/*#__PURE__*/
function () {
  function VigenereCipheringMachine() {
    _classCallCheck(this, VigenereCipheringMachine);
  }

  _createClass(VigenereCipheringMachine, [{
    key: "encrypt",
    value: function encrypt(message, key) {
      message = message.toUpperCase();
      key = key.toUpperCase();
      var messageLength = message.length;
      var keyLength = key.length; //make key in right order

      var keyToMessage = '';
      var j = 0; //count for key 

      for (var i = 0; i < messageLength; i++) {
        if (j === keyLength) j = 0;

        if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
          keyToMessage += message[i];
          j--;
        } else keyToMessage += key[j];

        j++;
      } //-----------------------


      return keyToMessage;
    }
  }, {
    key: "decrypt",
    value: function decrypt(message, key) {
      throw new CustomError('Not implemented'); // remove line with error and write your code here
    }
  }]);

  return VigenereCipheringMachine;
}();

module.exports = VigenereCipheringMachine;
var directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));