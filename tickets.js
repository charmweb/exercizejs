//* Vasya - Clerk codewars


function tickets(peopleInLine){
  const ticket = 25;
  let cash = 0;
  let change = 0;
  let bills = [];
  for(let i=0; i<peopleInLine.length; i++){
    change = peopleInLine[i] - ticket;
    if(change === 0){
      bills.push(peopleInLine[i]);
      cash += peopleInLine[i];
    } else if (cash >= change){
      let note = bills.indexOf(change);
      if(note){
        cash -= change;
        bills.slice(bills.indexOf(note),1)
      } else {
        return false;

        }
      }


      
    }
    console.log('i=', i, 'change = ', change, 'cash=', cash, 'bills=', bills);
  }
}

tickets([25, 25, 50, 50, 100]);