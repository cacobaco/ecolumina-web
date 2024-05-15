import { Router } from "express";
import HomeController from "./controllers/web/HomeController";
import StatsController from "./controllers/web/StatsController";
import ArduinoController from "./controllers/api/ArduinoController";

const router = Router();

router.get("/", HomeController.get);
router.post("/", HomeController.post);
router.get("/stats", StatsController.get);

router.get("/api/arduinos/:id", ArduinoController.get);
router.post("/api/arduinos/:id", ArduinoController.post);

export default router;
