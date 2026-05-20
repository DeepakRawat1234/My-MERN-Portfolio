import express from 'express';
const router = express.Router();
import { MyData, Skills } from '../controllers/authController.js';

router.get("/get-data",MyData);
router.get("/get-skills" ,Skills)
export default router;