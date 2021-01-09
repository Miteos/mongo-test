const express = require('express')
// const PORT = process.env.PORT || 4000
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/db')
const app = express()

const book = require('./routes/book')

// configure database and mongoose

mongoose.set('useCreateIndex', true)
mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log('Database is connected')
  })
  .catch((err) => {
    console.log({ database_error: err })
  })
// db configuaration ends here
// registering cors
app.use(cors())
// configure body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// configure body-parser ends here
app.use(morgan('dev')) // configire morgan
// define first route
app.get('/', (req, res) => {
  res.json('Assemble')
})
app.use(book)
module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
