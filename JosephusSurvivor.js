// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements

function josephus_survivor(n, k) {
  var j = 1;
  var l;
  var array = [];
  var nozeros = [];
  for (i = 0; i < n; i++) {
    array.push(i + 1);
  }

  while (array.length > 1) {
    for (l = j || l == 1; l <= array.length; l++) {
      if (l % k === 0) {
        array[l - 1] = 0;
      }
    }

    var lastZero = array.lastIndexOf(0);
    console.log("indexOfLastZero = ", lastZero);
    if (lastZero >= 0) {
      j = array.length - lastZero - 1;
    } else {
      j = 1;
    }
    console.log("j = ", j);
    //remove all the zeros
    nozeros = array.filter(function (e) {
      return e !== 0;
    });
    if (nozeros.length) {
      array = nozeros;
    }
    console.log("array = ", array);
  }
  // return array[0];
  console.log(array[0]);
}

josephus_survivor(7, 3);
