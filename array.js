const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon", "Pineapple"); //// adc coisa na array

fruits.push("pau").concat
delete fruits[1];
console.log(fruits);

console.log(fruits.pop());
console.log(fruits.shift());



const aprovados = ["Bia", "Carlos", "Ana"] 
aprovados [3] = "Paulo"
aprovados.push('Abia')    
aprovados [9] = 'Rafael'

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

aprovados.splice(6,10) ///excluir / adicionar varios elementos, começa no indice e termina no outro
console.log(aprovados)


aprovados.pop() /// tira o ultimo elemento
console.log(aprovados)

aprovados.shift() //// remove o primeiro   
console.log(aprovados)

aprovados.unshift('Abia') //// adiciona o primeiro   
console.log(aprovados)

aprovados.splice(8,6, 'Claudio', 'Jose') 
console.log(aprovados)

const algunsAprovados = aprovados.slice(1,4)    
console.log(algunsAprovados)





const filhos = ['joão', 'vinicius']
const filhas = ['ana', 'julia']

const todos = filhas.concat(filhos)

console.log(todos)