import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

// Set up backend first with bodyParser and CORS
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// Next set up MondoDB Atlas: https://www.mongodb.com/cloud/atlas

const CONNECTION_URL =
  "mongodb+srv://jansyb04:FyqLb41as1fDqg5W@cluster0.gq9b3iv.mongodb.net/?retryWrites=true&w=majority"; // TODO: secure!
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
