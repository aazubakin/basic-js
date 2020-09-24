const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(/* sampleActivity */) {
  // remove line with error and write your code here
  const sampleStr = arguments[0];
  if (typeof sampleStr !== 'string') return false;
  const sampleActivity = parseFloat(sampleStr);
  if (Number.isNaN(sampleActivity) || (sampleActivity <= 0 || sampleActivity >= 15)) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const age = (Math.log(MODERN_ACTIVITY / sampleActivity)) / k;
  return Math.ceil(age);
};

//console.log(module.exports('32'));