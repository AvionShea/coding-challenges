/*
https://www.codewars.com/kata/5808e2006b65bff35500008f

Description:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
*/

let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const position = (letter) => `Position of alphabet: ${alpha.indexOf(letter) + 1}`