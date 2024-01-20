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

router.route('/')
      .get(getUsuarios)
      .post(postUsuarios)

router.route('/nav')
      .get(getNav)

router.route('/films')
      .get(getFilms)

router.route('/myfilms')
      .get(getMyFilms)
      .post(postMyFilms)
    

router.route('/myfilms/:id')
      .put(putMyFilms)
      .delete(deleteMyFilms)

router.route('/highlights')
      .get(getHighlights)

      
module.exports = { router }