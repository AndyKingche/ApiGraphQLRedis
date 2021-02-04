'use strict'

const redisConnection = require('../db/db')
const redis = new redisConnection()
const errores = require('./errores')
let db
module.exports = {
    getUsuarios: async()=>{
        let usuarios = []
        let usuariosKey
        try {
        usuariosKey = await redis.getkeys('andres*')
        await usuariosKey.map(element => {
            usuarios.push(redis.get(element))        
        });
        } catch (error) {
            console.log("error el realizar el get usuarios")
            errores(error)
        }
        return usuarios   
    },
    getUsuario: async(root,{id})=> {
        let usuario
        try {
            usuario = await redis.get(id)
            console.log("usuarios", usuario)
        } catch (error) {
            console.log("Error al realizar getUsuaario")
            errores(error)
        } 
        return usuario
    },
    getCategorias: async() => {
        let categorias = []
        let categoriasKey

        try {
            categoriasKey = await redis.getkeys('categorias*')

            await categoriasKey.map(element => {
                categorias.push(redis.get(element))
            })
            
        } catch (error) {
            console.log("Error al realizar get categoria")
            errores(error)
        }

        return categorias
    },
    getCategoria: async()=>{

    },
    getEtiquetas: async() =>{
        let etiquetas = []
        let etiquetasKey
        try {
            etiquetasKey = await redis.getkeys('etiquetas*')
            await etiquetasKey.map(element => {
                etiquetas.push(redis.get(element))
            })
        } catch (error) {
            console.log("Error al realizar get Etiquetas")
            errores(error)
        }
        return etiquetas
    },
    getEtiqueta:async()=>{

    },
    getComentarios: async()=> {
        let comentarios = []
        let comentariosKey

        try {
            comentariosKey = await redis.getkeys('comentarios*')
            await comentariosKey.map(element => {
                comentarios.push(redis.get(element))
            })
            
        } catch (error) {
            console.log("Error al realizar get Comentarios")
            errores(error)
        }

        return comentarios
    },
    getComentario:async()=>{

    },
    getPosts:async()=>{
        let posts = []
        let postskey
        try {
            postskey = await redis.getkeys('posts*')
            postskey.map(element =>{
                posts.push(redis.get(element))
            })
            
        } catch (error) {
            console.log("Error al realizar")
            errores(error)
        }

        return posts
    },
    getPost:async()=>{

    }

}