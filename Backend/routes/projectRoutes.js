import express from 'express';
const router = express.Router();
import  {Projects} from '../controllers/projectController.js';
import  {ProjectById,UpdateProject,deleteProject} from '../controllers/projectController.js';
router.get("/",Projects);
router.get("/:id",ProjectById)
router.post("/update-projects",UpdateProject);
router.delete("/delete-project",deleteProject);

export default router;