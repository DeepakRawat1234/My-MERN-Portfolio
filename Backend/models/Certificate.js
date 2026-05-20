import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    issuer: {
      type: String,
      required: true,
      trim: true,
    },

    short_description: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    credentialLink: {
      type: String,
      trim: true,
    },

    thumbnail: {
      type: String,
    },

    skills: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Certificate", certificateSchema);