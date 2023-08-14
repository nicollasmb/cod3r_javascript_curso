const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: true, 
    value: '10/01/2019'
})

pessoa.dataNascimento = '01/01/2022'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))