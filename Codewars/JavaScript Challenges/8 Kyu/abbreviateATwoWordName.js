/*
DESCRIPTION:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/
const abbrevName = (name) => {
    let firstInitial = name[0].toUpperCase()
    let lastInitial = name[name.indexOf(" ") + 1].toUpperCase()

    initials = firstInitial + "." + lastInitial

    return initials
}