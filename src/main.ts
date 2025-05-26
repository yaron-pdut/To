// This is the entry point of the application. 
// You can add your main logic, functions, or classes here.

import express from "express";

export const app = express();
const port = 3000;

// Simple GET controller
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express + TypeScript!" });
});

// Add /greet endpoint for testing
app.get('/greet', (req, res) => {
  const name = req.query.Name;
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.send('Hello, stranger!');
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}