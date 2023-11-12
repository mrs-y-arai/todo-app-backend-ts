import express from "express";
import { connectDB } from "./database/MongoDBConnection";
const app = express();

const tasksRoute = require("./routes/tasks");
app.use("/api/v1/tasks", tasksRoute);

const PORT = 8080;

// サーバーをlistenにする
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("サーバーが起動したよ:", PORT);
  });
});
