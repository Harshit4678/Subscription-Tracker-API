import express from "express";

import { PORT } from "./config/env.js";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subcription.routes.js";
import connectToDatabase from "./database/mangodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import WorkflowRouter from "./routes/workflow.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extented: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", WorkflowRouter);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to the Subsciption Tracker API");
});

app.listen(PORT, async () => {
  console.log(
    `Subcription Tracker API is running on port http://localhost:${PORT}`
  );

  await connectToDatabase();
});

export default app;
