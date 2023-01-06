// articles.js - contains all the routes for articles
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const articles = [{
    title: 'Test Article',
    createdAt: Date.now(),
    description: 'Test description'
  }]
  res.render('index', {articles})
  })

module.exports = router
