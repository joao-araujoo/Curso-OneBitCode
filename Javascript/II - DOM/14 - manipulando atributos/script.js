const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    input.value = input.value === '' ? 'Olá, Mundo!' : ''
    //Pega o valor predefinido do atributo no HTML
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'checkbox' ? 'checkbox' : 'text'
    //Atribui o tipo do input
    // input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.somethingElse
    alert(data)
    alert(input.dataset.somethingElse = 'novo valor')
})