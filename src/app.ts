import express from "express";
import cors from "cors";
import { connectDB } from "./database/libs/MongoDBConnection.js";
import { router } from "./routes/tasks.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200,
};

app.use(express.json(), cors(corsOptions));

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
