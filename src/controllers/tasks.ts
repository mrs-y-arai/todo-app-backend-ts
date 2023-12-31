import { Request, Response } from "express";
import { TaskSchema } from "../models/Task.js";
import { model } from "mongoose";

const Task = model("Task", TaskSchema);

/**
 * タスクを全て取得する
 */
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json(allTasks);
  } catch (err) {
    res.status(400).json({ message: `タスク取得失敗 ${err}` });
  }
};

/**
 * タスクの新規登録
 */
export const postTask = async (req: Request, res: Response) => {
  try {
    await Task.create({ name: req.body.name, isCompleted: false });
    res.status(200).json({ message: "タスクを新規作成しました。" });
  } catch (err) {
    res.status(400).json({ message: `タスク新規作成失敗 ${err}` });
  }
};

/**
 * タスクを1件取得する
 */
export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task)
      res.status(404).json({ message: "タスクが見つかりませんでした。" });

    res.status(200).json({
      message: `ID: ${req.params.id}のタスクを取得しました。タスク名: ${task?.name}`,
    });
  } catch (err) {
    res.status(400).json({ message: `タスク取得失敗 ${err}` });
  }
};

/**
 * タスク更新処理
 */
export const updateTask = async (req: Request, res: Response) => {
  try {
    const result = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!result)
      res.status(404).json({ message: "タスクが見つかりませんでした。" });

    res.status(200).json({
      message: `ID: ${req.params.id}のタスクを更新しました。更新後の名前: ${req.body.name}`,
    });
  } catch (err) {
    res.status(400).json({ message: `タスク更新失敗 ${err}` });
  }
};

/**
 * タスクの削除処理
 */
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);

    if (!result)
      res.status(404).json({ message: "タスクが見つかりませんでした。" });

    res
      .status(200)
      .json({ message: `ID: ${req.params.id}のタスクを削除しました。` });
  } catch (err) {
    res.status(400).json({ message: `タスク削除失敗 ${err}` });
  }
};
