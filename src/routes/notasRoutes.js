import express from "express";
import notasController from "../controllers/notasController.js";
const router = express.Router();
router.get("/", notasController.getAll);
router.get("/:id", notasController.getAllById);
router.post("/", notasController.create);
router.put("/:id", notasController.update);
router.delete("/:id", notasController.delete);
export default router;
