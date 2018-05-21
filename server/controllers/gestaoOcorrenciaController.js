'use strict'

const _ = require('lodash');


let gestaoOcorrenciaController = {
    
    byIdNomeGrupo: (req, res) => {
        let grupo_id = req.params.id;

        // localhost:3000/api/gestaoOcorrencia/465451

        let query_str = `call gestao_ocorrencia.ocorrencia_id_grupo('${grupo_id}')`;
        req.connection.query(query_str, (err, data) => {
            // if (err) return next(err);
            if(err) {
                res.status(err.status || 500).send(err.message || `Don't force it; get a larger hammer.`);
            } else {
                res.json(data);
            }
        });
    },

    calculaTempo: (req, res) => {
        let date_range = {
            date_start : req.params.start,
            date_stop : req.params.stop
        }
        
        // localhost:3000/api/calculatempo/2017-02-20&2017-02-21

        let query_str = `SELECT gestao_ocorrencia.calcula_tempo_duracao('${date_range.date_start}', '${date_range.date_stop}') as total_horas`
        // console.log(query_str);

        // req.connection.query(`SELECT gestao_ocorrencia.calcula_tempo_duracao('2017/02/20', '2017/02/21') as total_horas`, (err, data) => {
        try {
            req.connection.query(query_str, (err, data) => {
                // if (err) return next(err);
                if(err) {
                    // res.status(err.status || 500).send(err.message || `Don't force it; get a larger hammer.`);
                    res.status(500).send(`Don't force it; get a larger hammer.`);
                } else {
                    res.json(data);
                }
            });    
        } catch (e) {
            console.log(e);
        }
        
    }

};  // end gestaoOcorrenciaController

module.exports = gestaoOcorrenciaController;

