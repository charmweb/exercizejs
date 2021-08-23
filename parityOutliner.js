function findOutlier(integers){
  //your code here
 let majority = integers.filter(e => e%2 === 0);
 if(majority.length===1) {
  //  return majority[0];
  console.log(majority[0]);

 } else {
  //  majority = integers.filter(e => e%2 !== 0);
  //  return majority[0];
  //  console.log(majority[0]);
  console.log(integers.find(e => e%2 !== 0));

 }
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])

//! Apparently two filters is bad performance

//? SILVIU'S SOLUTION
function findOutlier(integers) {
  const [first, second] = integers;
  const checkers = {
    outlierIsEven: !!(Math.abs(first % 2) === 1 && Math.abs(second % 2) === 1),
    outlierIsOdd: !!(first % 2 === 0 && second % 2 == 0),
  };
  if (checkers.outlierIsEven) {
    for (let i = 2; i <= integers.length; i++) {
      if (integers[i] % 2 === 0) return integers[i];
    }
  } else if (checkers.outlierIsOdd) {
    for (let i = 2; i <= integers.length; i++) {
      if (Math.abs(integers[i] % 2) === 1) return integers[i];
    }
  } else {
    return [first, second].find(element => Math.abs(element%2)!==Math.abs(integers[2]%2))
  }
}