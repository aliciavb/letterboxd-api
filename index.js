console.clear()

const express = require('express')
const cors    = require('cors')
const mongoose    = require('mongoose')

//Variable de entorno
let URL_ATLAS = process.env.URL_ATLAS || 'mongodb://127.0.0.1:27017/letterboxdcopycat'

const app = express()

const conectar = async () => await mongoose.connect(URL_ATLAS)
    .then(()=> console.log('Conectado a BBDD'))
    .catch( err => console.log( err ))

conectar()

//los modelos y los schemas iran en sus respectivas carpetas
const userSchema = new mongoose.Schema(
    { name : String , pass : String },
    { collection : 'users'}
)

const User = mongoose.model('User' , userSchema)

app.use(cors())
app.use( express.json())
app.use(express.urlencoded({extended: false}))



app.get('/', async (req, res, next)=>{

    const buscar = await User.find()

    res.json( buscar )
})

app.post('/', async (req, res, next)=>{
    const { name , pass} = req.body

    const buscar = await User.findOne({ name , pass })

    res.json(buscar)
})

// meter middlewares, router...


app.listen(3000, ()=> console.log('API iniciada'))