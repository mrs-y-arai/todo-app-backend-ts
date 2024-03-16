import dotenv from "dotenv";
import mongoose from "mongoose";

// DBの接続情報の取得
dotenv.config();
const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL ?? "";

/**
 * mongoDBに接続
 */
export const connectDB = async (): Promise<void> => {
  if (!DB_CONNECTION_URL) return;
  await mongoose.connect(DB_CONNECTION_URL);
};
