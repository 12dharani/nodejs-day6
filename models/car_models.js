const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const carModels = require('./models/car_models')

const app = express()
const port = 4003;


// mongoose connection to database
mongoose.connect('mongodb://127.0.0.1:27017/carDatabase')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/',(req,res) =>{
    res.send("hello from mongoose integration api")
});

//create end point
app.post('/addCarDetails',(req,res)=>{
    carModels.create(req.body,(err,dbresponse) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send("car  details added succesfully")
        }
    })
})

//read end point

app.get('/getCarDetails',(req,res)=>{
    carModels.find((err,results) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send(results)
        }
    })
})

//update end point
app.put('/updateCarDetails',(req,res)=>{
    carModels.findOneAndUpdate(
        {_id:req.body.id},{$set:{price:req.body.price}},
        (err, dbresponse) => {
            if (err) {
                console.log(err)
            } else {
                res.send("car price details updated succesfully")
            }
        })
})


app.delete('/deleteCarDetails',(req,res)=>{
    carModels.findOneAndDelete(
        {_id:req.body.id},
        (err, dbresponse) => {
            if (err) {
                console.log(err)
            } else {
                res.send("car price details deleted succesfully")
            }
        })
})

app.delete('/deleteCarDetails',(req,res)=>{
    carModels.findOneAndDelete(
        {_id:req.body.id},
        (err, dbresponse) => {
            if (err) {
                console.log(err)
            } else {
                res.send("car price details deleted succesfully")
            }
        })
})


app.listen(port, ()=>{
    console.log("server started successfully on ",port);
})


