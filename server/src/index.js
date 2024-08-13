import express from "express";
import trouter from "./routes/task.router.js";
import { config } from "dotenv"; 
import Cors from "cors"


const app = express();
config();  

app.use(Cors({
    origin:"http://localhost:5173",
    methods:["POST", "GET" ,"UPDATE" ,"DELETE"]
    }
))
app.use(express.json());

app.use(express.urlencoded({extended:true}))
app.use("/task", trouter);

app.listen(3005, () => {
    console.log("Server is running on port 3005");
});
