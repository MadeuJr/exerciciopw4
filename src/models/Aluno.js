const { arrayAlunos } = require("../repository/mockedData.js");

class Aluno {
    constructor(body) {
        this.registroAluno = body.registroAluno  //confirmaRegistro(this.registroAluno);
        this.nome = body.nome;
        this.dataNascimento = body.dataNascimento;
        this.turma = body.turma;
        this.sexo = body.sexo;
    }

    // confirmaRegistro(registroInserido, arrayAlunos){
    //     let verifica = arrayAluno.find((item) => item.registoAluno === registroInserido);
    //     if(verifica){
    //         console.log('Já existe um aluno com o mesmo número de matrícula');
    //         return false;
    //     }
    //     else{
    //         this.registoAluno = registroInserido
    //         return registroInserido;
    //     }
    // }
}


module.exports = Aluno;