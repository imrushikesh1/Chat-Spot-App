import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSlidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute,getUsersForSlidebar)

export default router;