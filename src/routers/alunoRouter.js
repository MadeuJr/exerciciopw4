const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController.js');

router.get('/alunos', alunoController.findAllAluno);

router.post('/alunos/cadastrar', alunoController.cadastraAluno);

router.delete('/alunos/deletar', alunoController.removerAluno);

router.put('/alunos/atualizar', alunoController.updateAluno);

router.get('/alunos/:registroAluno', alunoController.findOneAluno)



module.exports = router;