/*
https://www.codewars.com/kata/5625618b1fe21ab49f00001f

Description:
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock
*/
function sayHello(name) {
    return `Hello, ${name}`;
};

//refactor
const sayHello = name => `Hello, ${name}`;