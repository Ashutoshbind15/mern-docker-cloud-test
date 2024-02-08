import express from "express";
import dotenv from "dotenv";
import corsConfig from "./config/corsConfig.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Error: ", error.message);
    process.exit(1);
  }
};

app.use(cors(corsConfig));
connectDB();

const todoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Hello from server!" });
});

app.get("/api/todos", async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

app.get("/api/createdummytodo", async (req, res) => {
  const todo = new Todo({
    title: "Dummy Todo",
    completed: false,
  });
  await todo.save();
  res.status(201).json(todo);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
