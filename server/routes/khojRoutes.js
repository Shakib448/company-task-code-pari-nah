import express from "express";
import { khojs } from "../controllers/khojControllers.js";

const router = express.Router();

router.post("/", khojs);

export default router;
