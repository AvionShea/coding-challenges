/*
DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

const squareSum = (num) => {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let numbers = num[i]

        sum += Math.pow(numbers, 2)
    }
    return sum
}