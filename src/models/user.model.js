import mongoose, { Schema } from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt";
//imported bcrypt for encrypting password

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //to store image in form of string from cloudinary url
      required: true,
    },
    coverImage: {
      type: String,
      //storing cloudinary url
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is  required!!"],
    },
    refreshToken: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

//using mongoose hook=>pre : used to execute function before savind data
userSchema.pre("save" , async function(next) {
  //set of rules to use pre hook
  //1)use of async function(next)

   if(!this.isModified("password")) return next();
 this.password = bcrypt.hash(this.password , 10)
  next()
})
///adding custom method
userSchema.met.ispasscorrect = async function
(password){
  return awaitmbcrypt.compare(password , this.password)
}
userSchema.methods.generateAccessToken = function(){
  jwt.sign(
    {
      _id : this._id,
      email : this.email,
      username : this.username,
      fullname : this.fullname

    },
    process.env.ACCESS_TOKEN_SECRET,{
      expiresIn :process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
userSchema.methods.generateRefreshToken = function(){}
export const User = mongoose.model("User", userSchema);
