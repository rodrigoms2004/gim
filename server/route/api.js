'use strict'

// CRUD = Create, Read, Update, Delete
// Create = POST method
// READ   = GET method
// UPDATE = PUT method
// DELETE = DELETE method

const router = require('express').Router();

router.get('/test', (req, res) => {
    //res.status(404).send('Hello world!');
    var timestp = new Date();
    res.status(200).send({
     nome: 'Teste API',
     tempo: timestp.toJSON()
    });
  });

const gestaoOcorrenciaController = require('../controllers/gestaoOcorrenciaController');
// const palitagemIncidentesController = require('../controllers/palitagemIncidentesController');
// var {authenticate} = require('./../middleware/authenticate');

// API Restful for gestao_ocorrencia
router.get('/gestaoocorrencia/:id', gestaoOcorrenciaController.byIdNomeGrupo);
router.get('/calculatempo/:start&:stop', gestaoOcorrenciaController.calculaTempo);


// API Restful for palitagem_incidentes
// router.get('/palitagemincidentes', palitagemIncidentesController.byCodigoGrupo);


module.exports = router;