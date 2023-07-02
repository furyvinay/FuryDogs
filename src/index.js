import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user.js";
import { dogsRouter } from "./routes/dogs.js";

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/dogs", dogsRouter);

mongoose.connect("mongodb+srv://vinay:Vinay2557@cluster0.4cww1ws.mongodb.net/dogs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
