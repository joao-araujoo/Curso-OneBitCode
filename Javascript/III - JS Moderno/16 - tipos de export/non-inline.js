// Podemos exportar vários ao mesmo tempo, deixando o código mais organizado
export { group, a, b, c, d }

// Mesma coisa do inline default, porém fica em linha separada do que queremos importar
export default exportDefault

// Podem ficar em qualquer lugar no código

function group(){
    console.log('Export nomeado não-inline (agrupado)')
}

function a (){}
function b (){}
function c (){}
function d (){}

function exportDefault(){
    console.log('Export default não-inline')
}