import { Router } from "express";

import itemRouter from "./router/itemRouter";
import userRouter from "./router/userRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/items", itemRouter);

export default router;
