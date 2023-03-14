const mongoose = require('mongoose')

const logInUserSchema = new mongoose.Schema({
    email: String,
    password: String

})

const User = mongoose.model("User", logInUserSchema)

module.exports = User