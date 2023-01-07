const express = require('express')
const dotenv = require('dotenv')
const articleRouter = require('./routes/articles')
const app = express()

dotenv.config()
const PORT = process.env.PORT || 5000

// view engine will convert ejs to html
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

// render method will use the object to pass data to the view
app.get('/', (req, res) => {
  const articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'Test description'
  }, {
    title: 'Test Article 2',
    createdAt: new Date(),
    description: 'Test description 2'
  }]
  res.render('index', { articles })
})

// listen method will start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})