const mongoose = require('mongoose');
const userSchema=mongoose.Schema(
    {
        name : {
            type : String,
            required: true
        },
        email : {
            type: String,
            required: true,
           
        },
     
        
       
            
           
     })
const Userdb=mongoose.model('Userdb',userSchema);
module.exports=Userdb