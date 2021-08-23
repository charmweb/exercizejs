function toCamelCase(str){

  let newFormat = [...str];
 while(newFormat.includes('-') || newFormat.includes('_')){
   const dash = newFormat.indexOf('-');
   const underscore = newFormat.indexOf('_');
   if(dash !== -1){
    newFormat[dash+1]=newFormat[dash+1].toUpperCase();
    newFormat.splice(dash, 1);
  }
   if(underscore !== -1){
    newFormat[underscore+1]= newFormat[underscore+1].toUpperCase();
    newFormat.splice(underscore, 1);
   }
 }
 
 console.log(newFormat.join(''));
}

toCamelCase('the-stealth_warrior');


/* SILVIU'S SOLUTIONS

function toCamelCase(str) {
  let newFormat = [...str];
  while (newFormat.includes('-') || newFormat.includes('_')) {
    let dash = newFormat.indexOf('-');
    newFormat[dash + 1] = newFormat[dash + 1].toUpperCase();
    let underscore = newFormat.indexOf('_');
    newFormat[underscore + 1] = newFormat[underscore + 1].toUpperCase();
    newFormat = newFormat.filter(
      (element, index) => ![dash, underscore].includes(index)
    );
  }

  console.log(newFormat.join(''));
}

function toCamelCase(str) {
  let newFormat = str.replace(/(_\w|-\w)/g, function (match) {
    return match.split('')[1].toUpperCase();
  });

  console.log(newFormat);
}
  

toCamelCase('the-stealth-warrior');

*/