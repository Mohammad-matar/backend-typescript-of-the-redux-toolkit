import { Router } from "express";
import { createGame, getALlGames } from "../controllers/gameController";

const router: Router = Router();

router.get("/", getALlGames);
router.post("/game", createGame);

export default router;
