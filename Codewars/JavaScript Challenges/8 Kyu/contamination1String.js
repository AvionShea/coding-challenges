/*
https://www.codewars.com/kata/596fba44963025c878000039

Description:
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"

take in text and a char
return the char repeated the length of text
*/

function contamination(text, char) {
    return char.repeat(text.length);
};

console.log(contamination("abc", "z"));
console.log(contamination("Hello!", "♥"));
console.log(contamination("Lose", "W"));