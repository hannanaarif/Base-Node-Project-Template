const express=require('express');
const {InfoController}=require('../../controllers');
const router=express.Router();

const AirplaneRoutes=require('./airplane-routes')

router.get('/info',InfoController.info);

router.use('/airplanes',AirplaneRoutes);



module.exports=router;