/*
https://www.codewars.com/kata/56e2f59fb2ed128081001328

Description:

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in the same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕
*/

function printArray(array) {
    return array.join(",");
};

//refactor
const printArray = arr => arr.join();

console.log(printArray(["h", "o", "l", "a"]), "h,o,l,a")
console.log(printArray([true, false, true, true, false]), "true,false,true,true,false")
console.log(printArray(["3", "2", "1", "0"]), "3,2,1,0",)