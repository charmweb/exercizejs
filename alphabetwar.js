function alphabetWar(string) {
  const letters = string.split("");
  const stringLength = letters.length;
  let countLeft = 0;
  let countRight = 0;
  /*
    build a case that counts the sum of lefts and rights where the left has the letters [w, p, b, s] with their power [4, 3, 2, 1]
    and rights has the letters [m, q, d, z] with their power [4, 3, 2, 1]
    use switch
  */

  for (let i = 0; i < stringLength; i++) {
    switch (letters[i]) {
      case "w":
        countLeft += 4;
        break;
      case "p":
        countLeft += 3;
        break;
      case "b":
        countLeft += 2;
        break;
      case "s":
        countLeft += 1;
        break;
      case "m":
        countRight += 4;
        break;
      case "q":
        countRight += 3;
        break;
      case "d":
        countRight += 2;
        break;
      case "z":
        countRight += 1;
        break;
      default:
        break;
    }
  }

  if (countLeft > countRight) {
    return "Left side wins!";
  } else if (countLeft < countRight) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

//* Solution with reduce

// function alphabetWar(fight) {
//   let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
//   let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
//   return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
// }

//? a is the accumulater that starts at 0
//? b is the current element in the array of fight.split('')
//? map[b] is the value of the current element
//? a + map[b] is the value of the accumulater at the end of the loop
//? result is the accumulater at the end of the loops
//? if (result < 0) { means more lefts with a negative value
//?   return "Left" + " side wins!";
//? } else if (result > 0) { means more rights with a positive value
//?   return "Right" + " side wins!";
//? } else {
//?   return "Let's fight again!"; beacuse the value of the accumulater is 0
