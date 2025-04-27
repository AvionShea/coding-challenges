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
    const seenNums = {};

    for (let i = 0; i < arrOfNums.length; i++) {
        const currentNum = arrOfNums[i];
        const diff = targetNum - currentNum;

        if (diff in seenNums) {
            return [seenNums[diff], i];
        }

        seenNums[currentNum] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));