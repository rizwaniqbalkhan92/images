const env=require('dotenv');
env.config()
const app=require('./Api/app');
const PORT=process.env.PORT



app.listen(PORT,()=>{
    console.log(`Server Is Runing.... AT ${PORT}`);
})