import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/index.js";

dotenv.config();

const { PORT = 5000, MONGOOSE_DB_URI } = process.env;
const app = express();

routes(app);

mongoose.connect(
  MONGOOSE_DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) throw error;

    app.listen(PORT, () => {
      console.log(
        `\x1b[35m[server]: server is running at https://localhost:${PORT}\x1b[0m`
      );
    });
  }
);
