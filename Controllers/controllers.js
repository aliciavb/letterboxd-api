/*-----------------------------------------------------------------------
 * Controllers
 * Realizamos cada método get, post, put o delete para cada schema y modelo
-----------------------------------------------------------------------*/
const {
    User,
    Li,
    Film,
    MyFilm,
    Highlight
  } = require('../Schemas/schemas')


const getUsuarios = async (req, res, next)=>{
    try{
        const buscar = await User.find()
        res.status(200).json( buscar )
    } catch (error) {
        next(error)
    }
}
const postUsuarios = async (req, res, next)=>{
    const { name , pass} = req.body

    const buscar = await User.findOne({ name , pass })

    res.json(buscar)
}

const getNav = async (req, res, next)=>{
    try{
        const buscarLi = await  Li.find()
        res.status(200).json(buscarLi)
    } catch (error) {
        next(error)
    }
}

const getFilms = async (req, res, next)=>{
    try{
        const buscarFilms = await  Film.find()
        res.status(200).json(buscarFilms)
    } catch (error) {
        next(error)
    }
}

const getMyFilms = async (req, res, next) => {
    try{
        const buscarMyFilms = await  MyFilm.find()
        res.status(200).json(buscarMyFilms)
    } catch (error) {
        next(error)
    }
}
const postMyFilms = async (req, res, next) => {
    try{
        const { title, year } = req.body
      
        const newFilm = new MyFilm({ title, year })
        await newFilm.save()
      
        const updatedMyFilms = await MyFilm.find()
      
        res.status(201).json(updatedMyFilms)
    }catch (error) {
        next(error)
    }
}
const putMyFilms = async (req, res, next) => {
    try {
      const { id } = req.params
      const { title, year } = req.body

      await MyFilm.findByIdAndUpdate(id, { title, year })
      const updatedMyFilms = await MyFilm.find()

      res.status(200).json(updatedMyFilms)
    } catch (error) {
      next(error)
    }
}
const deleteMyFilms = async (req, res, next) => {
    try {
        const { id } = req.params

        await MyFilm.findByIdAndDelete(id)
        const updatedMyFilms = await MyFilm.find()
        
        res.status(200).json(updatedMyFilms)
    } catch (error) {
        next(error)
    }
}

const getHighlights = async (req, res, next) => {
    try{
        const buscarHighlights = await  Highlight.find()
        res.status(200).json(buscarHighlights)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUsuarios,
    getNav,
    getFilms,
    getMyFilms,
    getHighlights,
    postUsuarios,
    postMyFilms,
    putMyFilms,
    deleteMyFilms,
}