/*
https://www.codewars.com/kata/554e4a2f232cdd87d9000038

Description:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

inputs will be strings with capitals letters, never going to be empty
outputs will be a string with capital letters, same length as inputs contain the complementary values to the input string
srt up a dictionary of lookup values and loop through the input, returning the complementary value from each lookup
*/

function dnaStrand(dna) {
    const complements = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };

    return dna.split("").map((letter) => complements[letter]).join("");
};
