/* 
https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

November 22, 2024

Problem 4

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example

scores = [12, 24, 10, 24]

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1

Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

- int scores[n]: points scored per game

Returns
- int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

Input Format

The first line contains an integer n, the number of games.
The second line contains n space-separated integers describing the respective values of score0, score1, ..., score(n-1).
*/

//Solution One
function breakingRecords(scores) {
  let highScore = scores[0];
  let lowScore = scores[0];
  let highCount = 0;
  let lowCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
      highCount += 1;
    } else if (scores[i] < lowScore) {
      lowScore = scores[i];
      lowCount += 1;
    }
  }

  return [highCount, lowCount];
}

//Solution Two
function breakingRecords(scores) {
  let minValue = scores[0];
  let maxValue = scores[0];

  return scores.reduce(
    (target, score) => {
      score > maxValue
        ? (target[0]++, (maxValue = score))
        : score < minValue && (target[1]++, (minValue = score));

      return target;
    },
    [0, 0]
  );
}
