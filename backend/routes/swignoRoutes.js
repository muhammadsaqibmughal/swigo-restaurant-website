import express from "express";
import { handleLogin,handleReserve1,handleReserve2,handleSignup } from "../controller/SwigoController.js";


const router=express.Router();

router.post("/reserveTable",handleReserve1);
router.post("/reserveTable2",handleReserve2);
router.post("/login",handleLogin);
router.post("/signup",handleSignup);

export default router;