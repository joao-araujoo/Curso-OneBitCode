//É nomeado porque precisamos utilizar seu nome EXATO
export function inline(){
    console.log('Export nomeado inline')
}

//Só pode ter UM por arquivo e pode ter qualquer nome, podendo até ser uma função anônima
export default function defaultInline(){
    console.log('Export default inline')
}