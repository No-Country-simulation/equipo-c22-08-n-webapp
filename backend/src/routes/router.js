import { Router } from "express";
import {
    infoUser,
    login,
    register,
} from "../controllers/controllers.js";

const router = Router();

// Rutas de autenticación
router.post("/register", register);
router.post("/login", login);

// Rutas protegidas
router.get("/protected", infoUser);

export default router;
