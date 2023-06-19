import express from "express";
import { login, logout, register } from "../controllers/authcontroller.js";
const router = express.Router();

router.post("/register", register);
router.post("/register", login);
router.post("/register", logout);

export default router;
