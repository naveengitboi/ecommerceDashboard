const mongoose = require('mongoose')
mongoose.set("strictQuery", true);

//Mongodb connection

//mongodb://localhost::27017/  wont work properly sometimes so run cmd saying mongosh and you will get mongoose connection string

//mongodb://localhost:27017
mongoose.connect('mongodb://127.0.0.1:27017/ecomm',{
     useNewUrlParser: true,
     useUnifiedTopology: true 
})
.then(() => console.log('mongo working'))
.catch((err) => console.log(err))

