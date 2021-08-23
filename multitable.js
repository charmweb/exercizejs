/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.
You can use \n in string to jump to the next line.
Newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
 */

function multiTable(number) {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    if (i < 10) {
      result += i + " * " + number + " = " + number * i + "\n";
    } else {
      result += i + " * " + number + " = " + number * i;
    }
  }
  return result;
}

multiTable(5);
