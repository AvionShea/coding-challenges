/*
https://www.codewars.com/kata/594a50bafd3b7031c1000013

Description:
to hexYou have access to a table of monsters as follows:
monsters table schema
id
name
legs
arms
characteristics
Your task is to turn the numeric columns (arms, legs) into equivalent hexadecimal values.
output table schema
legs
arms
*/

SELECT TO_HEX (legs) AS legs, TO_HEX (arms) AS arms FROM monsters;
