import dotenv from "dotenv";
import { MongoClient, Collection, ObjectId } from "mongodb";

// DBの接続情報の取得
dotenv.config();
const DB_CONNECTION_URL = process.env.DB_CONN_STRING ?? "";

export const connectDB = async () => {
  if (!DB_CONNECTION_URL) return;

  const client = new MongoClient(DB_CONNECTION_URL);

  // DBに接続
  await client.connect();
};
