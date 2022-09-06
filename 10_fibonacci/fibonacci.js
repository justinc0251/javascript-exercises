// 1 + 1 + 2 + 3 + 5 + 8

const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }

  if (num == 0) {
    return 0;
  }

  let answer = 0;
  let temp;

  num1 = 0;
  num2 = 1;

  for (i = 1; i < num; i++) {
    temp = num2;
    num2 = num1 + num2;
    num1 = temp;
  }
  return num2;
};

// Do not edit below this line
module.exports = fibonacci;
