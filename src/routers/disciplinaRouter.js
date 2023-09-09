const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplinaController.js');

router.get('/disciplinas', disciplinaController.findAlldisciplina);

router.post('/disciplinas/cadastrar', disciplinaController.cadastradisciplina);

router.delete('/disciplinas/deletar', disciplinaController.removerdisciplina);

router.put('/disciplinas/atualizar', disciplinaController.updatedisciplina);

router.get('/disciplinas/:registroAluno', disciplinaController.findOnedisciplina)



module.exports = router;