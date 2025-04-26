/*
04/25/2025
You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.
*/

function scoreOfString(str) {
    let score = 0;
    for (let i = 0; i < str.length - 1; i++) {
        score += Math.abs(str.charCodeAt(i) - str.charCodeAt(i + 1));
    }

    return score;
};