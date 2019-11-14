const conf = require('./config')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cors())

app.use('/api/v1/singers', require('./api/v1/mma.singers'))
app.use('/api/v1/crawler', require('./api/v1/crawler'))
app.get('*', (req, res) => res.json({ msg: 'hello rest api', moveTo: `http://${conf.IP}:${conf.PORT}/api/v1/singers` }))

app.listen(conf.PORT, () => {
  console.log(`server started: listening on port : ${conf.PORT}`)
})
