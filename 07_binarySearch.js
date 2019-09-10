/*
Write a method which will act as a binary search which will find the 
position and the actual number of steps required to find the position. 
When the array has an even number of values the midpoint index will be rounded up.

Example:
    binaryArray = [1,5,8,12,20,21,35]
    searchValue = 8

    In this case the index returned would be 2 and it should take 3 steps. 
    In the first step, 3 is the midpoint index (value = 12). 
    In the second step 1 is the midpoint index (value = 5). 
    In the third and final step we are only left with 8 at index 2.

*/


function binarySearch(binaryArray, searchValue) {
    // Your code here
    let start = 0, end = binaryArray.length - 1;
    let steps = 1;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(binaryArray[mid] === searchValue) {
            return [mid, steps];
        }else if(binaryArray[mid] < searchValue) {
            start = mid + 1;
        }else {
            end = mid - 1;
        }
        steps++;
    }
    return false;
}
console.log(binarySearch([1, 3, 7, 10, 14, 19, 31, 36, 90], 1));
console.log(binarySearch([1, 3, 7, 10, 14, 19, 31], 31));
module.exports = {
    binarySearch
};