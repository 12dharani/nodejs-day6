const express = require('express')

const path = require('path')

const bodyParser = require('body-parser')

const app = express()
const port =4004;

// middleware section
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
// configuration fropm tempalting engine
app.set('view engine','ejs');

app.get('/',(req,res) =>{
    res.render('index.ejs')
})

app.listen(port, ()=>{
    console.log("server started successfully on ",port);
})