import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    percentage: {
      type: Number,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);