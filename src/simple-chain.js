const CustomError = require("../extensions/custom-error");

const chainMaker = {
  resultArr: [],
  getLength() {
    return this.resultArr.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value === undefined) value = ' ';
    this.resultArr.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    position -= 1;
    if (position < 0 || position > this.resultArr.length - 1 ||
      !Number.isInteger(position)) {
      this.resultArr = [];
      throw Error;
    }
    this.resultArr.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.resultArr.reverse();
    return this;
  },
  finishChain() {
    const temp = this.resultArr.join('~~');
    this.resultArr = [];
    return temp;
  }
};

module.exports = chainMaker;

//console.log(chainMaker.addLink(20).addLink().removeLink(10).getLength());