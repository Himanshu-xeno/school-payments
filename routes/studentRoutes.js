import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addStudent } from "../controllers/studentController.js";

const router = express.Router();

router.post("/", protect, addStudent); // protected route

export default router;
