const CustomError = require("../extensions/custom-error");

module.exports = function transform( /* arr */ ) {
  if ((arguments[0] === undefined) || !Array.isArray(Array.from(arguments[0]))) throw Error;
  const arrToTransform = Array.from(arguments[0]);
  const reuslt = [];
  for (let i = 0; i < arrToTransform.length; i++) {
    switch (arrToTransform[i]) {
      case '--discard-next':
        if (i >= arrToTransform.length - 2 ||
          arrToTransform[i + 2] === '--double-prev' ||
          arrToTransform[i + 2] === '--discard-prev') {
          i += 2;
          break;
        } else if (arrToTransform[i + 2] === '--double-next' ||
          arrToTransform[i + 2] === '--discard-next') {
          i += 1;
          break;
        } //control sequences
        reuslt.push(arrToTransform[i + 2]);
        i += 2;
        break;
      case '--discard-prev':
        if (i === 0) break; //control sequences
        reuslt.pop();
        break;
      case '--double-next':
        if (i === arrToTransform.length - 1) break; //control sequences
        reuslt.push(arrToTransform[i + 1]);
        break;
      case '--double-prev':
        if (i === 0) break; //control sequences
        reuslt.push(arrToTransform[i - 1]);
        break;
      case undefined:
        break;
      default:
        reuslt.push(arrToTransform[i]);
    }
  }
  return reuslt;
};