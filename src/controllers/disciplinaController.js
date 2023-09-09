//TODO terminar os controllers de Disciplina e Turma
const Disciplina = require('../models/Disciplina.js');
const { arrayDisciplinas } = require('../repository/mockedData.js');

exports.cadastraDisciplina = (req, res) => {
    try {
        const novoDisciplina = new Disciplina(req.body);
        console.log('Novo Disciplina criado');
        arrayDisciplinas.push(novoDisciplina);
        return res.status(201).send(arrayDisciplinas);
    } catch (error) {
        console.log('Erro ao criar Disciplina\n', error);
        return res.status(404).send('Erro ao criar Disciplina');
    }
};

exports.removerDisciplina = (req, res) => {
    try {
        let removalIndex = arrayDisciplinas.findIndex(
            (item) => item.registroDisciplina == req.body.registroDisciplina
        );
        console.log(removalIndex);
        if (removalIndex > -1) {
            arrayDisciplinas.splice(removalIndex, 1);
            return res.status(200).send(arrayDisciplinas);
        }
        return res.status(404).send('Disciplina não encontrado\n');
    } catch (error) {
        console.log('Erro ao deletar Disciplina\n', error);
        return res.status(404).send('Erro ao deletar');
    }
};

exports.updateDisciplina = (req, res) => {
    try {
        let updateIndex = arrayDisciplinas.findIndex(
            (item) => item.registroDisciplina == req.body.registroDisciplina
        );
        console.log(updateIndex);
        if (updateIndex > -1) {
            console.log(req.body);
            let atualizaDisciplina = new Disciplina(req.body);
            arrayDisciplinas[updateIndex] = atualizaDisciplina;
            return res.status(200).send(arrayDisciplinas);
        }
        return res.status(404).send('Disciplina não encontrado');
    } catch (error) {
        console.log('Erro ao atualizar Disciplina\n', error);
        return res.status(404).send('Erro ao atualizar');
    }
};

exports.findOneDisciplina = (req, res) => {
    try {
        console.log(req.params);
        let searchIndex = arrayDisciplinas.findIndex(
            (item) => item.registroDisciplina == req.params.registroDisciplina
        );
        console.log(searchIndex);
        if (searchIndex > -1) {
            return res.status(200).send(arrayDisciplinas[searchIndex]);
        }
        return res.status(404).send('Disciplina não encontrado');
    } catch (error) {
        console.log('Erro ao deletar Disciplina\n', error);
        return res.status(404).send('Erro na procura');
    }
};


exports.findAllDisciplina = (req, res) => {
    try {
        if (arrayDisciplinas.length > 0) {
            return res.status(200).send(arrayDisciplinas);
        }
        return res.status(404).send('Disciplinas não encontrado');
    } catch (error) {
        console.log('Erro ao deletar Disciplina\n', error);
        return res.status(404).send('Erro na procura');
    }
};
