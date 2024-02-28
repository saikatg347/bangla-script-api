require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const errorHandler = require('./middlewares/errorHandler')
const corsOptions = require('./config/corsOptions')

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/submit', require('./routes/submitRoute'))

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}.`))

