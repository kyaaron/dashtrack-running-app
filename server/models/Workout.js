import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["run", "walk", "cycling"],
    },
    distance: {
      type: Number,
      required: true,
      min: 0,
    },
    unit: {
      type: String,
      required: true,
      enum: ["miles", "kilometers"],
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Third argument matches the collection name in MongoDB Atlas
export const Workout = mongoose.model("Workout", workoutSchema, "workout_collection");
