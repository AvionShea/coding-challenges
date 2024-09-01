/*
Description:
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

Inputs can be a string, number, or empty string
Display only the last 4 chars/digits of the input, with the rest of them replaced with # and print
Display entire input if less than 4
What if the input is exactly 4 length?
if input length less than or equal to 4, return input
need to know length of the sction to maks and need to caputre last four char/digit to pring the concat # and last 4 chars/digits, and return
*/

function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    };

    let maskSection = "#".repeat(cc.length - 4);
    let lastFour = cc.slice(-4);

    return maskSection + lastFour;
}