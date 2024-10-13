/*
Description:
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/

function getNumberFromString(s) {
    var result = "";

    for (var i = 0; i < s.length; i++) {

        if (parseInt(s[i])) {
            result = result + s[i];
        } else if (s[i] == "0") {
            result = result + s[i];
        }
    }

    return parseInt(result);
};