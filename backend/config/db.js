import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";

const connectdb = () => {
  const mongoUrl = process.env.DATABASE_URL;
  mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("Database Not Connected");
    });
};

export default connectdb;
