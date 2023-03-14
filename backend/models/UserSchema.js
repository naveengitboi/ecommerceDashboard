const mongoose = require('mongoose')

const UserRegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Register = mongoose.model("Register", UserRegisterSchema)

module.exports = Register