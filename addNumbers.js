/*
We need to sum big numbers and we require your help.
Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
The input numbers are big.
The input is a string of only digits
The numbers are positives.
remeber that we can't store very large numbers in JavaScript.
*/

// function addNumbers(a, b) {
//   //return the longest array
//   const [firstNumber, secondNumber] = [a, b].sort(
//     (a, b) => b.length - a.length
//   );

//   let sum = [];
//   let carry = 0;
//   let i = firstNumber.length - 1;
//   let j = secondNumber.length - 1;
//   while (i >= 0) {
//     let sumDigit =
//       Number(firstNumber[i]) + (Number(secondNumber[j]) || 0) + carry;
//     if (i >= 0) carry = 0;
//     if (sumDigit > 9) {
//       carry = 1;
//       sum.unshift(sumDigit.toString()[1]);
//     } else {
//       sum.unshift(sumDigit.toString());
//     }
//     i--;
//     j--;
//   }

//   if (carry) {
//     sum.unshift(carry);
//   }
//   // return sum.join("");
//   console.log(sum.join(""));
// }

// addNumbers("123456789", "987654321");

//* Silviu's solution

const addNumbers = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  [a, b] = [a.padStart(maxLength, 0), b.padStart(maxLength, 0)];
  const sum = [];
  let carry = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    let smallSum = +a[i] + +b[i] + +carry;
    [carry, smallSum] = [...(smallSum + "").padStart(2, 0)];
    sum.unshift(smallSum);
  }
  if (Number(carry)) sum.unshift(carry);
  // return sum.join("");
  console.log(sum.join(""));
};

addNumbers("123456789", "987654321");
