const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const carModels = require('./models/car_models')


const app = express()
const port = 4003;


mongoose.connect('mongodb://127.0.0.1:27017/carDatabase')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())



app.get('/',(req,res) =>{
    res.send("hello from mongoose integration api")
});

app.post('/addCarDetails',(req,res)=>{
    carModels.create(req.body,(err,dbresponse) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send("car  details added succesfully")
        }
    })
})



app.listen(port, ()=>{
    console.log("server started successfully on",port);
})



