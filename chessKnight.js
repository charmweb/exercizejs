function chessKnight(cell) {
    
    const letter = cell[0];
    const number = Number(cell[1]);
    
    const multiplier = [1, 2, 3, 4, 4, 3, 2, 1];
    const indexLetter = [...'abcdefgh'];
    const letterMultiplier = multiplier[indexLetter.indexOf(letter)]; 
    const numberMultiplier = multiplier[number - 1];
    
    // slower realy?
    // const indexLetter = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
    // const letterMultiplier = multiplier[indexLetter[letter]];

    let positions = 0;
    let optimization = letterMultiplier * numberMultiplier;

    optimization >= 9 ? positions = 8 :
    optimization > 4 ? positions = 6 :
    optimization >= 3 ? positions = 4 :
    positions = optimization + 1;

    return positions;
  }

