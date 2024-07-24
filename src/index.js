const express=require('express');
const { Airplane } = require('./models');
const {serverconfig,Logger}=require('./config');
const apiRoutes=require('./routes');
const app=express();

const PORT=serverconfig.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
Logger.info("Home",{});

app.use('/api',apiRoutes),



app.listen(PORT,()=>{
    console.log(`Successfully started the server on PORT: ${PORT}`);
    Logger.info("Successfully started the server",{});
});