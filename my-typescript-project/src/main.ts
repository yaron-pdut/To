// This is the entry point of the application. 
// You can add your main logic, functions, or classes here.

import express from "express";

const app = express();
const port = 3000;

// Simple GET controller
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express + TypeScript!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});