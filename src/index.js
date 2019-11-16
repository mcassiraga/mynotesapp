const express = require('express')
const morgan = require('morgan')
const path = require('path')
const {mongoose} = require('./database')
const cors = require('cors')
const server = express()

//Middlewares - Se ejecutan antes de que lleguen las rutas
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

//Routes
server.use('/api/tasks', require('./routes/task.routes'))

//Static files
server.use(express.static(path.join(__dirname, 'public')))

//Settings
server.set('port', process.env.PORT || 3000)
server.listen(server.get('port'), () => {
    console.log('server running succesfully')
})