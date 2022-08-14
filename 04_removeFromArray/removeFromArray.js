const removeFromArray = function(...arg) {
    // Takes first element from rest parameter, which is the original array
    const array = arg[0];

    // Create empty array
    const newArray = [];

    // For each item in array, if the item is not included in the arguments, push item into new array    
    array.forEach((item) => {
        if(!arg.includes(item)){
            newArray.push(item);
        }
    });

    // Return new array
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
