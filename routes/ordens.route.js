import express from "express";
import OrdensController from "../controllers/ordens.controller.js";
import { autorizarAdmin, autorizarUser } from "../utils/autenticar.js";

const router = express.Router();

// ordens
router.post("/", autorizarAdmin(), OrdensController.createOrdens);
router.get("/", OrdensController.getAllOrdens);
router.get("/:id", OrdensController.getOrdensById);
router.delete("/:id", autorizarAdmin(), OrdensController.deleteOrdens);
router.put("/", autorizarAdmin(), OrdensController.updateOrdens);

export default router;
