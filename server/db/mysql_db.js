'use strict'

// DO NOT USE ARROW FUNCTION HERE!

// let config = require('config/config');

let mysql = require('mysql');

let pool = {};

let poolSettings = ({
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


pool = mysql.createPool(poolSettings);

exports.connection = {
    query: function() {
        let queryArgs = Array.prototype.slice.call(arguments),
            events = [],
            eventNameIndex = {};

        pool.getConnection(function (err, conn) {
            if(err) throw err;

            if (conn) {
                let q = conn.query.apply(conn, queryArgs);
                q.on('end', function() {
                    conn.release();
                });
                
                events.forEach(function(args) {
                    q.on.apply(q,args);
                });
            }   // end if
        });

        return {
            on: function(eventName, callback) {
                events.push(Array.prototype.slice.call(arguments));
                eventNameIndex[eventName] = callback;
                return this;
            }
        };
    } // query

};  // exports.connection

