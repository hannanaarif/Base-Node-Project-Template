const CrudRepository=require('./crud-repository');
const {Airplane}=require('../models');


class AirplaneRepository extends CrudRepository{
    constructor(){
        console.log('Attempting to create: in repo:airplane-repo'); // Log data being sent to the database
        super(Airplane);
    }
}

module.exports=AirplaneRepository