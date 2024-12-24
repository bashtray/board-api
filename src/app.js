import express from "express";

const port = 5000;

// initialize express
const app = express()

// create a route

app.get("/", (req, res) => {
    res.send("Hello world")
})

// listen to port

app.listen(port,  () => {
    console.log(`Server is running on port ${port}`);
})