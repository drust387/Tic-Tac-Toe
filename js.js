let sq1 = document.getElementById('sq1');
let sq2 = document.getElementById('sq2');
let sq3 = document.getElementById('sq3');
let sq4 = document.getElementById('sq4');
let sq5 = document.getElementById('sq5');
let sq6 = document.getElementById('sq6');
let sq7 = document.getElementById('sq7');
let sq8 = document.getElementById('sq8');
let sq9 = document.getElementById('sq9');

let gameboard = [sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9]; // array of all game board squares. 
let winCombos = [[sq1,sq2,sq3],[sq4,sq5,sq6],[sq7,sq8,sq9],[sq1,sq4,sq7],[sq2,sq5,sq8],[sq3,sq6,sq9],[sq1,sq5,sq9],[sq7,sq5,sq3]]; //array of possible winning combinations

let movecount = 0; // count of how many moves have been played. 
 

// compPlay is the function that decides which square the computer will play. 
let compPlay = () => {      
    gameboard.forEach(square => {
            
            if (square.innerHTML === 'X' || square.innerHTML === 'O') {
                gameboard.splice(gameboard.indexOf(square),1) // reduces gameboards so only unplayed squares remain in this array. 
                
            }
        })
       // the if statement below decides where the first computer move should go based on the first user move. The computer move will either play the center square or square 7
            if(movecount === 1) {
                if(sq5.innerHTML === 'X') {
                 compMoveViewable(sq7);
                 console.log('Center was played so Im playing square 7');
                } else {
                compMoveViewable(sq5);
                console.log('Center wasnt played, so Im taking the obvious choice');
                }
     // if the first two moves have already been played we move into the second portion of the game. 
      // the computer move should be decided by iterating through wincombos and playing any empty square that is in 
         // the middle of a possible win combo that is almost filled by either X or O. 
            }else {
                for (i=0; i < winCombos.length; i++) {
                 console.log('i =' + i);
                 let xCount = 0; 
                 let oCount = 0;  
                 let totCount = 0; 
                    winCombos[i].forEach(value => {
                        console.log(value);
                        if(value.innerHTML === 'X') {
                             xCount +=1; 
                             totCount += 1;     
                    
                         } else if (value.innerHTML ==='O') {
                             oCount += 1; 
                             totCount +=1;
                    
                         } else if (value.innerHTML === '' && xCount === 2 && totCount < 3) {
                            console.log('Im playing defense');
                            compMoveViewable(value); 
                            i += 10;
                            console.log('new i =' + i);
                              
                         } else if (value.innerHTML === '' && oCount === 2 && totCount < 3) {
                            console.log('Im trying to win the game');
                            compMoveViewable(value);
                            i += 10;
                            console.log('new i =' + i);
                            
                         } else {
                             let nextMoveTwo = uniqueCompPlay();
                             console.log('Nothing here seems obvious, so im taking random spot');
                            compMoveViewable(nextMoveTwo);
                            i += 10;
                            
                            console.log('new i =' + i);
                            
                                    
                    }
                })
            }
        }
    
}

let uniqueCompPlay = () => {
    let randomSquare = gameboard[Math.floor(Math.random() * gameboard.length)];
     if (randomSquare.innerHTML === '') {
         return randomSquare
     } else {
         uniqueCompPlay();
     }
} 

let compMoveViewable = (square) => {
    square.innerHTML = 'O';
    square.style.backgroundColor = "#69Be28";
    square.style.color = "white";
    square.style.textAlign = "center";
    square.style.fontSize = "4.5em";
    movecount += 1;
    console.log(movecount);
}
//jquery

$(document).ready(() => {
 
    
      $('.game-square').on('mouseenter', event => {
        $(event.currentTarget).append('Pick Me!');
        $(event.currentTarget).css('background-color', '#3D4849')
        $(event.currentTarget).animate({
          fontSize: '1.9em'
        }, 100)
      })
      
      $('.game-square').on('mouseleave', event => {
        $(event.currentTarget).css("background-color", "silver");
        $(event.currentTarget).html("")
       
        })

      $('.play-square').on('click', event => {
        $(event.currentTarget).unbind("mouseenter mouseleave");
        $(event.currentTarget).html("").append('X'); 
        $(event.currentTarget).removeClass('game-square');
        $(event.currentTarget).addClass('played-x-square').css({"background-color": "#20639B", "text-align": "center", "font-size": '4em'});
        movecount += 1; 
        console.log('movecount =' + movecount); 
        compPlay();    
        });
    

}) //jquery^^
