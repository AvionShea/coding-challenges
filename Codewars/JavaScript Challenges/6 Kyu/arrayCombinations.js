/*
https://www.codewars.com/kata/59e66e48fc3c499ec5000103

Description:
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!


*/

function solve(arr) {
    //get rid of duplicates - new Set()
    //multiply lengths of sub arr - reduce((a,b) => a * b)
    //return product
    return arr.reduce((a, b) => a * new Set(b).size, 1)
}

console.log(solve([[1, 2], [4], [5, 6]]), 4)
console.log(solve([[1, 2], [4, 4], [5, 6, 6]]), 4)
console.log(solve([[1, 2], [3, 4], [5, 6]]), 8)
console.log(solve([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]]), 72)