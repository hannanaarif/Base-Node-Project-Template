const {AirplaneRepository}=require('../repositories');

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    console.log("Reached Aiplane service");

    try {
        const airplane=await airplaneRepository.create(data);
        return airplane;
        
    } catch (error) {
        throw error;
        
    }

}

module.exports={
    createAirplane
}