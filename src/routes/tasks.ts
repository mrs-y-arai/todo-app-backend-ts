import { Router } from "express";
import {
  getAllTasks,
  postTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks";

export const router = Router();

router.get("/", getAllTasks);
router.post("/", postTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
