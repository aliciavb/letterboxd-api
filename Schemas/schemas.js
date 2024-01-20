const mongoose = require('mongoose')

/*--------------------------------------------------------------- 
 * Modelo de User 
 * Este modelo contiene la estructura de datos de los usuarios
 * 
 * name  {string}   Nombre de usuario
 * pass  {string}   Contraseña de usuario
-----------------------------------------------------------------*/
const userSchema = new mongoose.Schema(
    { name : String , pass : String },
    { collection : 'users'}
)
const User = mongoose.model('User' , userSchema)

/*--------------------------------------------------------------- 
 * Modelo de Li 
 * Este modelo contiene la estructura de los elementos del menú
 * 
 * span  {string}   Texto del elemento li
 * href  {string}   Enlace al que dirige
-----------------------------------------------------------------*/
const navSchema = new mongoose.Schema(
    { span : String , href : String },
    { collection : 'nav'}
)
const Li = mongoose.model('Li' , navSchema)

/*--------------------------------------------------------------- 
 * Modelo de Film 
 * Contiene la estructura de las películas destacadas
 * 
 * src  {string}   Enlace de la imagen en /assets/posters
 * alt  {string}   Texto alternativo de la imagen
-----------------------------------------------------------------*/
const filmSchema = new mongoose.Schema(
    { src : String , alt : String },
    { collection : 'films'}
)
const Film = mongoose.model('Film' , filmSchema)

/*--------------------------------------------------------------- 
 * Modelo de MyFilm 
 * Contiene la estructura de las pelis que se gestionan en el CRUD  
 * 
 * title {string}   Título de la película
 * year  {number}   Fecha de estreno
-----------------------------------------------------------------*/
const myfilmSchema = new mongoose.Schema(
    { title : String , year : Number },
    { collection : 'myfilms'}
)
const MyFilm = mongoose.model('MyFilm' , myfilmSchema)


/*--------------------------------------------------------------- 
 * Modelo de Highlight 
 * Contiene los datos y estructura de los highlights de la app 
 * 
 * icon  {string}   Enlace del icono en /assets/icons
 * text  {string}   Texto del highlight
-----------------------------------------------------------------*/
const highlightSchema = new mongoose.Schema(
    { icon : String , text : String },
    { collection : 'highlights'}
)
const Highlight = mongoose.model('Highlight' , highlightSchema)

module.exports = {
  User,
  Li,
  Film,
  MyFilm,
  Highlight,
}