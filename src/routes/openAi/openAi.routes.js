import { Router } from "express";
import { Configuration, OpenAIApi } from "openai";
import { ENV_CONFIG_PROCESS } from "../../config.js";

// Configuration OpenAi
const configuration = new Configuration({
    apiKey: ENV_CONFIG_PROCESS.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

// Config Router
const router = Router();

router.post("/", async (req, res, next) => {
    try {
    const { prompt } = req.body;
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
    });
    const image_url = response.data.data[0].url;
    res.status(200).json({
        success: true,
        data: image_url
    });
    } 
    catch (error) {
        next(error);
    }
});

export default router;
