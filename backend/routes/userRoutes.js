import express from 'express';


const router = express.Router();



import { userLogin, userRegister } from '../controllers/userContoller.js';


router.post('/register', userRegister);
router.post('/login', userLogin);


export default router;