const sumAll = function(first, second) {
    // Parameters cannot be negative
    if(first < 0 || second < 0)
        return 'ERROR';
    
    // Parameters must be integers
    if(!Number.isInteger(first) || !Number.isInteger(second))
        return 'ERROR';

    let sum = 0;
    let temp;

    // Swaps first and second parameter if first is larger than the second
    if(first > second)
    {
        temp = first;
        first = second;
        second = temp;
    }

    // Adds numbers between two different numbers
    for(let i = first; i <= second; i++)
    {
        sum +=i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
