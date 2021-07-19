const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    FirstName : {
        type:String,
        required:true
    },
    LastName : {
        type:String,
        required:true
    },
    Phone : {
        type:String,
        required:true,
        unique:true
    },
    Email : {
        type:String,
        required:true,
        unique:true
    },
    Age : {
        type:Number,
        required:true,
    },
    Gender : {
        type:String,
        required:true,
    },
    Comments : {
        type:String,
        required:true,
    }
})

const Feedback = new mongoose.model("Raspreetdata" , feedbackSchema);

module.exports = Feedback;