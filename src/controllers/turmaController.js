//TODO terminar os controllers de Turma e Turma
const Turma = require('../models/Turma.js');
const { arrayTurmas } = require('../repository/mockedData.js');

exports.cadastraTurma = (req, res) => {
    try {
        const novoTurma = new Turma(req.body);
        console.log('Novo Turma criado');
        arrayTurmas.push(novoTurma);
        return res.status(201).send(arrayTurmas);
    } catch (error) {
        console.log('Erro ao criar Turma\n', error);
        return res.status(404).send('Erro ao criar Turma');
    }
};

exports.removerTurma = (req, res) => {
    try {
        let removalIndex = arrayTurmas.findIndex(
            (item) => item.registroTurma == req.body.registroTurma
        );
        console.log(removalIndex);
        if (removalIndex > -1) {
            arrayTurmas.splice(removalIndex, 1);
            return res.status(200).send(arrayTurmas);
        }
        return res.status(404).send('Turma não encontrado\n');
    } catch (error) {
        console.log('Erro ao deletar Turma\n', error);
        return res.status(404).send('Erro ao deletar');
    }
};

exports.updateTurma = (req, res) => {
    try {
        let updateIndex = arrayTurmas.findIndex(
            (item) => item.registroTurma == req.body.registroTurma
        );
        console.log(updateIndex);
        if (updateIndex > -1) {
            console.log(req.body);
            let atualizaTurma = new Turma(req.body);
            arrayTurmas[updateIndex] = atualizaTurma;
            return res.status(200).send(arrayTurmas);
        }
        return res.status(404).send('Turma não encontrado');
    } catch (error) {
        console.log('Erro ao atualizar Turma\n', error);
        return res.status(404).send('Erro ao atualizar');
    }
};

exports.findOneTurma = (req, res) => {
    try {
        console.log(req.params);
        let searchIndex = arrayTurmas.findIndex(
            (item) => item.registroTurma == req.params.registroTurma
        );
        console.log(searchIndex);
        if (searchIndex > -1) {
            return res.status(200).send(arrayTurmas[searchIndex]);
        }
        return res.status(404).send('Turma não encontrado');
    } catch (error) {
        console.log('Erro ao deletar Turma\n', error);
        return res.status(404).send('Erro na procura');
    }
};


exports.findAllTurma = (req, res) => {
    try {
        if (arrayTurmas.length > 0) {
            return res.status(200).send(arrayTurmas);
        }
        return res.status(404).send('Turmas não encontrado');
    } catch (error) {
        console.log('Erro ao deletar Turma\n', error);
        return res.status(404).send('Erro na procura');
    }
};
