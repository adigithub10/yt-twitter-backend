import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

//when user hits /user it is redireted to this this page through app.js
//i.e /user=>app.js+>userRouter
router.route("/register").post(registerUser)


export default router;