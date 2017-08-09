require('dotenv').load()
const express = require('express')
const passport = require('./services/passport')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(passport())
app.use('/api/v1', routes)

app.listen(3000)
