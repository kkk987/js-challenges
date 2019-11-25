/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
npm test

Question: Why does the test pass for the third (last) test 
with no changes to the function?
*/

function largestNumber(arr) {
    // Your code here
    // Google JS syntax ;)
    if(arr.length <= 0) return null;
    var sortedArr = arr.sort(function (a, b) {return a-b});
    let i = 1;
    while(!Number.isInteger(sortedArr[sortedArr.length - i])) {
        i++;
    }
    return sortedArr[sortedArr.length - i];
}

console.log(largestNumber([5, -2, 10]));
console.log(largestNumber([10, 10, "s"]));
console.log(largestNumber([]));
console.log(largestNumber([-1, -2, -3]));

module.exports = {
    largestNumber
}