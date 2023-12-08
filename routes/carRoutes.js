
const express = require('express');
const carRouter = express.Router();

const carModels = require('../models/car_models');

//create end point
carRouter.post('/addCarDetails',(req,res)=>{
    carModels.create(req.body,(err,dbresponse) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send("car  details added succesfully")
        }
    })
})

//read end point

carRouter.get('/getCarDetails',(req,res)=>{
    carModels.find((err,results) => {
        if (err) {
            res.send(err.message)
        } else {
            res.send(results)
        }
    })
})

//update end point
carRouter.put('/updateCarDetails',(req,res)=>{
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


carRouter.delete('/deleteCarDetails',(req,res)=>{
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

carRouter.delete('/deleteCarDetails',(req,res)=>{
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


module.exports = carRouter;
