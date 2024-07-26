const {AirplaneRepository}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes}=require('http-status-codes');

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    console.log("Reached Aiplane service");
    console.log('!!!Data',data);

    try {
        const airplane=await airplaneRepository.create(data);
        return airplane;
        
    } catch (error) {
        console.log(error);
        if(error.name==='SequelizeValidationError'){
            let explaination=[];
            error.errors.forEach((err) => {
                explaination.push(err.message);  
            });
            console.log(explaination);
            throw new AppError(explaination,StatusCodes.BAD_REQUEST);
        }
        throw error('Cannot Create a new Airplane object',StatusCodes.INTERNAL_SERVER_ERROR);
        
    }

}

module.exports={
    createAirplane
}