import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(userRoutes);
app.use(postRoutes);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));

