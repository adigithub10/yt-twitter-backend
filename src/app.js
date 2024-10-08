import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
//setting URL parametres
app.use(express.urlencoded({extended:true , limit:
"16kb"
}))
//to store public assets eg:PDF
app.use(express.static("public"))
app.use(cookieParser())


//importing routes
import userRouter from './routes/user.routes';



//routes declaration
//we need to pass routes from middleware to import**
app.use("/api/v1/users" , userRouter)//whenever /user is hitted it will take  user to userrouter


export { app }