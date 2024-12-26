import express from "express";
import dotenv from 'dotenv'
import { run_db } from "./config/db.config.js";
import taskRouter from "./routes/task.js";

dotenv.config()

const port = process.env.PORT;

// initialize express
const app = express()

// routes
app.use("/tasks", taskRouter);

// listen to port

app.listen(port,  () => {
	run_db()
	console.log(`Server is running on port ${port}`);
})