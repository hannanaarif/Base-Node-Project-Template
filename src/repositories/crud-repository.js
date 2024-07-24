const { where } = require('sequelize');
const {Logger}=require('../config');

console.log('Attempting to create: crud-repo outside'); 
class crudRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try {
           console.log('Attempting to create: crud-repo'); // Log data being sent to the database
           const response=await this.model.create(data);
           return response;  
        } catch (error) {
          //  Logger.error('something went wrong with crud repo:create');
          Logger.error('Something went wrong with crud repo:create', { error: error.message, stack: error.stack });

            throw error;
        }
        
    }


    async destroy(data){
        try {
           const response=await this.model.destroy({
            where:{
                id:data
            }
           });
           return response;  
        } catch (error) {
            Logger.error('something went wrong with crud repo:create');
            throw error;
        }
        
    }

    async get(data){
        try {
           const response=await this.model.findByPk(data);
           return response;  
        } catch (error) {
            Logger.error('something went wrong with crud repo:create');
            throw error;
        }
        
    }

    async getAll(data){
        try {
           const response=await this.model.findAll();
           return response;  
        } catch (error) {
            Logger.error('something went wrong with crud repo:create');
            throw error;
        }
        
    }

    async update(id,data){
        try {
           const response=await this.model.update(data,{
            where:{
                id:id
            }
           });
           return response;  
        } catch (error) {
            Logger.error('something went wrong with crud repo:create');
            throw error;
        }
        
    }
}

module.exports=crudRepository;