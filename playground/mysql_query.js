var mysql = require('mysql');
var connection = mysql.createConnection({
    host : '172.16.105.153',
    user : 'root', 
    password: 'cisco'
//    database : gestao_ocorrencia'
});

var query = 'SELECT * FROM gestao_ocorrencia.anexo';



function myFunction(item, index) {
    for (var key in item) {
        // console.log(item[key])
        console.log(JSON.stringify(item[key], null, 2));
    }
}



connection.connect();

connection.query(query, function(error, results, fields) {

    if (error) throw error;

    console.log(results);

    // RowDataPacket {
    //     id_anexo: 100,
    //     nome_anexo: 'MINUTOS A CANCELAR ACSP.txt',
    //     caminho_anexo: '/resources/upload/gestao_demandas/abertura_GD268904.txt' },

    // console.log(results[40].nome_anexo);
    // console.log(results[40]);

    
   console.log(JSON.stringify(results));
    // {   
    //     "id_anexo":1303,
    //     "nome_anexo":"RES Auxilio BKOZATIX TECNOLOGIA SA Suspensão temporaria 1530  GD2666912.msg",
    //     "caminho_anexo":"/resources/upload/gestao_demandas/email_cliente_GD2666912.msg"
    // }

    // var result_str = JSON.stringify(results);
    // var result_arr = result_str.split('},');
    // var result_arr_json = JSON.stringify(results).split('},');
    // console.log(result_arr_json);

    
    // results.forEach((item) => {
    //     console.log(item.nome_anexo);
    // });
    // results.forEach(myFunction);

});
connection.end();

