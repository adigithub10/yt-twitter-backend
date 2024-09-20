import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
//paginate is installed for this schema
const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary url
      required: true,
    },

    thumbnail: {
      type: String, //cloudinary url
      required: true,
    },
    title: { type: String, required: true },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, //it is  extracted from cloudinary itself
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Bool,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
