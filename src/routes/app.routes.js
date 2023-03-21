import { Router } from "express";
import openAi from './openAi/openAi.routes.js'

const router = Router();
router.use('/openai', openAi);

export default router;