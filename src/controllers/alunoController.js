const Aluno = require('../models/Aluno.js');
const { arrayAlunos } = require('../repository/mockedData.js');

exports.cadastraAluno = (req, res) => {
    try {
        console.log(req.body)
        const novoAluno = new Aluno(req.body);
        console.log('Novo aluno criado');
        arrayAlunos.push(novoAluno);
        console.log(arrayAlunos)
        return res.status(201).send(arrayAlunos);
    } catch (error) {
        console.log('Erro ao criar Aluno\n', error);
        return res.status(400).send("erro");
    }
};
