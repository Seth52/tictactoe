const gameboard = [
['x','x','x'],
['x','x','x'],
['x','x','x']


];
//divs with borders only on certain spots?
console.log(`${gameboard.join('\n')}`);


let test = document.getElementById('body');
let y = document.createTextNode(`${gameboard.join('\n')}\n\n`);
test.append(y);

/*const players =[
    [player1]
    [player2]
]*/ 

const board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];
  
  console.log(`${board.join('\n')}\n\n`);