require('dotenv').load()
const express = require('express')
const passport = require('./services/passport')
const app = express()
const routes = require('./routes')

app.use(passport())
app.use('/', routes)

app.listen(3000)
