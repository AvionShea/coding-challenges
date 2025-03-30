/*
Second Challenge (Slightly Harder)
Problem:
Write a function that takes an array of numbers and returns a new array with only the even numbers.

Example:
js

Input: [1, 2, 3, 4, 5, 6]  
Output: [2, 4, 6]

Requirements:
Write the function in JavaScript or Java.

The function should return an empty array if no even numbers are found.

The original array should remain unchanged.

Pseudo
- Check each number using mod 2 to see if even
    - if even, add to new arr
    - not even, move to next number
*/

//My solution
function onlyEven(arr) {
    let onlyEvenArr = [];
    arr.map(element => {
        if (element % 2 === 0) {
            onlyEvenArr.push(element)
        }
    });
    return onlyEvenArr;
};

onlyEven([1, 2, 3, 4, 5]);