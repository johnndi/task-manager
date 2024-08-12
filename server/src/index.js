import express from "express";
import trouter from "./routes/task.router.js";
import { config } from "dotenv";  // You need to import config

config();  // Call config to load environment variables

const app = express();
app.use(express.json());
app.use("/task", trouter);

app.listen(3005, () => {
    console.log("Server is running on port 3005");
});
