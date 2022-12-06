const express = require('express')
const mongoose = require('mongoose')
const route = require('./src/routes/route')

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://Iqra:Iqra3786@cluster0.tsgwccn.mongodb.net/group23Database",{
    useNewUrlParser : true
})
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log(err))

app.use('/',route)  

app.listen(3000, function(){
    console.log("Express app is running on port " + 3000)
})