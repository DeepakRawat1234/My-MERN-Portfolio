import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    jobRole: {
      type: String,
      trim: true,
    },

    title: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    bio: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    profilePic: [String],

    

    resume: {
      type: String,
    },

    github: {
      type: String,
    },

    linkedin: {
      type: String,
    },

    portfolio: {
      type: String,
    },

    twitter: {
      type: String,
    },

    instagram: {
      type: String,
    },

    skills: [String],

    experience: {
      type: String,
    },

    education: [
      {
         degree: String,

         institute: String,
description:String,
         score: String,

         startYear: String,

         endYear: String,
      }
   ]


    
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);