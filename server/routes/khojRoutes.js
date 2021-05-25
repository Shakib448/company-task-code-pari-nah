import express from "express";
import { khoj } from "../controllers/khojControllers.js";

const router = express.Router();

router.post("/", khoj);

export default router;
