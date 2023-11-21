const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

function addItems(){
    document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
        charKeyBtn.addEventListener('click', function(){
            const value = charKeyBtn.dataset.value
            input.value += value
        })
    })
}

function clear(){
    document.getElementById('clear').addEventListener('click', function(){
        input.value = ''
        input.focus()
    })
}

function inputFunctions(){
    input.addEventListener('keydown', function(ev){
        ev.preventDefault()
        if(allowedKeys.includes(ev.key)){
            input.value += ev.key
            return
        }
        if(ev.key === 'Backspace'){
            input.value = input.value.slice(0, -1)
        }
        if(ev.key === 'Enter'){
            calculate()
        }
    })
}

function getResult(){
    document.getElementById('equal').addEventListener('click', calculate)
    
    function calculate(){
        resultInput.value = 'ERROR'
        resultInput.classList.add('error')
    
        const result = eval(input.value)
        resultInput.value = result
        resultInput.classList.remove('error')
    }
}

export { addItems, clear, inputFunctions, getResult }