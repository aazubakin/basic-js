const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
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


    return keyToMessage;
  }
  decrypt(message, key) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;

const directMachine = new VigenereCipheringMachine();

console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));