var Userdb=require("../model/model.js");

exports.create=(req,res)=>{
 if(!req.body){
    res.status(400).send({message:"content can not be empty"});
    return;
 }
 const user=new Userdb({
    name:req.body.name,
    email:req.body.email,
 
    
 })
 user
 .save(user)
 .then(data=>{
    res.send(data)
 })
 .catch(err=>{
    res.status(500).send({
        message:err.message || "some error occurred while creating a create operation "
    })
 })
}
exports.find=(req,res)=>{
    if(req.query.id){
  const id=req.query.id;
     Userdb.findById(id)
     .then(data=>{
        if(!data){
            res.status(404).send({message:"Not found user with id"+ id})
        }else{
            // res.send(data);
            res.redirect('/add-user');
        }
     })
     .catch(err=>{
        res.status(500).send({message:"error retrieving user with id"+ id})
     })
    }else{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message|| "Error occurred while retriving user information" })
    })
    
}
}
exports.update=(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(data){
            res.send(data)
            // res.send ({message:"updated successfully"})
        }
        else{
         
            res.status(404).send({message:`cannot update user with ${id},Maybe user not found`})
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error update user information"})
    })
    
}
exports.delete=(req,res)=>{
    const id=req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(data){
            res.send({
                message:"user was deleted successfully"
            })
          
        }else{
            res.status(404).send({message:`cannot delete with id ${id}. Maybe id is wrong`})
        }
    })
    .catch(err=>{
        res.status(500).send({message:"could not delete user with id="+id});
    });
    
}
