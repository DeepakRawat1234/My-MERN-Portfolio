import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';

import cors from "cors";
const app=express();
app.use(cors());
dotenv.config();

app.use(express.json());
 await connectDB();
const PORT=process.env.PORT ;
app.use("/api",authRoutes);
app.use("/api/projects",projectRoutes);
app.use("/api/certificates",certificateRoutes)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})