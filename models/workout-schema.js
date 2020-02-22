const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
      
        type: {
            type: String
    },
        name: {
            type: String,
            trim: true
        },

        duration: {
            type: Number
        },

        weight: {
            type: Number
        },

        reps: { 
        type: Number
        },

        sets: {
        type: Number
        }, 

        distance: {
         type: Number
        }
    }]
});


const workout = mongoose.model("workout", WorkoutSchema);

module.exports = workout;
