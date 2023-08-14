//// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
}) 
console.log('Obj é Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // pode modificar
produto.descricao = 'Borracha escolar branca' // n pode adicionar coisa
delete produto.tag /// pode deletar
console.log(produto)


//// Object.seal

const pessoa = { nome: 'Juliana', idade: 35}    
Object.seal(pessoa)
console.log('OBj é Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' ///nao cria
delete pessoa.nome // nao deleta
pessoa.idade = 29 // modifica
console.log(pessoa)