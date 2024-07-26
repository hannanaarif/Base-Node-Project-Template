class AppError extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode=statuscode;
        this.explaination=message;
    }

}

module.exports=AppError;