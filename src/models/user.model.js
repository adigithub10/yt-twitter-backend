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

export const User = mongoose.model("User", userSchema);
