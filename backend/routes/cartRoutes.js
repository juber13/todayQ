import express from 'express'

const router = express.Router();

import { transactionDetail } from "../controllers/cartController.js";

router.post('/saveDetail', transactionDetail)


export default router;