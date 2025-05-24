import express from "express";
import cors from "cors";
import router from "./routes/swignoRoutes.js";
import {
  handleLogin,
  handleReserve1,
  handleReserve2,
  handleSignup,
} from "./controller/SwigoController.js";
import connectdb from "./config/db.js";
const app = express();

//middleware
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//mongdb
connectdb();

//routes

app.use("/", router);


//listening
app.listen(3000, () => {
  console.log("runnig");
});
