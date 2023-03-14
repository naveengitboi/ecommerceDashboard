const express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");
const app = express();
//middleware
app.use(cors());
app.use(express.json);

//Mongodb connection
mongoose.set("strictQuery", false);

//mongodb://localhost::27017/  wont work properly sometimes so run cmd saying mongosh and you will get mongoose connection string

mongoose.connect("mongodb://127.0.0.1:27017/ecomm", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=> console.log("MongoDb"))
.catch((err)=> console.log(err))



//posting

app.post('/register', (req, res)=> {
    const result = req.body 
    console.log(result)
})

//connection to server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Conncected to server" + PORT));
