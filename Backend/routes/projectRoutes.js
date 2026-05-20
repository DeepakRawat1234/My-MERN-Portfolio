import express from 'express';
const router = express.Router();
import  {Projects} from '../controllers/projectController.js';
import  {ProjectById} from '../controllers/projectController.js';
router.get("/",Projects);
router.get("/:id",ProjectById)

export default router;