import express from 'express';
import * as photoController from '../controllers/photoController.js';

const router = express.Router();


//routes
router.route('/')
.post(photoController.createPhoto)
.get(photoController.getPhotos)
 


export default router;