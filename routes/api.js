const router = require("express").Router();
const Workout = require("../models/workout-schema.js");
var path = require("path");

router.get("/api/workouts", (req, res) => {
  Workout.find({}, (err, data) => {
    if (err) throw err;
    else {
      res.send(data);
    }
  });
});

router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.post("/api/workouts", (req, res) => {
  console.log(res);
  Workout.create({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  console.log("latest workout");
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "..//public//index.html"));
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.updateOne(
    { _id: req.params.id },
    { $set: { exercises: req.body } },
    (error, data) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(data);
        res.send(data);
      }
    }
  );
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
