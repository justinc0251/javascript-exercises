const removeFromArray = function(array, arg) {
    const index = array.indexOf(arg);
    array.splice(index, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
