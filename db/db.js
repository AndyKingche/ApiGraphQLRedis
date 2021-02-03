'use strict'
const redis = require('redis')
const client = redis.createClient(`6379`,`192.168.71.1`);


module.exports= client.on('connect', ()=>{
    console.log("conectado")
    })
    