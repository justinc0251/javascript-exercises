const reverseString = function(string) {
    /*
    //Return new string by adding each character starting from the end

    let newString = "";
    for(let i = string.length-1; i >= 0; i--)
    {
        newString += string.charAt(i);
    }
    return newString;
    */

    /* More efficient method
    * splits string into an ordered list of arrays, each consisting of a different letter of the string
    * reverses the arrays so that the first array becomes the last, and last becomes the first.
    * joins the arrays into one string
    */

    return string.split('').reverse().join('');

};

// Do not edit below this line
module.exports = reverseString;
