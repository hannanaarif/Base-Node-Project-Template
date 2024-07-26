const {StatusCodes}=require('http-status-codes');
const {AirplaneService}=require('../services');
const { response } = require('express');
const {SuccessResponse,ErrorResponse} = require('../utils/common');


async function createAirplane(req,res){
    try {
        console.log('Airplane controller',AirplaneService);
        const airplane=await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        })
        console.log('Implementented New Error and Success');
        SuccessResponse.data=airplane;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse)
           
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode)
        .json(ErrorResponse);
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