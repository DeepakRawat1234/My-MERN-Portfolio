import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
      trim: true,
    },

    slug: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      default: "",
    },

    fullDescription: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "",
    },

    // Single string bhi chalega
    // Array bhi chalega
    techStack: {
      type: mongoose.Schema.Types.Mixed,
      default: [],
    },

    features: {
      type: mongoose.Schema.Types.Mixed,
      default: [],
    },

    githubLink: {
      type: String,
      default: "",
    },

    liveLink: {
      type: String,
      default: "",
    },

    videoDemo: {
      type: String,
      default: "",
    },

    thumbnail: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    searchableText: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);