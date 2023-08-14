
////////////////////////           FOR EACH     ////////////////////////////////

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

////Criando novo forEach

Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }

}

const aprovados2 = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados2.forEach2(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})


////////////////////////            MAP     //////////////////////////////////
///map serve pra mapear/transormar um array em outro de EXATAMENTE O MESMO TAMANHO
// FOR com proposito

const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

/////////////////////////////////////////

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit Lapis", "preco": 42.11}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const toObject = json => JSON.parse(json)
const apenasPreco = claudio => claudio.preco

let returnResultado = carrinho.map(toObject).map(apenasPreco)

console.log(returnResultado)


////////////////////////          FILTER     /////////////////////////////////

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'JBL', preco: 2499, fragil: false },
    { nome: 'Fone', preco: 299, fragil: false },
    { nome: 'IPad', preco: 5299, fragil: true }
]

const filterPreco = p => p.preco > 299
const filterFragil = p => p.fragil === true


console.log(produtos.filter(filterPreco).filter(filterFragil))

// console.log(produtos.filter(function(p){
//     return p.preco > 299                      ///aq vem o filtro
// }))


////////////////////////         REDUCE     /////////////////////////////////

const alunos = [
    { nome: "João", nota: 7.3, bolsista: false},
    { nome: "Maria", nota: 9.2, bolsista: true},
    { nome: "Pedro", nota: 9.8, bolsista: false},
    { nome: "Ana", nota: 8.7, bolsista: true},
] 

const resultado3 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})



// const alunos = [
//     { nome: "João", nota: 7.3, bolsista: false},
//     { nome: "Maria", nota: 9.2, bolsista: true},
//     { nome: "Pedro", nota: 9.8, bolsista: false},
//     { nome: "Ana", nota: 8.7, bolsista: true},
// ] 

const verificarEstadoBolsa = a => a.bolsista === true
const verificarBolsa = (resultado, bolsista) => resultado || bolsista


console.log(alunos.map(verificarEstadoBolsa).reduce(verificarBolsa))