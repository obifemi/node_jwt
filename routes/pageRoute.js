import express from "express";
const router = express.Router(); 

//importing controllers
import { getIndexPage, getAboutPage } from "../controllers/pageController.js";

//routes
router.get('/', getIndexPage);
router.get('/about', getAboutPage);

export default router;