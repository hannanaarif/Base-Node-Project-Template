catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:'Something went wrong while creating airplane',
            data:{},
            error:error
        })
        
    }