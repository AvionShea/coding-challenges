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

function twoSum(arr, sum) {
    //keep track of pairs (paris arr)
    const pairs = [];

    //hashmap obj
    const seenNums = {};

    //loop
    for (const currentNum of arr) {
        const diff = sum - currentNum;

        if (seenNums[diff]) {
            pairs.push([currentNum, diff])
        } else {
            seenNums[currentNum] = true
        };
    };
    return pairs
};