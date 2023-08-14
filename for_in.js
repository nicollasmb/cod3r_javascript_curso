const pessoa ={
    nome: 'ana',
    sobrenome: 'silva',
    idade: 23,
    peso: 65
}

for(let atributo in pessoa){   /// colocar o let pra ficar restrito o acesso ao escopo do for e n dar pra chamar depois
    console.log(`${atributo} = ${pessoa[atributo]}`)
}