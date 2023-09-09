const Aluno = require('../models/Aluno.js');
const { arrayAlunos } = require('../repository/mockedData.js');

exports.cadastraAluno = (req, res) => {
    try {
        const novoAluno = new Aluno(req.body);
        console.log('Novo aluno criado');
        arrayAlunos.push(novoAluno);
        return res.status(201).send(arrayAlunos);
    } catch (error) {
        console.log('Erro ao criar Aluno\n', error);
        return res.status(404).send('Erro ao criar aluno');
    }
};

exports.removerAluno = (req, res) => {
    try {
        let removalIndex = arrayAlunos.findIndex(
            (item) => item.registroAluno == req.body.registroAluno
        );
        console.log(removalIndex);
        if (removalIndex > -1) {
            arrayAlunos.splice(removalIndex, 1);
            return res.status(200).send(arrayAlunos);
        }
        return res.status(404).send('Aluno não encontrado\n');
    } catch (error) {
        console.log('Erro ao deletar aluno\n', error);
        return res.status(404).send('Erro ao deletar');
    }
};

exports.updateAluno = (req, res) => {
    try {
        let updateIndex = arrayAlunos.findIndex(
            (item) => item.registroAluno == req.body.registroAluno
        );
        console.log(updateIndex);
        if (updateIndex > -1) {
            console.log(req.body);
            let atualizaAluno = new Aluno(req.body);
            arrayAlunos[updateIndex] = atualizaAluno;
            return res.status(200).send(arrayAlunos);
        }
        return res.status(404).send('Aluno não encontrado');
    } catch (error) {
        console.log('Erro ao atualizar aluno\n', error);
        return res.status(404).send('Erro ao atualizar');
    }
};

exports.findOneAluno = (req, res) => {
    try {
        console.log(req.params);
        let searchIndex = arrayAlunos.findIndex(
            (item) => item.registroAluno == req.params.registroAluno
        );
        console.log(searchIndex);
        if (searchIndex > -1) {
            return res.status(200).send(arrayAlunos[searchIndex]);
        }
        return res.status(404).send('Aluno não encontrado');
    } catch (error) {
        console.log('Erro ao deletar aluno\n', error);
        return res.status(404).send('Erro na procura');
    }
};


exports.findAllAluno = (req, res) => {
    try {
        if (arrayAlunos.length > 0) {
            return res.status(200).send(arrayAlunos);
        }
        return res.status(404).send('Alunos não encontrado');
    } catch (error) {
        console.log('Erro ao deletar aluno\n', error);
        return res.status(404).send('Erro na procura');
    }
};
