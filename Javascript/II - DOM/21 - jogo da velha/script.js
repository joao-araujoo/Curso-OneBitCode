let playerTurn = 'x'

function win(n){
    let winner = document.querySelector('.player-' + n)
    winner.style.color = 'purple'
    document.querySelector('.score-player-' + n).innerText += 'I'
}

document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('click', function(){

        if(playerTurn === 'x'){
            box.innerText = 'X'
            playerTurn = 'o'
        } else {
            box.innerText = 'O'
            playerTurn = 'x'
        }

        const box1 = document.getElementById('box-1').innerText
        const box2 = document.getElementById('box-2').innerText
        const box3 = document.getElementById('box-3').innerText
        const box4 = document.getElementById('box-4').innerText
        const box5 = document.getElementById('box-5').innerText
        const box6 = document.getElementById('box-6').innerText
        const box7 = document.getElementById('box-7').innerText
        const box8 = document.getElementById('box-8').innerText
        const box9 = document.getElementById('box-9').innerText

        //Horizontal
        if(box1 === 'X' & box2 === 'X' & box3 === 'X'){
            win(1)
        }
        if(box4 === 'X' & box5 === 'X' & box6 === 'X'){
            win(1)
        }
        if(box7 === 'X' & box8 === 'X' & box9 === 'X'){
            win(1)
        }
        
        //Vertical
        if(box1 === 'X' & box4 === 'X' & box7 === 'X'){
            win(1)
        }
        if(box2 === 'X' & box5 === 'X' & box8 === 'X'){
            win(1)
        }
        if(box3 === 'X' & box6 === 'X' & box9 === 'X'){
            win(1)
        }
        
        //Diagonal
        if(box1 === 'X' & box5 === 'X' & box9 === 'X'){
            win(1)
        }
        if(box3 === 'X' & box5 === 'X' & box7 === 'X'){
            win(1)
        }

        //Horizontal
        if(box1 === 'O' & box2 === 'O' & box3 === 'O'){
            win(2)
        }
        if(box4 === 'O' & box5 === 'O' & box6 === 'O'){
            win(2)
        }
        if(box7 === 'O' & box8 === 'O' & box9 === 'O'){
            win(2)
        }
        
        //Vertical
        if(box1 === 'O' & box4 === 'O' & box7 === 'O'){
            win(2)
        }
        if(box2 === 'O' & box5 === 'O' & box8 === 'O'){
            win(2)
        }
        if(box3 === 'O' & box6 === 'O' & box9 === 'O'){
            win(2)
        }
        
        //Diagonal
        if(box1 === 'O' & box5 === 'O' & box9 === 'O'){
            win(2)
        }
        if(box3 === 'O' & box5 === 'O' & box7 === 'O'){
            win(2)
        }
        
    })
}
)