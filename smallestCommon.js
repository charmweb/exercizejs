/* 
The program takes the first element in the array
and checks if the smallest common which at first it is equal with 1 is divisible by
that element.. if not will loop through numbers less or eqaul with that element,
and checking if the smallestComon * number is divisible by the current element from the array
If it is.. than it multiplies the smallestCommon with that current (j) number;

Notice that smallestCommon will not be reset to the value of 1 when the first loop
jumps to the next element in the array.
*/



function smallestCommons(arr) {

[min, max] = arr.sort((a,b) => a-b);
const range = [];


for (let i = min; i<= max; i++)  {range.push(i); }

smallestCommon = 1;

for(let i = 0; i < range.length; i++){
  // console.log('Range[i] = ', range[i]);
  // console.log("Smallest Common %", range[i], "=", smallestCommon%range[i]);
  if(smallestCommon%range[i] !== 0){
    for(let j = 1; j <= range[i]; j++){
      if((smallestCommon*j)% range[i] === 0){
        // console.log("j =", j);
        smallestCommon *= j;
        console.log("Smallest Common = ", smallestCommon);
        break;
      }
    }
  }
}

// return smallestCommon;

}


smallestCommons([23,18]);