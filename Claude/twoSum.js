/*
Problem 1: Two Sum (Easy) - 08/11/2025
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

function twoSum(arrayOfNumbers, target) {
    const seenNumbers = {};

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const currentNumber = arrayOfNumbers[i];
        const diff = target - currentNumber;

        if (diff in seenNumbers) {
            return [seenNumbers[diff], i];
        }
        seenNumbers[currentNumber] = i;
    };
};

console.log(twoSum([2, 7, 11, 8, 15, 0, 3, 1], 9));