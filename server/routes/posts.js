const express=require('express');
const postsController=require('..//controllers/post.controller');

const router=express.Router();
router.post('/',postsController.AddPost);
router.get('/',postsController.ShowAllPost);
router.get('/:id',postsController.ShowPost);
router.put ('/:id',postsController.UpdatePost);
router.delete ('/:id',postsController.DeletePost);




module.exports=router; 