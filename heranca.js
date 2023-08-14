/// sem prototype
const novoObjeto = Object.create(null)
novoObjeto.novaPropriedade = 5

console.log(novoObjeto)








function SalaAula(alunos){
    this.alunos = alunos
}

SalaAula.prototype = {
    adicionarAluno: function(aluno){
        this.alunos.push(aluno)
    }
}

const minhasala = new SalaAula(['João', 'Maria'])
minhasala.adicionarAluno('Pedro')

console.log(minhasala)