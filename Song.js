require('dotenv').config();
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const url = process.env.MONGO_URI

mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to MongoDB successfully!')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB', error.message)
    })
mongoose.set('useFindAndModify', false)
const songSchema = new mongoose.Schema({
    videoid: String,
    title: String
  })

  songSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  songSchema.plugin(uniqueValidator);
  module.exports = mongoose.model('Song', songSchema)