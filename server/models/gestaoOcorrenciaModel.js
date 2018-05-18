'use strict'

let db = require ('../db/mysql_db');

let gestaoOcorrenciaModel = {

    getData: (query, callback) => {

        let resultData = [];
        let varTest = "Teste";

        db.connection.query(query)
            .on('result', (row) => {
                // console.log(row);

                callback(row);
                resultData.push(row);

                // console.log(resultData);  
            })
            .on('error', (err) => {
                callback({error: true, err: err});
            })
            .on('end', (err, resultData) => {
                // callback(err, resultData);
            });
    },
    
    getTest: () => {
        console.log("Teste");
    }
};

module.exports = gestaoOcorrenciaModel;







