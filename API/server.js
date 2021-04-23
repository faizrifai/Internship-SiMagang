var express = require('express')
var app = express()
var bodyParser = require('body-parser')
//const jwt = require('jsonwebtoken')
//var mysql = require('mysql');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const adminRouter = require("./routes/admin")
const loginRouter = require("./routes/login")
const industriRouter = require("./routes/industri")
const logbookRouter = require("./routes/logbook")
//const multer = require('multer')
const path= require('path')
global.__basedir = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'Hallo' })
});


app.use('/uploads', express.static(__dirname +'/uploads'));
app.use('/uploads', express.static(__dirname +'/uploads/logbook'));


  
// using as middleware
app.use('/user', adminRouter)
app.use('/industri', industriRouter)
app.use('/login', loginRouter)
app.use('/logbook', logbookRouter)
// Set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;