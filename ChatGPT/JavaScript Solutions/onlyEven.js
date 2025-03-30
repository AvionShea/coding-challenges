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

//ChatGPT Solution
function onlyEven(arr) {
    return arr.filter((element) => element % 2 === 0);
};

/* 
Explanation

Less Code: It eliminates the need for manually pushing elements into a new array.

Better Readability: .filter() explicitly states that we are selecting elements based on a condition.

Efficiency: .map() creates a new array of the same length, whereas .filter() only creates a new array with the matching elements.
*/