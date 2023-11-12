import { Request, Response } from "express";

export const getAllTasks = (req: Request, res: Response) => {
  console.log("req", req);
  res.status(200).send("タスクを全て取得しました。");
};

export const postTask = (req: Request, res: Response) => {
  console.log("req", req);
  res.status(200).send("タスクを新規作成しました。");
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
