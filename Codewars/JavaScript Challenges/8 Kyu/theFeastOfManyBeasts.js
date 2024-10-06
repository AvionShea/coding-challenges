/* 
https://www.codewars.com/kata/5aa736a455f906981800360d

Description:
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

take two str -> animal, dish name -> lowercase w/o special characters
return boolean (t/f) if first character && last character of animal === first && last character of meal being brought
great blue heron -> garlic naan -> true
chickadee -> chocolate cake -> true
dog -> hotdogs -> false
*/

function feast(beast, dish) {
    //get first index of str for both the name and dish -- str[0] and dish[0]
    let firstCharBeast = beast[0];
    let firstCharDish = dish[0];

    //get the last index of str for both the name and dish  -- str[str.length - 1] and dish[dish.length -1]
    let lastCharBeast = beast[beast.length - 1];
    let lastCharDish = dish[dish.length - 1];
    //compare str[0] === dish[0] && compare str[str.length -1] === dish[dish.length - 1]
    if (firstCharBeast === firstCharDish && lastCharBeast === lastCharDish) {
        return true
    } else {
        return false
    };

};

console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("dog", "hotdog"), false)
