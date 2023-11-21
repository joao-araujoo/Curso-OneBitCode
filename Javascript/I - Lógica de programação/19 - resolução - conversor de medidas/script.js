const metros = parseFloat(prompt('Digite uma medida em metros (m):'))
const unidadeDeMedida = prompt('Para qual unidade deseja realizar a conversão?\n\n1- Milímetro (mm) \n2- Centímetro (cm) \n3- Decímetro (dm) \n4- Decâmetro (dam) \n5- Hectômetro (hm) \n6- Quilômetro (km)\n')

switch (unidadeDeMedida){
    case '1':
        alert('Resultado: ' + metros + 'm = ' + metros * 1000 + 'mm')
        break
    case '2':
        alert('Resultado: ' + metros + 'm = ' + metros * 100 + 'cm')
        break
    case '3':
        alert('Resultado: ' + metros + 'm = ' + metros * 10 + 'dm')
        break
    case '4':
        alert('Resultado: ' + metros + 'm = ' + metros / 10 + 'dam')
        break
    case '5':
        alert('Resultado: ' + metros + 'm = ' + metros / 100 + 'hm')
        break
    case '6':
        alert('Resultado: ' + metros + 'm = ' + metros / 1000 + 'km')
        break
    default: 
        alert('Opção inválida!')
}