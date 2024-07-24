const {StatusCodes}=require('http-status-codes');
const {AirplaneService}=require('../services');
const { response } = require('express');


async function createAirplane(req,res){
    try {
        console.log('Airplane controller',AirplaneService);
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        return res
        .status(StatusCodes.CREATED)
        .json({
            success:true,
            message:'Sucessfully create an airplane',
            data:airplane,
            error:{}
        })
        
    } catch (error) {
        console.error('Error creating airplane:', error);  // Log the error details
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong while creating the airplane',
            data: {},
            error: error.message  // Return only the error message
        });
    }
    // catch (error) {
    //     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //         success:false,
    //         message:'Something went wrong while creating airplane',
    //         data:{},
    //         error:error
    //     })
        
    // }
}
module.exports={
    createAirplane
}