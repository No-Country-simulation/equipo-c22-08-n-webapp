import { Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/user.js";

const router = Router();

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };
