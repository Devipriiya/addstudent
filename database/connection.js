
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.set('useCreateIndex', true);
const connectDB=async()=>{
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.MONGO_URI,{
          useUnifiedTopology:true,
          useNewUrlParser:true,
         
        }
        )
        .then(()=>{
            console.log("mongoDB connected");
        })
        .catch((err)=>{
            console.error("Error connecting to mongo",err);

        })

    }catch(error){
        console.error(`Error:${error.message}`);
        process.exit(1);

    }

};
module.exports= connectDB;
const connectionDB=()=>{
    try{
        mongoose.set("strictQuery", true);
        mongoose.connect(MONGO_URI,
            {
                useUnifiedTopology:true,
                 useNewUrlParser:true,
                
            })
            .then(()=>{
                console.log(`mongoDB connected`);
             }).catch((err)=>{
                console.error("Error connecting to mongo",err);
             });
    }catch(error){
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
}