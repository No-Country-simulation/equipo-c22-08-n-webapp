import { Router } from "express";
import { updateSolicitud,createSolicitud, getSolicitudes, getSolicitud } from "../controllers/solicitud.js";

const router = Router();

router.post("/", createSolicitud);
router.get("/", getSolicitudes); 
router.get("/:id", getSolicitud); 
router.put("/:id", updateSolicitud);


export { router };