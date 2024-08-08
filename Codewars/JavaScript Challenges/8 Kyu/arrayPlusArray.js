/*
Description:
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

let arrayPlusArray = (arr1, arr2) => {
    let combinedArr = [...arr1, ...arr2];

    let sum = 0;

    combinedArr.forEach((num) => {
        sum += num;
    });

    return sum;
};