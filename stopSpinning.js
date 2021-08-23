function spinWords(word){
    //TODO Have fun :)
    let words = word.split(" ");

   words.forEach((word, index) => { 
        if(word.length >= 5) { words[index] = [...word].reverse().join("")}
    });
    return  words.join(' ');  
}

  spinWords('These challenges are very funny');