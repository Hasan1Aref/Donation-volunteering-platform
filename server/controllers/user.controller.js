const { response } = require('../app');
const models=require('../models');

const AddUser=(req,res)=>{
const user={
    firstName: req.body.firstName,
    middleName:req.body.middleName,
    lastName:req.body.lastName,
    phoneNumber:req.body.phoneNumber,
    email:req.body.email,
    userName:req.body.userName,
    password:req.body.password,
    // roleId:req.body.roleId,
    // userId:1 //from the token
}
models.User.create(user).then(result=>{
res.status(201).json({
    message:'user created successfully',
    user:result
})
}).catch(error=>{
    res.status(500).json({
        message:'something went wrong',
        error:error
    })
})  
}

const ShowUser=(req,res)=>{
    const id = req.params.id;
    models.User.findByPk(id).then(result=>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"user not found",
                
            })
        }

 }).catch(error=>{
res.status(500).json({
    message:"something went wrong",
    error:error
})
 }) 
}

const ShowAllUsers=(req,res)=>{
models.User.findAll().then(result=>{
res.status(200).json(result);
}).catch(error=>{
    res.status(500).json({
        message:"something went wrong",
        error:error
    });
});
}

const UpdateUser=(req,res)=>{
    const id = req.params.id;
    const UpdateUser={
        firstName: req.body.firstName,
        middleName:req.body.middleName,
        lastName:req.body.lastName,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email,
        userName:req.body.userName,
        password:req.body.password,
    }
    models.User.update(UpdateUser,{where:{id:id,roleId:roleId}}).then(result=>{
        if(result){
            res.status(200).json({
                message:"user updated successfully",
                post:UpdatePost
            })
                }else{
            res.status(404).json({
                message:"user not found",
                
            })
        }
       
      
    }).catch(error=>{
        res.status(500).json({
            message:"something went wrong",
        error:error

        });
    })
}

const DeleteUser=(req,res)=>{
    const id = req.params.id;
    const roleId=models.User.roleId
    models.User.destroy({where:{id:id,roleId:roleId}}).then(result=>{
        if(result){
            res.status(200).json({
                message:"user deleted successfully",
            })       
         }else{
            res.status(404).json({
                message:"user not found",
                
            })
        }
       
        }).catch(error=>{
            res.status(500).json({
                message:"something went wrong",
                error:error
            })
        })
}


module.exports={
    AddUser:AddUser,
    ShowUser:ShowUser,
    ShowAllUsers:ShowAllUsers,
    UpdateUser:UpdateUser,
    DeleteUser:DeleteUser
}