/*
Description:
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

//Original
let divisibleBy = (numbers, divisor) => {
    let list = [];
    numbers.forEach((number) => {
        if (number % divisor === 0) {
            return list.push(number);
        };
    });
    return list;
};

//refactor
let divisibleBy = (numbers, divisor) => numbers.filter(number => number % divisor === 0);