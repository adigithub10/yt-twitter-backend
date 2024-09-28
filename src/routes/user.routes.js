import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router()

//when user hits /user it is redireted to this this page through app.js
//i.e /user=>app.js+>userRouter
//we are using middle ware before posting that avatar and cover image should be uploaded before processing
router.route("/register").post(
    upload.fields([
       {
        name : "avatar",
        maxCount :1
       },
       {
        name : "coverimage",
        maxCount : 1
        
       } 
    ]),
    registerUser)


export default router;