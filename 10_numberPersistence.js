/*
Write a function, "persistence", that takes in a positive parameter "num"
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

Examples:
persistence(39) === 3 
Because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

persistence(999) === 4 
Because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and 1*2 = 2
*/

function persistence(num) {
    //enter code here
    let number = num;
    let count = 0;
    while(number.toString(10).length > 1) {
        let nums = number.toString(10).split("").map(data=>parseInt(data, 10));
        number = nums.reduce((result, digit, i, array) => { return result * digit;});
        count++;
    }
    console.log(`number: ${number}`);
    return count;
}

// persistence(25);

module.exports = {
    persistence
}