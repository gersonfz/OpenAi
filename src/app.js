import express from 'express';
import cors from 'cors';
import openAiRoutes from './routes/app.routes.js'

const app = express();

// Cors
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', openAiRoutes);



export default app;