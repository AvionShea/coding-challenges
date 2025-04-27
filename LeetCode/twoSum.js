/*

https://leetcode.com/problems/two-sum/description/

1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

arr -> no funny biz
give me a sum to obtain
return pairs that = sum
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

console.log(twoSum([2, 7, 11, 15], 9));