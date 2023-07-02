import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user.js";
import { dogsRouter } from "./routes/dogs.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/dogs", dogsRouter);


mongoose.connect(
  "mongodb+srv://vinay:Vinay2557@cluster0.4cww1ws.mongodb.net/dogs",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server started at port 3001"));