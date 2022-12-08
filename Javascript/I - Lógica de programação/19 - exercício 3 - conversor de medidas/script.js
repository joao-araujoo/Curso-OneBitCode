const metros = parseFloat(prompt('Digite uma medida em metros (m):'))
const unidadeDeMedida = prompt('Para qual unidade deseja realizar a conversão?\n\n- Milímetro (mm) \n- Centímetro (cm) \n- Decímetro (dm) \n- Decâmetro (dam) \n- Hectômetro (hm) \n-Quilômetro (km)\n')
let resultado = undefined

switch (unidadeDeMedida){
    case 'mm':
        resultado = metros * 1000
        break
    case 'cm':
        resultado = metros * 100
        break
    case 'dm':
        resultado = metros * 10
        break
    case 'dam':
        resultado = metros / 10
        break
    case 'hm':
        resultado = metros / 100
        break
    case 'km':
        resultado = metros / 1000
        break
    default: 
        alert('Unidade de medida inválida!')
}

resultado !== undefined ? alert(`${metros}m = ${resultado}${unidadeDeMedida}`) : alert('Insira uma unidade de medida válida')