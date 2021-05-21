import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import "colors";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan("dev"));

// Body parser
app.use(express.json());
app.use(cors());

dotenv.config();

connectDB();

// Api routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running....");
});

// Not found api
app.use(notFound);
// errorHandler
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
);
