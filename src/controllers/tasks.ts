import { Request, Response } from "express";
import { TaskSchema } from "../models/Task";
import { model } from "mongoose";

const Task = model("Task", TaskSchema);

export const getAllTasks = (req: Request, res: Response) => {
  console.log("req", req);
  res.status(200).send("タスクを全て取得しました。");
};

// 失敗した時の処理をやる
export const postTask = async (req: Request, res: Response) => {
  // console.log("req", req);
  await Task.create({ name: req.query.name, isCompleted: false });
  res.status(200).send(`タスクを新規作成しました。${req.query.name}`);
};

export const getTask = (req: Request, res: Response) => {
  console.log("req.params", req.params);
  res.status(200).send(`ID: ${req.params.id}のタスクを取得しました。`);
};

export const updateTask = (req: Request, res: Response) => {
  console.log("req.params", req.params);
  res.status(200).send(`ID: ${req.params.id}のタスクを更新しました。`);
};

export const deleteTask = (req: Request, res: Response) => {
  console.log("req.params", req.params);
  res.status(200).send(`ID: ${req.params.id}のタスクを削除しました。`);
};
