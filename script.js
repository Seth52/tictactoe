

const gameboardModule =(() =>{
    
    const gameboard = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      
               
        ];
    for(let i=0; i<gameboard.length; i++){
        console.log(gameboard[i]);
    }

})();

let xo = document.getElementById('container');
xo.addEventListener('click',function(e){
    if(e==='')
})


//divs with borders only on certain spots?
//console.log(`${gameboard.join('\n')}`);



/*let test = document.getElementById('body');
let y = document.createTextNode(`${gameboard.join('\n')}`);
test.append(y);*/

function createPlayer(name){
    name
    

};



  //factory function for players 
  
  
  // create an array gameboard where we can give an id to create the css for the gameboard? 
  //for targeting the dom array locations will be where x/o will be written
