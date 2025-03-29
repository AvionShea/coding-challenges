/* 
First Challenge (Simple)
Problem:
Write a function that takes an array of numbers and returns the sum of all the elements.

Example:
js

Input: [1, 2, 3, 4, 5]  
Output: 15

Requirements:
You must write the solution in either JavaScript or Java.

The function should work for both positive and negative numbers.

The function should return 0 if the array is empty.
*/

//My solution
function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr.reduce((a, b) => a + b, 0);
    }
};

//ChatGPT solution (improved solution)
function sumOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}