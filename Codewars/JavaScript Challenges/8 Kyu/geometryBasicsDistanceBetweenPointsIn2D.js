/*
https://www.codewars.com/kata/58dced7b702b805b200000be

Description:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range 
−
50
⩽
x
,
y
⩽
50
−50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.
*/

function distanceBetweenPoints(a, b) {
  const x = a.x - b.x;
  const y = a.y - b.y;

  return Math.sqrt(x ** 2 + y ** 2);
};