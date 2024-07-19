const express=require('express');
const {InfoController}=require('../../controllers');
const router=express.Router();

console.log("Reached V1");


router.get('/info',InfoController.info);


module.exports=router;