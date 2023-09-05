const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController.js');

router.get('/alunos');

router.get('/alunos/cadastrar', alunoController.cadastraAluno);



module.exports = router;