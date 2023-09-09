const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController.js');

router.get('/turmas', turmaController.findAllTurma);

router.post('/turmas/cadastrar', turmaController.cadastraTurma);

router.delete('/turmas/deletar', turmaController.removerTurma);

router.put('/turmas/atualizar', turmaController.updateTurma);

router.get('/turmas/:registroAluno', turmaController.findOneTurma)



module.exports = router;