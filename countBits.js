var countBits = function(n) {
    const binaryNumber = n.toString(2);
    let digits = 0;
    
    [...binaryNumber].forEach(curentElement => 
        {if (curentElement === '1') {digits=digits+1;} });

        return digits;
}

countBits(100);