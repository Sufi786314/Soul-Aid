import express from 'express'
import {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
}
from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router Object
const router  = express.Router()        

//routing
//REGISTER || METHOD POST   
router.post('/register',registerController);

// LOGIN || POST
router.post('/login', loginController);

// Forgot Password || Post
router.post('/forgot-password',forgotPasswordController)

// Test Route
router.get('/test', requireSignIn, isAdmin, testController);
export default router

// Protected User Route Auth
router.get('/user-auth',requireSignIn,(req,res)=>{
  res.status(200).send({ok:true})
})

// Protected Route Auth Admin
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
  res.status(200).send({ok:true})
})