import express from 'express'


import { addContent , allContents } from '../controllers/contentController.js';
const router = express.Router();


router.post('/upload', addContent)
router.get('/contents', allContents)


export default router;