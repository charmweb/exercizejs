/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

*/

function score(dice) {
  let score = 0;
  let count_one = 0;
  let count_two = 0;
  let count_three = 0;
  let count_four = 0;
  let count_five = 0;
  let count_six = 0;
  let count_one_and_five = 0;
  for (let i = 0; i < dice.length; i++) {
    switch (dice[i]) {
      case 1:
        count_one++;
        break;
      case 2:
        count_two++;
        break;
      case 3:
        count_three++;
        break;
      case 4:
        count_four++;
        break;
      case 5:
        count_five++;
        break;
      case 6:
        count_six++;
        break;
    }
  }

  if (count_one >= 3) {
    score += 1000;
    if (count_one > 3) {
      score += (count_one - 3) * 100;
    }
  } else {
    score += count_one * 100;
  }

  if (count_six >= 3) {
    score += 600;
  }
  if (count_five >= 3) {
    score += 500;
    if (count_five > 3) {
      score += (count_five - 3) * 50;
    }
  } else {
    score += count_five * 50;
  }

  if (count_four >= 3) {
    score += 400;
  }
  if (count_three >= 3) {
    score += 300;
  }
  if (count_two >= 3) {
    score += 200;
  }
  // return score;
  console.log(score);
}

score([1, 1, 1, 1, 1]);
