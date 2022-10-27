

const gameboard =
["","","",
 "","","",
 "","",""];
let counter = 2;

let xo = document.getElementById('container');
xo.addEventListener('click',function(e){
   let number = e.target.id;
    if(e.target.className ==='tic' &&gameboard[number]===""){
        counter +=1; 
        console.log(e);
        console.log(counter);
        let gamepiece
       if(counter % 2 === 1 ){
             gamepiece = 'X';
            console.log(gamepiece)
            
        }
       else {gamepiece ='O';
    console.log(gamepiece);}

        for(let i=0; i<9; i++){
            if(e.target.id===`${i}`){
                let f = document.getElementById(i);
                f.innerText = gamepiece;
                gameboard[i]=gamepiece;
                if(gameboard[0] && gameboard[1] && gameboard[2] === "X"){
                    console.log('x wins');
                }
            }

        }
    }
})


/*const gameboardModule =(() =>{
    
    const gameboard = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      
               
        ];
    for(let i=0; i<gameboard.length; i++){
        console.log(gameboard[i]);
    }

})();



//divs with borders only on certain spots?
//console.log(`${gameboard.join('\n')}`);

*/


/*let test = document.getElementById('body');
let y = document.createTextNode(`${gameboard.join('\n')}`);
test.append(y);*/
/*
function createPlayer(name){
    name
    

};*/



  //factory function for players 
  
  
  // create an array gameboard where we can give an id to create the css for the gameboard? 
  //for targeting the dom array locations will be where x/o will be written
