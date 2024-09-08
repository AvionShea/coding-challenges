/*
Description:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

- input numbers
- split numbers by spaces
- sort numbers from highest to lowest
- extract index[0](highest) and index[numbers.length -1](lowest)
- concat using a space
*/

const highAndLow = (numbers) => {
    let splitNumber = numbers.split(" ").sort((a, b) => b - a);
    let highest = splitNumber[0];
    let lowest = splitNumber[splitNumber.length - 1]

    return highest + " " + lowest

};