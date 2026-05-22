import express from 'express';
const router = express.Router();
import  {Certificates,UpdateCertificate,deleteCertificate} from '../controllers/certificateController.js';

router.get("/",Certificates);
router.post("/update-certificates",UpdateCertificate);
router.delete("/delete-certificate",deleteCertificate);

export default router;