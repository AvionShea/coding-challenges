/*
    Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

    Examples:

    * 'abc' =>  ['ab', 'c_']
    * 'abcdef' => ['ab', 'cd', 'ef']
 */
function solution(str) {
    const letters = str.split('');
    let text = '';
    for (const letter of letters) {
        text += letter;
        if (text.replace(/ /g, '').length % 2 === 0)
            letter !== letters[letters.length - 1] && (text += ' ');
    }
    if (str.length % 2 !== 0) text += '_';
    console.log(text);
    return (text === '' && []) || text.split(' ');
}

console.log(solution(''));