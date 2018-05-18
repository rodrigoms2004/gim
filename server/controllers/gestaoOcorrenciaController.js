'use strict'

let gestOcorrenciaModel = require('./../models/gestaoOcorrenciaModel');
const _ = require('lodash');

// connModel.get_data(query_str);

let gestaoOcorrenciaController = {

    byIdNomeGrupo: (req, res) => {
        req.connection.query('SELECT * FROM gestao_ocorrencia.anexo limit 10', (err, data) => {

            if (err) return next(err);
            res.json(data);
        });
    },

    calculaTempo: async(req, res) => {

    }

};  // end gestaoOcorrenciaController

module.exports = gestaoOcorrenciaController;



// try {

//     pool_gest.getData(query_str, () => {});  
//     let query_str = "SELECT * FROM gestao_ocorrencia.anexo limit 10";
//     gestOcorrenciaModel.getData(query_str, (data) => {
        
//     });            
//     res.send({gestOcorr})
// } catch(e) {
//     res.status(400).send(e);
// }
