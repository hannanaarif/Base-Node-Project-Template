const express=require('express');

const router=express.Router();

const {AirplaneController}=require('../../controllers')
console.log("Reached at ./")
router.post('/',AirplaneController.createAirplane);


module.exports=router;

