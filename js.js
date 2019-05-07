let sq1 = document.getElementById('sq1');
let sq2 = document.getElementById('sq2');
let sq3 = document.getElementById('sq3');
let sq4 = document.getElementById('sq4');
let sq5 = document.getElementById('sq5');
let sq6 = document.getElementById('sq6');
let sq7 = document.getElementById('sq7');
let sq8 = document.getElementById('sq8');
let sq9 = document.getElementById('sq9');

let gameboard = [sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,s89];
let winCombos = [[sq1,sq2,sq3],[sq4,sq5,sq6],[sq7,sq8,sq9],[sq1,sq4,sq7],[sq2,sq5,sq8],[sq3,sq6,sq9],[sq1,sq5,sq9],[sq7,sq5,sq3]];

let movecount = 0; 

$(document).ready(() => {

    $('#sq1').on('hover', () => {
        $('#sq1').css('background-color', '#8A8987');      
      })

  $('.game-square').on('click', event => {
    $(event.currentTarget).innerHTML = 'X';
    $(event.currentTarget).addClass('played-x-square');        
  })

}) //jquery^^


let compPlay = () => {
    gameboard.forEach(square => {
            if (square.innerHTML === true) {
                gameboard.splice(gameboard.indexOf(square),1) 
            }
        })
    
    if(movecount === 1) {
        if(sq5.innerHTML === true) {
            //sq7
        } else if(sq5.innerHTML === false) {
            //select center square
        }

    }else if(movecount > 1) {
        
        for (i=0; i > winCombos.length; i++) {
            let xCount = 0; 
            let oCount = 0;  
            let totCount = 0; 
                winCombos[i].forEach(value => {
                    if(value === 'X') {
                    xCount += 1; 
                    totCount +=1; 
                    }else if (value ==='O') {
                    oCount += 1; 
                    totCount +=1; 
                    } else if (xCount === 2 || oCount === 2 && totCount < 3) {
                        if (value !== 'X' && value !== 'O') {
                            return value; //this is the spot that should be played. 
                        } else {
                            return uniqueCompPlay();
                            // call function that picks one a remaining square. Play the result. 
                        }
                    }
            })
        }
    }
}

let uniqueCompPlay = () => {
    return gameboard[Math.floor(Math.random() * gameboard.length)]
} 
