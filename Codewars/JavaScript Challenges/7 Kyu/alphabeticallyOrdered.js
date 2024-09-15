/*
Description:
Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

Examples (input -> output)
"kata" -> false ('a' comes after 'k')
"ant" -> true (all characters are in alphabetical order)
Good luck :)

- takes in word
- return boolean
- bob -> false

- take in a word
- split the word/parameter, sort (alpha a to z), join
- compare word/parameter to newly sorted word
- return true or false
*/

const alphabetic = (word) => {
  let splitAlpha = word.split("").sort().join("");

  if (word === splitAlpha) {
    return true;
  };
  return false;
};

//refactor
const alphabetic = (word) => word === word.split("").sort().join("");