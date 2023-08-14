function imprimirSoma(a,b){
    console.log (a + b)
}
imprimirSoma(2, 3)


//function soma(a, b=0){
//     return a + b
// }
// console.log(soma(2, 3))


///armazenar função em variavel 
const printSoma = function(a, b){
    console.log(a+b)
}
printSoma(2,3)

///armazenando função arrow em variavel

const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

/// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const printTexto = a => console.log(a)
printTexto("legal")


///armazenar como tributo de um objeto
const obj = {}
obj.falar = function() {return 'opa'}
console.log(obj.falar())

/// usar função como parametro de outra funcão
function run (fun){
    fun()
}
run(function() { console.log('executando...')})