const express = require('express')
const app = express()
//const mongoose = require('mongoose')
const route= require('./route/route')

app.use(express.json())

// mongoose.set("strictQuery", true)
// mongoose.connect('mongodb+srv://TusharJainFunctionup:functionup@tusharjaindb.zxey2fj.mongodb.net/cronJobs')
// .then(" mongodb is connected now")
// .catch((err)=> err.message)

app.use('/',route)

app.listen(3000, function(req,res){
    console.log('port is running on 3000')
})