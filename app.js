const express = require('express')
const bodyParser = require('body-parser')
const listEndPoints = require('express-list-endpoints')

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

const dbConfig = require('./Config/database.config.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url).then(() => {
    console.log("Successfully connected to the database")
}).catch(error  => {
    console.log(error)
    console.log('Could not connect to the database. Exiting now...')
})

app.get('/', function(req, res) {
    res.json({message: "Welcome to Student's Info application. Create, update, fetch and delete student using MongoDB", endPoints: listEndPoints(app)})
})

require('./App/Routers/student.router.js')(app)

app.listen(3000, function() {
    console.log("Server is listening on port 3000")
})
