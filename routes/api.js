const app = require("express").Router();
const Workout = require("../models/workouts.js");

app.post("/api/workouts", ({ body }, res) => {
  console.log("Creating a new workout")
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});