'use strict'

let env = process.env.NODE_ENV || 'development';
// console.log('env ****', env);


if (env === 'development' || env === 'test') {
    let config = require('./config.json');
    let envConfig = config[env];  // could be "development" or "test"
    
    Object.keys(envConfig).forEach((key) => { // [ 'PORT', 'MONGODB_URI' ]
    // console.log(`${key} : ${envConfig[key]}`);
      process.env[key] = envConfig[key];
    });
  }
  

