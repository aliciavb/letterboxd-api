const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    { name : String , pass : String },
    { collection : 'users'}
)
const User = mongoose.model('User' , userSchema)

const navSchema = new mongoose.Schema(
    { span : String , href : String },
    { collection : 'nav'}
)
const Li = mongoose.model('Li' , navSchema)


const filmSchema = new mongoose.Schema(
    { src : String , alt : String },
    { collection : 'films'}
)
const Film = mongoose.model('Film' , filmSchema)

const myfilmSchema = new mongoose.Schema(
    { title : String , year : Number },
    { collection : 'myfilms'}
)
const MyFilm = mongoose.model('MyFilm' , myfilmSchema)


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