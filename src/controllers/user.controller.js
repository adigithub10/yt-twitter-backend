import { asyncHandler } from "../utils/asyncHandler";

//defining a method to register a user

const registerUser = asyncHandler(async(res ,req) =>{
    res.status(200).json({
        message:"ok"
    })
})

export {registerUser}