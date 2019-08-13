const PORT = 3000

const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cors())

app.get('/', (req, res) => res.json({ msg: 'hello rest api' }))
app.use('/api/v1/singers', require('./api/v1/mma.singers'))

app.listen(PORT, () => {
  console.log(`server started: listening on port : ${PORT}`)
})
