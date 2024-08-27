/*Is Anagram
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true

Example 2:

Input: s = "jar", t = "jam"

Output: false

Constraints:

s and t consist of lowercase English letters.

P - str1 (s) and str2 (t)
R - true or false
E - Input: s = "racecar", t = "carrace" (true); Input: s = "jar", t = "jam" (false)
P - compare strs; return true or false
*/

const isAnagram = (s, t) => {
    let sorted = (str) => str.split("").sort((a, b) => a.localeCompare(b)).join("");
    let isEqual = s.length === t.length;
    if (!isEqual) return false;

    return sorted(s) === sorted(t);
};