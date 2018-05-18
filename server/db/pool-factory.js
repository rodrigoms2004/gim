const mysql = require('mysql');

const pool = mysql.createPool({
    host : '172.16.105.153',
    user : 'root', 
    password: 'cisco',
    port: 3306,
    connectionLimit: 200,
    connectTimeout: 2000,
    queueLimit: 0,
    debug: false,
    waitForConnection: true,
    compression: true
});


console.log('pool => criado');

pool.on('release', () => console.log('pool => conexão retornada'));

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
); 

module.exports = pool;

// exemplo!
// const pool = require('./pool-factory');