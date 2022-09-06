const getTheTitles = function (array) {
    let answer = [];
    array.forEach(book => answer.push(book.title));
    return answer;
  // return array.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
