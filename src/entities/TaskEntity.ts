import { Schema, model } from "mongoose";

export interface Task {
  name: string;
  isCompleted: boolean;
}

export const TaskSchema = new Schema<Task>({
  name: {
    type: String,
    required: [true, "タスク名を入力してください。"],
    trim: true,
    maxLength: [20, "タスク名は20未字以内で入力してください。"],
  },
  isCompleted: { type: Boolean, required: true, default: false },
});

const Task = model("Task", TaskSchema);

export const getAllTasks = async (): Promise<Task[]> => {
  const allTasks = await Task.find({});

  if (!allTasks) throw new Error("タスクが見つかりませんでした。");

  return allTasks;
};

export const createTask = async (name: string): Promise<void> => {
  await Task.create({ name, isCompleted: false });
};

export const getTaskById = async (id: string): Promise<Task | null> => {
  const task = await Task.findById(id);
  return task;
};

export const updateTaskById = async (id: string, task: Task) => {
  const result = await Task.findByIdAndUpdate(id, task, {
    new: true,
  });
  return result;
};

export const deleteTaskById = async (id: string) => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};
