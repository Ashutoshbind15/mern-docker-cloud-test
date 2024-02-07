import express from "express";
import dotenv from "dotenv";
import corsConfig from "./config/corsConfig.js";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors(corsConfig));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Hello from server!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
