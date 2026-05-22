import express from 'express';
const router = express.Router();
import { MyData, Skills,updateProfile,deleteEducation,updateEducation ,addSkills,deleteSkills} from '../controllers/authController.js';

router.get("/get-data",MyData);
router.get("/get-skills" ,Skills);
router.post("/update-profile" ,updateProfile);
router.delete("/delete-education" ,deleteEducation);
router.post("/update-education" ,updateEducation);
router.post("/add-skills",addSkills);
router.delete("/delete-skills",deleteSkills);

export default router;