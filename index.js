console.clear()

const express  = require('express')
const cors     = require('cors')
const mongoose = require('mongoose')

//Variable de entorno
let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/letterboxdcopycat'

const app = express()

const conectar = async () => await mongoose.connect(URL_ATLAS)
    .then(()=> console.log('Conectado a BBDD'))
    .catch( err => console.log( err ))

conectar()


//los modelos y los schemas iran en sus respectivas carpetas

//Schema usuarios
const userSchema = new mongoose.Schema(
    { name : String , pass : String },
    { collection : 'users'}
)
//modelo usuarios
const User = mongoose.model('User' , userSchema)


//Schema Li
const navSchema = new mongoose.Schema(
    { span : String , href : String },
    { collection : 'nav'}
)
//modelo Li
const Li = mongoose.model('Li' , navSchema)

//Schema Film
const filmSchema = new mongoose.Schema(
    { src : String , alt : String },
    { collection : 'films'}
)
//modelo Film
const Film = mongoose.model('Film' , filmSchema)

//Schema MyFilm
const myfilmSchema = new mongoose.Schema(
    { title : String , year : Number },
    { collection : 'myfilms'}
)
//modelo MyFilm
const MyFilm = mongoose.model('MyFilm' , myfilmSchema)


//Schema Highlight
const highlightSchema = new mongoose.Schema(
    { icon : String , text : String },
    { collection : 'highlights'}
)
//modelo Highlight
const Highlight = mongoose.model('Highlight' , highlightSchema)


app.use(cors())
app.use( express.json())
app.use(express.urlencoded({extended: false}))



app.get('/', async (req, res, next)=>{
    try{
        const buscar = await User.find()
        res.status(200).json( buscar )
    } catch (error) {
        next(error)
    }
})

app.get('/nav', async (req, res, next) => {
    try{
        const buscarLi = await  Li.find()
        res.status(200).json(buscarLi)
    } catch (error) {
        next(error)
    }
})

app.get('/films', async (req, res, next) => {
    try{
        const buscarFilms = await  Film.find()
        res.status(200).json(buscarFilms)
    } catch (error) {
        next(error)
    }
})

app.get('/myfilms', async (req, res, next) => {
    try{
        const buscarMyFilms = await  MyFilm.find()
        res.status(200).json(buscarMyFilms)
    } catch (error) {
        next(error)
    }
})

app.get('/highlights', async (req, res, next) => {
    try{
        const buscarHighlights = await  Highlight.find()
        res.status(200).json(buscarHighlights)
    } catch (error) {
        next(error)
    }
})

app.post('/', async (req, res, next)=>{
    const { name , pass} = req.body

    const buscar = await User.findOne({ name , pass })

    res.json(buscar)
})


//insertar nueva pelicula
app.post('/myfilms', async (req, res, next) => {
    try{
        const { title, year } = req.body
      
        const newFilm = new MyFilm({ title, year })
        await newFilm.save()
      
        const updatedMyFilms = await MyFilm.find()
      
        res.status(201).json(updatedMyFilms)
    }catch (error) {
        next(error)
    }
    
  })

  //editar pelicula insertada
    app.put('/myfilms/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      const { title, year } = req.body

      await MyFilm.findByIdAndUpdate(id, { title, year })
      const updatedMyFilms = await MyFilm.find()

      res.status(200).json(updatedMyFilms)
    } catch (error) {
      next(error)
    }
  })


//eliminar pelicula
app.delete('/myfilms/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        await MyFilm.findByIdAndDelete(id)
        const updatedMyFilms = await MyFilm.find()
        
        res.status(200).json(updatedMyFilms)
    } catch (error) {
        next(error)
    }
})


// meter middlewares, router...

// Error handling middleware
app.use((err, req, res, next) => {
    let { status, message } = err
    status = status ? status : 500
    res.status(status).json(message)
  })

app.listen(3000, ()=> console.log('API iniciada'))