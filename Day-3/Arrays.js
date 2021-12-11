/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let sortedArray = nums.sort(function (a,b) {return a - b;});
    let uniqueSortedArray = sortedArray.filter(function(element, index, self) {
        return index === self.indexOf(element);
    })

    return uniqueSortedArray[uniqueSortedArray.length - 2];
}
