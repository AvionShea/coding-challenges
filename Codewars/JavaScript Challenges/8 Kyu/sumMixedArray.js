/*
DESCRIPTION:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
 const sumMix = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    let element = Number(arr[i]);
    sum += element;
  };
  return sum;
 };
