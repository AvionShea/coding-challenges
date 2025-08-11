/*
Problem 1: Two Sum (Easy)
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

function twoSum(arrOfNums, targetNum) {
    // storing seen numbers in a hashmap (object)
    const seenNums = {};

    //iterate through each number in the array
    for (let i = 0; i < arrOfNums.length; i++) {
        //stores the current number's index
        const currentNum = arrOfNums[i];

        //determines the difference between target number and the current number (seeing what number is needed to equal target)
        const diff = targetNum - currentNum;

        //checks to see if the second number needed is stored in the hashmap
        if (diff in seenNums) {

            //if yes, return the seen number index and the current number index
            return [seenNums[diff], i];
        }

        // Store the index of the current number
        seenNums[currentNum] = i;
    }
};

console.log((twoSum([2, 7, 11, 15], 9)))