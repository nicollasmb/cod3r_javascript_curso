
function criarPessoa(){
    return {
        nome:'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())



function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2000))
console.log(criarProduto('iPad', 13330))



function pessoa(nome){
    this.nome = nome


    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('João')
p1.falar()
