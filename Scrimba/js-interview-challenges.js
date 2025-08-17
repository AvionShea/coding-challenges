/* Challenge - Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/
function panic(string) {
    return string.split(" ").join(" 😱 ").concat("!").toUpperCase();
};


// Test your function
console.log(panic("I'm almost out of coffee")); //"I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
console.log(panic("winter is coming")); //"WINTER 😱 IS 😱 COMING!"
console.log(panic("Hello")); //HELLO!

/* Challenge - Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
function whisper(str) {
    if (str.endsWith("!")) {
        return "shh..." + str.slice(0, -1).toLowerCase();
    }
    return "shh..." + str.toLowerCase();
};
console.log(whisper("PLEASE STOP SHOUTING.")); //"shh...please stop shouting."
console.log(whisper("MA'AM, this is a Wendy's!")); //"shh...ma'am, this is a wendy's"

/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    };
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

/* Challenge - toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
};

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
    return str.split(" ").map((word) => capitalizeWord(word)).join(" ");
};

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

/* Challenge - Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`)
        } else if (i % 3 === 0) {
            console.log(`${i} - Vacation!`)
        } else if (i % 5 === 0) {
            console.log(`${i} - $100,000 bonus!`)
        } else {
            console.log(`${i} - :(`)
        }
    }
}

awardBonuses();

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat": "🐱",
    "dog": "🐕"
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojifyWord(word) {
    // toLowerCase()
    let lowerWord = word.toLowerCase();
    //startsWith and endsWith
    if (lowerWord.startsWith(":") && lowerWord.endsWith(":")) {
        //slice and return emojis[word]
        let emojiWord = lowerWord.slice(1, - 1);
        if (emojis[emojiWord]) {
            return emojis[emojiWord];
        } else {
            return emojiWord;
        };
    };
    return word;
};

console.log(emojifyWord(":flower:")); //flower
console.log(emojifyWord(":party:")); // 🎉
console.log(emojifyWord("elephant")); //elephant
console.log(emojifyWord(":cat:")); //🐱

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/
function emojifyPhrase(phrase) {
    return phrase.split(" ").map((word) => emojifyWord(word)).join(" ");
};

console.log(emojifyWord(":heart:")); //💜
console.log(emojifyWord(":flower:")); //flower
console.log(emojifyWord("elephant")); //elephant

console.log(emojifyPhrase("I :heart: my :cat:")); //I 💜 my 🐱
console.log(emojifyPhrase("I :heart: my :elephant:")); //I 💜 my elephant

/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    } else {
        const sorted1 = str1.split("").sort().join("");
        const sorted2 = str2.split("").sort().join("");
        return sorted1 === sorted2;
    };
};

//With helper function
function sort(word) {
    return word.split("").sort().join("");
}

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    } else {
        const sorted1 = sort(str1);
        const sorted2 = sort(str2);
        return sorted1 === sorted2;
    };
};

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));

/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ":htraE no od ot ffutS";
const messages = [
    "maerc eci yrT",
    "rewoT leffiE tisiV",
    "noom eht ot snamuh etacoleR",
    "egrahc ni stac tuP",
]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

//Method
function reverseString(title) {
    return title.split("").reverse().join("");
}

//Manual
function manuallyReverseString(str) {
    let reversedString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

function reverseStringsInArray(arr) {
    return arr.map((string) => reverseString(string));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));

function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return reversedStr === str;
};

/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

function removeDupeChars(chars) {
    let dupes = {};
    let newPassword = "";
    for (let i = 0; i < chars.length; i++) {
        let currentChar = chars[i];
        if (!dupes[currentChar]) {
            newPassword += currentChar
            dupes[currentChar] = true;
        };
    };
    return newPassword;
};

console.log(removeDupeChars(password));
