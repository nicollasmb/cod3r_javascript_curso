//// chave valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

//////////

const carro ={
    modelo: 'a4',
    valor: '89000',
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }]
}

carro.proprietario.endereco.numero = 1000
delete carro.proprietario.endereco.numero 
console.log(carro)
console.log(carro.condutores.length)



////funcoes construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('CAneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//// funcoes factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30)* (30-faltas)
        },
        getNome(){
            return nome
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())
console.log(f1.getNome(), f2.getNome())

//// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//// JSON.parse

const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)