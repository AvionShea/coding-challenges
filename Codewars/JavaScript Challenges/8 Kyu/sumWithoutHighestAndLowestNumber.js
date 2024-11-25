/*
https://www.codewars.com/kata/576b93db1129fcf2200001e6

Description:
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

function sumArray(arr){
  if(arr == null || arr.length <= 1){
    return 0;
  }else{
    arr.sort((a,b) => a - b);
    arr.shift();
    arr.pop();
    let sum = arr.reduce((a,b) => a + b, 0);

    return sum;
  };
};

//refactor
function sumArray(arr){
  if(arr == null || arr.length <= 1){
    return 0;
  }else{
    return arr.sort((a,b) => a - b).slice(1, -1).reduce((a,b) => a + b, 0);
  };
};
