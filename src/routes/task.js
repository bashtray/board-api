import express from "express";

const tasks = express.Router({
    // mergeParams: true    
});

tasks.get("/", (req, res) => {
    res.status(200).json({tasks: {0: "Task 1"}})
})

tasks.post("/add-task", (req, res) => {
    res.status(200).json({message: "Task added"})
})

tasks.put("/update-task:id", (req, res) => {
    res.status(200).json({message: "Task updated"})
})

tasks.delete("/delete-task:id", (req, res) => {
    res.status(200).json({message: "Task deleted"})
})

export default tasks;