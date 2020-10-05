"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomError = require("../extensions/custom-error");

module.exports =
/*#__PURE__*/
function () {
  function DepthCalculator() {
    _classCallCheck(this, DepthCalculator);
  }

  _createClass(DepthCalculator, [{
    key: "calculateDepth",
    value: function calculateDepth(arr) {
      var count = 1;
      var maxCount = 1;

      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          count = this.calculateDepth(arr[i]) + 1;
          if (maxCount < count) maxCount = count;
        }
      }

      return maxCount;
    }
  }]);

  return DepthCalculator;
}();
/*
const calc = new DepthCalculator();
console.log(calc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]));
console.log(calc.calculateDepth([1, 2, 3, 4, 5, [1]]));
console.log(calc.calculateDepth([1, [2, [3, ], 3]]));
console.log(calc.calculateDepth([1, [8, [1, [2]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));
console.log(calc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]));
*/