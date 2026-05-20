
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },

    shortDescription: {
      type: String,
      required: true,
    },

    fullDescription: {
      type: String,
    },

    category: {
      type: String,
      enum: ["Full Stack", "Frontend", "Backend", "MERN", "UI/UX"],
      default: "Full Stack",
    },

    techStack: [
      {
        type: String,
      },
    ],

    features: [String],

    githubLink: String,

    liveLink: String,

    videoDemo: String,

    thumbnail: String,

    

    status: {
      type: String,
      enum: ["Completed", "In Progress"],
      default: "Completed",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    searchableText: String,

  
  },
  { timestamps: true }
);





export default mongoose.model("Project", projectSchema);