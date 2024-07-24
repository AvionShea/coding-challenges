/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

const problem = (value) => {
  if (typeof value === "string" || value instanceof String){
    return "Error";
  }else{
    return (value * 50) + 6;
  };
};