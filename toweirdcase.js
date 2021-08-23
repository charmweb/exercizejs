function toWeirdCase(string){
  let words = string.split(" ");
  let newString = "";
  var regex = /^[A-Za-z]+$/;    
  for(let i = 0; i < words.length; i++){
    let word = words[i].split('').filter(letter => letter.match(regex)); 

    for(let j = 0; j < word.length; j++){ 
      if(j % 2 == 0){
        word[j] = word[j].toUpperCase();
      } else {
        word[j] = word[j].toLowerCase();
      }
    }
    if(i < words.length - 1){
    newString += word.join('') + " ";
    } else {
      newString += word.join('');
    }
  }
  return newString;
}

// Well done! We've done it!