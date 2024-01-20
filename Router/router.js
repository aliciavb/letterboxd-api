
const express = require('express')
const { 
    getUsuarios,
    postUsuarios,
    getNav,
    getFilms,
    getMyFilms,
    getHighlights,
    postMyFilms,
    putMyFilms,
    deleteMyFilms
} = require('../Controllers/controllers')

const router = express.Router()

/*-----------------------------------------------------------------------
 * Ruta principal de la API 
 * Esta ruta maneja el login de usuarios, en el endpoint /
 * 
 * getUsuarios  {GET}   Recibe los 3 usuarios definidos en la bbdd
 * postUsuarios {POST}  Añade al usuario para comprobar si existe en bbdd
-----------------------------------------------------------------------*/
router.route('/')
      .get(getUsuarios)
      .post(postUsuarios)

/*-----------------------------------------------------------------------
 * Ruta para los elementos del menú de navegación 
 * Endpoint /nav
 * 
 * getNav       {GET}   Recibe los elementos de la bbdd
-----------------------------------------------------------------------*/
router.route('/nav')
      .get(getNav)

/*-----------------------------------------------------------------------
 * Ruta para la lista de películas destacadas 
 * Endpoint /films
 * 
 * getFilms       {GET}   Recibe las películas con sus datos
-----------------------------------------------------------------------*/
router.route('/films')
      .get(getFilms)

/*-----------------------------------------------------------------------
 * Ruta para el CRUD
 * Endpoint /myfilms
 * 
 * getMyFilms     {GET}   Recibe el array de películas (inicialmente vacío)
 * postMyFilms    {POST}  Envía los datos al endpoint (añade una película)
-----------------------------------------------------------------------*/
router.route('/myfilms')
      .get(getMyFilms)
      .post(postMyFilms)
    
/*-----------------------------------------------------------------------
 * Ruta para actualizar o borrar elementos recibiendo su id
 * Endpoint /myfilms/:id
 * 
 * putMyFilms     {PUT}     Actualiza los datos del objeto con ese id
 * deleteMyFilms  {DELETE}  Elimina el objeto con ese id
-----------------------------------------------------------------------*/
router.route('/myfilms/:id')
      .put(putMyFilms)
      .delete(deleteMyFilms)

/*-----------------------------------------------------------------------
 * Ruta para la lista de highlights
 * Endpoint /highlights
 * 
 * getHighlights   {GET}   Recibe los highlights y sus datos
-----------------------------------------------------------------------*/
router.route('/highlights')
      .get(getHighlights)

      
module.exports = { router }