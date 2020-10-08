const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(param) {
    this.param = param;
  }

  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    const messageLength = message.length;
    const keyLength = key.length;

    //make key in right order
    let keyToMessage = '';
    let j = 0; //count for key 
    for (let i = 0; i < messageLength; i++) {
      if (j === keyLength) j = 0;
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        keyToMessage += message[i];
        j--;
      } else keyToMessage += key[j];
      j++;
    }
    //-----------------------

    let encrypt = '';
    for (let i = 0; i < messageLength; i++) {
      if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
        encrypt += String.fromCharCode((((message[i].charCodeAt() - 65) + (keyToMessage[i].charCodeAt() - 65)) % 26) + 65);
      } else encrypt += message[i];
    }
    if (this.param === undefined || this.param === true) return encrypt;
    else return encrypt.split("").reverse().join("");
  }

  decrypt(message, key) {
    //message = message.toUpperCase();
    key = key.toUpperCase();
    const messageLength = message.length;
    const keyLength = key.length;

    //make key in right order
    let keyToMessage = '';
    let j = 0; //count for key 
    for (let i = 0; i < messageLength; i++) {
      if (j === keyLength) j = 0;
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        keyToMessage += message[i];
        j--;
      } else keyToMessage += key[j];
      j++;
    }
    //-----------------------

    let decrypt = '';
    for (let i = 0; i < messageLength; i++) {
      if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
        decrypt += String.fromCharCode((((message[i].charCodeAt() - 65) + 26 - (keyToMessage[i].charCodeAt() - 65)) % 26) + 65);
      } else decrypt += message[i];
    }
    if (this.param === undefined || this.param === true) return decrypt;
    else return decrypt.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
/*
const directMachine = new VigenereCipheringMachine();

console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

const reverseMachine = new VigenereCipheringMachine(false);

console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')); // => '!ULLD XS XQHIEA'
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')); // 
*/