import express from "express";
import { connectDB } from "./database/MongoDBConnection";
import { router } from "./routes/tasks";
const app = express();
app.use(express.json());

app.use("/api/v1/tasks", router);

const PORT = 8080;

const listenServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("サーバーが起動したよ:", PORT);
    });
  } catch (err) {
    console.log("サーバー起動に失敗したよ", err);
  }
};

// サーバーをlistenにする
await listenServer();
