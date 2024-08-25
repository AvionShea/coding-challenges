/*
Duplicate Integer
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true
Example 2:

Input: nums = [1, 2, 3, 4]

Output: false
Para: int array of #
Return: boolean of true if a value appears multiple times or false if no duplicates
Ex: [1,1,2,3,4,5,5,6] -> true; [1, 2, 3, 4, 5, 6] -> false
Pseudo: take in an arr, check arr for multiples, output true or false
*/

//original
const hasDuplicate = (nums) => {
    return (new Set(nums).size !== nums.length);
};

//refactor
const hasDuplicate = (nums) => (new Set(nums).size !== nums.length);