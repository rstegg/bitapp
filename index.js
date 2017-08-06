const express = require('express')
const app = express()
const setup = require('./routes')

setup(app)

app.listen(3000)
