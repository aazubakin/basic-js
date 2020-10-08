"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomError = require("../extensions/custom-error");

var VigenereCipheringMachine =
/*#__PURE__*/
function () {
  function VigenereCipheringMachine(param) {
    _classCallCheck(this, VigenereCipheringMachine);

    this.param = param;
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


      var encrypt = '';

      for (var _i = 0; _i < messageLength; _i++) {
        if (message[_i].charCodeAt() > 64 && message[_i].charCodeAt() < 91) {
          encrypt += String.fromCharCode((message[_i].charCodeAt() - 65 + (keyToMessage[_i].charCodeAt() - 65)) % 26 + 65);
        } else encrypt += message[_i];
      }

      if (this.param === undefined || this.param === true) return encrypt;else return encrypt.split("").reverse().join("");
    }
  }, {
    key: "decrypt",
    value: function decrypt(message, key) {
      //message = message.toUpperCase();
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


      var decrypt = '';

      for (var _i2 = 0; _i2 < messageLength; _i2++) {
        if (message[_i2].charCodeAt() > 64 && message[_i2].charCodeAt() < 91) {
          decrypt += String.fromCharCode((message[_i2].charCodeAt() - 65 + 26 - (keyToMessage[_i2].charCodeAt() - 65)) % 26 + 65);
        } else decrypt += message[_i2];
      }

      if (this.param === undefined || this.param === true) return decrypt;else return decrypt.split("").reverse().join("");
    }
  }]);

  return VigenereCipheringMachine;
}();

module.exports = VigenereCipheringMachine;
/*
const directMachine = new VigenereCipheringMachine();

console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

const reverseMachine = new VigenereCipheringMachine(false);

console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')); // => '!ULLD XS XQHIEA'
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); // 
*/