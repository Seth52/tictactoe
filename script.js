
let defaultDomState = document.body.innerHTML;
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
                winTester();
                
            }

        }
    }
})




function winTester(){
    //counter for full board -- if board not full run wincheck
    if(counter <= 11){
    
        for(i=0;i<3;i++){
    //row win
    if(gameboard[i]===gameboard[i+3] && gameboard[i]===gameboard[i+6]&& (gameboard[i]==='X' || gameboard[i]==='O')){
        console.log('up/down win');
        let z=gameboard[i];
        declareWinner(z);
    break;
}
  //across win
    else if(gameboard[i*3]===gameboard[i*3+1] && gameboard[i*3]===gameboard[i*3+2] && (gameboard[i*3]==='X' || gameboard[i*3]==='O')){
        console.log(gameboard[i*3],gameboard[i*3+1],gameboard[i*3+2])
        console.log('across win');
       let z=gameboard[i*3];
       declareWinner(z);
        break;
    }
    //diagonal win
    else if(gameboard[0]===gameboard[4]&& gameboard[0]===gameboard[8]&& (gameboard[0]==='X' || gameboard[0]==='O')){
    console.log('diag win');
        let z=gameboard[0];
        declareWinner(z);
    
    break;}
        else if(gameboard[2]===gameboard[4] && gameboard[2]==gameboard[6]&& (gameboard[2]==='X' || gameboard[2]==='O')){
            console.log('diag win 2');
           let z=gameboard[2];
           declareWinner(z);
           
            break;
        }
       else if(counter===11) {let me=document.getElementById('body');
       let drawDiv=document.createElement('div');
       const drawText = document.createTextNode('The Match Was a Draw');
       drawDiv.id="winner";
       drawDiv.appendChild(drawText);
       //me.replaceChild(drawDiv, me.childNodes[3]);
       let contained = document.getElementById('container');
    contained.style.display = 'none';
    me.insertBefore(drawDiv,contained);
       break;

    }
       
}
    }
    //draw output
   /* else if(counter===11) {let me=document.getElementById('body');
           let drawDiv=document.createElement('div');
           const drawText = document.createTextNode('The Match Was a Draw');
           drawDiv.id="winner";
           drawDiv.appendChild(drawText);
           me.replaceChild(drawDiv, me.childNodes[3]);
         }*/
        
   
}

function declareWinner(z){
    let me=document.getElementById('body');
    let winnerDiv=document.createElement('div');
    const winnerText =document.createTextNode(z +" is the winner");
    winnerDiv.id="winner";
    winnerDiv.appendChild(winnerText);
    //me.replaceChild(winnerDiv, me.childNodes[3]);
    let contained = document.getElementById('container');
    contained.style.display = 'none';
    me.insertBefore(winnerDiv,contained);
}



//reset button 
let restart = document.getElementById('restart');
restart.addEventListener('click', function(){
let resetGrid = document.getElementById('container').childNodes;
for(let i=0; i<resetGrid.length;i++){
   resetGrid[i].innerText="";
   counter =2;
   gameboard.fill("");
  
   }  
    let contained = document.getElementById('container');
    contained.style.display = 'grid';
let winnerRemove = document.getElementById('winner');
winnerRemove.remove();
}

)

   






  //factory function for players 
  
  
  // create an array gameboard where we can give an id to create the css for the gameboard? 
  //for targeting the dom array locations will be where x/o will be written
