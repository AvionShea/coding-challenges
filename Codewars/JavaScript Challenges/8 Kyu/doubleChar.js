/*
DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!

*/

//split
//add extra character (for each?)
//join

const doubleChar = (str) => {
  let dblStr = "";
  
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    dblStr += char + char;
  };
  return dblStr;
};