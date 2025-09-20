/*
09/20/2025
Problem 4: Contains Duplicate (Easy)
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
Example 2:
Input: nums = [1,2,3,4]
Output: false
Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
//create hash map to store seen numbers
//for loop to check if element is in seen numbers
//if yes, return true
//if no, add to seen numbers and continue to next number


function containsDuplicates(arr) {
    const seenNumbers = {};
    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i]
        if (currentNumber in seenNumbers) {
            return true
        } else {
            seenNumbers[currentNumber] = i
        }
    }
    return false
}

console.log(containsDuplicates([1, 2, 3, 1]), true);
console.log(containsDuplicates([1, 2, 3, 4]), false);
console.log(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);