const express=require('express');
const {serverconfig,Logger}=require('./config');
const apiRoutes=require('./routes');
const app=express();

const PORT=serverconfig.PORT;

console.log("Home page");

app.use('/api',apiRoutes);



app.listen(PORT,()=>{
    console.log(`Successfully started the server on PORT: ${PORT}`);
    Logger.info("Successfully started the server",{});
})