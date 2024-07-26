const express=require('express');
const {AirplaneMiddlewares}=require('../../middleware');
const router=express.Router();

const {AirplaneController}=require('../../controllers')
console.log("Reached at ./")
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);


module.exports=router;

