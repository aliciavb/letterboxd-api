/*-----------------------------------------------------------------------
 * Express API
 * Conectamos con la bbdd en MongoDB Atlas para recibir la información
 * 
 * middlewares  {cors}
 * routing      {Express Router}
 * odm          {mongoose}
 * endpoint     {/}              [get, post]
 * endpoint     {/nav}           [get]
 * endpoint     {/films}         [get]
 * endpoint     {/myfilms}       [get, post]
 * endpoint     {/myfilms/:id}   [put, delete]
 * endpoint     {/highlights}    [get]
-----------------------------------------------------------------------*/
console.clear()

const express  = require('express')
const cors     = require('cors')
const mongoose = require('mongoose')

const { router } = require('./Router/router')

//Variable de entorno
let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/letterboxdcopycat'

const app = express()

const conectar = async () => await mongoose.connect(URL_ATLAS)
    .then(()=> console.log('Conectado a BBDD'))
    .catch( err => console.log( err ))

conectar()

app.use(cors())
app.use( express.json())
app.use(express.urlencoded({extended: false}))
app.use( router )




/*-------------------------
Middleware de error 500
---------------------------*/
app.use((err, req, res, next) => {
    let { status, message } = err
    status = status 
        ? status
        : 500
    res.status(status).json(message)
  })


app.listen(3000, ()=> console.log('API iniciada'))