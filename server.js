import express from 'express.js';
import dotenv from 'dotenv';
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Test route 
app.get("/", (req,res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));