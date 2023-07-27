import express from "express";
import authRoutes from "./routes/auth.routes";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(authRoutes);

export default app;
