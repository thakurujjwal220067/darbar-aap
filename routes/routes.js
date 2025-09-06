import express from "express";
import { webhookrun } from "../controllers/controller.js";

const router = express.Router();

router.get('/get', webhookrun);

export default router;  // <-- ye missing tha
