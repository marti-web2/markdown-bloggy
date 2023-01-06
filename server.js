const express = require('express')
const dotenv = require('dotenv')
const articleRouter = require('./routes/articles')
const app = express()

dotenv.config()
const PORT = process.env.PORT || 5000

// view engine will convert ejs to html
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})