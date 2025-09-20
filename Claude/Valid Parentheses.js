/*
Problem 2: Valid Parentheses (Easy)
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets
Open brackets must be closed in the correct order
Every close bracket has a corresponding open bracket of the same type

Example:
Input: s = "()"
Output: true
Input: s = "()[]{}"
Output: true
Input: s = "(]"
Output: false
*/

function isValidParentheses(str) {
    let bracketPairs = [];
    let bracket = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    if (!str) {
        return false
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
                bracketPairs.push(str[i]);
            } else {
                const pairs = bracketPairs.pop()
                if (bracket[pairs] !== str[i]) {
                    return false;
                }
            }
        }
    }
    return bracketPairs.length === 0;
}

console.log(isValidParentheses("()"), true);
console.log(isValidParentheses("()[]{}"), true);
console.log(isValidParentheses("(]"), false);