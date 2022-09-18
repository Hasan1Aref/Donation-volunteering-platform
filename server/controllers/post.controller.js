const { response } = require('../app');
const models=require('../models');

const AddPost=(req,res)=>{
const post={
    title: req.body.title,
    description:req.body.description,
    summary:req.body.summary,
    imageUrl:req.body.imageUrl,
    date:req.body.date,
    userId:1 //from the token
}
models.Post.create(post).then(result=>{
res.status(201).json({
    message:'post created successfully',
    post:result
})
}).catch(error=>{
    res.status(500).json({
        message:'something went wrong',
        error:error
    })
})  
}

const ShowPost=(req,res)=>{
    const id = req.params.id;
    models.Post.findByPk(id).then(result=>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"post not found",
                
            })
        }

 }).catch(error=>{
res.status(500).json({
    message:"something went wrong",
    
})
 }) 
}

const ShowAllPost=(req,res)=>{
models.Post.findAll().then(result=>{
res.status(200).json(result);
}).catch(error=>{
    res.status(500).json({
        message:"something went wrong",
    });
});
}

const UpdatePost=(req,res)=>{
    const id = req.params.id;
    const UpdatePost={
     title: req.body.title,
    description:req.body.description,
    summary:req.body.summary,
    imageUrl:req.body.imageUrl,
    date:req.body.date,
    }
    const userId=1;
    models.Post.update(UpdatePost,{where:{id:id,userId:userId}}).then(result=>{
        if(result){
            res.status(200).json({
                message:"post updated successfully",
                post:UpdatePost
            })
                }else{
            res.status(404).json({
                message:"post not found",
                
            })
        }
       
      
    }).catch(error=>{
        res.status(500).json({
            message:"something went wrong",
            error:error

        });
    })
}

const DeletePost=(req,res)=>{
    const id = req.params.id;
    const userId=1;
    models.Post.destroy({where:{id:id,userId:userId}}).then(result=>{
        if(result){
            res.status(200).json({
                message:"post deleted successfully",
            })       
         }else{
            res.status(404).json({
                message:"post not found",
                
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
    AddPost:AddPost,
    ShowPost:ShowPost,
    ShowAllPost:ShowAllPost,
    UpdatePost:UpdatePost,
    DeletePost:DeletePost
}