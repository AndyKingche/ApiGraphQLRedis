'use strict'

const connectDB = require('../db/db')
const errores = require('./errores')
let db
module.exports = {
    getUsuarios: async()=>{
        let usuarios = []
        let multi
   
        try {
           db= await connectDB
             
           await db.hgetall('andresarray.1', (error,reply)=>{
           
            return reply
           
        } )
        //console.log(db.hgetall())
    
       
        } catch (error) {
            console.log("error el realizar el get usuarios")
            errores(error)
        }
      
    }
}