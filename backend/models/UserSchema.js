const mongoose = require('mongoose')

const UserRegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})



module.exports = mongoose.model("Register", UserRegisterSchema)