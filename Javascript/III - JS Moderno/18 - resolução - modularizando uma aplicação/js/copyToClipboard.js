export default function(ev){
    const button = event.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!'
        button.classList.add('success')
        navigator.clipboard.writeText(document.querySelector('#result').value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
}