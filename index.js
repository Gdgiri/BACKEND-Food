import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoDB } from "./Database/config.js";
import router from "./Routers/cateringRouter.js";
//import router from "./Routers/userRouter.js";

dotenv.config();

//Middleware
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000", // Update this with the frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Add all methods you want to allow
    allowedHeaders: ["Content-Type", "Authorization"], // Add any headers you want to allow
  })
);

// error handler

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

//DB connectivity
MongoDB();

// access the .env
const port = process.env.PORT || 4000;
const message = process.env.MESSAGE || "Hello, World!";

//default routes

app.get("/", (req, res) => {
  res.status(200).send(message);
});

//API Routes

app.use("/api/catering", router);

// Listen
app.listen(port, () => {
  console.log(`Server is running`);
});
