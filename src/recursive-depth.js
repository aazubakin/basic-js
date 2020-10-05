const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let maxCount = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count = this.calculateDepth(arr[i]) + 1;
        if (maxCount < count) maxCount = count;
      }
    }
    return maxCount;
  }
};

/*
const calc = new DepthCalculator();
console.log(calc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]));
console.log(calc.calculateDepth([1, 2, 3, 4, 5, [1]]));
console.log(calc.calculateDepth([1, [2, [3, ], 3]]));
console.log(calc.calculateDepth([1, [8, [1, [2]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));
console.log(calc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]));
*/