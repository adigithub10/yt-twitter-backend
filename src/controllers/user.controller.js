import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler";
import {User} from "../models/user.model.js";
import{uploadonCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
//defining a method to register a user

const registerUser = asyncHandler(async(res ,req) =>{
  
    const {fullname , email , username , password} = req.body
console.log("email:", email);

//checking validation
// if(fullname == ""){
//     throw new ApiError(400 , "Fullname is required!")
// }
//this is traditional method we do not follw this one

if(
    [fullname , email , username , password].some((field) =>
          field?.trim() ==="")
    ){
        throw  new ApiError(400 , "All fields are required!")

    }

    //check if user does not exists already
    const existedUser = User.findOne(
        {
            $or:[{username} , {email}]

    })
    if(existedUser){
        throw new ApiError(409 , "User with email or username already exists!!")
    }
    //checking for images
    const avatarLocalpath = req.files?.avatar [0]?.path;
       req.files.coverImageLocalPath = req.files?.coverImage[0]?.path;
       //checking avatr is there or not
       if(!avatarLocalpath){
        throw new Error(400 ,"Avatar file is required!!");
        
    }

    //uploading pic on cloudinary
    const avatar = await uploadonCloudinary(avatarLocalpath);
    const coverImage = await uploadonCloudinary(coverImageLocalpath);

    //check if it is uploaded or not properly
    if(!avatar){
        throw new Error(400 , "Avatar file is req!!");
        
    }
    //only user interacts with the database
    const user = await User.create({
         fullname,
         avatar:avatar.url,
         coverImage : coverImage?.url || " ",
         email,
         password,
         username


    })
//check whether valid user is created or not
const createduser = await User.findById(user._id).select(
    "-password -refreshToken"
    //- sign indicates we dont want those fields
)
if(!createduser){
    throw new Error( 500 ,"Something went wrong while registering the user");
    
}
return res.status(201).json(
    new ApiResponse(200 , createduser, "user registered successfully")

)
})


//

export {registerUser,}