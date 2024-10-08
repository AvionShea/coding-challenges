/*
Description:
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

split str into an arry
check if the current char is in the object
if true, change to correct char; else, return it
join char
*/

function correct(str) {
    const correctLetter = {
        5: "S",
        0: "O",
        1: "I"
    };

    return str.split("").map((letter) => correctLetter.hasOwnProperty(letter) ? correctLetter[letter] : letter).join("");
};

console.log(correct("L0ND0N"), "LONDON");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("J. K. R0WL1NG - HARRY P0TTER AND THE G0BLET 0F F1RE"), "J. K. ROWLING - HARRY POTTER AND THE GOBLET OF FIRE");