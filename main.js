import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import getTodo from "./routes/Routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", getTodo);

app.get("/", (req, res) => {
  res.send("Hi To my API <br /> Go to getTodo");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server run at ${PORT}`);
});

mongoose.set("strictQuery", true);

mongoose.connect("mongodb+srv://firmankhoiril:bezzed135@cluster0.awe5ezn.mongodb.net/?retryWrites=true&w=majority");
