const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send('App is working ')
    res.end() 

}).listen(5000)