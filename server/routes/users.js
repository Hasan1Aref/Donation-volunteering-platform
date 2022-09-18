const express=require('express');
const userController=require('..//controllers/user.controller');

const router=express.Router();
router.post('/',userController.AddUser);
router.get('/',userController.ShowUser);
router.get('/:id',userController.ShowAllUsers);
router.put ('/:id',userController.UpdateUser);
router.delete ('/:id',userController.DeleteUser);




module.exports=router; 