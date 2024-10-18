/*
Description:
https://www.codewars.com/kata/576bb71bbbcf0951d5000044

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

arr of # -> no str -> no floats
check for empty or null values -> empty arr
return -> arr of two values -> count of pos # and value of neg #
*/

function countPositivesSumNegatives(arr) {
    let returnArr = [];
    let countOfPosArr = [];
    let valueOfNegArr = [];

    if (arr == null || arr == []) {
        return []
    } else if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                countOfPosArr.push(arr[i]);
            } else {
                valueOfNegArr.push(arr[i]);
            }
        }
        returnArr.push(countOfPosArr.length, valueOfNegArr.reduce((a, b) => a - -b, 0))
    }
    return returnArr;
}

console.log(countPositivesSumNegatives([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65])
console.log(countPositivesSumNegatives([0, -14, -15]), [, -29])
console.log(countPositivesSumNegatives([]), [])