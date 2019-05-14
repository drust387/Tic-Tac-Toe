let sq1 = document.getElementById('sq1');
let sq2 = document.getElementById('sq2');
let sq3 = document.getElementById('sq3');
let sq4 = document.getElementById('sq4');
let sq5 = document.getElementById('sq5');
let sq6 = document.getElementById('sq6');
let sq7 = document.getElementById('sq7');
let sq8 = document.getElementById('sq8');
let sq9 = document.getElementById('sq9');

let gameboard = [sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9];
let winCombos = [[sq1,sq2,sq3],[sq4,sq5,sq6],[sq7,sq8,sq9],[sq1,sq4,sq7],[sq2,sq5,sq8],[sq3,sq6,sq9],[sq1,sq5,sq9],[sq7,sq5,sq3]];

let movecount = 0; 


let compPlay = () => {
    console.log('started');
    gameboard.forEach(square => {
            if (square.innerHTML === true) {
                gameboard.splice(gameboard.indexOf(square),1) 
            }
        })
    
    if(movecount === 1) {
        if(sq5.innerHTML === 'X') {
            compMoveViewable(sq7);
        } else if(sq5.innerHTML === '') {
            compMoveViewable(sq5);
        }

    }else if(movecount > 1) {
        console.log("I'm in here working");
        for (i=0; i < winCombos.length; i++) {
            console.log("I'm in the loop!")
            let xCount = 0; 
            let oCount = 0;  
            let totCount = 0; 
                winCombos[i].forEach(value => {
                    console.log(value);
                    if(value.innerHTML === 'X') {
                    xCount += 1; 
                    totCount +=1; 
                    console.log(oCount);
                    }else if (value.innerHTML ==='O') {
                    oCount += 1; 
                    totCount +=1; 
                    console.log(xCount);
                    } else if (xCount === 2 || oCount === 2 && totCount < 3) {
                        if (value.innerHTML !== 'X' && value.innerHTML !== 'O') {
                            compMoveViewable(value);        
                        } else {
                            let nextMoveTwo = uniqueCompPlay();
                            compMoveViewable(nextMoveTwo);
                        }
                    }
            })
        }
    }
}

let uniqueCompPlay = () => {
    return gameboard[Math.floor(Math.random() * gameboard.length)]
} 

let compMoveViewable = (square) => {
    square.innerHTML = 'O';
    square.style.backgroundColor = "#69Be28";
    square.style.color = "white";
    square.style.textAlign = "center";
    square.style.fontSize = "4.5em";
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
        console.log(movecount); 
        compPlay();    
        });
    

}) //jquery^^

