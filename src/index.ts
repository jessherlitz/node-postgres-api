import dotenv from 'dotenv';
dotenv.config();

import express, { type Request, type Response } from 'express';
import userRoutes from './routes/userRoutes'

const app = express();
const PORT = process.env.PORT || 3333

app.use(express.json());
app.use(userRoutes)

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`))

