
// DESTRUCTING A PARTIR DE UM OBJETO

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000,
    }
}

// operador destructing 
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)



// DESTRUCTING A PARTIR DE UMA FUNÇÃO COM OBJETO
function rand({min = 0, max = 1000}){
    const valor= Math.random() * (max-min) + min
    return Math.floor(valor)
}       

const obj = { max: 50, min: 40}
console.log(rand(obj))


// DESTRUCTING A PARTIR DE uma funçao e UMA ARRAY

function randon( [min = 0, max = 1000]){
    if (min>max) [min, max] = [max, min]   
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(randon([50, 40]))
console.log(randon([992]))