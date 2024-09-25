import express from "express";
import { createFood, getFood } from "../Controllers/cateringController.js";

const router = express.Router();

router.post("/create", createFood);
router.get("/get", getFood);

export default router;
