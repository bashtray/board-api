import express from "express";

import taskRouter from "./routes/task.js";

const port = 5000;

// initialize express
const app = express()

// create a route

// app.get("/", (req, res) => {
//     res.send("Hello world")
// })

app.use("/tasks", taskRouter);

// listen to port

app.listen(port,  () => {
    console.log(`Server is running on port ${port}`);
})