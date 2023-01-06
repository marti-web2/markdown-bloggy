// articles.js - contains all the routes for articles
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('articles')
  })

module.exports = router
