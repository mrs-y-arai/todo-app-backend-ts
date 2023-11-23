import { Schema } from "mongoose";

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
