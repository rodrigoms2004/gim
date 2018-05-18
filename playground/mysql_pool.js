'use strict'

let db = require ('../server/db/mysql_db');

let connModel = {

    get_data: (query, callback) => {
        let resultData = [];

        db.connection.query(query)
            .on('result', (row) => {
                console.log(row);

                resultData.push(row);  
            })
            .on('fields', (fields) => {

            })
            .on('error', (err) => {
                callback({error: true, err: err});
            })
            .on('end', (err, resultData) => {
                callback(err, resultData);
            });
    },
    
    getTest: () => {
        console.log("Teste");
    }
};

module.exports = connModel;







