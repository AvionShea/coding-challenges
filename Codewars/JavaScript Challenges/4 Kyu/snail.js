/*
Description:
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]]. 

*/

let snail = (arr) => {
    let finalArr = []
    while (arr.length) {
        finalArr.push(...arr.shift());
        for (var i = 0; i < arr.length; i++) {
            finalArr.push(arr[i].pop());
        };
        finalArr.push(...(arr.pop() || []).reverse());
        for (var i = arr.length - 1; i >= 0; i--) {
            finalArr.push(arr[i].shift());
        };
    };
    return finalArr;
};