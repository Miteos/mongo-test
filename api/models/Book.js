const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  cover: String,
  pages: Number,
})
module.exports = mongoose.model('Book', BookSchema)
