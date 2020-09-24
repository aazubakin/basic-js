const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  const cat = '^^';
  let count = 0;
  const myArray = Array.from(arguments[0]);
  if (myArray.length === 0) return count;
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
      if (myArray[i][j] === cat) count++;
    }
  }
  return count;
  // remove line with error and write your code here
};

//console.log(module.exports([[1, 34], [5, 'dfgdf,'], ['^^']]));