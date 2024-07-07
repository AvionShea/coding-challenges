/*
DESCRIPTION:
This Kata is intended as a small challenge for my students

All Star Code Challenge #2

Create a function, named findAverage, that takes an array of ages of All Star Code students and returns the average (do NOT round the return value).

var allStars =  [17,16,16,16,16,15,17,17,15,5,17,17,16];
findAverage(allStars) //  => 200/13 = ~15.4
*/

const findAverage = (allStars) => {
    let sum = 0;

    for (let i = 0; i < allStars.length; i++) {
        let numbers = allStars[i]

        sum += numbers
    }

    return (sum / allStars.length)
}