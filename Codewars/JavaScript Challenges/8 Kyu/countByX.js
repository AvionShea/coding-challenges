/*
Description:
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

Parameters = a number and its multiple
Return = an array with the multiples
Example = countBy(2,5) === [2,4,6,8,10]
Pseudocode = take in two parameters, create an empty array, loop through, push to the empty array
*/

const countBy = (x, n) => {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(i * x)
    };
    return z;
};