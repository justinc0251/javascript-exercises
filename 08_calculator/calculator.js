const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;

  // return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  let product = array[0];
  for (let i = 1; i < array.length; i++) {
    product *= array[i];
  }
  return product;

  // return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (number) {
  if (number == 0) return 1;
  let answer = 1;
  for (let i = number; i > 0; i--) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
