const palindromes = function (word) {
  let lowerWord = word.toLowerCase();
  let array = [];
  let tempArray = lowerWord.split("");

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] >= "a" && tempArray[i] <= "z") {
      array.push(tempArray[i]);
    }
  }
  let string = array.join("");

  return string.split("").reverse().join("") == string;

};

/**
 * const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};
 */
// Do not edit below this line
module.exports = palindromes;
