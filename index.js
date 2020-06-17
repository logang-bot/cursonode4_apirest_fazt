const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

const usersRoutes = require('./src/routes/users')
mongoose.connect('mongodb://172.22.0.2:27017/rest-api-example',{
    useMongoClient: true
}).then(db => console.log('db is connected'))
.catch(err => console.log(err))


//settings
app.set('port', process.env.PORT || 8000)

//middleware
app.use(morgan('dev'))
app.use(bodyparser.json())

//routes
app.use('/users',usersRoutes)

//static files


//error handlers



//start the server
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'))
})