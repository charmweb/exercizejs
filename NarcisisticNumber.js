function narcissistic(value) {
  // Code me to return true or false
  const arrDigits = value.toString().split('');
  const exponent = arrDigits.length;

  let narcisNumber = 0;
  for (let i = 0; i < arrDigits.length; i++){
    narcisNumber += Math.pow(Number(arrDigits[i]), exponent);
  }
  narcisNumber === value ? true : false;
  console.log(narcisNumber);
}
 //! A narcissistic number ia number where the sum of each digit to the power equal
 //! with the number of it's digits, i.e. 153 = 1^3+5^3+3^3


//? ANOTHER SOLUTION

function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}

/*
 * EVALUEAZA REZULTATUL COMPARATIEI return == value;
 * unde return prima data transforma value to string prin sintaxa '' + value
 * apoi il transforma in array cu split('')
 * apoi foloseste reduce pentru a face suma fiecarui element la exponentul care
 * este egal cu lungimea sirului 

*/ 