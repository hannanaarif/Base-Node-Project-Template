const {StatusCodes}=require('http-status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message='Something went wrong while create an airplane';
        ErrorResponse.error=new AppError(['Model Number not found in the comming request in correct order',StatusCodes.BAD_REQUEST]);
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(ErrorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest
}