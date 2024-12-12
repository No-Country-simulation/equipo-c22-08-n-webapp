import { Router } from "express";
import {deleteItem,getItem,getItems,postItem,updateItem} from "../controllers/mascota.js";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
