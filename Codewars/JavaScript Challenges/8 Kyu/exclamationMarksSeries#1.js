/*
Description:
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

take in str
determine if the end (str.length - 1) is equal to "!"
if true, split str, slice starting at the index 0
return str with applicable exclamation mark removed
*/

// original solution
function remove(str) {
    if (str[str.length - 1] == "!") {
        return str.split("").slice(0, str.split("").length - 1).join("");
    } else {
        return str
    };
};

console.log(remove("Hi"), "Hi")
console.log(remove("Hi! Hi!"), "Hi! Hi")
console.log(remove("!Hi!"), "!Hi")
console.log(remove("Hi!"), "Hi")