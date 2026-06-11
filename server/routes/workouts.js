import { Router } from "express";
import { Workout } from "../models/Workout.js";

const router = Router();

const VALID_TYPES = ["run", "walk", "cycling"];
const VALID_UNITS = ["miles", "kilometers"];

function validateWorkoutBody(body) {
  const errors = [];

  if (!VALID_TYPES.includes(body.type)) {
    errors.push('type must be one of: run, walk, cycling');
  }

  const distance = Number(body.distance);
  if (Number.isNaN(distance) || distance < 0) {
    errors.push("distance must be a non-negative number");
  }

  if (!VALID_UNITS.includes(body.unit)) {
    errors.push('unit must be one of: miles, kilometers');
  }

  const date = new Date(body.date);
  if (Number.isNaN(date.getTime())) {
    errors.push("date must be a valid date");
  }

  return { errors, distance, date };
}

// GET /api/workouts — return all workouts, newest first
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ date: -1 });
    res.json(workouts);
  } catch (error) {
    console.error("Failed to fetch workouts:", error);
    res.status(500).json({ message: "Failed to fetch workouts" });
  }
});

// POST /api/workouts — create a new workout
router.post("/", async (req, res) => {
  const { errors, distance, date } = validateWorkoutBody(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ message: "Validation failed", errors });
  }

  try {
    const workout = await Workout.create({
      type: req.body.type,
      distance,
      unit: req.body.unit,
      date,
    });

    res.status(201).json(workout);
  } catch (error) {
    console.error("Failed to create workout:", error);
    res.status(500).json({ message: "Failed to create workout" });
  }
});

export default router;
