/*
Description:
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

take in an array of x:y 10 times
return the added amounts from x won
["3:1", "2:2", "0:1", ...] = won (3 points), tie (1 point), lose (0 points)

*/

//take para of an array with 10 games -> (arr) ->no empty arr or string
//first separate x and y -> .split(":")
//then convert to numbers
//compare
//only add x to find points
//return x

function points(games) {
  let total = 0;

  games.forEach((game) => {
    const [x, y] = game.split(":").map(Number);

    if (x > y) {
      total += 3;
    } else if (x < y) {
      total += 0;
    } else {
      total += 1;
    }
  });

  return total;
}

console.log(points(["3:1", "2:2", "0:1"]), 4);
console.log(points(["3:1", "1:3", "3:1"]), 6);
console.log(points(["1:3", "2:2", "1:3"]), 1);
