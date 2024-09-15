import mongoose from "mongoose";
import { DB_NAME } from "./constants";
//importing express app










/*import express from "express";
const app = express()
//connecting database
( async () =>{
    //always use try catch method for connecting database
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERR:" , error);
            throw error
        })

      app.listen(process.env.PORT , ()=>{
        console.log(`App is listening on port ${PORT}`)
      })


    } catch (error) {
        console.error("ERROR" , error);
        throw err
    }

})()*/