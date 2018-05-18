'use strict'

// https://www.npmjs.com/package/mysql#performing-queries
// https://stackoverflow.com/questions/18496540/node-js-mysql-connection-pooling?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
// http://cangaceirojavascript.com.br/lidando-com-conexoes-banco-plataforma-node/
// https://www.tutorialkart.com/nodejs/nodejs-mysql-result-object/


let pool_model = require('./mysql_pool');
let query_str = "SELECT * FROM gestao_ocorrencia.anexo limit 10";

// pool_model.get_data(query_str, () => {});

let pool_gest = require('../server/models/gestaoOcorrenciaModel');

// pool_gest.getData(query_str, (data) => {
//     let jsonData = JSON.parse(JSON.stringify(data));
//     console.log(jsonData);
// });  

let resultData = [];
pool_gest.getData(query_str, function(data) {
    resultData.push(data);
    // console.log(data);    
});

console.log(resultData);

