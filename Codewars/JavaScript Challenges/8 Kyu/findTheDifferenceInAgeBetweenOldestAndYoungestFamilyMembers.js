/*
https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

Description:
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

arr -> ints only -> no str
return arr -> Max # -> Min # -> diff b/t Max and Min
*/

function differenceInAges(ages) {
    let arr = []
    let maxAge = Math.max(...ages);
    let minAge = Math.min(...ages);
    let difference = maxAge - minAge

    arr.push(minAge, maxAge, difference)

    return arr;
}

console.log(differenceInAges([25, 98, 32, 101, 2]), [101, 2, 99])
console.log(differenceInAges([0, 76, 1, 48, 82]), [82, 0, 82])
console.log(differenceInAges([101, 62, 51, 11, 27]), [101, 11, 90])

