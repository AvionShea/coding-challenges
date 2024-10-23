/*
October 23, 2024

https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

Description:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

str -> ignore caps -> won't contain empty str
return "(" only if letter is seen once and ")" if letter is seen more the once
*/

function duplicateEncode(str) {
    //toLowerCase()
    //split()
    //change to ( or ) -> map()
    //check if repeating -> indexOf /  lastIndexOf
    //join() => str

    return str.toLowerCase()
        .split("")
        .map((currentValue, index, arr) => arr.indexOf(currentValue) === arr.lastIndexOf(currentValue) ? "(" : ")")
        .join("")
};

console.log((duplicateEncode("din")), "(((");
console.log((duplicateEncode("recede")), "()()()");
console.log((duplicateEncode("Success")), ")())())");