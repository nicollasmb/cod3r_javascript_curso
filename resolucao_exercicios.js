function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}

console.log(cumprimentar("Ana"));
/////////////////////////////////////////////////////

function idadeEmDias(idade) {
  return `${idade * 365}`;
}
console.log(idadeEmDias(25));

////////////////////////////////////////////////////

function notaSalario(horas, nota) {
  return `${nota * horas}`;
}
console.log(notaSalario(150, 40.5));

////////////////////////////////////////////////////

function verifyNumber(num1, num2) {
  if (num1 > num2) {
    return `${num1} é maior que ${num2}`;
  } else if (num1 === num2) {
    return `${num1} é igual a ${num2}`;
  } else {
    return `${num1} é menor que ${num2}`;
  }
}

console.log(verifyNumber(0, 0));
console.log(verifyNumber(5, 1));
console.log(verifyNumber(1, 5));

////////////////////////////////////////////////////

function makeString(elemento, numRep) {
  const resultado = [];
  for (let i = 0; i < numRep; i++) {
    resultado.push(elemento);
  }
  return resultado;
}
console.log(makeString("pao", 3));

////////////////////////////////////////////////////

function primeiroEUltimo([]) {}

////////////////////////////////////////////////////

function potencia(a, b) {
  return Math.pow(a, b);
}

console.log(potencia(2, 3));

////////////////////////////////////////////////////

function fBhaskara(a, b, c) {
  let resultados = [];
  let delta = Math.pow(b, 2) - 4 * a * c;

  if (delta < 0) {
    return "delta é negativo";
  }

  let x1 = ((b * -1 + delta) / 2) * a;
  let x2 = ((b * -1 - delta) / 2) * a;

  resultados.push(x1);
  resultados.push(x2);

  return resultados;
}
console.log(fBhaskara(1, 3, 2));
console.log(fBhaskara(3, 1, 2));

////////////////////////////////////////////////////

function divisor3(num) {
  if (num % 3 == 0) {
    return "é divisível";
  } else return "nao é divisivel";
}
console.log(divisor3(9));
console.log(divisor3(7));

////////////////////////////////////////////////////

function fatorial(num) {
  let parcial = 1;
  for (let i = 1; i <= num; i++) {
    parcial *= i;
  }
  return parcial;
}
console.log(fatorial(3));
console.log(fatorial(6));

////////////////////////////////////////////////////

function escolherCarro(modelo) {
  switch (modelo) {
    case "hatch":
      return "Compra efetuada com sucesso";
      break;
    case "sedan":
    case "motocicleta":
    case "caminhonetes":
      return "Tem certeza que nao quer o outro modelo?";
    default:
      return "Não trabalhamos com esse tipo de veiculo";
  }
}
console.log(escolherCarro("hatch"));
console.log(escolherCarro("motocicleta"));
console.log(escolherCarro("esportivo"));

////////////////////////////////////////////////////

function calculadora(num1, operador, num2) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}
console.log(calculadora(3, "+", 4));
console.log(calculadora(3, "-", 4));
console.log(calculadora(3, "*", 4));
console.log(calculadora(4, "/", 4));

////////////////////////////////////////////////////

function despesasTotais(itens) {
  let total = 0;
  for (let item of itens) total += item.preco;
  return total;
}

console.log(
  despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
  ])
);

////////////////////////////////////////////////////

function calcularMedia(numeros) {
  let soma = 0;
  numeros.forEach(numeros => soma += numeros);
  return soma / numeros.length;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));
console.log(calcularMedia([0,10]));

////////////////////////////////////////////////////

function filtrarNumeros(numeros){
  const numerosFiltrados = numeros.filter(num => typeof num != 'string');
  console.log(numerosFiltrados)

}

filtrarNumeros(["javascript", 1, "3", "web", 20, 30])

////////////////////////////////////////////////////

function encontrarMenorNumero(numero){
  let menor = 0
  const numeroFiltrado = numero.reduce(function(anterior,atual){
    console.log(anterior,atual)
    if (anterior > atual){
      menor = atual
    }
  return menor
  })
  console.log(numeroFiltrado)
}

encontrarMenorNumero([10, 5, 35, 65])
encontrarMenorNumero([5, -15, 50, 3])

//// ou escreva da faorma mais facil

function menorNumero(numeros) {
  return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
  }
  
  console.log(menorNumero([10, 5, 35, 65]))
  console.log(menorNumero([5, -15, 50, 3]))

////////////////////////////////////////////////////

function buscarPalavrasSemelhantes(semelhanca, palavras){
  return palavras.filter(p => p.includes(semelhanca))
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])) 

////////////////////////////////////////////////////

function filtrarPorQuantidadeDeDigitos(numeros, tamanhoDesejado){
  return numeros.filter(num => {
    const tamanho = String(num).length

    return tamanho === tamanhoDesejado
  })
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)) // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]

////////////////////////////////////////////////////

const soma = array => array.reduce((acumulador,atual) => acumulador+ atual)
const media = array => soma(array) / array.length


function receberMelhorEstudante(estudantes){
  const estudantesComMedias = Object.entries(estudantes).map(estudante => {
    const nome = 0,
    nota = 1
    return { nome: estudante[nome], media: media(estudante[nota]) }
  })
  
  estudantesComMedias.sort(function (anterior, atual){
    if (anterior.media < atual.media){
      return 1
    }
    else if (anterior.media > atual.media){
      return -1
    } 
  })
  const melhorEstudante = estudantesComMedias.shift()
  console.log(melhorEstudante)
}

receberMelhorEstudante({
  Joao: [8, 7.6, 8.9, 6], // média 7.625
  Mariana: [9, 6.6, 7.9, 8], // média 7.875
  Carla: [7, 7, 8, 9] // média 7.75
  }) // retornará { nome: "Mariana", media: 7.875 }





