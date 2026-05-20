import express from 'express';
const router = express.Router();
import  Certificates from '../controllers/certificateController.js';

router.get("/",Certificates);

export default router;