import { router } from "express";

import { transactionDetail } from "../controllers/cartController";

router.post('/saveDetail', transactionDetail)


export default router;