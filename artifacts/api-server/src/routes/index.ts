import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import socialPreviewRouter from "./socialPreview";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(socialPreviewRouter);

export default router;
