import dotenv from 'dotenv';

dotenv.config();

export const ENV_CONFIG_PROCESS = {
    OPENAI_KEY: process.env.OPENAI_KEY,
    PORT: process.env.PORT
}