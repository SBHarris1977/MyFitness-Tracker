const router = require("express").Router();
const Workout = require("../models/workout-schema");
const path = require("path");

//exports.index = function(req, res) {
 //   Workout.find({}, function(err, docs) {
 //       if(!err) {
//            res.json(400, { workouts: docs});
  //      } else {
  //          res.json(500, { message: err});
   //     }
  //  });
//}



router.post("/api/workouts", ({ body }, res) => {
    console.log("hello")
    Workout.create(body)
        .then(dbWorkout => {
        res.json(dbWorkout);
        
    })
    .catch(err => {
res.status(400).json(err);

    });
});

router.get("/api/workouts", (req, res) => {
    console.log("latest workout")
    Workout.find({})
    .sort({ date: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
});
router.get("/excercise", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/excercise.html"));
});

router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

router.put("/api/workouts/:id", (req, res) => {
Workout.update({_id: req.params.id}, { $set: { workout: req.body }})
})

module.exports = router;