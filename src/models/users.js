const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema =new Schema({
    firstName: String,
    lastName: String,
    email: String,
    cars: [{
        //le estamos pasando otra coleccion de cars.js
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
})

module.exports = mongoose.model('user', userSchema)