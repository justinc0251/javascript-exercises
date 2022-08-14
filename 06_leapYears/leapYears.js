const leapYears = function(year) {
    // returns true if qualifies for a leap year, false otherwise
    if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
        return true;
    return false;

    /* Faster method 
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
    */

};

// Do not edit below this line
module.exports = leapYears;
