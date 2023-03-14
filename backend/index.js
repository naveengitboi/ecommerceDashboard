const express = require("express");
const mongoose = require('mongoose')
require('./dbConfig/config')
const cors = require("cors");
const dotenv = require("dotenv")
const app = express();
const Register = require('./models/UserSchema')

//middleware
app.use(cors());
app.use(express.json);

//posting
app.get('/Register', async (req, resp)=> {
  let result = await Register.find()
  console.log(result)
  resp.send(result)
})



//connection to server

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Conncected to server"));
